// Lunar zone profiles. EDIT THIS FILE with real values from LOLA / Diviner (Moon Trek or PDS).
// "scored" keys must match the app: slope (deg), rough (%), relief (m), temp (deg C), albedo (0-1).
// placeholder:true shows a warning in the app. Set it to false once real values + sources are filled in.
window.MOON_ZONES = [
  {
    location: "Haworth", latitude: -87.4, longitude: -4.0, placeholder: true,
    scored: { slope: 8.5, rough: 72, relief: 1500, temp: -120, albedo: 0.20 },
    display_only: { surface_type: "Rugged crater terrain", illumination_pct: 15 },
    sources: { slope: "", rough: "", relief: "", temp: "", albedo: "" }
  },
  {
    location: "Malapert Massif", latitude: -86.0, longitude: 0.0, placeholder: true,
    scored: { slope: 12, rough: 60, relief: 2500, temp: -90, albedo: 0.22 },
    display_only: { surface_type: "Mountain massif" },
    sources: { slope: "", rough: "", relief: "", temp: "", albedo: "" }
  },
  {
    location: "Mons Mouton Plateau", latitude: -84.6, longitude: 31.0, placeholder: true,
    scored: { slope: 4, rough: 20, relief: 600, temp: -100, albedo: 0.22 },
    display_only: { surface_type: "Flat-topped plateau" },
    sources: { slope: "", rough: "", relief: "", temp: "", albedo: "" }
  }
];
