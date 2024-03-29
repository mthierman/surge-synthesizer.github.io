import type { MarkdownHeading } from "astro";

export default (headings: MarkdownHeading[] | undefined) => {
    if (headings === undefined) return;
    console.log(headings);

    const toc: any[] = [];
    const parentHeadings = new Map();

    headings.forEach((h: any) => {
        const heading: MarkdownHeading = { ...h, subheadings: [] };
        // parentHeadings.set(heading.depth, heading);
        // console.log(heading);

        // console.log(parentHeadings.get(heading.depth - 1));

        // if (heading.depth === 1) {
        //     toc.push(heading);
        // } else {
        //     parentHeadings.get(heading.depth - 1).subheadings.push(heading);
        // }
    });
    return toc;
};
