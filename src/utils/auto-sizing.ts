export const adjustBodyHeight = () => {
    const mainBody: HTMLDivElement = document.querySelector(".main") as HTMLDivElement;
    if (!mainBody) {
        return;
    }

    const topDistance = mainBody.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxHeight = (viewportHeight - topDistance) - 20;

    mainBody.style.maxHeight = `${maxHeight}px`;
};

export function setupAutoAdjustBodyHeight(): void {
    document.addEventListener('DOMContentLoaded', function() {
        adjustBodyHeight();
        window.addEventListener('resize', adjustBodyHeight);
        window.setInterval(adjustBodyHeight, 10);
    });
}