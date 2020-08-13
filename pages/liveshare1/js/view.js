function createPoll()
{
    const buttonText = 'Oppdater';
    const pageInputs = model.inputs.createPoll;
    // const newText = model.inputs.createPoll.newAlternative=this.value;
    const checked = pageInputs.usersCanAddAlternatives ? 'checked' : '';

    contentDiv.innerHTML = ` 
    <div class='header'>Spørsmål</div>
    <input id='textInput' type='text' placeholder='Skriv inn spørsmål...' value='${pageInputs.question}' oninput='model.inputs.createPoll.question=this.value'></input>
    <br><br>
    <input type='checkbox' id='cBox' ${checked} onchange="model.inputs.usersCanAddAlternatives=this.checked==='checked'"></input>
    La brukerene legge til egne alternativer
    <br><br>
    <div id='altPreText' style='visibility: visible'>Alternativer:</div>
    <ul id="list">
    ${showOptionsInCreate()}
    </ul>
    <input id='altInput' placeholder='Skriv inn alternativ...' value='' oninput='model.inputs.createPoll.newAlternative=this.value'></input>
    <button onclick='addAlternative(model.inputs.createPoll.newAlternative)'>Legg til alternativ</button>
    <br><br>
    <button onclick=''>${buttonText}</button>
    `;
}

function showPoll()
{  
    const pageInputs = model.inputs.createPoll;
    contentDiv.innerHTML = `
    <div class='header'>${model.polls[0].question}</div>
    <br>
    ${createAlternativesHtml2()}
    <div id='buttons'></div>
    <br>
    <input placeholder='Skriv inn alternativ...' value=''></input>
    <button onlick="">Legg til alternativ</button>
    `;
    // createAlternativesHtml()

}

function showAllPolls() {
    contentDiv.innerHTML = `
    <br>
    ${showStoredPolls()}
    `
}


// oninput='model.inputs.createPoll.newAlternative=this.value'
// onclick='${newText}'