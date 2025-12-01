# Portfolio Customization Summary

## ✅ Completed Updates

### Personal Information
- **Name**: Shrishti Dalal
- **Role**: Mathematics & Computer Science Student
- **Email**: shrishti.dalal@berkeley.edu
- **Location**: Berkeley, California (America/Los_Angeles timezone)
- **Languages**: English

### Social Media Links
- ✅ GitHub: https://github.com/shrishtidalal
- ✅ LinkedIn: https://linkedin.com/in/shrishti-dalal
- ✅ Twitter: https://twitter.com/shrishtidalal
- ✅ Email: shrishti.dalal@berkeley.edu

### Home Page
- **Headline**: "Exploring the intersections of mathematics, computer science, and economics"
- **Subline**: Updated with your bio about UC Berkeley and expander graphs research
- **Featured Project**: Disabled (can enable when you add project pages)

### About Page
- **Introduction**: Full bio from your HTML portfolio
- **Work Experience**: All 5 positions added:
  1. Mathematics DRP (Feb 2025 - Present)
  2. Helen Wills Neuroscience Institute (Aug 2023 - Jan 2024)
  3. Federal Home Loan Bank of Chicago (May 2024 - Aug 2024)
  4. UC Berkeley CS 61C Academic Intern (Sep 2023 - Dec 2023)
  5. Irvine CubeSat (Nov 2018 - May 2022)
- **Education**: 
  - UC Berkeley B.A. with full coursework list
  - SCET Certificate
- **Technical Skills**: 
  - Programming Languages (Python, Java, C/C++, SQL, R, MATLAB, Assembly, Scheme)
  - Mathematics (Linear Algebra, Calculus, Abstract Algebra, etc.)

### Blog & Projects
- Blog title and description updated
- Projects description updated

### Configuration
- Schema information updated with your name and email
- Social links for SEO updated

## 📝 Next Steps

### 1. Add Your Avatar Image
Download your profile picture and save it as:
```
public/images/avatar.jpg
```
Or update the path in `content.tsx` if using a different filename.

### 2. Create Project Pages (MDX files)
Add your projects as MDX files in `src/app/work/projects/`:

**Expander Graph Visualization Tool** (`expander-graph-visualization-tool.mdx`):
```mdx
---
title: "Expander Graph Visualization Tool"
date: "2025-01-01"
description: "Interactive visualization tool for exploring expander graphs and their properties"
cover: "/images/projects/expander-graph/cover.jpg"
---

Developed an interactive visualization tool for exploring expander graphs and their properties. 
Built with Python and matplotlib, with a focus on visualizing spectral properties and connectivity.

## Technologies
- Python
- NetworkX
- Graph Theory
- Data Visualization
```

**Bayesian Decision Model** (`bayesian-decision-model.mdx`):
```mdx
---
title: "Bayesian Decision Model"
date: "2023-10-01"
description: "Computational model of decision-making under uncertainty using Bayesian methods"
cover: "/images/projects/bayesian-model/cover.jpg"
---

Built a computational model of decision-making under uncertainty using Bayesian methods. 
Implemented in Python with PyMC for MCMC sampling and parameter estimation.

## Technologies
- Python
- PyMC
- Bayesian Statistics
- Decision Theory
```

**CubeSat Orientation System** (`cubesat-orientation-system.mdx`):
```mdx
---
title: "CubeSat Orientation System"
date: "2022-05-01"
description: "Star tracking system for CubeSat orientation using OpenCV"
cover: "/images/projects/cubesat/cover.jpg"
---

Designed and implemented a star tracking system for CubeSat orientation using OpenCV and 
public star databases. Integrated with IMU sensor data for robust orientation estimates.

## Technologies
- C++
- OpenCV
- Embedded Systems
- Image Processing
```

### 3. Create Blog Posts (MDX files)
Add your blog posts as MDX files in `src/app/blog/posts/`:

**The Beauty of Graph Theory** (`graph-theory.mdx`):
```mdx
---
title: "The Beauty of Graph Theory in Unexpected Places"
date: "2025-02-15"
description: "From social networks to neural connections, graph theory shows up everywhere"
---

From social networks to neural connections, graph theory has a way of showing up in the 
most unexpected places. Here's how I found graph theory principles in dance choreography...
```

### 4. Update Base URL
In `src/resources/once-ui.config.ts`, update:
```typescript
const baseURL: string = "https://yourname.com"; // or your Vercel/Netlify URL
```

### 5. Optional: Add Gallery Images
If you want to use the gallery page, add images to `public/images/gallery/` and update the 
`gallery.images` array in `content.tsx`.

### 6. Test Locally
Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 🎨 Design Customization
You've already updated:
- Brand color: indigo
- Accent color: violet

You can further customize colors, fonts, and styles in `src/resources/once-ui.config.ts`.

## 📸 Image Requirements
- **Avatar**: `public/images/avatar.jpg` (recommended: square, 400x400px or larger)
- **OG Image**: `public/images/og/home.jpg` (for social sharing, 1200x630px recommended)
- **Project covers**: Add to `public/images/projects/[project-name]/cover.jpg`

## 🔗 Profile Picture
Your current profile picture URL from GitHub:
```
https://raw.githubusercontent.com/shrishtidalal/shrishtidalal.github.io/main/profile.jpeg
```

You can download this and save it as `public/images/avatar.jpg`, or update the avatar path 
in `content.tsx` to use the GitHub URL directly (though local is recommended for better performance).

