export function setRem() {
    const html = document.documentElement;
    let minWidth = 360;
    let maxWidth = 1440;
    let widthAs100px = 720;
    let width = window.innerWidth;
    width = Math.max(width, minWidth);
    width = Math.min(width, maxWidth);
    let fz = width / 720 * 100;
    html.style.fontSize = fz + "px";
}