function checkLameness() {
    const containerLame = document.getElementById('lameAss');
    const containerLameRot = document.getElementById('rotten-brain');
    console.log(sessionStorage.getItem("decision"));
    if (sessionStorage.getItem("decision") !== null) {
        if (sessionStorage.getItem("decision") === "true") {
            containerLame.classList.remove('lame-ass-visible');
            containerLame.classList.add('lame-ass-hidden');
            console.log(sessionStorage.getItem("decision"));
        } else if (sessionStorage.getItem("decision") === "false") {
            containerLameRot.classList.remove('monkey-see-monkey-click-mode-hidden');
            containerLameRot.classList.add('monkey-see-monkey-click-mode');
            console.log(sessionStorage.getItem("decision"));
        }
    } else {
        console.log(sessionStorage.getItem("decision"));
        return;
    }
}

function answer(id, lameFlag) {
    if (lameFlag) {
        lameAss(id);
    } else {
        goodBoy(id);
    }
}

function goodBoy(id) {
    const divContainer = document.getElementById('lameAss');
    if (divContainer) {
        if (sessionStorage.getItem("decision") === null) {
            let goodChoice = true;
            sessionStorage.setItem("decision", goodChoice);
            divContainer.classList.remove('lame-ass-visible');
            divContainer.classList.add('lame-ass-hidden');
            console.log(sessionStorage.getItem("decision"));
        } else {
            divContainer.classList.remove('lame-ass-visible');
            divContainer.classList.add('lame-ass-hidden');
            console.log(sessionStorage.getItem("decision"));
        }

    }
}

function lameAss(id) {
    const divContainer = document.getElementById('rotten-brain');
    if (divContainer) {
        if (sessionStorage.getItem("decision") === null) {
            let goodChoice = false;
            sessionStorage.setItem("decision", goodChoice);
            divContainer.classList.remove('monkey-see-monkey-click-mode-hidden');
            divContainer.classList.add('monkey-see-monkey-click-mode');
            console.log(sessionStorage.getItem("decision"));
        } else {
            divContainer.classList.remove('monkey-see-monkey-click-mode-hidden');
            divContainer.classList.add('monkey-see-monkey-click-mode');
            console.log(sessionStorage.getItem("decision"));
        }

    } else {
        console.log('failed to load div container');
    }
}

checkLameness();