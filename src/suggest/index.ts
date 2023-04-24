import { getPlaceholder, hidePlaceholder, showPlaceholder } from './placeholder'
import { getTextArea } from './textarea'
import { setKeydown } from './keydown'
let container: HTMLElement | null = null


const onChildChange = (mutation: MutationRecord) => {
    // 展示/隐藏placeholder
    const childNodes = mutation.target.childNodes
    if (childNodes.length === 0) {
        showPlaceholder()
    }
    if (childNodes.length === 1 && childNodes[0].nodeName === '#text') {
        if (childNodes[0].nodeValue === '') {
            showPlaceholder()
        } else {
            hidePlaceholder()
        }
    }
    // ----

}
const onAttributeChange = (mutation: MutationRecord) => { }

const ob = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            onChildChange(mutation)
        } else if (mutation.type === 'attributes') {
            onAttributeChange(mutation)
        } else {
            console.log('mutation.type', mutation.type)
        }
    })
})



export const Suggest = (target: string) => {
    container = document.querySelector(target)
    if (container === null) {
        throw new Error('target is not exist')
    }
    // 设置一个变量，暂存container的所有子节点
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    const textArea = getTextArea()
    container.appendChild(textArea)
    ob.observe(textArea, { childList: true, subtree: true })
    // 添加placeholder
    container.appendChild(getPlaceholder())
    // 添加键盘事件
    setKeydown(textArea)
    return {}
}