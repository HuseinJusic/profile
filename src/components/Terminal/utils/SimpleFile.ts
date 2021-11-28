class SimpleFile{
    name: String;
    content: Array<String>

    constructor(name: String, content: Array<String> = ["blank"]) {
        this.name = name;
        this.content = content;
    }

}
export default SimpleFile;