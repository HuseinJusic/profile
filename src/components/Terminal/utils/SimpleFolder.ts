import { identity } from "lodash";
import SimpleFile from "./SimpleFile";

class SimpleFolder {
    name: String;

    parent: SimpleFolder;

    files: Array<SimpleFile>;
    childFolders: Array<SimpleFolder>;

    constructor(name: String, parent: SimpleFolder) {
        this.name = name;
        this.parent = parent;
        this.files = [];
        this.childFolders = [];
    }

    addFile(simpleFile: SimpleFile){
       if(simpleFile.name !== null && simpleFile.name.length > 0){
        if(this.files.filter(file => file.name == simpleFile.name).length < this.files.length || this.files.length == 0){
            this.files.push(simpleFile);
           }
       }
    }

    removeFile(simpleFile: SimpleFile){
        this.files = this.files.filter(file => file.name != simpleFile.name);
    }

    addFolder(simpleFolder: SimpleFolder){
        if(simpleFolder.name !== null && simpleFolder.name.length > 0){
            if(this.childFolders.filter(folder => folder.name === simpleFolder.name).length < this.childFolders.length || this.childFolders.length === 0){
                this.childFolders.push(simpleFolder);
            }
        }
    }

    removeFolder(simpleFolder: SimpleFolder){
        this.childFolders = this.childFolders.filter(folder => folder.name !== simpleFolder.name);
    }
    
    findChildFolder(name: String){
        return this.childFolders.filter(folder => folder.name === name)[0];
    }

    findChildFile(name: String){
        return this.files.filter(file => file.name === name)[0];
    }
}

export default SimpleFolder;