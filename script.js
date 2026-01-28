// ১. স্লাইডার ইমেজ (Images folder path)
const images = [
    "images/slider1.jpg", 
    "images/slider2.jpg",
    "images/slider3.jpg"
];
let currentIndex = 0;

function changeImage() {
    const heroImg = document.getElementById('dynamic-hero');
    if(heroImg) {
        currentIndex = (currentIndex + 1) % images.length;
        heroImg.src = images[currentIndex];
    }
}
setInterval(changeImage, 30000); // ৩০ সেকেন্ড পরপর পরিবর্তন

// ২. অডিও জুকবক্স (Audio folder path)
function playAudio(fileName) {
    // এটি অডিও ফোল্ডার থেকে ফাইলটি খুজবে
    let audioPath = "audio/" + fileName; 
    let audio = new Audio(audioPath);
    
    if (window.currentAudio) {
        window.currentAudio.pause(); // নতুন গান শুরুর আগে আগেরটি বন্ধ হবে
    }
    window.currentAudio = audio;
    audio.play();
}
