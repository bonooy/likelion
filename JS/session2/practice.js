//DOM

// // getElementById('id 값') 사용
// document.getElementById("lion").style.color = "red";
// document.getElementById("tiger").style.color = "blue";
// document.getElementById("bear").style.color = "green";

// // getElementsByTagName('태그이름') 사용
// document.getElementsByTagName("li")[0].style.color = "red";

// // document.querySelector('css선택자'); document.querySelectorAll('css선택자'); 사용
// document.querySelectorAll(".animal")[0].style.color = "red";


// event

// document.getElementById("btn").addEventListener("click", function(){
//     console.log("click!!!!!!!");
// });

// var num = 0;
// document.getElementById("plus").addEventListener("click", function(){
//     num++;
//     document.getElementById("num").innerHTML = num;
// });

// document.getElementById("minus").addEventListener("click", function(){
//     num--;
//     document.getElementById("num").innerHTML = num;
// });

// document.querySelector(".bar").addEventListener("click", function(){
//     document.querySelector(".newBar").getElementsByClassName.display = "block";
// });
// document.querySelector(".bar").addEventListener("click", function(){
//     document.querySelector(".bar").innerHTML = "눌렸어!";
//     document.querySelector(".newBar").classList.toggle("show");
// });

document
    .querySelector(".list")[0]
    .addEventListener("click", function(e) {
        tabBtn(e.target.dataset.id);    });

function tabBtn(a) {
    document
    .querySelector(".tab-button")[0]
    .addEventListener("click", function (){
        for(let i =0; i<document.querySelectorAll(".tab-button").length; i++){
            document.querySelectorAll(".tab-button")[i].classList.remove("here");  
            document.querySelectorAll(".tab-content")[i].classList.remove("show");
        }
        document.querySelectorAll(".tab-button")[a].classList.add("here");
        document.querySelectorAll(".tab-content")[a].classList.add("show");
    });
}