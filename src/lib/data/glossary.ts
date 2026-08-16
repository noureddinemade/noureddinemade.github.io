import type { Roles, Page, Case } from '$lib/script/types';

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

export const cases: Case[] = [
    { 
        title:'Accessibility at Dubber', 
        desc:'', 
        href:'/work/dubber/accessibility/', 
        id:'dub',
        inNav: true,
        icon: '✺',
        accent: 'd-light',
        inList: true
    },
    { 
        title:'Creating an accessible, data focused design system', 
        desc:'A fully documented, accessible design system that cut custom code from ~85% to ~20% and changed how design and engineering worked together at Dubber.', 
        href:'/work/dubber/design-system/', 
        id:'dub',
        inNav: true,
        icon: '❖',
        accent: 'a-dark',
        inList: true
    },
    { 
        title:'Exploring extracted data as entities', 
        desc:'We took something as trivial as extracting keywords from a transcript and turned it into a way for users to find meaningful, contextual value inside their conversations.', 
        href:'/work/dubber/extracted-data/', 
        id:'dub',
        inNav: true,
        icon: '⚃',
        accent: 'e-dark',
        inList: true
    },
    { 
        title:'Building an internal tool that creates brand ready illustrations', 
        desc:'', 
        href:'/work/dubber/internal-tool/', 
        id:'dub',
        inNav: true,
        icon: '✄',
        accent: 'f-dark',
        inList: true
    },
    { 
        title:'Built a task based internal system to manage patients and orders', 
        desc:'', 
        href:'/work/simple-online-healthcare/admin-system/', 
        id:'soh',
        inNav: true,
        icon: '✓',
        accent: 'b-dark',
        inList: true
    },
    { 
        title:'Created the brand and app experience for a holistic weight care product', 
        desc:'', 
        href:'/work/simple-online-healthcare/holistic-weight-care/', 
        id:'soh',
        inNav: true,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Refreshed the brand for the digital pharmacy', 
        desc:'', 
        href:'/work/simple-online-healthcare/brand-refresh/', 
        id:'soh',
        inNav: true,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Created the experience for the NHS prescriptions app', 
        desc:'', 
        href:'/work/simple-online-healthcare/app-experience/', 
        id:'soh',
        inNav: true,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Designed the first version of the web experience', 
        desc:'', 
        href:'/work/echo/web-app-v1/', 
        id:'echo',
        inNav: true,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Designing a bunch of interesting stuff for a bunch of shitty people.', 
        desc:'', 
        href:'/work/verve/various-projects/', 
        id:'ver',
        inNav: true,
        icon: '',
        accent: '',
        inList: false
    },
    { 
        title:'Led the discovery and designed the sales flow experience for new global markets', 
        desc:'', 
        href:'/work/verve/various-projects/#', 
        id:'ver',
        inNav: false,
        icon: '',
        accent: '',
        inList: true
        
    },
    { 
        title:'Designed new recruit pages that gave ambassadors more context and insights', 
        desc:'', 
        href:'/work/verve/various-projects/#', 
        id:'ver',
        inNav: false,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Created and built a brand new iconography ecosystem', 
        desc:'', 
        href:'/work/verve/various-projects/#iconography', 
        id:'ver',
        inNav: false,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Designed the full experience for sporting events and travel', 
        desc:'', 
        href:'/work/verve/various-projects/#', 
        id:'ver',
        inNav: false,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'Designed and built a free communication tool for sufferers of chronic pain', 
        desc:'', 
        href:'/work/archive/chronic-pain-communication-tool/', 
        id:'nm',
        inNav: true,
        icon: '',
        accent: '',
        inList: true
    },
    { 
        title:'A collection of some of my favourite branding bits and pieces (2015 - 2022)', 
        desc:'', 
        href:'/work/archive/brand-15-22/', 
        id:'nm',
        inNav: true,
        icon: '',
        accent: '',
        inList: true
    },
]

export const pages: Page[] = [
    { 
        title:'Home', 
        desc:'The online portfolio of Noureddine Azhar.', 
        href:'/', 
        id:'home',
        inNav: true
    },
    { 
        title:'Work', 
        desc:'', 
        href:'/work/',
        id:'work',
        inNav: true
    },
    { 
        title:'About', 
        desc:'', 
        href:'/about/',
        id:'about',
        inNav: true
    },
    { 
        title:'Journal', 
        desc:'', 
        href:'/journal/',
        id:'journal',
        inNav: true
    },
    { 
        title:'Fitcheck', 
        desc:'', 
        href:'/fitcheck/',
        id:'fitcheck',
        inNav: false
    }
]

export const year: number = new Date().getFullYear();