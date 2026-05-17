# Brixline Agents

Brixline Agents is a modern, responsive landing page for a real estate brokerage platform. The website is designed to showcase the value proposition of the Brixline Agent Portal, highlighting features such as verified inventory, commission tracking, legal support, and growth analytics.

**Live Demo: https://brixline-agent.vercel.app**

---

## Overview

Brixline Agents helps real estate brokers understand how the platform streamlines their workflow. The landing page presents key benefits, platform statistics, testimonials, FAQs, and call-to-action sections in a clean and professional interface.

The design focuses on simplicity, scalability, and trust, using modern typography, responsive layouts, and smooth animations.

---

## Features

### Hero Section
- Professional navigation bar with smooth scrolling
- Clear product headline and supporting description
- Primary call-to-action buttons
- Mobile application previews for buying and selling workflows

### Advantages Section
- Earn up to 15% brokerage
- Access to 10,000+ verified properties
- Zero platform tax
- T+7 payouts

### Platform Performance
Animated statistics counters displaying:
- 2000+ Brokers
- 100+ Verified Listings
- 0% Platform Fee
- 100% Payout Transparency

### Unified Platform Section
Highlights major platform capabilities:
- Verified Inventory
- Real-Time Tracking
- Smart Documentation
- Growth Analytics

### Testimonials
Broker reviews and social proof.

### FAQ Section
Expandable frequently asked questions.

### Footer
Navigation links and branding.

### Responsive Design
Optimized for desktop, tablet, and mobile devices.

### Smooth Animations
Built using Framer Motion for seamless transitions.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite

### Styling
- Tailwind CSS

### Animations
- Framer Motion

### Icons
- Lucide React

### Deployment
- Vercel

---

## Project Structure

```text
brixline-agents/
├── public/
├── src/
│   ├── components/
│   │   ├── CountUp.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── Marquee.tsx
│   │   ├── OnePlatform.tsx
│   │   ├── SplitText.tsx
│   │   ├── Stats.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

---

## Prerequisites

Ensure the following tools are installed:

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- Git

Verify installation:

```bash
node -v
npm -v
git --version
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sneha2422/brixline-agents.git
cd brixline-agents
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

| Command | Description |
|-------|-------|
| `npm install` | Installs all dependencies |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |

---

## Deployment on Vercel

1. Push the project to GitHub.
2. Open Vercel and import the repository.
3. Configure the build settings:

   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. Click **Deploy**.

---

## Design Highlights

- Clean and modern UI
- Professional typography
- Responsive layout
- Scroll-based navigation
- Animated counters
- Structured content hierarchy

---

## Use Cases

This template can be adapted for:

- Real estate platforms
- SaaS landing pages
- Startup websites
- Brokerage portals
- B2B product showcases

---

## Future Enhancements

- Authentication system
- Agent dashboard
- CRM integration
- Property search
- Lead management
- Commission analytics

---

## License

This project is available for educational and portfolio purposes.
