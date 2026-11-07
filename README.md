# Lunar Analog Finder

Find places on Earth that resemble NASA's Artemis lunar south-pole candidate regions.

Built for the NASA Space Apps Challenge 2026 (Yangon local round), challenge: *Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars*.

![screenshot](screenshot.png)

## What it does

1. Pick a lunar south-pole region: **Haworth**, **Malapert Massif**, or **Mons Mouton Plateau**
2. See its environmental profile
3. Every land cell on Earth (0.5° grid, 85,968 cells) is scored 0–100 against it
4. Explore the results:
   - global similarity heatmap
   - top 10 analog regions, rated High / Medium / Low
   - per-parameter comparison: where each site matches, and where it breaks down

## Parameters

| Parameter | Default weight |
|---|---|
| Slope | 20% |
| Terrain roughness | 20% |
| Relative elevation | 15% |
| Surface temperature | 15% |
| Albedo | 15% |

Weights can be changed with sliders in the app.

## How scoring works

- **Per parameter:** Gaussian similarity, `100 · exp(−½ · ((Earth − Moon) / scale)²)`
- **Overall:** weighted geometric mean, so one big mismatch pulls the score down
- **Two modes:**
  - *Absolute:* how close Earth gets to the Moon value
  - *Closest on Earth:* each parameter rescaled so Earth's best cell = 100
- A parameter is scored only when both Moon and Earth values exist

## Data

| Layer | Source | Status |
|---|---|---|
| Earth surface temperature | MERRA-2 surface skin temperature (M2TMNXSLV v5.12.4), 2025 mean, via NASA Giovanni | ✅ used |
| Earth terrain (slope, roughness, relief) | NASA SRTMGL30 v002 | pipeline ready, simulated in prototype |
| Earth albedo | MERRA-2 surface albedo, via Giovanni | pipeline ready, simulated in prototype |
| Moon albedo | LRO LOLA RADR Normal_Albedo (in-app importer) | ✅ importer |
| Moon terrain / temperature | LRO LOLA, LRO Diviner | prototype values |
| Basemap | NASA GIBS Blue Marble | ✅ used |

## Run locally

No build step. Open `index.html` in a browser (internet is needed for the background map only).

## Rebuild the Earth grid

```bash
pip install numpy netCDF4
python tools/build_grid.py --srtm path/to/srtm_zips \
  --tday merra2_TS.nc --albedo merra2_albedo.nc \
  --out earth_grid.js
```

## Limitations

- Earth can't match lunar gravity (≈1/6 g), vacuum, radiation, or unweathered regolith
- The 0.5° grid (~55 km) smooths out local terrain
- Lunar south-pole temperatures are far colder than anywhere on Earth

## Tech

HTML / JavaScript, Leaflet 1.9.4, Python (NumPy, netCDF4), deployed on Vercel.
