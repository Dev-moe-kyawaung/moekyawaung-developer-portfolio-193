export type Language = 'en' | 'my' | 'th';

export interface TranslationDict {
  systemAuditRecord: string;
  viewMode: string;
  documentary: string;
  deepTelemetry: string;
  lineage: string;
  repos: string;
  milestones: string;
  aiSummaries: string;
  stackFilter: string;
  allMilestones: string;
  showing: string;
  ofRecords: string;
  autoWalkthrough: string;
  pauseAutoScrub: string;
  activeCommit: string;
  documentaryIntent: string;
  chronologicalLadder: string;
  ladderOrder: string;
  agenticConsoleTitle: string;
  agenticSubtitle: string;
  runAgentAudit: string;
  biographyTitle: string;
  credentialsTitle: string;
  credentialsProfile: string;
  themeToggle: string;
  compareMilestones: string;
  viewCertificates: string;
  viewPostmortems: string;
  exportWhitepaper: string;
  watchCinematic: string;
  interactiveTopology: string;
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    systemAuditRecord: 'SYSTEM ARCHITECTURE AUDIT RECORD',
    viewMode: 'View Mode',
    documentary: 'Documentary',
    deepTelemetry: 'Deep Telemetry',
    lineage: 'Lineage',
    repos: 'Repositories',
    milestones: 'Milestones',
    aiSummaries: 'AI Summaries',
    stackFilter: 'Stack Filter',
    allMilestones: 'All Milestones',
    showing: 'Showing',
    ofRecords: 'of records',
    autoWalkthrough: 'Auto Walkthrough',
    pauseAutoScrub: 'Pause Auto-Scrub',
    activeCommit: 'ACTIVE COMMIT',
    documentaryIntent: 'Documentary Intent: A calm, chronological architectural ladder detailing migrations, trade-offs, and measurable impact across Moe Kyaw Aung\'s engineering arc.',
    chronologicalLadder: 'CHRONOLOGICAL ARCHITECTURE LADDER',
    ladderOrder: 'Ladder Order: 2022 (Genesis) → 2026 (Agentic)',
    agenticConsoleTitle: 'AGENTIC ARCHITECTURE AUDITOR',
    agenticSubtitle: 'Autonomous Trade-off Evaluator & System Evolution Synthesis',
    runAgentAudit: 'Run Agent Audit',
    biographyTitle: 'BIOGRAPHY & VERIFIED ARTIFACT REGISTRY',
    credentialsTitle: 'System Lineage & Professional Pedigree',
    credentialsProfile: 'CERTIFICATION PROFILE',
    themeToggle: 'Theme',
    compareMilestones: 'Compare Milestones (Diff)',
    viewCertificates: 'Certificates Registry (82+)',
    viewPostmortems: 'Architecture Postmortems',
    exportWhitepaper: 'Export Architecture Dossier (PDF)',
    watchCinematic: 'Cinematic Visual Reel',
    interactiveTopology: 'Interactive Topology Visualizer'
  },
  my: {
    systemAuditRecord: 'စနစ်ဗိသုကာ စစ်ဆေးမှုမှတ်တမ်း (AUDIT LOG)',
    viewMode: 'ရှုထောင့်',
    documentary: 'မှတ်တမ်းတင် အနှစ်ချုပ်',
    deepTelemetry: 'အတွင်းကျကျ တိုင်းတာမှု',
    lineage: 'အတွေ့အကြုံကာလ',
    repos: 'GitHub ပရောဂျက်များ',
    milestones: 'မှတ်တိုင်များ',
    aiSummaries: 'AI သုံးသပ်ချက်',
    stackFilter: 'နည်းပညာအလိုက် ခွဲခြားရန်',
    allMilestones: 'မှတ်တိုင်အားလုံး',
    showing: 'ဖော်ပြချက်',
    ofRecords: 'ခုအနက်',
    autoWalkthrough: 'အလိုအလျောက် ဆလိုက်ပြရန်',
    pauseAutoScrub: 'ဆလိုက်ရပ်တန့်ရန်',
    activeCommit: 'လက်ရှိကုဒ်မှတ်တမ်း',
    documentaryIntent: 'မှတ်တမ်းရည်ရွယ်ချက်- မိုးကျော်အောင် ၏ ၂၀၂၂ မှ ၂၀၂၆ အထိ Android နှင့် Cloud စနစ်ဗိသုကာ ပြောင်းလဲလာမှုနှင့် အကျိုးသက်ရောက်မှုများကို စနစ်တကျ မှတ်တမ်းတင်ထားခြင်းဖြစ်ပါသည်။',
    chronologicalLadder: 'အချိန်အပိုင်းအခြားအလိုက် ဗိသုကာမှတ်တမ်းလှေကား',
    ladderOrder: 'အစဉ်လိုက်: ၂၀၂၂ (အစပြုချိန်) → ၂၀၂၆ (AI စနစ်)',
    agenticConsoleTitle: 'AI ဗိသုကာဆန်းစစ်ချက် အင်ဂျင်',
    agenticSubtitle: 'စနစ်တိုးတက်မှုနှင့် အားသာချက်/အားနည်းချက် သုံးသပ်ဆန်းစစ်မှု',
    runAgentAudit: 'AI စစ်ဆေးမှုပြုလုပ်ရန်',
    biographyTitle: 'ကိုယ်ရေးအကျဉ်းနှင့် အတည်ပြုလက်မှတ်များ',
    credentialsTitle: 'စနစ်တည်ဆောက်မှု အဆင့်အတန်းနှင့် အောင်မြင်မှုများ',
    credentialsProfile: 'အတည်ပြု လက်မှတ်များအကျဉ်း',
    themeToggle: 'အပြင်အဆင်',
    compareMilestones: 'ဗိသုကာ ၂ ခု နှိုင်းယှဉ်ရန်',
    viewCertificates: 'လက်မှတ်များ စုစည်းမှု (၈၂ ခု+)',
    viewPostmortems: 'ဗိသုကာစနစ် ပြဿနာဖြေရှင်းချက်များ',
    exportWhitepaper: 'ဗိသုကာ စာတမ်းထုတ်ယူရန် (PDF)',
    watchCinematic: 'ရုပ်ရှင်ဆန်သော ဗီဒီယိုပြကွက်',
    interactiveTopology: 'စနစ်ချိတ်ဆက်မှု အပြန်အလှန်ပြကွက်'
  },
  th: {
    systemAuditRecord: 'บันทึกการตรวจสอบสถาปัตยกรรมระบบ',
    viewMode: 'โหมดมุมมอง',
    documentary: 'โหมดสารคดีเชิงเทคนิค',
    deepTelemetry: 'การวัดค่าเชิงลึก',
    lineage: 'เส้นทางเวลา',
    repos: 'คลังโค้ด GitHub',
    milestones: 'หมุดหมายสำคัญ',
    aiSummaries: 'สรุปการวิเคราะห์ AI',
    stackFilter: 'ตัวกรองเทคโนโลยี',
    allMilestones: 'หมุดหมายทั้งหมด',
    showing: 'กำลังแสดง',
    ofRecords: 'จากทั้งหมด',
    autoWalkthrough: 'เล่นแบบอัตโนมัติ',
    pauseAutoScrub: 'หยุดชั่วคราว',
    activeCommit: 'คอมมิตปัจจุบัน',
    documentaryIntent: 'เจตจำนงสารคดี: บันทึกลำดับเวลาเชิงสถาปัตยกรรมที่สงบนิ่งและชัดเจน อธิบายการย้ายระบบ การแลกเปลี่ยนข้อดีข้อเสีย และผลกระทบที่วัดผลได้ของ Moe Kyaw Aung',
    chronologicalLadder: 'บันไดสถาปัตยกรรมตามลำดับเวลา',
    ladderOrder: 'ลำดับ: 2022 (จุดเริ่มต้น) → 2026 (ระบบ Agentic)',
    agenticConsoleTitle: 'เครื่องมือตรวจสอบสถาปัตยกรรม AI',
    agenticSubtitle: 'การวิเคราะห์การประนีประนอมและการวิวัฒนาการของระบบ',
    runAgentAudit: 'ประมวลผลการตรวจสอบ AI',
    biographyTitle: 'ชีวประวัติและการรับรองผลงาน',
    credentialsTitle: 'ประวัติวิศวกรรมสถาปัตยกรรมและผลงานจริง',
    credentialsProfile: 'ข้อมูลใบรับรองความเชี่ยวชาญ',
    themeToggle: 'ธีมสี',
    compareMilestones: 'เปรียบเทียบสถาปัตยกรรม (Diff)',
    viewCertificates: 'คลังใบรับรองทั้งหมด (82+)',
    viewPostmortems: 'รายงานการแก้ไขปัญหาสถาปัตยกรรม',
    exportWhitepaper: 'ดาวน์โหลดรายงานสถาปัตยกรรม (PDF)',
    watchCinematic: 'วิดีโอเทคนิคเชิงภาพยนตร์',
    interactiveTopology: 'แบบจำลองโครงสร้างระบบแบบโต้ตอบ'
  }
};
