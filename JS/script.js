const btn1 = document.getElementById(`btn1`);
const btn2 = document.getElementById(`btn2`);
const text1 = document.getElementById(`btn-link1`);
const text2 = document.getElementById(`btn-link2`);

btn1.addEventListener(`mouseover`, ()=>{
    text1.style.color = `white`;
});
btn2.addEventListener(`mouseover`, ()=>{
    text2.style.color = `white`;
});
btn1.addEventListener(`mouseout`, ()=>{
    text1.style.color = `#156963`;
});
btn2.addEventListener(`mouseout`, ()=>{
    text2.style.color = `#156963`;
});
 
