// Write your JavaScript code here.
// Remember to pay attention to page loading!

  
function init () {
    let missionAbort = document.getElementById("missionAbort");
   let takeOff = document.getElementById("takeoff");
   let land = document.getElementById("landing");
    let paragraph = document.querySelector("p");
    let launchColor =document.getElementById("shuttleBackground");
    let directionUp = document.getElementById("up");
    let directionDown = document.getElementById("down");
    let directionRight = document.getElementById("right");
    let directionLeft = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    

    takeOff.addEventListener("click", confirmTakeOff);
        function confirmTakeOff(event){
            if (confirm("Are your ready to take off? ")){
                paragraph.innerHTML = "Shuttle in flight";
                spaceShuttleHeight.innerHTML = 10000;
                launchColor.style.backgroundColor = "blue";

                 }else{
                paragraph.innerHTML = "Flight halted!";
            };
        }
        
        land.addEventListener('click', landingAlert);
            function landingAlert(event){
                alert("The shuttle is landing. Landing gear engaged.");
                spaceShuttleHeight.innerHTML = 0;
                launchColor.style.backgroundColor = "green";
                paragraph.innerHTML = "Flight Landed"
                
            }
    
       missionAbort.addEventListener("click", confirmAbort);
          function confirmAbort(event){
        if(confirm("Are you sure you want to abort the mission? ")) {
          paragraph.innerHTML = "Mission Aborted!";
          launchColor.style.backgroundColor = 'green';
        }
      }
        
        let mouseOver= document.getElementById("missionAbort");
         mouseOver.addEventListener("mouseover", function(event) {
         missionAbort.style.color = "red";
           setTimeout(function() {
            event.target.style.color = "";
            },600);
             });


                rocket.style.position = 'absolute';
                rocket.style.bottom = '0px';
                rocket.style.left = '0px';


        directionUp.addEventListener('click', function(){
        
           let distBottom = parseInt(rocket.style.bottom);
           distBottom += 10;
           rocket.style.bottom =distBottom + 'px';

           spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;

        })

        directionDown.addEventListener('click', function(){
        
            let distBottom = parseInt(rocket.style.bottom);
            distBottom -= 10;
            rocket.style.bottom =distBottom + 'px';
 
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
 
         })

         directionRight.addEventListener('click', function(){
        
            let distLeft= parseInt(rocket.style.left);
            distLeft += 10;
            rocket.style.left =distLeft + 'px';
 
         })
        
         directionLeft.addEventListener('click', function(){
        
            let distLeft= parseInt(rocket.style.left);
            distLeft -= 10;
            rocket.style.left =distLeft + 'px';
 
         })
        
            
    
        

    

};
window.onload = init;