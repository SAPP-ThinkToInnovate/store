export const homeData = {
  resident: {
    name: "Elena Rostova",
    securityClearance: "Level 1 Admin",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    homeName: "Aura Oasis Obsidian"
  },
  
  systemMetrics: {
    meshStatus: "Optimal",
    activeNodes: 14,
    powerSource: "Solar Storage Arrays"
  },

  rooms: [
    {
      id: "room-1",
      name: "Cyber-Labs Workshop",
      temperature: 21,
      humidity: 42,
      lightLevel: 80,
      hvacMode: "Auto",
      isSecured: true
    },
    {
      id: "room-2",
      name: "Zen Cryo-Chamber",
      temperature: 16,
      humidity: 55,
      lightLevel: 15,
      hvacMode: "Eco",
      isSecured: true
    },
    {
      id: "room-3",
      name: "Hydro-Flora Canopy",
      temperature: 26,
      humidity: 78,
      lightLevel: 95,
      hvacMode: "Boost",
      isSecured: false
    }
  ],

  quickSwitches: [
    { id: "sw-1", label: "Quantum Mesh Firewall", active: true, zone: "Network" },
    { id: "sw-2", label: "Ambient Biometric Scanners", active: true, zone: "Perimeter Security" },
    { id: "sw-3", label: "Air Filtration Purifiers", active: false, zone: "Atmosphere" },
    { id: "sw-4", label: "Solar Battery Overload Grid", active: false, zone: "Power Allocation" }
  ]
};