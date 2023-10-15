let isCompact: boolean = false;

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

export const adjustRootCSS = () => {
    const root = document.querySelector(".root") as HTMLDivElement;
    if (!root) {
        return;
    }

    if (root.clientWidth < 1000) {
        if (!root.classList.contains("compact")) {
            root.classList.add("compact");
            isCompact = true;
        }
    } else {
        if (root.classList.contains("compact")) {
            root.classList.remove("compact");
            isCompact = false;
        }
    }
};

export function setupRootResizeCSS(): void {
    document.addEventListener('DOMContentLoaded', function() {
        adjustRootCSS();
        window.addEventListener('resize', adjustRootCSS);
        window.setInterval(adjustRootCSS, 10);
    });
}

export function isRootCompact(): boolean {
    return isCompact;
}
