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
