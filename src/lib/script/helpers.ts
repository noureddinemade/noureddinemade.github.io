import { roles, cases, pages } from '$lib/data/glossary';
import type { Role, Page, Case, RawSwatch, ThemeSwatch, Fallback } from '$lib/script/types';

// General
// Capitalise words
export const capitalise = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

// Roles
export const getRoleByID = (id: string): Role | false => roles[id] ? roles[id] : false;
export const getRoleTagsByID = (id: string): string[] => roles[id] ? [roles[id].title, roles[id].company, roles[id].period, roles[id].location ] : [];

// Case studies
const getCaseInDirection = (id: number, step: number) => {
    let i = id + step;

    while (i >= 0 && i < cases.length) {
        if (cases[i].inNav) return cases[i];
        i += step;
    }

    return false;
};

export const getCasesForRole = (id: string): Case[] | undefined => cases.filter(c => c.id === id && c.inList);
export const getCaseByID = (id: number): Case | false => cases[id] ? cases[id] : false;
export const caseAvailable = (id: string): boolean => cases.some(c => c.id === id && c.inNav);
export const getNextCase = (id: number): Case | false => getCaseInDirection(id, 1);
export const getPrevCase = (id: number): Case | false => getCaseInDirection(id, -1);

export const randomCaseStudy = (current: number) => {

    const pool = cases.filter((c, i) => c.inList && i !== current);

    if (pool.length === 0) return false;

    return pool[Math.floor(Math.random() * pool.length)];
    
};

// Pages
export const getPageByID = (id: string): Page | undefined => pages.find(p => p.id === id);
export const getMetaByPath = (path: string): Page | Case | undefined => [...pages, ...cases].find(r => r.href === path);

// Theme
export const adjustColour = (colour:string | number[], amount: number) => {
    
    // Parse input to r, g, b (0-255)
    let r, g, b;

    if (Array.isArray(colour)) { [r, g, b] = colour; } 

    else { 
        
        let hex = colour.replace('#', '');
        
        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
            r = parseInt(hex.slice(0, 2), 16);
            g = parseInt(hex.slice(2, 4), 16);
            b = parseInt(hex.slice(4, 6), 16);
    }

    // RGB -> HSL
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {

        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;

    }

    // Adjust lightness (additive, clamped 0-1)
    const nl = Math.min(1, Math.max(0, l + amount / 100));

    // HSL -> RGB
    let nr, ng, nb;
    
    if (s === 0) {
        nr = ng = nb = nl;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        
        const q = nl < 0.5 ? nl * (1 + s) : nl + s - nl * s;
        const p = 2 * nl - q;
        nr = hue2rgb(p, q, h + 1 / 3);
        ng = hue2rgb(p, q, h);
        nb = hue2rgb(p, q, h - 1 / 3);

    }

    const R = Math.round(nr * 255), G = Math.round(ng * 255), B = Math.round(nb * 255);
    const toHex = (v: number) => v.toString(16).padStart(2, '0');

    return {
        hex: `#${toHex(R)}${toHex(G)}${toHex(B)}`,
        rgb: `rgb(${R},${G},${B})`,
    };
}

export const generateTheme = (colour: RawSwatch) => {

    const base  = { hex: colour.hex, rgb: `rgb(${colour.rgb[0]},${colour.rgb[1]},${colour.rgb[2]})` };
    const dark  = adjustColour(colour.rgb, -10);
    const light = adjustColour(colour.rgb, 10);
    const raw   = `${colour.rgb[0]},${colour.rgb[1]},${colour.rgb[2]}`;

    return { base, dark, light, raw } as ThemeSwatch;

}

// CSS
export const fallback = (varName: string, value: string): Fallback => ({ fallback: varName, value });

export function camelToKebab(str: string) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function toCssVars(obj: Object, prefix = '-') {
    let out = '';
    for (const [key, value] of Object.entries(obj)) {
        const name = `${prefix}-${camelToKebab(key)}`;
        if (value && typeof value === 'object' && typeof value.rgb === 'string') {
            out += `${name}:${value.rgb};`;          // colour leaf → use rgb
        } else if (value && typeof value === 'object' && 'fallback' in value) {
            out += `${name}:var(${value.fallback},${value.value});`;
        } else if (typeof value === 'string' || typeof value === 'number') {
            out += `${name}:${value};`;              // already valid CSS
        } else if (value && typeof value === 'object') {
            out += toCssVars(value, name);           // recurse
        }
    }
    return out;
}