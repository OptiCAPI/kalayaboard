/* ১. গ্যালারি পরিবর্তন করার স্ক্রিপ্ট (Image Rotation) */
const images = [
    "https://via.placeholder.com/800x400?text=School+View",
    "https://via.placeholder.com/800x400?text=Classroom",
    "https://via.placeholder.com/800x400?text=Students"
];
let currentIndex = 0;

function changeImage() {
    const heroImg = document.getElementById('dynamic-hero');
    if(heroImg) {
        currentIndex = (currentIndex + 1) % images.length;
        heroImg.src = images[currentIndex];
    }
}
// প্রতি ৩০ সেকেন্ডে ছবি পরিবর্তন হবে (Change every 30s)
setInterval(changeImage, 30000);


/* ২. জুকবক্স কন্ট্রোল (Jukebox Logic) */
function playAudio(fileName) {
    let audio = new Audio(fileName);
    audio.play();
}


/* ৩. স্টুডেন্ট ডাটা ইনপুট (Teacher Dashboard Logic) */
function addStudentData() {
    // এই ফাংশনটি দিয়ে নতুন ছাত্রের তথ্য ডাটাবেসে পাঠানো যাবে।
    alert("তথ্য সফলভাবে সংরক্ষিত হয়েছে!");
}
