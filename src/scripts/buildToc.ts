import type { MarkdownHeading } from "astro";

export default (headings: MarkdownHeading[]) => {
    const toc: any[] = [];
    const parentHeadings = new Map();

    for (const heading of headings) {
        const h = { ...heading, subheadings: [] };

        parentHeadings.set(h.depth, h);

        if (h.depth === 1) {
            toc.push(h);
        } else {
            parentHeadings.get(h.depth - 1).subheadings.push(h);
        }
    }

    return toc;
};
