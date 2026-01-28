// ==========================================
// ১. ডাইনামিক গ্যালারি (Hero Image Rotation)
// ==========================================
const images = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"
];
let currentIndex = 0;

function changeImage() {
    const heroImg = document.getElementById('dynamic-hero');
    if(heroImg) {
        // ছবি পরিবর্তনের সময় হালকা ফেড ইফেক্ট (Fade transition)
        heroImg.style.opacity = 0.5; 
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            heroImg.src = images[currentIndex];
            heroImg.style.opacity = 1;
        }, 500);
    }
}
// প্রতি ৬০ সেকেন্ডে ছবি পরিবর্তন হবে
setInterval(changeImage, 60000); 


// ==========================================
// ২. জুকবক্স কন্ট্রোল (Audio Player Logic)
// ==========================================
function playAudio(rhymeFile) {
    // অডিও পাথ তৈরি করা
    let audioPath = "audio/" + rhymeFile;
    let audio = new Audio(audioPath);
    
    // আগের কোনো গান বাজতে থাকলে তা বন্ধ করা (Crucial for UX)
    if (window.currentPlaying) {
        window.currentPlaying.pause();
        window.currentPlaying.currentTime = 0;
    }
    
    // নতুন গান চালু করা
    window.currentPlaying = audio;
    audio.play().catch(error => {
        console.log("Audio play failed. Check if file exists in /audio folder.");
    });
}


// ==========================================
// ৩. রেজাল্ট ও এটেনডেন্স (Demo Alert)
// ==========================================
function addStudentData() {
    alert("তথ্য সফলভাবে ডাটাবেসে পাঠানো হয়েছে! (Demo)");
}
