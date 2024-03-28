import type { MarkdownHeading } from "astro";

export default (headings: MarkdownHeading[] | undefined) => {
    if (headings === undefined) return;

    const toc: any[] = [];
    const parentHeadings = new Map();

    headings.forEach((h: any) => {
        const heading: MarkdownHeading = { ...h, subheadings: [] };
        parentHeadings.set(heading.depth, heading);

        if (heading.depth === 1) {
            toc.push(heading);
        } else {
            parentHeadings.get(heading.depth - 1).subheadings.push(heading);
        }
    });
    return toc;
};
