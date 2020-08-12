
function addAlternative(text) {
    document.getElementById('list').innerHTML += `<li>${text}</li>`
}


function addAlternative2() {
    for (i = 0; i < model.polls[0].options.length; i++)
    {
        document.getElementById('list').innerHTML += `<button>${model.inputs.createPoll.options[i]}</button> <br><br>`
    }
}


function createAlternativesHtml() {
    for (i = 0; i < model.polls[0].options.length; i++)
    {
        document.getElementById('buttons').innerHTML += `<button>${model.polls[0].options[i]}</button> <br><br>`
    }
}

function createAlternativesHtml2() {
    const pageInputs = model.inputs.createPoll;
    return pageInputs.options.map(option => `<li>${option}</li>`).join('');
}
