export class Menu {
    name: string;
    icon: string;
    link: string;
    description: string;

    constructor(name: string, icon: string, link: string, description?: string) {
        this.name = name;
        this.icon = icon;
        this.link = link;
        this.description = description;
    }
}