const root = document.documentElement;
const burger = document.getElementById('burger');
const navMenu = document.getElementById('primary-navigation');
const languageSwitch = document.getElementById('language-switch');
const themePicker = document.getElementById('theme-picker');
const typingEl = document.getElementById('typing');
const yearEl = document.getElementById('year');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let reduceMotion = reduceMotionQuery.matches;

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.brand': 'NIRMAL R',
    'hero.title': 'BUILDING<br>SOFTWARE<br>WITH DESIGN IN MIND',
    'hero.subtitle': 'Second-year Computer Science and Design Engineering student at SNS College of Technology, blending coding, design thinking, and creativity to build meaningful digital experiences.',
    'hero.tag': 'B.E. CSD • DESIGN THINKING • DEVELOPMENT • INNOVATION',
    'hero.heading': 'I BUILD SOLUTIONS THAT FEEL HUMAN.',
    'hero.description': 'I’m Nirmal, a Computer Science and Design student with a passion for programming, UI/UX, and creative problem-solving. I enjoy turning ideas into useful digital experiences through code, design, and collaboration.',
    'hero.ctaPrimary': 'Let’s Collaborate',
    'hero.ctaSecondary': 'Explore My Work',
    'scene.label': 'Interactive portfolio',
    'explorer.title': 'Choose a page',
    'explorer.subtitle': 'Where would you like to go?',
    'explorer.description': 'Open any page directly — each one appears in its own 3D space.',
    'portal.about.title': 'About me',
    'portal.about.small': 'My story &amp; approach',
    'portal.skills.title': 'Skills',
    'portal.skills.small': 'What I’m learning',
    'portal.education.title': 'Education',
    'portal.education.small': 'Learning journey',
    'portal.projects.title': 'Projects',
    'portal.projects.small': 'Things I’ve built',
    'portal.certs.title': 'Certificates',
    'portal.certs.small': 'Continuous learning',
    'portal.experience.title': 'Experience',
    'portal.experience.small': 'Teams &amp; challenges',
    'portal.contact.title': 'Contact',
    'portal.contact.small': 'Start a conversation',
    'about.eyebrow': 'About me',
    'about.title': 'A curious builder with a designer’s eye.',
    'about.text': 'I care about the small decisions that make technology feel clear, useful and human.',
    'about.card.student': 'Student',
    'about.card.role': 'Developer in progress',
    'about.large': 'I am a second-year Computer Science and Design Engineering student at SNS College of Technology, building practical skills in programming, design thinking, and creative technology while exploring how people interact with digital products.',
    'about.feature1.title': 'Design thinker',
    'about.feature1.text': 'I approach problems with a user-first mindset, combining usability, clarity, and visual value.',
    'about.feature2.title': 'Collaborative builder',
    'about.feature2.text': 'I enjoy working in teams, sharing ideas, and turning concepts into outcomes that are both useful and engaging.',
    'about.feature3.title': 'Curious learner',
    'about.feature3.text': 'I’m growing through internships, hackathons, and hands-on projects in coding, graphic design, and digital experiences.',
    'skills.eyebrow': 'Skills',
    'skills.title': 'A growing creative toolkit.',
    'skills.text': 'These circles come to life when you open this page.',
    'skills.extra': 'Design Thinking',
    'skills.extra2': 'UI/UX',
    'skills.extra3': 'Social media marketing',
    'skills.extra4': 'Problem-solving',
    'skills.extra5': 'Presentation',
    'education.eyebrow': 'Education',
    'education.title': 'Learning with intent.',
    'education.text': 'Every stage adds another layer to how I solve problems and create.',
    'education.card1.year': '2025 — Present',
    'education.card1.school': 'SNS Institutions',
    'education.card1.degree': 'Bachelor of Engineering — Computer Science & Design',
    'education.card1.gpa': 'CGPA 7.75',
    'education.card2.year': '2024 — 2025',
    'education.card2.school': 'Maharishi Vidya Mandir',
    'education.card2.degree': 'Higher Secondary (+2)',
    'education.card2.gpa': '80%',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Things I’m bringing to life.',
    'projects.text': 'A focused look at work that joins clean interface design with useful functionality.',
    'projects.card.title': 'Smart Resume Platform',
    'projects.card.text': 'Interactive resume site that combines ATS-friendly structure with a polished, animated UI. It dynamically highlights skills and is easy to share through GitHub Pages.',
    'projects.card.live': 'View live',
    'projects.card.code': 'Code',
    'certs.eyebrow': 'Certificates',
    'certs.title': 'Learning, documented.',
    'certs.text': 'Credentials that reflect both technical foundations and human-centred thinking.',
    'certs.card1.title': 'C & C++',
    'certs.card1.text': 'Strong fundamentals in structured programming and data structures.',
    'certs.card2.title': 'IBM Enterprise Design Thinking Practitioner',
    'certs.card2.text': 'Human-centred design, iteration and stakeholder alignment.',
    'certs.card3.title': 'Create Your LLM-Powered App Without Coding!',
    'certs.card3.text': 'Simplilearn course on low-code AI apps, prompt design and deployment.',
    'experience.eyebrow': 'Experience',
    'experience.title': 'Learning by doing, together.',
    'experience.text': 'Projects, internships and hackathons have helped turn theory into momentum.',
    'experience.card1.role': 'Internship',
    'experience.card1.company': 'InAmigos',
    'experience.card1.title': 'Graphic design & social media marketing',
    'experience.card1.text': 'Produced visuals and campaigns that improved engagement, while collaborating with marketing to create consistent brand stories.',
    'experience.card2.role': 'Hackathon',
    'experience.card2.company': 'Fluid Hackathon',
    'experience.card2.text': 'Built and pitched a prototype under time pressure, focusing on usability and clarity.',
    'experience.card3.role': 'Hackathon',
    'experience.card3.company': 'AlgoRhythm26',
    'experience.card3.title': '“Where Logic Meets Rhythm”',
    'experience.card3.text': 'Explored algorithmic thinking blended with creative problem-solving in a team setting.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Have an idea? <span class="gradient-text">Let’s make it real.</span>',
    'contact.text': 'I’m always happy to connect over collaborative projects, creative experiments or opportunities to learn.',
    'contact.email': 'Email me',
    'contact.phone': 'Call me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.email.cta': 'Start a conversation',
    'contact.phone.cta': 'Reach out',
    'contact.linkedin.cta': 'Connect',
    'contact.github.cta': 'See my code'
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'परिचय',
    'nav.skills': 'कौशल',
    'nav.education': 'शिक्षा',
    'nav.projects': 'प्रोजेक्ट',
    'nav.certificates': 'प्रमाणपत्र',
    'nav.experience': 'अनुभव',
    'nav.contact': 'संपर्क',
    'hero.brand': 'निरमल आर',
    'hero.title': 'आवाज़ में<br>योजना बनाना',
    'hero.subtitle': 'कंप्यूटर साइंस और डिज़ाइन छात्र, जो रचनात्मकता और प्रौद्योगिकी को मिलाकर विचारशील डिजिटल अनुभव बनाता है।',
    'hero.tag': 'बी.ई. सीएसडी • डिज़ाइन • डेवलपमेंट • इनोवेशन',
    'hero.heading': 'मैं ऐसे समाधान बनाता हूँ जो इंसान को महसूस हों।',
    'hero.description': 'मैं निरमल हूँ, एक कंप्यूटर साइंस और डिज़ाइन विद्यार्थी, जो विचारों को सुंदर इंटरफेस, उपयोगी प्रोडक्ट और लोगों से जुड़ने वाले अनुभवों में बदलता हूँ।',
    'hero.ctaPrimary': 'सहयोग करें',
    'hero.ctaSecondary': 'मेरे काम देखें',
    'scene.label': 'इंटरैक्टिव पोर्टफोलियो',
    'explorer.title': 'पेज चुनें',
    'explorer.subtitle': 'आप कहाँ जाना चाहते हैं?',
    'explorer.description': 'किसी भी पेज को सीधे खोलें — हर पेज अपनी 3D जगह में दिखाई देता है।',
    'portal.about.title': 'मेरे बारे में',
    'portal.about.small': 'मेरा सफर &amp; दृष्टिकोण',
    'portal.skills.title': 'कौशल',
    'portal.skills.small': 'मैं क्या सीख रहा हूँ',
    'portal.education.title': 'शिक्षा',
    'portal.education.small': 'सीखने की यात्रा',
    'portal.projects.title': 'प्रोजेक्ट',
    'portal.projects.small': 'मैंने जो बनाया',
    'portal.certs.title': 'प्रमाणपत्र',
    'portal.certs.small': 'लगातार सीखना',
    'portal.experience.title': 'अनुभव',
    'portal.experience.small': 'टीम &amp; चुनौतियाँ',
    'portal.contact.title': 'संपर्क',
    'portal.contact.small': 'बात शुरू करें',
    'about.eyebrow': 'मेरे बारे में',
    'about.title': 'एक जिज्ञासु निर्माता, जिसका नजरिया डिज़ाइन में है।',
    'about.text': 'मैं उन छोटी-छोटी बातों पर ध्यान देता हूँ जो तकनीक को स्पष्ट, उपयोगी और इंसानी बनाती हैं।',
    'about.card.student': 'विद्यार्थी',
    'about.card.role': 'डेवलपर बनने की यात्रा',
    'about.large': 'मैं SNS कॉलेज ऑफ टेक्नोलॉजी में कंप्यूटर साइंस एंड डिज़ाइन इंजीनियरिंग का द्वितीय वर्ष का छात्र हूँ। प्रोग्रामिंग, डिज़ाइन थिंकिंग और रचनात्मक तकनीक में कौशल विकसित कर रहा हूँ।',
    'about.feature1.title': 'डिज़ाइन थिंकर्स',
    'about.feature1.text': 'मैं उपयोगकर्ता-केंद्रित सोच से समस्याओं को समझता हूँ और उपयोगिता, स्पष्टता और दृश्य मूल्य को एक साथ रखता हूँ।',
    'about.feature2.title': 'सहयोगी बिल्डर',
    'about.feature2.text': 'मैं टीमों के साथ काम करना पसंद करता हूँ और विचारों को उपयोगी और आकर्षक परिणामों में बदलता हूँ।',
    'about.feature3.title': 'जिज्ञासु सीखने वाला',
    'about.feature3.text': 'मैं इंटर्नशिप, हैकाथॉन और प्रोजेक्ट के माध्यम से कोडिंग, ग्राफिक डिज़ाइन और डिजिटल अनुभवों में सीख रहा हूँ।',
    'skills.eyebrow': 'कौशल',
    'skills.title': 'एक बढ़ता हुआ रचनात्मक उपकरणों का सेट।',
    'skills.text': 'इस पेज को खोलते ही ये सर्कल जीवंत हो जाते हैं।',
    'skills.extra': 'डिज़ाइन थिंकिंग',
    'skills.extra2': 'यूआई/यूएक्स',
    'skills.extra3': 'सोशल मीडिया मार्केटिंग',
    'skills.extra4': 'समस्या समाधान',
    'skills.extra5': 'प्रस्तुति',
    'education.eyebrow': 'शिक्षा',
    'education.title': 'सावधानी से सीखना।',
    'education.text': 'हर कदम मेरे समस्या समाधान और सृजन की क्षमता को और मजबूत बनाता है।',
    'education.card1.year': '2025 — वर्तमान',
    'education.card1.school': 'एसएनएस इंस्टीट्यूशन्स',
    'education.card1.degree': 'बैचलर ऑफ इंजीनियरिंग — कंप्यूटर साइंस एंड डिज़ाइन',
    'education.card1.gpa': 'सीजीपीए 7.75',
    'education.card2.year': '2024 — 2025',
    'education.card2.school': 'महारिशि विद्या मंदिर',
    'education.card2.degree': 'हायर सेकेंडरी (+2)',
    'education.card2.gpa': '80%',
    'projects.eyebrow': 'प्रोजेक्ट',
    'projects.title': 'मैं जो चीज़ें जीवित कर रहा हूँ।',
    'projects.text': 'साफ़ डिज़ाइन और उपयोगी कार्यक्षमता को जोड़ने वाले कामों का एक फोकस्ड नज़ारा।',
    'projects.card.title': 'स्मार्ट रेज़्यूमे प्लेटफ़ॉर्म',
    'projects.card.text': 'इंटरैक्टिव रिज़्यूमे साइट जो ATS-फ्रेंडली संरचना और सुंदर एनीमेटेड UI को जोड़ती है।',
    'projects.card.live': 'लाइव देखें',
    'projects.card.code': 'कोड',
    'certs.eyebrow': 'प्रमाणपत्र',
    'certs.title': 'सीखा गया, दर्ज है।',
    'certs.text': 'ऐसे क्रेडेंशियल जो तकनीकी नींव और मानव-केंद्रित सोच दोनों को दर्शाते हैं।',
    'certs.card1.title': 'सी एंड सी++',
    'certs.card1.text': 'स्ट्रक्चर्ड प्रोग्रामिंग और डेटा स्ट्रक्चर की मजबूत नींव।',
    'certs.card2.title': 'IBM एंटरप्राइज डिज़ाइन थिंकिंग प्रैक्टिशनर',
    'certs.card2.text': 'मानव-केंद्रित डिज़ाइन, पुनरावर्तन और स्टेकहोल्डर संरेखण।',
    'certs.card3.title': 'Create Your LLM-Powered App Without Coding!',
    'certs.card3.text': 'लो-कोड AI ऐप्स, प्रॉम्प्ट डिज़ाइन और डिप्लॉयमेंट पर Simplilearn कोर्स।',
    'experience.eyebrow': 'अनुभव',
    'experience.title': 'एक साथ सीखना और बनाना।',
    'experience.text': 'प्रोजेक्ट, इंटर्नशिप और हैकाथॉन ने सिद्धांत को गति दी है।',
    'experience.card1.role': 'इंटर्नशिप',
    'experience.card1.company': 'InAmigos',
    'experience.card1.title': 'ग्राफिक डिज़ाइन और सोशल मीडिया मार्केटिंग',
    'experience.card1.text': 'दृश्य और अभियानों के माध्यम से जुड़ाव को बढ़ाने में योगदान दिया, साथ ही ब्रांड कहानी को सुसंगत बनाने में सहयोग किया।',
    'experience.card2.role': 'हैकाथॉन',
    'experience.card2.company': 'Fluid Hackathon',
    'experience.card2.text': 'समय की कमी में प्रोटोटाइप तैयार किया और उपयोगिता पर ध्यान देकर pitching की।',
    'experience.card3.role': 'हैकाथॉन',
    'experience.card3.company': 'AlgoRhythm26',
    'experience.card3.title': '“Where Logic Meets Rhythm”',
    'experience.card3.text': 'टीम के साथ एल्गोरिदमिक सोच और रचनात्मक समस्या समाधान को मिलाकर काम किया।',
    'contact.eyebrow': 'संपर्क',
    'contact.title': 'कोई विचार है? <span class="gradient-text">आइए इसे सच बनाएं।</span>',
    'contact.text': 'मैं सहयोगी प्रोजेक्ट, रचनात्मक प्रयोग या सीखने के अवसरों के लिए हमेशा तैयार हूँ।',
    'contact.email': 'ईमेल करें',
    'contact.phone': 'फोन करें',
    'contact.linkedin': 'लिंक्डइन',
    'contact.github': 'गिटहब',
    'contact.email.cta': 'बात शुरू करें',
    'contact.phone.cta': 'संपर्क करें',
    'contact.linkedin.cta': 'कनेक्ट करें',
    'contact.github.cta': 'मेरे कोड देखें'
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.about': 'என்னைப் பற்றி',
    'nav.skills': 'திறன்கள்',
    'nav.education': 'கல்வி',
    'nav.projects': 'திட்டங்கள்',
    'nav.certificates': 'சான்றிதழ்கள்',
    'nav.experience': 'அனுபவம்',
    'nav.contact': 'தொடர்பு',
    'hero.brand': 'நிர்மல் ஆர்',
    'hero.title': 'சிந்தனைகளை<br>செயலாக்குதல்',
    'hero.subtitle': 'கணினி அறிவியல் மற்றும் வடிவமைப்பு மாணவர், படைப்பாற்றல் மற்றும் தொழில்நுட்பத்தை இணைத்து சிந்தனைமிக்க டிஜிட்டல் அனுபவங்களை உருவாக்குகிறார்.',
    'hero.tag': 'பி.இ. சி.எஸ்.டி • டிசைன் • டெவலப்ப்மெண்ட் • கண்டுபிடிப்பு',
    'hero.heading': 'மனிதர்களுடன் இணைந்த தீர்வுகளை நான் வடிவமைக்கிறேன்.',
    'hero.description': 'நான் நிர்மல், கணினி அறிவியல் மற்றும் வடிவமைப்பு மாணவன். யோசனைகளை அழகான இடைமுகங்கள், பயனுள்ள தயாரிப்புகள் மற்றும் மக்களை இணைக்கும் அனுபவங்களாக மாற்றுகிறேன்.',
    'hero.ctaPrimary': 'கூட்டாக உருவாக்குவோம்',
    'hero.ctaSecondary': 'என் பணியைப் பார்க்கவும்',
    'scene.label': 'இன்டராக்டிவ் போர்ட்ஃபோலியோ',
    'explorer.title': 'ஒரு பக்கத்தை தேர்ந்தெடுக்கவும்',
    'explorer.subtitle': 'நீங்கள் எங்கே செல்ல விரும்புகிறீர்கள்?',
    'explorer.description': 'எந்தப் பக்கத்தையும் நேரடியாக திறக்கலாம் — ஒவ்வொன்றும் அதனுடைய 3D இடத்தில் தெரியும்.',
    'portal.about.title': 'என்னைப் பற்றி',
    'portal.about.small': 'என் கதை &amp; அணுகுமுறை',
    'portal.skills.title': 'திறன்கள்',
    'portal.skills.small': 'நான் எதை கற்றுக்கொண்டு இருக்கிறேன்',
    'portal.education.title': 'கல்வி',
    'portal.education.small': 'கற்றல் பயணம்',
    'portal.projects.title': 'திட்டங்கள்',
    'portal.projects.small': 'நான் உருவாக்கியவை',
    'portal.certs.title': 'சான்றிதழ்கள்',
    'portal.certs.small': 'தொடர்ந்து கற்றல்',
    'portal.experience.title': 'அனுபவம்',
    'portal.experience.small': 'குழுக்கள் &amp; சவால்கள்',
    'portal.contact.title': 'தொடர்பு',
    'portal.contact.small': 'செயலுடன் ஆரம்பிக்கலாம்',
    'about.eyebrow': 'என்னைப் பற்றி',
    'about.title': 'ஒரு ஆர்வமுள்ள கட்டமைப்பாளர், வடிவமைப்பின் பார்வையுடன்.',
    'about.text': 'தொழில்நுட்பத்தை தெளிவாகவும் பயனுள்ளதாகவும் மனிதநேயமாகவும் மாற்றும் சிறிய முடிவுகளுக்கு நான் முக்கியத்துவம் தருகிறேன்.',
    'about.card.student': 'மாணவர்',
    'about.card.role': 'டெவலப்பராக வளர்ச்சி',
    'about.large': 'நான் SNS கல்லூரியில் கணினி அறிவியல் மற்றும் வடிவமைப்பு பொறியியலில் இரண்டாம் ஆண்டு மாணவன். நிரலாக்கம், வடிவமைப்பு சிந்தனை மற்றும் படைப்பு தொழில்நுட்பத்தில் திறன்களை வளர்த்துக் கொண்டு வருகிறேன்.',
    'about.feature1.title': 'டிசைன் தீட்டர்',
    'about.feature1.text': 'பயனர் முதல் சிந்தனையுடன் சிக்கல்களை அணுகுகிறேன். பயன்பாடு, தெளிவு மற்றும் காட்சி மதிப்பு அனைத்தையும் இணைக்கிறேன்.',
    'about.feature2.title': 'கூட்டு உருவாக்குநர்',
    'about.feature2.text': 'குழுக்களுடன் வேலை செய்வதில் நான் மகிழ்ச்சி அடைகிறேன். யோசனைகளை பயனுள்ள மற்றும் கவர்ச்சிகரமான முடிவுகளாக மாற்றுகிறேன்.',
    'about.feature3.title': 'ஆர்வமுள்ள கற்றல்',
    'about.feature3.text': 'இன்டர்ன்ஷிப், ஹேகாதான் மற்றும் திட்டங்கள் மூலம் நான் குறியீட்டு வடிவமைப்பு, கிராபிக் டிசைன், டிஜிட்டல் அனுபவங்களில் கற்றுக்கொண்டு வருகிறேன்.',
    'skills.eyebrow': 'திறன்கள்',
    'skills.title': 'வளர்ந்து வரும் படைப்பு கருவிகள்.',
    'skills.text': 'இந்தப் பக்கத்தை திறந்தவுடன் இந்த வட்டங்கள் உயிர் பெறும்.',
    'skills.extra': 'டிசைன் திங்கிங்',
    'skills.extra2': 'UI/UX',
    'skills.extra3': 'சமூக ஊடக சந்தைப்படுத்தல்',
    'skills.extra4': 'சிக்கல் தீர்ப்பு',
    'skills.extra5': 'விளக்கக்காட்சி',
    'education.eyebrow': 'கல்வி',
    'education.title': 'நோக்கத்துடன் கற்றல்.',
    'education.text': 'ஒவ்வொரு நிலையும் என் சிக்கல் தீர்ப்பையும் படைப்பையும் மேலும் வலுப்படுத்துகிறது.',
    'education.card1.year': '2025 — தற்போது',
    'education.card1.school': 'எஸ்.என்.எஸ் இன்ஸ்டிடியூஷன்ஸ்',
    'education.card1.degree': 'பி.இ. — கணினி அறிவியல் & வடிவமைப்பு',
    'education.card1.gpa': 'CGPA 7.75',
    'education.card2.year': '2024 — 2025',
    'education.card2.school': 'மகரிஷி வித்யா மந்திர்',
    'education.card2.degree': 'உயர் நிலை (+2)',
    'education.card2.gpa': '80%',
    'projects.eyebrow': 'திட்டங்கள்',
    'projects.title': 'நான் உயிர்ப்பிக்கிறேன்.',
    'projects.text': 'சுத்தமான வடிவமைப்பு மற்றும் பயனுள்ள செயல்பாட்டை இணைக்கும் பணிகளின் தேர்ந்தெடுக்கப்பட்ட காட்சி.',
    'projects.card.title': 'ஸ்மார்ட் ரெச்யூம் பிளாட்ஃபாரம்',
    'projects.card.text': 'ATS-நட்பு அமைப்பு மற்றும் சுத்தமான, அனிமேஷன் UI கொண்ட இடைமுகத் திட்டம்.',
    'projects.card.live': 'நேரடி பார்வை',
    'projects.card.code': 'கோட்',
    'certs.eyebrow': 'சான்றிதழ்கள்',
    'certs.title': 'கற்றல், ஆவணப்படுத்தப்பட்டுள்ளது.',
    'certs.text': 'தொழில்நுட்ப அடித்தளங்கள் மற்றும் மனிதமைய சிந்தனையை பிரதிபலிக்கும் சான்றிதழ்கள்.',
    'certs.card1.title': 'சி & சி++',
    'certs.card1.text': 'கட்டமைக்கப்பட்ட நிரலாக்கம் மற்றும் தரவு அமைப்புகளில் வலுவான அடித்தளம்.',
    'certs.card2.title': 'IBM Enterprise Design Thinking Practitioner',
    'certs.card2.text': 'மனிதமைய வடிவமைப்பு, மீண்டும் மீண்டும் சோதனை மற்றும் பங்குதாரர் ஒருங்கிணைப்பு.',
    'certs.card3.title': 'Create Your LLM-Powered App Without Coding!',
    'certs.card3.text': 'लो-கோடு AI பயன்பாடுகள், ப்ராம்ப்ட் டிசைன் மற்றும் டெப்ளாய்மென்ட் குறித்த Simplilearn பாடநெறி.',
    'experience.eyebrow': 'அனுபவம்',
    'experience.title': 'கூடவே கற்று, உருவாக்குதல்.',
    'experience.text': 'திட்டங்கள், இன்டர்ன்ஷிப், ஹேகாதான்கள் மூலம் கோட்பாடு வேகத்தை பெற்றது.',
    'experience.card1.role': 'இன்டர்ன்ஷிப்',
    'experience.card1.company': 'InAmigos',
    'experience.card1.title': 'கிராபிக் டிசைன் & சமூக ஊடக சந்தைப்படுத்தல்',
    'experience.card1.text': 'விழிப்புணர்வை அதிகரிக்கும் காட்சிகள் மற்றும் பிரச்சாரங்களை உருவாக்கி, மார்க்கெட்டிங் குழுவுடன் இணைந்து பிராண்டு கதையை சீராக வைத்தேன்.',
    'experience.card2.role': 'ஹேகாதான்',
    'experience.card2.company': 'Fluid Hackathon',
    'experience.card2.text': 'காலக்கெடுவில் புரோடோடைப் உருவாக்கி, பயன்பாட்டை மையமாக வைத்து பitches செய்தேன்.',
    'experience.card3.role': 'ஹேகாதான்',
    'experience.card3.company': 'AlgoRhythm26',
    'experience.card3.title': '“Where Logic Meets Rhythm”',
    'experience.card3.text': 'குழுப்பணியில் அல்காரிதம் சிந்தனை மற்றும் படைப்பு சிக்கல் தீர்ப்பை இணைத்துப் பணியாற்றினேன்.',
    'contact.eyebrow': 'தொடர்பு',
    'contact.title': 'ஒரு யோசனை இருக்கிறதா? <span class="gradient-text">அதை உண்மையாக்குவோம்.</span>',
    'contact.text': 'கூட்டு திட்டங்கள், படைப்பு பரிசோதனைகள் அல்லது கற்றுக்கொள்ளும் வாய்ப்புகளுக்கு நான் எப்போதும் தயாராக இருக்கிறேன்.',
    'contact.email': 'மின்னஞ்சல் அனுப்பு',
    'contact.phone': 'தொலைபேசி',
    'contact.linkedin': 'லிங்க்டின்',
    'contact.github': 'கிதப்',
    'contact.email.cta': 'உரையாடலைத் தொடங்குங்கள்',
    'contact.phone.cta': 'தொடர்பு கொள்ளுங்கள்',
    'contact.linkedin.cta': 'இணைக்கவும்',
    'contact.github.cta': 'என் கோட்களைப் பார்க்கவும்'
  }
};

function applyLanguage(lang) {
  const selected = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!selected[key]) return;
    el.innerHTML = selected[key];
  });
  document.documentElement.lang = lang;
}

if (languageSwitch) {
  languageSwitch.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
  });
}

const pages = [...document.querySelectorAll('.portfolio-page')];
const pageMap = new Map(pages.map((page) => [page.dataset.page, page]));
const pageLinks = [...document.querySelectorAll('[data-page-link]')];
const pageButtons = [...document.querySelectorAll('[data-open-page]')];
let activePage = 'home';
let pageFocusTimer;

// ---------- Anime.js enhancements ----------
const hasAnime = typeof anime !== 'undefined';

function animateNavOnLoad() {
  if (!hasAnime || reduceMotion) return;
  anime({
    targets: '.nav-bar .brand, .nav-bar .nav-links a, .nav-actions',
    translateY: [-10, 0],
    opacity: [0, 1],
    delay: anime.stagger(80),
    duration: 600,
    easing: 'easeOutQuad'
  });
}

function animateHomeVisual(pageId) {
  if (!hasAnime || reduceMotion) return;
  if (pageId !== 'home') return;

  anime.timeline({ easing: 'easeOutExpo' })
    .add({
      targets: '.home-copy',
      translateY: [24, 0],
      opacity: [0, 1],
      duration: 700
    })
    .add({
      targets: '.home-visual .orb-one',
      translateX: [-30, 0],
      opacity: [0, 1],
      duration: 900
    }, '-=500')
    .add({
      targets: '.home-visual .orb-two',
      translateX: [30, 0],
      opacity: [0, 1],
      duration: 900
    }, '-=800')
    .add({
      targets: '.profile-cube',
        rotate: [-12, 0],
        translateY: [40, 0],
      opacity: [0, 1],
      duration: 900
    }, '-=700');

  // entrance for portal cards
  anime({
    targets: '.portal-card',
    translateY: [18, 0],
    scale: [0.96, 1],
    opacity: [0, 1],
    delay: anime.stagger(70),
    duration: 700,
    easing: 'easeOutBack'
  });

  // portal card hover
  document.querySelectorAll('.portal-card').forEach((card) => {
    if (card._portalBound) return;
    card._portalBound = true;
    card.addEventListener('mouseenter', () => anime({ targets: card, scale: 1.03, duration: 260, easing: 'easeOutQuad' }));
    card.addEventListener('mouseleave', () => anime({ targets: card, scale: 1, duration: 380, easing: 'easeOutElastic' }));
  });

  anime({
    targets: '.float-note',
      translateY: [0, -12],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
      duration: 2800,
    delay: anime.stagger(200)
  });
}

  function animateProjects(pageId) {
    if (!hasAnime || reduceMotion) return;
    if (pageId !== 'projects') return;

    anime.timeline({ easing: 'easeOutCubic' })
      .add({
        targets: '.project-showcase',
        translateY: [24, 0],
        opacity: [0, 1],
        duration: 700
      })
      .add({
        targets: '.project-showcase .project-visual, .project-showcase .project-details',
        translateX: [-8, 0],
        opacity: [0, 1],
        delay: anime.stagger(80),
        duration: 600
      }, '-=400');

    // hover micro-interactions
    document.querySelectorAll('.project-showcase').forEach((card) => {
      if (card._animeBound) return;
      card._animeBound = true;
      card.addEventListener('mouseenter', () => {
        anime({ targets: card, scale: 1.02, duration: 300, easing: 'easeOutQuad' });
      });
      card.addEventListener('mouseleave', () => {
        anime({ targets: card, scale: 1, duration: 400, easing: 'easeOutElastic' });
      });
    });
  }

// ---------- Theme ----------
function getStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

// ---------- Welcome overlay & resume check ----------
function setupWelcome() {
  const overlay = document.getElementById('welcome-overlay');
  const enter = document.getElementById('welcome-enter');
  const resume = document.getElementById('welcome-resume');
  const close = document.getElementById('welcome-close');
  if (!overlay) return;

  // Start resume availability check and show the welcome overlay on load
  checkResume();
  overlay.style.display = 'grid';
  // prevent background from scrolling while welcome is visible
  try { document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden'; } catch (e) {}

  function hideAndContinue(openResume) {
    overlay.style.display = 'none';
    try { localStorage.setItem('seenWelcome', 'true'); } catch (e) {}
    // After welcome, start app animations and show home
    runAfterWelcome();
    openPage('home', { updateHistory: true });
    if (openResume) {
      // Open manual resume and request print (download) by adding ?download=true
      const href = (document.getElementById('resume-link')?.href || 'assets/manual-resume.html') + '?download=true';
      window.open(href, '_blank');
    }
    // remove listeners
    document.removeEventListener('keydown', onAnyKey);
    overlay.removeEventListener('click', onAnyClick);
    try { document.documentElement.style.overflow = ''; document.body.style.overflow = ''; } catch (e) {}
  }

  function onAnyKey(e) { hideAndContinue(false); }
  function onAnyClick(e) { hideAndContinue(false); }

  enter?.addEventListener('click', () => hideAndContinue(false));
  close?.addEventListener('click', () => hideAndContinue(false));
  resume?.addEventListener('click', () => hideAndContinue(true));
  document.addEventListener('keydown', onAnyKey, { once: true });
  overlay.addEventListener('click', onAnyClick, { once: true });
}

function runAfterWelcome() {
  // Called after welcome overlay dismissed to start animations and interactive features
  checkResume();
  initialiseRouter();
  startTyping();
  animateNavOnLoad();
  animateHomeVisual(activePage);
  animatePageEntrance(activePage);
  setupTilt();
  startParticles();
}

async function checkResume() {
  const header = document.getElementById('resume-link');
  const footer = document.getElementById('resume-link-footer');
  const pdfPath = 'assets/resume.pdf';
  try {
    const resp = await fetch(pdfPath, { method: 'HEAD' });
    if (!resp.ok) throw new Error('no pdf');
    const size = resp.headers.get('content-length');
    if (!size || Number(size) < 200) throw new Error('small pdf');
    // ensure download attribute stays
    if (header) header.href = pdfPath;
    if (footer) footer.href = pdfPath;
  } catch (err) {
    // fallback to manual resume HTML
    if (header) {
      header.removeAttribute('download');
      header.href = 'assets/manual-resume.html';
    }
    if (footer) {
      footer.removeAttribute('download');
      footer.href = 'assets/manual-resume.html';
    }
  }
}

// ---------- Page entrance animation (general) ----------
function animatePageEntrance(pageId) {
  if (!hasAnime || reduceMotion) return;
  const target = pageMap.get(pageId);
  if (!target) return;
  const surface = target.querySelector('.page-surface') || target;
  anime.remove(surface);
  anime({
    targets: surface.children,
    translateY: [18, 0],
    opacity: [0, 1],
    delay: anime.stagger(80),
    duration: 700,
    easing: 'easeOutCubic'
  });
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Theme preference is optional when storage is unavailable.
  }
}

function applyTheme(themeName = 'midnight') {
  const validThemes = ['midnight', 'light', 'violet', 'emerald', 'slate'];
  const safeTheme = validThemes.includes(themeName) ? themeName : 'midnight';

  root.classList.remove('theme-midnight', 'theme-light', 'theme-violet', 'theme-emerald', 'theme-slate');
  root.classList.add(`theme-${safeTheme}`);

  if (themePicker) {
    themePicker.value = safeTheme;
  }

  saveTheme(safeTheme);
}

const savedTheme = getStoredTheme();
applyTheme(savedTheme || 'midnight');

themePicker?.addEventListener('change', (event) => {
  applyTheme(event.target.value);
});

// ---------- 3D page router ----------
function pageFromHash() {
  const hash = window.location.hash.slice(1);
  return pageMap.has(hash) ? hash : 'home';
}

function closeMenu(returnFocus = false) {
  navMenu?.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
  if (returnFocus) burger?.focus();
}

function syncNavigation(pageId) {
  pageLinks.forEach((link) => {
    if (link.closest('.nav-links') && link.dataset.pageLink === pageId) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function setPageAccessibility(target) {
  pages.forEach((page) => {
    const isTarget = page === target;
    page.hidden = !isTarget;
    page.inert = !isTarget;
    page.setAttribute('aria-hidden', String(!isTarget));
    page.classList.toggle('is-active', isTarget);
  });
}

function openPage(pageId, { updateHistory = false, shouldFocus = true } = {}) {
  const targetId = pageMap.has(pageId) ? pageId : 'home';
  const target = pageMap.get(targetId);
  const hasChanged = targetId !== activePage;
  window.clearTimeout(pageFocusTimer);

  // If page changes and we can animate, animate the current page out first
  const currentPage = pageMap.get(activePage);
  function finishNavigation() {
    setPageAccessibility(target);
    activePage = targetId;
    syncNavigation(targetId);
    closeMenu(false);

    if (updateHistory && window.location.hash !== `#${targetId}`) {
      history.pushState({ page: targetId }, '', `#${targetId}`);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    if (targetId === 'skills') animateSkills();
    if (hasAnime) animateHomeVisual(targetId);
    if (targetId === 'projects') animateProjects(targetId);
    animatePageEntrance(targetId);
  }

  if (hasChanged && hasAnime && !reduceMotion && currentPage) {
    try {
      const outSurface = currentPage.querySelector('.page-surface') || currentPage;
      anime({
        targets: outSurface.children,
        translateY: [0, -18],
        opacity: [1, 0],
        duration: 420,
        easing: 'easeInCubic',
        delay: anime.stagger(40),
        complete: finishNavigation
      });
    } catch (e) {
      finishNavigation();
    }
  } else {
    finishNavigation();
  }

  if (shouldFocus && hasChanged) {
    pageFocusTimer = window.setTimeout(() => {
      if (activePage === targetId && !target.hidden) target.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 60);
  }
}

function initialiseRouter() {
  const initialPage = pageFromHash();
  activePage = initialPage;
  const target = pageMap.get(initialPage);
  setPageAccessibility(target);
  syncNavigation(initialPage);
  if (initialPage === 'skills') animateSkills();
}

pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openPage(link.dataset.pageLink, { updateHistory: true });
  });
});

pageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openPage(button.dataset.openPage, { updateHistory: true });
  });
});

window.addEventListener('popstate', () => openPage(pageFromHash(), { shouldFocus: true }));
window.addEventListener('hashchange', () => openPage(pageFromHash(), { shouldFocus: true }));

burger?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu?.classList.contains('open')) {
    closeMenu(true);
  }
});

document.addEventListener('click', (event) => {
  if (!navMenu?.classList.contains('open')) return;
  if (!navMenu.contains(event.target) && !burger?.contains(event.target)) closeMenu(false);
});

// ---------- Typing animation ----------
const roles = [
  'CS & Design Student',
  'Aspiring Software Developer',
  'Design Thinking Practitioner',
  'UI/UX Enthusiast'
];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;
let typingTimer;

function typeLoop() {
  if (!typingEl || reduceMotion) return;
  const role = roles[roleIndex];
  typingEl.textContent = role.slice(0, charIndex);

  if (typingForward) {
    if (charIndex < role.length) {
      charIndex += 1;
    } else {
      typingForward = false;
      typingTimer = window.setTimeout(typeLoop, 1300);
      return;
    }
  } else if (charIndex > 0) {
    charIndex -= 1;
  } else {
    typingForward = true;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  typingTimer = window.setTimeout(typeLoop, typingForward ? 72 : 32);
}

function startTyping() {
  window.clearTimeout(typingTimer);
  if (!typingEl) return;
  if (reduceMotion) {
    typingEl.textContent = roles[0];
    return;
  }
  roleIndex = 0;
  charIndex = 0;
  typingForward = true;
  typeLoop();
}

// ---------- Skill circles ----------
const skillCards = [...document.querySelectorAll('.skill-orbit')];
let skillAnimationFrame;

function drawSkill(card, value) {
  const boundedValue = Math.max(0, Math.min(100, Math.round(value)));
  card.style.setProperty('--skill-progress', `${(boundedValue / 100) * 360}deg`);
  const label = card.querySelector('.skill-value');
  if (label) label.textContent = `${boundedValue}%`;
  card.setAttribute('aria-label', `${card.dataset.skill}: ${boundedValue} percent`);
}

function animateSkills() {
  window.cancelAnimationFrame(skillAnimationFrame);
  if (hasAnime && !reduceMotion) {
    anime({
      targets: '.skill-orbit',
      scale: [0.92, 1],
      opacity: [0, 1],
      delay: anime.stagger(80),
      duration: 600,
      easing: 'easeOutBack'
    });
  }
  skillCards.forEach((card, index) => {
    const target = Number(card.dataset.target || 0);
    if (reduceMotion) {
      drawSkill(card, target);
      return;
    }

    drawSkill(card, 0);
    const delay = index * 90;
    const duration = 850;
    const start = performance.now() + delay;

    function frame(now) {
      if (activePage !== 'skills') return;
      if (now < start) {
        skillAnimationFrame = requestAnimationFrame(frame);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      drawSkill(card, target * eased);
      if (progress < 1) skillAnimationFrame = requestAnimationFrame(frame);
    }

    skillAnimationFrame = requestAnimationFrame(frame);
  });
}

// ---------- Pointer-driven depth ----------
let tiltInitialised = false;

function setupTilt() {
  if (tiltInitialised || reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
  tiltInitialised = true;

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 6).toFixed(2)}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

// ---------- Background particles ----------
const canvas = document.getElementById('bg-particles');
const ctx = canvas?.getContext('2d');
let particles = [];
let particleFrame;

function buildParticles(width, height) {
  const count = Math.min(76, Math.max(30, Math.round((width * height) / 23000)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.35 + 0.45,
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.24,
    opacity: Math.random() * 0.36 + 0.12,
    mint: Math.random() > 0.58
  }));
}

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  buildParticles(width, height);
}

function drawParticles() {
  if (!canvas || !ctx || reduceMotion) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  ctx.clearRect(0, 0, width, height);

  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    if (particle.x < -10 || particle.x > width + 10) particle.vx *= -1;
    if (particle.y < -10 || particle.y > height + 10) particle.vy *= -1;

    ctx.beginPath();
    ctx.fillStyle = particle.mint
      ? `rgba(94, 232, 196, ${particle.opacity})`
      : `rgba(140, 108, 255, ${particle.opacity})`;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });

  particleFrame = requestAnimationFrame(drawParticles);
}

function startParticles() {
  window.cancelAnimationFrame(particleFrame);
  if (!ctx) return;
  if (reduceMotion) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    return;
  }
  resizeCanvas();
  drawParticles();
}

const aiChatToggle = document.getElementById('ai-chat-toggle');
const aiChatClose = document.getElementById('ai-chat-close');
const aiChatPanel = document.getElementById('ai-chat-panel');
const aiChatMessages = document.getElementById('ai-chat-messages');
const aiChatForm = document.getElementById('ai-chat-form');
const aiChatInput = document.getElementById('ai-chat-input');

function appendAiMessage(text, sender = 'bot') {
  const wrap = document.createElement('div');
  wrap.className = `ai-message ${sender}`;
  wrap.textContent = text;
  aiChatMessages.appendChild(wrap);
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

async function sendAiMessage(message) {
  if (!message.trim()) return;

  appendAiMessage(message, 'user');
  aiChatInput.value = '';
  aiChatInput.disabled = true;
  aiChatForm.querySelector('button').disabled = true;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data?.error || 'Request failed.');
    appendAiMessage(data.reply || 'I’m here to help.', 'bot');
  } catch (error) {
    console.error(error);
    appendAiMessage('I’m having trouble reaching the AI service right now. Please try again in a moment.', 'bot');
  } finally {
    aiChatInput.disabled = false;
    aiChatForm.querySelector('button').disabled = false;
    aiChatInput.focus();
  }
}

if (aiChatToggle && aiChatPanel) {
  aiChatToggle.addEventListener('click', () => {
    const isHidden = aiChatPanel.classList.toggle('hidden');
    aiChatToggle.setAttribute('aria-expanded', String(!isHidden));
  });
}

if (aiChatClose && aiChatPanel) {
  aiChatClose.addEventListener('click', () => {
    aiChatPanel.classList.add('hidden');
    aiChatToggle?.setAttribute('aria-expanded', 'false');
  });
}

if (aiChatForm) {
  aiChatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendAiMessage(aiChatInput.value);
  });
}

window.addEventListener('resize', () => {
  if (!reduceMotion) resizeCanvas();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    window.cancelAnimationFrame(particleFrame);
  } else if (!reduceMotion) {
    drawParticles();
  }
});

function handleMotionChange(event) {
  reduceMotion = event.matches;
  startTyping();
  startParticles();
  if (!reduceMotion) setupTilt();
  if (activePage === 'skills') animateSkills();
}

if (reduceMotionQuery.addEventListener) {
  reduceMotionQuery.addEventListener('change', handleMotionChange);
}

// ---------- Start ----------
applyLanguage(languageSwitch?.value || 'en');
yearEl && (yearEl.textContent = new Date().getFullYear());
// Defer interactive startup until user dismisses welcome overlay
setupWelcome();
