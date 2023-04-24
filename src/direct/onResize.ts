import { DirectiveBinding } from "vue";

const maps = new WeakMap<Element, (args: any) => void>();

const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const callback = maps.get(entry.target);
        if (callback) {
            const box = entry.contentBoxSize[0];
            callback({
                width: box.inlineSize,
                height: box.blockSize
            });
        }
    }
});

export const onResize = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        resizeObserver.observe(el);
        maps.set(el, binding.value);
    },
    unmounted(el: HTMLElement) {
        resizeObserver.unobserve(el);
    }
}