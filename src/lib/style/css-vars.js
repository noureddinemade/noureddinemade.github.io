// Ported straight out of Style.astro — unchanged logic. Walks the variables
// objects and builds the :root custom-property string.

export function camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function toCssVars(obj, prefix = '-') {
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
