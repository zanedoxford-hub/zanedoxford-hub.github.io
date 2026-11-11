/*
  PROGRESS TRACKER DATA
  ---------------------
  This is the only file you need to edit to update the Progress page.

  status:    "planned" | "in-progress" | "done"
  done:      true when you finish a milestone (the progress bar updates itself)
  link:      optional URL to your write-up or GitHub repo, shown once you add it
  hidden:    set to true to hide a project from the public page
*/
const PROGRESS = [
  {
    title: "Phishing Email Investigation Case",
    category: "Blue Team / SOC",
    status: "planned",
    summary: "Investigate a real phishing email end to end: header and authentication analysis, safe link and attachment checks, ATT&CK mapping, a verdict and SOC response actions, plus a Python script that automates the triage.",
    tags: ["Email headers", "SPF / DKIM / DMARC", "VirusTotal", "Python", "MITRE ATT&CK"],
    link: "",
    milestones: [
      { text: "Collect a sample email safely and redact personal data", done: false },
      { text: "Analyse headers, Received chain and SPF / DKIM / DMARC", done: false },
      { text: "Check links and attachment hashes without opening them", done: false },
      { text: "Map to ATT&CK, give a verdict and response actions", done: false },
      { text: "Build a Python .eml triage script", done: false },
      { text: "Publish the investigation report", done: false }
    ]
  },
  {
    title: "Microsoft 365 / Entra ID Security Hardening Lab",
    category: "Cloud & Identity",
    status: "planned",
    summary: "Build a test Microsoft cloud tenant, secure it with MFA, Conditional Access and device compliance, then assess it against the ASD Essential Eight.",
    tags: ["Entra ID", "Conditional Access", "Intune", "Defender", "Essential Eight"],
    link: "",
    milestones: [
      { text: "Create a free lab tenant (Azure for Students or trial)", done: false },
      { text: "Create test users, groups and admin roles", done: false },
      { text: "Enforce MFA and block legacy authentication", done: false },
      { text: "Build Conditional Access policies (admins, risky sign-ins, locations)", done: false },
      { text: "Enrol a Windows VM in Intune with a compliance policy", done: false },
      { text: "Turn on audit logging and review sign-in logs", done: false },
      { text: "Write an Essential Eight self-assessment of the tenant", done: false },
      { text: "Publish the write-up with screenshots", done: false }
    ]
  },
  {
    title: "Home SOC Lab with Custom Detections",
    category: "Blue Team / SOC",
    status: "planned",
    summary: "A virtual lab with a SIEM, a monitored Windows endpoint and an attacker machine. Simulate attacks, write detections mapped to MITRE ATT&CK and document an incident end to end.",
    tags: ["Wazuh", "Sysmon", "Atomic Red Team", "MITRE ATT&CK", "Kali Linux"],
    link: "",
    milestones: [
      { text: "Set up VirtualBox with a host-only lab network", done: false },
      { text: "Install the Wazuh server and dashboard", done: false },
      { text: "Build a Windows 11 endpoint with Sysmon and the Wazuh agent", done: false },
      { text: "Simulate 5 techniques with Atomic Red Team", done: false },
      { text: "Write and test 5 custom detection rules", done: false },
      { text: "Run a mini attack from Kali and investigate it", done: false },
      { text: "Publish an incident report (timeline, IOCs, containment)", done: false }
    ]
  },
  {
    title: "Essential Eight Quick-Check Script",
    category: "Automation / GRC",
    status: "planned",
    summary: "A PowerShell tool that checks a Windows machine against selected Essential Eight controls and produces a plain-English HTML report a small business could act on.",
    tags: ["PowerShell", "Essential Eight", "Windows", "Reporting"],
    link: "",
    milestones: [
      { text: "Pick 6 to 8 controls that can be checked locally", done: false },
      { text: "Write a check function for each control", done: false },
      { text: "Generate an HTML report with pass / fail and fixes", done: false },
      { text: "Test on a clean VM and a hardened VM", done: false },
      { text: "Publish on GitHub with a README and screenshots", done: false }
    ]
  },
  {
    title: "Vulnerable PHP App: Break It, Then Fix It",
    category: "AppSec / Pentesting",
    status: "planned",
    summary: "Build a small PHP web app containing five OWASP Top 10 flaws, exploit each with Burp Suite, then patch the code and write a secure code review report.",
    tags: ["PHP", "MySQL", "Burp Suite", "OWASP Top 10", "Docker"],
    link: "",
    milestones: [
      { text: "Build the app locally (login, search, notes, file upload)", done: false },
      { text: "Exploit SQL injection, XSS, IDOR, file upload and weak auth", done: false },
      { text: "Record each finding with evidence and severity", done: false },
      { text: "Fix every flaw on a separate 'secure' branch", done: false },
      { text: "Re-test and publish the before / after report", done: false }
    ]
  },
  {
    title: "AI / LLM Security: Securing a Helpdesk Chatbot",
    category: "AI Security",
    status: "planned",
    summary: "Build a small local AI helpdesk assistant, test it against the OWASP Top 10 for LLM Applications (prompt injection, data leakage, unsafe output), then add layered defences and measure the difference.",
    tags: ["OWASP LLM Top 10", "Prompt Injection", "Python", "Ollama"],
    link: "",
    milestones: [
      { text: "Study the OWASP Top 10 for LLM Applications", done: false },
      { text: "Build a local chatbot with a fake secret and one tool", done: false },
      { text: "Test direct and indirect prompt injection and output handling", done: false },
      { text: "Add defences and re-test", done: false },
      { text: "Publish findings mapped to OWASP LLM Top 10", done: false }
    ]
  },
  {
    title: "Game Security: Roblox Anti-Exploit Design",
    category: "Threat Modelling",
    status: "planned",
    summary: "Threat model a multiplayer game, then implement and document server-side validation, rate limiting and logging that stop common client-side exploits.",
    tags: ["Luau", "Threat Modelling", "STRIDE", "Server Validation"],
    link: "",
    milestones: [
      { text: "Draw a data-flow diagram of the game's client / server trust boundaries", done: false },
      { text: "Run a STRIDE threat model", done: false },
      { text: "Implement server-side validation for remote events", done: false },
      { text: "Add rate limiting and suspicious-activity logging", done: false },
      { text: "Publish the write-up (no exploit code, defensive focus)", done: false }
    ]
  },
  {
    title: "Certifications & Training",
    category: "Learning",
    status: "planned",
    summary: "Industry certifications and structured hands-on training aligned with entry-level SOC and IT security roles.",
    tags: ["SC-900", "Security+", "TryHackMe", "Splunk"],
    link: "",
    milestones: [
      { text: "Microsoft SC-900: Security, Compliance and Identity Fundamentals", done: false },
      { text: "TryHackMe SOC Level 1 path", done: false },
      { text: "Splunk free training + Splunk Core Certified User", done: false },
      { text: "CompTIA Security+", done: false },
      { text: "Publish 1 to 2 CTF / room write-ups per month", done: false }
    ]
  }
];
