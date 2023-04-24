
// 传入参数生成一个htmlElement，
// 第一个参数是标签名，第二个参数是标签的属性
export const createElement = (tag: string, props?: any, children?: any) => {
    const element = document.createElement(tag)
    for (const key in props) {
        element.setAttribute(key, props[key])
    }
    if (children) {
        children.forEach((child: any) => {
            if (typeof child === 'string') {
                child = document.createTextNode(child)
            } else {
                child = createElement(child.tag, child.props, child.children)
            }
            element.appendChild(child)
        })
    }
    return element
}
