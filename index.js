// function openVideo(videoSrc) {

//     const videoModal = document.createElement('div');
//     videoModal.classList.add('video-modal');
//     videoModal.innerHTML = `


//         <div class="video-content">
//             <span class="close-button">&times;</span>
//             <video controls autoplay>
//                 <source src="${videoSrc}" type="video/mp4">
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     `;


//     document.body.appendChild(videoModal);

//     const closeButton = videoModal.querySelector('.close-button');
//     closeButton.addEventListener('click', () => {
//         document.body.removeChild(videoModal);
//     });

//     videoModal.addEventListener('click', (e) => {
//         if (e.target === videoModal) {
//             document.body.removeChild(videoModal);
//         }
//     });
// }


// scripts.js
function playVideo(videoUrl, description) {
    // Create a new video element
    var videoElement = document.createElement('video');
    videoElement.setAttribute('controls', '');
    
    // Create a source element and set its attributes
    var sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', videoUrl);
    sourceElement.setAttribute('type', 'video/mp4');
    
    // Append source element to video element
    videoElement.appendChild(sourceElement);
    
    // Replace the clicked div's content with the video element
    var clickedVideoDiv = event.currentTarget;
    clickedVideoDiv.innerHTML = ''; // Clear existing content
    clickedVideoDiv.appendChild(videoElement);
    
    // Display video description below the video
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    clickedVideoDiv.appendChild(descriptionElement);
    
    // Automatically play the video
    videoElement.play();
}
