ML
Copy

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PM/PgM First 90 Days — AI Assistant</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  :root {
    --bg: #F7F6F2;
    --surface: #FFFFFF;
    --surface2: #F2F0EB;
    --border: rgba(0,0,0,0.1);
    --border-strong: rgba(0,0,0,0.18);
    --text: #1A1A1A;
    --text-mid: #4A4A4A;
    --text-muted: #888880;
    --teal: #1D7A8A;
    --teal-bg: #E1F3F5;
    --teal-border: #A0CDD4;
    --gold: #B8860B;
    --gold-bg: #FDF5DC;
    --gold-border: #DFC97A;
    --danger: #C0392B;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --font: 'DM Sans', system-ui, sans-serif;
    --font-display: 'Playfair Display', Georgia, serif;
  }
 
  body {
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    padding: 0;
  }
 
  /* Header */
  .header {
    background: var(--surface);
    border-bottom: 0.5px solid var(--border);
    padding: 28px 40px 24px;
  }
  .header-eyebrow {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 6px;
    letter-spacing: 0.02em;
  }
  .header h1 {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 900;
    color: var(--text);
    line-height: 1.15;
  }
  .header h1 em {
    color: var(--teal);
    font-style: normal;
  }
  .header-sub {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 8px;
    line-height: 1.5;
  }
 
  /* Main layout */
  .main {
    display: grid;
    grid-template-columns: 300px 1fr;
    min-height: calc(100vh - 110px);
  }
 
  /* Sidebar */
  .sidebar {
    background: var(--surface);
    border-right: 0.5px solid var(--border);
    padding: 20px 16px;
    overflow-y: auto;
  }
  .sidebar-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 12px;
    padding: 0 4px;
  }
  .card {
    border-radius: var(--radius-md);
    padding: 13px 14px;
    cursor: pointer;
    border: 0.5px solid transparent;
    margin-bottom: 6px;
    transition: background 0.12s, border-color 0.12s;
    position: relative;
  }
  .card:hover { background: var(--surface2); border-color: var(--border); }
  .card.active {
    background: var(--teal-bg);
    border-color: var(--teal-border);
  }
  .card-row { display: flex; align-items: flex-start; gap: 10px; }
  .card-num {
    font-size: 10px;
    font-weight: 600;
    color: var(--text-muted);
    padding-top: 2px;
    min-width: 20px;
    letter-spacing: 0.04em;
  }
  .card.active .card-num { color: var(--teal); }
  .card-info {}
  .card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.35;
    margin-bottom: 2px;
  }
  .card.active .card-title { color: var(--teal); }
  .card-desc { font-size: 12px; color: var(--text-muted); line-height: 1.4; }
  .badge {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 99px;
    margin-top: 6px;
    letter-spacing: 0.03em;
  }
  .badge-teal { background: var(--teal-bg); color: var(--teal); }
  .badge-gold { background: var(--gold-bg); color: var(--gold); }
 
  /* Content area */
  .content {
    padding: 32px 40px;
    overflow-y: auto;
  }
 
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    text-align: center;
    color: var(--text-muted);
    gap: 12px;
  }
  .empty-icon {
    width: 48px; height: 48px;
    background: var(--surface2);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
  }
  .empty-state h3 { font-size: 16px; font-weight: 600; color: var(--text-mid); }
  .empty-state p { font-size: 14px; max-width: 280px; line-height: 1.55; }
 
  /* Prompt panel */
  .panel-title-row { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
  .panel-num { font-size: 12px; color: var(--text-muted); font-weight: 600; }
  .panel-title { font-size: 20px; font-weight: 700; color: var(--text); }
  .panel-tagline { font-size: 14px; color: var(--text-muted); margin-bottom: 28px; }
 
  .field-group { margin-bottom: 18px; }
  .field-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-mid);
    display: block;
    margin-bottom: 6px;
    letter-spacing: 0.02em;
  }
  .field-group input, .field-group textarea {
    width: 100%;
    font-family: var(--font);
    font-size: 14px;
    padding: 10px 13px;
    border: 0.5px solid var(--border-strong);
    border-radius: var(--radius-sm);
    background: var(--surface);
    color: var(--text);
    outline: none;
    transition: border-color 0.12s, box-shadow 0.12s;
    line-height: 1.5;
  }
  .field-group input:focus, .field-group textarea:focus {
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(29,122,138,0.1);
  }
  .field-group input.error, .field-group textarea.error {
    border-color: var(--danger);
  }
  .field-group textarea { min-height: 90px; resize: vertical; }
 
  .actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
  .run-btn {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font);
    font-size: 14px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    cursor: pointer;
    background: var(--teal);
    color: #fff;
    border: none;
    transition: opacity 0.15s, transform 0.1s;
  }
  .run-btn:hover { opacity: 0.88; }
  .run-btn:active { transform: scale(0.98); }
  .run-btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
 
  .spinner {
    display: none;
    width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.65s linear infinite;
  }
  .spinner.on { display: inline-block; }
  @keyframes spin { to { transform: rotate(360deg); } }
 
  .status-msg { font-size: 13px; color: var(--text-muted); min-height: 20px; }
 
  .output-section { margin-top: 28px; display: none; }
  .output-section.visible { display: block; }
  .output-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 10px;
  }
  .output-box {
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-md);
    padding: 20px 22px;
    font-size: 14px;
    line-height: 1.75;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
  }
  .output-actions { display: flex; gap: 8px; margin-top: 12px; }
  .copy-btn {
    font-family: var(--font);
    font-size: 12px;
    font-weight: 600;
    padding: 7px 14px;
    border-radius: var(--radius-sm);
    cursor: pointer;
    background: var(--surface2);
    color: var(--text-mid);
    border: 0.5px solid var(--border-strong);
    transition: background 0.12s;
  }
  .copy-btn:hover { background: var(--border); }
  .clear-btn {
    font-family: var(--font);
    font-size: 12px;
    font-weight: 500;
    padding: 7px 14px;
    border-radius: var(--radius-sm);
    cursor: pointer;
    background: transparent;
    color: var(--text-muted);
    border: 0.5px solid var(--border);
    transition: color 0.12s;
  }
  .clear-btn:hover { color: var(--text); }
 
  /* Divider */
  .divider { border: none; border-top: 0.5px solid var(--border); margin: 28px 0; }
 
  @media (max-width: 700px) {
    .main { grid-template-columns: 1fr; }
    .sidebar { border-right: none; border-bottom: 0.5px solid var(--border); }
    .header, .content { padding: 20px; }
  }
</style>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@900&display=swap" rel="stylesheet">
</head>
<body>
 
<div class="header">
  <div class="header-eyebrow">Curated by <a href="https://www.linkedin.com/in/ashakisorrell/" target="_blank" rel="noopener noreferrer" style="color: var(--teal); text-decoration: none; font-weight: 600; border-bottom: 1px solid var(--teal-border);">Ashaki Sorrell</a></div>
  <h1>PM / PgM <em>First 90 Days</em> AI Assistant</h1>
  <div class="header-sub">Your first 90 days as a Project or Program Manager set the tone for everything that follows. This tool turns 10 proven onboarding strategies into AI-powered prompts — so you can walk in with the right emails drafted, your stakeholders mapped, your dependencies surfaced, and your first win already in sight. Fill in your context, hit Generate, and get output tailored to your exact situation.</div>
</div>
 
<div class="main">
  <div class="sidebar">
    <div class="sidebar-label">10 prompts</div>
    <div id="cardList"></div>
  </div>
  <div class="content" id="contentArea">
    <div class="empty-state">
      <div class="empty-icon">🗂️</div>
      <h3>Choose a prompt to get started</h3>
      <p>Select one of the 10 cards on the left to generate tailored output for your project.</p>
    </div>
  </div>
</div>
 
<script>
const BADGE_TYPES = {
  "Email": "badge-teal",
  "Analysis": "badge-teal",
  "Risk": "badge-gold",
  "Strategy": "badge-gold",
  "Template": "badge-teal",
  "People": "badge-gold",
  "Judgment": "badge-gold"
};
 
const prompts = [
  {
    num: "#1", title: "Meet every stakeholder — fast",
    desc: "Write a 1:1 intro email to a stakeholder", badge: "Email",
    fields: [
      { id: "project", label: "Project name", type: "input", placeholder: "e.g. Customer Portal Redesign" },
      { id: "role", label: "Stakeholder role", type: "input", placeholder: "e.g. VP of Engineering, Head of Finance" }
    ],
    system: "You are an expert project management coach helping a new PM write professional, concise communications. Always write in a warm but direct tone. No filler phrases. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `I'm a new PM starting on "${f.project}". Help me write a short, warm 1:1 intro email to a ${f.role}. The email should ask what success looks like to them on this project — without sounding like I'm fishing for requirements. Keep it under 150 words.`
  },
  {
    num: "#2", title: "Shadow your team",
    desc: "Analyze what you observed in a team meeting", badge: "Analysis",
    fields: [
      { id: "meeting", label: "Meeting type", type: "input", placeholder: "e.g. standup, retro, planning session" },
      { id: "notes", label: "What you observed", type: "textarea", placeholder: "Paste your raw notes or observations here..." }
    ],
    system: "You are an expert project management coach. Help new PMs develop pattern recognition. Be specific and actionable, not generic. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `I'm a new PM and I just sat in on a ${f.meeting} as an observer. Here's what I noticed:\n\n${f.notes}\n\nWhat patterns or red flags should I pay attention to? What 2-3 targeted questions should I ask next to learn more?`
  },
  {
    num: "#3", title: "Audit the project history",
    desc: "Identify gaps and themes from docs you've read", badge: "Analysis",
    fields: [
      { id: "summary", label: "Summary of docs / history you've read", type: "textarea", placeholder: "e.g. I read the original charter, two old retro docs, and a risk log from last quarter..." }
    ],
    system: "You are an expert project management coach. Help new PMs synthesize project history into actionable insights. Be direct and specific. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `I'm a new PM auditing this project's history. Here's a summary of what I've read so far:\n\n${f.summary}\n\nWhat key gaps, unresolved decisions, or recurring themes should I flag before I go further? List the top 3-5 with a brief "why it matters" for each.`
  },
  {
    num: "#4", title: "Map every dependency",
    desc: "Build a dependency risk log for your project", badge: "Risk",
    fields: [
      { id: "teams", label: "Teams and systems involved", type: "textarea", placeholder: "e.g. Frontend eng, backend API team, Salesforce CRM, external vendor for payments..." }
    ],
    system: "You are a senior program manager and expert at dependency and risk analysis. Be precise and practical. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `My project involves these teams and systems:\n\n${f.teams}\n\nHelp me build a dependency risk log. For each dependency, suggest: (1) the risk if it's not managed, (2) the key question I need to answer to validate it, and (3) who owns it. Format as a clean list.`
  },
  {
    num: "#5", title: "Learn what 'done' means",
    desc: "Pressure-test your project's success metrics", badge: "Strategy",
    fields: [
      { id: "goal", label: "What the charter / brief says the goal is", type: "textarea", placeholder: "e.g. Launch a redesigned checkout flow by Q3..." },
      { id: "sponsor", label: "Who your executive sponsor is (role)", type: "input", placeholder: "e.g. Chief Product Officer" }
    ],
    system: "You are a strategic program management advisor. Help new PMs cut through vague goals to find the real success criteria. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `My project charter says the goal is:\n\n"${f.goal}"\n\nMy executive sponsor is a ${f.sponsor}. Help me pressure-test this. What are the 3-4 real metrics they're probably actually watching? What questions should I ask to confirm or challenge the stated goal?`
  },
  {
    num: "#6", title: "Get close to your sponsor",
    desc: "Draft a status update template for your exec", badge: "Template",
    fields: [
      { id: "format", label: "How they prefer updates", type: "input", placeholder: "e.g. weekly email, Slack message, verbal in 1:1" },
      { id: "style", label: "What you know about their style", type: "textarea", placeholder: "e.g. Very data-driven, hates fluff, wants risks surfaced early, reads on mobile..." }
    ],
    system: "You are an expert executive communication coach for project managers. Write concise, structured status updates. No filler. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `My executive sponsor prefers ${f.format} updates. Here's what I know about their style:\n\n${f.style}\n\nDraft a reusable status update template tailored to them. It should be clear, no fluff, surface risks proactively, and feel like it was written for them specifically — not a generic PM template.`
  },
  {
    num: "#7", title: "Find the informal influencers",
    desc: "Identify the real unblocking forces on your team", badge: "People",
    fields: [
      { id: "team", label: "Your team / org chart / key names and roles", type: "textarea", placeholder: "e.g. Sarah (senior eng), Marcus (QA lead), Priya (design), James (scrum master)..." }
    ],
    system: "You are an organizational dynamics expert and experienced program manager. Help new PMs read their team effectively. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `Here are the people on my project:\n\n${f.team}\n\nHelp me think through who the informal influencers and unblocking forces might be — the people without PM titles who quietly get things done. What signals should I look for? How should I approach building trust with them early?`
  },
  {
    num: "#8", title: "Build your single source of truth",
    desc: "Design a living project tracker", badge: "Template",
    fields: [
      { id: "tool", label: "Tool you're using", type: "input", placeholder: "e.g. Notion, Confluence, Google Docs, Airtable" },
      { id: "project", label: "Project type / context", type: "input", placeholder: "e.g. software launch, org transformation, vendor migration" }
    ],
    system: "You are an expert program manager and productivity systems designer. Create practical, lean tracking templates. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `Help me design a living project tracker in ${f.tool} for a ${f.project} project. It needs to cover: status, risks, key decisions (with dates + owners), open questions, and schedule. Make it practical — something I'll actually update weekly, not something that will rot.`
  },
  {
    num: "#9", title: "No big process changes yet",
    desc: "Decide whether to flag, document, or let it go", badge: "Judgment",
    fields: [
      { id: "issue", label: "Process or workflow issue you've noticed", type: "textarea", placeholder: "e.g. The team doesn't have a clear definition of done. Tickets get closed before QA..." },
      { id: "weeks", label: "How many weeks you've been on the project", type: "input", placeholder: "e.g. 3" }
    ],
    system: "You are a senior PM coach who specializes in helping new project managers navigate their first 90 days. Be honest and direct about timing and political dynamics. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `I'm ${f.weeks} weeks into a new PM role and I've noticed this issue:\n\n${f.issue}\n\nHelp me decide: should I flag it now, document it quietly for later, or let it go entirely? Give me your honest take on the timing, the political risk, and what I should do next.`
  },
  {
    num: "#10", title: "Deliver one early win",
    desc: "Pick the stuck item most likely to create momentum", badge: "Strategy",
    fields: [
      { id: "items", label: "2-4 things currently stuck or ambiguous", type: "textarea", placeholder: "e.g. 1. No one owns the QA sign-off process\n2. The design handoff is blocked on a vendor decision\n3. Sprint ceremonies haven't been set for next quarter" }
    ],
    system: "You are a strategic PM advisor who helps new project managers build credibility fast. Be decisive and practical. Never use asterisks or markdown formatting in your response.",
    buildPrompt: f => `I'm a new PM looking for my first visible win. Here are some things currently stuck or ambiguous on my project:\n\n${f.items}\n\nWhich one is most likely to create real, visible momentum if I resolved it in the next 2 weeks? Explain why, and give me a concrete first move for each option so I can pick with confidence.`
  }
];
 
let selected = null;
let outputText = "";
 
function renderCards() {
  const list = document.getElementById("cardList");
  list.innerHTML = prompts.map((p, i) => `
    <div class="card ${selected === i ? 'active' : ''}" onclick="selectCard(${i})">
      <div class="card-row">
        <div class="card-num">${p.num}</div>
        <div class="card-info">
          <div class="card-title">${p.title}</div>
          <div class="card-desc">${p.desc}</div>
          <span class="badge ${BADGE_TYPES[p.badge] || 'badge-teal'}">${p.badge}</span>
        </div>
      </div>
    </div>
  `).join("");
}
 
function selectCard(i) {
  selected = i;
  outputText = "";
  renderCards();
  renderPanel();
}
 
function renderPanel() {
  const area = document.getElementById("contentArea");
  if (selected === null) {
    area.innerHTML = `<div class="empty-state"><div class="empty-icon">🗂️</div><h3>Choose a prompt to get started</h3><p>Select one of the 10 cards on the left to generate tailored output for your project.</p></div>`;
    return;
  }
  const p = prompts[selected];
  area.innerHTML = `
    <div class="panel-title-row">
      <span class="panel-num">${p.num}</span>
      <span class="panel-title">${p.title}</span>
    </div>
    <div class="panel-tagline">${p.desc}</div>
    ${p.fields.map(f => `
      <div class="field-group">
        <label class="field-label" for="f_${f.id}">${f.label}</label>
        ${f.type === 'textarea'
          ? `<textarea id="f_${f.id}" placeholder="${f.placeholder}"></textarea>`
          : `<input id="f_${f.id}" type="text" placeholder="${f.placeholder}" />`
        }
      </div>
    `).join("")}
    <div class="actions">
      <button class="run-btn" id="runBtn" onclick="runPrompt()">
        Generate
        <span class="spinner" id="spinner"></span>
        <span id="arrowIcon">↗</span>
      </button>
      <div class="status-msg" id="statusMsg"></div>
    </div>
    <div class="output-section" id="outputSection">
      <hr class="divider">
      <div class="output-label">Generated output</div>
      <div class="output-box" id="outputBox"></div>
      <div class="output-actions">
        <button class="copy-btn" onclick="copyOutput()">Copy</button>
        <button class="clear-btn" onclick="clearOutput()">Clear</button>
      </div>
    </div>
  `;
}
 
async function runPrompt() {
  const p = prompts[selected];
  const fields = {};
  let valid = true;
  for (const f of p.fields) {
    const el = document.getElementById("f_" + f.id);
    fields[f.id] = el ? el.value.trim() : "";
    if (!fields[f.id]) {
      valid = false;
      el && el.classList.add("error");
    } else {
      el && el.classList.remove("error");
    }
  }
  if (!valid) {
    document.getElementById("statusMsg").textContent = "Please fill in all fields.";
    return;
  }
 
  const btn = document.getElementById("runBtn");
  const spinner = document.getElementById("spinner");
  const arrowIcon = document.getElementById("arrowIcon");
  const statusMsg = document.getElementById("statusMsg");
  const outputSection = document.getElementById("outputSection");
  const outputBox = document.getElementById("outputBox");
 
  btn.disabled = true;
  spinner.classList.add("on");
  arrowIcon.style.display = "none";
  statusMsg.textContent = "Generating your output...";
  outputSection.classList.remove("visible");
 
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: p.system,
        messages: [{ role: "user", content: p.buildPrompt(fields) }]
      })
    });
    const data = await res.json();
    outputText = data.content?.map(b => b.text || "").join("") || "No response received.";
    outputText = stripAsterisks(outputText);
    outputBox.textContent = outputText;
    outputSection.classList.add("visible");
    statusMsg.textContent = "";
  } catch (e) {
    statusMsg.textContent = "Something went wrong — please try again.";
  } finally {
    btn.disabled = false;
    spinner.classList.remove("on");
    arrowIcon.style.display = "";
  }
}
 
function stripAsterisks(text) {
  return text.replace(/\*+/g, '');
}
 
function copyOutput() {
  const clean = stripAsterisks(outputText);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(clean).then(() => {
      const btn = document.querySelector(".copy-btn");
      if (btn) { btn.textContent = "Copied!"; setTimeout(() => btn.textContent = "Copy", 1800); }
    }).catch(() => fallbackCopy(clean));
  } else {
    fallbackCopy(clean);
  }
}
 
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
    const btn = document.querySelector(".copy-btn");
    if (btn) { btn.textContent = "Copied!"; setTimeout(() => btn.textContent = "Copy", 1800); }
  } catch(e) {}
  document.body.removeChild(ta);
}
 
function clearOutput() {
  outputText = "";
  document.getElementById("outputSection").classList.remove("visible");
  document.getElementById("statusMsg").textContent = "";
  document.querySelectorAll(".field-group input, .field-group textarea").forEach(el => {
    el.value = "";
    el.classList.remove("error");
  });
}
 
renderCards();
renderPanel();
</script>
</body>
</html>
