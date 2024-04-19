/**
 * 
 * @param {PointerEvent} e 
 */

function onClickButton(e) {
    console.log(this);
    console.log(e.currentTarget);
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', onClickButton)
})