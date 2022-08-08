const Outbox = document.querySelector(".outbox"),
Inputpart = Outbox.querySelector(".inputpart"),
Infotext = Inputpart.querySelector(".infotext"),
Inputfield = Inputpart.querySelector("input");
Locationbtn = Inputpart.querySelector(".btn2"),
Icon = document.querySelector(".weatherpart img"),
Arrow = Outbox.querySelector(".navpanel i"),
Button = Inputpart.querySelector(".btn1");

let Output1=document.querySelector(".date");
let Output2=document.querySelector(".time");

// func for time
function addzero(num){
    return num < 10 ? `0${num}`:num;
}

let api;

// check weather details by searching city name manually

Button.addEventListener("click", ()=>{

    // for date section

    let today= new Date();
    let month=today.getMonth()+1;
    let year=today.getFullYear();
    let date=today.getDate();
    let current_date=`${date}/${month}/${year}`;
    Output1.innerText=current_date;

    let hours=addzero(today.getHours());
    let minutes=addzero(today.getMinutes());
    let current_time=`${hours}:${minutes} (IST)`;
    Output2.innerText=current_time;

    // for time section

    if(Inputfield.value!=""){
        // console.log("Hello");
        requestApi(Inputfield.value);
    }
});

// check weather details by searching location

Locationbtn.addEventListener("click", ()=>{

    let today= new Date();
    let month=today.getMonth()+1;
    let year=today.getFullYear();
    let date=today.getDate();
    let current_date=`${month}/${date}/${year}`;
    Output1.innerText=current_date;

    let hours=addzero(today.getHours());
    let minutes=addzero(today.getMinutes());
    let current_time=`${hours}:${minutes} (IST)`;
    Output2.innerText=current_time;


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else{
        alert("Your Browser does not support Geolocation API");
    }
});

function onSuccess(position){
    // console.log(position);
    const {latitude, longitude} = position.coords;
    api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0546970edd2b1d3d3db59e3c555027e6`;
    fetchdata();
}

function onError(error){
    // console.log(error);
    Infotext.innerText = error.message;
    Infotext.classList.add("error");

}

// sending request to the api for weather data of the input location

function requestApi(city){
    api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0546970edd2b1d3d3db59e3c555027e6`;
    fetchdata();
}

// fetching data from request 

function fetchdata(){
    Infotext.innerText="Getting Weather Details..."
    Infotext.classList.add("pending");
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));

}

function weatherDetails(info){
    Infotext.classList.replace("pending", "error");
    if(info.cod=="404"){

        Infotext.innerText=`${Inputfield.value} is not a valid city name`;
    }
    else{

        // defining the variable

        const city=info.name;
        const country= info.sys.country;
        const {description,id}=info.weather[0];
        const {feels_like, humidity, temp}=info.main;

        // importing data from api and put it to the HTML file

        Outbox.querySelector(".temp .number").innerText=`${temp}°C`;
        Outbox.querySelector(".weather").innerText=description;
        Outbox.querySelector(".location .place").innerText=`${city}, ${country}`;
        Outbox.querySelector(".temp1 .number2").innerText=`${feels_like}°C`;
        Outbox.querySelector(".humidity .number3").innerText=`${humidity}%`;

        // changing weather logo according to the weather condition

        if(id==800){
            Icon.src="clear.svg";
        }
        else if(id>=200 && id<=232){
            Icon.src="storm.svg";
        }
        else if(id>=600 && id<=622){
            Icon.src="snow.svg";
        }
        else if(id>=701 && id<=781){
            Icon.src="haze.svg";
        }
        else if(id>=801 && id<=804){
            Icon.src="cloud.svg";
        }
        else if((id>=500 && id<=531) || (id>=300 && id<=321)){
            Icon.src="rain.svg";
        }
        

        Infotext.classList.remove("pending", "error");
        Outbox.classList.add("active");
        // console.log(info);
    }
}

// back to the homepage

Arrow.addEventListener("click", ()=>{
    Outbox.classList.remove("active");
})



// function myfunc(){
//     var x =document.querySelector(".leftarrow");
//     var y =document.querySelector(".inputpart");
//     var z =document.querySelector(".weatherpart");
//     if(x.style.display=="block")
//     {
//         x.style.display="none";
//         z.style.display="none";
//         y.style.display="block";
        
//     }
//     else
//     {
//         x.style.display="block";
//         y.style.display="none";
//         z.style.display="block";
//     }
// }