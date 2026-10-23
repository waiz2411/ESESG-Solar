import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Sun, 
  Zap, 
  BatteryCharging, 
  ShieldCheck, 
  RotateCcw, 
  Play, 
  Pause, 
  AlertTriangle, 
  CheckCircle2, 
  MessageCircle, 
  Sliders, 
  Camera, 
  Maximize2,
  Clock,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

interface HotspotData {
  id: string;
  name: string;
  category: string;
  specs: string;
  benefits: string[];
  position: [number, number, number];
  color: number;
}

const HOTSPOTS: HotspotData[] = [
  {
    id: 'pv-array',
    name: 'Tier-1 N-Type TOPCon Solar PV Array',
    category: 'Generation Core',
    specs: '550W+ Bifacial Monocrystalline • 22.8% Module Efficiency • 25-Year Linear Yield Warranty',
    benefits: [
      'Engineered for high-heat KZN coastal irradiance',
      'Anti-reflective PID-resistant tempered solar glass',
      'Aerospace-grade anodized aluminum storm racking'
    ],
    position: [0.6, 2.7, 0.4],
    color: 0xf59e0b // Amber
  },
  {
    id: 'hybrid-inverter',
    name: 'Sunsynk / Deye High-Efficiency Hybrid Inverter',
    category: 'Intelligent Brain',
    specs: '5kW - 16kW Single & 3-Phase • Sub-20ms Transfer • Dual MPPT Trackers • Wi-Fi Cloud App',
    benefits: [
      'Instantaneous zero-flicker UPS changeover during load-shedding',
      'Intelligent peak-shaving and generator automatic start/stop',
      'Real-time smartphone telemetry & Eskom tariff arbitration'
    ],
    position: [-2.1, 1.2, -1.0],
    color: 0x38bdf8 // Cyan
  },
  {
    id: 'lithium-storage',
    name: 'LiFePO4 Lithium Iron Phosphate Energy Wall',
    category: 'Storage Vault',
    specs: '5.12kWh to 30kWh+ Modular Racks • 6,000+ Cycles • 95% DoD • Non-Combustible Chemistry',
    benefits: [
      'Powers geysers, fridges, aircon & home office through Stage 8',
      'Integrated active BMS balancer with CAN bus inverter sync',
      '10-Year full manufacturer performance underwrite'
    ],
    position: [-2.1, 0.5, -0.3],
    color: 0x10b981 // Emerald
  },
  {
    id: 'sans-db',
    name: 'SANS 10142-1 Distribution Board & Surge Arrestor',
    category: 'Certified Protection',
    specs: 'Class I+II Lightning Surge Arrester • Phase Balancing • Earth-Neutral Interlock • COC Sign-off',
    benefits: [
      'Official Department of Labour accredited Master Electrician COC',
      'Total insurance compliance guarantee against electrical fires',
      'Dedicated essential vs non-essential backup sub-boards'
    ],
    position: [-1.4, 1.1, -1.6],
    color: 0xa855f7 // Purple
  },
  {
    id: 'living-loads',
    name: 'Protected Essential Home & IT Circuits',
    category: 'Autonomous Load',
    specs: 'Sub-20ms Clean Pure Sine Wave • Zero equipment reboot • 100% surge-free continuous power',
    benefits: [
      'Laptops, Starlink/Fibre Wi-Fi, and CCTV remain online 24/7',
      'LED lighting and essential security beams stay permanently energized',
      'Intelligent geyser automation diverts free midday solar power'
    ],
    position: [1.2, 0.9, -0.2],
    color: 0xfbbf24 // Gold
  }
];

export const InteractiveSolar3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotData>(HOTSPOTS[0]);
  const [isRotating, setIsRotating] = useState(true);
  const [timeOfDay, setTimeOfDay] = useState<number>(12); // 6 to 20 (hours)
  const [isLoadShedding, setIsLoadShedding] = useState<boolean>(false);
  const [cameraView, setCameraView] = useState<'overview' | 'roof' | 'inverter' | 'ground'>('overview');

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const interiorLightsRef = useRef<THREE.PointLight[]>([]);
  const gridMeshRef = useRef<THREE.Mesh | null>(null);
  const hotspotMeshesRef = useRef<{ [key: string]: THREE.Mesh }>({});

  // Mouse interaction for rotation
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });

  // Calculate live dynamic metrics based on timeOfDay and load-shedding
  const sunIntensityPercent = Math.max(0, Math.sin(((timeOfDay - 6) / 14) * Math.PI) * 100);
  const liveSolarGenerationKw = Number(((sunIntensityPercent / 100) * 8.2).toFixed(1));
  const homeConsumptionKw = isLoadShedding ? 1.8 : 2.4;
  const batteryChargingKw = liveSolarGenerationKw > homeConsumptionKw 
    ? Number((liveSolarGenerationKw - homeConsumptionKw).toFixed(1)) 
    : 0;
  const batteryDischargingKw = liveSolarGenerationKw < homeConsumptionKw 
    ? Number((homeConsumptionKw - liveSolarGenerationKw).toFixed(1)) 
    : 0;

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 560;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x070b14);
    scene.fog = new THREE.FogExp2(0x070b14, 0.04);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(7.5, 6.0, 9.5);
    camera.lookAt(0, 0.8, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    rendererRef.current = renderer;
    container.replaceChildren(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const sunLight = new THREE.DirectionalLight(0xfffae0, 2.5);
    sunLight.position.set(10, 16, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // 5. Build Villa & Energy Assets Group
    const houseGroup = new THREE.Group();
    houseGroupRef.current = houseGroup;
    scene.add(houseGroup);

    // Ground platform (South African slate pavers & lawn with subtle grid)
    const groundGeo = new THREE.CylinderGeometry(6.5, 6.5, 0.3, 40);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0c1523,
      roughness: 0.85,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.15;
    ground.receiveShadow = true;
    houseGroup.add(ground);

    // Grid wire ring around platform
    const ringGeo = new THREE.RingGeometry(6.3, 6.45, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x1e293b, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.01;
    houseGroup.add(ring);

    // Main Architectural Villa Body (Modern geometric modernist villa)
    // Left Wing (Utility & Garage)
    const garageGeo = new THREE.BoxGeometry(2.4, 1.8, 3.4);
    const garageMat = new THREE.MeshStandardMaterial({
      color: 0x162235,
      roughness: 0.4,
      metalness: 0.15
    });
    const garage = new THREE.Mesh(garageGeo, garageMat);
    garage.position.set(-1.8, 0.9, 0);
    garage.castShadow = true;
    garage.receiveShadow = true;
    houseGroup.add(garage);

    // Garage flat roof with gravel texture
    const garageRoofGeo = new THREE.BoxGeometry(2.6, 0.15, 3.6);
    const garageRoofMat = new THREE.MeshStandardMaterial({ color: 0x0f1826, roughness: 0.9 });
    const garageRoof = new THREE.Mesh(garageRoofGeo, garageRoofMat);
    garageRoof.position.set(-1.8, 1.88, 0);
    houseGroup.add(garageRoof);

    // Main House Two-Story Block
    const mainBodyGeo = new THREE.BoxGeometry(3.6, 2.4, 3.8);
    const mainBodyMat = new THREE.MeshStandardMaterial({
      color: 0x1a283e,
      roughness: 0.35,
      metalness: 0.2
    });
    const mainBody = new THREE.Mesh(mainBodyGeo, mainBodyMat);
    mainBody.position.set(1.2, 1.2, 0);
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    houseGroup.add(mainBody);

    // Slanted Solar-Optimized Roof (Pitched facing North for optimal South African solar harvest)
    const roofGeo = new THREE.BoxGeometry(3.8, 0.18, 4.2);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x090f1a,
      roughness: 0.3,
      metalness: 0.6
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(1.1, 2.55, 0);
    roof.rotation.z = 0.22; // ~12 degree pitch towards north/sun
    roof.castShadow = true;
    roof.receiveShadow = true;
    houseGroup.add(roof);

    // Solar PV Panels Array (12 high-efficiency Monocrystalline modules)
    const pvPanelGroup = new THREE.Group();
    const panelGeo = new THREE.BoxGeometry(0.7, 0.04, 1.15);
    const panelFrameGeo = new THREE.BoxGeometry(0.74, 0.05, 1.19);
    const panelFrameMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    const panelCellMat = new THREE.MeshStandardMaterial({
      color: 0x07111e,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x061426,
      emissiveIntensity: 0.3
    });

    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const frame = new THREE.Mesh(panelFrameGeo, panelFrameMat);
        const cell = new THREE.Mesh(panelGeo, panelCellMat);
        cell.position.y = 0.01;
        
        const singlePanel = new THREE.Group();
        singlePanel.add(frame);
        singlePanel.add(cell);
        
        singlePanel.position.set(
          (col - 1) * 0.85,
          0.08,
          (row - 0.5) * 1.35
        );
        pvPanelGroup.add(singlePanel);
      }
    }
    pvPanelGroup.position.set(1.1, 2.65, 0);
    pvPanelGroup.rotation.z = 0.22;
    houseGroup.add(pvPanelGroup);

    // Hybrid Inverter Station (Mounted on exterior utility wall)
    const inverterBodyGeo = new THREE.BoxGeometry(0.2, 0.65, 0.45);
    const inverterMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.2,
      metalness: 0.7
    });
    const inverter = new THREE.Mesh(inverterBodyGeo, inverterMat);
    inverter.position.set(-2.0, 1.25, -1.0);
    
    // Inverter digital screen LED
    const screenGeo = new THREE.BoxGeometry(0.02, 0.18, 0.22);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(-2.11, 1.35, -1.0);
    houseGroup.add(inverter);
    houseGroup.add(screen);

    // LiFePO4 Lithium Battery Wall Modules (Mounted beneath inverter)
    const batteryRackGeo = new THREE.BoxGeometry(0.25, 0.85, 0.65);
    const batteryMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.8
    });
    const battery = new THREE.Mesh(batteryRackGeo, batteryMat);
    battery.position.set(-2.0, 0.52, -0.3);
    
    // Battery LED State-of-Charge indicators
    const batteryLedGeo = new THREE.BoxGeometry(0.02, 0.05, 0.4);
    const batteryLedMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const batteryLed = new THREE.Mesh(batteryLedGeo, batteryLedMat);
    batteryLed.position.set(-2.13, 0.72, -0.3);
    houseGroup.add(battery);
    houseGroup.add(batteryLed);

    // Architectural Modern Windows (Glass facade with interior illumination)
    const winMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.9
    });
    
    // Large ground floor living room panoramic glass
    const bigWindowGeo = new THREE.BoxGeometry(1.8, 1.2, 0.08);
    const bigWindow = new THREE.Mesh(bigWindowGeo, winMat);
    bigWindow.position.set(1.5, 0.8, 1.94);
    houseGroup.add(bigWindow);

    // Second floor bedroom glass
    const upperWindowGeo = new THREE.BoxGeometry(1.4, 0.8, 0.08);
    const upperWindow = new THREE.Mesh(upperWindowGeo, winMat);
    upperWindow.position.set(1.5, 1.85, 1.94);
    houseGroup.add(upperWindow);

    // Interior Warm Light (illuminates villa interior)
    const warmLight = new THREE.PointLight(0xffecd1, 1.5, 6);
    warmLight.position.set(1.5, 1.1, 0.5);
    houseGroup.add(warmLight);
    interiorLightsRef.current.push(warmLight);

    // Eskom Grid Utility Pole & Supply Line
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.1, 3.2, 16);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(-4.5, 1.6, 3.2);
    houseGroup.add(pole);

    const crossArmGeo = new THREE.BoxGeometry(0.1, 0.1, 1.2);
    const crossArm = new THREE.Mesh(crossArmGeo, poleMat);
    crossArm.position.set(-4.5, 2.9, 3.2);
    houseGroup.add(crossArm);

    // Grid status indicator light on utility pole
    const gridLightGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const gridLightMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const gridLight = new THREE.Mesh(gridLightGeo, gridLightMat);
    gridLight.position.set(-4.5, 3.1, 3.2);
    houseGroup.add(gridLight);
    gridMeshRef.current = gridLight;

    // Interactive 3D Hotspot Pins
    HOTSPOTS.forEach((spot) => {
      const pinGroup = new THREE.Group();
      
      // Outer pulsating ring
      const pinRingGeo = new THREE.RingGeometry(0.16, 0.22, 24);
      const pinRingMat = new THREE.MeshBasicMaterial({
        color: spot.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const pinRing = new THREE.Mesh(pinRingGeo, pinRingMat);
      pinRing.rotation.x = Math.PI / 2;
      
      // Central glowing core sphere
      const pinCoreGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const pinCoreMat = new THREE.MeshBasicMaterial({ color: spot.color });
      const pinCore = new THREE.Mesh(pinCoreGeo, pinCoreMat);
      
      pinGroup.add(pinRing);
      pinGroup.add(pinCore);
      pinGroup.position.set(...spot.position);
      
      houseGroup.add(pinGroup);
      hotspotMeshesRef.current[spot.id] = pinCore;
    });

    // 6. Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Auto rotation if enabled and not dragging
      if (isRotating && !isDraggingRef.current && houseGroupRef.current) {
        houseGroupRef.current.rotation.y += 0.0035;
      }

      // Hotspot floating animation
      HOTSPOTS.forEach((spot, idx) => {
        const pin = hotspotMeshesRef.current[spot.id];
        if (pin && pin.parent) {
          pin.parent.position.y = spot.position[1] + Math.sin(elapsed * 2.5 + idx) * 0.06;
          // Pulse the ring scale
          const ringMesh = pin.parent.children[0] as THREE.Mesh;
          if (ringMesh) {
            const scale = 1 + Math.sin(elapsed * 3 + idx) * 0.2;
            ringMesh.scale.set(scale, scale, scale);
          }
        }
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 7. Window Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 560;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      renderer.dispose();
    };
  }, []);

  // Update Sun lighting when timeOfDay changes
  useEffect(() => {
    if (!sunLightRef.current || !ambientLightRef.current || !sceneRef.current) return;
    
    // Normalize time: 6 (dawn) -> 12 (noon) -> 18 (dusk) -> 22 (night)
    const hour = timeOfDay;
    const isDay = hour >= 6 && hour <= 18;
    const progress = (hour - 6) / 12; // 0 at dawn, 0.5 at noon, 1 at dusk

    if (isDay) {
      // Calculate sun trajectory arc
      const angle = progress * Math.PI;
      const sunX = Math.cos(angle) * -12;
      const sunY = Math.sin(angle) * 16 + 2;
      const sunZ = 10;
      sunLightRef.current.position.set(sunX, sunY, sunZ);

      // Color shifts: warm golden dawn -> bright white noon -> deep amber sunset
      let lightColor = new THREE.Color(0xfffae0);
      let intensity = 2.4 * Math.sin(angle);
      
      if (hour < 8) {
        lightColor = new THREE.Color(0xff9e43); // Sunrise amber
      } else if (hour > 16) {
        lightColor = new THREE.Color(0xf59e0b); // Sunset gold
      }
      sunLightRef.current.color = lightColor;
      sunLightRef.current.intensity = Math.max(0.3, intensity);
      ambientLightRef.current.intensity = Math.max(0.4, 0.9 * Math.sin(angle));
      sceneRef.current.background = new THREE.Color(
        hour < 7 || hour > 17 ? 0x090e1a : 0x070b14
      );
    } else {
      // Night mode: moonlight
      sunLightRef.current.position.set(-6, 10, -6);
      sunLightRef.current.color = new THREE.Color(0x38bdf8);
      sunLightRef.current.intensity = 0.35;
      ambientLightRef.current.intensity = 0.25;
      sceneRef.current.background = new THREE.Color(0x04070d);
    }
  }, [timeOfDay]);

  // Update Grid indicator when Load-Shedding is toggled
  useEffect(() => {
    if (!gridMeshRef.current) return;
    const mat = gridMeshRef.current.material as THREE.MeshBasicMaterial;
    if (isLoadShedding) {
      mat.color.setHex(0xef4444); // Red: Grid failed
    } else {
      mat.color.setHex(0x10b981); // Green: Grid healthy
    }
  }, [isLoadShedding]);

  // Camera preset views
  const applyCameraView = (view: 'overview' | 'roof' | 'inverter' | 'ground') => {
    if (!cameraRef.current) return;
    setCameraView(view);
    const cam = cameraRef.current;
    
    if (view === 'overview') {
      cam.position.set(7.5, 6.0, 9.5);
      cam.lookAt(0, 0.8, 0);
    } else if (view === 'roof') {
      cam.position.set(2.5, 5.5, 4.0);
      cam.lookAt(1.1, 2.6, 0);
    } else if (view === 'inverter') {
      cam.position.set(-4.5, 2.0, 0.5);
      cam.lookAt(-2.0, 1.0, -0.6);
    } else if (view === 'ground') {
      cam.position.set(5.5, 2.2, 5.5);
      cam.lookAt(0, 1.0, 0);
    }
  };

  // Mouse drag handlers for custom orbit
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !houseGroupRef.current) return;
    const deltaX = e.clientX - prevMousePosRef.current.x;
    houseGroupRef.current.rotation.y += deltaX * 0.008;
    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section id="interactive-3d" className="relative py-20 bg-[#060a12] border-t border-b border-white/5 overflow-hidden">
      
      {/* Background glow cones */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D WebGL Villa Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Explore Your Property's <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Clean Energy Architecture
            </span>
          </h2>
          
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Rotate the 3D villa, simulate South African load-shedding outages, slide the daylight sun arc, and inspect individual Tier-1 solar components in real time.
          </p>
        </div>

        {/* 3D Visualizer Grid (Canvas & Telemetry Side-by-Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main 3D Canvas Container */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
            
            {/* Top Canvas HUD Overlay */}
            <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              
              {/* Load-shedding grid failover alert status */}
              <div className={`pointer-events-auto px-3.5 py-1.5 rounded-xl border backdrop-blur-md flex items-center gap-2 text-xs font-bold transition-all ${
                isLoadShedding 
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 shadow-lg shadow-rose-500/20 animate-pulse'
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-500/10'
              }`}>
                {isLoadShedding ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>MUNICIPAL GRID OFFLINE (STAGE 6) • ESESG HYBRID BACKUP ACTIVE</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>ESKOM GRID STABLE • BATTERY FLOAT CHARGING</span>
                  </>
                )}
              </div>

              {/* Camera Angle Quick Select */}
              <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/85 border border-white/10 backdrop-blur-md">
                <button
                  onClick={() => applyCameraView('overview')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    cameraView === 'overview' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => applyCameraView('roof')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    cameraView === 'roof' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Roof PV
                </button>
                <button
                  onClick={() => applyCameraView('inverter')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    cameraView === 'inverter' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Inverter Hub
                </button>
              </div>

            </div>

            {/* Three.js Canvas Element */}
            <div
              ref={mountRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="w-full h-[450px] sm:h-[540px] cursor-grab active:cursor-grabbing select-none"
            />

            {/* Bottom Interactive Control Deck */}
            <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-white/10 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Time of Day Sun Arc Slider */}
                <div className="md:col-span-7 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Sun Orbit & Irradiance Time:</span>
                    </span>
                    <span className="font-mono text-amber-400 font-bold text-xs bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {timeOfDay < 10 ? `0${timeOfDay}:00` : `${timeOfDay}:00`} SAST
                    </span>
                  </div>

                  <input
                    type="range"
                    min="6"
                    max="22"
                    step="1"
                    value={timeOfDay}
                    onChange={(e) => setTimeOfDay(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />

                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>06:00 Dawn</span>
                    <span>12:00 Peak Sun (8.2 kW)</span>
                    <span>18:00 Sunset</span>
                    <span>22:00 Night</span>
                  </div>
                </div>

                {/* Load Shedding Failover Switch & Rotation Button */}
                <div className="md:col-span-5 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setIsLoadShedding(!isLoadShedding)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                      isLoadShedding
                        ? 'bg-rose-500 hover:bg-rose-600 text-white border-rose-400 shadow-lg shadow-rose-500/25'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>{isLoadShedding ? 'Stage 6 Active' : 'Test Load-Shedding'}</span>
                  </button>

                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
                    title={isRotating ? 'Pause Rotation' : 'Auto Rotate'}
                  >
                    {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Side Inspector & Real-Time Telemetry Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Live Telemetry Panel */}
            <div className="p-5 rounded-3xl glass-card border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Live Microgrid Telemetry
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] text-slate-400 font-medium block">Solar Generation</span>
                  <span className="text-xl font-extrabold text-amber-400 font-['Space_Grotesk']">
                    {liveSolarGenerationKw} kW
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] text-slate-400 font-medium block">Household Load</span>
                  <span className="text-xl font-extrabold text-white font-['Space_Grotesk']">
                    {homeConsumptionKw} kW
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] text-slate-400 font-medium block">Battery Dynamic</span>
                  <span className={`text-base font-extrabold font-['Space_Grotesk'] ${
                    batteryChargingKw > 0 ? 'text-emerald-400' : 'text-cyan-400'
                  }`}>
                    {batteryChargingKw > 0 ? `+${batteryChargingKw} kW (Charging)` : `-${batteryDischargingKw} kW (Supplying)`}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] text-slate-400 font-medium block">Grid Reliance</span>
                  <span className={`text-base font-extrabold font-['Space_Grotesk'] ${
                    isLoadShedding ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {isLoadShedding ? '0% (Isolated)' : '100% Self-Sufficient'}
                  </span>
                </div>
              </div>
            </div>

            {/* Component Inspector Card */}
            <div className="p-6 rounded-3xl glass-card border border-amber-500/25 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedHotspot.category}
                </span>
                <span className="text-xs text-slate-400">Click 3D Pins to Inspect</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                {selectedHotspot.name}
              </h3>

              <p className="text-xs text-amber-300/90 font-mono bg-slate-900/80 p-2.5 rounded-xl border border-white/5 mb-4 leading-relaxed">
                {selectedHotspot.specs}
              </p>

              <div className="space-y-2 mb-6">
                {selectedHotspot.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Hotspot Switch Buttons */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHotspot(h)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all ${
                      selectedHotspot.id === h.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {h.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Direct WhatsApp Quote Button for Selected Component */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  `Hello ESESG, I am inspecting the 3D visualizer and would like detailed pricing for: ${selectedHotspot.name} (${selectedHotspot.specs}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Request Spec Quote on WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
