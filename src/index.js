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
    let instructionInput = document.querySelector("#user-instructions");

    let apiKey = "06cffcec970a84624ftfdo3fb2c867aa";
    let prompt = `Generate a poem about ${instructionInput .value}`;
    let context = " Your mission is to generate a basic poem for user in basic HTML do not include the HTML part in the poem, please follow users input, user's input is to generate a lovely poem";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);


    axios.get(apiURL).then(displayPoem);



} 

let poemFormElement = document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit", generatePoem)