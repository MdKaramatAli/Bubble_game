
function Set_Target() // hit
{
    document.querySelector("#Target").innerHTML= Math.floor(Math.random() *10);
}


let time= 60;
function timer() // timer
{
    let time_interval = setInterval(function()
    {
       if(time > 0)
       {
            time--;
            document.querySelector("#timer").innerHTML=time;
       }
       else 
       {
            clearInterval(time_interval);
            user_result.innerHTML = `<h2> Game over</h2>`;
       }
    }, 1000)
}


let score = 0;
function add_score()
{
    score += 10;
    document.querySelector("#score").innerHTML = score;
}

function make_bubbles_number()// creating new numbers(bubbles)
{
    let number = ""; 
    for (let i = 0; i < 198; i++) {
    number +=`<div class="number"> ${Math.floor(Math.random()*10)} </div>`;
    }
    document.querySelector(".number_box").innerHTML = number;
}

let user_result=document.querySelector(".number_box");
user_result.addEventListener("click",function(k)
{
    let value=parseInt(k.target.innerHTML);
    let target_value= parseInt(document.querySelector("#Target").innerHTML);
    if( value === target_value)
    {
        add_score();
        Set_Target();
        make_bubbles_number();
    }
    else
    {
        document.querySelector("#score").innerHTML = score = 0;
    }
    
    if(time <=0)
    {
        user_result.style.display = "none";
        alert(`Game Over and your score is ${document.querySelector("#score").innerHTML} 
                      Refresh to restart again`);
    }
})

Set_Target();
timer();
make_bubbles_number();

