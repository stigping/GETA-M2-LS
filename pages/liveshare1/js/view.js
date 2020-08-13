function createPoll()
{
    const buttonText = 'Oppdater';
    const pageInputs = model.inputs.createPoll;
    const checked = pageInputs.usersCanAddAlternatives ? 'checked' : '';
    // const newText = model.inputs.createPoll.newAlternative=this.value;
    contentDiv.innerHTML = ` 
    <div class='header'>Spørsmål</div>
    <input id='textInput' type='text' placeholder='Skriv inn spørsmål...' value='${pageInputs.question}' oninput='model.inputs.createPoll.question=this.value'></input>
    <br><br>
    <input type='checkbox' id='cBox' ${checked} onchange="model.inputs.usersCanAddAlternatives=this.checked==='checked';checkUsersAdd()"></input>
    La brukerene legge til egne alternativer
    <br><br>
    <div id='altPreText' style='visibility: visible'>Alternativer:</div>
    <ul id="list">
    ${showOptionsInCreate()}
    </ul>
    <input id='altInput' placeholder='Skriv inn alternativ...' value='' oninput='model.inputs.createPoll.newAlternative=this.value'></input>
    <button onclick='addAlternative(model.inputs.createPoll.newAlternative)'>Legg til alternativ</button>
    <br><br>
    <button onclick='updatePoll()'>${buttonText}</button>
    `;
}

function showPoll()
{  
    contentDiv.innerHTML = `
    <div class='header'>${model.polls[0].question}</div>
    <br>
    ${createAlternativesHtml2()}
    <div id='buttons'></div>
    <br>
    <div ${model.polls[0].usersCanAddAlternatives == true ? '' : 'style="visibility: hidden"'} id='canAddAlt' style="visibility: visible">
    <input placeholder='Skriv inn alternativ...' value=''></input>
    <button  onclick="${addAlternative}">Legg til alternativ</button>
    </div>
    `;
    // createAlternativesHtml()

}

function showAllPolls() {
    contentDiv.innerHTML = `
    <br>
    ${showStoredPolls()}
    `
}

// ${model.polls[0].usersCanAddAlternatives == true ? "style='hidden'" : ''}

// ${model.polls[0].usersCanAddAlternatives == true ? document.getElementById('canAddAlt').style.visibility='visible' : document.getElementById('canAddAlt').style.visibility='hidden'}