let btntranslate = document.querySelector("btn-translate");
let inputText = document.querySelector("#inputText");
let outputText = document.querySelector("#outputText");


// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
let serverURL = "https://api.funtranslations.com/translate/minion.json"



function getTranslationUrl(text) {
    return serverURL+'?'+'text='+text.trim();
}

function clickHandler() {

    let textinput = inputText.value;
    // outputText.innerText = "this is the translated text";
    fetch(getTranslationUrl(textinput))
    .then(response => { console.log(response)
    return response.json()})
    .then(data => {
        console.log(data.contents.translated);

        TranslatedText = data.contents.translated;
        outputText.innerHTML = TranslatedText;
    })
}   


// btntranslate.addEventListener('click', clickHandler);