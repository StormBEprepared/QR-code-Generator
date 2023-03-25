
function EnterEventHandler(){
    var input = document.getElementById("InputCity");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("checkWeatherForCity").click();
      }
    });
  }
  
  
  