let a = document.querySelectorAll(".add-to-cartbutton")
a.forEach(x => {
    x.addEventListener("click", () => {
        if (x.style["background-color"] == "var(--oxford-blue)") {
            x.innerHTML = "Add to cart";
            x.style["background-color"] = "transparent"
            x.style["color"] = "black"
            x.style["border-color"] = "var(--terra-cotta)"
        }
        else {
            x.innerHTML = "Added ✓"
            x.style["background-color"] = "var(--oxford-blue)"
            x.style["color"] = "white"
            x.style["border-color"] = "var(--terra-cotta)"
        }
    });
});


let x = '<div class = "pop-items"><img src="https://picsum.photos/200"/><br /><p>Random Product 1pcs</p><p><b>Price:</b> 100tk</p><button class="add-to-cartbutton">Add to cart</button></div>'

let ldbtn = document.getElementById("ldbtn");
ldbtn.addEventListener("click", () => {
    for (let i = 0; i < 6; i++) {
        let elem = document.getElementsByClassName("pop-items");
        console.log(elem[elem.length - 1]);
        elem[elem.length - 1].insertAdjacentHTML("afterend", x);
        
        let arr = document.querySelectorAll(".add-to-cartbutton");
        let s = arr[arr.length - 1];
        s.addEventListener("click", () => {
            if (s.style["background-color"] == "var(--oxford-blue)") {
            s.innerHTML = "Add to cart";
            s.style["background-color"] = "transparent"
            s.style["color"] = "black"
            s.style["border-color"] = "var(--terra-cotta)"
        }
        else {
            s.innerHTML = "Added ✓"
            s.style["background-color"] = "var(--oxford-blue)"
            s.style["color"] = "white"
            s.style["border-color"] = "var(--terra-cotta)"
        }
        })
    }
})


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