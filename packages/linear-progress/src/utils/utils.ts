export function _stylingElement(progressEl, value){
  if(value){
    value.forEach(element => {
      progressEl.shadowRoot.querySelector(`${element.selector}`).setAttribute("style", `${element.style}`);
    });
  }
}
