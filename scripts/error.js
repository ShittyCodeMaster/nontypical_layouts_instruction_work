function popError(msg, elementId) {
    const errorBlock = document.getElementById(elementId);

    if (errorBlock) {
        const errorTextVar = document.createElement('div');
        errorTextVar.classList.add('errorText');
        errorTextVar.setAttribute('id', 'errorMsgText');
        errorTextVar.textContent = "Something got fucked!";
        errorBlock.appendChild(errorTextVar);
        const errorBlockTwo = document.getElementById('errorMsgText');
        errorBlockTwo.classList.toggle('pop-error');
    }
}

function popTheErrorTest() {
    popError('tets', 'error-msg');
}