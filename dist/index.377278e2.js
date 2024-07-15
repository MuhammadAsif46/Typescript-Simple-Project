const buttonElem = document.querySelector(".click");
const bodyElem = document.body;
let isWhite = false;
buttonElem.addEventListener("click", ()=>{
    console.log("i am clicked");
    if (isWhite) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#e3d5ca";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.377278e2.js.map
