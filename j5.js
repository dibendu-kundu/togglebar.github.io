// // sliding left right function
// function scrollleft(){
//     var left = document.querySelector(".slidebox");
//     left.scrollBy(250,0);
// }

// function scrollright(){
//     var right = document.querySelector(".slidebox");
//     right.scrollBy(-250,0);
// }

// // const Bar=document.querySelector(".bar a");
// // const Order=document.querySelector(".order");

// // Bar.onclick = () => {
// //     // Bar.classList.toggle("active");
// //     Order.classList.toggle("active");
// // };

// // toggle function
// function myfunc(){
//     var x =document.getElementById("menu");
//     if(x.style.display=="block")
//     {
//         x.style.display="none";
//     }
//     else
//     {
//         x.style.display="block";
//     }
// }
// sliding left right function
function scrollleft(){
    var left = document.querySelector(".slidebox");
    left.scrollBy(-310,0);
}

function scrollright(){
    var right = document.querySelector(".slidebox");
    right.scrollBy(310,0);
}

// const Bar=document.querySelector(".bar a");
// const Order=document.querySelector(".order");

// Bar.onclick = () => {
//     // Bar.classList.toggle("active");
//     Order.classList.toggle("active");
// };




// toggle function
// function myfunc(){
//     var x =document.getElementById("menu");
//     if(x.style.display=="block")
//     {
//         x.style.display="none";
//     }
//     else
//     {
//         x.style.display="block";
//     }
// }



function myfunc(){
    var x =document.querySelector(".order");
    var y =document.querySelector(".cancel");
    var z =document.querySelector(".bar");
    if(x.style.display=="block")
    {
        x.style.display="none";
        y.style.display="none";
        z.style.display="block";
        
    }
    else
    {
        x.style.display="block";
        y.style.display="block";
        z.style.display="none";
    }
}

