function show()
{
    contentDiv.innerHTML = `
    <div>Spørsmål</div>
    <input id='textInput' placeholder='Skriv inn spørsmål...'></input>
    <input type='checkbox' id='cBox'></input>
    <p>La brukerene legge til egne alternativer</p>
    <ul>
    ${model.polls}
    </ul>
    <input></><button>Legg til alternativ</button>
    <button>Lag</button>
    `
    
}