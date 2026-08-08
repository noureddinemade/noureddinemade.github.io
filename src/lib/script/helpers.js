import { roles, cases, pages } from '$lib/data/glossary.js';

// General
// Capitalise words
export const capitalise = str => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

// Roles
export const getRoleByID = id => roles[id] ? roles[id] : false;
export const getRoleTagsByID = id => [ roles[id].title, roles[id].company, roles[id].period, roles[id].location ];

// Case studies
const getCaseInDirection = (id, step) => {
    let i = id + step;

    while (i >= 0 && i < cases.length) {
        if (cases[i].inNav) return cases[i];
        i += step;
    }

    return false;
};

export const getCasesForRole    = id => cases.filter(c => c.id === id && c.inList);
export const getCaseByID        = id => cases[id] ? cases[id] : false;
export const caseAvailable      = id => cases.some(c => c.id === id && c.inNav) 
export const getNextCase        = id => getCaseInDirection(id, 1);
export const getPrevCase        = id => getCaseInDirection(id, -1);

export const randomCaseStudy = current => {

    const pool = cases.filter((c, i) => c.inList && i !== current);

    if (pool.length === 0) return false;

    return pool[Math.floor(Math.random() * pool.length)];
    
};

// Pages
export const getPageByID = id => pages.find(p => p.id === id);

export const getMetaByPath = path => [...pages, ...cases].find(r => r.href === path);