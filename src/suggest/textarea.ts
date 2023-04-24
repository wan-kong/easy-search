import { createElement } from "./createElement"


let textArea: HTMLElement | null = null

export const genderTextarea = () => {
    return createElement('div', { class: 'm-s-textarea', contenteditable: true })
}


export const getTextArea = () => {
    return textArea || genderTextarea()
}