// Video Thumbnails
import videoThumbFb1 from '../assets/video_thumb_fb1.jpg';
import videoThumbFb2 from '../assets/video_thumb_fb2.jpg';
import videoThumbX1 from '../assets/video_thumb_x1.jpg';

// Core Gurukul Campus Images
import img1 from '../assets/img_8.jpeg';
import img2 from '../assets/img_2.jpeg';
import img3 from '../assets/img_3.jpeg';
import img4 from '../assets/img_4.jpeg';
import img5 from '../assets/img_5.jpeg';
import img6 from '../assets/img_6.jpeg';
import img7 from '../assets/img_7.png';
import img11_old from '../assets/11.jpg';

// Yajna & Havan Authentic Images
import yajnaImg9 from '../assets/img_9.jpeg';
import yajnaImg10 from '../assets/img_10.jpeg';
import yajnaImg11 from '../assets/img_11.jpeg';
import yajnaImg12 from '../assets/img_12.jpeg';

// Adani Computer Lab Authentic Images Folder
import labImg1 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.55 AM.jpeg';
import labImg2 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.56 AM (2).jpeg';
import labImg3 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.56 AM.jpeg';
import labImg4 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.57 AM (1).jpeg';
import labImg5 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.59 AM (3).jpeg';
import labImg6 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.01 AM (2).jpeg';
import labImg7 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.01 AM (3).jpeg';
import labImg8 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.01 AM.jpeg';
import labImg9 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.02 AM (1).jpeg';
import labImg10 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.02 AM (2).jpeg';
import labImg11 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.02 AM.jpeg';
import labImg12 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.04 AM.jpeg';
import labImg13 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.06 AM.jpeg';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'सभी (All)', label_en: 'All Photos & Videos' },
  { id: 'yajna', label: 'दैनिक देवयज्ञ एवं हवन (Yajna)', label_en: 'Yajna & Devayajna' },
  { id: 'videos', label: 'वीडियो (Videos)', label_en: 'Videos & Media' },
  { id: 'campus', label: 'गुरुकुल परिसर', label_en: 'Gurukul Campus' },
  { id: 'adani_lab', label: 'अडानी कंप्यूटर लैब', label_en: 'Adani Computer Lab' },
  { id: 'events', label: 'उत्सव एवं कार्यक्रम', label_en: 'Events & Mahotsav' },
];

export const GALLERY_VIDEOS = [
  {
    id: 'vid-1',
    title: "FROM GURUKUL TO COMPUTER LABS | अयोध्या गुरुकुल",
    title_en: "FROM GURUKUL TO COMPUTER LABS | Ayodhya Gurukul",
    category: "videos",
    isVideo: true,
    platform: "facebook",
    platformName: "Facebook",
    views: "1.9 लाख Views",
    views_en: "190K+ Views",
    videoUrl: "https://www.facebook.com/watch/?v=901193219360518",
    thumbnail: videoThumbFb1,
    fullImage: videoThumbFb1,
    caption: "Icons of India: अयोध्या गुरुकुल में स्थापित अत्याधुनिक कंप्यूटर लैब एवं तकनीकी शिक्षा पर विशेष रिपोर्ट।",
    caption_en: "Icons of India: Special report on the high-tech Adani Computer Lab and digital transformation at Ayodhya Gurukul."
  },
  {
    id: 'vid-2',
    title: "डिजिटल शिक्षा एवं गुरुकुल परंपरा | The CSR Journal",
    title_en: "Digital Education & Gurukul Heritage | The CSR Journal",
    category: "videos",
    isVideo: true,
    platform: "facebook",
    platformName: "Facebook",
    views: "61 हजार Views",
    views_en: "61K+ Views",
    videoUrl: "https://www.facebook.com/watch/?v=2162044871007812",
    thumbnail: videoThumbFb2,
    fullImage: videoThumbFb2,
    caption: "The CSR Journal: श्री निःशुल्क गुरुकुल महाविद्यालय के विद्यार्थी वैदिक संस्कृति के साथ कंप्यूटर तकनीक सीखते हुए।",
    caption_en: "The CSR Journal: Gurukul Brahmacharis mastering computer science alongside sacred Vedic traditions."
  },
  {
    id: 'vid-3',
    title: "गुरुकुल में आधुनिक कंप्यूटर शिक्षा पहल | X वीडियो",
    title_en: "Modern Computer Education in Gurukul | X Video",
    category: "videos",
    isVideo: true,
    platform: "x",
    platformName: "X (Twitter)",
    views: "12.4K Views",
    views_en: "12.4K Views",
    videoUrl: "https://x.com/VlKAS_PR0NAM0/status/2093287850519478283",
    thumbnail: videoThumbX1,
    fullImage: videoThumbX1,
    caption: "श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या में प्राचीन संस्कृति और आधुनिक डिजिटल ज्ञान का अद्भुत संगम।",
    caption_en: "Glimpse into the harmonious blend of ancient Vedic wisdom and digital literacy at Ayodhya Gurukul."
  }
];

export const GALLERY_ITEMS = [
  ...GALLERY_VIDEOS,

  // 1st Photo: Authentic Yajna
  {
    id: 'yajna-img-9',
    title: "गुरुकुल यज्ञशाला में दैनिक देवयज्ञ एवं अग्निहोत्र",
    title_en: "Daily Vedic Devayajna & Agnihotra at Gurukul Yajnashala",
    category: "yajna",
    categories: ["yajna", "events"],
    thumbnail: yajnaImg9,
    fullImage: yajnaImg9,
    caption: "प्रातः एवं सायं काल में वेद मंत्रोच्चार के साथ दैनिक देवयज्ञ में आहुति देते ब्रह्मचारी एवं यज्ञाचार्य।",
    caption_en: "Brahmacharis and Acharyas performing sacred Agnihotra and Vedic Havana oblations with Vedic mantras."
  },

  // Campus & Heritage
  {
    id: 'campus-1',
    title: "गुरुकुल मुख्य भवन एवं पावन प्रांगण",
    title_en: "Main Gurukul Campus & Historic Building",
    category: "campus",
    thumbnail: img2,
    fullImage: img2,
    caption: "श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या का ऐतिहासिक मुख्य भवन एवं हरा-भरा परिसर।",
    caption_en: "Historic main academic building and lush green campus of Shri Nishulk Gurukul Mahavidyalaya, Ayodhya."
  },
  {
    id: 'lab-1',
    title: "Adani Computer Lab — आधुनिक कंप्यूटर लैब",
    title_en: "Adani Computer Lab — Modern IT Facility",
    category: "adani_lab",
    thumbnail: labImg13,
    fullImage: labImg13,
    caption: "अडानी फाउंडेशन के सहयोग से स्थापित आधुनिक कंप्यूटर लैब का विहंगम दृश्य।",
    caption_en: "Panoramic view of the state-of-the-art computer lab supported by the Adani Foundation."
  },
  {
    id: 'events-51-annual',
    title: "51वाँ भव्य वार्षिकोत्सव एवं चतुर्वेद महायज्ञ",
    title_en: "51st Grand Annual Celebration & 4-Veda Maha Yajna",
    category: "events",
    categories: ["events", "yajna", "campus"],
    thumbnail: img7,
    fullImage: img7,
    caption: "श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या का 51वाँ भव्य वार्षिकोत्सव एवं चतुर्वेद महायज्ञ में आहुति देते यज्ञाचार्य एवं ब्रह्मचारी।",
    caption_en: "Acharyas and Brahmacharis performing sacred Vedic oblations during the 51st Annual Mahotsav."
  },

  // 2nd Yajna Image (around 5th photo)
  {
    id: 'yajna-img-10',
    title: "वैदिक मंत्रोच्चार एवं सामूहिक हवन अनुष्ठान",
    title_en: "Collective Vedic Mantras & Havana Rituals",
    category: "yajna",
    categories: ["yajna", "events"],
    thumbnail: yajnaImg10,
    fullImage: yajnaImg10,
    caption: "गुरुकुल की पावन यज्ञशाला में देवयज्ञ करते हुए विद्यार्थी, पर्यावरण शुद्धि एवं विश्व शांति हेतु आहुति।",
    caption_en: "Students chanting Vedic suktas and performing collective oblation for universal peace."
  },

  {
    id: 'campus-2',
    title: "गुरुकुल परिसर में ब्रह्मचारी विद्यार्थी",
    title_en: "Disciplined Brahmachari Students",
    category: "campus",
    thumbnail: img6,
    fullImage: img6,
    caption: "गुरुकुल प्रांगण में अनुशासित ब्रह्मचारी छात्र वैदिक मर्यादा एवं संस्कारों का पालन करते हुए।",
    caption_en: "Young students embracing traditional values, self-discipline, and Vedic living in the campus courtyard."
  },
  {
    id: 'lab-2',
    title: "कंप्यूटर लैब में अध्ययनरत विद्यार्थी",
    title_en: "Students Learning at Adani Computer Lab",
    category: "campus",
    categories: ["campus", "adani_lab"],
    thumbnail: img4,
    fullImage: img4,
    caption: "वैदिक परिधान में ब्रह्मचारी छात्र कंप्यूटर पर टाइपिंग, प्रोग्रामिंग व शोध कार्य करते हुए।",
    caption_en: "Students in traditional Vedic attire mastering computer typing, software, and research."
  },
  {
    id: 'lab-3',
    title: "अत्याधुनिक कंप्यूटर वर्कस्टेशन एवं ट्रेनिंग",
    title_en: "High-Tech Workstations & Practical Training",
    category: "campus",
    categories: ["campus", "adani_lab"],
    thumbnail: img1,
    fullImage: img1,
    caption: "हाई-स्पीड सिस्टम्स और आधुनिक सॉफ्टवेयर से सुसज्जित कंप्यूटर लैब।",
    caption_en: "Computer workstations equipped with high-speed internet and modern learning tools."
  },

  // 3rd Yajna Image (in mid section)
  {
    id: 'yajna-img-11',
    title: "गुरुकुल यज्ञ मंडप एवं पावन आहुति दृश्य",
    title_en: "Gurukul Yajna Mandap & Sacred Fire Offering",
    category: "yajna",
    categories: ["yajna", "events"],
    thumbnail: yajnaImg11,
    fullImage: yajnaImg11,
    caption: "ऋषि परंपरा के अनुसार वैदिक विधिविधान से संपन्न दैनिक हवन एवं आहुति का दृश्य।",
    caption_en: "Auspicious Havana rituals performed strictly according to ancient Vedic traditions."
  },

  {
    id: 'campus-3',
    title: "गुरुकुल सभा एवं वार्षिकोत्सव मंडप",
    title_en: "Gurukul Congregation & Celebration Pavilion",
    category: "events",
    categories: ["events", "campus"],
    thumbnail: img11_old,
    fullImage: img11_old,
    caption: "गुरुकुल परिसर में आयोजित सांस्कृतिक उत्सव, सभा एवं वैदिक प्रवचन कार्यक्रम।",
    caption_en: "Spiritual gatherings, Vedic discourses, and cultural programs at the Gurukul pavilion."
  },
  {
    id: 'lab-4',
    title: "ब्रह्मचारियों का डिजिटल व कोडिंग प्रशिक्षण",
    title_en: "Digital Literacy & Coding for Brahmacharis",
    category: "campus",
    categories: ["campus", "adani_lab"],
    thumbnail: img3,
    fullImage: img3,
    caption: "संस्कृत ग्रंथों के डिजिटल अध्ययन के साथ 21वीं सदी के तकनीकी कौशल सीखते छात्र।",
    caption_en: "Equipping youth with modern digital skills alongside ancient philosophical wisdom."
  },
  {
    id: 'lab-7',
    title: "आधुनिक कंप्यूटर डेस्क एवं उपकरण",
    category: "adani_lab",
    thumbnail: labImg2,
    fullImage: labImg2,
    caption: "अत्याधुनिक मॉनिटर, कीबोर्ड और आरामदायक वातावरण में अध्ययनरत विद्यार्थी।"
  },
  {
    id: 'lab-8',
    title: "सॉफ्टवेयर एवं टाइपिंग अभ्यास सत्र",
    category: "adani_lab",
    thumbnail: labImg3,
    fullImage: labImg3,
    caption: "ब्रह्मचारी विद्यार्थी कंप्यूटर पर वर्ड प्रोसेसिंग एवं डिजिटल टूल्स का अभ्यास करते हुए।"
  },

  // 4th Yajna Image (in latter section)
  {
    id: 'yajna-img-12',
    title: "यज्ञशाला में समिधा एवं आहुति अर्पण",
    title_en: "Samidha & Ghee Offerings in Sacred Yajna",
    category: "yajna",
    categories: ["yajna", "events"],
    thumbnail: yajnaImg12,
    fullImage: yajnaImg12,
    caption: "यज्ञ वेदी के सम्मुख ब्रह्मचारी छात्र नित्य देवयज्ञ एवं वैदिक संस्कारों का अभ्यास करते हुए।",
    caption_en: "Devout students learning and practicing daily Agnihotra and Vedic rituals in the ashram."
  },

  {
    id: 'lab-5',
    title: "डिजिटल क्लासरूम एवं ई-लर्निंग सत्र",
    title_en: "Digital Classroom & E-Learning Sessions",
    category: "campus",
    categories: ["campus", "adani_lab"],
    thumbnail: img5,
    fullImage: img5,
    caption: "कंप्यूटर लैब में आयोजित विशेष डिजिटल साक्षरता एवं कंप्यूटर बुनियादी ज्ञान कक्षाएं।",
    caption_en: "Dedicated digital literacy and basic computing workshops held inside the lab."
  },
  {
    id: 'lab-6',
    title: "कंप्यूटर लैब वर्कस्टेशन एवं स्क्रीन दृश्य",
    category: "adani_lab",
    thumbnail: labImg1,
    fullImage: labImg1,
    caption: "कंप्यूटर लैब में प्रत्येक विद्यार्थी के लिए समर्पित कंप्यूटर एवं इंटरनेट कनेक्टिविटी।"
  },
  {
    id: 'lab-9',
    title: "संस्कृत एवं हिंदी डिजिटल टाइपिंग",
    category: "events",
    categories: ["events", "campus", "adani_lab"],
    thumbnail: labImg4,
    fullImage: labImg4,
    caption: "देवनागरी यूनिकोड टाइपिंग एवं कंप्यूटर सॉफ्टवेयर का व्यावहारिक प्रशिक्षण।"
  },
  {
    id: 'lab-10',
    title: "ई-लाइब्रेरी एवं ऑनलाइन रिसर्च",
    category: "events",
    categories: ["events", "adani_lab"],
    thumbnail: labImg5,
    fullImage: labImg5,
    caption: "इंटरनेट के माध्यम से वैदिक पाण्डुलिपियों और आधुनिक ग्रंथों का डिजिटल अन्वेषण।"
  },
  {
    id: 'lab-11',
    title: "कंप्यूटर लैब सुसज्जित आंतरिक सज्जा",
    category: "events",
    categories: ["events", "adani_lab"],
    thumbnail: labImg6,
    fullImage: labImg6,
    caption: "अडानी कंप्यूटर लैब का सुव्यवस्थित, शांत और प्रेरणादायी वातावरण।"
  },
  {
    id: 'lab-12',
    title: "ब्रह्मचारी विद्यार्थी कंप्यूटर सीखते हुए",
    category: "adani_lab",
    thumbnail: labImg7,
    fullImage: labImg7,
    caption: "परंपरा और तकनीक के अद्भुत संगम का साक्षात उदाहरण — अयोध्या गुरुकुल।"
  },
  {
    id: 'lab-13',
    title: "कंप्यूटर लैब वर्कस्पेस एवं सिस्टम्स",
    category: "events",
    categories: ["events", "campus", "adani_lab"],
    thumbnail: labImg8,
    fullImage: labImg8,
    caption: "छात्रों के बौद्धिक विकास के लिए स्थापित आधुनिकतम डिजिटल अवसंरचना।"
  },
  {
    id: 'lab-14',
    title: "डिजिटल साक्षरता एवं कंप्यूटर कक्षाएं",
    category: "adani_lab",
    thumbnail: labImg9,
    fullImage: labImg9,
    caption: "कक्षा 6 से आचार्य तक के सभी छात्रों के लिए नियमित कंप्यूटर प्रशिक्षण।"
  },
  {
    id: 'lab-15',
    title: "समूह अध्ययन एवं प्रैक्टिकल प्रोजेक्ट्स",
    category: "adani_lab",
    thumbnail: labImg10,
    fullImage: labImg10,
    caption: "विद्यार्थी मिलकर कंप्यूटर प्रोजेक्ट्स और डिजिटल असाइनमेंट्स पूरे करते हुए।"
  },
  {
    id: 'lab-16',
    title: "आधुनिक कंप्यूटर लैब वातावरण",
    category: "adani_lab",
    thumbnail: labImg11,
    fullImage: labImg11,
    caption: "अडानी फाउंडेशन द्वारा प्रदत्त अत्याधुनिक कंप्यूटर लैब का एक और सुंदर दृश्य।"
  },
  {
    id: 'lab-17',
    title: "भविष्य की ओर अग्रसर गुरुकुल विद्यार्थी",
    category: "adani_lab",
    thumbnail: labImg12,
    fullImage: labImg12,
    caption: "वैदिक संस्कारों के साथ डिजिटल युग में आत्मनिर्भर बनते गुरुकुल के ब्रह्मचारी।"
  }
];
