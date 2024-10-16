let imageIndex = 0;
const images = ['mohit.jpg', 'https://storage.googleapis.com/a1aa/image/JZ0BCeICYGzPZqjex9tNdv6M2eGE5BW8puJrSBxnAjFvduOnA.jpg', 'exam-stress.jpg','','','']; // Add your image URLs here

function changeImage() {
  const imgElement = document.getElementById('myImage');
  imgElement.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length; // Loop through the images array
}

// Call the changeImage function every 30 seconds
setInterval(changeImage, 10000); // 30000 ms = 30 seconds