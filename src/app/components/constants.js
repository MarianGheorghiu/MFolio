export const NAV_LINKS = [
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    },
];

export const ACHIVEMENTS_LIST = [
    {
        metric: 'Projects',
        value: '100',
        postfix: '+',
    },
    {
        metric: 'Users',
        value: '100',
        postfix: '+',
    },
    {
        metric: ' Milestones',
        value: '10',
        postfix: '+',
    },
    {
        metric: 'Years',
        value: '5',
        postfix: '+',
    },
];

export const PROJECTS_TAB = [{ tag: 'All' }, { tag: 'Web' }, { tag: 'Mobile' }];

export const PROJECTS_DATA = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Project 1 description',
        image: '/images/projects/1.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 2,
        title: 'Potography Portfolio Website',
        description: 'Project 2 description',
        image: '/images/projects/2.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 3,
        title: 'E-commerce Application',
        description: 'Project 3 description',
        image: '/images/projects/3.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 4,
        title: 'Food Ordering Application',
        description: 'Project 4 description',
        image: '/images/projects/4.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 5,
        title: 'React Firebase Template',
        description: 'Authentication and CRUD operations',
        image: '/images/projects/5.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 6,
        title: 'Full-stack Roadmap',
        description: 'Project 5 description',
        image: '/images/projects/6.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
];

export const TAB_DATA = [
    {
        title: 'Services',
        id: 'services',
        content: (
            <ul className="list-disc pl-2">
                <li>Web Development</li>
                <li>Responsive Design</li>
                <li>Copywriting</li>
                <li>Search Engine Optimization</li>
                <li>Maintenance</li>
                <li>Consultation</li>
            </ul>
        ),
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-2">
                <li>
                    Angular developer, I’ve developed and maintained a scalable
                    Single Page Application based on Angular (implementing new
                    features, fixing bugs, writing tests, building custom UI
                    components). Also, I work on mobile web projects using
                    Angular technologies.
                </li>
                <li>
                    Copywriting - seasoned wordsmith specializing in crafting
                    compelling narratives that captivate audiences and drive
                    action.
                </li>
                <li>
                    SEO - leveraging the latest strategies and a deep
                    understanding of search engine algorithms, I optimize
                    content that ensures your brand stands out amidst the
                    digital noise.
                </li>
            </ul>
        ),
    },
    {
        title: 'Expertise',
        id: 'expertise',
        content: (
            <ul className="list-disc pl-2">
                <li>
                    Profound knowledge and practical experience in software
                    engineering, web development, and responsive design. Skilled
                    in utilizing programming languages [JavaScript, Typescript],
                    frameworks [Angular, React, NextJS], and tools to create
                    seamless digital solutions.
                </li>
                <li>
                    Additionally, adept in implementing effective copywriting
                    strategies and SEO techniques for enhanced online presence
                    and audience engagement.
                </li>
            </ul>
        ),
    },
];
