import type { ThemeSwatches, RawSwatches, Fallback } from "$lib/script/types";
import { generateTheme, fallback } from "$lib/script/helpers";

// Functions

// Raw Colours
const raw: RawSwatches = {
    accentA: { hex: '#2f9315', rgb: [47,147,21]},
//  accentA: { hex: '#577c1c', rgb: [87,124,28]},
    accentB: { hex: '#c40b0b', rgb: [196,11,11]},
//  accentB: { hex: '#0029d6', rgb: [0,41,214]},
    accentC: { hex: '#005fbf', rgb: [0,95,191]},
//  accentC: { hex: '#8425c1', rgb: [132,37,193]},
    accentD: { hex: '#ff7d0b', rgb: [255,125,11]},
//  accentD: { hex: '#ff5fbb', rgb: [255,95,187]},
    accentE: { hex: '#ffd900', rgb: [255,217,0]},
//  accentE: { hex: '#d12c07', rgb: [209,44,7]},
    accentF: { hex: '#ffa8d2', rgb: [255,168,210]},
//  accentF: { hex: '#ffd900', rgb: [255,217,0]},
//  accentG: { hex: '#ff6700', rgb: [255,103,0]},
    dark: { hex: '#121212', rgb: [18,18,18]},
    light: { hex: '#e7e7e7', rgb: [231,231,231]}
}

// Spacing
// Scale
const scale: Record<string, string> = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px',
    xl: '80px',
    xxl: '144px' 
};
// Max Width
const mw: Record<string, string> = {
    xs: '320px',
    sm: '480px',
    md: '640px',
    lg: '980px',
    xl: '1440px',
    xxl: '1920px'
};
// Gap
const gap: Record<string, Fallback> = {
    main:    fallback("--gap", scale.xl),
    section: fallback("--gap", scale.lg),
    content: fallback("--gap", scale.md),
    item:    fallback("--gap", scale.sm),
    single:  fallback("--gap", scale.xs)
};
// Padding
const padding: Record<string, string> = {
    main: '0'
};
// Preset sizes
const preset: Record<string, string> = {
    footerHeight: '200px'
};

// Typography
// Size
const base: number  = 1;
const ratio: number = 1.25;

const n: Record<string, number> = { sm: base / ratio, base, md: base * ratio };
n.lg       = n.md * ratio;
n.xl       = n.lg * ratio;
n.xxl      = n.xl * ratio;
n.xxxl     = n.xxl * ratio;
n.headline = n.lg * (ratio * 2); 

const fs = Object.fromEntries(
    Object.entries(n).map(([k, v]) => [k, v + 'rem'])
);

// Line Height
const lh: Record<string, number> = {
    base: 1.4,
    xs: 1,
    sm: 1.2,
    md: 1.6,
    headline: 0.9
};
// Letter spacing
const ls: Record<string, number> = { base: 0 };

// Font families
const ff: Record<string, string> = { serif: "'Mirety', serif", sans: "'Ocelot', sans-serif", mono: "monospace" };

// Font weight
const fw: Record<string, number> = {
    regular: 400,
    medium: 500,
    bold: 800
};

// Animation
const movement = {}

// Export
export const animation = { movement };
export const typography = { fs, ff, fw, lh, ls };
export const spacing = { scale, mw, gap, padding, preset };
export const theme: ThemeSwatches = {

    accentA: generateTheme(raw.accentA),
    accentB: generateTheme(raw.accentB),
    accentC: generateTheme(raw.accentC),
    accentD: generateTheme(raw.accentD),
    accentE: generateTheme(raw.accentE),
    accentF: generateTheme(raw.accentF),
    dark: generateTheme(raw.dark),
    light: generateTheme(raw.light),
    
}