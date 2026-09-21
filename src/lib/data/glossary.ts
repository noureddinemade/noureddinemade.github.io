import type { Roles, Page } from '$lib/script/types';

export const roles: Roles = {
    dub:   {
        title: 'Head of Product Design',
        desc: "Conversation capture and intelligence, out-of-the-box AI solutions that help businesses uncover value from recordings. Owned product design and grew the team that built an accessible, data-focused design system, dropping custom code from 85% down to 20%. Mentored designers and shaped how we worked. Led hands-on designing the way users query their data in plain language, making extracted data into something users could explore, rebuilding the web platform, and building internal tools.",
        company: 'Dubber',
        period: '2023 - 2026',
        location: 'Naarm (Melbourne)'
    },
    soh:   {
        title: 'Head of Design',
        desc: "Digital healthcare across four brands and three countries. Ran design end-to-end and shaped the culture. Set roadmaps and stayed hands-on building a task-based system for pharmacists to manage patients and orders that improved high volume tasks. Created a cohesive, multi-brand design system, a holistic weight care product, and an NHS prescriptions mobile experience that never got built. Redesigned Australia specific flows to keep the service compliant as new regulations came in, and rebuilt one brand's entire digital experience in Webflow.",
        company: 'Simple Online Healthcare',
        period: '2020 - 2023',
        location: 'Glasgow / Remote'
    },
    echo:   {
        title: 'Lead Product Designer (Patient Facing)',
        desc: "NHS repeat prescription management deeply tied into the GP system behind it. Led patient-facing design across web and mobile. Created the first web experience for a product that until then was app-only the first channel that could bring patients in outside the app. Shipped key reminder features, improved critical app functions, and conceptualised the core third-party integration flows.",
        company: 'Echo',
        period: '2018 - 2019',
        location: 'London'
    },
    ver:   {
        title: 'Snr Product Designer',
        desc: "Ambassador-led ticketing platform  selling through personal networks. Worked across the web product in a cross-functional team of engineers, researchers and product owners, taking features from discovery through to ship. Led the sales flow for the company's expansion into Europe, rebuilt to clear strict anti-spam law in markets like Germany. Redesigned the global checkout, created a new iconography system, reworked the ambassador recruit pages, and designed the experience for the move into seated group events and sporting events.",
        company: 'StreetTeam/Verve',
        period: '2017 - 2018',
        location: 'London'
    },
    ga:   {
        title: 'UX Instructor',
        desc: "Tech education company focused on immersive, industry-led teaching. Taught the practical, industry side of UX design and worked with the instructional team to reshape the curriculum and course structure. Sat one-on-one with students lectured on visual design and branding, ran tutorials on forms and mobile design, and led workshops on development and industry tools.",
        company: 'General Assembly',
        period: '2016',
        location: 'Syndey'
    },
    nm:   {
        title: 'End-to-end Designer',
        desc: "Freelance, contract and consultation work across product, digital and brand. Designed digital experiences and campaigns for worldwide clients. Ran research and usability testing for a building-material marketplace, built the kiosk experience for diabetes tools with CDM London, and designed and built a free communication tool for people living with chronic pain with NPS MedicineWise.",
        company: 'Contract, Freelance, Consultancy',
        period: '2006 - Present',
        location: 'Worldwide Baby!'
    }
};

export const cases: Page[] = [
    { 
        title:'Accessibility at Dubber.', 
        desc:'The platform was failing at accessibility and an audit caught the obvious failures. The people who actually rely on assistive tech showed us the ones that mattered.', 
        href:'/work/accessibility-at-dubber/', 
        company:'dub',
        id: 'accessibility',
        inNav: true,
        icon: '✺',
        accent: 'd-light',
        inList: true,
        tags: ['accessibility', 'inclusive design'],
        type: 'case'
    },
    { 
        title:'Creating Dubber&rsquo;s accessible, data focused design system.', 
        desc:'A fully documented, accessible design system that cut custom code from ~85% to ~20% and changed how design and engineering worked together at Dubber.', 
        href:'/work/dubber-design-system/', 
        company:'dub',
        id: 'designSystem',
        inNav: true,
        icon: '❖',
        accent: 'a-dark',
        inList: true,
        tags: ['design systems', 'process heavy', 'documentaion'],
        type: 'case'
    },
    { 
        title:'Exploring extracted data as entities.', 
        desc:'We took something as trivial as extracting keywords from a transcript and turned it into a way for users to find meaningful, contextual value inside their conversations.', 
        href:'/work/exploring-extracted-data-at-dubber/', 
        company:'dub',
        id: 'extractedData',
        inNav: true,
        icon: '⚃',
        accent: 'e-dark',
        inList: true,
        tags: ['ai workflow', 'data exploration'],
        type: 'case'
    },
    { 
        title:'Building an internal tool that creates brand ready illustrations.', 
        desc:'A study in how to try and maintain quality output while bad leadership actively works against you.', 
        href:'/work/internal-illustration-tool-for-dubber/', 
        company:'dub',
        id: 'internalTool',
        inNav: true,
        icon: '✄',
        accent: 'f-dark',
        inList: true,
        tags: ['shit leadership', 'internal systems'],
        type: 'case'
    },
    { 
        title:'Built a task based internal system to manage patients and orders.', 
        desc:'The old tool was not made to scale, so we rebuilt it around the tasks people perform and automations to help it grow.', 
        href:'/work/simple-admin-system/', 
        company:'soh',
        id: 'adminSystem',
        inNav: true,
        icon: '✓',
        accent: 'b-dark',
        inList: true,
        tags: ['health tech', 'internal systems'],
        type: 'case'
    },
    { 
        title:'Created the brand and app experience for a holistic weight care product.', 
        desc:'', 
        href:'/work/simple-holistic-weight-care/', 
        company:'soh',
        id: 'holisticWeightCare',
        inNav: false,
        icon: '➹',
        accent: 'e-base',
        inList: false,
        tags: ['branding', 'health tech'],
        type: 'case'
    },
    { 
        title:'Refreshed the brand for the digital pharmacy.', 
        desc:'The old brand was a mess of inconsistent variations. The refresh gave it one clear, consistent story.', 
        href:'/work/simple-brand-refresh/', 
        company:'soh',
        id: 'brandRefresh',
        inNav: true,
        icon: '✚',
        accent: 'c-dark',
        inList: true,
        tags: ['branding', 'health tech'],
        type: 'case'
    },
    { 
        title:'Created the experience for an NHS prescriptions app.', 
        desc:'Half the UK is on repeat prescriptions and a third forget to reorder. Of course we can solve this with an app.', 
        href:'/work/simple-app-experience/', 
        company:'soh',
        id: 'appExperience',
        inNav: true,
        icon: '❤︎',
        accent: 'd-base',
        inList: true,
        tags: ['health tech', 'app experience'],
        type: 'case'
    },
    { 
        title:'Designed Echo&rsquo;s first version of the web experience.', 
        desc:'Echo had only ever existed as an app. This was the first time patients could get in any other way.', 
        href:'/work/echo-web-app-v1/', 
        company:'echo',
        id: 'webAppV1',
        inNav: true,
        icon: '✎',
        accent: 'a-light',
        inList: true,
        tags: ['health tech', 'web experience'],
        type: 'case'
    },
    { 
        title:'Designing a bunch of interesting stuff for a bunch of shitty people.', 
        desc:'A strange stint at a company run by awful people. But at least I got some interesting work for my portfolio.', 
        href:'/work/my-time-at-verve/', 
        company:'ver',
        id: 'variousProjects',
        inNav: true,
        icon: '✗',
        accent: 'c-base',
        inList: false,
        tags: ['shit leadership', 'various projects', 'experience design'],
        type: 'case'
    },
    { 
        title:'Led the discovery and designed the sales flow experience for new global markets', 
        desc:'', 
        href:'/work/my-time-at-verve/#global-markets', 
        company:'ver',
        id: 'globalMarkets',
        inNav: false,
        icon: '⚑',
        accent: 'c-base',
        inList: true,
        tags: ['shit leadership', 'sales flow', 'experience design'],
        type: 'case'
        
    },
    { 
        title:'Designed new recruit pages that gave ambassadors more context and insights.', 
        desc:'', 
        href:'/work/my-time-at-verve/#recruit-pages', 
        company:'ver',
        id: 'recruitPages',
        inNav: false,
        icon: '☀︎',
        accent: 'c-base',
        inList: true,
        tags: ['shit leadership', 'experience design'],
        type: 'case'
    },
    { 
        title:'Created and built a brand new iconography ecosystem.', 
        desc:'', 
        href:'/work/my-time-at-verve/#iconography', 
        company:'ver',
        id: 'iconography',
        inNav: false,
        icon: '◎',
        accent: 'c-base',
        inList: true,
        tags: ['shit leadership', 'iconography'],
        type: 'case'
    },
    { 
        title:'Designed the full experience for sporting events and travel.', 
        desc:'', 
        href:'/work/my-time-at-verve/#sports-and-travel', 
        company:'ver',
        id: 'sportAndTravel',
        inNav: false,
        icon: '✈︎',
        accent: 'c-base',
        inList: true,
        tags: ['shit leadership', 'experience design'],
        type: 'case'
    },
    { 
        title:'Designed and built a free communication tool for sufferers of chronic pain.', 
        desc:'', 
        href:'/work/chronic-pain-communication-tool/', 
        company:'nm',
        id: 'chronicPainCommunicationTool',
        inNav: false,
        icon: '◼︎',
        accent: 'a-base',
        inList: false,
        tags: ['app design'],
        type: 'case'
    },
    { 
        title:'A collection of some of my favourite branding bits and pieces (2015 - 2022).', 
        desc:'', 
        href:'/work/branding-bits-15-22/', 
        company:'nm',
        id: 'brandingBits1522',
        inNav: true,
        icon: '♠︎',
        accent: 'd-dark',
        inList: true,
        tags: ['branding', 'logos'],
        type: 'case'
    },
]

export const pages: Page[] = [
    { 
        title:'Home', 
        desc:'The online portfolio of Noureddine Azhar.', 
        href:'/', 
        id:'home',
        inNav: true,
        type: 'page'
    },
    { 
        title:'Work', 
        desc:'', 
        href:'/work/',
        id:'work',
        inNav: true,
        type: 'page'
    },
    { 
        title:'About', 
        desc:'', 
        href:'/about/',
        id:'about',
        inNav: true,
        type: 'page'
    },
    { 
        title:'Journal', 
        desc:'', 
        href:'/journal/',
        id:'journal',
        inNav: false,
        type: 'page'
    },
    { 
        title:'Are we a good fit?', 
        desc:'', 
        href:'/fitcheck/',
        id:'fitcheck',
        inNav: true,
        type: 'page'
    }
]

export const year: number = new Date().getFullYear();