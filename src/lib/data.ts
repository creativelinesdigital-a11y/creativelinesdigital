import { PlaceHolderImages } from "@/lib/placeholder-images";

const findImage = (id: string) => {
    const image = PlaceHolderImages.find(img => img.id === id);
    return image ? { url: image.imageUrl, hint: image.imageHint, alt: image.description } : { url: '', hint: '', alt: '' };
};

export const navLinks = [
  {
    title: "Insights",
    megaMenu: [
      {
        title: "Company",
        href: "#",
        links: [
          { title: "Life at Binate", href: "#" },
          { title: "Why Us", href: "#" },
          { title: "Partnerships", href: "#" },
        ],
      },
      {
        title: "Resources",
        href: "#",
        links: [
          { title: "Blog", href: "#" },
          { title: "Contact Us", href: "#" },
          { title: "Austin", href: "#" },
        ],
      },
      {
        title: "About",
        href: "#",
        links: [
            { title: "Tailored Digital Solutions: Your Key to a Competitive Advantage.", href: "#" },
        ]
      }
    ],
  },
  {
    title: "Solutions",
    megaMenu: [
        {
            title: "Solutions",
            href: "#",
            links: [
                { title: "Staff Augmentation", href: "/staff-augmentation" },
                { title: "Dedicated Development Team", href: "/dedicated-development-team" },
                { title: "IT Staffing Services", href: "/it-staffing-services" },
                { title: "OTT App Development", href: "/ott-app-development" },
                { title: "App Store Optimization", href: "/app-store-optimization" },
                { title: "Digital Marketing", href: "/digital-marketing" },
                { title: "Software Testing", href: "/software-testing" },
            ]
        },
        {
            title: "QA & Support",
            href: "#",
            links: [
                { title: "Software Testing", href: "/software-testing" },
                { title: "Support & Maintenance", href: "#" },
                { title: "Mobile Testing", href: "#" },
                { title: "API Integration", href: "#" },
            ]
        },
        {
            title: "Consulting & Strategy",
            href: "#",
            links: [
                { title: "IT Consulting", href: "#" },
                { title: "Product Management", href: "#" },
                { title: "Startup Consulting", href: "#" },
                { title: "DevOps", href: "#" },
            ]
        }
    ]
  },
  {
    title: "Services",
    megaMenu: [
      {
        title: "Mobile App Development",
        href: "#",
        links: [
          { title: "Android App Development", href: "/android-app-development" },
          { title: "Kotlin App Development", href: "/kotlin-app-development" },
          { title: "iOS Game Development", href: "/ios-game-development" },
          { title: "Cross Platform Apps", href: "/cross-platform-apps" },
        ],
      },
      {
        title: "Game Development",
        href: "#",
        links: [
          { title: "Unreal Game Development", href: "/unreal-game-development" },
          { title: "Unity Game Development", href: "/unity-game-development" },
          { title: "AR/VR App Development", href: "/ar-vr-app-development" },
        ],
      },
    ],
  },
  {
    title: "Hire Developers",
    href: "#",
  },
  {
    title: "Technologies",
    href: "#",
  },
  {
    title: "Case Studies",
    href: "#",
  },
];

export const techStack = [
    { id: 'aws', name: 'AWS', imageUrl: findImage('tech-1').url, imageHint: findImage('tech-1').hint },
    { id: 'bootstrap', name: 'Bootstrap', imageUrl: findImage('tech-2').url, imageHint: findImage('tech-2').hint },
    { id: 'csharp', name: 'C#', imageUrl: findImage('tech-3').url, imageHint: findImage('tech-3').hint },
    { id: 'css3', name: 'CSS3', imageUrl: findImage('tech-4').url, imageHint: findImage('tech-4').hint },
    { id: 'django', name: 'Django', imageUrl: findImage('tech-5').url, imageHint: findImage('tech-5').hint },
    { id: 'docker', name: 'Docker', imageUrl: findImage('tech-6').url, imageHint: findImage('tech-6').hint },
    { id: 'flask', name: 'Flask', imageUrl: findImage('tech-7').url, imageHint: findImage('tech-7').hint },
    { id: 'gcp', name: 'Google Cloud', imageUrl: findImage('tech-8').url, imageHint: findImage('tech-8').hint },
    { id: 'graphql', name: 'GraphQL', imageUrl: findImage('tech-9').url, imageHint: findImage('tech-9').hint },
    { id: 'javascript', name: 'JavaScript', imageUrl: findImage('tech-10').url, imageHint: findImage('tech-10').hint },
    { id: 'kafka', name: 'Kafka', imageUrl: findImage('tech-11').url, imageHint: findImage('tech-11').hint },
    { id: 'kubernetes', name: 'Kubernetes', imageUrl: findImage('tech-12').url, imageHint: findImage('tech-12').hint },
    { id: 'mongodb', name: 'MongoDB', imageUrl: findImage('tech-13').url, imageHint: findImage('tech-13').hint },
    { id: 'azure', name: 'MS Azure', imageUrl: findImage('tech-14').url, imageHint: findImage('tech-14').hint },
    { id: 'java', name: 'Java', imageUrl: findImage('tech-15').url, imageHint: findImage('tech-15').hint },
    { id: 'dotnet', name: '.NET', imageUrl: findImage('tech-16').url, imageHint: findImage('tech-16').hint },
    { id: 'nodejs', name: 'Node.js', imageUrl: findImage('tech-17').url, imageHint: findImage('tech-17').hint },
    { id: 'python', name: 'Python', imageUrl: findImage('tech-18').url, imageHint: findImage('tech-18').hint },
    { id: 'react', name: 'React', imageUrl: findImage('tech-19').url, imageHint: findImage('tech-19').hint },
    { id: 'unity', name: 'Unity 3D', imageUrl: findImage('tech-20').url, imageHint: findImage('tech-20').hint },
];

export const services = [
    {
      icon: "Code",
      title: "Access to Expert Developers",
      description: "Partner with our experienced app developers, ensuring that your project receives the specialized expertise required to create the perfect solution for your needs.",
    },
    {
      icon: "DollarSign",
      title: "Cost-Efficiency",
      description: "Save money by choosing custom development packages tailored to your budget without the overhead costs of maintaining an in-house team.",
    },
    {
      icon: "Focus",
      title: "Focus on Your Needs",
      description: "Concentrate on your business goals while we take care of building the software you need to enhance your product or service offerings.",
    },
    {
      icon: "Scaling",
      title: "Flexibility & Scalability",
      description: "Easily scale your project based on your growth or evolving needs, whether you're just starting or expanding your digital footprint.",
    },
    {
      icon: "Rocket",
      title: "Faster Time to Market",
      description: "Get your app or software product into the hands of customers quickly with our efficient development processes and optimized workflows.",
    },
    {
      icon: "Shield",
      title: "Risk Management",
      description: "Rest assured, knowing our developers follow best practices, reducing risks and ensuring a stable and secure software solution tailored to your business.",
    },
];

export const uiUxFeatures = [
    { title: "Design Thinking & Research", description: "We conduct thorough research to understand users, industry trends, and market challenges to create designs that resonate." },
    { title: "User Journey Mapping", description: "We craft detailed user flows and wireframes, ensuring every touchpoint is intuitive and purposeful for a seamless journey." },
    { title: "Innovative Interface Design", description: "Our UI design approach merges creativity with functionality, creating visually stunning and easy-to-navigate interfaces." },
    { title: "Interaction Prototyping", description: "Through high-fidelity prototypes, we bring interactions to life, allowing you to experience the product before development." },
];

export const webDevFeatures = [
    { icon: "Palette", title: "Tailored Design & Functionality", description: "Every aspect of your site is uniquely designed to reflect your brand's identity. We build features that matter most to your business." },
    { icon: "Scaling", title: "Scalable Solutions for Growth", description: "We build websites with a scalable architecture that can evolve with your company, allowing for easy addition of new features and capabilities." },
    { icon: "UserCheck", title: "Optimized User Experience", description: "Our development focuses on creating intuitive, easy-to-navigate websites that engage users and encourage them to explore your offerings." },
    { icon: "Zap", title: "Performance and Security", description: "Our custom websites are built with cutting-edge technologies that ensure fast loading speeds, minimal downtime, and consistent performance." },
];

export const gameDevFeatures = [
    { title: "Dynamic Game Design", description: "Our team creates innovative and adaptable game designs that engage players across different devices, ensuring a seamless gaming experience for all." },
    { title: "Access to Specialized Talent", description: "Leverage our expert game developers, designers, and animators who specialize in crafting high-quality mobile games tailored to your vision." },
    { title: "Cost-Effective Development", description: "We optimize your budget by providing flexible development options, offering you high-quality mobile games without the heavy investment." },
    { title: "Fast Project Delivery", description: "Our streamlined processes ensure rapid development, helping you launch your mobile game quickly and capture your audience in a competitive market." },
];

export const workflowSteps = [
    { number: "01", title: "Project Initiation and Planning", description: "We begin by defining project objectives and scope aligned with client requirements. Strategically allocating resources, we create a detailed plan outlining tasks, timelines, and milestones." },
    { number: "02", title: "Development and Implementation", description: "We then assign tasks to specialized teams, ensuring adherence to coding standards. Thorough quality assurance and testing, including automated processes, underscore our commitment to excellence." },
    { number: "03", title: "Client Review and Acceptance", description: "We ensure that client engagement is continuous, and we actively seek feedback throughout the development process. Formal client approval is sought to ensure satisfaction with deliverables." },
    { number: "04", title: "Project Closure and Maintenance", description: "As the project concludes, we prioritize comprehensive documentation and establish a support plan, offering ongoing assistance in accordance with the service-level agreement (SLA)." },
];

export const testimonials = [
    { id: 1, name: "Tobias McDonald", company: "GMB", quote: "I needed a website on an urgent basis. These guys did it within two weeks. From content creation to the final launch, there were hardly any glitches. I would recommend them to anyone!", avatarUrl: findImage('testimonial-1').url, imageHint: findImage('testimonial-1').hint },
    { id: 2, name: "Tom Richards", company: "Bark", quote: "We needed a reliable app partner, and Binate Digital exceeded every expectation. Our enterprise app runs smoothly, and their support team is always ready to help. They’re now our go-to for all development needs.", avatarUrl: findImage('testimonial-2').url, imageHint: findImage('testimonial-2').hint },
    { id: 3, name: "Roger Smith", company: "GMB", quote: "We came to Binate Digital with nothing but an idea. I was worried about communicating the ‘vibe’ of our brand, but they got it right away. They were super organized and kept us updated.", avatarUrl: findImage('testimonial-3').url, imageHint: findImage('testimonial-3').hint },
    { id: 4, name: "Jessica Gomez", company: "Bark", quote: "From our initial call to the final product launch, the Binate Digital team was outstanding. They built a custom social networking app that’s both scalable and visually stunning.", avatarUrl: findImage('testimonial-4').url, imageHint: findImage('testimonial-4').hint },
];

export const awards = [
    { id: 1, alt: "Top Web Development Company", imageUrl: findImage('award-1').url, imageHint: findImage('award-1').hint },
    { id: 2, alt: "Best Digital Marketing Agency", imageUrl: findImage('award-2').url, imageHint: findImage('award-2').hint },
    { id: 3, alt: "Top Rated on GoodFirms", imageUrl: findImage('award-3').url, imageHint: findImage('award-3').hint },
    { id: 4, alt: "Clutch Top 1000", imageUrl: findImage('award-4').url, imageHint: findImage('award-4').hint },
    { id: 5, alt: "SEOblog Top Agency", imageUrl: findImage('award-5').url, imageHint: findImage('award-5').hint },
    { id: 6, alt: "Top E-commerce Developer", imageUrl: findImage('award-6').url, imageHint: findImage('award-6').hint },
];

export const blogPosts = [
    { id: 1, title: "Figma Workshop Session", excerpt: "Designing digital experiences that are easy to use is of utmost importance. A workshop conducted by Binate Digital was exclusively dedicated to enhancing the understanding of Figma.", href: "#", imageUrl: findImage('blog-1').url, imageHint: findImage('blog-1').hint },
    { id: 2, title: "20 Best Artificial Intelligence Apps For iPhone", excerpt: "When we peek into the future, all we see is technology shifting its shape. The power of mobile app modification is going to grow as time passes, and it will break infinite boundaries.", href: "#", imageUrl: findImage('blog-2').url, imageHint: findImage('blog-2').hint },
    { id: 3, title: "Guide to Ecommerce App Development", excerpt: "The world has observed a vast change in e-commerce. Have you ever thought about what is driving such a change? The answer is e-commerce mobile apps.", href: "#", imageUrl: findImage('blog-3').url, imageHint: findImage('blog-3').hint },
];

export const imageGallery = [
    { id: "case-1", title: "Eventeca", imageUrl: findImage('case-1').url, imageHint: findImage('case-1').hint },
    { id: "case-2", title: "BuckBuddy", imageUrl: findImage('case-2').url, imageHint: findImage('case-2').hint },
    { id: "case-3", title: "Lyrikel Genius", imageUrl: findImage('case-3').url, imageHint: findImage('case-3').hint },
    { id: "case-4", title: "Release It", imageUrl: findImage('case-4').url, imageHint: findImage('case-4').hint },
];

export const caseStudies = [
    { id: 1, title: "Eventeca", imageUrl: findImage('case-1').url, imageHint: 'event management' },
    { id: 2, title: "BuckBuddy", imageUrl: findImage('case-2').url, imageHint: 'finance app' },
    { id: 3, title: "Lyrikel Genius", imageUrl: findImage('case-3').url, imageHint: 'music app' },
    { id: 4, title: "Release It", imageUrl: findImage('case-4').url, imageHint: 'social media' },
    { id: 5, title: "H.O.M.E.", imageUrl: findImage('case-5').url, imageHint: 'smart home' },
    { id: 6, title: "Goal Getter", imageUrl: findImage('case-6').url, imageHint: 'fitness app' },
];

export const footerData = {
    columns: [
        {
            title: "Solutions",
            links: [
                { label: "Staff Augmentation", href: "/staff-augmentation" },
                { label: "Dedicated Development Team", href: "/dedicated-development-team" },
                { label: "IT Staffing Services", href: "/it-staffing-services" },
                { label: "OTT App Development", href: "/ott-app-development" },
                { label: "App Store Optimization", href: "/app-store-optimization" },
                { label: "Digital Marketing", href: "/digital-marketing" },
                { label: "Software Testing", href: "/software-testing" },
            ]
        },
        {
            title: "Services",
            links: [
                { label: "Android App Development", href: "/android-app-development" },
                { label: "Kotlin App Development", href: "/kotlin-app-development" },
                { label: "AR/VR App Development", href: "/ar-vr-app-development" },
                { label: "Unreal Game Development", href: "/unreal-game-development" },
                { label: "Unity Game Development", href: "/unity-game-development" },
                { label: "iOS Game Development", href: "/ios-game-development" },
                { label: "Cross Platform Apps", href: "/cross-platform-apps" },
            ]
        },
        {
            title: "Hire Developer",
            links: [
                { label: "Hire Flutter Developers", href: "#" },
                { label: "Hire React Native Developers", href: "#" },
                { label: "Hire Ionic Developers", href: "#" },
                { label: "Hire Wordpress Developers", href: "#" },
                { label: "Hire ReactJS Developers", href: "#" },
                { label: "Hire Unreal Developers", href: "#" },
                { label: "Hire Full Stack Developers", href: "#" },
            ]
        },
        {
            title: "Industries",
            links: [
                { label: "Sport App Development", href: "#" },
                { label: "Media And Entertainment", href: "#" },
                { label: "Logistics And Transportation", href: "#" },
                { label: "E-commerce and Retail", href: "#" },
                { label: "Healthcare App Development", href: "#" },
                { label: "Education App Development", href: "#" },
                { label: "Finance App Development", href: "#" },
            ]
        }
    ],
    locations: [
        { city: "Austin TX, USA", address: "600 Congress Ave, 14th Floor, Austin, TX 78701" },
        { city: "Dubai, UAE", address: "Building A1, Dubai Digital Park, Dubai Silicon Oasis" },
        { city: "Guangzhou, China", address: "Room 3311, East Tower, Yangcheng Intl Commercial Center" },
        { city: "Karachi, Pakistan", address: "Suite No. 108, 1st Floor, Park Avenue, Shahra-e-Faisal" },
    ],
    contact: {
        phone1: "856-243-6180",
        phone2: "713-405-3098",
        email: "info@binatedigital.com",
    },
    socials: [
        { name: "Facebook", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "Dribbble", href: "#" },
        { name: "Behance", href: "#" },
    ],
    legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Refund Policy", href: "#" },
        { label: "Terms & Condition", href: "#" },
    ]
};

    
