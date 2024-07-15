const buttonElem = document.querySelector(".click") as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
let isWhite:boolean = false;

buttonElem.addEventListener("click",()=>{
    console.log("i am clicked");
    if (isWhite) {
        bodyElem.style.backgroundColor = "";
    } else {
        bodyElem.style.backgroundColor = "#e3d5ca";
        
    }
    isWhite = !isWhite
})