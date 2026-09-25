import React, { useState } from 'react';
import { 
  Heart, 
  Copy, 
  Check, 
  QrCode, 
  Building, 
  ShieldCheck, 
  FileText, 
  Phone, 
  Send,
  CheckCircle2,
  BookOpen,
  Utensils,
  Flame,
  Home as HomeIcon,
  Mail,
  Globe,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import CallToAction from '../components/home/CallToAction';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../hooks/useToast';
import bannerBgImg from '../assets/img_8.jpeg';
import qrCodeImg from '../assets/gurukul_qr.png';
import founderImg from '../assets/IMG_1968.jpg';

export const Donate = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { showSuccess, showError } = useToast();

  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    donorName: '',
    phone: '',
    email: '',
    panNumber: '',
    amount: '',
    sevaType: 'सामान्य / ऐच्छिक सहयोग',
    utrNumber: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const bankDetails = {
    accountName: "श्री निःशुल्क गुरुकुल महाविद्यालय",
    bankName: "Punjab National Bank (पंजाब नेशनल बैंक)",
    branch: isEn ? "Ayodhya Branch, Uttar Pradesh" : "अयोध्या शाखा, उत्तर प्रदेश",
    accountNumber: "18722191013209",
    ifscCode: "PUNB0187210",
    accountType: isEn ? "Gurukul Official Trust Account" : "गुरुकुल आधिकारिक खाता",
    upiId: "9071235505m@pnb"
  };

  const nivedakList = [
    { role: isEn ? "Chancellor" : "कुलपति", name: "विनय कुमार मानूजा" },
    { role: isEn ? "President" : "अध्यक्ष", name: "राम कुमार दास" },
    { role: isEn ? "Chief Superintendent" : "मुख्याधिष्ठाता", name: "अंजनी कुमार गर्ग" },
    { role: isEn ? "Treasurer" : "कोषाध्यक्ष", name: "नूतन गर्ग" },
    { role: isEn ? "Secretary" : "मंत्री", name: "उमा दयाल मिश्र", phone: "9838551096" },
    { role: isEn ? "Principal" : "प्राचार्य", name: "आचार्य वीरेन्द्र कुमार पाण्डेय", phone: "9838356595" }
  ];

  const sevaPillars = [
    {
      icon: BookOpen,
      title: isEn ? "Brahmachari Education" : "ब्रह्मचारियों का शिक्षण",
      desc: isEn ? "Vedic, Sanskrit and Modern Computer Education" : "वेद-वेदांग, व्याकरण, साहित्य एवं आधुनिक कंप्यूटर शिक्षा"
    },
    {
      icon: Utensils,
      title: isEn ? "Satvik Meals / Annakshetra" : "भोजन व्यवस्था",
      desc: isEn ? "Nutritious & pure satvik meals for resident students" : "आश्रम में अध्ययनरत सभी विद्यार्थियों हेतु पौष्टिक व सात्विक भोजन"
    },
    {
      icon: Sparkles,
      title: isEn ? "Gaushala / Cow Care" : "गौ सेवा",
      desc: isEn ? "Service and nourishment of indigenous cows" : "गुरुकुल गौशाला में देशी गायों की सेवा, संरक्षण व संवर्धन"
    },
    {
      icon: Flame,
      title: isEn ? "Yajna Shala" : "यज्ञ शाला",
      desc: isEn ? "Daily morning & evening Vedic Agnihotra" : "नित्य प्रातः एवं सायं दैनिक देवयज्ञ व वैदिक हवन अनुष्ठान"
    },
    {
      icon: HomeIcon,
      title: isEn ? "Hostel & Living" : "आवासीय व्यवस्था",
      desc: isEn ? "Free residential hostel & living facilities" : "ब्रह्मचारियों के निवास हेतु पूर्णतः निःशुल्क आवासीय प्रबंध"
    }
  ];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showSuccess(isEn ? `${fieldName} copied to clipboard!` : `${fieldName} कॉपी हो गया!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.donorName || !formData.phone || !formData.amount) {
      showError(isEn ? 'Please fill in mandatory fields.' : 'कृपया आवश्यक विवरण भरें।');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showSuccess(isEn ? 'Donation intimation received! Thank you for your noble support.' : 'दान की सूचना प्राप्त हो गई है! आपके पुनीत सहयोग हेतु सादर धन्यवाद।');
    }, 800);
  };

  const openWhatsApp = () => {
    const msg = `नमस्ते, मैंने श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या हेतु दान/सहयोग किया है।\nनाम: ${formData.donorName || 'दानदाता'}\nमोबाइल: ${formData.phone || ''}\nराशि: ₹${formData.amount || ''}\nसेवा प्रकार: ${formData.sevaType}\nUTR/Ref: ${formData.utrNumber || ''}`;
    window.open(`https://wa.me/919838356595?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <SEO
        title={isEn ? "Donate & Support — Shri Nishulk Gurukul Mahavidyalaya" : "दान एवं सहयोग — श्री निःशुल्क गुरुकुल महाविद्यालय, रामपथ, अयोध्या धाम"}
        description={isEn 
          ? "Official donation portal for Shri Nishulk Gurukul Mahavidyalaya Ayodhya. Support education, meals, gaushala, yajnashala and residential facilities."
          : "श्री निःशुल्क गुरुकुल महाविद्यालय, रामपथ, अयोध्या धाम में ब्रह्मचारियों के शिक्षण, भोजन, गौ सेवा, यज्ञ शाला एवं आवासीय व्यवस्था हेतु दान-सहयोग करें।"}
      />

      {/* Hero Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt="श्री निःशुल्क गुरुकुल महाविद्यालय दान सहयोग"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(36,27,21,0.88) 0%, rgba(36,27,21,0.78) 50%, rgba(36,27,21,0.96) 100%)',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gurukul-saffron/25 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-2 font-serif text-[#FFCD33]">
            ओ३म्
          </div>

          <p className="text-xs sm:text-sm font-serif italic text-[#E5D7C0] tracking-wide mb-3">
            अष्टाचक्रा नवद्वारा देवानाम् पुरो अयोध्या ।। (अथर्ववेद)
          </p>

          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-none text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 bg-transparent text-[#F8F4EA] border border-[#C68A32] shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#FFCD33] fill-current" />
            <span>{isEn ? "Vidya Daan is the Supreme Charity" : "विद्यादानं महत्पुण्यम् — ऋषि परम्परा का संवर्धन"}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 drop-shadow-md leading-snug">
            श्री निःशुल्क गुरुकुल महाविद्यालय, रामपथ, अयोध्या धाम
          </h1>

          <p className="text-xs sm:text-sm text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium mb-6">
            {isEn
              ? "Since 1925, providing 100% free residential education, meals, Gaushala, and Vedic culture on the sacred banks of Saryu in Ayodhya Dham."
              : "पुण्य सलिला सरयू के पावन तट पर स्थित मर्यादा पुरुषोत्तम श्री राम की जन्मस्थली अयोध्या में 100 वर्षों से संचालित सनातन संस्कृति का पोषक आदर्श शिक्षा केन्द्र।"}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#bank-details"
              className="px-6 py-2.5 rounded text-xs sm:text-sm font-bold bg-[#C96B25] hover:bg-[#B35818] text-white transition-all shadow-md flex items-center gap-2"
            >
              <QrCode className="w-4 h-4" />
              <span>{isEn ? "QR & Bank Details" : "क्यू.आर. एवं बैंक खाता"}</span>
            </a>
            <a
              href="#donation-form"
              className="px-6 py-2.5 rounded text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-[#F8F4EA] border border-[#C68A32]/60 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{isEn ? "Donation Receipt Form" : "दान सूचना / रसीद फॉर्म"}</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Main Official Poster Narrative Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#C68A32]/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Header with Founder Photo & Shloka Card */}
            <div className="bg-[#FAF8F5] border-2 border-[#C68A32]/50 p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C96B25] via-[#FFCD33] to-[#C96B25]" />
              
              {/* Founder Avatar & Invocation */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-2xl sm:text-3xl font-serif text-[#C96B25] font-bold mb-3">
                  ओ३म्
                </div>

                <div className="relative mb-3">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-3 border-[#C96B25] shadow-md overflow-hidden bg-white p-1">
                    <img 
                      src={founderImg} 
                      alt="स्वामी त्यागानन्द सरस्वती - संस्थापक"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-0.5 mb-2">
                  <span className="text-sm sm:text-base font-serif font-bold text-[#241B15] block">
                    स्वामी त्यागानन्द सरस्वती
                  </span>
                  <span className="text-xs text-[#C96B25] font-semibold tracking-wider uppercase block">
                    संस्थापक
                  </span>
                </div>

                <div className="inline-block bg-[#F8F4EA] px-4 py-1.5 border border-[#C68A32]/40 rounded text-xs sm:text-sm font-serif italic text-[#844310] font-medium mt-1">
                  अष्टाचक्रा नवद्वारा देवानाम् पुरो अयोध्या ।। (अथर्ववेद)
                </div>
              </div>

              {/* Institution Title */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#9E2A1A] tracking-tight">
                  श्री निःशुल्क गुरुकुल महाविद्यालय, रामपथ, अयोध्या धाम
                </h2>
                <div className="h-0.5 w-24 bg-[#C68A32] mx-auto mt-2" />
              </div>

              {/* Exact Text from Official Poster */}
              <div className="bg-white p-5 sm:p-7 border border-[#C68A32]/30 shadow-inner rounded leading-relaxed text-center sm:text-justify text-xs sm:text-sm sm:leading-loose text-[#241B15] font-medium">
                <p>
                  पुण्य सलिला सरयू के पावन तट पर स्थित मर्यादा पुरुषोत्तम श्री राम की जन्मस्थली अयोध्या में स्वामी त्यागानन्द जी द्वारा स्थापित वेद विद्या के संवाहक, प्राचीन ऋषिकुलों (गुरुकुलों) की परम्परा का आदर्श शिक्षा केन्द्र, 100 वर्ष से पुरातन सनातन संस्कृति का पोषक <strong className="text-[#C96B25] font-bold">श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या</strong> अपने स्थापना काल वर्ष 1925 से अनवरत विकास पथ पर अग्रसर है। वैदिक ज्ञान के जिज्ञासु ब्रह्मचारी ही संस्था की धरोहर है जिनका सर्वांगीण (शारीरिक, बौद्धिक, चारित्रिक) विकास ही संस्था का एकमात्र लक्ष्य है।
                </p>
              </div>

              {/* 5 Core Seva Schemes */}
              <div className="mt-8">
                <h3 className="text-center text-xs sm:text-sm font-bold text-[#C96B25] uppercase tracking-wider mb-4">
                  सहयोग के मुख्य प्रकल्प (Key Seva Pillars)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {sevaPillars.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-white p-3 border border-[#C68A32]/25 text-center flex flex-col items-center justify-start hover:border-[#C96B25] transition-all">
                        <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#C96B25] flex items-center justify-center mb-2">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-[#241B15] mb-1 leading-tight">{item.title}</h4>
                        <p className="text-[10px] text-gray-500 leading-snug">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bank Account & QR Code Section (As in Poster) */}
      <section id="bank-details" className="py-16 sm:py-20 bg-[#F8F4EA] border-b border-[#C68A32]/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs sm:text-sm font-bold text-[#C96B25] tracking-widest uppercase mb-2 block">
                {isEn ? "Direct Bank Transfer & UPI QR" : "सीधा बैंक ट्रांसफर एवं आधिकारिक क्यू.आर. कोड"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#241B15] mb-2">
                {isEn ? "Official Bank Account Details" : "गुरुकुल का आधिकारिक बैंक खाता"}
              </h2>
              <div className="h-0.5 w-20 bg-[#C68A32] mx-auto mb-3" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
              {/* QR Code Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 border-2 border-[#C68A32]/50 shadow-md flex flex-col items-center justify-center text-center">
                <div className="mb-2">
                  <span className="text-xs font-bold text-[#C96B25] uppercase tracking-wider">
                    {isEn ? "Scan QR Code to Donate" : "दान हेतु क्यू.आर. कोड स्कैन करें"}
                  </span>
                </div>

                {/* QR Visual */}
                <div className="p-2 bg-white border-2 border-[#C68A32]/40 rounded-lg shadow-md mb-3 flex flex-col items-center max-w-[210px]">
                  <img
                    src={qrCodeImg}
                    alt="Punjab National Bank QR Code - Shri Nishulk Gurukul Mahavidyalaya"
                    className="w-full h-auto object-contain rounded"
                  />
                </div>

                {/* Exact UPI ID beneath QR */}
                <div className="w-full bg-[#FAF8F5] p-2.5 border border-[#C68A32]/40 rounded mb-3 flex items-center justify-between gap-2 shadow-sm">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider block">
                      UPI ID
                    </span>
                    <span className="font-mono font-bold text-xs sm:text-sm text-[#C96B25] select-all">
                      {bankDetails.upiId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(bankDetails.upiId, "UPI ID")}
                    className="px-2.5 py-1 bg-[#C96B25] hover:bg-[#B35818] text-white text-[11px] font-semibold rounded flex items-center gap-1 transition-colors shrink-0"
                    title="Copy UPI ID"
                  >
                    {copiedField === "UPI ID" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedField === "UPI ID" ? (isEn ? "Copied" : "कॉपी हुआ") : (isEn ? "Copy" : "कॉपी")}</span>
                  </button>
                </div>

                <div className="text-xs text-gray-600 space-y-0.5 mb-4">
                  <p className="font-bold text-gray-800 text-xs">
                    Punjab National Bank (PNB)
                  </p>
                  <p className="text-[11px] text-gray-500 font-mono">
                    A/c: 18722191013209 | IFSC: PUNB0187210
                  </p>
                  <p className="text-[10px] text-green-700 font-semibold pt-1">
                    Google Pay • PhonePe • Paytm • BHIM • UPI
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(bankDetails.accountNumber, isEn ? "Account Number" : "खाता संख्या")}
                  className="w-full py-2.5 px-4 bg-[#241B15] hover:bg-[#382B21] text-white text-xs font-bold rounded transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Copy className="w-3.5 h-3.5 text-[#FFCD33]" />
                  <span>{isEn ? "Copy Account Number" : "खाता संख्या कॉपी करें"}</span>
                </button>
              </div>

              {/* Bank Details Card */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 border-2 border-[#C68A32]/50 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-5 border-b border-gray-100">
                    <Building className="w-6 h-6 text-[#C96B25]" />
                    <div>
                      <h3 className="font-bold text-base text-[#241B15]">
                        {bankDetails.bankName}
                      </h3>
                      <p className="text-xs text-gray-500">{bankDetails.branch}</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {/* Account Name */}
                    <div className="bg-[#FAF8F5] p-3 border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                          {isEn ? "Account Name" : "खाता धारक का नाम"}
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-[#241B15]">
                          {bankDetails.accountName}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(bankDetails.accountName, isEn ? "Account Name" : "खाता नाम")}
                        className="p-1.5 text-gray-500 hover:text-[#C96B25] transition-colors"
                        title={isEn ? "Copy Name" : "नाम कॉपी करें"}
                      >
                        {copiedField === (isEn ? "Account Name" : "खाता नाम") ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Account Number */}
                    <div className="bg-[#FAF8F5] p-3 border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                          {isEn ? "Account Number" : "खाता संख्या (A/C No.)"}
                        </span>
                        <span className="font-mono font-bold text-sm sm:text-base text-[#C96B25] tracking-wider">
                          {bankDetails.accountNumber}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(bankDetails.accountNumber, isEn ? "Account Number" : "खाता संख्या")}
                        className="px-2.5 py-1.5 bg-[#C96B25] text-white text-xs font-semibold rounded flex items-center gap-1 hover:bg-[#B35818] transition-colors"
                      >
                        {copiedField === (isEn ? "Account Number" : "खाता संख्या") ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === (isEn ? "Account Number" : "खाता संख्या") ? (isEn ? "Copied" : "कॉपी हुआ") : (isEn ? "Copy" : "कॉपी")}</span>
                      </button>
                    </div>

                    {/* IFSC Code */}
                    <div className="bg-[#FAF8F5] p-3 border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                          {isEn ? "IFSC Code" : "आईएफएससी कोड (IFSC)"}
                        </span>
                        <span className="font-mono font-bold text-sm sm:text-base text-[#241B15] tracking-wider">
                          {bankDetails.ifscCode}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(bankDetails.ifscCode, "IFSC Code")}
                        className="px-2.5 py-1.5 bg-gray-200 text-gray-800 text-xs font-semibold rounded flex items-center gap-1 hover:bg-gray-300 transition-colors"
                      >
                        {copiedField === "IFSC Code" ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === "IFSC Code" ? (isEn ? "Copied" : "कॉपी हुआ") : (isEn ? "Copy" : "कॉपी")}</span>
                      </button>
                    </div>

                    {/* UPI ID */}
                    <div className="bg-[#FAF8F5] p-3 border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                          {isEn ? "UPI ID / VPA" : "यूपीआई आईडी (UPI ID)"}
                        </span>
                        <span className="font-mono font-bold text-xs sm:text-sm text-[#241B15] tracking-wider">
                          {bankDetails.upiId}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(bankDetails.upiId, "UPI ID")}
                        className="px-2.5 py-1.5 bg-gray-200 text-gray-800 text-xs font-semibold rounded flex items-center gap-1 hover:bg-gray-300 transition-colors"
                      >
                        {copiedField === "UPI ID" ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === "UPI ID" ? (isEn ? "Copied" : "कॉपी हुआ") : (isEn ? "Copy" : "कॉपी")}</span>
                      </button>
                    </div>

                    {/* Bank Name */}
                    <div className="bg-[#FAF8F5] p-3 border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                          {isEn ? "Bank" : "बैंक का नाम"}
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-[#241B15]">
                          Punjab National Bank
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                  <span>{isEn ? "Verified Gurukul Official Account" : "गुरुकुल का आधिकारिक एवं सत्यापित बैंक खाता"}</span>
                </div>
              </div>
            </div>

            {/* Official Appeal Highlight Box from Poster */}
            <div className="bg-[#9E2A1A] text-white p-5 sm:p-6 text-center shadow-lg border-2 border-[#FFCD33] rounded-none">
              <p className="text-sm sm:text-base font-serif font-bold leading-relaxed">
                समस्त दानी महानुभावों से निवेदन है कि ब्रह्मचारियों के शिक्षण, भोजन, गौ सेवा, यज्ञ शाला एवं आवासीय व्यवस्था हेतु ऊपर दिये क्यू.आर. कोड पर दान देकर पुण्य के भागी बनें !
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Nivedak Mandal Section (As per Poster) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#C68A32]/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs sm:text-sm font-bold text-[#C96B25] tracking-widest uppercase mb-1 block">
                -: निवेदक :-
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#241B15]">
                प्रबंध समिति एवं निवेदक मण्डल
              </h2>
              <div className="h-0.5 w-16 bg-[#C68A32] mx-auto mt-2" />
            </div>

            {/* Office Bearers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {nivedakList.map((item, idx) => (
                <div key={idx} className="bg-[#FAF8F5] p-3 sm:p-4 border border-[#C68A32]/30 text-center shadow-sm hover:border-[#C96B25] transition-all">
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-[#241B15] mb-0.5">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#C96B25] font-semibold block">
                    {item.role}
                  </span>
                  {item.phone && (
                    <a 
                      href={`tel:${item.phone}`}
                      className="inline-flex items-center gap-1 text-[11px] text-gray-600 hover:text-[#C96B25] mt-1 font-mono font-medium"
                    >
                      <Phone className="w-3 h-3 text-[#C96B25]" />
                      <span>{item.phone}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Office In-charge (कार्यालय प्रभारी गण) */}
            <div className="bg-[#FFF9EE] p-4 border border-[#C68A32]/40 text-center shadow-sm mb-6">
              <div className="text-xs sm:text-sm font-serif font-bold text-[#241B15] flex flex-wrap items-center justify-center gap-2">
                <span className="text-[#C96B25]">कार्यालय प्रभारी गण :-</span>
                <span>देवव्रत मिश्र एवं अरुण मित्र शास्त्री</span>
                <span className="text-gray-600 font-mono text-xs">(मो. 9952950029, 9648409250)</span>
              </div>
            </div>

            {/* Contact Details from Poster */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-700 bg-gray-50 p-3 border border-gray-200">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#C96B25]" />
                <span className="font-semibold">वेब साइट:</span>
                <span className="font-mono">gurukulayodhya.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C96B25]" />
                <span className="font-semibold">E-mail:</span>
                <a href="mailto:gurukulayodhya@gmail.com" className="font-mono text-gray-800 hover:text-[#C96B25]">
                  gurukulayodhya@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Donation Intimation & Receipt Form */}
      <section id="donation-form" className="py-16 sm:py-20 bg-[#FAF8F5]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs sm:text-sm font-bold text-[#C96B25] tracking-widest uppercase mb-1 block">
                {isEn ? "Intimate Your Donation" : "दान रसीद एवं सूचना प्रपत्र"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#241B15] mb-2">
                {isEn ? "Send Donation Details for Receipt" : "दान उपरांत विवरण यहाँ साझा करें"}
              </h2>
              <div className="h-0.5 w-16 bg-[#C68A32] mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                {isEn
                  ? "After transferring amount, please submit this form or message us on WhatsApp so we can issue your official receipt."
                  : "सहयोग राशि भेजने के उपरांत रसीद प्राप्ति हेतु कृपया यह फॉर्म भरें अथवा सीधे WhatsApp पर विवरण भेजें।"}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-10 border border-[#C68A32]/30 shadow-md">
              {isSuccess ? (
                <div className="text-center py-8 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#241B15]">
                    {isEn ? "Thank You for Your Generous Support!" : "सहयोग हेतु आपका हार्दिक धन्यवाद एवं साधुवाद!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    {isEn
                      ? "Your donation information has been received. Our ashram office will verify and send the official receipt to your contact number."
                      : "आपकी दान सूचना प्राप्त हो गई है। गुरुकुल कार्यालय द्वारा सत्यापन उपरांत शीघ्र ही आधिकारिक रसीद आपके संपर्क सूत्र पर प्रेषित कर दी जाएगी।"}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{isEn ? "Connect on WhatsApp" : "व्हाट्सएप पर रसीद मांगें"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          donorName: '',
                          phone: '',
                          email: '',
                          panNumber: '',
                          amount: '',
                          sevaType: 'सामान्य / ऐच्छिक सहयोग',
                          utrNumber: '',
                          address: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold rounded"
                    >
                      {isEn ? "Submit Another Response" : "दूसरा विवरण भरें"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                        {isEn ? "Donor Full Name *" : "दानदाता का पूरा नाम *"}
                      </label>
                      <input
                        type="text"
                        name="donorName"
                        value={formData.donorName}
                        onChange={handleInputChange}
                        required
                        placeholder={isEn ? "e.g. Ramesh Chandra Sharma" : "उदा. रमेश चंद्र शर्मा"}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                        {isEn ? "Mobile / WhatsApp Number *" : "मोबाइल / व्हाट्सएप नंबर *"}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder={isEn ? "e.g. 9876543210" : "उदा. 9876543210"}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                        {isEn ? "Email Address" : "ईमेल पता (यदि उपलब्ध हो)"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={isEn ? "name@example.com" : "name@example.com"}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                        {isEn ? "Donated Amount (₹) *" : "सहयोग राशि (₹) *"}
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        placeholder={isEn ? "e.g. 5100" : "उदा. 5100"}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                        {isEn ? "Seva Purpose / Scheme" : "सेवा का उद्देश्य / प्रकल्प"}
                      </label>
                      <select
                        name="sevaType"
                        value={formData.sevaType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                      >
                        <option value="सामान्य / ऐच्छिक गुरुकुल सहयोग">सामान्य / ऐच्छिक गुरुकुल सहयोग</option>
                        <option value="ब्रह्मचारियों के शिक्षण हेतु">ब्रह्मचारियों के शिक्षण हेतु</option>
                        <option value="भोजन व्यवस्था / अन्नक्षेत्र हेतु">भोजन व्यवस्था / अन्नक्षेत्र हेतु</option>
                        <option value="गौ सेवा / गौशाला संवर्धन">गौ सेवा / गौशाला संवर्धन</option>
                        <option value="यज्ञ शाला एवं देवयज्ञ हेतु">यज्ञ शाला एवं देवयज्ञ हेतु</option>
                        <option value="आवासीय व्यवस्था एवं आश्रम निर्माण">आवासीय व्यवस्था एवं आश्रम निर्माण</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                        {isEn ? "UTR / Transaction Ref No. (Optional)" : "ट्रांजेक्शन / UTR नंबर (यदि उपलब्ध हो)"}
                      </label>
                      <input
                        type="text"
                        name="utrNumber"
                        value={formData.utrNumber}
                        onChange={handleInputChange}
                        placeholder={isEn ? "e.g. 329482910485" : "उदा. 329482910485"}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                      {isEn ? "Full Postal Address / City (For Receipt Dispatch)" : "पूरा डाक पता / शहर (रसीद भेजने हेतु)"}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder={isEn ? "House No, Street, City, State, Pincode" : "मकान सं., मोहल्ला, शहर, राज्य, पिनकोड"}
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#241B15] mb-1.5">
                      {isEn ? "Special Note / Occasion (e.g., Birthday, Anniversary, Ancestor Memory)" : "विशेष टिप्पणी / संकल्प (उदा. जन्मदिवस, वर्षगांठ, पितृ-स्मृति)"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder={isEn ? "Mention any specific date or intention for this charity..." : "किसी विशिष्ट तिथि अथवा संकल्प का उल्लेख करें..."}
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-300 focus:border-[#C96B25] focus:ring-1 focus:ring-[#C96B25] text-xs sm:text-sm outline-none transition resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#C96B25] hover:bg-[#B35818] text-white text-xs sm:text-sm font-bold rounded shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? (isEn ? "Submitting..." : "प्रेषित किया जा रहा है...") : (isEn ? "Submit Intimation" : "दान सूचना भेजें")}</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold rounded shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{isEn ? "Send via WhatsApp" : "व्हाट्सएप पर भेजें"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CallToAction />
    </>
  );
};

export default Donate;
