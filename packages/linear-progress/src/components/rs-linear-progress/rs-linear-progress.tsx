import { Component, Prop, Element, Method, h } from '@stencil/core';
import { MDCLinearProgress } from '@material/linear-progress';
import { _stylingElement } from '../../utils/utils';

@Component({
  tag: "rs-linear-progress",
  styleUrl: 'rs-linear-progress.scss',
  shadow: true
})
export class MyComponent{

  @Element() progressEl : HTMLElement;
  @Prop() close : boolean = false;
  @Prop() type : string = '';
  @Prop() reversed: boolean = false;
  @Prop() progressbarcolor : string;
  @Prop() bufferbarcolor: string ;
  @Prop() progress: number = 0 ;
  @Prop() buffer: number = 0 ;

  @Method()
  async setProgress(value: number){
    // Kiem tra xem co phai so hay khong?
    // Kiem tra value co nam trong khoang [0,1] hay khong?
    this.mdcProgress.progress= value;
  }
  @Method()
  async setBuffer(value: number){
    // Kiem tra xem co phai so hay khong?
    // Kiem tra value co nam trong khoang [0,1] hay khong?
    this.mdcProgress.buffer= value;
  }

  @Method() 
  async setBarColor(color: string) {
    // Kiem tra co phai color hay khong?
    this.progressEl.style.setProperty('--mdc-linear-progress_-bar-inner--background-color', color);
  }

  @Method() 
  async setBufferColor(color: string) {
    // Kiem tra co phai color hay khong?
    this.progressEl.style.setProperty('--mdc-linear-progress-buffer-color--background-color', color);
  }
  @Method()
  async setHeight(height: number) {
    // Kiem tra co phai so nguyen > 0 hay khong
    this.progressEl.style.setProperty('--mdc-linear-progress--height', `${height}px`);
  }
  
  // const myComponent = document.querySelector('my-component');
  // myComponent.stylingElement([{
  //     selector: "#com-1",
  //     style: "height:1px"
  //   },{
  //     selector: "#com-3",
  //     style: "display: none;"
  //   }]);
  @Method()
  async stylingInnerElement(value){
    if(value){
      _stylingElement(this.progressEl, value)
    }
  }

  progressBar:any;
  mdcProgress:any;
  innerProgressBar:any;
  bufferProgressBar:any;

  componentWillLoad(){
    if(this.progressbarcolor){
      this.progressEl.style.setProperty('--mdc-linear-progress_-bar-inner--background-color',this.progressbarcolor);
    }
  }

  componentDidLoad(){
    this.mdcProgress = new MDCLinearProgress(this.progressBar)
    this.mdcProgress.progress= this.progress;
    this.mdcProgress.buffer = this.buffer;
  }
  componentDidUnload(){
    this.mdcProgress.destroy()
  }

  // NG
  getProgressClassName(){
    let className: string = "mdc-linear-progress";

    if(this.type === "indeterminate"){
        className = ` ${className} mdc-linear-progress--indeterminate`;
    }
    if(this.reversed){
        className = ` ${className} mdc-linear-progress--reversed`;
    }
    if(this.close){
        className = ` ${className} mdc-linear-progress--closed`;
    }
    return className;
  }

  

  render() {
    return [
      <div role="progressbar" ref={(progressBar) => { this.progressBar = progressBar; }}
        class={this.getProgressClassName()}>
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
    ]
  }
}
