const hourSpan = document.querySelector(".hour");
const minSpan = document.querySelector(".min");
const secSpan = document.querySelector(".sec");

const amSpan = document.querySelector(".am");
const pmSpan = document.querySelector(".pm");

setInterval(()=>{
    const time = new Date();
    const hour = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    
    if (hour > 11){
        pmSpan.className = "pm active";
        amSpan.className = "am";
        if(hour > 12){
            hourSpan.innerText = (hour - 12);
        }else{
            hourSpan.innerText = hour;
        }
    }else{
        amSpan.className = "am active";
        pmSpan.className = "pm";
        if (hours == 0){
            hourSpan.innerText = hour + 12;
        }else{
            hourSpan.innerText = hour;
        }
    }
        minSpan.innerText = mins.toString().padStart(2, 0);
        secSpan.innerText = secs.toString().padStart(2, 0);

},1000);