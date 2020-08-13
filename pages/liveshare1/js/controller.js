
function addAlternative(text) 
{
    model.inputs.createPoll.options.push(text)
    createPoll()
}

function removeAlternative(id)
{
    model.inputs.createPoll.options.splice(id, 1)
    document.getElementById(id).innerHTML = '';
    createPoll()
}

function checkUsersAdd()
{
model.inputs.createPoll.usersCanAddAlternatives == true ? model.inputs.createPoll.usersCanAddAlternatives = false : model.inputs.createPoll.usersCanAddAlternatives = true;
}

function updatePoll()
{
    model.polls[0].options = model.inputs.createPoll.options;
    model.polls[0].usersCanAddAlternatives = model.inputs.createPoll.usersCanAddAlternatives;
    showPoll()
}

function showOptionsInCreate() 
{
    let html = '';
    let i = 0;
    for (option of model.inputs.createPoll.options) 
    {
        html += `<li id="${i}">${option} <button class="far fa-times-circle" onclick="removeAlternative(${i})"></button></li> <br>`
        i++
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
    return pageInputs.map(option => `<button>${option}</button>`).join('');
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