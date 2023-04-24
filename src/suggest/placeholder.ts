import { createElement } from "./createElement"
const PLACE_HOLDER = '请输入搜索内容'

let placeholder: HTMLElement | null = null

export const genderPlaceHolder = (placeholder: string): HTMLElement => {
    return createElement('div', { class: 'm-s-placeholder' }, [placeholder || PLACE_HOLDER])

}

export const getPlaceholder = () => {
    placeholder = placeholder || genderPlaceHolder(PLACE_HOLDER)
    return placeholder
}

/**
 * 隐藏placeholder
 */
export const hidePlaceholder = () => {
    placeholder?.classList.add('hide')
}

/**
 * 显示placeholder
 */
export const showPlaceholder = () => {
    placeholder?.classList.remove('hide')
}
