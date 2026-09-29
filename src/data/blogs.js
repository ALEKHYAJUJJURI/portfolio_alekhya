// src/data/blogs.js
// Each post has: id, title, description, tags, readTime, date, content (markdown-style paragraphs)

export const blogs = [
  {
    id: 'app-store-deployment-lessons',
    title: 'What Nobody Tells You About Deploying to the App Store',
    description:
      'A practical breakdown of the iOS build and submission process — provisioning profiles, TestFlight quirks, and the three things that will silently block your release.',
    tags: ['React Native', 'iOS', 'App Store', 'Expo'],
    readTime: 4,
    date: 'Mar 2025',
    content: [
      `When I shipped my first iOS build for the OK TeleHealth app, I expected the hardest part to be the code. It wasn't. It was the fifteen minutes I spent staring at a provisioning profile error with no clear explanation.`,
      `Here's what I learned after going through the full cycle — Expo EAS Build, TestFlight distribution, and final App Store submission — twice.`,
      `**1. Your bundle identifier is permanent (treat it that way)**\nOnce you set your bundle ID in App Store Connect, you cannot rename it. If you later refactor your Expo config and generate a new one, Apple treats it as a completely different app. Set it right on day one and commit it to your config file.`,
      `**2. Provisioning profiles expire silently**\nA profile can expire mid-build and the error message won't directly say that. If your EAS build fails with a code-signing error after working fine for weeks, check the profile expiry date in your Apple Developer account first.`,
      `**3. TestFlight and App Store builds are not the same**\nTestFlight will accept builds that App Store review will reject — particularly around missing privacy manifest entries (required since iOS 17) and permission usage descriptions. Run through Apple's review guidelines checklist before your first external release, not after.`,
      `The whole process is learnable. The documentation is just scattered across three different Apple portals, Expo's docs, and a handful of Stack Overflow threads from 2021. Hopefully this saves you a few hours.`,
    ],
  },
  {
    id: 'redux-vs-context',
    title: 'Redux Toolkit vs Context API — How I Decide Which to Use',
    description:
      'Not a "which is better" debate. A practical decision framework I actually use when starting a new feature.',
    tags: ['React Native', 'Redux Toolkit', 'Context API', 'State Management'],
    readTime: 3,
    date: 'Feb 2025',
    content: [
      `I've used both Context API and Redux Toolkit in the same codebase — different features, different reasons. Here's the honest framework I use.`,
      `**Context API is the right call when:**\n- The state is used by 2–4 components in a subtree\n- The data doesn't change often (theme, locale, auth user object)\n- You don't need middleware, dev tools, or time-travel debugging\n- The project is small enough that boilerplate genuinely slows you down`,
      `**Redux Toolkit is the right call when:**\n- Multiple unrelated components across the tree read and write the same state\n- You're managing async flows (API calls, loading/error states)\n- You need predictable, auditable state changes — especially useful when debugging mobile crashes\n- The team is more than one person`,
      `In the TeleHealth app, we used Context API for the authenticated user object (set once on login, read everywhere) and Redux Toolkit for appointments, consultations, and notifications — all of which had multiple async states and were read and written from different screens.`,
      `The mistake I see most often is using Context for everything because it requires less setup, then introducing unnecessary re-renders across the tree when any piece of state changes. Redux Toolkit's slice pattern prevents that.`,
      `Pick the right tool per feature. There's no rule that says you can only use one.`,
    ],
  },
  {
    id: 'react-native-performance-25-percent',
    title: 'How We Cut App Load Time by 25% in React Native',
    description:
      'The specific changes that moved the needle — and the ones that looked good on paper but didn\'t.',
    tags: ['React Native', 'Performance', 'Expo', 'Optimisation'],
    readTime: 4,
    date: 'Jan 2025',
    content: [
      `The 25% load time reduction on the OK TeleHealth app wasn't one big fix. It was four small ones applied consistently.`,
      `**Lazy loading screens**\nWe were eagerly importing every screen at the router level. Switching to React.lazy() with Suspense meant the app only loaded what the user was actually navigating to. For a telehealth app with 20+ screens, this was the single biggest win.`,
      `**Memoising the right components**\nNot every component needs React.memo(). We profiled first (React DevTools Profiler + Flipper) and found three components re-rendering on every navigation event despite receiving the same props. Wrapping those three — and only those three — with memo() was enough.`,
      `**Deferring non-critical API calls**\nOn the home screen, we were firing six API calls simultaneously on mount. Two of them (notification preferences, profile metadata) weren't needed until the user interacted. Moving those to useEffect with a 300ms delay after mount made the initial render feel immediate.`,
      `**Image optimisation**\nThis one seems obvious but it's easy to miss in a fast-moving codebase. Profile photos and appointment thumbnails were being served at full resolution. Switching to appropriately sized images with FastImage reduced memory pressure noticeably on lower-end Android devices.`,
      `What didn't work: virtualization tweaks on a list with 12 items (not worth it below ~50 items), and moving state from Context to Redux (that was done for correctness, not speed).`,
      `Measure before you optimise. The things you think are slow often aren't.`,
    ],
  },
  {
    id: 'biometric-auth-react-native',
    title: 'Implementing Biometric Authentication in React Native with Expo',
    description:
      'A step-by-step walkthrough of adding Face ID / fingerprint login using expo-local-authentication, including the edge cases.',
    tags: ['React Native', 'Expo', 'Authentication', 'iOS', 'Android'],
    readTime: 5,
    date: 'Dec 2024',
    content: [
      `Biometric authentication is one of those features that sounds complicated but is surprisingly straightforward with Expo — until you hit the edge cases. Here's a complete walkthrough.`,
      `**Setup**\nInstall expo-local-authentication and add the necessary permissions to app.json:\n"ios": { "infoPlist": { "NSFaceIDUsageDescription": "Used to securely log you in." } }`,
      `**The basic flow**\nThree calls cover the happy path: LocalAuthentication.hasHardwareAsync() to check device support, LocalAuthentication.isEnrolledAsync() to verify the user has biometrics set up, and LocalAuthentication.authenticateAsync() to prompt the system UI.`,
      `**Edge cases worth handling**\n- User hasn't enrolled biometrics: show a fallback to PIN/password, never fail silently\n- Biometrics locked after too many attempts: authenticateAsync returns { success: false, error: 'lockout' } — detect this and route to password login\n- Android fragmentation: some older devices report hasHardwareAsync() as true but isEnrolledAsync() as false; always check both\n- iOS simulator: biometrics always fail in the simulator, so gate your testing to a physical device`,
      `**Storing the session**\nBiometric auth doesn't replace your auth token — it gates access to it. Store the JWT in SecureStore, then use biometrics as the key to retrieve it on subsequent opens. Never store credentials in AsyncStorage.`,
      `The full implementation took about a day including QA across four devices. The Expo docs cover the API well; the gaps are in the edge case handling, which is what this post fills in.`,
    ],
  },
  {
    id: 'agile-dev-team-lessons',
    title: 'Things I Learned Working in My First Agile Team',
    description:
      'Not a tutorial on Scrum. Honest observations from working in sprints with backend, QA, and design for the first time.',
    tags: ['Agile', 'Scrum', 'Career', 'Team'],
    readTime: 3,
    date: 'Nov 2024',
    content: [
      `Before Galactix, I'd read about Agile. Working in it is different from reading about it.`,
      `**Standups are for blockers, not updates**\nIt took me a few weeks to understand this. The standup isn't a progress report — it's a forum for surfacing anything that's blocking someone else. If you're heads-down and unblocked, "no blockers" is a complete standup.`,
      `**QA is a collaborator, not a gatekeeper**\nThe best bugs I had fixed quickly were ones I found out about before they reached the QA cycle — because I'd talked to the QA engineer about what they were planning to test. Building that relationship early saved more time than any code review process.`,
      `**Estimation is a skill, not a guess**\nI consistently underestimated tasks that involved third-party integrations (Stripe, Video SDK, Google Maps) because I forgot to account for documentation reading, sandbox setup, and edge case handling. Now I add 40% to any estimate that involves a new external dependency.`,
      `**Write your own tickets clearly enough that someone else could pick them up**\nThis is discipline that pays you back. When a ticket I wrote had to be picked up by another developer mid-sprint, the quality of my description directly determined how quickly they could start. Vague acceptance criteria are a gift to ambiguity.`,
      `I still have a lot to learn about working in teams. These four things made me meaningfully better in the first six months.`,
    ],
  },
];