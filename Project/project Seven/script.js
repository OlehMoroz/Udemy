/* Задания на урок: */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.btn-block');

    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.matches('.blue')) {
            console.log('bingo');
        } else {
            console.log('false');
        }
    });
});