function showA()
{
    contentDiv.innerHTML = ` 
    <div>Spørsmål</div>
    <input id='textInput' placeholder='Skriv inn spørsmål...' value='${model.inputs.createPoll.question}'></input>
    <br><br>
    <input type='checkbox' id='cBox'></input>
    <p>La brukerene legge til egne alternativer</p>
    <ul>

    </ul>
    <input placeholder='Skriv inn alternativ...' value='${model.inputs.createPoll.newAlternative}'></input>
    <button onlick="">Legg til alternativ</button>
    <br><br>
    <button onclick="">Lag</button>
    `;
}

function showB()
{  
    contentDiv.innerHTML = `
    <div>${model.polls[0].question}</div>
    <br>
    <div id='buttons'></div>
    <input placeholder='Skriv inn alternativ...' value='${model.inputs.createPoll.newAlternative}'></input>
    <button onlick="">Legg til alternativ</button>
    `;
    for (i = 0; i < model.polls[0].options.length; i++)
    {
        document.getElementById('buttons').innerHTML += `<button>${model.polls[0].options[i]}</button> <br><br>`
    }
}