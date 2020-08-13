
function addAlternative(text) 
{
    model.inputs.createPoll.options.push(text)
    createPoll()
}

function removeAlternative() 
{

}

function showOptionsInCreate() 
{
    let html = '';
    for (option of model.inputs.createPoll.options) 
    {
        html += `<li>${option}</li> <br>`
    }
    return html
}


function addAlternative2() 
{
    for (i = 0; i < model.polls[0].options.length; i++)
    {
        document.getElementById('list').innerHTML += `<button>${model.inputs.createPoll.options[i]}</button> <br><br>`
    }
}


function createAlternativesHtml() 
{
    for (i = 0; i < model.polls[0].options.length; i++)
    {
        document.getElementById('buttons').innerHTML += `<button>${model.polls[0].options[i]}</button> <br><br>`
    }
}

function createAlternativesHtml2() 
{
    const pageInputs = model.polls[model.polls[0].id].options;
    return pageInputs.map(option => `<li>${option}</li>`).join('');
}

function showStoredPolls() 
{
    let html = '';
    for (i = 0; i < model.polls.length; i++)
    {
        html += `<button>${model.polls[i].question}</button> <br>`
    }
    return html
}

// function addAlt()
// {
//     addAlternative(model.inputs.createPoll.newAlternative);
//     document.getElementById('altPreText').style.visibility="visible";
// }