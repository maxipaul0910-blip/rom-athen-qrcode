document.querySelectorAll(".glass").forEach(card=>{
card.addEventListener("mousemove",e=>{
card.style.transform=
`rotateY(${(e.offsetX-150)/30}deg)
 rotateX(${-(e.offsetY-100)/30}deg)`;
});

card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0)";
});
});
