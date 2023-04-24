// 功能键，不触发事件
const combKeys: (keyof KeyboardEvent)[] = ['isComposing', 'ctrlKey', 'altKey', 'metaKey', 'shiftKey']

const keyObj: { [key: string]: () => void } = {
    'KeyA': () => {
        console.log('KeyA')
    },
}



const onkeyDown = (e: KeyboardEvent) => {
    const isCombKey = combKeys.some((key) => e[key])
    if (isCombKey) {
        return
    }
    keyObj?.[e.code]?.()
}




export const setKeydown = (container: HTMLElement) => {
    container.addEventListener('keydown', onkeyDown)
}