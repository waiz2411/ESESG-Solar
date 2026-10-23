# ESESG-Solar — Next-Generation 3D Solar & Intelligent Energy Architecture

Ultra-modern 3D WebGL web application engineered for **ESESG** (Electrical & Solar Energy Solutions Group), headquartered at **55A Old Main Rd, Gillitts, Hillcrest, KwaZulu-Natal, South Africa**.

---

## 🌟 Key Features

1. **Interactive 3D WebGL Solar Villa (Three.js):**
   * Real-time 3D modernist architectural cutaway villa with procedural geometry, pitched solar PV array, Sunsynk/Deye hybrid inverter station, LiFePO4 lithium battery wall, and Eskom utility connection.
   * **Time-of-Day Sun Arc Slider (06:00 to 22:00 SAST):** Adjusts directional sunlight angle, Kelvin color temperature (dawn golden glow -> noon white -> sunset amber -> midnight deep obsidian), and dynamically recalculates real-time solar yield in kW.
   * **Stage 6 Load-Shedding Simulation Switch:** Users can test an immediate municipal grid outage, watching the neighborhood grid trip red while the ESESG hybrid backup activates instantly in < 20ms with zero flicker.
   * **3D Interactive Hotspot Pins:** Hover and click to inspect solar array specs, hybrid inverters, lithium storage, and the SANS 10142-1 Distribution Board.
   * **Dynamic Camera Presets:** One-click viewpoint transitions for Overview, Roof PV, and Inverter Room.

2. **South African Eskom Savings & Load-Shedding Sizing Engine:**
   * Dynamic Eskom bill slider ranging from `R1,500/mo` to `R25,000+/mo`.
   * Outage resilience selector (Stage 2, Stage 4, Stage 6, Stage 8).
   * Property configuration toggles (Standard Home, Luxury Estate, Commercial 3-Phase).
   * Calculates recommended kWp solar array, panel quantity, hybrid inverter rating, lithium battery capacity (kWh), and projected 10-year cumulative savings factoring in NERSA tariff compounding.
   * 1-Click WhatsApp Proposal builder formatted directly for `+27 67 984 5835`.

3. **SANS 10142-1 Statutory Compliance Hub:**
   * Explains why uncertified solar installations void South African short-term home insurance claims (Santam, Hollard, Outsurance) and stall Deeds Office property transfers.
   * Details municipal SSEG (Small-Scale Embedded Generation) single-line diagrams and Master Electrician compliance sign-offs.

4. **Multi-Disciplinary Solution Grid:**
   * Residential Hybrid Solar Systems
   * LiFePO4 Lithium Storage Walls
   * Commercial & Industrial Microgrids (3-Phase)
   * SANS 10142-1 Electrical Compliance & COC Audits
   * Agricultural Solar & Borehole Pumping
   * Thermal Diagnostics & PV Health Audits

5. **Multi-Step Interactive System Configurator:**
   * 3-step property, roof, and electrical phase configurator.
   * Celebratory confetti micro-interaction upon completion.
   * Automatic structured WhatsApp dispatch with full quote parameters.

6. **Verified Local Reputation & Map Integration:**
   * Prominent **4.2 ★ Rating badge** with 12 verified Google reviews.
   * Interactive location hub anchored at 55A Old Main Rd, Gillitts / Hillcrest with 1-click Google Maps directions (`ChIJZ1O6AHn79h4RBk5uajzLpDU`).
   * Mobile-optimized floating WhatsApp quick-contact dock.

---

## 🛠️ Tech Stack

* **Framework:** React 19 + TypeScript + Vite
* **3D Engine:** Three.js / WebGL with procedural lighting, shadows, and interactive raycasting
* **Styling:** Tailwind CSS v4 with custom Obsidian & Solar Amber design tokens
* **Icons:** Lucide React
* **Micro-interactions:** Canvas Confetti

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```
