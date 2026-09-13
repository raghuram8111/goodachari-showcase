# GOODACHARI (SIH 2026 Team) | AI-Powered Land Intelligence and Monitoring System
### Prototype & Technical Showcase Website

A production-quality, responsive technical showcase website by Team **Goodachari**, engineered for the **Smart India Hackathon (SIH) 2026** evaluation jury and public presentation.

---

## 🛰️ Project Overview

- **Team Name:** GOODACHARI (SIH 2026 Team)
- **Project Title:** AI-Powered Land Intelligence and Monitoring System
- **Tagline:** "Transforming multi-temporal satellite imagery into actionable land-change intelligence."
- **Scope:** Technical case study and prototype showcase explaining our working proof-of-concept, architecture, technology stack, and transparent evolution into the broader government-scale deployment.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run preview
```

---

## 📁 Asset Placement Guide

Place your actual prototype screenshots and demonstration video in `public/assets/`:

### Screenshots (`/public/assets/screenshots/`)
The website automatically loads screenshots from these paths and opens them in an interactive full-resolution lightbox modal:
- `/public/assets/screenshots/dashboard.png` — Main dashboard & AOI overview
- `/public/assets/screenshots/change-detection.png` — Multi-temporal split comparison & spectral differential
- `/public/assets/screenshots/map.png` — PostGIS GIS vector map view
- `/public/assets/screenshots/detected-changes.png` — Detected changes table & area metrics
- `/public/assets/screenshots/alerts.png` — Real-time alerts queue & priority feeds
- `/public/assets/screenshots/investigation.png` — High-resolution optical inspection & verdict selection
- `/public/assets/screenshots/reports.png` — Generated case reports & PDF dossiers

> **Resilient Fallback:** If any screenshot is missing, the site cleanly renders an engineered technical HUD wireframe placeholder without breaking page layouts.

### Demo Video (`/public/assets/demo/`)
- `/public/assets/demo/prototype-demo.mp4` — Screen recording of the prototype walkthrough with native HTML5 player controls.
> If the MP4 is not yet present, a "Prototype Demo Coming Soon" interactive teaser card is displayed.

---

## 🏛️ Website Architecture & Structure

1. **Hero / Landing:** SIH 2026 badge, core mission, decorative geospatial radar HUD, primary CTAs.
2. **The Problem:** "Why Land Monitoring Needs Intelligence" with 4 critical physical change types and manual vs automated comparison.
3. **Our Approach:** Visual workflow labeled explicitly as **"Final Solution Concept"**.
4. **Current Prototype:** "What We Built" with 12 active capabilities, frontend/backend/database stack, and prototype scope boundary disclaimer.
5. **Prototype Workflow:** Interactive 9-step pipeline with detailed explanations and 3 operational decision states (**Confirmed**, **Rejected**, **Uncertain**).
6. **Technology Stack:** Tier-by-tier breakdown (Frontend, Backend, Database, Earth Observation, Geospatial Processing, Verification) with implementation integrity note.
7. **Prototype Architecture:** 8-stage data flow diagram from raw satellite reflectance to reports.
8. **Inside the Prototype:** Responsive screenshot gallery with Lightbox inspector.
9. **Prototype Demonstration:** 16:9 video player with controls and fallback state.
10. **Prototype vs Final System:** Strategic side-by-side comparison table clearly distinguishing prototype baseline from sovereign scale.
11. **Final System Workflow:** 12-stage government-scale automated workflow (zero manual analyst bottleneck).
12. **Future Integrations:** 8 roadmap cards (Indian EO data, cadastral polygons, land records, zoning bylaws, automated alerts, regional RBAC, advanced AI, large-scale processing).
13. **Role-Based Access Control (RBAC):** Hierarchical governance tree for **ADMIN** and **AUTHORIZED OFFICER**.
14. **Potential Impact:** 7 realistic engineering benefits grounded in spatial automation (no fake marketing metrics).
15. **References:** Citations for Copernicus Sentinel-2, PostGIS, Esri World Imagery, and ISRO Bhuvan.
16. **Navigation & Controls:** Sticky navbar, mobile menu drawer, and floating Back-to-Top button.

---

## 🌐 Public Deployment

This Vite project is ready for one-click deployment:
- **Vercel:** Run `vercel` or link your GitHub repository.
- **Netlify:** Run `netlify deploy --prod --dir=dist`.
- **Cloudflare Pages:** Build command `npm run build`, output directory `dist`.
