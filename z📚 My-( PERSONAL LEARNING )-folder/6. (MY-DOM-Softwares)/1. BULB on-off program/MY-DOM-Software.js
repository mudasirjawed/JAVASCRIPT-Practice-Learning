//===================================
// 1. ( My First bulb )
//===================================

let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function(){
    if (flag === 0){
        bulb.style.backgroundColor = "rgb(255, 255, 100)";
        btn.innerHTML = "Onn";
        btn.style.backgroundColor = "green";
        btn.style.Color = "white";
        flag = 1;
    }else{
        bulb.style.backgroundColor = "black";
        btn.innerHTML = "Off";
        btn.style.backgroundColor = "white";
        flag = 0;
    }
})

//=====================================
// 2. ( My second bulb ) RECOMMEDED ✅
//=====================================

let bulb = document.querySelector(".bulb"); 
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function(){
    if (flag === 0){
        bulb.style.backgroundColor = "rgb(255, 255, 120)";
        bulb.style.boxShadow = "0 0 80px 45px rgba(255, 255, 120, 0.8)";
        btn.innerHTML = "On";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        flag = 1;
    } else {
        bulb.style.backgroundColor = "#111";
        bulb.style.boxShadow = "inset 0 0 40px #000";
        btn.innerHTML = "Off";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        flag = 0;
    }
});
