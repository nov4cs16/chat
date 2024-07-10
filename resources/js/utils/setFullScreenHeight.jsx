/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

function setFullscreenHeight() {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setFullscreenHeight);
window.addEventListener('orientationchange', setFullscreenHeight);
setFullscreenHeight();

export default setFullscreenHeight;
