// Technical & Showcase Data for Goodachari Land Intelligence System (SIH 2026)

export const TEAM_INFO = {
  teamName: "GOODACHARI",
  teamLabel: "SIH 2026 TEAM",
  projectTitle: "AI-Powered Land Intelligence and Monitoring System",
  subtitle: "Prototype & Technical Showcase",
  tagline: "Transforming multi-temporal satellite imagery into actionable land-change intelligence.",
  description:
    "An AI-assisted geospatial system for detecting, investigating and monitoring land-use changes across time.",
  eventBadge: "SIH 2026 • Prototype Showcase",
  prototypeNotice:
    "This website is a Prototype & Technical Showcase detailing our working proof-of-concept, architecture, and roadmap toward the complete government-scale solution.",
};

export const PROJECT_INFO = TEAM_INFO;

export const PROBLEM_POINTS = [
  {
    id: "construction",
    title: "New Construction & Encroachment",
    desc: "Unplanned structural development, illegal construction footprints, or encroachment onto public, agricultural, or forest lands often remain unnoticed for months.",
    icon: "Building2",
  },
  {
    id: "vegetation",
    title: "Vegetation to Bare Land Conversion",
    desc: "Rapid clearing of green cover, tree felling, and soil stripping alter land-use profiles and signal unauthorized conversion or preparation for construction.",
    icon: "Trees",
  },
  {
    id: "zoning",
    title: "Unauthorized Land-Use Changes",
    desc: "Conversion of protected agricultural, wetland, or residential land for industrial or commercial purposes without statutory approvals.",
    icon: "FileWarning",
  },
  {
    id: "acquisition",
    title: "Acquisition & Right-of-Way Shifts",
    desc: "Changes within designated corridor rights-of-way (highways, rail, utilities) or government acquisition parcels requiring proactive monitoring.",
    icon: "ShieldAlert",
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
  { label: "Imagery Source", value: "Sentinel-2", detail: "Surface Reflectance (L2A) optical bands" },
  { label: "Evaluation AOI", value: "NBKRIST Campus", detail: "Real-world institutional demonstration area" },
  { label: "Core Processing", value: "Multi-Temporal Analysis", detail: "Automated spectral differencing & PostGIS" },
  { label: "Verification Layer", value: "High-Resolution Optical", detail: "Sub-meter basemap visual cross-check" },
];

export const NBKRIST_DEMO = {
  title: "REAL-WORLD PROTOTYPE DEMONSTRATION",
  subheading: "NBKRIST CAMPUS — AREA OF INTEREST (AOI)",
  overview:
    "The current prototype was evaluated using the NBKRIST campus as the Area of Interest (AOI). Multi-temporal Sentinel-2 imagery was analyzed to identify observed built-up changes within the campus.",
  keyFinding:
    "The prototype successfully detected and localized the observed built-up changes within the NBKRIST campus AOI.",
  humanVerificationNote:
    "Detected zones are intended for human verification before administrative action.",
  storySteps: [
    {
      phase: "01",
      title: "Input",
      subtitle: "Sentinel-2 Multi-Temporal Imagery",
      desc: "Surface reflectance optical bands calibrated for atmospheric interference across baseline and observation passes.",
      icon: "Satellite",
    },
    {
      phase: "02",
      title: "AOI",
      subtitle: "NBKRIST Campus Boundary",
      desc: "Geospatial vector boundary constraining raster differencing strictly to campus grounds.",
      icon: "MapPin",
    },
    {
      phase: "03",
      title: "Analysis",
      subtitle: "Multi-Temporal Comparison",
      desc: "Pixel-wise differential index computation (NDVI and NDBI) between baseline and observation epochs.",
      icon: "Cpu",
    },
    {
      phase: "04",
      title: "Detection",
      subtitle: "Changed Zones Identified",
      desc: "Clustering and vector polygonization of contiguous altered surface pixels.",
      icon: "Layers",
    },
    {
      phase: "05",
      title: "Classification",
      subtitle: "Spectral / Rule-Based Classification",
      desc: "Rule-based identification distinguishing vegetation loss and newly emerged impervious built-up signatures.",
      icon: "FileCheck",
    },
    {
      phase: "06",
      title: "Verification",
      subtitle: "High-Resolution Visual Verification",
      desc: "Cross-referencing detected change boundaries with high-resolution optical imagery.",
      icon: "Eye",
    },
    {
      phase: "07",
      title: "Investigation",
      subtitle: "Human Review & Case Decision",
      desc: "Human investigator reviews evidence dossier to allocate operational state and export documentation.",
      icon: "UserCheck",
    },
  ],
  sequenceCards: [
    {
      id: "nbkrist-before",
      label: "BEFORE",
      caption: "Earlier Sentinel-2 observation",
      title: "Earlier Sentinel-2 Observation",
      file: "nbkrist-before.png",
      path: "/assets/screenshots/nbkrist-before.png",
      desc: "Earlier multi-temporal Sentinel-2 observation over the NBKRIST campus establishing baseline surface reflectance.",
    },
    {
      id: "nbkrist-after",
      label: "AFTER",
      caption: "Later Sentinel-2 observation",
      title: "Later Sentinel-2 Observation",
      file: "nbkrist-after.png",
      path: "/assets/screenshots/nbkrist-after.png",
      desc: "Later multi-temporal Sentinel-2 observation over the identical NBKRIST campus AOI showing ground alteration.",
    },
    {
      id: "nbkrist-detected",
      label: "DETECTED CHANGE",
      caption: "Prototype change-detection result",
      title: "Prototype Change-Detection Result",
      file: "nbkrist-detected.png",
      path: "/assets/screenshots/nbkrist-detected.png",
      desc: "Automated change detection result segmenting contiguous altered pixels into discrete vector polygons.",
    },
    {
      id: "nbkrist-verification",
      label: "HIGH-RESOLUTION VERIFICATION",
      caption: "Visual verification of the detected area",
      title: "High-Resolution Visual Verification",
      file: "nbkrist-verification.png",
      path: "/assets/screenshots/nbkrist-verification.png",
      desc: "Contextual high-resolution optical imagery verifying newly emerged physical built-up footprints inside campus.",
    },
  ],
};

export const PROTOTYPE_WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Sentinel-2 Imagery",
    summary: "Acquires calibrated multi-spectral optical imagery over the designated Area of Interest (AOI).",
    technicalDetail: "Level-2A bottom-of-atmosphere surface reflectance optical bands (B4, B8, B11, B12) calibrated for atmospheric interference.",
    inputs: "Sentinel-2 Surface Reflectance (Baseline T1 & Observation T2)",
    output: "Calibrated multi-spectral raster scenes",
    statusBadge: "Implemented",
  },
  {
    number: "02",
    title: "Multi-temporal Comparison",
    summary: "Performs temporal baseline normalization and co-registration across observation epochs.",
    technicalDetail: "Pixel-wise radiometric alignment ensuring consistent reflectance values between temporal passes regardless of seasonal variations.",
    inputs: "Calibrated T1 & T2 raster scenes",
    output: "Normalized multi-temporal raster pair",
    statusBadge: "Implemented",
  },
  {
    number: "03",
    title: "Change Detection",
    summary: "Computes differential spectral indices to identify significant surface alterations.",
    technicalDetail: "Spectral difference algorithms evaluate shifts across vegetation (NDVI) and built-up indices (NDBI) to isolate physical ground change.",
    inputs: "Normalized reflectance arrays",
    output: "Continuous change magnitude raster",
    statusBadge: "Implemented",
  },
  {
    number: "04",
    title: "Changed-Zone Identification",
    summary: "Clips analysis to the campus AOI and clusters contiguous altered pixels into vector zones.",
    technicalDetail: "Thresholding and morphological filtering eliminate isolated noise, followed by polygonization into discrete candidate zones with centroid coordinates.",
    inputs: "Change magnitude grid + AOI boundary vector",
    output: "Vector geometry polygons (GeoJSON/WKT)",
    statusBadge: "Implemented",
  },
  {
    number: "05",
    title: "High-Resolution Verification",
    summary: "Integrates high-resolution optical imagery for visual cross-examination of flagged zones.",
    technicalDetail: "Overlays detected change vector boundaries onto sub-meter contextual imagery to inspect actual physical ground characteristics.",
    inputs: "Detected change polygon + High-res optical tiles",
    output: "Visual context inspection view",
    statusBadge: "Implemented",
  },
  {
    number: "06",
    title: "Human Verification",
    summary: "Authorized investigator reviews spatial evidence dossier and determines administrative case state.",
    technicalDetail: "Investigator examines side-by-side imagery, inspects coordinates, and assigns Confirmed, Rejected, or Uncertain determination with audit logging.",
    inputs: "Case evidence dossier & high-res overlay",
    output: "Persisted Case Verdict: Confirmed | Rejected | Uncertain",
    statusBadge: "Implemented",
    isDecision: true,
  },
];

export const TECH_STACK = [
  {
    layer: "Frontend",
    category: "User Interface & Geospatial Client",
    description: "Lightweight, responsive client running native browser geospatial rendering.",
    items: [
      { name: "HTML / CSS / Vanilla JavaScript", role: "Clean, responsive presentation and native browser map interactions" },
      { name: "Web Mapping Client (Leaflet API)", role: "Vector overlay rendering, dual-pane compare & GeoJSON layers" },
    ],
  },
  {
    layer: "Backend",
    category: "Application & API Server",
    description: "Fast asynchronous runtime handling spatial queries, case state, and image delivery.",
    items: [
      { name: "Node.js / Express", role: "REST API endpoints for AOI queries, change vectors, case status & reports" },
    ],
  },
  {
    layer: "Database",
    category: "Spatial Persistence Engine",
    description: "Relational database engine with native spatial extensions and indexing.",
    items: [
      { name: "PostgreSQL + PostGIS", role: "Spatial database persistence, GiST indexing, polygon intersections & ST_* spatial queries" },
    ],
  },
  {
    layer: "Geospatial Processing",
    category: "Analysis & Algorithms",
    description: "Algorithmic transformation converting multi-temporal reflectance into discrete change polygons.",
    items: [
      { name: "Multi-temporal satellite imagery and spatial analysis", role: "Differential spectral index computation (NDVI/NDBI), AOI clipping, and noise suppression" },
    ],
  },
  {
    layer: "Imagery",
    category: "Earth Observation Data",
    description: "Multi-spectral optical surface reflectance providing consistent temporal coverage.",
    items: [
      { name: "Sentinel-2 Surface Reflectance", role: "Level-2A 10m-20m multi-spectral optical reflectance bands for temporal comparison" },
    ],
  },
  {
    layer: "High-Resolution Verification",
    category: "Optical Reference Layer",
    description: "High-resolution contextual basemap services for visual feature inspection.",
    items: [
      { name: "Esri imagery/services where applicable", role: "Sub-meter optical imagery for visual cross-examination of detected change areas" },
    ],
  },
];

export const SCREENSHOTS = [
  {
    id: "change-detection",
    title: "Change Detection",
    caption: "Multi-temporal imagery comparison and detected change visualization.",
    file: "change-detection.png",
    path: "/assets/screenshots/change-detection.png",
    category: "Spectral Engine",
    summary: "Multi-temporal imagery comparison and detected change visualization across baseline and observation scenes.",
  },
  {
    id: "investigation",
    title: "Investigation",
    caption: "Interface for reviewing detected zones.",
    file: "investigation.png",
    path: "/assets/screenshots/investigation.png",
    category: "Decision Support",
    summary: "Interface for reviewing detected zones, inspecting coordinates, logging observations, and allocating verification state.",
  },
  {
    id: "map",
    title: "Interactive Geospatial Map",
    caption: "Geospatial map client rendering detected change polygons.",
    file: "map.png",
    path: "/assets/screenshots/map.png",
    category: "Cartographic View",
    summary: "Full-screen PostGIS-backed map client rendering detected change polygons with coordinate markers and boundary extents.",
  },
  {
    id: "dashboard",
    title: "Executive Dashboard",
    caption: "Operational overview of monitored areas and change alerts.",
    file: "dashboard.png",
    path: "/assets/screenshots/dashboard.png",
    category: "Overview & Metrics",
    summary: "Central operational overview displaying monitored AOI boundaries, total change alerts, and case status distribution.",
  },
  {
    id: "detected-changes",
    title: "Detected Changes",
    caption: "Structured inventory of identified changes across the AOI.",
    file: "detected-changes.png",
    path: "/assets/screenshots/detected-changes.png",
    category: "Case Inventory",
    summary: "Structured inventory of all flagged anomalies across the AOI with timestamp, change magnitude, and triage priority.",
  },
  {
    id: "alerts",
    title: "Alerts & Notifications",
    caption: "Notification feed for flagged changes.",
    file: "alerts.png",
    path: "/assets/screenshots/alerts.png",
    category: "Operational Feed",
    summary: "Notification feed alerting authorized officers to newly identified land alterations following satellite ingest.",
  },
  {
    id: "reports",
    title: "Investigation Reports",
    caption: "Investigation reports and case documentation.",
    file: "reports.png",
    path: "/assets/screenshots/reports.png",
    category: "Documentation Export",
    summary: "Automated report compilation assembling coordinates, before/after imagery, spectral indices, and officer determination.",
  },
];

export const PROTOTYPE_VS_FINAL = {
  prototype: {
    title: "CURRENT PROTOTYPE",
    badge: "Implemented Proof-of-Concept",
    points: [
      { text: "Sentinel-2 imagery", detail: "Surface Reflectance (L2A) multi-spectral optical bands" },
      { text: "NBKRIST campus AOI", detail: "Demonstrated and validated on the real NBKRIST campus boundary" },
      { text: "Prototype-scale processing", detail: "Automated differential spectral indexing and vector polygonization" },
      { text: "Human investigation", detail: "Evidence review dossier with Confirmed / Rejected / Uncertain determinations" },
      { text: "PostgreSQL + PostGIS", detail: "Spatial relational database for vector boundaries, geometries, and audit logs" },
    ],
  },
  finalVision: {
    title: "FINAL SYSTEM VISION",
    badge: "Proposed Future Target Architecture",
    points: [
      { text: "Target: Official / Authorized Indian Earth Observation Sources", detail: "Integration with sovereign Indian satellite data infrastructure for nationwide deployment" },
      { text: "Parcel-level monitoring", detail: "Associating detected change geometries with digital cadastral parcel boundaries" },
      { text: "Land-record integration", detail: "Connecting changes with state land registry records (e.g. RoR / Bhulekh / Bhoomi) where authorized" },
      { text: "Landholder / land-use information", detail: "Retrieval of authorized title, occupant, and statutory land classification" },
      { text: "Approval / zoning verification", detail: "Automated cross-check with master plans, layout approvals, and zoning bylaws" },
      { text: "Continuous large-scale monitoring", detail: "Cloud-native distributed pipelines monitoring vast districts and corridors continuously" },
      { text: "Automated authority alerts", detail: "Jurisdictional escalation queues dispatching high-risk cases to field units" },
      { text: "Regional role-based access", detail: "Strict administrative compartmentalization by district, taluka, and municipal ward" },
    ],
  },
};

export const FINAL_SYSTEM_WORKFLOW_STEPS = [
  {
    step: 1,
    title: "AUTHORIZED EARTH OBSERVATION DATA",
    desc: "Target: Integration with official / authorized Indian Earth observation repositories for regular sovereign coverage.",
    icon: "Satellite",
  },
  {
    step: 2,
    title: "AUTOMATED CHANGE DETECTION",
    desc: "Distributed cloud-native raster differencing algorithms detecting altered pixel clusters across full district swathes.",
    icon: "Cpu",
  },
  {
    step: 3,
    title: "PARCEL IDENTIFICATION",
    desc: "Spatial intersection with digitized revenue cadastral GIS boundary layers, pinpointing affected survey numbers.",
    icon: "MapPin",
  },
  {
    step: 4,
    title: "LAND RECORD LOOKUP",
    desc: "Automated lookup against official land registries (Bhulekh / RoR / Bhoomi) to retrieve legal status and parcel type.",
    icon: "Database",
  },
  {
    step: 5,
    title: "LAND-USE / APPROVAL CHECK",
    desc: "Cross-checks detected ground footprints against approved building plans, master plan bylaws, and environmental buffers.",
    icon: "FileCheck",
  },
  {
    step: 6,
    title: "RISK / SUSPICION ASSESSMENT",
    desc: "Multi-parameter heuristic engine scores likelihood of encroachment, illegal conversion, or unapproved development.",
    icon: "AlertTriangle",
  },
  {
    step: 7,
    title: "HUMAN VERIFICATION",
    desc: "Jurisdictional officer reviews satellite timeline, cadastral metadata, and dispatches field teams where required.",
    icon: "UserCheck",
  },
  {
    step: 8,
    title: "AUTHORITY ALERT / REPORT",
    desc: "Generation of formal notice exhibits, eviction proceedings, stoppage orders, or penalty issuance with audit logs.",
    icon: "FileText",
  },
];

export const FUTURE_INTEGRATIONS = [
  {
    title: "Target: Official / Authorized Indian EO Sources",
    desc: "Integrate suitable government-authorized Earth observation sources for operational sovereign deployment.",
    icon: "Satellite",
    readiness: "Target Architecture",
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
    desc: "Future versions will evaluate complex temporal patterns using advanced remote-sensing models to detect subtle land clearing or quarrying.",
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
  },
  {
    title: "Reduced Manual Monitoring Effort",
    desc: "Eliminates random physical patrols across vast rural and peri-urban landscapes, directing boots-on-the-ground only where anomalies exist.",
  },
  {
    title: "Evidence-Assisted Investigation",
    desc: "Equips officers with verifiable multi-temporal satellite imagery, reflectance curves, and timestamped spatial evidence for legal defense.",
  },
  {
    title: "Earlier Identification of Suspicious Work",
    desc: "Catches early ground stripping, foundation laying, or tree cutting before unauthorized multi-story structures become irreversible.",
  },
  {
    title: "Better Use of Earth Observation",
    desc: "Translates raw petabytes of open and sovereign satellite datasets into actionable government intelligence rather than dormant archives.",
  },
  {
    title: "Scalable Monitoring Architecture",
    desc: "Modular PostGIS and API-driven design allows expanding spatial boundaries without proportional increases in surveillance staffing.",
  },
  {
    title: "Improved Verification Coordination",
    desc: "Creates a structured digital feedback loop connecting automated satellite triage directly with field officer verification and action logs.",
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
    title: "PostGIS Spatial Database Manual (v3.x)",
    category: "Geospatial Database",
    desc: "Documentation for spatial indexing, R-Tree / GiST indexing, spatial relationship operators (ST_Intersects, ST_Contains, ST_Area).",
    source: "PostGIS Project Team",
    linkPlaceholder: "https://postgis.net/documentation/",
  },
  {
    title: "High-Resolution Optical Basemap Services",
    category: "Optical Reference Services",
    desc: "Sub-meter high-resolution contextual imagery service used for optical verification of candidate change polygons.",
    source: "Geospatial Tile Services",
    linkPlaceholder: "https://www.esri.com/en-us/arcgis/products/world-imagery",
  },
  {
    title: "National Land-Use Mapping Guidelines & Standards",
    category: "Sovereign Geospatial Standards",
    desc: "Multi-resolution data standards, land-use/land-cover thematic guidelines, and cadastral spatial frameworks.",
    source: "National Remote Sensing Guidelines",
    linkPlaceholder: "https://bhuvan.nrsc.gov.in/",
  },
  {
    title: "Remote Sensing Change Detection Methodologies",
    category: "Academic & Methodological Reference",
    desc: "Comparative analysis of post-classification comparison, spectral differencing, and vector clustering for land-use monitoring.",
    source: "Remote Sensing Research Literature",
    linkPlaceholder: "https://ieeexplore.ieee.org/",
  },
];
