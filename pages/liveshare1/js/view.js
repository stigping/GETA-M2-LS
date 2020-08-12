function createPoll()
{
    const pageInputs = model.inputs.createPoll;
    const newText = model.inputs.createPoll.newAlternative=this.value;
    contentDiv.innerHTML = ` 
    <div>Spørsmål</div>
    <input id='textInput' placeholder='Skriv inn spørsmål...' value='${pageInputs.question}' oninput='model.inputs.createPoll.question=this.value'></input>
    <br><br>
    <input type='checkbox' id='cBox'></input>
    <p>La brukerene legge til egne alternativer</p>
    <ul id="list">
    
    </ul>
    <input placeholder='Skriv inn alternativ...' value='' oninput='model.inputs.createPoll.newAlternative=this.value'></input>
    <button onclick='addAlternative(model.inputs.createPoll.newAlternative)' onclick='${newText}'>Legg til alternativ</button>
    <br><br>
    <button onclick=''>Lag</button>
    `;
}

function showPoll()
{  
    const pageInputs = model.inputs.createPoll;
    contentDiv.innerHTML = `
    <div>${model.polls[0].question}</div>
    <br>
    ${createAlternativesHtml2()}
    <div id='buttons'></div>
    <input placeholder='Skriv inn alternativ...' value='${pageInputs.newAlternative}'></input>
    <button onlick="">Legg til alternativ</button>
    `;
    // createAlternativesHtml()

}

// oninput='model.inputs.createPoll.newAlternative=this.value'