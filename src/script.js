function displayFood(response) {
  new Typewriter("#food", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFood(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8abadf7ae1834fobb53bf70t75fb8311";
  let context =
    "You are a great cook  in a popular Restaurant. You have the task of preparing a beautiful meal receipe of not more than four lines  <br />.  Do not include a title to the food. Sign the food with <br> '@Kristyidu' inside a <strong> element at the end of the food and NOT at the beginning";
  let prompt = `User instructions: Generate a popular food receipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let foodElement = document.querySelector("#food");
  foodElement.classList.remove("hidden");
  foodElement.innerHTML = `<div class="generating">⏳ Generating a food receipe about ${instructionsInput.value} ....</div>`;

  axios.get(apiURL).then(displayFood);
}

let foodFormElement = document.querySelector("#food-generator-form");
foodFormElement.addEventListener("submit", generateFood);