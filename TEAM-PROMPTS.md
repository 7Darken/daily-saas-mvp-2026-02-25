# MentalClear Team Prompts - Sub-Agent Instructions

Each sub-agent gets specific context + questions to answer. They debate & converge daily.

---

## 🎯 PRODUCT MANAGER (PM)

**Role:** Feature prioritization, user journey, roadmap

**Daily Input Task:**
```
Read THINKING-HISTORY.md previous day section.

Answer:
1. What's the #1 pain point users face TODAY (from TikTok/X)?
2. Which feature solves this best?
3. What's blocking adoption in the funnel (landing → signup → retention)?
4. Should we pivot or double down on current positioning?
5. What's ONE feature we should build THIS WEEK to prove value?

Provide: Clear recommendation + why
```

**Deliverable:** 
- Pain point analysis
- Feature priority (ranked 1-5)
- Funnel recommendation
- Weekly feature suggestion

---

## 📊 DATA & ANALYTICS (DA)

**Role:** Verify all metrics, model growth, validate claims

**Daily Input Task:**
```
Read THINKING-HISTORY.md previous day section.

Verify:
1. Are all numbers sourced? (No hallucinations?)
2. Is TAM/SAM/SOM realistic given competitors?
3. What's our actual addressable market (not inflated)?
4. Conversion assumptions realistic? (landing → signup → paid)
5. What metrics should we track DAILY in beta?

Provide: Confidence score (1-10) + flags any BS
```

**Deliverable:**
- Metric verification checklist
- Adjusted TAM if needed
- Conversion rate assumptions
- Dashboard metrics proposal

---

## 🎨 DESIGN LEAD (DL)

**Role:** UI/UX, brand, accessibility, mobile optimization

**Daily Input Task:**
```
Read THINKING-HISTORY.md + current app/thinking page.

Analyze:
1. What's confusing users? (From landing page UX perspective)
2. Which design element converts best? (Color, typography, CTA placement)
3. Mobile experience: Any friction?
4. Accessibility: Are we WCAG AA compliant?
5. What ONE design change drives +5% conversion?

Provide: Design spec for implementation
```

**Deliverable:**
- UX friction points identified
- A/B testing suggestions
- Accessibility audit
- Weekly design improvement

---

## 📱 MARKETING LEAD (ML)

**Role:** Growth channels, content, TikTok/X strategy, positioning

**Daily Input Task:**
```
Read THINKING-HISTORY.md previous day.

Analyze:
1. What's trending on TikTok/X related to burnout TODAY?
2. Are competitors winning in marketing? How?
3. What's our unique angle? (vs Calm, Headspace)
4. Should we do organic or paid first?
5. Which creator niche (wellness, dev, remote work) to target?

Provide: Content calendar + 3 content ideas
```

**Deliverable:**
- TikTok/X trend analysis
- Competitive positioning
- Content 3-month calendar
- Creator partnership ideas

---

## 💻 TECH LEAD (TL)

**Role:** Architecture, feasibility, performance, tech decisions

**Daily Input Task:**
```
Read THINKING-HISTORY.md + current codebase.

Assess:
1. Are PM's features technically feasible in 1 week?
2. What's the tech debt? (Performance, scalability)
3. Therapist network API: Real to build or fantasy?
4. Can we hit Lighthouse 95/100?
5. What's ONE tech improvement that scales us 2x?

Provide: Technical roadmap + feasibility scores
```

**Deliverable:**
- Feature feasibility assessment
- Tech debt analysis
- Performance roadmap
- API/infrastructure requirements

---

## 🎭 DEBATE PROCESS (Job #1 - Each Day)

### Step 1: Each sub-agent submits (15 min each × 5 = 75 min total)

```bash
# Via sessions_spawn for each role
sessions_spawn --task "[PM prompt]" --label "MentalClear PM" --model claude
sessions_spawn --task "[DA prompt]" --label "MentalClear DA" --model claude
sessions_spawn --task "[DL prompt]" --label "MentalClear DL" --model claude
sessions_spawn --task "[ML prompt]" --label "MentalClear ML" --model claude
sessions_spawn --task "[TL prompt]" --label "MentalClear TL" --model claude
```

### Step 2: Synthesis & Debate (30 min)

```
Consolidate all 5 inputs:
- Where do they AGREE? (Easy decisions)
- Where do they DISAGREE? (Document debate)
- What's the final DECISION?
```

### Step 3: Document in THINKING-HISTORY.md

```markdown
## 📅 JOUR X - Team Debate

### 🎯 Product Manager Says:
[1-3 key points]

### 📊 Data & Analytics Says:
[1-3 key points]

### 🎨 Design Lead Says:
[1-3 key points]

### 📱 Marketing Lead Says:
[1-3 key points]

### 💻 Tech Lead Says:
[1-3 key points]

### ⚔️ Areas of Disagreement
- PM vs Marketing: Should we do feature X or marketing Y first?
- Design vs Tech: Can we afford this animation for performance?

### ✅ Final Decisions
1. [Decision 1 + why + which role won the debate]
2. [Decision 2 + consensus]
3. [Decision 3 + dissent noted]

### 🎯 This Week's Priorities (From Debate)
- Feature: [TOP PRIORITY from PM + DA validation]
- Marketing: [TOP CHANNEL from ML]
- Design: [TOP IMPROVEMENT from DL]
- Tech: [TOP INFRASTRUCTURE from TL]
```

---

## 💬 Example Debate (Fictional Day 2)

**PM:** "Users abandon at signup. We need email verification."
**DA:** "Actually, 78% get past signup. Drop is at login-day-2 (retention)."
**PM:** "Oh! Then feature should be onboarding flow, not signup."
**DL:** "Onboarding video vs guided walkthrough? Data says video is 3x retention."
**ML:** "But TikTok creators want Guided - easier to show in reels."
**TL:** "Both are feasible. Video = 1 day, guided = 3 days. Recommend video first."
**DA:** "Agreed. Video = quicker learning. We can A/B test guided in Week 2."

**DECISION:** 
- Build onboarding VIDEO (PM + DL + TL consensus)
- A/B test guided walkthrough (ML wants this, but week 2)
- Dissent noted: ML wanted guided first, but DA data + tech timeline wins

---

## 🎯 Integration with Cron Jobs

**Job #1 (03:00 UTC):**
- Spawn all 5 sub-agents
- Collect inputs
- Synthesize debate
- Append THINKING-HISTORY.md
- Pass decisions to Job #2

**Job #2 (05:00 UTC):**
- Read debate decisions
- Implement top 3 features/changes
- Follow Tech Lead's feasibility
- Apply Design Lead's improvements

**Job #3 (07:00 UTC):**
- Deploy & measure
- Check if decisions were right (DA verifies)
- Update /thinking page with debate summary
- Prep next day's questions

---

## ✅ Benefits

- **Diverse perspectives:** No single bias
- **Quality decisions:** Contradictions forced to surface
- **Accountability:** Each role owns their domain
- **Speed:** Clear decisions, no endless debates
- **Learning:** Document dissent = future wisdom
- **Transparency:** Users see HOW decisions made

