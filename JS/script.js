
const btn = [...document.getElementsByClassName(`header-btn`)];

btn.forEach(item => {
    item.addEventListener(`mouseover`,() => {
        item.children[1].style.color = `white`;
    } )
})

btn.forEach(item => {
    item.addEventListener(`mouseout`,() => {
        item.children[1].style.color = `#156963`;
    } )
})


