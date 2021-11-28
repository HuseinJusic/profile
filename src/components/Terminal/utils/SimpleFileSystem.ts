import SimpleFile from "./SimpleFile";
import SimpleFolder from "./SimpleFolder";

class SimpleFileSystem{
    rootFolder: SimpleFolder;
    pointer: SimpleFolder;

    constructor() {
        this.rootFolder = new SimpleFolder("root", null);
        this.pointer = this.rootFolder;
    }

    cd(param: String){
        switch(param){
            case '..':
                if(this.pointer.parent !=null){
                    this.pointer = this.pointer.parent;
                }
                break;
            default:
                const child = this.pointer.findChildFolder(param)

                if(child != null){
                    this.pointer = child;
                }
                break;
        }
        return [""];
    }

    cat(param: String): Array<String>{
        const file = this.pointer.findChildFile(param);

        if(file != null){
            return file.content;
        }
        return ["error"];
    }

    mkdir(param: String): Array<String>{
        this.pointer.addFolder(new SimpleFolder(param, this.pointer))
        return ["folder " + param + " created!"]
    }

    touch(name: String, content: Array<String>): Array<String>{
        content.shift();
        content.shift();
        this.pointer.addFile(new SimpleFile(name, content))
        return ["file " + name + " created!"]
    }

    ls(): Array<String>{
        let erg: String[] = [];
        
        for(let i = 0; i < this.pointer.childFolders.length; i++){
            erg.push(this.pointer.childFolders[i].name)
        }

        for(let i = 0; i < this.pointer.files.length; i++){
            erg.push(this.pointer.files[i].name)
        }
        
        return erg;
    }

    help(): Array<String>{
        let erg: String[] = ["Commands:"];

        erg.push("ls - list directory contents");
        erg.push("cd - change directory");
        erg.push("cat - concatenate and print files");
        erg.push("mkdir – make directories");
        erg.push("touch – change file access and modification times");
    
        return erg;
    }

    translateCommand(command: string): Array<String> {
        let cparam: Array<String> = command.split(' ');
        switch(cparam[0]){
            case 'cd':
                return this.cd(cparam[1]);
            case 'mkdir':
                return this.mkdir(cparam[1]);    
            case 'touch':
                return this.touch(cparam[1], cparam);     
            case 'cat':
                return this.cat(cparam[1]);
            case 'ls':
                return this.ls();
            case 'help':
                return this.help();
            default:
                return ["command not found: " + cparam[0]+ ", try using \"help\""];
        }
        return;
    }
}

export default SimpleFileSystem;