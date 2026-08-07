// Functions
function adjustColour(colour, amount) {
    
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
        const hue2rgb = (p, q, t) => {
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
    const toHex = v => v.toString(16).padStart(2, '0');

    return {
        hex: `#${toHex(R)}${toHex(G)}${toHex(B)}`,
        rgb: `rgb(${R},${G},${B})`,
    };
}

function generateTheme(colour) {

    const base  = { hex: colour.hex, rgb: `rgb(${colour.rgb[0]},${colour.rgb[1]},${colour.rgb[2]})` };
    const dark  = adjustColour(colour.rgb, -10);
    const light = adjustColour(colour.rgb, 10);
    const raw   = `${colour.rgb[0]},${colour.rgb[1]},${colour.rgb[2]}`;

    return { base, dark, light, raw }

}

const fallback = (varName, value) => ({ fallback: varName, value });

// Raw Colours
const raw = {
    accent: {
        a: { hex: '#2f9315', rgb: [47,147,21]},
    //  a: { hex: '#577c1c', rgb: [87,124,28]},
        b: { hex: '#c40b0b', rgb: [196,11,11]},
    //  b: { hex: '#0029d6', rgb: [0,41,214]},
        c: { hex: '#005fbf', rgb: [0,95,191]},
    //  c: { hex: '#8425c1', rgb: [132,37,193]},
        d: { hex: '#ff7d0b', rgb: [255,125,11]},
    //  d: { hex: '#ff5fbb', rgb: [255,95,187]},
        e: { hex: '#ffd900', rgb: [255,217,0]},
    //  e: { hex: '#d12c07', rgb: [209,44,7]},
        f: { hex: '#ffa8d2', rgb: [255,168,210]}
    //  f: { hex: '#ffd900', rgb: [255,217,0]},
    //  g: { hex: '#ff6700', rgb: [255,103,0]}
    },
    dark: { hex: '#121212', rgb: [18,18,18]},
    light: { hex: '#e7e7e7', rgb: [231,231,231]}
}

// Spacing
// Scale
const scale = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px',
    xl: '80px',
    xxl: '144px' 
};
// Max Width
const mw = {
    xs: '320px',
    sm: '480px',
    md: '640px',
    lg: '980px',
    xl: '1440px',
    xxl: '1920px'
};
// Gap
const gap = {
    main:    fallback("--gap", scale.xl),
    section: fallback("--gap", scale.lg),
    content: fallback("--gap", scale.md),
    item:    fallback("--gap", scale.sm),
    single:  fallback("--gap", scale.xs)
};
// Padding
const padding = {
    main: '0'
};
// Preset sizes
const preset = {
    footerHeight: '200px'
};

// Typography
// Size
const base  = 1;
const ratio = 1.25;

const n = { sm: base / ratio, base, md: base * ratio };
n.lg       = n.md * ratio;
n.xl       = n.lg * ratio;
n.xxl      = n.xl * ratio;
n.xxxl     = n.xxl * ratio;
n.headline = n.lg * (ratio * 2); 

const fs = Object.fromEntries(
    Object.entries(n).map(([k, v]) => [k, v + 'rem'])
);

// Line Height
const lh = {
    base: 1.4,
    xs: 1,
    sm: 1.2,
    md: 1.6,
    headline: 0.9
};
// Letter spacing
const ls = { base: 0 };

// Font families
const ff = { serif: "'Mirety', serif", sans: "'Ocelot', sans-serif" };

// Font weight
const fw = {
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
export const theme = {

    accent: {
        a: generateTheme(raw.accent.a),
        b: generateTheme(raw.accent.b),
        c: generateTheme(raw.accent.c),
        d: generateTheme(raw.accent.d),
        e: generateTheme(raw.accent.e),
        f: generateTheme(raw.accent.f)
    },
    dark: generateTheme(raw.dark),
    light: generateTheme(raw.light),
    
}