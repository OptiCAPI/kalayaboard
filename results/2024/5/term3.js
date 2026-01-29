// ১২নং কালাইয়া বোর্ড সরকারি প্রাথমিক বিদ্যালয়
// শিক্ষার্থী ডাটাবেজ ২০২৪ (শ্রেণি: পঞ্চম, ৩য় প্রান্তিক)

const data_2024_5_term3 = [
    {
        roll: "01", name: "Shanjiida Akter",
        marks: [
            { subject: "বাংলা", obtained: 88 }, { subject: "ইংরেজি", obtained: 97 },
            { subject: "প্রাথমিক গণিত", obtained: 93 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 99 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 94 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 98 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 46 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 47 }
        ]
    },
    {
        roll: "02", name: "Marzia Tuna",
        marks: [
            { subject: "বাংলা", obtained: 77 }, { subject: "ইংরেজি", obtained: 83 },
            { subject: "প্রাথমিক গণিত", obtained: 83 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 90 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 85 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 90 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 44 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 42 }
        ]
    },
    // রোল ০৩ থেকে ১৮ পর্যন্ত ডাটা এক্সেল শিটে খালি (০) থাকায় নিচে শুধু রোল ও নাম দেওয়া হলো
  
     { roll: "03", name: "ফাতেমা (Fatima)", 
      marks: [
            { subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
        ]
    },
    { roll: "04", name: "মারজান (Marjan)",
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ] 
    },
    { roll: "05", name: "শাকিল (Shakil)", 
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ] 
    },
    { roll: "06", name: "তামিম (Tamim)", 
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ] 
    },
    { roll: "07", name: "রিয়াজ (Riyaj)", 
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ]
    },
    { roll: "08", name: "আরিয়ান (Ariyan)", 
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ] 
    },
    { roll: "09", name: "লিমন (Limon)", 
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ] 
    },
    { roll: "10", name: "নাহিন (Nahin)", 
     marks: [{ subject: "বাংলা", obtained: 0 }, { subject: "ইংরেজি", obtained: 0 },
            { subject: "প্রাথমিক গণিত", obtained: 0 }, { subject: "বাংলাদেশ ও বিশ্ব পরিচয়", obtained: 0 },
            { subject: "প্রাথমিক বিজ্ঞান", obtained: 0 }, { subject: "ধর্ম ও নৈতিক শিক্ষা", obtained: 0 },
            { subject: "শারীরিক-মানসিক স্বাস্থ্য", obtained: 0 }, { subject: "সঙ্গীত ও শিল্পকলা", obtained: 0 }
       ] 
    },
    { roll: "11", name: "জিম (Jim)", marks: [] },
    { roll: "12", name: "মুসকান (Muskan)", marks: [] },
    { roll: "13", name: "হাফিজা (Hafija)", marks: [] },
    { roll: "14", name: "নুসরাত (Nusrat)", marks: [] },
    { roll: "15", name: "মিম (Mim)", marks: [] },
    { roll: "16", name: "তানজিলা (Tanjila)", marks: [] },
    { roll: "17", name: "নদী (Nodi)", marks: [] },
    { roll: "18", name: "অজ্ঞাত (Unknown)", marks: [] }
];
