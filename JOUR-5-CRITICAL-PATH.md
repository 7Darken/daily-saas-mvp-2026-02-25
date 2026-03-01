# JOUR 5 Critical Path - Data Persistence & Analytics
**Status:** Initiated Sunday Mar 1, 5:00 AM UTC  
**Owner:** Kenz (Execution), Tech Lead (Build)  
**Deadline:** Friday Mar 5, EOD (HARD DEADLINE)

---

## 🚨 BLOCKERS IDENTIFIED

**TL's Dissent:** "localStorage will fail by Friday. This is non-negotiable."

**Risk:** At 100+ concurrent users (expected Thu-Fri from Reddit GTM), localStorage:
- ❌ Loses user signup data on browser refresh
- ❌ Fails to persist check-in streaks
- ❌ Causes session loss after 5+ minutes
- ❌ **LAUNCH FAILURE** by Friday evening

**Solution:** Supabase migration (PostgreSQL persistence)

---

## 📋 CRITICAL PATH CHECKLIST

### Priority 1: Supabase Setup (Mon Mar 3)
- [ ] Create Supabase project at https://supabase.com
- [ ] Get `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Create `users` table schema:
  ```sql
  create table users (
    id uuid primary key default auth.uid(),
    email text unique,
    created_at timestamp default now(),
    signup_source text, -- utm_source attribution
    variant text -- A/B test variant
  );
  ```
- [ ] Create `checkins` table schema:
  ```sql
  create table checkins (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references users(id),
    stress_level integer,
    sleep_hours integer,
    focus_level integer,
    created_at timestamp default now()
  );
  ```

### Priority 2: Signup Flow Migration (Tue Mar 4)
- [ ] Install Supabase client: `npm install @supabase/supabase-js`
- [ ] Create `lib/supabase.ts` - Supabase client initialization
- [ ] Update `app/app/page.tsx` - Replace localStorage signup with Supabase INSERT
- [ ] Add NextAuth.js session persistence (prevent refresh logout)
- [ ] Test signup flow end-to-end with Supabase backend

### Priority 3: GA4 Deployment (Tue-Wed Mar 4-5)
- [ ] Get GA4 tracking ID from Google Analytics (create new property)
- [ ] Set `NEXT_PUBLIC_GA_ID` env var
- [ ] Deploy `lib/analytics.ts` tracking in app
- [ ] Add gtag script to `app/layout.tsx` or `_document.tsx`
- [ ] Test GA4 dashboard - verify events firing

### Priority 4: Load Testing (Wed Mar 5)
- [ ] Setup load test: simulate 50 concurrent signup requests
- [ ] Verify Supabase handles without data loss
- [ ] Verify NextAuth.js sessions are resilient to refresh
- [ ] Document any issues; escalate to TL ASAP

### Priority 5: Rollback Plan (Wed Mar 5)
- [ ] Document fallback: if Supabase fails, revert to localStorage + manual backup
- [ ] Git rollback strategy documented
- [ ] Communicate deployment risk to team

---

## 📊 METRICS TO VALIDATE

**Success = All green by Friday EOD:**
- ✅ Supabase users table persisting signups (test: 10 test users)
- ✅ Check-in streaks persisting across page refreshes (test: 5+ consecutive)
- ✅ GA4 events firing for signup, checkin, subscription (test: manual event verification)
- ✅ 50-concurrent user load test passes (0 data loss, <500ms response)
- ✅ Mobile signup flow works on iPhone SE (14px text, visible buttons)

---

## 🎯 PARALLEL WORKSTREAMS

### Marketing (Tue-Fri)
- [ ] Reddit threads staggered (Tue-Fri, 1-2 per day)
- [ ] Creator DMs sent (Tue-Wed, 5-8 total)
- [ ] Monitor upvotes, comments, click-through hourly (first 24h)

### Product (Tue-Wed)
- [ ] Verify check-in time selector (3-option + 9 AM default)
- [ ] Verify streak counter display (🔥 emoji + count)
- [ ] A/B test variants enabled (?variant=A or ?variant=B)

### Design (Wed)
- [ ] Deploy mobile modal redesign (async to Reddit launch)
- [ ] Add aria-labels for accessibility (screen reader support)
- [ ] Test on iPhone SE + landscape orientation

---

## 💬 COMMS PLAN

**Monday (Today):** Announce critical path to team  
**Wednesday:** Status update - "On track for Friday launch"  
**Thursday EOD:** Final verification + rollback ready  
**Friday 5 AM UTC:** All clear for Reddit GTM launch at 9 AM CET

---

## 🗳️ DISSENTS DOCUMENTED

**PM:** "Supabase is over-engineered. Why not Firebase?"  
→ **Counter:** Either works. Choose Supabase for cost + open-source community. Move fast.

**ML:** "Can we delay Supabase to Week 2?"  
→ **Counter:** NO. localStorage fails at 100+ users. We hit 100 Tue-Wed. Ship Supabase Mon-Tue or launch fails.

---

**STATUS:** AWAITING KENZ CONFIRMATION
**NEXT:** Monday Mar 3, 9:00 AM CET - Supabase setup begins
