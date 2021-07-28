// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    let takeOff=document.getElementById("takeoff");
    let flightStatus=document.getElementById("flightStatus");
    let shuttleBackground=document.getElementById("shuttleBackground");
    let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    let land=document.getElementById("landing");
    let abortMission=document.getElementById("missionAbort");
    let up=document.getElementById("up");
    let rocket=document.getElementById("rocket");
    let rocketPosition=0;
    let rocketleft=0;
    let rocketBottomPos=rocketPosition+'px';
    let down=document.getElementById("down");
    let right=document.getElementById("right");
    let left=document.getElementById("left");
    rocket.style.position="absolute";
    rocket.style.bottom=rocketBottomPos;
    rocket.style.left=rocketPosition;
    takeOff.addEventListener("click",function(){
     let question= confirm("Confirm that the shuttle is ready for takeoff")
     if(question){
         
flightStatus.innerHTML="Shuttle in flight.";
         shuttleBackground.style.background="blue";
         spaceShuttleHeight.innerHTML= Number(spaceShuttleHeight.innerHTML)+10000;
     }
    });
     land.addEventListener("click",function(){
         let question =alert("The shuttle is landing. Landing gear engaged.");
         flightStatus.innerHTML="The shuttle has landed.";
         shuttleBackground.style.background="green";
         spaceShuttleHeight.innerHTML=0;
         rocket.style.bottom=0+'px';
         rocket.style.left=0+'px';
     });
    abortMission.addEventListener("click",function(){
        let question=confirm("Confirm that you want to abort the mission.");
        if(question){
            flightStatus.innerHTML="Mission aborted";
            shuttleBackground.style.background="green";
            spaceShuttleHeight.innerHTML=0;
            rocket.style.bottom=0+'px';
            rocket.style.left=0+'px';
        }
    });
        up.addEventListener("click",function(){
            if(rocketPosition<250){
            rocketPosition +=10;
            rocket.style.bottom=`${rocketPosition}px`;
            spaceShuttleHeight.innerHTML= Number(spaceShuttleHeight.innerHTML)+10000;
            }
        });
    
        down.addEventListener("click",function(){
            if(rocketPosition>-10){
            rocketPosition -=10;
            rocket.style.bottom=`${rocketPosition}px`;
            spaceShuttleHeight.innerHTML= Number(spaceShuttleHeight.innerHTML)-10000;
            }
        });
        right.addEventListener("click",function(){
            if(rocketleft<490){
            rocketleft +=10;
            rocket.style.left=`${rocketleft}px`;
            }
        });
        left.addEventListener("click",function(){
            if(rocketleft>-20){
            rocketleft -=10;
            rocket.style.left=`${rocketleft}px`;
           }
        });



});