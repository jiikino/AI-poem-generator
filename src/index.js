function displayPoem(response){
    console.log("poem generated");
    
    new Typewriter("#poem-box", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generatePoem(event){

    event.preventDefault(); 
    let instructionInput = document.querySelector("#use