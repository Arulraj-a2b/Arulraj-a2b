# Arulraj Venkadachalam

**Senior Frontend Engineer | Frontend Architect** · Salem, India

[![Portfolio](https://img.shields.io/badge/Portfolio-arulraj1997.netlify.app-4f46e5?style=flat-square&logo=netlify&logoColor=white)](https://arulraj1997.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abofficial1997-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abofficial1997)
[![Email](https://img.shields.io/badge/Email-abofficial1997%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:abofficial1997@gmail.com)
[![CV](https://img.shields.io/badge/CV-Download%20PDF-0f172a?style=flat-square&logo=readdotcv&logoColor=white)](https://arulraj1997.netlify.app/Arulraj_Venkadachalam_CV.pdf)

## About me

Senior Frontend Engineer with 6+ years designing and delivering scalable web and mobile platforms, leading frontend architecture across 16 frontend applications and modules at The Reward Store. Architected a Module Federation platform of 9 micro-frontends integrated into 4 host applications, a multi-gateway checkout and a 76-component multi-brand design system. Owns release engineering, testing standards and production reliability.

## Key strengths

| | |
| --- | --- |
| Frontend Architecture & Micro-Frontends | Payment & Checkout Flows |
| Design Systems & Multi-brand Theming | Testing & Accessibility |
| Release & Production Ownership | Performance & Bundle Budgets |
| Mobile Apps & SDKs | Technical Leadership & Mentoring |

## Tech stack

![React](https://img.shields.io/badge/React%2019-20232a?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat-square&logo=radixui&logoColor=white)
![Module Federation](https://img.shields.io/badge/Rspack%20%2F%20Webpack%20Module%20Federation-8DD6F9?style=flat-square&logo=webpack&logoColor=1C78C0)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=flat-square&logo=capacitor&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-20232a?style=flat-square&logo=react&logoColor=61DAFB)
![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-FF9900?style=flat-square&logo=awsamplify&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

- **Frontend:** React 19, TypeScript, JavaScript, Next.js, Vite, React Router, Redux Toolkit / RTK Query, Apollo Client, Tailwind CSS v4, Radix UI, SCSS / Sass, Styled Components, CSS Modules, Formik + Yup, React Hook Form + Zod
- **Architecture & Build:** Micro-frontends, Module Federation, Rspack / Webpack (splitChunks, code splitting, Brotli bundle budgets), design systems, pnpm / Turborepo monorepos, Changesets
- **Payments & APIs:** Razorpay, Cashfree, Zaakpay, points and wallet checkout; REST, OpenAPI (generated types), GraphQL (Apollo, AWS AppSync), SSE, OAuth / SSO / OTP
- **Testing & Accessibility:** Playwright, @axe-core/playwright, Vitest, Jest, React Testing Library, Storybook, CI coverage gates
- **Mobile, Cloud & Delivery:** Capacitor, React Native, App Store / Google Play releases, SDKs for iOS / Android / Flutter; AWS Amplify, GitLab CI, Bitbucket Pipelines, feature flags, HyperDX / ClickHouse
- **Backend & Tools:** Go / gRPC, PostgreSQL, Kafka (working knowledge); Claude Code, Cursor

## Experience

### Senior Software Engineer, Frontend · The Reward Store
*Global Rewards Platform (Vananam Rewards Private Limited) · Jan 2025 – Present*

Leads frontend architecture for three products, Storefront (Rewards), Rekyndl (Loyalty) and Applaud IQ (Employee Recognition), plus the Client Panel and Admin Panel: 16 frontend applications and modules (9 micro-frontends, 4 hosts, 3 standalone apps). Built the Rekyndl and Applaud IQ apps from scratch; started as the only senior frontend engineer and now also mentors a junior developer.

- **Micro-frontend architecture:** Built the 9 Storefront micro-frontends in React and TypeScript on Rspack Module Federation and composed them into the 4 hosts (Storefront, Rekyndl, Applaud IQ, Client Panel) with shared singleton dependencies, so features are built once and reused.
- **Payments & checkout:** Built one checkout for six categories (gift cards, recharge, bills, flights, merchandise, experiences) with a per-customer payment gateway resolver (points, wallet, Razorpay, Cashfree, Zaakpay), status polling, failure / dismissal / refund handling and a shared error catalog.
- **Release isolation & performance:** Made each remote independently releasable with per-remote Amplify rollback, federation retry, route-level error boundaries, stale-chunk recovery and release detection; targeted splitChunks and Brotli bundle budgets fail CI when a build exceeds its budget.
- **Design system:** Designed and published @therewardstore/*, used by all 16 apps and modules: 76 accessible Radix + Tailwind v4 components with multi-brand light/dark theming and runtime white-labelling; 80 versions in 11 weeks, replacing two legacy UI kits.
- **Testing & accessibility:** Established ~460 Playwright tests with @axe-core accessibility checks against Storybook and a 95% changed-file coverage gate on Vitest + React Testing Library suites, with CI gates that block detected test failures and accessibility violations.
- **Mobile & SDKs:** Published the Storefront and Applaud IQ apps on a remote-URL Capacitor shell, so web deploys reach installed apps without a store review cycle; shipped the Applaud IQ embed SDK for 6 runtimes on one bridge protocol.
- **Production & rollout:** Owns AWS Amplify deployments, staging / production and store releases; per-customer feature flags gate which remotes load and stage rollouts. Diagnosed a Capacitor session-cookie loss through HyperDX / ClickHouse traces and fixed it with a dev API proxy.
- **Architecture leadership:** Owns the frontend platform decisions all 16 apps and modules build on (Module Federation conventions, shared packages), recorded in 45+ architecture decision records; sets coding standards, reviews PRs and built the create-app scaffolding CLI.
- **Backend contributions (AI-assisted):** Over ~6 months, contributed Go / gRPC routes, protobuf contracts, handlers and PostgreSQL migrations to 5 services (gateway, notifications, employee, rewards, loyalty-engine) and Kafka consumers; reviewed and tested every change.

### Software Engineer · Ripple Street India Private Limited
*B2H Marketing Platform · Jul 2023 – Jan 2025*

React web platform on Module Federation micro-frontends with AWS Amplify and AppSync GraphQL, plus iOS and Android React Native apps.

- **Apollo Client & GraphQL:** Kept lists current without refetching using cache.modify, keyFields and optimisticResponse (rollback with an error toast on failure); regenerated TypeScript types from the AppSync schema with Amplify codegen.
- Shipped the iOS and Android React Native apps to both stores.
- Owned core features and removed redundant code, cutting bundle size by 20%.

### Senior Software Engineer · Squash Apps
*FinTech & Workplace Solutions · Apr 2022 – Jul 2023*

- Led a team of 2 engineers delivering the Payfiniti payment apps for web, Android and iOS on time.
- Built an offline-capable office desk-booking app for Android and iOS with React Native CLI.
- Independently managed two client projects, one for a US client and one for an Australian client, owning requirements discussions, development coordination and delivery across time zones.

### Frontend Developer · Zita.ai
*AI-Powered Recruitment Platform · Oct 2021 – Mar 2022*

- Owned the entire frontend of an AI resume-evaluation platform in React.js, from UI/UX to production.
- Streamlined the evaluation flow, cutting candidate selection time by 50% versus the manual process.

### Frontend Developer · ShopUp
*Retailer E-Commerce Platform · May 2020 – Oct 2021*

- Built a UI component npm library standardising UI across projects (+30% developer productivity).
- Designed and implemented the product-management interface for the retailer catalogue.

## Education

- **B.E. — Computer Science Engineering**, Thiagarajar College of Engineering, Madurai · 2017 – 2020 · CGPA 7.03
- **Diploma — Electronics & Communication Engineering**, Thiagarajar Polytechnic, Salem · 2015 – 2017 · 89%

## Languages

Tamil (native) · English (professional working proficiency)
