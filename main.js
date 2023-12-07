let fullscreenOverlay = document.getElementById('fullscreenOverlay');

function openFullscreenOverlay() {
    fullscreenOverlay.style.display = 'block';
}

function closeFullscreenOverlay() {
    fullscreenOverlay.style.display = 'none';
}
// Show the overlay by default on page load
showFullscreenOverlay();

function toggleFullscreenOverlay() {
    const isOverlayVisible = fullscreenOverlay.style.display === 'flex';
    if (isOverlayVisible) {
        hideFullscreenOverlay();
    } else {
        showFullscreenOverlay();
    }
}

function showFullscreenOverlay() {
    fullscreenOverlay.style.display = 'flex';
}

function hideFullscreenOverlay() {
    fullscreenOverlay.style.display = 'none';
}


// document.addEventListener('DOMContentLoaded', function () {
//     const turnOnButton = document.getElementById('turnOnButton');
//     const fullscreenOverlay = document.createElement('div');
//     fullscreenOverlay.classList.add('fullscreen-overlay');
//     document.body.appendChild(fullscreenOverlay);

//     turnOnButton.addEventListener('click', function () {
//         toggleFullscreenOverlay();
//     });

//     fullscreenOverlay.addEventListener('click', function () {
//         hideFullscreenOverlay();
//     });

//     // Show the overlay by default on page load
//     showFullscreenOverlay();

//     function toggleFullscreenOverlay() {
//         const isOverlayVisible = fullscreenOverlay.style.display === 'flex';
//         if (isOverlayVisible) {
//             hideFullscreenOverlay();
//         } else {
//             showFullscreenOverlay();
//         }
//     }

//     function showFullscreenOverlay() {
//         fullscreenOverlay.style.display = 'flex';
//     }

//     function hideFullscreenOverlay() {
//         fullscreenOverlay.style.display = 'none';
//     }
// });

