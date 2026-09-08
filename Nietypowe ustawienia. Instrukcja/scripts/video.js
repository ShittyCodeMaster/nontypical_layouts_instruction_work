//--- big pic flag ---
let bigPicFlag = false;


function scaleUp(id) {
    const container = document.getElementById(id);
    if (container) {
        container.classList.toggle('video_grid_item_x');
    }
}

function bigScreen(id) {
    const videoContainer = document.getElementById(id);

    if (videoContainer.className === 'video-container') {
        videoContainer.classList.remove('video-container');
        videoContainer.classList.add('video-container-big-screen');
        bigPicFlag = true;
    } else {
        videoContainer.classList.remove('video-container-big-screen');
        videoContainer.classList.add('video-container');
        bigPicFlag = false;
    }
}

//--- event listener to close big pic mode ---
const closeBigPic = document.getElementById("main-container");

if (closeBigPic) {
    if (bigPicFlag) {
        closeBigPic.addEventListener("click", bigScreen('video1'));
    } else {
        console.log('big pic mode is off');
    }
} else {
    console.log('closeBigPic has failed');
}