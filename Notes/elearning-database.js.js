// 🎓 কালাইয়া বোর্ড সপ্রাবি - ই-লার্নিং ডাটাবেজ
const eContent = [
    // --- CHOTODER JONYO (KIDS) ---
    { id: 'english', section: 'kids', title: 'ABC Alphabet Fun', icon: '🔤', desc: 'ছবি ও শব্দ সহ ইংরেজি বর্ণমালা শেখা।', badge: 'English', badgeClass: 'badge-english', url: 'English-reading-skills.html' },
    { id: 'bangla', section: 'kids', title: 'অ আ ক খ শেখা', icon: '✏️', desc: 'স্বরবর্ণ ও ব্যঞ্জনবর্ণের সহজ পাঠ।', badge: 'বাংলা', badgeClass: 'badge-bangla', url: '#' },
    { id: 'gonit', section: 'kids', title: 'সংখ্যা ও গণনা (১-৫০)', icon: '🔢', desc: 'মজার কার্টুন দেখে সংখ্যা গণনা শেখা।', badge: 'গণিত', badgeClass: 'badge-gonit', url: '#' },
    { id: 'english', section: 'kids', title: 'Nursery Rhymes', icon: '🎵', desc: 'মজার ইংরেজি ছড়া ও অ্যানিমেশন।', badge: 'English', badgeClass: 'badge-english', url: '#' },
    { id: 'bangla', section: 'kids', title: 'ছোটদের ছড়া গান', icon: '🎒', desc: 'হাট্টিমা টিম টিম ও অন্যান্য ছড়া।', badge: 'বাংলা', badgeClass: 'badge-bangla', url: '#' },
    { id: 'gonit', section: 'kids', title: 'সহজ যোগ ও বিয়োগ', icon: '➕', desc: 'ছবি দেখে ছোটদের মৌলিক গণিত।', badge: 'গণিত', badgeClass: 'badge-gonit', url: '#' },

    // --- BORODER JONYO (SENIORS) ---
    { id: 'english', section: 'seniors', title: 'Tense (কাল)', icon: '⏰', desc: 'Present, Past & Future Tense এর সহজ নিয়ম।', badge: 'English', badgeClass: 'badge-english', url: '#' },
    { id: 'english', section: 'seniors', title: 'Number & Gender', icon: '👥', desc: 'Singular, Plural এবং Gender এর ব্যবহার।', badge: 'English', badgeClass: 'badge-english', url: 'Notes/Wh-Questions Special Study Sheet - Class 5.pdf' },
    { id: 'english', section: 'seniors', title: 'WH-Question', icon: '❓', desc: 'Who, What এবং How ইত্যাদি এর ব্যবহার।', badge: 'English', badgeClass: 'badge-english', url: 'Notes/Class_5_Wh_Questions.html' },
    { id: 'english', section: 'seniors', title: 'Voice Change', icon: '🗣️', desc: 'Active & Passive Voice রূপান্তরের কৌশল।', badge: 'English', badgeClass: 'badge-english', url:'Notes/voice.html' },

    { id: 'bangla', section: 'seniors', title: 'বাংলা ব্যাকরণ: সন্ধি', icon: '📖', desc: 'স্বরসন্ধি ও ব্যঞ্জনসন্ধির সহজ সূত্র।', badge: 'বাংলা', badgeClass: 'badge-bangla', url: '#' },
    { id: 'bangla', section: 'seniors', title: 'সমাস ও কারক', icon: '✍️', desc: 'সমাস চেনার উপায় ও কারক-বিভক্তি নির্ণয়।', badge: 'বাংলা', badgeClass: 'badge-bangla', url: '#' },
    { id: 'gonit', section: 'seniors', title: 'জ্যামিতি (Geometry)', icon: '📐', desc: 'রেখা, কোণ, ত্রিভুজ ও চতুর্ভুজের ধারণা।', badge: 'গণিত', badgeClass: 'badge-gonit', url: 'Notes/geometry_notes_class5.html' },
    { id: 'gonit', section: 'seniors', title: 'সংখ্যা তত্ত্ব ও গুণনীয়ক', icon: '📊', desc: 'ল.সা.গু, গ.সা.গু এবং মৌলিক সংখ্যা।', badge: 'গণিত', badgeClass: 'badge-gonit', url: '#' },
    { id: 'gonit', section: 'seniors', title: 'বীজগণিত (Algebra)', icon: '🧮', desc: 'বীজগণিতীয় সূত্র ও মান নির্ণয়।', badge: 'গণিত', badgeClass: 'badge-gonit', url: '#' }
];