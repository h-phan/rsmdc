import { Component, Prop, Element, h, State } from "@stencil/core"
import { MDCLinearProgress } from "@material/linear-progress"

@Component({
  tag: "rs-linear-progress",
  styleUrl: "rs-linear-progress.scss",
  shadow: true
})
export class RSLinearProgress {

  @Element() progressEl : HTMLElement
  @Prop() close : boolean = false
  @Prop() progress: number = 0
  @Prop() buffer: number = 1
  @State() className: string = "mdc-linear-progress"

  progressBar:any
  mdcProgress:any

  componentDidLoad() {
    this.mdcProgress = new MDCLinearProgress(this.progressBar)
    this.mdcProgress.progress= this.progress
    this.mdcProgress.buffer = this.buffer
    const style = window.getComputedStyle(this.progressEl)
    if(style.getPropertyValue("--rs-linear-progres-indeterminate").trim() == 'true') {
      this.className = `${this.className} mdc-linear-progress--indeterminate`
    }
    if(style.getPropertyValue("--rs-linear-progres-reversed").trim() == 'true') {
      this.className = `${this.className} mdc-linear-progress--reversed`
    }
    if(this.close) {
      this.className = `${this.className} mdc-linear-progress--closed`
    }
    let bufferingDotsColor = style.getPropertyValue("--rs-linear-progress__buffering-dots--background-image").trim() || '#e6e6e6'
    bufferingDotsColor = bufferingDotsColor.replace("\#", "\%23")
    this.progressEl.shadowRoot.querySelector(".mdc-linear-progress__buffering-dots").setAttribute("style", `background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='${bufferingDotsColor}'/%3E%3C/svg%3E")`)
  }
  componentDidUnload() {
    this.mdcProgress.destroy()
  }

  render() {
    return [
      <div role="progressbar" ref={(progressBar) => { this.progressBar = progressBar }}
        class={this.className}>
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
