export interface CertificateItem {
  id: string;
  name: string;
  category: string;
  date: string;
  verifyId: string;
  skills: string[];
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  // 1. Programming Languages (13)
  { id: 'c-lang', name: 'C Programming', category: 'Programming Languages', date: 'Jul 4, 2024', verifyId: '1720080366600', skills: ['Memory Management', 'Pointers', 'Data Structures'] },
  { id: 'cpp-lang', name: 'C++ Modern Programming', category: 'Programming Languages', date: 'Jul 10, 2024', verifyId: '1720612450100', skills: ['OOP', 'Templates', 'STL', 'RAII'] },
  { id: 'csharp-lang', name: 'C# Masterclass', category: 'Programming Languages', date: 'Jun 22, 2024', verifyId: '1719053321400', skills: ['.NET', 'LINQ', 'Async/Await'] },
  { id: 'java-lang', name: 'Java Enterprise Edition', category: 'Programming Languages', date: 'Jun 15, 2024', verifyId: '1718449012300', skills: ['JVM Internals', 'Multithreading', 'Spring Boot'] },
  { id: 'kotlin-lang', name: 'Kotlin Advanced Architecture', category: 'Programming Languages', date: 'May 28, 2024', verifyId: '1716892345600', skills: ['Coroutines', 'Flow', 'Clean Arch', 'Sealed Interfaces'] },
  { id: 'python-lang', name: 'Python Core & Scripting', category: 'Programming Languages', date: 'May 12, 2024', verifyId: '1715509823100', skills: ['Data Analysis', 'Automation', 'Decorators'] },
  { id: 'js-lang', name: 'JavaScript Deep Dive (ES6+)', category: 'Programming Languages', date: 'Apr 30, 2024', verifyId: '1714472190400', skills: ['Event Loop', 'Closures', 'Promises'] },
  { id: 'ts-lang', name: 'TypeScript Strict Engineering', category: 'Programming Languages', date: 'Apr 18, 2024', verifyId: '1713435678200', skills: ['Generics', 'Type Guards', 'Utility Types'] },
  { id: 'rust-lang', name: 'Rust Systems Programming', category: 'Programming Languages', date: 'Mar 24, 2024', verifyId: '1711278910000', skills: ['Borrow Checker', 'Concurrency', 'Zero-Cost Abstractions'] },
  { id: 'go-lang', name: 'Go (Golang) Microservices', category: 'Programming Languages', date: 'Mar 08, 2024', verifyId: '1709896745100', skills: ['Goroutines', 'Channels', 'gRPC'] },
  { id: 'ruby-lang', name: 'Ruby Core Programming', category: 'Programming Languages', date: 'Feb 19, 2024', verifyId: '1708341982500', skills: ['Metaprogramming', 'OOP', 'Gems'] },
  { id: 'dart-lang', name: 'Dart Language Mastery', category: 'Programming Languages', date: 'Feb 02, 2024', verifyId: '1706873491200', skills: ['Async Streams', 'Isolates', 'Strong Typing'] },
  { id: 'swift-lang', name: 'Swift Fundamentals', category: 'Programming Languages', date: 'Jan 16, 2024', verifyId: '1705404987300', skills: ['Protocols', 'Optionals', 'ARC'] },

  // 2. Web Development (13)
  { id: 'html5-css3', name: 'HTML5 & Modern Responsive CSS', category: 'Web Development', date: 'Jul 14, 2024', verifyId: '1720958432100', skills: ['Semantic HTML', 'CSS Grid', 'Flexbox'] },
  { id: 'tailwind-css', name: 'Tailwind CSS UI Architecture', category: 'Web Development', date: 'Jun 28, 2024', verifyId: '1719570198400', skills: ['Utility Classes', 'Design Tokens', 'PurgeCSS'] },
  { id: 'react-dev', name: 'React 19 & Modern Hooks', category: 'Web Development', date: 'Jun 05, 2024', verifyId: '1717583490200', skills: ['Custom Hooks', 'Suspense', 'Server Components'] },
  { id: 'nextjs-dev', name: 'Next.js Full-Stack App Router', category: 'Web Development', date: 'May 20, 2024', verifyId: '1716201948500', skills: ['SSR', 'ISR', 'API Routes', 'Edge Runtime'] },
  { id: 'vuejs-dev', name: 'Vue.js 3 & Composition API', category: 'Web Development', date: 'May 04, 2024', verifyId: '1714819034200', skills: ['Pinia', 'Reactivity', 'Teleport'] },
  { id: 'angular-dev', name: 'Angular Enterprise Framework', category: 'Web Development', date: 'Apr 22, 2024', verifyId: '1713781290300', skills: ['RxJS', 'Dependency Injection', 'Directives'] },
  { id: 'nodejs-core', name: 'Node.js Backend Architecture', category: 'Web Development', date: 'Apr 06, 2024', verifyId: '1712398471900', skills: ['Event Loop', 'Buffers', 'Stream API'] },
  { id: 'expressjs', name: 'Express.js RESTful API Design', category: 'Web Development', date: 'Mar 18, 2024', verifyId: '1710756782300', skills: ['Middleware', 'JWT Authentication', 'Validation'] },
  { id: 'graphql-dev', name: 'GraphQL Query & Schema Design', category: 'Web Development', date: 'Mar 01, 2024', verifyId: '1709288390400', skills: ['Resolvers', 'Mutations', 'Apollo Federation'] },
  { id: 'websockets-eng', name: 'Real-Time WebSockets & Socket.io', category: 'Web Development', date: 'Feb 14, 2024', verifyId: '1707906781200', skills: ['Bidirectional Comms', 'Heartbeats', 'Presence'] },
  { id: 'web-perf', name: 'Web Performance & Core Web Vitals', category: 'Web Development', date: 'Jan 28, 2024', verifyId: '1706438490100', skills: ['LCP', 'CLS', 'FID/INP', 'Tree Shaking'] },
  { id: 'pwa-mastery', name: 'Progressive Web Apps (PWA)', category: 'Web Development', date: 'Jan 10, 2024', verifyId: '1704883290400', skills: ['Service Workers', 'IndexedDB', 'Cache API'] },
  { id: 'web-sec', name: 'Web Security & OWASP Top 10', category: 'Web Development', date: 'Dec 22, 2023', verifyId: '1703241690500', skills: ['XSS', 'CSRF', 'CORS', 'CSP Headers'] },

  // 3. Mobile & App Dev (7)
  { id: 'android-native', name: 'Android Studio & SDK Deep Dive', category: 'Mobile & App Dev', date: 'Jul 01, 2024', verifyId: '1719820890100', skills: ['Activities', 'Fragments', 'Services', 'Broadcasters'] },
  { id: 'jetpack-compose', name: 'Jetpack Compose Declarative UI', category: 'Mobile & App Dev', date: 'Jun 18, 2024', verifyId: '1718707290200', skills: ['State Hoisting', 'Recomposition', 'Custom Modifiers'] },
  { id: 'android-arch', name: 'Android MVVM & Clean Architecture', category: 'Mobile & App Dev', date: 'May 30, 2024', verifyId: '1717065690300', skills: ['ViewModel', 'LiveData', 'Flow', 'Domain Layer'] },
  { id: 'flutter-dev', name: 'Flutter Cross-Platform Mastery', category: 'Mobile & App Dev', date: 'May 10, 2024', verifyId: '1715337690400', skills: ['Bloc State Management', 'Widgets', 'Method Channels'] },
  { id: 'react-native', name: 'React Native Mobile Applications', category: 'Mobile & App Dev', date: 'Apr 14, 2024', verifyId: '1713091290500', skills: ['Bridge Architecture', 'Metro Bundler', 'Native Modules'] },
  { id: 'ios-dev', name: 'iOS Swift & SwiftUI Core', category: 'Mobile & App Dev', date: 'Mar 20, 2024', verifyId: '1710931290600', skills: ['SwiftUI', 'Combine', 'Xcode Instruments'] },
  { id: 'mobile-testing', name: 'Mobile Unit & Espresso Testing', category: 'Mobile & App Dev', date: 'Feb 26, 2024', verifyId: '1708944090700', skills: ['JUnit 5', 'MockK', 'Espresso UI Tests'] },

  // 4. Databases (6)
  { id: 'sql-db', name: 'SQL Query Optimization & Schemas', category: 'Databases', date: 'Jul 08, 2024', verifyId: '1720425690100', skills: ['Indexes', 'Joins', 'Query Execution Plans'] },
  { id: 'postgres-db', name: 'PostgreSQL Advanced Administration', category: 'Databases', date: 'Jun 12, 2024', verifyId: '1718188890200', skills: ['ACID Transactions', 'JSONB', 'Partitioning'] },
  { id: 'mongodb-db', name: 'MongoDB NoSQL Document Store', category: 'Databases', date: 'May 22, 2024', verifyId: '1716374490300', skills: ['Aggregation Pipelines', 'Sharding', 'Replica Sets'] },
  { id: 'redis-db', name: 'Redis In-Memory Caching & Pub/Sub', category: 'Databases', date: 'Apr 28, 2024', verifyId: '1714300890400', skills: ['Key Eviction', 'Streams', 'Distributed Locks'] },
  { id: 'firebase-firestore', name: 'Firebase Firestore & Realtime DB', category: 'Databases', date: 'Apr 02, 2024', verifyId: '1712054490500', skills: ['Security Rules', 'Compound Queries', 'Offline Caching'] },
  { id: 'sqlite-room', name: 'SQLite & Android Room Persistence', category: 'Databases', date: 'Mar 14, 2024', verifyId: '1710412890600', skills: ['DAO Patterns', 'Migrations', 'TypeConverters'] },

  // 5. AI & Data Science (11)
  { id: 'machine-learning', name: 'Machine Learning Foundations', category: 'AI & Data Science', date: 'Jul 12, 2024', verifyId: '1720771290100', skills: ['Supervised Learning', 'Linear Models', 'Gradient Descent'] },
  { id: 'deep-learning', name: 'Deep Learning & Neural Networks', category: 'AI & Data Science', date: 'Jun 25, 2024', verifyId: '1719312090200', skills: ['Backpropagation', 'Activation Functions', 'CNNs'] },
  { id: 'tensorflow-lite', name: 'TensorFlow Lite for Mobile & Edge', category: 'AI & Data Science', date: 'Jun 08, 2024', verifyId: '1717843290300', skills: ['Quantization', 'Model Pruning', 'Android NDK'] },
  { id: 'nlp-ai', name: 'Natural Language Processing (NLP)', category: 'AI & Data Science', date: 'May 25, 2024', verifyId: '1716633690400', skills: ['Tokenization', 'TF-IDF', 'Word Embeddings'] },
  { id: 'computer-vision', name: 'Computer Vision & OpenCV', category: 'AI & Data Science', date: 'May 08, 2024', verifyId: '1715164890500', skills: ['Image Classification', 'Edge Detection', 'YOLO'] },
  { id: 'claude-anthropic', name: 'Claude API & Prompt Engineering', category: 'AI & Data Science', date: 'Apr 20, 2024', verifyId: '1713609690600', skills: ['System Prompts', 'Tool Calling', 'Agentic Loops'] },
  { id: 'data-science-py', name: 'Data Science with Python & Pandas', category: 'AI & Data Science', date: 'Apr 04, 2024', verifyId: '1712227290700', skills: ['Dataframes', 'Numpy', 'Feature Engineering'] },
  { id: 'data-viz', name: 'Data Visualization (Matplotlib/Seaborn)', category: 'AI & Data Science', date: 'Mar 16, 2024', verifyId: '1710585690800', skills: ['Heatmaps', 'Distribution Plots', 'Dashboards'] },
  { id: 'gen-ai', name: 'Generative AI & LLM Architectures', category: 'AI & Data Science', date: 'Feb 28, 2024', verifyId: '1709116890900', skills: ['Transformers', 'Attention Mechanism', 'RAG'] },
  { id: 'ai-ethics', name: 'AI Ethics, Governance & Safety', category: 'AI & Data Science', date: 'Feb 10, 2024', verifyId: '1707561691000', skills: ['Bias Mitigation', 'Model Transparency', 'Safety Rails'] },
  { id: 'vector-db', name: 'Vector Databases & Similarity Search', category: 'AI & Data Science', date: 'Jan 22, 2024', verifyId: '1705920091100', skills: ['Cosine Similarity', 'HNSW Indexing', 'Embeddings'] },

  // 6. Security & DevOps (10)
  { id: 'ethical-hacking', name: 'Ethical Hacking & Penetration Testing', category: 'Security & DevOps', date: 'Jul 06, 2024', verifyId: '1720252890100', skills: ['Reconnaissance', 'Metasploit', 'Payload Generation'] },
  { id: 'kali-linux', name: 'Kali Linux Tools & Defensive Security', category: 'Security & DevOps', date: 'Jun 20, 2024', verifyId: '1718880090200', skills: ['Nmap', 'Wireshark', 'Burp Suite'] },
  { id: 'android-keystore-sec', name: 'Android Hardware Security & Keystore', category: 'Security & DevOps', date: 'Jun 02, 2024', verifyId: '1717324890300', skills: ['TEE Enclave', 'StrongBox', 'Asymmetric Keys'] },
  { id: 'cryptography-eng', name: 'Applied Cryptography (AES & RSA)', category: 'Security & DevOps', date: 'May 16, 2024', verifyId: '1715856090400', skills: ['Cipher Block Chaining', 'GCM Mode', 'Hashing'] },
  { id: 'docker-containers', name: 'Docker Containerization & Multi-Stage Builds', category: 'Security & DevOps', date: 'Apr 26, 2024', verifyId: '1714128090500', skills: ['Dockerfiles', 'Image Optimization', 'Volumes'] },
  { id: 'kubernetes-dev', name: 'Kubernetes Cluster Orchestration', category: 'Security & DevOps', date: 'Apr 10, 2024', verifyId: '1712745690600', skills: ['Pods', 'Deployments', 'ConfigMaps', 'Ingress'] },
  { id: 'github-actions-cicd', name: 'CI/CD Pipelines with GitHub Actions', category: 'Security & DevOps', date: 'Mar 22, 2024', verifyId: '1711104090700', skills: ['Workflow Triggers', 'Secrets Management', 'Matrix Builds'] },
  { id: 'linux-sysadmin', name: 'Linux System Administration & Shell', category: 'Security & DevOps', date: 'Mar 04, 2024', verifyId: '1709548890800', skills: ['Bash Scripting', 'Systemd Services', 'Permissions'] },
  { id: 'zero-trust-sec', name: 'Zero-Trust Architecture & Identity', category: 'Security & DevOps', date: 'Feb 16, 2024', verifyId: '1708080090900', skills: ['OAuth2', 'mTLS', 'Least Privilege'] },
  { id: 'network-defense', name: 'Network Security & Firewalls', category: 'Security & DevOps', date: 'Jan 26, 2024', verifyId: '1706265691000', skills: ['IPTables', 'Packet Filtering', 'VPN Tunnels'] },

  // 7. Blockchain (4)
  { id: 'blockchain-foundations', name: 'Blockchain Technology Fundamentals', category: 'Blockchain', date: 'Jul 02, 2024', verifyId: '1719907290100', skills: ['Proof of Work', 'Proof of Stake', 'Merkle Trees'] },
  { id: 'smart-contracts', name: 'Smart Contracts & Solidity Design', category: 'Blockchain', date: 'May 18, 2024', verifyId: '1716028890200', skills: ['EVM Internals', 'Gas Optimization', 'Reentrancy Protection'] },
  { id: 'web3-dapps', name: 'Web3 & Decentralized Applications', category: 'Blockchain', date: 'Mar 28, 2024', verifyId: '1711622490300', skills: ['Ethers.js', 'WalletConnect', 'IPFS Storage'] },
  { id: 'cryptocurrency-econ', name: 'Cryptocurrency Protocols & Economics', category: 'Blockchain', date: 'Jan 18, 2024', verifyId: '1705574490400', skills: ['Tokenomics', 'Defi Primitives', 'Liquidity Pools'] },

  // 8. Software Engineering (7)
  { id: 'clean-code-solid', name: 'Clean Code & SOLID Principles', category: 'Software Engineering', date: 'Jul 15, 2024', verifyId: '1721044890100', skills: ['Single Responsibility', 'Open-Closed', 'Liskov Substitution'] },
  { id: 'design-patterns', name: 'Gang of Four (GoF) Design Patterns', category: 'Software Engineering', date: 'Jun 16, 2024', verifyId: '1718534490200', skills: ['Factory', 'Observer', 'Strategy', 'Decorator'] },
  { id: 'microservices-arch', name: 'Microservices & Event-Driven Systems', category: 'Software Engineering', date: 'May 26, 2024', verifyId: '1716720090300', skills: ['CQRS', 'Event Sourcing', 'Saga Pattern'] },
  { id: 'data-structures-algo', name: 'Data Structures & Algorithms Mastery', category: 'Software Engineering', date: 'Apr 24, 2024', verifyId: '1713955290400', skills: ['Graph Theory', 'Dynamic Programming', 'Trie Trees'] },
  { id: 'system-design', name: 'High-Level System Design & Scalability', category: 'Software Engineering', date: 'Mar 30, 2024', verifyId: '1711795290500', skills: ['Load Balancing', 'Consistent Hashing', 'Rate Limiting'] },
  { id: 'git-version-control', name: 'Advanced Git & Branching Strategies', category: 'Software Engineering', date: 'Feb 20, 2024', verifyId: '1708425690600', skills: ['Rebase Interactive', 'Cherry-pick', 'Git Bisect'] },
  { id: 'agile-scrum', name: 'Agile & Scrum Engineering Methodologies', category: 'Software Engineering', date: 'Jan 12, 2024', verifyId: '1705056090700', skills: ['Sprint Planning', 'Velocity Tracking', 'Retrospectives'] },

  // 9. Marketing & Business (11)
  { id: 'digital-marketing', name: 'Digital Marketing & Growth Engineering', category: 'Marketing & Business', date: 'Jul 05, 2024', verifyId: '1720166490100', skills: ['Conversion Funnels', 'A/B Testing', 'Growth Hacking'] },
  { id: 'seo-technical', name: 'Technical SEO & Content Strategy', category: 'Marketing & Business', date: 'Jun 24, 2024', verifyId: '1719225690200', skills: ['Schema.org', 'Lighthouse Optimization', 'Backlink Audits'] },
  { id: 'product-management', name: 'Tech Product Management & Roadmapping', category: 'Marketing & Business', date: 'Jun 10, 2024', verifyId: '1718016090300', skills: ['User Journey Mapping', 'KPIs', 'Feature Prioritization'] },
  { id: 'business-analytics', name: 'Business Intelligence & Data Analytics', category: 'Marketing & Business', date: 'May 24, 2024', verifyId: '1716547290400', skills: ['Cohort Analysis', 'LTV/CAC Ratios', 'Tableau Modeling'] },
  { id: 'entrepreneurship', name: 'Tech Entrepreneurship & Startup Strategy', category: 'Marketing & Business', date: 'May 06, 2024', verifyId: '1714992090500', skills: ['Pitch Deck Modeling', 'Venture Capital', 'Unit Economics'] },
  { id: 'fintech-foundations', name: 'Fintech & Payment Gateway Engineering', category: 'Marketing & Business', date: 'Apr 25, 2024', verifyId: '1714041690600', skills: ['PCI-DSS', 'Stripe Integrations', 'Ledger Accounting'] },
  { id: 'ecommerce-arch', name: 'Enterprise E-commerce Architecture', category: 'Marketing & Business', date: 'Apr 08, 2024', verifyId: '1712572890700', skills: ['Cart Checkout Logic', 'Inventory Sync', 'Split Billing'] },
  { id: 'cyber-law', name: 'Cyber Law & Data Privacy (GDPR/PDPA)', category: 'Marketing & Business', date: 'Mar 25, 2024', verifyId: '1711363290800', skills: ['Data Sovereignity', 'User Consent', 'Audit Trails'] },
  { id: 'project-management', name: 'IT Project Management & PMP Framework', category: 'Marketing & Business', date: 'Mar 10, 2024', verifyId: '1710067290900', skills: ['Gantt Charts', 'Critical Path Method', 'Risk Matrix'] },
  { id: 'financial-accounting', name: 'Software Financial Accounting & POS', category: 'Marketing & Business', date: 'Feb 22, 2024', verifyId: '1708598491000', skills: ['Double-Entry Bookkeeping', 'Tax Schedules', 'Auditing'] },
  { id: 'leadership-culture', name: 'Engineering Leadership & Team Mentorship', category: 'Marketing & Business', date: 'Jan 24, 2024', verifyId: '1706092891100', skills: ['1-on-1 Frameworks', 'Code Review Etiquette', 'Tech Culture'] }
];
