
const colorlist=document.querySelectorAll('.color');

colorlist.forEach((el)=> {
    el.addEventListener('click', ()=>{
    document.getElementById("output").textContent =
    colorCode(el.classList[0]);
    });
});

const COLORS=["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
function colorCode(color) {
    return COLORS.indexOf(color);
} 
