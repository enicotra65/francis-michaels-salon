// Image array
const images = [
  'assets/deco1.jpg',
  'assets/deco2.jpg',
  'assets/deco3.jpg',
  'frontofsalon.jpg',
  'assets/deco4.png',
  'assets/deco5.png',
  'assets/deco6.png',
  'assets/deco7.png',
  'assets/deco8.png',
  'assets/deco9.png',
  'assets/deco10.png'
];

let currentIndex = 0;

// Get the image element and buttons
const carouselImage = document.getElementById('carousel-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Function to update the image
function updateImage() {
  carouselImage.src = images[currentIndex];
}

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = images.length - 1; // Go to last image
  } else {
    currentIndex--;
  }
  updateImage();
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
  if (currentIndex === images.length - 1) {
    currentIndex = 0; // Go to first image
  } else {
    currentIndex++;
  }
  updateImage();
});

// Initialize with the first image
updateImage();

