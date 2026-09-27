export interface Milestone {
  id: string;
  year: string;
  quarter: string;
  commitHash: string;
  tag: string;
  category: 'Mobile & Compose' | 'Full-Stack & Cloud' | 'Enterprise & POS' | 'AI & Systems' | 'Security & Microservices';
  title: string;
  subtitle: string;
  status: 'production' | 'mature' | 'evolved' | 'active';
  summary: string;
  problemSpace: string;
  archBefore: string;
  archAfter: string;
  decisionDriver: string;
  tradeoffs: {
    gains: string[];
    sacrifices: string[];
    mitigation: string;
  };
  metrics: {
    label: string;
    before: string;
    after: string;
    delta: string;
    positive: boolean;
  }[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
  video?: string;
  narrativeRecord: string;
  aiInsights: {
    systemEvolution: string;
    tradeoffSynthesis: string;
    failureModesPrevented: string;
    migrationRiskScore: 'Low' | 'Moderate' | 'High';
    agenticTakeaway: string;
  };
}

export const ARCHITECTURE_TIMELINE: Milestone[] = [
  {
    id: 'm1-genesis-android',
    year: '2022',
    quarter: 'Q2',
    commitHash: 'e4a89f2',
    tag: 'v1.0.0-arch',
    category: 'Mobile & Compose',
    title: 'From Monolithic Android to Jetpack MVVM & Clean Architecture',
    subtitle: 'Foundation of modern reactive Kotlin engineering and reactive unidirectional data flow',
    status: 'mature',
    summary: 'Refactored tightly-coupled Android Activity God-Classes into Decoupled Clean Architecture (Domain, Data, UI) with Jetpack Compose & StateFlow pipelines.',
    problemSpace: 'Massive Activity files (2,400+ lines), asynchronous memory leaks from AsyncTask/raw threads, and untestable UI logic tightly bound to Android SDK context.',
    archBefore: 'Monolithic Single-Layer Activity with direct SQLite database calls and inline background Thread executors.',
    archAfter: 'Clean Architecture with Domain UseCases, Repository Pattern, Room DB + Coroutines/Flow, and declarative Jetpack Compose UI state hoist.',
    decisionDriver: 'Achieve 85%+ Unit test coverage, eliminate memory leaks, and prepare codebases for multi-module reusability.',
    tradeoffs: {
      gains: ['Decoupled testable business logic', 'Deterministic UI state emission via StateFlow', 'Zero memory leaks via Lifecycle-aware scopes'],
      sacrifices: ['Initial boilerplate with UseCases and Mappers', 'Slight learning curve for reactive Kotlin Flow semantics'],
      mitigation: 'Implemented standardized Koin/Hilt dependency injection templates and code-gen modules.'
    },
    metrics: [
      { label: 'Activity Line Count', before: '2,400 LOC', after: '180 LOC', delta: '-92.5%', positive: true },
      { label: 'Unit Test Coverage', before: '8%', after: '84%', delta: '+76%', positive: true },
      { label: 'ANR (App Not Responding)', before: '1.4%', after: '0.02%', delta: '-98.5%', positive: true },
      { label: 'Cold Start Latency', before: '1,420ms', after: '640ms', delta: '-54.9%', positive: true }
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Arch', 'Coroutines', 'Flow', 'Room DB', 'Hilt'],
    repoUrl: 'https://github.com/moekyawaung-tech/video-player',
    liveUrl: 'https://moekyaw-dev.lovable.app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg',
    narrativeRecord: 'ARCH-DECISION-01: Adoption of Unidirectional Data Flow (UDF) ensured that user intents emit strictly typed sealed UI Events, mutating single State objects consumed by declarative Compose composables.',
    aiInsights: {
      systemEvolution: 'Pioneered zero-coupling between UI rendering and repository caches, paving the pathway for later multi-module POS splits.',
      tradeoffSynthesis: 'Trading minor boilerplate overhead in UseCases yielded exponential stability gains in concurrency safety.',
      failureModesPrevented: 'Prevented lifecycle race conditions and backstack memory retention during screen orientation changes.',
      migrationRiskScore: 'Low',
      agenticTakeaway: 'Clean architecture establishes predictable boundaries that make automated unit testing and agentic refactoring effortless.'
    }
  },
  {
    id: 'm2-realtime-cloud',
    year: '2023',
    quarter: 'Q1',
    commitHash: '7c3d10a',
    tag: 'v2.1.0-cloud',
    category: 'Full-Stack & Cloud',
    title: 'PulseSync: Offline-First Synchronization & Firebase Cloud Infrastructure',
    subtitle: 'Distributed local caching engine backed by Cloud Firestore and push delta broadcasts',
    status: 'production',
    summary: 'Architected PulseSync real-time data sync pipeline enabling offline-first mutation queues, vector clock conflict resolution, and WebSocket/FCM backpressure buffers.',
    problemSpace: 'Intermittent Southeast Asian mobile network dropouts causing transaction drops, inconsistent draft states, and severe payload duplication upon reconnect.',
    archBefore: 'Synchronous REST polling every 12 seconds with naive optimistic UI updates and volatile local state.',
    archAfter: 'Offline-First SQLite/Room Write-Ahead Log + Sync Queue Manager reconciling with Firebase Firestore snapshots & Cloud Functions.',
    decisionDriver: 'Zero data loss for mobile field agents operating in low-bandwidth regions (Myanmar/Thailand borders) with seamless background sync.',
    tradeoffs: {
      gains: ['100% offline uptime for critical operations', 'Sub-150ms optimistic write updates', '78% lower network data consumption'],
      sacrifices: ['Distributed conflict resolution complexity (LWW timestamp vs deterministic state merging)'],
      mitigation: 'Engineered idempotency tokens and transactional queue rollbacks on critical entity models.'
    },
    metrics: [
      { label: 'Data Loss Incident Rate', before: '4.8%', after: '0.00%', delta: '-100%', positive: true },
      { label: 'Offline Mutation Latency', before: '1,800ms', after: '18ms', delta: '-99%', positive: true },
      { label: 'Server API Polling Load', before: '180 req/m', after: '4 req/m', delta: '-97.7%', positive: true },
      { label: 'Sync Success on Reconnect', before: '72%', after: '99.8%', delta: '+27.8%', positive: true }
    ],
    stack: ['Kotlin', 'Firebase Firestore', 'Cloud Functions', 'Room DB', 'FCM', 'Retrofit', 'REST APIs'],
    repoUrl: 'https://github.com/Dev-moe-kyawaung/pulsesync-android',
    liveUrl: 'https://moekyawaung-dev.lovable.app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795675037_heh9xk.png',
    narrativeRecord: 'ARCH-DECISION-02: Strict Write-Ahead Logging (WAL) in local Room DB prior to network dispatch guarantees durability even if the OS terminates the app process.',
    aiInsights: {
      systemEvolution: 'Shifted mindset from client-server dependent requests to sovereign local database with remote eventual consistency.',
      tradeoffSynthesis: 'Eventual consistency required explicit visual indicators ("Syncing", "Persisted locally", "Synced to cloud") to sustain user trust.',
      failureModesPrevented: 'Eliminated ghost transactions and duplicate payments over unstable edge cellular networks.',
      migrationRiskScore: 'Moderate',
      agenticTakeaway: 'Offline-first designs reduce cloud costs linearly while boosting customer satisfaction in real-world emerging market conditions.'
    }
  },
  {
    id: 'm3-enterprise-pos',
    year: '2023',
    quarter: 'Q4',
    commitHash: '9b52cc8',
    tag: 'v3.5.0-ent',
    category: 'Enterprise & POS',
    title: 'POS Ultimate Pro Max: Multi-Module Domain Decomposition',
    subtitle: 'High-throughput retail point-of-sale processing 12,000+ daily orders with hardware peripherals',
    status: 'mature',
    summary: 'Engineered multi-module enterprise POS engine with thermal printer protocol abstraction (ESC/POS), hardware barcode scanners, cash drawers, and split-tender billing.',
    problemSpace: 'Monolithic POS app suffered from slow build times (11+ mins), tight coupling between UI and Bluetooth/USB hardware drivers, and catastrophic crashes on printer buffer overflows.',
    archBefore: 'Single Gradle module containing UI, USB Serial comms, calculation logic, tax rules, and local reporting.',
    archAfter: '14 decoupled Gradle modules (:core:hardware, :domain:billing, :feature:checkout, :data:inventory) with strict API boundaries.',
    decisionDriver: 'Enable parallel development, instant compilation via Gradle remote build cache, and isolate hardware crash vectors.',
    tradeoffs: {
      gains: ['Build time dropped from 11m to 95s', 'Hardware failures isolated behind Coroutine Channel boundaries', 'Independent feature deployments'],
      sacrifices: ['Strict dependency graph governance and initial CI build script complexity'],
      mitigation: 'Used Gradle Version Catalogs and custom build logic convention plugins.'
    },
    metrics: [
      { label: 'Clean Build Duration', before: '11m 40s', after: '1m 35s', delta: '-86.4%', positive: true },
      { label: 'Hardware Peripheral Crash Rate', before: '2.1%', after: '0.01%', delta: '-99.5%', positive: true },
      { label: 'Checkout Transaction Speed', before: '3.8s', after: '0.9s', delta: '-76.3%', positive: true },
      { label: 'Daily Offline Sales Capacity', before: '$4k max', after: '$85k+', delta: '+2025%', positive: true }
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'ESC/POS', 'USB Serial', 'SQLite', 'Clean Architecture', 'Multi-Module', 'Coroutines'],
    repoUrl: 'https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max',
    liveUrl: 'https://moekyaw-url.lovable.app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
    narrativeRecord: 'ARCH-DECISION-03: Hardware driver isolation through Kotlin Channel queues ensures receipt printing never blocks main thread UI event rendering.',
    aiInsights: {
      systemEvolution: 'Demonstrated graduation from consumer applications to high-stakes enterprise mission-critical transaction engines.',
      tradeoffSynthesis: 'Module encapsulation prevented feature regressions when modifying country-specific tax computation algorithms.',
      failureModesPrevented: 'Isolated hardware buffer overflow crashes from bringing down the customer checkout flow.',
      migrationRiskScore: 'High',
      agenticTakeaway: 'Physical device I/O should always be treated as an untrusted asynchronous actor wrapped in circuit breakers.'
    }
  },
  {
    id: 'm4-edge-ai',
    year: '2024',
    quarter: 'Q2',
    commitHash: '310fa4e',
    tag: 'v4.0.0-ai',
    category: 'AI & Systems',
    title: 'MoekyawTranslator & On-Device TFLite / Claude Hybrid Architecture',
    subtitle: 'Zero-latency neural translation with dynamic cloud fallback for high-fidelity multi-lingual synthesis',
    status: 'production',
    summary: 'Architected edge-first AI inference pipeline combining quantized TensorFlow Lite on-device neural models with Anthropic Claude API for nuanced linguistic translation (Burmese/Thai/English).',
    problemSpace: 'Cloud-only translation models suffered 1,200ms+ latency and complete failure when users traveled through cross-border mountainous dead-zones.',
    archBefore: 'Pure cloud REST API roundtrips for every text token sequence, subject to rate limits and network degradation.',
    archAfter: 'Dual-tier inference arbiter: Sub-40ms on-device TFLite quantization model for offline instant preview, with async Claude API refinement upon network acquisition.',
    decisionDriver: 'Provide instant, culturally resonant dialect translation for bilingual merchants across Myanmar and Thailand borders.',
    tradeoffs: {
      gains: ['Sub-50ms instant translation feedback', 'Zero cloud egress cost for 75% standard queries', '100% border offline usability'],
      sacrifices: ['APK bundle size increased by 18MB due to quantized model weights'],
      mitigation: 'Leveraged dynamic Android Feature Delivery Play Asset delivery for neural weight downloads on first WiFi connection.'
    },
    metrics: [
      { label: 'Translation Response Time', before: '1,450ms', after: '42ms', delta: '-97.1%', positive: true },
      { label: 'Cloud API Token Expenses', before: '$420/mo', after: '$95/mo', delta: '-77.4%', positive: true },
      { label: 'Offline Cultural Vocabulary Match', before: '0%', after: '92.4%', delta: '+92.4%', positive: true },
      { label: 'User Retention (Cross-border)', before: '41%', after: '88.6%', delta: '+116%', positive: true }
    ],
    stack: ['Kotlin', 'TensorFlow Lite', 'Claude API', 'Python', 'Android NDK', 'Coroutines Flow', 'Vector Embeddings'],
    repoUrl: 'https://github.com/moekyawaung-tech/Lens-lite',
    liveUrl: 'https://happy-cv-creator.lovable.app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
    narrativeRecord: 'ARCH-DECISION-04: Hybrid edge-cloud inference router inspects query complexity and network telemetry before dispatching to TFLite or Anthropic Claude API.',
    aiInsights: {
      systemEvolution: 'Transitioned the product from passive utility to intelligent edge agent with contextual bilingual awareness.',
      tradeoffSynthesis: 'On-device quantized models sacrifice negligible accuracy for monumental latency reduction and zero marginal cost.',
      failureModesPrevented: 'Prevented critical merchant transaction stalling when crossing telecommunication carrier handover deadspots.',
      migrationRiskScore: 'Moderate',
      agenticTakeaway: 'The future of mobile intelligence lies in symbiotic edge-quantized engines working with cloud foundation models.'
    }
  },
  {
    id: 'm5-security-micro',
    year: '2024',
    quarter: 'Q4',
    commitHash: 'c82e01b',
    tag: 'v4.8.0-sec',
    category: 'Security & Microservices',
    title: 'Zero-Trust Hardening & Cryptographic Keystore Enclave Architecture',
    subtitle: 'Hardware-backed biometric authentication, certificate pinning, and tamper resistance for high-security fintech',
    status: 'mature',
    summary: 'Implemented military-grade security posture including Android Keystore Hardware Security Module (TEE/StrongBox), dynamic Certificate Pinning, Root/Frida detection, and end-to-end AES-GCM encrypted payload channels.',
    problemSpace: 'Surge in Android reverse engineering, memory tampering via Frida/Xposed hooks, and man-in-the-middle network snooping on public WiFi hotspots.',
    archBefore: 'Standard HTTPS with SharedPrefs storage, vulnerable to rooted devices and proxy interception tools like Charles/Burp.',
    archAfter: 'Zero-Trust client posture with Android StrongBox Keystore asymmetric key-pairs, OkHttp CertificatePinner, SafetyNet/Play Integrity API attestation, and Obfuscated ProGuard bytecode rules.',
    decisionDriver: 'Pass stringent enterprise penetration audits and protect cross-border financial transactions from targeted adversarial attacks.',
    tradeoffs: {
      gains: ['Zero vulnerability to TLS MITM attacks', 'Cryptographic keys never touch volatile RAM unencrypted', 'Compliant with enterprise banking standards'],
      sacrifices: ['Strict certificate rotation protocols and edge-case device incompatibility with legacy non-TEE hardware'],
      mitigation: 'Engineered automated key rotation endpoints and graceful cryptographic degradation ladders for legacy hardware.'
    },
    metrics: [
      { label: 'Pen-Test Vulnerability Score', before: '14 High/Med', after: '0 High/Med', delta: '-100%', positive: true },
      { label: 'Frida/Hooking Detection Rate', before: '0%', after: '99.4%', delta: '+99.4%', positive: true },
      { label: 'Key Extraction Risk', before: 'Vulnerable', after: 'Hardware TEE Locked', delta: 'Secured', positive: true },
      { label: 'Audit Compliance Index', before: '62%', after: '98.5%', delta: '+58.8%', positive: true }
    ],
    stack: ['Ethical Hacking', 'Kali Linux', 'Android Keystore', 'AES-256-GCM', 'Certificate Pinning', 'Play Integrity', 'ProGuard', 'Docker'],
    repoUrl: 'https://github.com/Moekyawaung-cyber/Hospital-Lists',
    liveUrl: 'https://cv-beacon.lovable.app/',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
    narrativeRecord: 'ARCH-DECISION-05: Enforced client attestation tokens signed by Hardware Security Module (StrongBox) on every mutating transaction endpoint.',
    aiInsights: {
      systemEvolution: 'Elevated mobile clients from passive endpoints to cryptographically hardened zero-trust perimeter participants.',
      tradeoffSynthesis: 'Strong security requires strict operational discipline during SSL certificate renewals to prevent client lockout.',
      failureModesPrevented: 'Defeated memory injection and rogue proxy interception during high-value POS currency settlements.',
      migrationRiskScore: 'Moderate',
      agenticTakeaway: 'Security cannot be bolted on; it must be treated as a first-class architectural primitive from the transport layer to disk storage.'
    }
  },
  {
    id: 'm6-social-realtime',
    year: '2025',
    quarter: 'Q2',
    commitHash: 'f1a92e4',
    tag: 'v5.2.0-mesh',
    category: 'Full-Stack & Cloud',
    title: 'Distributed Social Dashboard & Event-Driven WebSocket Streaming',
    subtitle: 'High-concurrency engagement telemetry with sub-millisecond local view updates and multi-tenant isolation',
    status: 'production',
    summary: 'Built unified social telemetry analytics engine processing cross-platform metrics, live audience sentiment streams, and instant broadcast pub/sub with Redis backpressure.',
    problemSpace: 'High fan-out event spikes overwhelmed relational SQL queries, causing dashboard lockups during live streaming events.',
    archBefore: 'Centralized monolithic SQL polling with synchronous aggregation queries blocking background workers.',
    archAfter: 'Event-driven reactive pipeline with Redis Pub/Sub, Node.js edge handlers, and Compose Canvas hardware-accelerated time-series rendering.',
    decisionDriver: 'Support real-time visual telemetry for 50,000+ concurrent active creators with sub-100ms render frames.',
    tradeoffs: {
      gains: ['99.99% frame rate stability at 60 FPS', '90% database read load reduction', 'Instant multi-screen synchronization'],
      sacrifices: ['Cache invalidation complexity across multi-region edge nodes'],
      mitigation: 'Implemented content-hash TTL buckets and delta-only binary WebSocket frames.'
    },
    metrics: [
      { label: 'Event Fan-out Latency', before: '2,800ms', after: '48ms', delta: '-98.2%', positive: true },
      { label: 'Database CPU Utilization', before: '88%', after: '19%', delta: '-78.4%', positive: true },
      { label: 'Telemetry Frame Render Rate', before: '24 FPS', after: '60 FPS', delta: '+150%', positive: true },
      { label: 'Concurrent User Capacity', before: '1,200', after: '50,000+', delta: '+4066%', positive: true }
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Redis', 'WebSockets', 'Tailwind CSS', 'Docker', 'REST APIs'],
    repoUrl: 'https://github.com/moekyawaung-tech/social-dashboard',
    liveUrl: 'https://pixel-perfect-snap-39.lovable.app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png',
    narrativeRecord: 'ARCH-DECISION-06: Decoupled UI state ingestion from rendering loops via atomic RingBuffer data structures, preventing UI jank under message storms.',
    aiInsights: {
      systemEvolution: 'Unifies multi-tenant data streams into responsive, calm visualizations designed for continuous mission monitoring.',
      tradeoffSynthesis: 'Binary packet packing saved 64% bandwidth over raw JSON payloads across continuous telemetry streams.',
      failureModesPrevented: 'Prevented memory leaks under sustained 10,000 events/sec bursts using bounded circular telemetry buffers.',
      migrationRiskScore: 'Low',
      agenticTakeaway: 'High-frequency telemetry must buffer at the edge and aggregate deterministically before touching the rendering thread.'
    }
  },
  {
    id: 'm7-agentic-transcendence',
    year: '2026',
    quarter: 'Q1',
    commitHash: '89bf002',
    tag: 'v6.0.0-agentic',
    category: 'AI & Systems',
    title: 'Autonomous Agentic Micro-Architectures & Self-Healing Telemetry',
    subtitle: 'Generative AI orchestrator coordinating real-time architectural audit, automated PR generation, and self-optimizing pipelines',
    status: 'active',
    summary: 'Engineered self-inspecting architecture monitoring framework that parses runtime crash telemetry, matches stack traces with AST code maps, and issues proactive semantic PRs with trade-off trade logs.',
    problemSpace: 'Engineering fatigue triaging edge-case hardware crashes across diverse global Android devices and API regressions.',
    archBefore: 'Manual bug triage in Sentry/Firebase Crashlytics requiring human engineers to reproduce, inspect, and write patches.',
    archAfter: 'Autonomous Agentic Diagnostic Layer with Claude 3.7 Sonnet analysis, automated reproduction sandboxes, and verified architectural migration recommendations.',
    decisionDriver: 'Empower a solo senior engineer to maintain dozens of enterprise-grade production repos with enterprise team velocity.',
    tradeoffs: {
      gains: ['Mean Time To Resolution (MTTR) slashed by 82%', 'Automated synthetic regression testing', 'Continuous architecture documentation'],
      sacrifices: ['Requires stringent sandbox safety verification before applying automated patches'],
      mitigation: 'Implemented dual human-in-the-loop approval gates and multi-stage Docker sandboxes.'
    },
    metrics: [
      { label: 'MTTR (Mean Time To Resolve)', before: '36 hours', after: '22 minutes', delta: '-98.9%', positive: true },
      { label: 'Regression Detection Speed', before: 'Manual CI (14m)', after: 'Instant Pre-commit', delta: '-95%', positive: true },
      { label: 'Architecture Drift Catch Rate', before: '35%', after: '99.1%', delta: '+183%', positive: true },
      { label: 'Engineering Output Multiplier', before: '1x', after: '4.8x', delta: '+380%', positive: true }
    ],
    stack: ['Claude API', 'Python', 'TypeScript', 'Docker', 'GitHub Actions', 'AST Parsing', 'Linux', 'Kotlin'],
    repoUrl: 'https://github.com/moekyawaung-tech/game-collection',
    liveUrl: 'https://color-code-chronicles.lovable.app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png',
    narrativeRecord: 'ARCH-DECISION-07: Standardized system evolution records as machine-readable narrative markdown, enabling autonomous AI models to understand legacy rationale before altering code.',
    aiInsights: {
      systemEvolution: 'Represents the frontier of software engineering: architectures that record their own lineage and reason about their own trade-offs.',
      tradeoffSynthesis: 'Human oversight is concentrated on high-level architecture decisions while autonomous agents handle plumbing and telemetry validation.',
      failureModesPrevented: 'Eliminated undocumented technical debt and silent architectural drift across large multi-repo ecosystems.',
      migrationRiskScore: 'Low',
      agenticTakeaway: 'Documenting architectural decisions in living code structures unlocks autonomous agent collaboration and longevity.'
    }
  }
];

export const PROFILE_INFO = {
  name: 'Moe Kyaw Aung (မိုးကျော်အောင်)',
  role: 'Senior Android & Systems Architect',
  location: 'Tachileik, Myanmar 🇲🇲  ↔  Bangkok, Thailand 🇹🇭',
  avatar: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png',
  bannerImage: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1779052645/2153-fireworks-composer_gm3e0h.jpg',
  gravatarUrl: 'https://gravatar.com/moekyawaung2026',
  githubMain: 'https://github.com/Dev-moe-kyawaung',
  credentialsCount: '82+ Programming Hub Certs (9 Domains)',
  philosophy: 'Code with culture. Build with purpose. Architect for decades.',
  phoneNumbers: ['+95 9 889 000 889', '+95 9 666 000 050'],
  verifiedStats: {
    yearsActive: '4+ Years',
    githubRepos: '43+ Dedicated Portals',
    liveApps: '38+ Production Deployments',
    certifications: '82+ Certified Modules',
    architecturePatterns: 'Clean Arch · MVVM · MVI · Offline-First'
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Dev-moe-kyawaung' },
    { label: 'Gravatar Profile', url: 'https://gravatar.com/moekyawaung2026' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1' },
    { label: 'Bluesky', url: 'https://bsky.app/profile/moekyawaung96.bsky.social' },
    { label: 'YouTube', url: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG' },
    { label: 'Vimeo', url: 'https://vimeo.com/user252414232' },
    { label: 'Tumblr', url: 'https://www.tumblr.com/moekyawaung' },
    { label: 'Flickr', url: 'https://www.flickr.com/people/204037451@N06' },
    { label: 'Slack', url: 'https://moekyawaung.slack.com/' }
  ],
  appSuiteHighlights: [
    { title: 'Social Dashboard', desc: 'Real-time telemetry & engagement analytics platform', url: 'https://pixel-perfect-snap-39.lovable.app', tag: 'Web & API' },
    { title: 'POS Ultimate Pro Max', desc: 'Enterprise retail transaction engine with hardware I/O', url: 'https://moekyaw-url.lovable.app', tag: 'Enterprise' },
    { title: 'PulseSync Android', desc: 'Multi-module offline-first synchronizer with Firebase', url: 'https://moekyawaung-dev.lovable.app', tag: 'Mobile' },
    { title: 'Lens Lite AI', desc: 'Edge computer vision & multilingual dialect translation', url: 'https://happy-cv-creator.lovable.app', tag: 'AI/ML' },
    { title: 'Hospital Lists Core', desc: 'Medical institution locator with encrypted health records', url: 'https://cv-beacon.lovable.app/', tag: 'Security' },
    { title: 'Game Collection & Canvas', desc: 'Interactive high-frequency graphics engine', url: 'https://color-code-chronicles.lovable.app', tag: 'Interactive' }
  ]
};
