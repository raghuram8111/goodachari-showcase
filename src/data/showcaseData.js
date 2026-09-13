// Technical & Showcase Data for Godachari Land Intelligence System (SIH 2026)

export const PROJECT_INFO = {
  name: "GODACHARI",
  title: "AI-Powered Land Intelligence and Monitoring System",
  tagline: "Transforming multi-temporal satellite imagery into actionable land-change intelligence.",
  description:
    "Godachari is designed to continuously identify significant land changes, associate them with affected parcels, and assist authorities in verification and decisive action.",
  eventBadge: "SIH 2026 • Prototype Showcase",
  prototypeNotice:
    "The website is a Prototype & Technical Showcase detailing our working proof-of-concept, architecture, and roadmap toward the complete government-scale solution.",
};

export const PROBLEM_POINTS = [
  {
    id: "construction",
    title: "New Construction & Encroachment",
    desc: "Unplanned structural development, illegal construction footprints, or encroachment onto public, agricultural, or forest lands often remain unnoticed for months.",
    icon: "Building2",
    tag: "Physical Development",
  },
  {
    id: "vegetation",
    title: "Vegetation to Bare Land Conversion",
    desc: "Rapid clearing of green cover, tree felling, and soil stripping alter land-use profiles and signal unauthorized conversion or preparation for construction.",
    icon: "Trees",
    tag: "Ecological Shift",
  },
  {
    id: "zoning",
    title: "Unauthorized Land-Use Changes",
    desc: "Conversion of protected agricultural, wetland, or residential land for industrial or commercial purposes without statutory approvals.",
    icon: "FileWarning",
    tag: "Statutory Violation",
  },
  {
    id: "acquisition",
    title: "Acquisition & Right-of-Way Shifts",
    desc: "Changes within designated corridor rights-of-way (highways, rail, utilities) or government acquisition parcels requiring proactive monitoring.",
    icon: "ShieldAlert",
    tag: "Asset Protection",
  },
];

export const MANUAL_VS_AUTOMATED = {
  traditional: [
    "Relies on intermittent manual field visits across vast jurisdictions",
    "Detection often occurs months or years after unauthorized work starts",
    "High personnel costs and reactive enforcement based on delayed complaints",
    "Limited historical paper trail and subjective observational reports",
  ],
  automated: [
    "Continuous multi-temporal Earth observation satellite passes",
    "Automated change detection flags altered zones with coordinates",
    "Focuses officer attention on high-confidence priority anomalies",
    "Audit-ready spatial evidence trail with before/after spectral signatures",
  ],
};

export const FINAL_SOLUTION_CONCEPT_STEPS = [
  { step: 1, name: "Satellite Imagery", desc: "Multi-spectral optical & SAR passes" },
  { step: 2, name: "Multi-Temporal Comparison", desc: "Temporal baseline normalization" },
  { step: 3, name: "Automatic Change Detection", desc: "AI / Multi-band reflectance analysis" },
  { step: 4, name: "Affected Parcel Identification", desc: "Cadastral polygon intersection" },
  { step: 5, name: "Land Records / Land-Use", desc: "Owner, category & survey attributes" },
  { step: 6, name: "Approval / Zoning Verification", desc: "Master plan & permit cross-check" },
  { step: 7, name: "Risk / Suspicion Assessment", desc: "Automated scoring of anomaly severity" },
  { step: 8, name: "Authority Alert", desc: "Geo-targeted escalation to jurisdictional queue" },
  { step: 9, name: "Human Verification & Action", desc: "Field officer review, notice, or legal action" },
];

export const PROTOTYPE_METRICS = [
  { label: "Data Sources", value: "Sentinel-2 & Landsat", detail: "Multi-spectral optical 10m-30m" },
  { label: "Spatial Scope", value: "Demonstration AOI", detail: "Targeted proof-of-concept zones" },
  { label: "Core Processing", value: "Rule-Based Spectral + PostGIS", detail: "Automated change polygon extraction" },
  { label: "Verification Layer", value: "High-Res Basemap", detail: "Esri world imagery inspection" },
];

export const PROTOTYPE_WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Before Satellite Image",
    summary: "Captures baseline Earth observation data for the designated Area of Interest (AOI) from period T1.",
    technicalDetail: "Multi-band surface reflectance optical data calibrated for atmospheric interference, establishing the baseline radiometric signature.",
    inputs: "Sentinel-2 / Landsat L2A Surface Reflectance (T1)",
    output: "Calibrated T1 baseline raster cube",
    statusBadge: "Implemented",
  },
  {
    number: "02",
    title: "After Satellite Image",
    summary: "Acquires recent satellite observations over the identical AOI at period T2.",
    technicalDetail: "Co-registered with the T1 baseline scene ensuring sub-pixel spatial alignment and radiometric normalization.",
    inputs: "Sentinel-2 / Landsat L2A Surface Reflectance (T2)",
    output: "Normalized T2 comparison raster cube",
    statusBadge: "Implemented",
  },
  {
    number: "03",
    title: "Multi-Band Change Detection",
    summary: "Computes differential spectral indices across key bands (Red, NIR, SWIR).",
    technicalDetail: "Calculates spectral difference matrices (e.g., NDVI differentials for vegetation drop, NDBI for built-up increase, brightness shifts).",
    inputs: "T1 & T2 Multi-band reflectance arrays",
    output: "Continuous change magnitude raster",
    statusBadge: "Implemented",
  },
  {
    number: "04",
    title: "AOI / Geospatial Filtering",
    summary: "Restricts analysis strictly within predefined jurisdictional or administrative boundary polygons.",
    technicalDetail: "Applies vector mask clipping and eliminates atmospheric artifacts, cloud edge shadows, and irrelevant boundary zones using spatial operators.",
    inputs: "Change raster + AOI vector polygon",
    output: "Masked & filtered change grid",
    statusBadge: "Implemented",
  },
  {
    number: "05",
    title: "Changed-Zone Identification",
    summary: "Clusters contiguous altered pixels into discrete vector change polygons.",
    technicalDetail: "Thresholding and morphological opening/closing filter out speckle noise, followed by polygonization into discrete candidate zones with centroid coordinates.",
    inputs: "Filtered threshold grid",
    output: "Vector geometry polygons (GeoJSON/WKT)",
    statusBadge: "Implemented",
  },
  {
    number: "06",
    title: "Rule-Based Spectral Classification",
    summary: "Categorizes the detected change into predefined change profiles based on spectral index deltas.",
    technicalDetail: "Evaluates sign and magnitude of index transitions (e.g. vegetation loss -> bare soil, bare soil -> synthetic high-reflectance roof or pavement).",
    inputs: "Spectral delta vectors per polygon",
    output: "Classified change type & severity tag",
    statusBadge: "Implemented",
  },
  {
    number: "07",
    title: "High-Resolution Verification",
    summary: "Integrates higher-resolution optical imagery for detailed visual cross-examination.",
    technicalDetail: "Overlays detected change vector contours onto sub-meter Esri satellite basemaps to visually inspect ground features.",
    inputs: "Change polygon + High-res Esri tile service",
    output: "Visual context inspection view",
    statusBadge: "Implemented",
  },
  {
    number: "08",
    title: "Investigator Review",
    summary: "Authorized officer reviews the side-by-side evidence, spectral charts, and spatial overlay.",
    technicalDetail: "Provides interactive map inspection, temporal slider, coordinate readout, and evidence notes for the assigned case file.",
    inputs: "Case dossier & spatial telemetry",
    output: "Investigator audit log",
    statusBadge: "Implemented",
  },
  {
    number: "09",
    title: "Decision & State Allocation",
    summary: "Final determination categorized into one of three definitive operational states.",
    technicalDetail: "The case status is persisted to PostGIS database with timestamp, reviewer ID, and recommendation notes.",
    inputs: "Investigator verdict",
    output: "State assignment: Confirmed | Rejected | Uncertain",
    statusBadge: "Implemented",
    isDecision: true,
  },
];

export const DECISION_STATES = [
  {
    state: "Confirmed",
    color: "emerald",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    desc: "Change verified as a genuine physical ground alteration requiring administrative record check or field escalation.",
  },
  {
    state: "Rejected",
    color: "rose",
    badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    desc: "False positive due to seasonal crop harvesting, normal soil moisture fluctuation, or acceptable cloud boundary remnant.",
  },
  {
    state: "Uncertain",
    color: "amber",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    desc: "Ambiguous optical signature requiring next-pass satellite capture or direct ground-truthing verification.",
  },
];

export const TECH_STACK = [
  {
    layer: "Frontend",
    category: "Interface & Map Client",
    description: "Lightweight, high-performance UI running native browser geospatial rendering.",
    items: [
      { name: "HTML5 & Modern CSS3", role: "Semantic layout, responsive grid & HUD styling" },
      { name: "Vanilla JavaScript (ES6+)", role: "Reactive map interactions, REST API consumption & DOM state" },
      { name: "Leaflet / Web Mapping API", role: "Vector overlay rendering, dual-pane compare & geojson layers" },
    ],
  },
  {
    layer: "Backend",
    category: "Service & API Layer",
    description: "Fast asynchronous API handling geospatial queries and case management workflows.",
    items: [
      { name: "Node.js (LTS)", role: "High-throughput asynchronous runtime environment" },
      { name: "Express.js", role: "Modular REST API routing, query parameters & middleware" },
      { name: "REST APIs", role: "Endpoints for AOI queries, change polygons, case status & reports" },
    ],
  },
  {
    layer: "Database",
    category: "Spatial Persistence Engine",
    description: "Enterprise relational database with native geographic information system extensions.",
    items: [
      { name: "PostgreSQL", role: "Relational persistence for cases, audit logs & user metadata" },
      { name: "PostGIS Extension", role: "Spatial indexing (GIST), polygon intersections & ST_* spatial queries" },
    ],
  },
  {
    layer: "Earth Observation",
    category: "Remote Sensing Inputs",
    description: "Public satellite constellations providing consistent multi-spectral temporal revisit.",
    items: [
      { name: "Sentinel-2 (ESA Copernicus)", role: "10m-20m multi-spectral bands (B2, B3, B4, B8, B11, B12)" },
      { name: "Landsat 8/9 (USGS / NASA)", role: "30m multi-spectral comparison & historical baseline" },
    ],
  },
  {
    layer: "Geospatial Processing",
    category: "Algorithms & Analysis",
    description: "Core transformation pipeline converting raw pixel reflectances into vector geometries.",
    items: [
      { name: "Raster & Multi-Band Differencing", role: "NDVI / NDBI / Brightness index delta calculations" },
      { name: "AOI Masking & Geospatial Filtering", role: "Boundary clipping, noise suppression & thresholding" },
      { name: "Spatial Database Operations", role: "ST_Intersection, ST_Area, ST_Centroid & clustering" },
    ],
  },
  {
    layer: "Verification Layer",
    category: "Optical Reference",
    description: "Contextual high-resolution basemap services used during investigation review.",
    items: [
      { name: "Esri World Imagery Services", role: "Sub-meter optical imagery for visual feature confirmation" },
    ],
  },
];

export const SCREENSHOTS = [
  {
    id: "dashboard",
    title: "Executive Dashboard",
    file: "dashboard.png",
    path: "/assets/screenshots/dashboard.png",
    category: "Overview & Metrics",
    summary: "Central operational overview displaying monitored AOI boundaries, total change alerts, review status distribution, and recent activity log.",
    features: ["AOI selector", "Active anomaly counter", "Status distribution chart", "Quick access triage queue"],
  },
  {
    id: "change-detection",
    title: "Change Detection Workspace",
    file: "change-detection.png",
    path: "/assets/screenshots/change-detection.png",
    category: "Spectral Engine",
    summary: "Multi-temporal comparison interface showing T1 before, T2 after, and the calculated spectral differential raster overlay.",
    features: ["Split-screen compare", "Band index toggles (NDVI/NDBI)", "Threshold sensitivity slider", "Real-time raster difference"],
  },
  {
    id: "map",
    title: "Interactive Geospatial Map",
    file: "map.png",
    path: "/assets/screenshots/map.png",
    category: "Cartographic View",
    summary: "Full-screen PostGIS-backed map client rendering detected change polygons with coordinate markers and boundary extents.",
    features: ["Leaflet/Map layers", "Spatial clustering", "Coordinate HUD readout", "Polygon area calculation"],
  },
  {
    id: "detected-changes",
    title: "Detected Changes Table",
    file: "detected-changes.png",
    path: "/assets/screenshots/detected-changes.png",
    category: "Case Management",
    summary: "Structured inventory of all flagged anomalies across the AOI with timestamp, change magnitude, estimated surface area, and triage priority.",
    features: ["Sorting by change area", "Severity indicators", "Direct link to review", "GeoJSON export"],
  },
  {
    id: "alerts",
    title: "Alerts & Notifications",
    file: "alerts.png",
    path: "/assets/screenshots/alerts.png",
    category: "Operational Feed",
    summary: "Chronological notification feed alerting officers to new high-magnitude land alterations identified after satellite ingest.",
    features: ["Priority badges (High/Med/Low)", "Timestamp of satellite pass", "Quick acknowledge button", "Jurisdiction filter"],
  },
  {
    id: "investigation",
    title: "Investigation & Verification Dossier",
    file: "investigation.png",
    path: "/assets/screenshots/investigation.png",
    category: "Decision Support",
    summary: "Detailed review page where an authorized officer inspects high-resolution Esri overlay, logs findings, and assigns Confirmed/Rejected/Uncertain state.",
    features: ["High-res optical zoom", "Spectral time-series chart", "Reviewer notes field", "Decision action buttons"],
  },
  {
    id: "reports",
    title: "Investigation Reports & Export",
    file: "reports.png",
    path: "/assets/screenshots/reports.png",
    category: "Documentation",
    summary: "Automated report generation compiling spatial coordinates, before/after imagery, spectral indices, and officer decision for formal escalation.",
    features: ["PDF/Dossier generation", "Spatial metadata summary", "Audit signature block", "Print-ready formatting"],
  },
];

export const PROTOTYPE_VS_FINAL = {
  prototype: {
    title: "CURRENT PROTOTYPE",
    badge: "Implemented Proof-of-Concept",
    badgeColor: "emerald",
    points: [
      { text: "Sentinel-2 + Landsat multi-spectral data", detail: "Open optical satellite constellations (10m - 30m resolution)" },
      { text: "Demonstration Area of Interest (AOI)", detail: "Tested on selected proof-of-concept geographic zones" },
      { text: "Multi-temporal change detection", detail: "Differential reflectance algorithm between T1 and T2" },
      { text: "Geospatial AOI filtering", detail: "Vector mask clipping and spatial noise reduction" },
      { text: "Rule-based spectral classification", detail: "Index delta thresholding for vegetation vs built-up shifts" },
      { text: "High-resolution optical verification", detail: "Esri world imagery basemap overlay for inspection" },
      { text: "Human investigator workflow", detail: "Case review with Confirmed / Rejected / Uncertain decisions" },
      { text: "Alerts and case report generation", detail: "Summary exports with coordinates and spectral evidence" },
    ],
  },
  finalVision: {
    title: "FINAL VISION",
    badge: "Target Government-Scale Architecture",
    badgeColor: "cyan",
    points: [
      { text: "Official Indian Earth Observation data sources", detail: "Integration with ISRO / Bhuvan, Cartosat, and national EO repositories" },
      { text: "Continuous automated monitoring", detail: "Scheduled automated pipelines ingesting every new satellite overpass" },
      { text: "Large-scale parcel & statewide monitoring", detail: "Scaling from targeted AOIs to entire districts and state territories" },
      { text: "Automatic change detection at scale", detail: "Optimized distributed computing for millions of hectares" },
      { text: "Parcel / cadastral boundary identification", detail: "Intersecting change polygons with official revenue cadastral maps" },
      { text: "Land records integration (RoR / Bhulekh)", detail: "Connecting changes with authorized land registry databases" },
      { text: "Landholder & ownership information", detail: "Retrieval of authorized title and occupant metadata" },
      { text: "Approval & zoning compliance verification", detail: "Automated cross-check with master plans, layout approvals & zoning bylaws" },
      { text: "Suspicion & risk assessment scoring", detail: "Multi-criteria risk engine prioritizing high-probability illegal violations" },
      { text: "Authority alerts & escalation queues", detail: "Push notifications and task dispatching to district enforcement units" },
      { text: "Regional Role-Based Access Control (RBAC)", detail: "Strict administrative compartmentalization by district / taluka / ward" },
      { text: "Human verification and legal action", detail: "Statutory notice issuance, field inspection records, and court-ready exhibits" },
    ],
  },
};

export const FUTURE_INTEGRATIONS = [
  {
    title: "Official Indian Satellite Data",
    desc: "Integrate suitable government-authorized Earth observation sources (e.g., ISRO/Bhuvan platforms, Cartosat, and future Indian EO constellations) for operational sovereign deployment.",
    icon: "Satellite",
    readiness: "Architecture Planned",
  },
  {
    title: "Parcel & Cadastral Data",
    desc: "Associate detected changes with actual digital cadastral parcel boundaries and survey numbers to pinpoint exact legal properties affected.",
    icon: "MapPin",
    readiness: "Schema Ready",
  },
  {
    title: "Land Records Integration",
    desc: "Connect parcel identifiers with state land-record databases (such as RoR / Bhulekh / Bhoomi) where authorized, retrieving title and classification info.",
    icon: "Database",
    readiness: "Integration Target",
  },
  {
    title: "Approval & Zoning Data",
    desc: "Compare detected development footprints against municipal master plans, industrial corridors, building permissions, and environmental non-development zones.",
    icon: "FileCheck",
    readiness: "Rules Framework",
  },
  {
    title: "Automated Authority Alerts",
    desc: "Automatically notify the appropriate municipal or revenue authority when high-risk changes meet defined suspicion and unauthorized development criteria.",
    icon: "BellRing",
    readiness: "Queue Ready",
  },
  {
    title: "Regional RBAC Jurisdictions",
    desc: "Provide authorized officers granular access strictly limited to their assigned geographic jurisdictions (District Collectorate, Tehsildar, Municipal Ward).",
    icon: "ShieldCheck",
    readiness: "RBAC Modeled",
  },
  {
    title: "Advanced AI & Deep Models",
    desc: "Future versions will evaluate complex temporal patterns using convolutional and transformer-based remote-sensing models to detect subtle land clearing or quarrying.",
    icon: "Cpu",
    readiness: "Research Track",
  },
  {
    title: "Large-Scale Processing",
    desc: "Transition from local demonstration AOIs to continuous cloud-native distributed geospatial pipelines covering entire districts, river basins, or state borders.",
    icon: "Server",
    readiness: "Scale Architecture",
  },
];

export const IMPACT_POINTS = [
  {
    title: "Faster Land-Change Identification",
    desc: "Replaces slow periodic human surveys with rapid automated detection triggered shortly after satellite image acquisition.",
    icon: "Zap",
  },
  {
    title: "Reduced Manual Monitoring Effort",
    desc: "Eliminates random physical patrols across vast rural and peri-urban landscapes, directing boots-on-the-ground only where anomalies exist.",
    icon: "UsersCheck",
  },
  {
    title: "Evidence-Assisted Investigation",
    desc: "Equips officers with verifiable multi-temporal satellite imagery, reflectance curves, and timestamped spatial evidence for legal defense.",
    icon: "FileSearch",
  },
  {
    title: "Earlier Identification of Suspicious Work",
    desc: "Catches early ground stripping, foundation laying, or tree cutting before unauthorized multi-story structures become irreversible.",
    icon: "ClockAlert",
  },
  {
    title: "Better Use of Earth Observation",
    desc: "Translates raw petabytes of open and national satellite datasets into actionable government intelligence rather than dormant archives.",
    icon: "Globe2",
  },
  {
    title: "Scalable Monitoring Architecture",
    desc: "Modular PostGIS and API-driven design allows expanding spatial boundaries without proportional increases in surveillance staffing.",
    icon: "Maximize",
  },
  {
    title: "Improved Verification Coordination",
    desc: "Creates a structured digital feedback loop connecting automated satellite triage directly with field officer verification and action logs.",
    icon: "Workflow",
  },
];

export const REFERENCES_LIST = [
  {
    title: "ESA Copernicus Sentinel-2 User Handbook",
    category: "Earth Observation Data",
    desc: "Technical specification for Multi-Spectral Instrument (MSI) 13 spectral bands, Level-2A bottom-of-atmosphere surface reflectance processing.",
    source: "European Space Agency (ESA)",
    linkPlaceholder: "https://sentinels.copernicus.eu/web/sentinel/user-guides/sentinel-2-msi",
  },
  {
    title: "USGS / NASA Landsat 8-9 Surface Reflectance Code (LaSRC)",
    category: "Earth Observation Data",
    desc: "Atmospheric correction and surface reflectance product documentation for Landsat Operational Land Imager (OLI).",
    source: "US Geological Survey / NASA",
    linkPlaceholder: "https://www.usgs.gov/landsat-missions",
  },
  {
    title: "PostGIS Spatial Database Manual (v3.x)",
    category: "Geospatial Database",
    desc: "Documentation for spatial indexing, R-Tree / GiST indexing, spatial relationship operators (ST_Intersects, ST_Contains, ST_Area).",
    source: "PostGIS Project Team",
    linkPlaceholder: "https://postgis.net/documentation/",
  },
  {
    title: "Esri World Imagery Basemap & REST Services",
    category: "High-Resolution Optical Basemaps",
    desc: "Sub-meter high-resolution contextual imagery service used for optical verification of candidate change polygons.",
    source: "Esri ArcGIS Online Services",
    linkPlaceholder: "https://www.esri.com/en-us/arcgis/products/world-imagery",
  },
  {
    title: "Bhuvan Geo-Platform & National Land-Use Mapping Guidelines",
    category: "Government EO References",
    desc: "Indian Earth Observation multi-resolution data standards, land-use/land-cover thematic guidelines, and cadastral spatial frameworks.",
    source: "National Remote Sensing Centre (NRSC) / ISRO",
    linkPlaceholder: "https://bhuvan.nrsc.gov.in/",
  },
  {
    title: "Remote Sensing Change Detection Methodologies",
    category: "Academic & Methodological Reference",
    desc: "Comparative analysis of post-classification comparison, spectral differencing, and vector clustering for land-use monitoring.",
    source: "International Journal of Remote Sensing / IEEE JSTARS",
    linkPlaceholder: "https://ieeexplore.ieee.org/",
  },
];
