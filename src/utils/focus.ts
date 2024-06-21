export function highlightWords(html: string): string {
    const keywords: string[] = [
        "HTML",
        "Flash",
        "AS3",
        "Obj-C",
        "Java",
        "CSS",
        "PixiJS",
        "JS",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "Unity",
        "C#",
        "graphic design",
        "web design",
        "animations",
        "game design",
        "programming",
        "games engines",
        "physics",
        "prototyping",
        "slots games",
        "framework",
        "managing",
        "dev ops",
        "TeamCity",
        "AWS",
        "Bash",
        "MySQL",
        "portal",
        "deployment system",
        "Jenkins",
        "Ansible",
        "Terraform",
        "Docker",
        "virtual retail cabinets",
        "npm package",
        "Node",
        "Spine",
        "AI-powered"
    ];
    for (const word of keywords) {
        html = html.split(new RegExp(word, "i")).join(`<span class="highlight">${word}</span>`);
    }
    return html;
}