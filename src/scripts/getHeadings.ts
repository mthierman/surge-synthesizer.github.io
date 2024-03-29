import buildToc from "scripts/buildToc";

export default async (sections: any) => {
    let map = new Map<string, any[]>();

    for (const section of sections) {
        const { headings } = await section.render();
        map.set(section.data.title, buildToc(headings)!);
    }

    return map;
};
