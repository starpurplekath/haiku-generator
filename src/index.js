function displayHaiku(response) {
  let haiku = response.data.answer;
  haiku = haiku.replace(/```html|```/g, "").trim();
  new Typewriter("#haiku", {
    strings: haiku,
    autoStart: true,
    delay: 100,
    cursor: "",
    html: true
  });
}
function generateHaiku(event) {
  event.preventDefault();
  let haikuElement = document.querySelector("#haiku");
  haikuElement.innerHTML = "";
  let instructionsInput = document.querySelector("#user-prompt");
  let apiKey = "2t0bdeefa04963oca449cf5e4beff40a";
  let prompt = `Generate a haiku about ${instructionsInput.value}`;
  let context =
    "You are an ancient writer of haiku and love to write haiku based on city life. Please write one three-line haiku using HTML-rendered text and sign the poem with 'SheCodes AI'";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let haikuNewElement = document.querySelector("#haiku");
  haikuNewElement.classList.remove("hidden");
  haikuNewElement.innerHTML = `<div class="scroll"> <span>Generating a city haiku about ${instructionsInput.value} </span></div>`;

  axios.get(apiUrl).then(displayHaiku);
}

let poemFormElement = document.querySelector("#haiku-generator");
poemFormElement.addEventListener("submit", generateHaiku);
