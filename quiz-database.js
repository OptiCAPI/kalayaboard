//১. আইডি ব্লক (ID Blocking) সিস্টেম
//আমরা প্রতিটি শ্রেণী এবং বিষয়ের জন্য আইডি নম্বর আগে থেকেই ফিক্সড করে রাখব।
//যেমন: ১ম শ্রেণীর বাংলা প্রশ্নের আইডি হবে 101 থেকে 300 পর্যন্ত।
//২য় শ্রেণীর বাংলা হবে 401 থেকে 600 পর্যন্ত।
//আমি যখনই আপনাকে কোনো ব্যাচ দেব, আইডির ক্রম দেখেই আপনি বুঝতে পারবেন এটি একদম নতুন সেট।

//২. অধ্যায়ভিত্তিক ব্লু-প্রিন্ট (Chapter-wise Mapping)
//সাধারণ জ্ঞানের প্রকাণ্ড ৫০০টি প্রশ্ন যেন রিপিট না হয়, সেজন্য আমরা ৫ম শ্রেণীর 'বাংলাদেশ ও বিশ্বপরিচয়' এবং 'প্রাথমিক বিজ্ঞান' বইয়ের অধ্যায়গুলো ভাগ করে নেব।
//যেমন একটি উদাহরণ:
//ব্যাচ ১ (আজ): ৫ম শ্রেণী বিজ্ঞান - অধ্যায় ১ (আমাদের পরিবেশ) এবং অধ্যায় ২ (পরিবেশ দূষণ) থেকে ৫০টি প্রশ্ন।
//ব্যাচ ২ (কাল): ৫ম শ্রেণী বিজ্ঞান - অধ্যায় ৩ (জীবনের জন্য পানি) এবং অধ্যায় ৪ (বায়ু) থেকে ৫০টি প্রশ্ন।
//এভাবে এগোলে বইয়ের পাতা শেষ হবে, কিন্তু একটা প্রশ্নও ডুপ্লিকেট হবে না।

//📝 আমাদের কাজের চেকলিস্ট (Checklist)
//আপনার ৪,৫০০টি প্রশ্নের কুইজ ব্যাংক তৈরি করতে আমরা নিচের তালিকা ধরে এগোতে পারি। আপনি জাস্ট প্রতিদিন এসে এই তালিকা থেকে যেকোনো একটির নাম বলবেন:
//[ ] ১ম শ্রেণী: বাংলা (২০০) | ইংরেজি (২০০) | সাধারণ জ্ঞান (৫০০)
//[ ] ২য় শ্রেণী: বাংলা (২০০) | ইংরেজি (২০০) | সাধারণ জ্ঞান (৫০০)
//[ ] ৩য় শ্রেণী: বাংলা (২০০) | ইংরেজি (২০০) | সাধারণ জ্ঞান (৫০০)
//[ ] ৪র্থ শ্রেণী: বাংলা (২০০) | ইংরেজি (২০০) | সাধারণ জ্ঞান (৫০০)
//[ ] ৫ম শ্রেণী: বাংলা (২০০) | ইংরেজি (২০০) | সাধারণ জ্ঞান (৫০০)//




// কুইজের মূল ডাটাবেজ
const quizData = [
    // === চতুর্থ শ্রেণি (Class 4) ===
    {
        id: 1,
        class: "4",
        subject: "math",
        question: "৭ × ৮ = কত হয়?",
        options: ["৫৪", "৫৬", "৬৪", "৪২"],
        answer: "৫৬"
    },
    {
        id: 2,
        class: "4",
        subject: "math",
        question: "১ শতক সমান কত একক?",
        options: ["১০", "১০০", "১০০০", "৫"],
        answer: "১০০"
    },
    {
        id: 3,
        class: "4",
        subject: "bangla",
        question: "‘কাজলা দিদি’ কবিতাটি কে লিখেছেন?",
        options: ["রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "যতীন্দ্রমোহন বাগচী", "জসীমউদ্দীন"],
        answer: "যতীন্দ্রমোহন বাগচী"
    },

    // === পঞ্চম শ্রেণি (Class 5) ===
    {
        id: 4,
        class: "5",
        subject: "math",
        question: "কোনো সংখ্যার গুণনীয়ককে আর কী বলা হয়?",
        options: ["উৎপাদক", "গুণিতক", "ভাগফল", "যোগফল"],
        answer: "উৎপাদক"
    },
    {
        id: 5,
        class: "5",
        subject: "science",
        question: "উদ্ভিদ সূর্য থেকে কী গ্রহণ করে খাদ্য তৈরি করে?",
        options: ["অক্সিজেন", "পানি", "আলো ও শক্তি", "কার্বন ডাই অক্সাইড"],
        answer: "আলো ও শক্তি"
    },
    {
        id: 6,
        class: "5",
        subject: "math",
        question: "১ হালি কলার দাম ২০ টাকা হলে, ৩টি কলার দাম কত?",
        options: ["১৫ টাকা", "১২ টাকা", "১০ টাকা", "১৮ টাকা"],
        answer: "১৫ টাকা"
    }
];
// =========================================================================
// 🎒 ৫ম শ্রেণী (Class 5) - ইংরেজি (English) | আইডি ব্লক: 6001 থেকে 6100 (মোট ১০০টি)
// =========================================================================

const class5EnglishQuestions = [
    // --- Textbook Lessons (Hello!, See You!, Leisure Time, Fit Foods) ---
    {
        id: 6001, class: "5", subject: "english",
        question: "Where is Jessica going in the story 'Hello!'?",
        options: ["Chittagong", "Sylhet", "Dhaka", "Khulna"],
        answer: "Chittagong"
    },
    {
        id: 6002, class: "5", subject: "english",
        question: "Where is Jessica from?",
        options: ["United Kingdom", "United States", "Australia", "Canada"],
        answer: "United Kingdom"
    },
    {
        id: 6003, class: "5", subject: "english",
        question: "Sima is from which district of Bangladesh?",
        options: ["Sylhet", "Cumilla", "Rajshahi", "Barishal"],
        answer: "Sylhet"
    },
    {
        id: 6004, class: "5", subject: "english",
        question: "Where are Tamal and Sima sitting to practice English?",
        options: ["Town Hall Language Club", "School Library", "Railway Station", "Book Fair"],
        answer: "Town Hall Language Club"
    },
    {
        id: 6005, class: "5", subject: "english",
        question: "Who is the foreign gentleman introducing himself to Tamal?",
        options: ["Andy Smith", "David Miller", "John Doe", "Robert Frost"],
        answer: "Andy Smith"
    },
    {
        id: 6006, class: "5", subject: "english",
        question: "What does Andy Smith do?",
        options: ["Works with an NGO", "He is a doctor", "He is a pilot", "He is a student"],
        answer: "Works with an NGO"
    },
    {
        id: 6007, class: "5", subject: "english",
        question: "What is Biju's favorite leisure activity or hobby?",
        options: ["Swimming and reading", "Gardening", "Playing cricket", "Drawing pictures"],
        answer: "Swimming and reading"
    },
    {
        id: 6008, class: "5", subject: "english",
        question: "Where is the Liberation War Museum located?",
        options: ["Agargaon, Dhaka", "Savar, Dhaka", "Shahbagh, Dhaka", "Uttara, Dhaka"],
        answer: "Agargaon, Dhaka"
    },
    {
        id: 6009, class: "5", subject: "english",
        question: "On what date did the class visit the Liberation War Museum?",
        options: ["14 December", "26 March", "16 December", "21 February"],
        answer: "14 December"
    },
    {
        id: 6010, class: "5", subject: "english",
        question: "How many permanent galleries are there in the Liberation War Museum?",
        options: ["Two", "Three", "Four", "Five"],
        answer: "Four"
    },
    {
        id: 6011, class: "5", subject: "english",
        question: "Laila and Bithi are friends. Who is very active and likes to run?",
        options: ["Laila", "Bithi", "Both of them", "None of them"],
        answer: "Laila"
    },
    {
        id: 6012, class: "5", subject: "english",
        question: "Between Laila and Bithi, who is a quiet person and likes reading books?",
        options: ["Bithi", "Laila", "Sima", "Jessica"],
        answer: "Bithi"
    },
    {
        id: 6013, class: "5", subject: "english",
        question: "What is Mamun's home district?",
        options: ["Kishoreganj", "Narsingdi", "Bogura", "Mymensingh"],
        answer: "Kishoreganj"
    },
    {
        id: 6014, class: "5", subject: "english",
        question: "What is the approximate distance from Dhaka to Kishoreganj?",
        options: ["100 kilometers", "145 kilometers", "200 kilometers", "50 kilometers"],
        answer: "145 kilometers"
    },
    {
        id: 6015, class: "5", subject: "english",
        question: "Kishoreganj is famous for the largest Eid fair grounds named —",
        options: ["Solakia Eid Ground", "Maizdee Ground", "Palton Ground", "Cox's Bazar Ground"],
        answer: "Solakia Eid Ground"
    },
    {
        id: 6016, class: "5", subject: "english",
        question: "Which river flows through the Kishoreganj town?",
        options: ["Narasunda River", "Padma River", "Meghna River", "Buriganga River"],
        answer: "Narasunda River"
    },
    {
        id: 6017, class: "5", subject: "english",
        question: "Who is the first woman poet of Bangla literature born in Kishoreganj?",
        options: ["Chandrabati", "Begum Rokeya", "Sufia Kamal", "Jahanara Imam"],
        answer: "Chandrabati"
    },
    {
        id: 6018, class: "5", subject: "english",
        question: "Sukumar Ray, the famous writer of children's literature, is from which district?",
        options: ["Kishoreganj", "Dhaka", "Chattogram", "Sylhet"],
        answer: "Kishoreganj"
    },
    {
        id: 6019, class: "5", subject: "english",
        question: "Where is the birthplace of the great artist Zainul Abedin?",
        options: ["Kishoreganj", "Mymensingh", "Jashore", "Kushtia"],
        answer: "Kishoreganj"
    },
    {
        id: 6020, class: "5", subject: "english",
        question: "What foods are at the bottom of the Food Pyramid?",
        options: ["Grains like rice, ruti and bread", "Fruits and vegetables", "Meat, fish and dairy", "Fat and oil"],
        answer: "Grains like rice, ruti and bread"
    },
    {
        id: 6021, class: "5", subject: "english",
        question: "Grains like rice and ruti give us —",
        options: ["Energy", "Vitamins", "Calcium", "Protein"],
        answer: "Energy"
    },
    {
        id: 6022, class: "5", subject: "english",
        question: "Vitamins and minerals are mainly found in —",
        options: ["Fruits and vegetables", "Rice and bread", "Fat and oil", "Fish and meat"],
        answer: "Fruits and vegetables"
    },
    {
        id: 6023, class: "5", subject: "english",
        question: "Dairy products like milk and yogurt help to make our —",
        options: ["Teeth and bones strong", "Hair long", "Eyes blue", "Body fat"],
        answer: "Teeth and bones strong"
    },
    {
        id: 6024, class: "5", subject: "english",
        question: "What foods are at the top of the Food Pyramid and should be eaten less?",
        options: ["Fat and oil", "Fruits", "Grains", "Fish"],
        answer: "Fat and oil"
    },
    {
        id: 6025, class: "5", subject: "english",
        question: "In the story 'The Hare and the Tortoise', who was the fastest animal in the forest?",
        options: ["The hare", "The tortoise", "The fox", "The lion"],
        answer: "The hare"
    },
    {
        id: 6026, class: "5", subject: "english",
        question: "Who won the race between the hare and the tortoise?",
        options: ["The tortoise", "The hare", "Both of them", "None of them"],
        answer: "The tortoise"
    },
    {
        id: 6027, class: "5", subject: "english",
        question: "Where did the hare fall asleep during the race?",
        options: ["Under a tree", "In a cave", "On the grass", "By the river"],
        answer: "Under a tree"
    },
    {
        id: 6028, class: "5", subject: "english",
        question: "What is the moral of the story 'The Hare and the Tortoise'?",
        options: ["Slow and steady wins the race", "Pride brings fall", "Honesty is the best policy", "All that glitters is not gold"],
        answer: "Slow and steady wins the race"
    },
    {
        id: 6029, class: "5", subject: "english",
        question: "Where did the historic Olympic Games originally start?",
        options: ["Greece", "United Kingdom", "France", "America"],
        answer: "Greece"
    },
    {
        id: 6030, class: "5", subject: "english",
        question: "How often are the Olympic Games held?",
        options: ["Every 4 years", "Every 2 years", "Every 5 years", "Every year"],
        answer: "Every 4 years"
    },

    // --- Grammar Section: Articles (a, an, the) ---
    {
        id: 6031, class: "5", subject: "english",
        question: "Fill in the blank: She is ___ honest girl.",
        options: ["a", "an", "the", "no article"],
        answer: "an"
    },
    {
        id: 6032, class: "5", subject: "english",
        question: "Fill in the blank: The sun rises in ___ east.",
        options: ["a", "an", "the", "no article"],
        answer: "the"
    },
    {
        id: 6033, class: "5", subject: "english",
        question: "Fill in the blank: I saw ___ one-eyed man on the street.",
        options: ["a", "an", "the", "no article"],
        answer: "a"
    },
    {
        id: 6034, class: "5", subject: "english",
        question: "Fill in the blank: His father is ___ M.A.",
        options: ["a", "an", "the", "no article"],
        answer: "an"
    },
    {
        id: 6035, class: "5", subject: "english",
        question: "Fill in the blank: Cow is ___ useful animal.",
        options: ["a", "an", "the", "no article"],
        answer: "a"
    },
    {
        id: 6036, class: "5", subject: "english",
        question: "Fill in the blank: ___ Padma is a very big river.",
        options: ["A", "An", "The", "No article"],
        answer: "The"
    },
    {
        id: 6037, class: "5", subject: "english",
        question: "Fill in the blank: Do you have ___ umbrella?",
        options: ["a", "an", "the", "no article"],
        answer: "an"
    },
    {
        id: 6038, class: "5", subject: "english",
        question: "Fill in the blank: ___ Quran is a holy book.",
        options: ["A", "An", "The", "No article"],
        answer: "The"
    },

    // --- Grammar Section: Prepositions (in, on, at, under, between, among etc.) ---
    {
        id: 6039, class: "5", subject: "english",
        question: "Fill in the blank: Look ___ the blackboard.",
        options: ["at", "on", "in", "to"],
        answer: "at"
    },
    {
        id: 6040, class: "5", subject: "english",
        question: "Fill in the blank: The book is ___ the table.",
        options: ["on", "in", "into", "at"],
        answer: "on"
    },
    {
        id: 6041, class: "5", subject: "english",
        question: "Fill in the blank: He goes to school ___ foot.",
        options: ["by", "on", "with", "in"],
        answer: "on"
    },
    {
        id: 6042, class: "5", subject: "english",
        question: "Fill in the blank: Divide the mango ___ the two boys.",
        options: ["between", "among", "with", "into"],
        answer: "between"
    },
    {
        id: 6043, class: "5", subject: "english",
        question: "Fill in the blank: The teacher divided the apples ___ all the children.",
        options: ["between", "among", "to", "for"],
        answer: "among"
    },
    {
        id: 6044, class: "5", subject: "english",
        question: "Fill in the blank: Sima lives ___ Dhaka.",
        options: ["at", "in", "on", "into"],
        answer: "in"
    },
    {
        id: 6045, class: "5", subject: "english",
        question: "Fill in the blank: We celebrate our Independence Day ___ 26th March.",
        options: ["in", "on", "at", "by"],
        answer: "on"
    },
    {
        id: 6046, class: "5", subject: "english",
        question: "Fill in the blank: The cat is sleeping ___ the bed.",
        options: ["under", "on top", "between", "into"],
        answer: "under"
    },
    {
        id: 6047, class: "5", subject: "english",
        question: "Fill in the blank: The boy ran ___ the room.",
        options: ["in", "into", "on", "at"],
        answer: "into"
    },
    {
        id: 6048, class: "5", subject: "english",
        question: "Fill in the blank: He will come back ___ an hour.",
        options: ["in", "on", "at", "by"],
        answer: "in"
    },
    {
        id: 6049, class: "5", subject: "english",
        question: "Fill in the blank: What is the time ___ your watch?",
        options: ["by", "in", "on", "at"],
        answer: "by"
    },
    {
        id: 6050, class: "5", subject: "english",
        question: "Fill in the blank: She is good ___ English.",
        options: ["at", "in", "on", "for"],
        answer: "at"
    },

    // --- Grammar Section: Wh-Questions ---
    {
        id: 6051, class: "5", subject: "english",
        question: "Choose the correct Wh-question for: 'Sima is from Sylhet.'",
        options: ["Where is Sima from?", "Who is Sima?", "When does Sima leave?", "How is Sima?"],
        answer: "Where is Sima from?"
    },
    {
        id: 6052, class: "5", subject: "english",
        question: "Choose the correct Wh-question for: 'Jessica is going to Chittagong.'",
        options: ["Where is Jessica going?", "Who is going to Chittagong?", "Why is Jessica going?", "How is Jessica going?"],
        answer: "Where is Jessica going?"
    },
    {
        id: 6053, class: "5", subject: "english",
        question: "Choose the correct Wh-question for: 'She gets up at 6:00 AM.'",
        options: ["When does she get up?", "What does she do?", "Where does she get up?", "Who gets up at 6:00 AM?"],
        answer: "When does she get up?"
    },
    {
        id: 6054, class: "5", subject: "english",
        question: "Choose the correct Wh-question for: 'He is crying because he lost his pen.'",
        options: ["Why is he crying?", "What is he doing?", "Where is his pen?", "Who is crying?"],
        answer: "Why is he crying?"
    },
    {
        id: 6055, class: "5", subject: "english",
        question: "Fill in the blank: ___ is your best friend?",
        options: ["Who", "What", "Which", "Where"],
        answer: "Who"
    },
    {
        id: 6056, class: "5", subject: "english",
        question: "Fill in the blank: ___ book do you want, red or blue?",
        options: ["Which", "Who", "Where", "Why"],
        answer: "Which"
    },
    {
        id: 6057, class: "5", subject: "english",
        question: "Fill in the blank: ___ old are you?",
        options: ["How", "What", "When", "Who"],
        answer: "How"
    },

    // --- Grammar Section: Tense & Verb Forms ---
    {
        id: 6058, class: "5", subject: "english",
        question: "What is the past tense of the verb 'go'?",
        options: ["went", "gone", "goes", "going"],
        answer: "went"
    },
    {
        id: 6059, class: "5", subject: "english",
        question: "What is the past participle form of the verb 'do'?",
        options: ["done", "did", "does", "doing"],
        answer: "done"
    },
    {
        id: 6060, class: "5", subject: "english",
        question: "Identify the tense: 'She is reading a book.'",
        options: ["Present Continuous", "Present Simple", "Past Simple", "Future Simple"],
        answer: "Present Continuous"
    },
    {
        id: 6061, class: "5", subject: "english",
        question: "Identify the tense: 'They played football yesterday.'",
        options: ["Past Simple", "Present Simple", "Past Continuous", "Future Simple"],
        answer: "Past Simple"
    },
    {
        id: 6062, class: "5", subject: "english",
        question: "What is the future tense of 'I write a letter'?",
        options: ["I will write a letter", "I wrote a letter", "I am writing a letter", "I have written a letter"],
        answer: "I will write a letter"
    },
    {
        id: 6063, class: "5", subject: "english",
        question: "Choose the correct sentence structure:",
        options: ["He goes to school every day.", "He go to school every day.", "He going to school every day.", "He gone to school every day."],
        answer: "He goes to school every day."
    },
    {
        id: 6064, class: "5", subject: "english",
        question: "Choose the correct sentence structure:",
        options: ["They are playing cricket.", "They is playing cricket.", "They am playing cricket.", "They playing cricket."],
        answer: "They are playing cricket."
    },
    {
        id: 6065, class: "5", subject: "english",
        question: "What is the past tense of 'run'?",
        options: ["ran", "runned", "running", "runs"],
        answer: "ran"
    },
    {
        id: 6066, class: "5", subject: "english",
        question: "What is the past tense of 'see'?",
        options: ["saw", "seen", "seeing", "sees"],
        answer: "saw"
    },
    {
        id: 6067, class: "5", subject: "english",
        question: "What is the base/present form of 'bought'?",
        options: ["buy", "bring", "buying", "buys"],
        answer: "buy"
    },
    {
        id: 6068, class: "5", subject: "english",
        question: "What is the negative form of 'He likes milk'?",
        options: ["He does not like milk.", "He not likes milk.", "He do not like milk.", "He did not liked milk."],
        answer: "He does not like milk."
    },
    {
        id: 6069, class: "5", subject: "english",
        question: "What is the interrogative form of 'You are a student'?",
        options: ["Are you a student?", "You are a student?", "Do you a student?", "Is you a student?"],
        answer: "Are you a student?"
    },

    // --- Vocabulary: Synonyms (Same Meanings) ---
    {
        id: 6070, class: "5", subject: "english",
        question: "What is the synonym of 'Beautiful'?",
        options: ["Pretty", "Ugly", "Dirty", "Sad"],
        answer: "Pretty"
    },
    {
        id: 6071, class: "5", subject: "english",
        question: "What is the synonym of 'Large'?",
        options: ["Huge", "Small", "Tiny", "Short"],
        answer: "Huge"
    },
    {
        id: 6072, class: "5", subject: "english",
        question: "What is the synonym of 'Quickly'?",
        options: ["Fast", "Slowly", "Loudly", "Quietly"],
        answer: "Fast"
    },
    {
        id: 6073, class: "5", subject: "english",
        question: "What is the synonym of 'Happy'?",
        options: ["Glad", "Sad", "Angry", "Afraid"],
        answer: "Glad"
    },
    {
        id: 6074, class: "5", subject: "english",
        question: "What is the synonym of 'Start'?",
        options: ["Begin", "Stop", "End", "Finish"],
        answer: "Begin"
    },
    {
        id: 6075, class: "5", subject: "english",
        question: "What is the synonym of 'Quiet'?",
        options: ["Silent", "Noisy", "Loud", "Active"],
        answer: "Silent"
    },
    {
        id: 6076, class: "5", subject: "english",
        question: "What is the synonym of 'Smart'?",
        options: ["Intelligent", "Dull", "Lazy", "Slow"],
        answer: "Intelligent"
    },

    // --- Vocabulary: Antonyms (Opposite Meanings) ---
    {
        id: 6077, class: "5", subject: "english",
        question: "What is the antonym (opposite word) of 'Rich'?",
        options: ["Poor", "Wealthy", "Happy", "Kind"],
        answer: "Poor"
    },
    {
        id: 6078, class: "5", subject: "english",
        question: "What is the antonym of 'Hot'?",
        options: ["Cold", "Warm", "Dry", "Sunny"],
        answer: "Cold"
    },
    {
        id: 6079, class: "5", subject: "english",
        question: "What is the antonym of 'Always'?",
        options: ["Never", "Often", "Sometimes", "Everyday"],
        answer: "Never"
    },
    {
        id: 6080, class: "5", subject: "english",
        question: "What is the antonym of 'Heavy'?",
        options: ["Light", "Weighty", "Hard", "Soft"],
        answer: "Light"
    },
    {
        id: 6081, class: "5", subject: "english",
        question: "What is the antonym of 'Brave'?",
        options: ["Coward", "Fearless", "Strong", "Bold"],
        answer: "Coward"
    },
    {
        id: 6082, class: "5", subject: "english",
        question: "What is the antonym of 'True'?",
        options: ["False", "Right", "Correct", "Real"],
        answer: "False"
    },
    {
        id: 6083, class: "5", subject: "english",
        question: "What is the antonym of 'Early'?",
        options: ["Late", "Morning", "Quick", "Soon"],
        answer: "Late"
    },
    {
        id: 6084, class: "5", subject: "english",
        question: "What is the antonym of 'Strong'?",
        options: ["Weak", "Powerful", "Heavy", "Hard"],
        answer: "Weak"
    },
    {
        id: 6085, class: "5", subject: "english",
        question: "What is the antonym of 'Active'?",
        options: ["Lazy", "Energetic", "Busy", "Quick"],
        answer: "Lazy"
    },

    // --- Basic Grammar: Number & Gender ---
    {
        id: 6086, class: "5", subject: "english",
        question: "What is the plural form of 'Book'?",
        options: ["Books", "Bookes", "Booking", "Bookis"],
        answer: "Books"
    },
    {
        id: 6087, class: "5", subject: "english",
        question: "What is the plural form of 'Man'?",
        options: ["Men", "Mans", "Manes", "Mens"],
        answer: "Men"
    },
    {
        id: 6088, class: "5", subject: "english",
        question: "What is the plural form of 'Child'?",
        options: ["Children", "Childs", "Childrens", "Childes"],
        answer: "Children"
    },
    {
        id: 6089, class: "5", subject: "english",
        question: "What is the plural form of 'Box'?",
        options: ["Boxes", "Boxs", "Boxen", "Boxx"],
        answer: "Boxes"
    },
    {
        id: 6090, class: "5", subject: "english",
        question: "What is the plural form of 'Fly'?",
        options: ["Flies", "Flys", "Flyes", "Flying"],
        answer: "Flies"
    },
    {
        id: 6091, class: "5", subject: "english",
        question: "What is the plural form of 'Knife'?",
        options: ["Knives", "Knifes", "Knifees", "Knifis"],
        answer: "Knives"
    },
    {
        id: 6092, class: "5", subject: "english",
        question: "What is the feminine gender of 'King'?",
        options: ["Queen", "Princess", "Woman", "Lady"],
        answer: "Queen"
    },
    {
        id: 6093, class: "5", subject: "english",
        question: "What is the feminine gender of 'Tiger'?",
        options: ["Tigress", "Lioness", "She-tiger", "Tigeress"],
        answer: "Tigress"
    },
    {
        id: 6094, class: "5", subject: "english",
        question: "What is the opposite gender of 'Uncle'?",
        options: ["Aunt", "Mother", "Sister", "Queen"],
        answer: "Aunt"
    },

    // --- Spelling Testing ---
    {
        id: 6095, class: "5", subject: "english",
        question: "Choose the correct spelling:",
        options: ["Beautiful", "Beautifull", "Beutiful", "Bautisful"],
        answer: "Beautiful"
    },
    {
        id: 6096, class: "5", subject: "english",
        question: "Choose the correct spelling:",
        options: ["Tomorrow", "To-morrow", "Tomorow", "Tommorrow"],
        answer: "Tomorrow"
    },
    {
        id: 6097, class: "5", subject: "english",
        question: "Choose the correct spelling:",
        options: ["Language", "Lenguage", "Langwage", "Languaje"],
        answer: "Language"
    },

                  
// =========================================================================
// 🎒 ৫ম শ্রেণী (Class 5) - সাধারণ জ্ঞান (GK) | আইডি ব্লক: 5001 থেকে 5100 (মোট ১০০টি)
// =========================================================================

const class5GkQuestions = [
    // --- অধ্যায় ১: আমাদের মুক্তিযুদ্ধ ---
    {
        id: 5001, class: "5", subject: "gk",
        question: "বঙ্গবন্ধু শেখ মুজিবুর রহমান কত তারিখে ঐতিহাসিক রেসকোর্স ময়দানে ভাষণ দেন?",
        options: ["৭ই মার্চ ১৯৭১", "২৬শে মার্চ ১৯৭১", "১৬ই ডিসেম্বর ১৯৭১", "১০ই এপ্রিল ১৯৭১"],
        answer: "৭ই মার্চ ১৯৭১"
    },
    {
        id: 5002, class: "5", subject: "gk",
        question: "বাংলাদেশের স্বাধীনতা ঘোষণা কত তারিখে করা হয়?",
        options: ["৭ই মার্চ ১৯৭১", "২৬শে মার্চ ১৯৭১", "১৪ই এপ্রিল ১৯৭১", "১৬ই ডিসেম্বর ১৯৭১"],
        answer: "২৬শে মার্চ ১৯৭১"
    },
    {
        id: 5003, class: "5", subject: "gk",
        question: "প্রথম মুজিবনগর সরকার কত তারিখে গঠিত হয়েছিল?",
        options: ["৭ই মার্চ ১৯৭১", "১০ই এপ্রিল ১৯৭১", "১৭ই এপ্রিল ১৯৭১", "১৬ই ডিসেম্বর ১৯৭১"],
        answer: "১০ই এপ্রিল ১৯৭১"
    },
    {
        id: 5004, class: "5", subject: "gk",
        question: "মুজিবনগর সরকারের রাষ্ট্রপতি কে ছিলেন?",
        options: ["তাজউদ্দীন আহমদ", "সৈয়দ নজরুল ইসলাম", "বঙ্গবন্ধু শেখ মুজিবুর রহমান", "ক্যাপ্টেন মনসুর আলী"],
        answer: "বঙ্গবন্ধু শেখ মুজিবুর রহমান"
    },
    {
        id: 5005, class: "5", subject: "gk",
        question: "মুজিবনগর সরকারের অস্থায়ী রাষ্ট্রপতি কে ছিলেন?",
        options: ["সৈয়দ নজরুল ইসলাম", "তাজউদ্দীন আহমদ", "খন্দকার মোশতাক", "এ এইচ এম কামারুজ্জামান"],
        answer: "সৈয়দ নজরুল ইসলাম"
    },
    {
        id: 5006, class: "5", subject: "gk",
        question: "মুজিবনগর সরকারের প্রধানমন্ত্রী হিসেবে কে দায়িত্ব পালন করেন?",
        options: ["বঙ্গবন্ধু শেখ মুজিবুর রহমান", "সৈয়দ নজরুল ইসলাম", "তাজউদ্দীন আহমদ", "ক্যাপ্টেন মনসুর আলী"],
        answer: "তাজউদ্দীন আহমদ"
    },
    {
        id: 5007, class: "5", subject: "gk",
        question: "বাংলাদেশের বিজয় দিবস কত তারিখে পালন করা হয়?",
        options: ["২৬শে মার্চ", "১৬ই ডিসেম্বর", "২১শে ফেব্রুয়ারি", "১৪ই ডিসেম্বর"],
        answer: "১৬ই ডিসেম্বর"
    },
    {
        id: 5008, class: "5", subject: "gk",
        question: "শহীদ বুদ্ধিজীবী দিবস কত তারিখে পালন করা হয়?",
        options: ["৭ই মার্চ", "১৬ই ডিসেম্বর", "১৪ই ডিসেম্বর", "২১শে ফেব্রুয়ারি"],
        answer: "১৪ই ডিসেম্বর"
    },
    {
        id: 5009, class: "5", subject: "gk",
        question: "মুক্তিযুদ্ধে বীরত্বের জন্য দেওয়া সর্বোচ্চ রাষ্ট্রীয় উপাধি কোনটি?",
        options: ["বীর উত্তম", "বীর বিক্রম", "বীর প্রতীক", "বীরশ্রেষ্ঠ"],
        answer: "বীরশ্রেষ্ঠ"
    },
    {
        id: 5010, class: "5", subject: "gk",
        question: "বাংলাদেশের মহান মুক্তিযুদ্ধে কতজনকে 'বীরশ্রেষ্ঠ' উপাধিতে ভূষিত করা হয়?",
        options: ["৭ জন", "১১ জন", "৬৮ জন", "১৭৫ জন"],
        answer: "৭ জন"
    },
    {
        id: 5011, class: "5", subject: "gk",
        question: "মুক্তিযুদ্ধের সময় পুরো বাংলাদেশকে কয়টি সেক্টরে ভাগ করা হয়েছিল?",
        options: ["৭টি", "১১টি", "৬৪টি", "২০টি"],
        answer: "১১টি"
    },
    {
        id: 5012, class: "5", subject: "gk",
        question: "মুক্তিযুদ্ধে কত নম্বর সেক্টরটি কোনো আঞ্চলিক সীমানা ছাড়া কেবল নৌ-কমান্ডো নিয়ে গঠিত ছিল?",
        options: ["১ নম্বর সেক্টর", "২ নম্বর সেক্টর", "১০ নম্বর সেক্টর", "১১ নম্বর সেক্টর"],
        answer: "১০ নম্বর সেক্টর"
    },

    // --- অধ্যায় ২: ব্রিটিশ শাসন ---
    {
        id: 5013, class: "5", subject: "gk",
        question: "ঐতিহাসিক পলাশীর যুদ্ধ কত সালে সংঘটিত হয়েছিল?",
        options: ["১৭৫৭ সালে", "১৮৫৭ সালে", "১৯০৫ সালে", "১৯৪৭ সালে"],
        answer: "১৭৫৭ সালে"
    },
    {
        id: 5014, class: "5", subject: "gk",
        question: "পলাশীর যুদ্ধে বাংলার কোন শেষ স্বাধীন নবাব ইংরেজদের কাছে পরাজিত হন?",
        options: ["মীর জাফর", "নবাব সিরাজউদ্দৌলা", "আলীপর্দী খান", "মীর কাশিম"],
        answer: "নবাব সিরাজউদ্দৌলা"
    },
    {
        id: 5015, class: "5", subject: "gk",
        question: "ব্রিটিশরা ভারতীয় উপমহাদেশে প্রায় কত বছর শাসন করেছিল?",
        options: ["৫০ বছর", "১০০ বছর", "২০০ বছর", "৩০০ বছর"],
        answer: "২০০ year"
    },
    {
        id: 5016, class: "5", subject: "gk",
        question: "ইংরেজদের বিরুদ্ধে প্রথম বড় ঐতিহাসিক বিদ্রোহ 'সিপাহি বিদ্রোহ' কত সালে হয়েছিল?",
        options: ["১৭৫৭ সালে", "১৮৫৭ সালে", "১৯৩০ সালে", "১৯৪৫ সালে"],
        answer: "১৮৫৭ সালে"
    },
    {
        id: 5017, class: "5", subject: "gk",
        question: "ইংরেজদের প্রতিরোধ করতে বীর তিতুমীর কোথায় বাঁশের কেল্লা নির্মাণ করেছিলেন?",
        options: ["নারকেলবাড়িয়ায়", "ঝিনাইদহে", "মেহেরপুরে", "সাভারে"],
        answer: "নারকেলবাড়িয়ায়"
    },
    {
        id: 5018, class: "5", subject: "gk",
        question: "ব্রিটিশ আমলে 'বঙ্গভঙ্গ' বা বাংলা ভাগ করার ঘটনাটি কত সালে ঘটেছিল?",
        options: ["১৯০৫ সালে", "১৯১১ সালে", "১৯৪৭ সালে", "১৯৫২ সালে"],
        answer: "১৯০৫ সালে"
    },

    // --- অধ্যায় ৩: ঐতিহাসিক স্থান ও নিদর্শন ---
    {
        id: 5019, class: "5", subject: "gk",
        question: "প্রাচীন ঐতিহাসিক স্থান 'ময়নামতি' বাংলাদেশের কোন জেলায় অবস্থিত?",
        options: ["বগুড়া", "কুমিল্লা", "নওগাঁ", "দিনাজপুর"],
        answer: "কুমিল্লা"
    },
    {
        id: 5020, class: "5", subject: "gk",
        question: "নওগাঁ জেলায় অবস্থিত বিখ্যাত বৌদ্ধ বিহারটির নাম কী?",
        options: ["মহামুণি বিহার", "পাহাড়পুর বৌদ্ধ বিহার", "শালবন বিহার", "আনন্দ বিহার"],
        answer: "পাহাড়পুর বৌদ্ধ বিহার"
    },
    {
        id: 5021, class: "5", subject: "gk",
        question: "পাহাড়পুর বৌদ্ধ বিহারটি আর কী নামে পরিচিত?",
        options: ["সোমপুর মহাবিহার", "জগদ্দল বিহার", "সীতা কোট বিহার", "শালবন বিহার"],
        answer: "সোমপুর মহাবিহার"
    },
    {
        id: 5022, class: "5", subject: "gk",
        question: "ঢাকার বুড়িগঙ্গা নদীর তীরে অবস্থিত বিখ্যাত ঐতিহাসিক লালবাগ কেল্লার নির্মাণ কাজ কে শুরু করেন?",
        options: ["শাহজাদা মুহাম্মদ আজম", "শায়েস্তা খান", "সম্রাট আকবর", "মীর জুমলা"],
        answer: "শাহজাদা মুহাম্মদ আজম"
    },
    {
        id: 5023, class: "5", subject: "gk",
        question: "পুরানো ঢাকার বিখ্যাত ঐতিহাসিক রাজপ্রাসাদ 'আহসান মঞ্জিল' কোন নদীর তীরে অবস্থিত?",
        options: ["পদ্মা নদী", "মেঘনা নদী", "বুড়িগঙ্গা নদী", "শীতলক্ষা নদী"],
        answer: "বুড়িগঙ্গা নদী"
    },
    {
        id: 5024, class: "5", subject: "gk",
        question: "বাংলার সুলতানি আমলে প্রাচীন রাজধানী ও বিখ্যাত বাণিজ্য কেন্দ্র কোনটি ছিল?",
        options: ["সোনারগাঁও", "ময়নামতি", "মহাস্থানগড়", "পাহাড়পুর"],
        answer: "সোনারগাঁও"
    },
    {
        id: 5025, class: "5", subject: "gk",
        question: "বগুড়ায় অবস্থিত বাংলাদেশের সবচেয়ে প্রাচীন ও বিখ্যাত নগর সভ্যতার নিদর্শন কোনটি?",
        options: ["ময়নামতি", "মহাস্থানগড় (পুণ্ড্রনগর)", "সোনারগাঁও", "লালবাগ কেল্লা"],
        answer: "মহাস্থানগড় (পুণ্ড্রনগর)"
    },

    // --- অধ্যায় ৪: আমাদের অর্থনীতি: কৃষি ও শিল্প ---
    {
        id: 5026, class: "5", subject: "gk",
        question: "বাংলাদেশের প্রধান অর্থকরী ফসল (Cash Crop) কোনটি?",
        options: ["ধান", "গম", "পাট", "ভুট্টা"],
        answer: "পাট"
    },
    {
        id: 5027, class: "5", subject: "gk",
        question: "বাংলাদেশের মানুষের প্রধান খাদ্যশস্য কোনটি?",
        options: ["গম", "ধান", "ডাল", "আলু"],
        answer: "ধান"
    },
    {
        id: 5028, class: "5", subject: "gk",
        question: "চিনি শিল্পের প্রধান কাঁচামাল কোনটি, যা থেকে চিনি তৈরি হয়?",
        options: ["বিটরুট", "আখ (কুশল)", "তাল", "খেজুরের রস"],
        answer: "আখ (কুশল)"
    },
    {
        id: 5029, class: "5", subject: "gk",
        question: "বর্তমানে বাংলাদেশে কোন শিল্পটি সবচেয়ে বেশি বৈদেশিক মুদ্রা অর্জন করে?",
        options: ["চামড়া শিল্প", "তৈরি পোশাক শিল্প (RMG)", "কাগজ শিল্প", "সার শিল্প"],
        answer: "তৈরি পোশাক শিল্প (RMG)"
    },
    {
        id: 5030, class: "5", subject: "gk",
        question: "ঘরে বসে বা অল্প পুঁজিতে পরিবারের সদস্যদের নিয়ে যে শিল্প গড়ে ওঠে তাকে কী বলে?",
        options: ["ভারী শিল্প", "বৃহৎ শিল্প", "কুটির শিল্প", "রাসায়নিক শিল্প"],
        answer: "কুটির শিল্প"
    },

    // --- অধ্যায় ৫: জনসংখ্যার ওপর সমাজের প্রভাব ---
    {
        id: 5031, class: "5", subject: "gk",
        question: "কোনো দেশে অতিরিক্ত জনসংখ্যার ফলে নিচের কোনটির ওপর সবচেয়ে বেশি চাপ পড়ে?",
        options: ["খাদ্য ও বাসস্থান", "নদ-নদী", "পাহাড়-পর্বত", "বনের পশুপাখি"],
        answer: "খাদ্য ও বাসস্থান"
    },
    {
        id: 5032, class: "5", subject: "gk",
        question: "অদক্ষ জনসংখ্যাকে দক্ষ 'মানবসম্পদ'-এ রূপান্তর করার মূল উপাদান কোনটি?",
        options: ["টাকা পয়সা", "উন্নত চিকিৎসা ও শিক্ষা", "অতিরিক্ত বিনোদন", "ভারী যন্ত্রপাতি"],
        answer: "উন্নত চিকিৎসা ও শিক্ষা"
    },

    // --- অধ্যায় ৬: জলবায়ু ও দুর্যোগ ---
    {
        id: 5033, class: "5", subject: "gk",
        question: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন 'সুন্দরবন' বাংলাদেশের কোন অঞ্চলে অবস্থিত?",
        options: ["উত্তর-পূর্ব অঞ্চলে", "দক্ষিণ-পশ্চিম অঞ্চলে", "উত্তর-পশ্চিম অঞ্চলে", "মধ্য অঞ্চলে"],
        answer: "দক্ষিণ-পশ্চিম অঞ্চলে"
    },
    {
        id: 5034, class: "5", subject: "gk",
        question: "আন্তর্জাতিক মাতৃভাষা দিবস (International Mother Language Day) কত তারিখে পালিত হয়?",
        options: ["২৬শে মার্চ", "১৬ই ডিসেম্বর", "২১শে ফেব্রুয়ারি", "১৪ই এপ্রিল"],
        answer: "২১শে ফেব্রুয়ারি"
    },

    // --- অধ্যায় ১২: বাংলাদেশ ও বিশ্ব (জাতিসংঘ ও সার্ক) ---
    {
        id: 5035, class: "5", subject: "gk",
        question: "বিশ্বে শান্তি ও সহযোগিতা বজায় রাখার জন্য কত সালে 'জাতিসংঘ' (UN) প্রতিষ্ঠিত হয়?",
        options: ["১৯১৪ সালে", "১৯৩৯ সালে", "১৯৪৫ সালে", "১৯৭১ সালে"],
        answer: "১৯৪৫ সালে"
    },
    {
        id: 5036, class: "5", subject: "gk",
        question: "জাতিসংঘের প্রধান প্রশাসনিক শাখা বা অঙ্গ কয়টি?",
        options: ["৪টি", "৫টি", "৬টি", "১০টি"],
        answer: "৬টি"
    },
    {
        id: 5037, class: "5", subject: "gk",
        question: "জাতিসংঘের সাধারণ পরিষদের প্রথম বাংলাদেশী সভাপতি কে ছিলেন?",
        options: ["ড. ইউনূস", "হুমায়ুন রশীদ চৌধুরী", "বঙ্গবন্ধু শেখ মুজিবুর রহমান", "তাজউদ্দীন আহমদ"],
        answer: "হুমায়ুন রশীদ চৌধুরী"
    },
    {
        id: 5038, class: "5", subject: "gk",
        question: "দক্ষিণ এশিয়ার দেশগুলোর আঞ্চলিক সহযোগিতার সংগঠন 'সার্ক' (SAARC) কত সালে গঠিত হয়?",
        options: ["১৯৭৫ সালে", "১৯৮৫ সালে", "১৯৯৫ সালে", "২০০০ সালে"],
        answer: "১৯৮৫ সালে"
    },
    {
        id: 5039, class: "5", subject: "gk",
        question: "সার্ক (SAARC)-এর কেন্দ্রীয় সচিবালয় বা সদর দপ্তর কোথায় অবস্থিত?",
        options: ["ঢাকা, বাংলাদেশ", "নয়াদিল্লি, ভারত", "কাঠমান্ডু, নেপাল", "কলম্বো, শ্রীলঙ্কা"],
        answer: "কাঠমান্ডু, নেপাল"
    },
    {
        id: 5040, class: "5", subject: "gk",
        question: "জাতিসংঘের কোন বিশেষ শাখাটি সারাবিশ্বের শিক্ষা, বিজ্ঞান ও সংস্কৃতি রক্ষায় কাজ করে?",
        options: ["UNESCO", "UNICEF", "WHO", "FAO"],
        answer: "UNESCO"
    },
    {
        id: 5041, class: "5", subject: "gk",
        question: "জাতিসংঘের কোন শাখাটি মূলত শিশুদের অধিকার, শিক্ষা ও স্বাস্থ্যের উন্নয়নে কাজ করে?",
        options: ["WHO", "UNICEF", "ILO", "UNHCR"],
        answer: "UNICEF"
    },
    {
        id: 5042, class: "5", subject: "gk",
        question: "সারাবিশ্বের স্বাস্থ্যসেবা ও মহামারী নিয়ন্ত্রণে কাজ করা 'বিশ্ব স্বাস্থ্য সংস্থা' (WHO)-এর সদর দপ্তর কোথায়?",
        options: ["নিউইয়র্ক, ইউএসএ", "লন্ডন, ইউকে", "জেনেভা, সুইজারল্যান্ড", "প্যারিস, ফ্রান্স"],
        answer: "জেনেভা, সুইজারল্যান্ড"
    },

    // --- অধ্যায় ১১: বাংলাদেশের ক্ষুদ্র নৃ-গোষ্ঠী ---
    {
        id: 5043, class: "5", subject: "gk",
        question: "বাংলাদেশের অন্যতম প্রধান ক্ষুদ্র নৃ-গোষ্ঠী 'গারো'-দের ঐতিহ্যবাহী প্রধান উৎসবের নাম কী?",
        options: ["সাংগ্রাই", "বিজু", "ওয়ানগালা", "সোহরাই"],
        answer: "ওয়ানগালা"
    },
    {
        id: 5044, class: "5", subject: "gk",
        question: "পার্বত্য অঞ্চলের 'মারমা' জনগোষ্ঠীর নববর্ষের প্রধান ঐতিহ্যবাহী উৎসবের নাম কী?",
        options: ["সাংগ্রাই", "ওয়ানগালা", "সোহরাই", "রাস উৎসব"],
        answer: "সাংগ্রাই"
    },
    {
        id: 5045, class: "5", subject: "gk",
        question: "উত্তরবঙ্গের 'সাঁওতাল' সম্প্রদায়ের প্রধান ফসল কাটার উৎসবের নাম কী?",
        options: ["বিজু", "সোহরাই", "মাঘী পূর্ণিমা", "ওয়ানগালা"],
        answer: "সোহরাই"
    },

    // --- অধ্যায় ৮: নারী-পুরুষ সমতা ---
    {
        id: 5046, class: "5", subject: "gk",
        question: "প্রতি বছর কত তারিখে রাষ্ট্রীয়ভাবে 'বেগম রোকেয়া দিবস' পালন করা হয়?",
        options: ["৮ই মার্চ", "৯ই ডিসেম্বর", "১৬ই ডিসেম্বর", "১লা বৈশাখ"],
        answer: "৯ই ডিসেম্বর"
    },
    {
        id: 5047, class: "5", subject: "gk",
        question: "কাকে ভারতীয় উপমহাদেশে নারী জাগরণের অগ্রদূত (Pioneer of Women's Rights) বলা হয়?",
        options: ["সুফিয়া কামাল", "বেগম রোকেয়া", "প্রীতিলতা ওয়াদ্দেদার", "মাদার তেরেসা"],
        answer: "বেগম রোকেয়া"
    },

    // --- অধ্যায় ৭ ও ৯: মানবাধিকার এবং দায়িত্ব ও কর্তব্য ---
    {
        id: 5048, class: "5", subject: "gk",
        question: "জাতিসংঘ কত সালে মানবাধিকার সর্বজনীন ঘোষণাপত্র অনুমোদন করে?",
        options: ["১৯৪৮ সালে", "১৯৫২ সালে", "১৯৭১ সালে", "১৯৭৫ সালে"],
        answer: "১৯৪৮ সালে"
    },
    {
        id: 5049, class: "5", subject: "gk",
        question: "বাড়ির বাইরে বা অপরিচিত পরিবেশে শিশুদের নিরাপদ থাকার প্রধান উপায় কোনটি?",
        options: ["অপরিচিত মানুষের দেওয়া খাবার না খাওয়া ও সাবধান থাকা", "একা একা দূরের রাস্তায় চলে যাওয়া", "সবার সাথে রাগ করা", "মোবাইলে গেম খেলা"],
        answer: "অপরিচিত মানুষের দেওয়া খাবার না খাওয়া ও সাবধান থাকা"
    },
    {
        id: 5050, class: "5", subject: "gk",
        question: "রাস্তায় নিরাপদে চলাচলের জন্য আমাদের সর্বদা কী ব্যবহার করা উচিত?",
        options: ["রাস্তার মাঝখান", "ফুটপাত ও ওভারব্রিজ", "ডিভাইডার", "বাসের পেছন দিক"],
        answer: "ফুটপাত ও ওভারব্রিজ"
    },

    // ==========================================
    // 🔬 প্রাথমিক বিজ্ঞান অংশ (Science Section)
    // ==========================================

    // --- বিজ্ঞান অধ্যায় ১: আমাদের পরিবেশ ---
    {
        id: 5051, class: "5", subject: "gk",
        question: "সবুজ উদ্ভিদ নিজের খাদ্য নিজে তৈরি করার জন্য প্রধানত কোনটি ব্যবহার করে?",
        options: ["চাঁদের আলো", "রাসায়নিক সার", "সূর্যের আলো", "অক্সিজেন গ্যাস"],
        answer: "সূর্যের আলো"
    },
    {
        id: 5052, class: "5", subject: "gk",
        question: "উদ্ভিদ সূর্যের আলোর সাহায্যে যে প্রক্রিয়ায় নিজের খাদ্য নিজে তৈরি করে তাকে কী বলে?",
        options: ["শ্বসন", "সালোকসংশ্লেষণ", "অভিস্রবণ", "বাষ্পীভবন"],
        answer: "সালোকসংশ্লেষণ"
    },
    {
        id: 5053, class: "5", subject: "gk",
        question: "প্রাণীরা শ্বাস নেওয়ার সময় বাতাস থেকে কোন গ্যাসটি গ্রহণ করে?",
        options: ["নাইট্রোজেন", "কার্বন ডাই-অক্সাইড", "অক্সিজেন", "হাইড্রোজেন"],
        answer: "অক্সিজেন"
    },
    {
        id: 5054, class: "5", subject: "gk",
        question: "উদ্ভিদ খাদ্য তৈরি করার সময় বাতাস থেকে কোন গ্যাসটি গ্রহণ করে?",
        options: ["অক্সিজেন", "কার্বন ডাই-অক্সাইড", "নাইট্রোজেন", "হিলিয়াম"],
        answer: "কার্বন ডাই-অক্সাইড"
    },
    {
        id: 5055, class: "5", subject: "gk",
        question: "বেঁচে থাকার জন্য সকল প্রাণীর প্রধানত কোন ৩টি জিনিস প্রয়োজন?",
        options: ["টাকা, গাড়ি ও বাড়ি", "বাতাস, পানি ও খাদ্য", "বই, খাতা ও কলম", "পোশাক, জুতো ও চশমা"],
        answer: "বাতাস, পানি ও খাদ্য"
    },
    {
        id: 5056, class: "5", subject: "gk",
        question: "যেকোনো বাস্তুসংস্থানে (Ecosystem) শক্তির মূল উৎস কোনটি?",
        options: ["কয়লা", "বিদ্যুৎ", "সূর্য", "পেট্রোল"],
        answer: "সূর্য"
    },

    // --- বিজ্ঞান অধ্যায় ২: পরিবেশ দূষণ ---
    {
        id: 5057, class: "5", subject: "gk",
        question: "বর্তমান পৃথিবীতে পরিবেশ দূষণের প্রধান কারণ কোনটি?",
        options: ["প্রাকৃতিক দুর্যোগ", "মানুষের নানা কর্মকাণ্ড ও শিল্পায়ন", "পশুপাখির সংখ্যা বৃদ্ধি", "নদ-নদীর পানি প্রবাহ"],
        answer: "মানুষের নানা কর্মকাণ্ড ও শিল্পায়ন"
    },
    {
        id: 5058, class: "5", subject: "gk",
        question: "নিচের কোনটি বায়ু দূষণের (Air Pollution) প্রধান কারণ?",
        options: ["মাইকের উচ্চ শব্দ", "কলকারখানা ও ইটের ভাটার কালো ধোঁয়া", "পানিতে ময়লা ফেলা", "জমিতে রাসায়নিক সার দেওয়া"],
        answer: "কলকারখানা ও ইটের ভাটার কালো ধোঁয়া"
    },
    {
        id: 5059, class: "5", subject: "gk",
        question: "দূষিত পানি পান করার ফলে মানুষের নিচের কোন রোগটি হতে পারে?",
        options: ["রাতকানা", "ডায়রিয়া ও জন্ডিস", "অ্যাজমা বা হাঁপানি", "স্কার্ভি"],
        answer: "ডায়রিয়া ও জন্ডিস"
    },
    {
        id: 5060, class: "5", subject: "gk",
        question: "ফসলের জমিতে অতিরিক্ত কীটনাশক ও রাসায়নিক সার ব্যবহারের ফলে কোন দূষণ হয়?",
        options: ["শব্দ দূষণ", "মাটি ও পানি দূষণ", "বায়ু দূষণ", "আলোক দূষণ"],
        answer: "মাটি ও পানি দূষণ"
    },
    {
        id: 5061, class: "5", subject: "gk",
        question: "বিনা কারণে গাড়ির হর্ন বাজালে বা উচ্চস্বরে মাইক বাজালে মানুষের কী ক্ষতি হয়?",
        options: ["শ্রবণশক্তি হ্রাস পায় ও মানসিক চাপ বাড়ে", "রক্তশূন্যতা হয়", "দৃষ্টিশক্তি কমে যায়", "লিভার নষ্ট হয়"],
        answer: "শ্রবণশক্তি হ্রাস পায় ও মানসিক চাপ বাড়ে"
    },
    {
        id: 5062, class: "5", subject: "gk",
        question: "পরিবেশ সুন্দর ও দূষণমুক্ত রাখার জন্য আমাদের বর্জ্য পদার্থ কোথায় ফেলা উচিত?",
        options: ["রাস্তায়", "নদ-নদীতে", "নির্দিষ্ট ডাস্টবিনে বা গর্তে", "খেলার মাঠে"],
        answer: "নির্দিষ্ট ডাস্টবিনে বা গর্তে"
    },
    {
        id: 5063, class: "5", subject: "gk",
        question: "ব্যবহৃত বর্জ্য পদার্থকে আবার প্রক্রিয়াজাত করে নতুন ব্যবহারের উপযোগী করাকে কী বলে?",
        options: ["রিসাইকেল (Recycle)", "রিফিউজ (Refuse)", "রিপ্লেস (Replace)", "রিমুভ (Remove)"],
        answer: "রিসাইকেল (Recycle)"
    },

    // --- বিজ্ঞান অধ্যায় ৩: জীবনের জন্য পানি ---
    {
        id: 5064, class: "5", subject: "gk",
        question: "একজন সুস্থ মানুষের শরীরের ওজনের প্রায় কত ভাগ পানি থাকে?",
        options: ["১০-২০ ভাগ", "৩০-৪০ ভাগ", "৬০-৭০ ভাগ", "৯০ ভাগ"],
        answer: "৬০-৭০ ভাগ"
    },
    {
        id: 5065, class: "5", subject: "gk",
        question: "ফোটানো পদ্ধতিতে পানিকে সম্পূর্ণ জীবাণুমুক্ত করতে কত মিনিট ধরে ফোটাতে হবে?",
        options: ["৫ মিনিট", "১০ মিনিট", "অন্তত ২০ মিনিট", "১ ঘণ্টা"],
        answer: "অন্তত ২০ মিনিট"
    },
    {
        id: 5066, class: "5", subject: "gk",
        question: "বন্যা বা জরুরি সময়ে পানি বিশুদ্ধ করার জন্য কোন রাসায়নিক ট্যাবলেট ব্যবহার করা হয়?",
        options: ["হ্যালোজেন ট্যাবলেট (ব্লিচিং/ফিটকিরি)", "প্যারাসিটামল", "ক্যালসিয়াম বড়ি", "ভিটামিন সি বড়ি"],
        answer: "হ্যালোজেন ট্যাবলেট (ব্লিচিং/ফিটকিরি)"
    },
    {
        id: 5067, class: "5", subject: "gk",
        question: "মারাত্মক বিষাক্ত 'আর্সেনিকযুক্ত' টিউবওয়েল চেনার জন্য সেটিতে কোন রঙ দেওয়া হয়?",
        options: ["সবুজ রঙ", "নীল রঙ", "লাল রঙ", "হলুদ রঙ"],
        answer: "লাল রঙ"
    },
    {
        id: 5068, class: "5", subject: "gk",
        question: "নিরাপদ ও আর্সেনিকমুক্ত টিউবওয়েল চেনার জন্য সেটিতে কোন রঙ করা থাকে?",
        options: ["লাল রঙ", "সবুজ রঙ", "কালো রঙ", "বেগুনী রঙ"],
        answer: "সবুজ রঙ"
    },

    // --- বিজ্ঞান অধ্যায় ৪: বায়ু ---
    {
        id: 5069, class: "5", subject: "gk",
        question: "বায়ুর কোন উপাদানটি যেকোনো কিছু পুড়তে বা আগুন জ্বলতে সাহায্য করে?",
        options: ["নাইট্রোজেন", "অক্সিজেন", "কার্বন ডাই-অক্সাইড", "আরগন"],
        answer: "অক্সিজেন"
    },
    {
        id: 5070, class: "5", subject: "gk",
        question: "প্যাকেটজাত চিপস অনেকদিন মচমচে রাখার জন্য প্যাকেটের ভেতর কোন গ্যাস দেওয়া হয়?",
        options: ["অক্সিজেন", "কার্বন ডাই-অক্সাইড", "নাইট্রোজেন", "হাইড্রোজেন"],
        answer: "নাইট্রোজেন"
    },
    {
        id: 5071, class: "5", subject: "gk",
        question: "ডুবুরিরা সমুদ্রের নিচে যাওয়ার সময় সিলিন্ডারে কোন গ্যাস সাথে নিয়ে যান?",
        options: ["নাইট্রোজেন", "হিলিয়াম", "অক্সিজেন", "কার্বন ডাই-অক্সাইড"],
        answer: "অক্সিজেন"
    },
    {
        id: 5072, class: "5", subject: "gk",
        question: "অগ্নি নির্বাপক যন্ত্র (Fire Extinguisher) থেকে আগুন নেভানোর জন্য কোন গ্যাস বের হয়?",
        options: ["অক্সিজেন", "কার্বন ডাই-অক্সাইড", "হাইড্রোজেন", "মিথেন"],
        answer: "কার্বন ডাই-অক্সাইড"
    },

    // --- বিজ্ঞান অধ্যায় ৫: পদার্থ ও শক্তি ---
    {
        id: 5073, class: "5", subject: "gk",
        question: "কয়লা, খনিজ তেল এবং প্রাকৃতিক গ্যাসকে একসাথে কী জ্বালানি বলা হয়?",
        options: ["জৈব জ্বালানি", "জীবাশ্ম জ্বালানি (Fossil Fuel)", "কৃত্রিম জ্বালানি", "সৌর জ্বালানি"],
        answer: "জীবাশ্ম জ্বালানি (Fossil Fuel)"
    },
    {
        id: 5074, class: "5", subject: "gk",
        question: "তাপ সঞ্চালনের (Heat Transfer) মোট কয়টি পদ্ধতি রয়েছে?",
        options: ["২টি", "৩টি", "৪টি", "৫টি"],
        answer: "৩টি"
    },
    {
        id: 5075, class: "5", subject: "gk",
        question: "কঠিন পদার্থের (যেমন লোহার চামচ) মধ্য দিয়ে তাপ কোন পদ্ধতিতে সঞ্চালিত হয়?",
        options: ["পরিচলন", "পরিবহন (Conduction)", "বিকিরণ", "বাষ্পীভবন"],
        answer: "পরিবহন (Conduction)"
    },
    {
        id: 5076, class: "5", subject: "gk",
        question: "সূর্য থেকে পৃথিবীতে তাপ ও আলো কোন পদ্ধতিতে এসে পৌঁছায়?",
        options: ["পরিবহন", "পরিচলন", "বিকিরণ (Radiation)", "শোষণ"],
        answer: "বিকিরণ (Radiation)"
    },
    {
        id: 5077, class: "5", subject: "gk",
        question: "পদার্থের অত্যন্ত সূক্ষ্ম কণা যা খালি চোখে দেখা যায় না তাকে কী বলে?",
        options: ["অণু বা পরমাণু", "কোষ", "টিস্যু", "ধূলিকণা"],
        answer: "অণু বা পরমাণু"
    },

    // --- বিজ্ঞান অধ্যায় ৬: সুস্থ জীবনের জন্য খাদ্য ---
    {
        id: 5078, class: "5", subject: "gk",
        question: "শরীর সুস্থ ও কর্মক্ষম রাখার জন্য আমাদের প্রতিদিন কোন ধরণের খাদ্য খাওয়া উচিত?",
        options: ["ফাস্ট ফুড", "শুধু মাংস", "সুষম খাদ্য (Balanced Diet)", "মিষ্টি জাতীয় খাদ্য"],
        answer: "সুষম খাদ্য (Balanced Diet)"
    },
    {
        id: 5079, class: "5", subject: "gk",
        question: "খাবারে কৃত্রিম রং ও ফরমালিনের মতো রাসায়নিক ব্যবহারের ফলে মানুষের কোন জটিল রোগ হতে পারে?",
        options: ["ক্যানসার ও লিভার-কিডনি নষ্ট", "ডায়রিয়া", "স্কার্ভি", "টাইফয়েড"],
        answer: "ক্যানসার ও লিভার-কিডনি নষ্ট"
    },
    {
        id: 5080, class: "5", subject: "gk",
        question: "নিচের কোন খাবারটি অতিরিক্ত চর্বি ও চিনিযুক্ত 'জাঙ্ক ফুড' (Junk Food)-এর উদাহরণ?",
        options: ["ভাত ও মাছ", "আলুর চিপস ও বার্গার", "আপেল ও কলা", "দুধ ও ডিম"],
        answer: "আলুর চিপস ও বার্গার"
    },
    {
        id: 5081, class: "5", subject: "gk",
        question: "পুষ্টিবিজ্ঞান অনুযায়ী খাদ্যের প্রধান উপাদান কয়টি?",
        options: ["৩টি", "৪টি", "৬টি", "৫টি"],
        answer: "৬টি"
    },
    {
        id: 5082, class: "5", subject: "gk",
        question: "কোন ভিটামিনের অভাবে মানুষের মাড়ি দিয়ে রক্ত পড়ে বা 'স্কার্ভি' রোগ হয়?",
        options: ["ভিটামিন এ", "ভিটামিন বি", "ভিটামিন সি", "ভিটামিন ডি"],
        answer: "ভিটামিন সি"
    },
    {
        id: 5083, class: "5", subject: "gk",
        question: "শরীরের হাড় ও দাঁত মজবুত করার জন্য কোন খনিজ উপাদানটি সবচেয়ে বেশি প্রয়োজন?",
        options: ["আয়োডিন", "ক্যালসিয়াম", "আয়রন", "সোডিয়াম"],
        answer: "ক্যালসিয়াম"
    },

    // --- বিজ্ঞান অধ্যায় ৭: স্বাস্থ্যবিধি ---
    {
        id: 5084, class: "5", subject: "gk",
        question: "হাঁচি, কাশি বা আক্রান্ত ব্যক্তির স্পর্শের মাধ্যমে যে রোগ ছড়ায় তাকে কী বলে?",
        options: ["বংশগত রোগ", "অপুষ্টিজনিত রোগ", "সংক্রামক রোগ", "মানসিক রোগ"],
        answer: "সংক্রামক রোগ"
    },
    {
        id: 5085, class: "5", subject: "gk",
        question: "এডিস (Aedes) মশার কামড়ের মাধ্যমে মানুষের কোন সংক্রামক রোগটি হয়?",
        options: ["ম্যালেরিয়া", "ডেঙ্গু", "ডায়রিয়া", "জলাতঙ্ক"],
        answer: "ডেঙ্গু"
    },
    {
        id: 5086, class: "5", subject: "gk",
        question: "অ্যানোফেলিস (Anopheles) স্ত্রী মশার কামড়ের মাধ্যমে কোন রোগ ছড়ায়?",
        options: ["ডেঙ্গু", "ফাইলেরিয়া", "ম্যালেরিয়া", "চিকুনগুনিয়া"],
        answer: "ম্যালেরিয়া"
    },
    {
        id: 5087, class: "5", subject: "gk",
        question: "মানবজীবনে শৈশব থেকে যৌবনে পদার্পণের মধ্যবর্তী পরিবর্তনশীল সময়কে কী বলে?",
        options: ["শৈশবকাল", "বার্ধক্যকাল", "বয়ঃসন্ধিকাল", "নবজাতককাল"],
        answer: "বয়ঃসন্ধিকাল"
    },

    // --- বিজ্ঞান অধ্যায় ৮: মহাবিশ্ব ---
    {
        id: 5088, class: "5", subject: "gk",
        question: "মহাকাশে পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ (Satellite) কোনটি?",
        options: ["সূর্য", "বুধ", "চাঁদ", "মঙ্গল"],
        answer: "চাঁদ"
    },
    {
        id: 5089, class: "5", subject: "gk",
        question: "আমাদের সৌরজগতে (Solar System) মোট কয়টি গ্রহ রয়েছে?",
        options: ["৭টি", "৮টি", "৯টি", "১০টি"],
        answer: "৮টি"
    },
    {
        id: 5090, class: "5", subject: "gk",
        question: "সূর্যের সবচেয়ে কাছের গ্রহ কোনটি?",
        options: ["পৃথিবী", "বুধ", "শুক্র", "মঙ্গল"],
        answer: "বুধ"
    },
    {
        id: 5091, class: "5", subject: "gk",
        question: "আমাদের সৌরজগতের সবচেয়ে বড় বা বৃহত্তম গ্রহ কোনটি?",
        options: ["শনি", "বৃহস্পতি", "পৃথিবী", "নেপচুন"],
        answer: "বৃহস্পতি"
    },
    {
        id: 5092, class: "5", subject: "gk",
        question: "মহাকাশে সূর্য থেকে পৃথিবীর দূরত্ব প্রায় কত কিলোমিটার?",
        options: ["৫ কোটি কিমি", "১০ কোটি কিমি", "১৫ কোটি কিমি", "২০ কোটি কিমি"],
        answer: "১৫ কোটি কিমি"
    },
    {
        id: 5093, class: "5", subject: "gk",
        question: "মহাবিশ্বে আলোর গতি প্রতি সেকেন্ডে প্রায় কত কিলোমিটার?",
        options: ["১ লক্ষ কিমি", "২ লক্ষ কিমি", "৩ লক্ষ কিমি", "৫ লক্ষ কিমি"],
        answer: "৩ লক্ষ কিমি"
    },
    {
        id: 5094, class: "5", subject: "gk",
        question: "মহাকাশে কোটি কোটি নক্ষত্র বা তারকার বিশাল সমাবেশকে কী বলা হয়?",
        options: ["গ্রহাণু পুঞ্জ", "গ্যালাক্সি (Galaxy)", "ধূমকেতু", "উল্কা"],
        answer: "গ্যালাক্সি (Galaxy)"
    },

    // --- বিজ্ঞান অধ্যায় ৯ ও ১০: আমাদের জীবনে প্রযুক্তি ও তথ্য ---
    {
        id: 5095, class: "5", subject: "gk",
        question: "যেকোনো আধুনিক বা টেকনিক্যাল প্রযুক্তির মূল উৎস কোনটি?",
        options: ["টাকা পয়সা", "বৈজ্ঞানিক জ্ঞান", "শারীরিক শক্তি", "কল্পনা"],
        answer: "বৈজ্ঞানিক জ্ঞান"
    },
    {
        id: 5096, class: "5", subject: "gk",
        question: "চিকিৎসা ক্ষেত্রে মানবদেহের ভেতরের অঙ্গের ছবি তোলার আধুনিক প্রযুক্তির নাম কী?",
        options: ["এক্স-রে ও আল্ট্রাসনোগ্রাফি", "থার্মোমিটার", "স্টেথিস্কোপ", "মাইক্রোস্কোপ"],
        answer: "এক্স-রে ও আল্ট্রাসনোগ্রাফি"
    },
    {
        id: 5097, class: "5", subject: "gk",
        question: "আধুনিক কৃষিক্ষেত্রে বিপ্লব এনেছে নিচের কোন যান্ত্রিক প্রযুক্তিটি?",
        options: ["কাস্তে", "লাঙল", "ট্রাক্টর ও সেচ পাম্প", "কোদাল"],
        answer: "ট্রাক্টর ও সেচ পাম্প"
    },
    {
        id: 5098, class: "5", subject: "gk",
        question: "সারাবিশ্বের কম্পিউটারগুলোকে যুক্ত করা তথ্য আদান-প্রদানের আধুনিক মাধ্যম কোনটি?",
        options: ["টেলিভিশন", "ইন্টারনেট (Internet)", "রেডিও", "খবরের কাগজ"],
        answer: "ইন্টারনেট (Internet)"
    },

    // --- বিজ্ঞান অধ্যায় ১১ ও ১২: আবহাওয়া, জলবায়ু ও পরিবর্তন ---
    {
        id: 5099, class: "5", subject: "gk",
        question: "আকাশে ভাসমান অতি ক্ষুদ্র জলকণা বা বরফকণার সমষ্টিকে কী বলা হয়?",
        options: ["কুয়াশা", "মেঘ", "বৃষ্টি", "শিশির"],
        answer: "মেঘ"
    },
    {
        id: 5100, class: "5", subject: "gk",
        question: "কোনো অঞ্চলের সাধারণত কত বছরের আবহাওয়ার গড় অবস্থাকে 'জলবায়ু' (Climate) বলে?",
        options: ["১-২ বছর", "৫-১০ বছর", "৩০-৪০ বছর", "১০০ বছর"],
        answer: "৩০-৪০ বছর"
    }
];



// আপনার মূল ডাটাবেজে এই প্রশ্নগুলো পুশ করার কমান্ড
if (typeof quizData !== 'undefined') {
    quizData.push(...class5GkQuestions);
}



// =========================================================================
// 🎒 ৫ম শ্রেণী (Class 5) - বাংলা (Bangla) | আইডিブロック: 5501 থেকে 5600 (মোট ১০০টি)
// =========================================================================

const class5BanglaQuestions = [
    // --- গল্প ও কবিতা ভিত্তিক প্রশ্ন (textbook literature) ---
    {
        id: 5501, class: "5", subject: "bangla",
        question: "‘এই দেশ এই মানুষ’ প্রবন্ধে বাংলাদেশের কোন পার্বত্য অঞ্চলের ক্ষুদ্র নৃ-গোষ্ঠীর কথা বলা হয়েছে?",
        options: ["পার্বত্য চট্টগ্রাম", "সিলেট অঞ্চল", "সুন্দরবন অঞ্চল", "বরেন্দ্র অঞ্চল"],
        answer: "পার্বত্য চট্টগ্রাম"
    },
    {
        id: 5502, class: "5", subject: "bangla",
        question: "পহেলা বৈশাখ কাদের প্রধান সামাজিক উৎসব?",
        options: ["বাঙালিদের", "চাকমাদের", "মারমাদের", "সাঁওতালদের"],
        answer: "বাঙালিদের"
    },
    {
        id: 5503, class: "5", subject: "bangla",
        question: "‘সংকল্প’ কবিতাটি কে লিখেছেন?",
        options: ["রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "জসীমউদ্দীন", "শামসুর রাহমান"],
        answer: "কাজী নজরুল ইসলাম"
    },
    {
        id: 5504, class: "5", subject: "bangla",
        question: "‘থাকব নাকো বদ্ধ ঘরে, দেখব এবার _____।’ শূন্যস্থানে কোন শব্দটি বসবে?",
        options: ["আকাশটাকে", "জগৎটাকে", "পাতালটাকে", "মানুষটাকে"],
        answer: "জগৎটাকে"
    },
    {
        id: 5505, class: "5", subject: "bangla",
        question: "কিশোর কবি সংকল্প কবিতায় কিসের মতো আকাশ ফুঁড়ে ওড়ার ইচ্ছা প্রকাশ করেছেন?",
        options: ["পাখির মতো", "মেঘের মতো", "রকেটের মতো", "বিমানের মতো"],
        answer: "রকেটের মতো"
    },
    {
        id: 5506, class: "5", subject: "bangla",
        question: "ক্যাঙ্গারু বললেই পৃথিবীর কোন দেশের কথা মনে পড়ে?",
        options: ["আফ্রিকা", "অস্ট্রেলিয়া", "বাংলাদেশ", "কানাডা"],
        answer: "অস্ট্রেলিয়া"
    },
    {
        id: 5507, class: "5", subject: "bangla",
        question: "বাংলাদেশের কোন বনে বিখ্যাত 'রয়্যাল বেঙ্গল টাইগার' বাস করে?",
        options: ["ভাওয়ালের গড়", "শালবন বিহার", "সুন্দরবন", "বান্দরবান"],
        answer: "সুন্দরবন"
    },
    {
        id: 5508, class: "5", subject: "bangla",
        question: "কোন পাখিটিকে বাংলাদেশের 'সবচেয়ে চালাক পাখি' বলা হয়ে থাকে?",
        options: ["কোকিল", "টিয়া", "কাউয়া (কাক)", "ময়না"],
        answer: "কাউয়া (কাক)"
    },
    {
        id: 5509, class: "5", subject: "bangla",
        question: "‘হাতি আর শিয়ালের গল্প’— গল্পে হাতির স্বভাবটি কেমন ছিল?",
        options: ["খুব শান্ত", "অহংকারী ও অত্যাচারী", "দয়ালু", "ভীষণ ভীরু"],
        answer: "অহংকারী ও অত্যাচারী"
    },
    {
        id: 5510, class: "5", subject: "bangla",
        question: "অহংকারী হাতিটিকে উচিত শিক্ষা দেওয়ার জন্য বনের পশুরা কাকে দায়িত্ব দিয়েছিল?",
        options: ["সিংহকে", "ভাল্লুককে", "চতুর শিয়ালকে", "বাঘকে"],
        answer: "চতুর শিয়ালকে"
    },
    {
        id: 5511, class: "5", subject: "bangla",
        question: "‘ফুটবল খেলোয়াড়’ কবিতাটি কার লেখা?",
        options: ["ফররুখ আহমদ", "জসীমউদ্দীন", "সুফিয়া কামাল", "আহসান হাবীব"],
        answer: "জসীমউদ্দীন"
    },
    {
        id: 5512, class: "5", subject: "bangla",
        question: "ফুটবল খেলোয়াড় ইমদাদ হকের শরীরে প্রতিদিন কেন মালিশ মাখতে হতো?",
        options: ["খেলার চোট ও ক্ষতের ব্যথার কারণে", "শখ করে", "ঠাণ্ডা লাগার জন্য", "ঘুমানোর আগে"],
        answer: "খেলার চোট ও ক্ষতের ব্যথার কারণে"
    },
    {
        id: 5513, class: "5", subject: "bangla",
        question: "‘বীরগাথা’ গল্পে ক্যাপ্টেন মহিউদ্দিন জাহাঙ্গীর কত নম্বর সেক্টরে যুদ্ধ করেছিলেন?",
        options: ["২ নম্বর সেক্টর", "৪ নম্বর সেক্টর", "৭ নম্বর সেক্টর", "১০ নম্বর সেক্টর"],
        answer: "৭ নম্বর সেক্টর"
    },
    {
        id: 5514, class: "5", subject: "bangla",
        question: "ফ্লাইট লেফটেন্যান্ট মতিউর রহমান কোন বাহিনীতে কর্মরত ছিলেন?",
        options: ["সেনাবাহিনী", "নৌবাহিনী", "বিমানবাহিনী", "পুলিশ বাহিনী"],
        answer: "বিমানবাহিনী"
    },
    {
        id: 5515, class: "5", subject: "bangla",
        question: "‘স্বদেশ’ কবিতাটি কোন কবির লেখা?",
        options: ["আহসান হাবীব", "শামসুর রাহমান", "রোকনুজ্জামান খান", "আল মাহমুদ"],
        answer: "আহসান হাবীব"
    },
    {
        id: 5516, class: "5", subject: "bangla",
        question: "‘স্বদেশ’ কবিতায় ছেলেটি নদীর তীরে বসে মনের মধ্যে কিসের ছবি আঁকছিল?",
        options: ["শহরের বড় দালানের", "বাংলাদেশের প্রকৃতির ও নদীর", "বিদেশের কোনো দৃশ্য", "একটি বড় বিমানের"],
        answer: "বাংলাদেশের প্রকৃতির ও নদীর"
    },
    {
        id: 5517, class: "5", subject: "bangla",
        question: "‘কাঞ্চনমালা আর কাঁকনমালা’— রূপকথার গল্পে রাজার প্রধান বন্ধু কে ছিল?",
        options: ["একজন রাখাল ছেলে", "সেনাপতি", "মন্ত্রী", "প্রতিবেশী রাজা"],
        answer: "একজন রাখাল ছেলে"
    },
    {
        id: 5518, class: "5", subject: "bangla",
        question: "রাজার শরীরে সুঁই বিধিয়ে কে নকল রানী সেজেছিল?",
        options: ["কাঞ্চনমালা", "কাঁকনমালা (দাসী)", "সুখমালা", "রূপমালা"],
        answer: "কাঁকনমালা (দাসী)"
    },
    {
        id: 5519, class: "5", subject: "bangla",
        question: "১৪ই ডিসেম্বর শহীদ বুদ্ধিজীবী দিবসে কাকে চোখ বেঁধে নিয়ে হত্যা করা হয়েছিল?",
        options: ["ড. গোবিন্দ চন্দ্র দেব", "সেলিনা পারভীন", "মুনীর চৌধুরী", "উপরের সবাই চিরস্মরণীয়"],
        answer: "উপরের সবাই চিরস্মরণীয়"
    },
    {
        id: 5520, class: "5", subject: "bangla",
        question: "‘ঘাসফুল’ কবিতাটি কার লেখা?",
        options: ["জ্যোতিরিন্দ্র মৈত্র", "রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "সুকুমার রায়"],
        answer: "জ্যোতিরিন্দ্র মৈত্র"
    },
    {
        id: 5521, class: "5", subject: "bangla",
        question: "ঘাসফুলেরা আমাদের কাছে কী মিনতি বা অনুরোধ করেছে?",
        options: ["তাদের তুলে নিয়ে মাটির নিচে পুঁতে ফেলতে", "তাদের ছিঁড়ে বা পায়ে দলে পিষে না ফেলতে", "তাদের মালা বানাতে", "সব ঘাস কেটে ফেলতে"],
        answer: "তাদের ছিঁড়ে বা পায়ে দলে পিষে না ফেলতে"
    },
    {
        id: 5522, class: "5", subject: "bangla",
        question: "‘মাটির নিচে যে শহর’— গল্পে বাংলাদেশের কোন প্রাচীন ঐতিহাসিক সভ্যতার কথা বলা হয়েছে?",
        options: ["মহাস্থানগড়", "ময়নামতি", "উয়ারী-বটেশ্বর", "পাহাড়পুর"],
        answer: "উয়ারী-বটেশ্বর"
    },
    {
        id: 5523, class: "5", subject: "bangla",
        question: "উয়ারী-বটেশ্বর প্রাচীন স্থানটি বাংলাদেশের কোন জেলায় অবস্থিত?",
        options: ["নরসিংদী", "বগুড়া", "কুমিল্লা", "গাজীপুর"],
        answer: "নরসিংদী"
    },
    {
        id: 5524, class: "5", subject: "bangla",
        question: "‘শিক্ষা গুরুর মর্যাদা’ কবিতাটি কে লিখেছেন?",
        options: ["কাজী কাদের নেওয়াজ", "গোলাম মোস্তফা", "কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর"],
        answer: "কাজী কাদের নেওয়াজ"
    },
    {
        id: 5525, class: "5", subject: "bangla",
        question: "বাদশাহ আলমগীরের কুমার (পুত্র) শিক্ষকের পায়ে কী ঢেলে দিচ্ছিলেন?",
        options: ["দুধ", "শরবত", "পানি", "তেল"],
        answer: "পানি"
    },
    {
        id: 5526, class: "5", subject: "bangla",
        question: "বাদশাহ আলমগীর শিক্ষকের সম্মান দেখে কী বলেছিলেন?",
        options: ["শিক্ষকের স্থান সবার উপরে", "শিক্ষককে তাড়িয়ে দেওয়া হোক", "কুমার অপরাধ করেছে", "শিক্ষক কোনো সম্মান পাবেন না"],
        answer: "শিক্ষকের স্থান সবার উপরে"
    },
    {
        id: 5527, class: "5", subject: "bangla",
        question: "‘ভাবুক ছেলেটি’ গল্পে কোন মহান বাঙালি বিজ্ঞানীর শৈশবের কথা বলা হয়েছে?",
        options: ["ড. কুদরাত-এ-খুদা", "স্যার জগদীশচন্দ্র বসু", "প্রফুল্ল চন্দ্র রায়", "ড. আবদুল্লাহ আল মুতী"],
        answer: "স্যার জগদীশচন্দ্র বসু"
    },
    {
        id: 5528, class: "5", subject: "bangla",
        question: "‘উদ্ভিদেরও প্রাণ আছে’— এই সত্যটি বিশ্বের দরবারে কে প্রমাণ করেছিলেন?",
        options: ["আইজ্যাক নিউটন", "জগদীশচন্দ্র বসু", "আলবার্ট আইনস্টাইন", "থমাস আলভা এডিসন"],
        answer: "জগদীশচন্দ্র বসু"
    },
    {
        id: 5529, class: "5", subject: "bangla",
        question: "‘দুই তীর’ কবিতাটি কার লেখা?",
        options: ["কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "জীবনানন্দ দাশ", "সুফিয়া কামাল"],
        answer: "রবীন্দ্রনাথ ঠাকুর"
    },
    {
        id: 5530, class: "5", subject: "bangla",
        question: "‘অবাক জলপান’— সুকুমার রায়ের লেখা এটি কোন ধরণের সাহিত্য?",
        options: ["ছোটগল্প", "কবিতা", "হাসির নাটিকা (একাঙ্কিকা)", "উপন্যাস"],
        answer: "হাসির নাটিকা (একাঙ্কিকা)"
    },
    {
        id: 5531, class: "5", subject: "bangla",
        question: "অবাক জলপান নাটিকায় তৃষ্ণার্ত পথিক কার কাছে প্রথম জল বা পানি চেয়েছিলেন?",
        options: ["ঝুড়িওয়ালার কাছে", "বৃদ্ধের কাছে", "মামার কাছে", "বালকের কাছে"],
        answer: "ঝুড়িওয়ালার কাছে"
    },
    {
        id: 5532, class: "5", subject: "bangla",
        question: "অবাক জলপান নাটিকায় শেষ পর্যন্ত পথিককে কে এক গ্লাস জল খাইয়েছিলেন?",
        options: ["ঝুড়িওয়ালা", "ছোকরা", "বিজ্ঞানী মামা", "পথিক নিজে নদী থেকে খেয়েছিল"],
        answer: "বিজ্ঞানী মামা"
    },
    {
        id: 5533, class: "5", subject: "bangla",
        question: "‘রৌদ্র লেখে জয়’ কবিতাটি কার লেখা?",
        options: ["শামসুর রাহমান", "আল মাহমুদ", "সুফিয়া কামাল", "ফররুখ আহমদ"],
        answer: "শামসুর রাহমান"
    },
    {
        id: 5534, class: "5", subject: "bangla",
        question: "রৌদ্র লেখে জয় কবিতায় কোন ঐতিহাসিক যুদ্ধের কথা বলা হয়েছে?",
        options: ["পলাশীর যুদ্ধ", "সিপাহি বিদ্রোহ", "১৯৭১ সালের মুক্তিযুদ্ধ", "প্রথম বিশ্বযুদ্ধ"],
        answer: "১৯৭১ সালের মুক্তিযুদ্ধ"
    },

    // --- শব্দার্থ ও এক কথায় প্রকাশ (Vocabulary) ---
    {
        id: 5535, class: "5", subject: "bangla",
        question: "‘সৌভাগ্য’ শব্দের সঠিক অর্থ কোনটি?",
        options: ["খারাপ ভাগ্য", "ভালো ভাগ্য", "ভাগ্যহীন", "ধনসম্পদ"],
        answer: "ভালো ভাগ্য"
    },
    {
        id: 5536, class: "5", subject: "bangla",
        question: "‘দিগন্ত’ শব্দের অর্থ কী?",
        options: ["চারদিকের অন্ধকার", "যেখানে আকাশ ও পৃথিবী মিলেছে বলে মনে হয়", "পাহাড়ের চূড়া", "নদীর সীমানা"],
        answer: "যেখানে আকাশ ও পৃথিবী মিলেছে বলে মনে হয়"
    },
    {
        id: 5537, class: "5", subject: "bangla",
        question: "‘অকুতোভয়’ শব্দের অর্থ কী?",
        options: ["যার কোনো কিছুতেই ভয় নেই", "যে খুব ভয় পায়", "মিথ্যাবাদী", "অহংকারী"],
        answer: "যার কোনো কিছুতেই ভয় নেই"
    },
    {
        id: 5538, class: "5", subject: "bangla",
        question: "‘বিপুল’ শব্দের অর্থ কী?",
        options: ["খুব ছোট", "বিশাল বা অনেক বড়", "নরম", "কঠিন"],
        answer: "বিশাল বা অনেক বড়"
    },
    {
        id: 5539, class: "5", subject: "bangla",
        question: "‘রক্তিম’ শব্দের সঠিক অর্থ কোনটি?",
        options: ["সাদা রঙের", "লাল আভাযুক্ত বা লালচে", "কালো মেঘ", "হলুদ ফুল"],
        answer: "লাল আভাযুক্ত বা লালচে"
    },
    {
        id: 5540, class: "5", subject: "bangla",
        question: "এক কথায় প্রকাশ করো: ‘উপকার করার ইচ্ছা’",
        options: ["উপকারিতা", "উপচিকীর্ষা", "কৃতজ্ঞতা", "দয়া"],
        answer: "উপচিকীর্ষা"
    },
    {
        id: 5541, class: "5", subject: "bangla",
        question: "এক কথায় প্রকাশ করো: ‘উপকারীর উপকার যে স্বীকার করে’",
        options: ["উপকারী", "কৃতঘ্ন", "कृतज्ञ", "অকৃতজ্ঞ"],
        answer: "কৃতজ্ঞ"
    },
    {
        id: 5542, class: "5", subject: "bangla",
        question: "এক কথায় প্রকাশ করো: ‘যার কোনো তুলনা নেই’",
        options: ["অতুলনীয়", "অসাধারণ", "অনুপম", "অতুল"],
        answer: "অতুলনীয়"
    },
    {
        id: 5543, class: "5", subject: "bangla",
        question: "এক কথায় প্রকাশ করো: ‘আকাশে চড়ে যে’",
        options: ["জলচর", "খেচর", "বনচর", "উড়োজাহাজ"],
        answer: "খেচর"
    },
    {
        id: 5544, class: "5", subject: "bangla",
        question: "এক কথায় প্রকাশ করো: ‘মরণ পর্যন্ত’",
        options: ["আমরণ", "মরণশীল", "জীবন", "মৃত্যু অবধি"],
        answer: "আমরণ"
    },

    // --- বিপরীত শব্দ ও সমার্থক শব্দ (Antonyms & Synonyms) ---
    {
        id: 5545, class: "5", subject: "bangla",
        question: "‘স্বাধীন’ শব্দের সঠিক বিপরীত শব্দ কোনটি?",
        options: ["পরাধীন", "মুক্ত", "বন্দী", "অধীনস্থ"],
        answer: "পরাধীন"
    },
    {
        id: 5546, class: "5", subject: "bangla",
        question: "‘অহংকার’ শব্দের সঠিক বিপরীত শব্দ কোনটি?",
        options: ["দর্প", "নিরহংকার", "গর্ব", "নম্রতা"],
        answer: "নিরহংকার"
    },
    {
        id: 5547, class: "5", subject: "bangla",
        question: "‘উদার’ শব্দের বিপরীত শব্দ কোনটি?",
        options: ["সংকীর্ণ", "মহৎ", "দয়ালু", "ছোট"],
        answer: "সংকীর্ণ"
    },
    {
        id: 5548, class: "5", subject: "bangla",
        question: "‘স্মরণ’ শব্দের সঠিক বিপরীত শব্দ কোনটি?",
        options: ["ভুল", "বিস্মরণ", "মনে করা", "অস্মরণ"],
        answer: "বিস্মরণ"
    },
    {
        id: 5549, class: "5", subject: "bangla",
        question: "‘তিক্ত’ শব্দের বিপরীত শব্দ কোনটি?",
        options: ["ঝাল", "মিষ্টি/মধুর", "টকে ভরা", "কটু"],
        answer: "মিষ্টি/মধুর"
    },
    {
        id: 5550, class: "5", subject: "bangla",
        question: "নিচের কোনটি ‘আকাশ’ শব্দের সমার্থক (প্রতিশব্দ) শব্দ নয়?",
        options: ["গগন", "নভ", "অম্বর", "মেদিনী"],
        answer: "মেদিনী"
    },
    {
        id: 5551, class: "5", subject: "bangla",
        question: "‘জল’ শব্দের সমার্থক শব্দ কোনটি?",
        options: ["সলিল", "অনল", "পবন", "ভূধর"],
        answer: "সলিল"
    },
    {
        id: 5552, class: "5", subject: "bangla",
        question: "‘পৃথিবী’ শব্দের সমার্থক শব্দ কোনটি?",
        options: ["ধরণী", "তপন", "শশী", "অর্ণব"],
        answer: "ধরণী"
    },
    {
        id: 5553, class: "5", subject: "bangla",
        question: "‘সূর্য’ শব্দের সঠিক সমার্থক শব্দ কোনটি?",
        options: ["সুধাকর", "ভানু", "নিশাকর", "জলদ"],
        answer: "ভানু"
    },
    {
        id: 5554, class: "5", subject: "bangla",
        question: "‘অগ্নি’ শব্দের সমার্থক শব্দ কোনটি?",
        options: ["অনল", "অনিল", "বারি", "নীর"],
        answer: "অনল"
    },

    // --- যুক্তবর্ণ ও বানান শুদ্ধি (Spelling & Joint Letters) ---
    {
        id: 5555, class: "5", subject: "bangla",
        question: "‘ষ্ণ’ (যেমন: কৃষ্ণ) যুক্তবর্ণটি কোন কোন বর্ণ নিয়ে গঠিত?",
        options: ["ষ + ন", "ষ + ণ", "শ + ন", "স + ণ"],
        answer: "ষ + ণ"
    },
    {
        id: 5556, class: "5", subject: "bangla",
        question: "‘জ্ঞ’ (যেমন: বিজ্ঞান) যুক্তবর্ণটি কোন দুটি বর্ণের মিলনে তৈরি?",
        options: ["জ + ঞ", "ঞ + জ", "গ + য-ফলা", "ঝ + ঞ"],
        answer: "জ + ঞ"
    },
    {
        id: 5557, class: "5", subject: "bangla",
        question: "‘ক্ষ’ যুক্তবর্ণটি ভেঙে লিখলে কোন দুটি বর্ণ পাওয়া যায়?",
        options: ["ক + ষ", "ক + খ", "খ + ষ", "হ + ম"],
        answer: "ক + ষ"
    },
    {
        id: 5558, class: "5", subject: "bangla",
        question: "‘হ্ম’ (যেমন: ব্রাহ্মণ) যুক্তবর্ণটিতে কোন কোন বর্ণ আছে?",
        options: ["হ + ম", "ম + হ", "ক + ম", "হ + ন"],
        answer: "হ + m"
    },
    {
        id: 5559, class: "5", subject: "bangla",
        question: "‘ঞ্চ’ (যেমন: পঞ্চম) যুক্তবর্ণটি কোন দুটি বর্ণ মিলে হয়েছে?",
        options: ["ন + চ", "ঞ + চ", "ঞ + ছ", "ণ + চ"],
        answer: "ঞ + চ"
    },
    {
        id: 5560, class: "5", subject: "bangla",
        question: "নিচের কোন শব্দটির বানান সম্পূর্ণ শুদ্ধ?",
        options: ["বুদ্ধিজীবি", "বুদ্ধিজীবী", "বুদ্বিজীবী", "বুধিজীবি"],
        answer: "বুদ্ধিজীবী"
    },
    {
        id: 5561, class: "5", subject: "bangla",
        question: "নিচের কোন বানানটি সঠিক?",
        options: ["স্বাধিনতা", "স্বাধীনতা", "শাবীনতা", "সাধিনতা"],
        answer: "স্বাধীনতা"
    },
    {
        id: 5562, class: "5", subject: "bangla",
        question: "নিচের কোনটি ‘সূর্য’ শব্দের সঠিক বানান?",
        options: ["সুর্য", "সূর্য্য", "সূর্য", "সূর্যূ"],
        answer: "সূর্য"
    },
    {
        id: 5563, class: "5", subject: "bangla",
        question: "নিচের শুদ্ধ বানানটি চিহ্নিত করো:",
        options: ["পিপিলিকা", "পিপীলিকা", "পীপিলিকা", "পীপীলিকা"],
        answer: "পিপীলিকা"
    },
    {
        id: 5564, class: "5", subject: "bangla",
        question: "কোন বানানটি ব্যাকরণগতভাবে সঠিক?",
        options: ["অহংকার", "অহনকার", "অহঙ্কার", "১ম ও ৩য় দুটিই সঠিক"],
        answer: "১ম ও ৩য় দুটিই সঠিক"
    },

    // --- ব্যাকরণ ও ক্রিয়াপদের রূপ (Grammar & Verb Forms) ---
    {
        id: 5565, class: "5", subject: "bangla",
        question: "‘খাইয়াছিল’— ক্রিয়াপদটির চলিত রূপ কোনটি?",
        options: ["খাচ্ছে", "খেয়েছে", "খেয়েছিল", "খাবে"],
        answer: "খেয়েছিল"
    },
    {
        id: 5566, class: "5", subject: "bangla",
        question: "‘হাঁটিতেছে’— ক্রিয়াপদটির চলিত রূপ কোনটি?",
        options: ["হাঁটবে", "হাঁটছে", "হাঁটল", "হাঁটছিল"],
        answer: "হাঁটছে"
    },
    {
        id: 5567, class: "5", subject: "bangla",
        question: "‘করিব’— ক্রিয়াপদটি কোন কাল নির্দেশ করে?",
        options: ["বর্তমান কাল", "অতীত কাল", "ভবিষ্যৎ কাল", "কোনোটিই নয়"],
        answer: "ভবিষ্যৎ কাল"
    },
    {
        id: 5568, class: "5", subject: "bangla",
        question: "‘পড়িয়াছিলাম’— এর চলিত রূপ কোনটি?",
        options: ["পড়েছি", "পড়ছিলাম", "পড়েছিলাম", "পড়ব"],
        answer: "podechilam"
    },
    {
        id: 5569, class: "5", subject: "bangla",
        question: "‘ঘুমিয়েছিল’— ক্রিয়াপদটি কোন কালের উদাহরণ?",
        options: ["বর্তমান কাল", "অতীত কাল", "ভবিষ্যৎ কাল", "সাধারণ বর্তমান"],
        answer: "অতীত কাল"
    },
    {
        id: 5570, class: "5", subject: "bangla",
        question: "ভাষার মূল উপাদান বা মূল ভিত্তি কোনটি?",
        options: ["শব্দ", "বাক্য", "ধ্বনি", "বর্ণ"],
        answer: "ধ্বনি"
    },
    {
        id: 5571, class: "5", subject: "bangla",
        question: "বাংলা বর্ণমালায় মোট কয়টি বর্ণ রয়েছে?",
        options: ["৩৯টি", "১১টি", "৫০টি", "৩২টি"],
        answer: "৫০টি"
    },
    {
        id: 5572, class: "5", subject: "bangla",
        question: "বাংলা বর্ণমালায় স্বরবর্ণ কয়টি?",
        options: ["১১টি", "৩৯টি", "১২টি", "৫০টি"],
        answer: "১১টি"
    },
    {
        id: 5573, class: "5", subject: "bangla",
        question: "বাংলা বর্ণমালায় ব্যঞ্জনবর্ণের সংখ্যা কয়টি?",
        options: ["১১টি", "৩২টি", "৩৯টি", "৪০টি"],
        answer: "৩৯টি"
    },
    {
        id: 5574, class: "5", subject: "bangla",
        question: "বাংলা বর্ণমালায় ‘মাত্রা’ ছাড়া বর্ণ (মাত্রাহীন বর্ণ) কয়টি?",
        options: ["৬টি", "৮টি", "১০টি", "৩২টি"],
        answer: "১০টি"
    },
    {
        id: 5575, class: "5", subject: "bangla",
        question: "বাংলা বর্ণমালায় ‘অর্ধমাত্রা’ বিশিষ্ট বর্ণ কয়টি?",
        options: ["৬টি", "৭টি", "৮টি", "১০টি"],
        answer: "৮টি"
    },
    {
        id: 5576, class: "5", subject: "bangla",
        question: "এক বা একাধিক ধ্বনি মিলে কোনো নির্দিষ্ট অর্থ প্রকাশ করলে তাকে কী বলে?",
        options: ["বর্ণ", "শব্দ", "বাক্য", "ভাষা"],
        answer: "শব্দ"
    },
    {
        id: 5577, class: "5", subject: "bangla",
        question: "কতগুলো শব্দ সাজিয়ে মনের ভাব সম্পূর্ণ প্রকাশ করলে তাকে কী বলে?",
        options: ["ধ্বনি", "পদ", "বাক্য", "অনুচ্ছেদ"],
        answer: "বাক্য"
    },
    {
        id: 5578, class: "5", subject: "bangla",
        question: "একটি আদর্শ বা সার্থক বাক্যের কয়টি অংশ থাকে?",
        options: ["২টি (উদ্দেশ্য ও বিধেয়)", "৩টি", "৪টি", "৫টি"],
        answer: "২টি (উদ্দেশ্য ও বিধেয়)"
    },
    {
        id: 5579, class: "5", subject: "bangla",
        question: "বাক্যে যাকে উদ্দেশ্য করে কিছু বলা হয়, তাকে কী বলে?",
        options: ["বিধেয়", "উদ্দেশ্য", "ক্রিয়া", "বিশেষণ"],
        answer: "উদ্দেশ্য"
    },
    {
        id: 5580, class: "5", subject: "bangla",
        question: "বাক্যে ব্যবহৃত প্রতিটি অর্থবোধক শব্দকে এক একটি কী বলা হয়?",
        options: ["বর্ণ", "পদ", "বিভক্তি", "বচন"],
        answer: "পদ"
    },
    {
        id: 5581, class: "5", subject: "bangla",
        question: "পদ প্রধানত কত প্রকার?",
        options: ["৩ প্রকার", "৪ প্রকার", "৫ প্রকার", "৬ প্রকার"],
        answer: "৫ প্রকার"
    },
    {
        id: 5582, class: "5", subject: "bangla",
        question: "কোনো কিছুর নামকে (ব্যক্তি, বস্তু, স্থান) কোন পদ বলে?",
        options: ["বিশেষ্য (Noun)", "বিশেষণ", "সর্বনাম", "ক্রিয়া"],
        answer: "বিশেষ্য (Noun)"
    },
    {
        id: 5583, class: "5", subject: "bangla",
        question: ""রাসেল একটি ভালো ছেলে" — এই বাক্যে 'ভালো' কোন ধরণের পদ?",
        options: ["বিশেষ্য", "বিশেষণ (Adjective)", "সর্বনাম", "অব্যয়"],
        answer: "বিশেষণ (Adjective)"
    },{
        id: 5584, class: "5", subject: "bangla",
        question: "বিশেষ্য পদের পরিবর্তে যে পদ ব্যবহৃত হয়, তাকে কী বলে?",
        options: ["অব্যয় পদ", "ক্রিয়া পদ", "সর্বনাম পদ (Pronoun)", "বিশেষণ পদ"],
        answer: "সর্বনাম পদ (Pronoun)"
    },
    {
        id: 5585, class: "5", subject: "bangla",
        question: ""তিনি প্রতিদিন স্কুলে যান" — এখানে 'তিনি' কোন পদ?",
        options: ["বিশেষ্য", "সর্বনাম", "অব্যয়", "ক্রিয়া"],
        answer: "সর্বনাম"
    },
    {
        id: 5586, class: "5", subject: "bangla",
        question: "যে পদের দ্বারা কোনো কিছু করা, হওয়া বা খাওয়া বোঝায়, তাকে কী বলে?",
        options: ["ক্রিয়া পদ (Verb)", "বিশেষণ পদ", "অব্যয় পদ", "বিশেষ্য পদ"],
        answer: "ক্রিয়া পদ (Verb)"
    },
    {
        id: 5587, class: "5", subject: "bangla",
        question: "যে পদের কোনো পরিবর্তন বা ব্যয় হয় না, তাকে কী বলে?",
        options: ["বিশেষ্য পদ", "সর্বনাম পদ", "অব্যয় পদ (Conjunction)", "ক্রিয়া পদ"],
        answer: "অব্যয় পদ (Conjunction)"
    },
    {
        id: 5588, class: "5", subject: "bangla",
        question: ""সুমি এবং রুমি দুই বোন" — এই বাক্যে 'এবং' কোন ধরণের পদ?",
        options: ["বিশেষণ পদ", "অব্যয় পদ", "সর্বনাম পদ", "ক্রিয়া পদ"],
        answer: "অব্যয় পদ"
    },
    {
        id: 5589, class: "5", subject: "bangla",
        question: "যার দ্বারা কোনো ব্যক্তি বা বস্তুর সংখ্যা বোঝায়, তাকে ব্যাকরণে কী বলে?",
        options: ["লিঙ্গ", "বচন (Number)", "কারক", "পুরুষ"],
        answer: "বচন (Number)"
    },
    {
        id: 5590, class: "5", subject: "bangla",
        question: "বাংলায় বচন কত প্রকার?",
        options: ["২ প্রকার (একবচন ও বহুবচন)", "৩ প্রকার", "৪ প্রকার", "৫ প্রকার"],
        answer: "২ প্রকার (একবচন ও বহুবচন)"
    },
    {
        id: 5591, class: "5", subject: "bangla",
        question: "নিচের কোনটি বহুবচনের উদাহরণ?",
        options: ["বইটি", "পাখিগুলো", "কলমটি", "আমি"],
        answer: "পাখিগুলো"
    },
    {
        id: 5592, class: "5", subject: "bangla",
        question: "যে চিহ্ন বা শব্দ দ্বারা পুরুষ ও স্ত্রী জাতীয় ভেদ বোঝায়, তাকে কী বলে?",
        options: ["বচন", "পুরুষ", "লিঙ্গ (Gender)", "বিভক্তি"],
        answer: "লিঙ্গ (Gender)"
    },
    {
        id: 5593, class: "5", subject: "bangla",
        question: "লিঙ্গ প্রধানত কত প্রকার?",
        options: ["২ প্রকার", "৩ প্রকার", "৪ প্রকার", "৫ প্রকার"],
        answer: "৪ প্রকার"
    },
    {
        id: 5594, class: "5", subject: "bangla",
        question: "‘কবি’ শব্দের সঠিক স্ত্রীলিঙ্গ রূপ কোনটি?",
        options: ["মহিলা কবি", "নারী কবি", "মহাকবি", "মহিলা কবি / কায়িত্রী"],
        answer: "মহিলা কবি / কায়িত্রী"
    },
    {
        id: 5595, class: "5", subject: "bangla",
        question: "‘বিদ্বান’ শব্দের সঠিক স্ত্রীলিঙ্গ রূপ কোনটি?",
        options: ["বিদ্বানী", "বিদূষী", "মহিলা বিজ্ঞানী", "জ্ঞানী নারী"],
        answer: "বিদূষী"
    },
    {
        id: 5596, class: "5", subject: "bangla",
        question: "কোন শব্দের দ্বারা কাজ করার ব্যক্তি, শ্রোতা বা অনুপস্থিত ব্যক্তিকে বোঝায়?",
        options: ["বচন", "লিঙ্গ", "পুরুষ (Person)", "কারক"],
        answer: "পুরুষ (Person)"
    },
    {
        id: 5597, class: "5", subject: "bangla",
        question: "বাংলা ব্যাকরণে পুরুষ কত প্রকার?",
        options: ["২ প্রকার", "৩ প্রকার (উত্তম, মধ্যম ও নাম পুরুষ)", "৪ প্রকার", "৫ প্রকার"],
        answer: "৩ প্রকার (উত্তম, মধ্যম ও নাম পুরুষ)"
    },
    {
        id: 5598, class: "5", subject: "bangla",
        question: ""আমি, আমরা" — এগুলো কোন পুরুষের উদাহরণ?",
        options: ["উত্তম পুরুষ (First Person)", "মধ্যম পুরুষ", "নাম পুরুষ", "কোনোটিই নয়"],
        answer: "উত্তম পুরুষ (First Person)"
    },
    {
        id: 5599, class: "5", subject: "bangla",
        question: ""তুমি, তোমরা" — এগুলো কোন পুরুষের উদাহরণ?",
        options: ["উত্তম পুরুষ", "মধ্যম পুরুষ (Second Person)", "নাম পুরুষ", "অন্য পুরুষ"],
        answer: "মধ্যম পুরুষ (Second Person)"
    },
    {
        id: 5600, class: "5", subject: "bangla",
        question: ""সে, তারা, রাসেল" — এগুলো কোন পুরুষের উদাহরণ?",
        options: ["উত্তম পুরুষ", "মধ্যম পুরুষ", "নাম পুরুষ (Third Person)", "প্রধান পুরুষ"],
        answer: "নাম পুরুষ (Third Person)"
    }
];

// আপনার মূল ডাটাবেজ অ্যারে-তে এই প্রশ্নগুলো যুক্ত করার কমান্ড
if (typeof quizData !== 'undefined') {
    quizData.push(...class5BanglaQuestions);
}
