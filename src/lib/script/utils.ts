//
// import type {html}

// Removes loading spinner from images once they've loaded
export const imgLoad = () => {
    document.querySelectorAll('img').forEach((img) => {
        if (img.complete) {
            img.classList.add('-loaded');
            return;
        }
        const done = () => img.classList.add('-loaded');
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
    });
};

// Add the correct cursor for links
export const addLinkCursors = (wrapper: HTMLElement) => {
    wrapper.querySelectorAll('p').forEach(p => {
        p.querySelectorAll('a').forEach(a => {
            a.dataset.cursor = 'link';
            a.dataset.aim = 'true';
        });
    });
}

// Wrap () in a subtle and italic span
export const wrapBrackets = (wrapper: HTMLElement) => {
    wrapper.querySelectorAll('p').forEach(p => {
        [...p.childNodes].forEach(e => {
            if (e.nodeType !== Node.TEXT_NODE) return;

            p.dataset.cursor = 'text';

            const text = e.textContent ?? '';
            const query = /\(([^)]+)\)/g;
            const frag = document.createDocumentFragment();
            let last = 0, m, matched = false;

            while ((m = query.exec(text)) !== null) {
                matched = true;
                if (m.index > last) frag.append(text.slice(last, m.index));

                const span = document.createElement('span');
                span.className = 'text -italic -subtle';
                span.textContent = m[0];
                frag.append(span);
                last = m.index + m[0].length;
            }

            if (!matched) return;
            if (last < text.length) frag.append(text.slice(last));

            e.replaceWith(frag);
        });
    });
}

// Style case studies
export const caseStudyFormatter = () => {
    const main = document.querySelector('main');
    
    if (!main) return;
    
    addLinkCursors(main);
    wrapBrackets(main);
}