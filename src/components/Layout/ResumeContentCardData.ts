// TODO: Add actual date ranges as an option in addition to raw strings for detail text, make them comparable as well for sorting

export default class ResumeContentCardData {
    title: string;
    subtitle: string;
    detailText: string;
    content: string;
    constructor(title: string, subtitle: string = undefined, detailText: string = undefined, content: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.detailText = detailText;
        this.content = content;
    }
}
