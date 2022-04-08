
let ctabtn = document.getElementById("contactbtn");
ctabtn.addEventListener("click", () => {
    let black_background = document.getElementById("blackenign");
    let modal = document.getElementById("contactmodal");
    black_background.style["display"] = "block";
    modal.style["display"] = "flex"; 
})


let cancle = document.querySelector("#cncbutton")
cancle.addEventListener("click", () => {
    let black_background = document.getElementById("blackenign");
    let modal = document.getElementById("contactmodal");
    black_background.style["display"] = "none";
    modal.style["display"] = "none";
    
})