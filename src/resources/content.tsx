import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shrishti",
  lastName: "Dalal",
  name: "Shrishti Dalal",
  role: "Mathematics & Computer Science Student",
  avatar: "/images/avatar.jpg",
  email: "shrishti.dalal@berkeley.edu",
  location: "America/Los_Angeles", // Berkeley, California
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false, // Set to true if you want to show newsletter signup
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about mathematics, computer science, and research</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shrishtidalal",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/shrishti-dalal",
    essential: true,
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/shishdalal1",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Academic Portfolio`,
  description: `Portfolio of ${person.name}, ${person.role} at UC Berkeley. Research, projects, and work in mathematics, computer science, and economics.`,
  headline: <>Math. Trading. Software. Education. </>,
  featured: {
    display: false, // Set to true and add project slug when you have a featured project
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/expander-graph-visualization-tool",
  },
  subline: (
    <>
      Welcome! I'm {person.firstName}, a recent graduate of Computer Science and Applied Mathematics at{" "}
      <Text as="span" size="xl" weight="strong">UC Berkeley</Text>,{" "} currently working in equity options trading in Chicago.
      <br />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} at UC Berkeley. Research in mathematics and computer science, with experience in computational psychiatry, quantitative finance, and aerospace engineering.`,
  tableOfContent: {
    display: true, // TODO: Set to false to hide table of contents
    subItems: false,
  },
  avatar: {
    display: true, // TODO: Set to false to hide avatar
  },
  calendar: {
    display: false, // Set to true and add your calendar link if you want to show it
    link: "https://cal.com/yourusername",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello! 👋 I'm Shrishti. I recently graduated with simultaneous degrees in Mathematics and Computer Science from the University of California, Berkeley. 
        I am currently working in options trading at Milliman. I was formerly a research assistant at the Helen Wills Neuroscience Institute, and a visiting student at the Toyota Technological Institute at Chicago (TTIC).
        <br />
        <br />
        My research interests lie in applying math to understand thought and vice versa. 
        Feel free to reach out about theory, computation, and everything in between.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Milliman",
        timeframe: "June 2025 - Present",
        role: "Trading @ Milliman",
        link: "https://frm.milliman.com/en",
        achievements: [
          "Derivatives trading, technology and risk management.",
        ],
        images: [],
      },
      {
        company: "Federal Home Loan Bank of Chicago",
        timeframe: "May 2024 - August 2024",
        role: "Quant Market Risk @ FHLBC",
        link: "https://www.fhlbc.com/",
        achievements: [
          "Income simulation modeling team. Automation & data.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of California, Berkeley",
        description: (
          <>
            B.A. Computer Science 
            <br />
            B.A. Applied Mathematics (conc. Economics)
            <br />
            <br />
            <strong>Coursework:</strong> Computer Architecture, Algorithms, Data Structures, Computer Security, Machine Learning, 
            Artificial Intelligence, Abstract Algebra, Probability Theory, Numerical Analysis, Differential Equations, Discrete Mathematics, Complex Analysis, and so much more.
          </>
        ),
      },
      {
        name: "SCET Certificate in Entrepreneurship & Technology",
        description: (
          <>
            UC Berkeley College of Engineering
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages & Technologies",
        description: (
          <>
            Proficient in multiple programming languages and frameworks for systems programming, 
            data analysis, machine learning, and scientific computing. Experience ranges from low-level 
            embedded systems to high-level data science applications.
          </>
        ),
        tags: [
          { name: "Python" },
          { name: "Java" },
          { name: "C/C++" },
          { name: "SQL" },
          { name: "R" },
          { name: "MATLAB" },
          { name: "Assembly" },
          { name: "Scheme" },
          { name: "OpenCV" },
          { name: "PyMC" },
          { name: "NetworkX" },
        ],
        images: [],
      },
      {
        title: "Mathematics & Theoretical Foundations",
        description: (
          <>
            Strong foundation in pure and applied mathematics, with particular expertise in algebra, 
            analysis, discrete mathematics, and their applications to computer science and economics.
          </>
        ),
        tags: [
          { name: "Linear Algebra" },
          { name: "Abstract Algebra" },
          { name: "Group Theory" },
          { name: "Graph Theory" },
          { name: "Real Analysis" },
          { name: "Complex Analysis" },
          { name: "Probability Theory" },
          { name: "Numerical Methods" },
          { name: "Differential Equations" },
          { name: "Discrete Mathematics" },
        ],
        images: [],
      },
      {
        title: "Data Science & Machine Learning",
        description: (
          <>
            Experience with statistical modeling, machine learning algorithms, and data analysis 
            techniques applied to research problems in neuroscience, finance, and mathematics.
          </>
        ),
        tags: [
          { name: "Bayesian Statistics" },
          { name: "Machine Learning" },
          { name: "Data Visualization" },
          { name: "Statistical Modeling" },
          { name: "MCMC Methods" },
          { name: "Decision Theory" },
        ],
        images: [],
      },
    ],
  },
  sideQuests: {
    display: true,
    title: "Side Quests",
    quests: [
      {
        title: "Teaching 'The Mathematics of Cutting Cake'",
        description: (
          <>
            Volunteered as a Splash instructor, teaching high school students about fair division 
            algorithms and the mathematics behind cutting cake (and other divisible goods) fairly. 
            Because who doesn't want to learn math through cake?
          </>
        ),
        tags: [
          { name: "Teaching" },
          { name: "Mathematics" },
          { name: "Volunteering" },
        ],
      },
      {
        title: "TechCrunch Speaker",
        description: (
          <>
            Spoke at TechCrunch with founder Amy Jain about an idea to democratize venture capital.
          </>
        ),
        tags: [
          { name: "Public Speaking" },
          { name: "Technology" },
        ],
      },
      {
        title: "Aspiring Motorcyclist",
        description: (
          <>
            Got my motorcylce license in October 2025 and looking to buy one soon.
          </>
        ),
        tags: [
          { name: "Public Speaking" },
          { name: "Technology" },
        ],
      },
      {
        title: "Cal Bhangra",
        description: (
          <>
            Met some of my best friends here. Nights in a parking garage well spent.
          </>
        ),
        tags: [
          { name: "Dance" },
          { name: "Shenanigans" },
        ],
      },
      {
        title: "Volleyball",
        description: (
          <>
            I've played volleyball since I was 9, still in love with it. 
          </>
        ),
        tags: [
          { name: "Sports" },
          { name: "Teamwork" },
        ],
      },
      {
        title: "Volunteering",
        description: (
          <>
            Volunteered at Berkeley Math Tournament and Stanford Math Tournament, was mind blown by the kids. 
            Hoping to become a volunteer teacher at Math Circles of Chiccago this year.
          </>
        ),
        tags: [
          { name: "Mathematics" },
          { name: "Competition" },
        ],
      },
      {
        title: "Quantum Computing Symposium",
        description: (
          <>
            Attended and participated in quantum computing symposium. Presented a poster reviewing quantum walks on hierarchical graphs as an
            extension of the welded tree problem.
          </>
        ),
        tags: [
          { name: "Quantum Computing" },
          { name: "Research" },
        ],
      },
      {
        title: "Cal Hacks 2022",
        description: (
          <>
            Was my first taste of Bay Area energy.
          </>
        ),
        tags: [
          { name: "Hackathon" },
          { name: "Programming" },
        ],
      },
      {
        title: "Stanford-Berkeley Research Meetup for Women in CS & EE",
        description: (
          <>
            Met a lot of incredible researchers across the two campuses.
          </>
        ),
        tags: [
          { name: "Community" },
          { name: "Research" },
          { name: "Networking" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Read what ${person.name} has been writing about her latest side quests.`,
  // Create new blog posts by adding a new .mdx file to src/app/blog/posts
  // All posts will be automatically listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Research projects, software development, and technical work by ${person.name}. Including expander graph visualization, Bayesian decision modeling, and CubeSat avionics systems.`,
  // Create new project pages by adding a new .mdx file to src/app/work/projects
  // All projects will be automatically listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // TODO: Replace with your own images
  // Add images to public/images/gallery/ and reference them here
  // Set orientation to "horizontal" or "vertical" based on image aspect ratio
  images: [
    // TODO: Add your gallery images
    // {
    //   src: "/images/gallery/your-image-1.jpg",
    //   alt: "Description of image",
    //   orientation: "horizontal", // or "vertical"
    // },
    // {
    //   src: "/images/gallery/your-image-2.jpg",
    //   alt: "Description of image",
    //   orientation: "vertical",
    // },
    // Keep placeholder images for now, or remove them and add your own
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
