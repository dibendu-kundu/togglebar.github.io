// sliding left right function
function scrollleft(){
    var left = document.querySelector(".slidebox");
    left.scrollBy(250,0);
}

function scrollright(){
    var right = document.querySelector(".slidebox");
    right.scrollBy(-250,0);
}

// const Bar=document.querySelector(".bar a");
// const Order=document.querySelector(".order");

// Bar.onclick = () => {
//     // Bar.classList.toggle("active");
//     Order.classList.toggle("active");
// };

// toggle function
function myfunc(){
    var x =document.getElementById("menu");
    if(x.style.display=="block")
    {
        x.style.display="none";
    }
    else
    {
        x.style.display="block";
    }
}
