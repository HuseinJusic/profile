import './styles/main.scss';
import SimpleFileSystem from './utils/SimpleFileSystem';

class Terminal{
    color: String;
    tag: String;
    width: Number;
    height: Number;
    fs: SimpleFileSystem;
    command: string;
    element: HTMLHtmlElement;
    input: HTMLSpanElement;
    inputPointer: HTMLSpanElement;
    resultContainer: HTMLDivElement;

    logPreset: string;

    constructor(width?: Number, height?: Number) {

        this.tag = 'terminal'
        this.logPreset = ' > '
        this.command = ''
        this.element = document.querySelector(this.tag + '');
        this.fs = new SimpleFileSystem();

        if(width != null){
            this.width = width;
        }

        if(height != null){
            this.height = height;
        }

        this.height = height;
        this.configElement();
        this.mountConponents();

        document.addEventListener('keydown', this.keydown)
    }

    configElement = () => {
        this.element.classList.add('terminal-wrapper')
        this.element.id = "term"
        this.element.innerHTML += ""
    }

    mountConponents = () => {

        //TODO: Create auto component Mounter so simplyfy this:

        let header = document.createElement("div");
        header.classList.add("terminal-header")

        let redKnob = document.createElement("div");
        redKnob.classList.add("red-knob");

        let yellowKnob = document.createElement("div");
        yellowKnob.classList.add("yellow-knob");

        let greenKnob = document.createElement("div");
        greenKnob.classList.add("green-knob");

        let headerInfo = document.createElement("span");
        headerInfo.classList.add("header-info-text");
        headerInfo.innerHTML = "alpha-phase terminal simulator"

        header.appendChild(redKnob)
        header.appendChild(yellowKnob)
        header.appendChild(greenKnob)
        header.appendChild(headerInfo)

        this.element.appendChild(header);

        this.resultContainer = document.createElement("div");
        this.resultContainer.classList.add("terminal-result-container")
        this.element.appendChild(this.resultContainer);
        
        let inputcontainer = document.createElement("div");
        inputcontainer.classList.add("input-container")
        
        this.inputPointer = document.createElement("span");
        this.inputPointer.innerHTML = this.fs.pointer.name + this.logPreset

        inputcontainer.appendChild(this.inputPointer);
        
        this.input = document.createElement("span");
        inputcontainer.appendChild(this.input)
        this.element.appendChild(inputcontainer);
    }

    keydown = (event: any) => {
        console.log(event)
        switch(event.keyCode){
            case 13: 
                this.addTextToResult(this.command);
                let result = this.fs.translateCommand(this.command);

                result.forEach(entry => this.addTextToResultWithOutPreset(entry as string));
                this.command = '';
                //this.input.value = this.command;

                this.inputPointer.innerHTML = this.fs.pointer.name as string + this.logPreset;
                break;
            case 46:
                this.command = '';
                break;
            case 8:
                this.command = this.command.substr(0, this.command.length - 1);
                break;
            default:
                if(event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode === 32){
                    this.command += event.key
                }
                break;
        }
        this.element.scrollTo(0, 1000);
        this.input.innerHTML = this.command;
    }

    addTextToResult = (text: string) => {
        let span = document.createElement("span");
        this.resultContainer.appendChild(span)
        span.innerHTML = this.fs.pointer.name + this.logPreset + text;
    }

    addTextToResultWithOutPreset = (text: string) => {
        let span = document.createElement("span");
        this.resultContainer.appendChild(span)
        span.innerHTML = text;
    }

    
}

export default Terminal;