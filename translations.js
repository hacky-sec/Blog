const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    aboutMe: "About Me",
    blog: "Blog",
    tagline: "Precision in Offensive Security",
    our: "Our",
    from: "From",
    the: "The",

    // Index/Home Page
    professionalPenetrationTesting: "Professional",
    penetrationTestingServices: "Penetration Testing Services",
    expertPenetrationTesting: "Expert penetration testing services with precision and expertise. Identify vulnerabilities before they become breaches.",
    getProfessionalConsultation: "Get Professional Consultation",
    ourServices: "Our Services",
    penetrationTesting: "Penetration Testing",
    vulnerabilityManagement: "Vulnerability Management",
    validationTesting: "Validation Testing",
    threatIntelligenceConsultancy: "Threat Intelligence Consultancy",
    whyChooseUs: "Why Choose Us?",
    whyChooseUsSubtitle: "Professional expertise meets cutting-edge security testing",
    expertiseDriven: "Expertise Driven",
    expertiseDrivenDesc: "With years of hands-on experience in penetration testing and cybersecurity, I bring deep technical knowledge and proven methodologies.",
    customSolutions: "Custom Solutions",
    customSolutionsDesc: "Every organization is unique. I tailor penetration testing and security solutions to your specific needs and risk profile.",
    proactiveApproach: "Proactive Approach",
    proactiveApproachDesc: "Identify vulnerabilities before attackers do. My thorough testing helps you stay ahead of emerging threats.",
    continuousSupport: "Continuous Support",
    continuousSupportDesc: "Beyond testing, I provide ongoing consultation and guidance to help you maintain a robust security posture.",
    methodology: "Methodology",
    methodologySubtitle: "A structured approach to security testing",
    reconnaisanceTitle: "Reconnaissance",
    reconnaisanceDesc: "Gather information about your systems, networks, and infrastructure to understand the attack surface.",
    scanningTitle: "Scanning",
    scanningDesc: "Identify active hosts, open ports, and services running on your systems.",
    enumerationTitle: "Enumeration",
    enumerationDesc: "Probe deeper to extract detailed information about users, shares, and potential vulnerabilities.",
    vulnerabilityAnalysisTitle: "Vulnerability Analysis",
    vulnerabilityAnalysisDesc: "Analyze findings to identify exploitable vulnerabilities and security weaknesses.",
    exploitationTitle: "Exploitation",
    exploitationDesc: "Demonstrate the impact of vulnerabilities to prove real-world security risks.",
    reportingTitle: "Reporting",
    reportingDesc: "Provide comprehensive reports with findings, remediation recommendations, and executive summaries.",

    // Services Page
    ourServicesTitle: "Our Services",
    ourServicesSubtitle: "Comprehensive penetration testing solutions tailored to your security needs. I identify vulnerabilities before they become breaches.",
    servicesConsulting: "Penetration Testing & Cybersecurity Consulting",
    servicesConsultingDesc: "I provide expert consultancy and hands-on services in all major penetration testing domains.",
    webApplicationTesting: "Web Application Testing",
    webApplicationTestingDesc: "Comprehensive testing of web applications, APIs, and web services to identify security vulnerabilities including SQL injection, XSS, CSRF, and more.",
    networkPentesting: "Network Penetration Testing",
    networkPentestingDesc: "In-depth testing of your network infrastructure to identify weaknesses in firewalls, routers, switches, and network segmentation.",
    wirelessSecurity: "Wireless Network Security",
    wirelessSecurityDesc: "Assessment of your wireless networks including encryption strength, access controls, and rogue access point detection.",
    socialEngineering: "Social Engineering & Phishing",
    socialEngineeringDesc: "Evaluate your organization's susceptibility to human-targeted attacks through simulated social engineering campaigns.",
    activeDDirectory: "Active Directory Testing",
    activeDDirectoryDesc: "Specialized testing to identify misconfigurations, weak permissions, and lateral movement opportunities within Active Directory environments.",
    mobileAppSecurity: "Mobile Application Security",
    mobileAppSecurityDesc: "Security assessment of iOS and Android applications including code analysis, data storage vulnerabilities, and API security.",
    threatIntelligence: "Threat Intelligence & CTI",
    threatIntelligenceDesc: "Proactive threat intelligence gathering and analysis to understand current threats, TTPs, and indicators of compromise relevant to your industry.",
    getInTouch: "Get In Touch",
    getInTouchDesc: "Ready to strengthen your security posture? Contact me to discuss your penetration testing needs.",
    fullName: "Full Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",

    // About Me Page
    myStory: "My Story",
    myStoryText: "Can has been actively working as a Penetration Tester in the cybersecurity industry for nearly 3 years. He currently conducts External Network, Internal Network, Client-side, Wireless, and Social Engineering tests. While continuing to advance his skills in Web, Mobile, and API security, he also provides Cyber Threat Intelligence (CTI) consultancy on a part-time basis.",
    myMission: "My Mission",
    myMissionText: "I adapt to the ever-evolving cybersecurity landscape by continuously developing my technical skills. My goal is to identify vulnerabilities with an ethical hacker mindset and play an active role in building systems resilient against cyber threats.",
    technicalSkills: "Technical Skills & Certifications",
    technicalSkillsDesc: "The expertise and credentials that back my work",
    coreCompetencies: "Core Competencies",
    externalNetworkPentesting: "External Network Pentesting",
    internalNetworkPentesting: "Internal Network Pentesting",
    clientSidePentesting: "Client-side Pentesting",
    activeDirectoryPentesting: "Active Directory Pentesting",
    socialEngineeringPhishing: "Social Engineering & Phishing Simulation",
    wirelessNetworkSecurity: "Wireless Network Security",
    myLanguages: "Languages",
    myCertifications: "My Certifications",
    registeredPenetrationTester: "Registered Penetration Tester",

    // Blog Page
    fromTheBlog: "From The <span class='highlight'>Blog</span>",
    fromTheBlogDesc: "Summaries of my articles on Medium. Click to read the full post and get in touch for your security needs.",
    automationInPentesting: "The Power of Automation in Penetration Testing",
    automationInPentestingDesc: "A brief overview of the role of automation tools in modern penetration testing and how they can deliver more effective results when combined with manual testing.",
    bestPracticesVulnerability: "Best Practices in Vulnerability Management",
    bestPracticesVulnerabilityDesc: "Key considerations and industry best practices for identifying, prioritizing, and remediating vulnerabilities to maintain a strong security posture.",
    nextGenCybersecurity: "Next-Gen Cybersecurity: Trends & Innovations",
    nextGenCybersecurityDesc: "Explore the latest trends in cybersecurity, including blockchain, AI, and next-gen defense strategies for modern organizations.",
    securingCloud: "Securing Cloud Infrastructure: Best Practices",
    securingCloudDesc: "Learn essential security measures for cloud environments, from identity management to data protection and compliance requirements.",
    apiSecurity: "API Security: Protecting Your Digital Endpoints",
    apiSecurityDesc: "Comprehensive guide to securing APIs against common threats, including authentication, rate limiting, and monitoring strategies.",
    readOnMedium: "Read on Medium",

    // Index - Stats Section
    projectsCompleted: "Projects Completed",
    vulnerabilitiesFound: "Vulnerabilities Found",
    happyClients: "Happy Clients",
    clientRetention: "Client Retention",
    
    // Index - Why Choose Us Cards
    handsOnExperience: "Hands-On Experience",
    handsOnExperienceDesc: "I have gained practical experience in penetration testing and cybersecurity, helping many organizations improve their security.",
    industryStandards: "Industry Standards",
    industryStandardsDesc: "I follow OWASP, NIST, and CREST methodologies to ensure comprehensive and reliable testing.",
    fastTurnaround: "Fast Turnaround",
    fastTurnaroundDesc: "Quick delivery of detailed reports with actionable recommendations for immediate implementation.",
    support24_7: "24/7 Support",
    support24_7Desc: "Round-the-clock support for urgent security incidents and ongoing consultation services.",
    
    // Services - Titles and Headers
    comprehensivePenTesting: "Penetration Testing & Cybersecurity Consulting",
    comprehensivePenTestingDesc: "I provide expert consultancy and hands-on services in all major penetration testing domains.",
    networkTesting: "Network Testing",
    networkTestingDesc: "Testing of network infrastructure, servers, and network devices to identify security weaknesses and potential attack vectors.",
    mobileApplicationTesting: "Mobile Application Testing",
    mobileApplicationTestingDesc: "Security assessment of iOS and Android applications to identify mobile-specific vulnerabilities and data exposure risks.",
    socialEngineeringWireless: "Social Engineering & Wireless Testing",
    socialEngineeringWirelessDesc: "Comprehensive testing of human vulnerabilities through phishing, pretexting, and wireless network security assessments including Wi-Fi and other wireless technologies.",
    apiTesting: "API Testing",
    apiTestingDesc: "Comprehensive API security testing to identify vulnerabilities in REST, SOAP, and GraphQL endpoints.",
    ddosTesting: "DDoS Testing",
    ddosTestingDesc: "Distributed Denial of Service testing to assess network resilience and identify potential vulnerabilities against volumetric and application-layer attacks.",
    
    // Services - Compliance Section
    complianceTitle: "Compliance & Regulatory Standards",
    complianceDesc: "We ensure our security services align with major international regulations and standards to help you maintain compliance and secure your infrastructure.",
    iso27001Title: "ISO/IEC 27001:2022",
    iso27001Desc: "International standard for Information Security Management Systems (ISMS), ensuring confidentiality, integrity, and availability of data.",
    isae3402Title: "ISAE 3402",
    isae3402Desc: "International assurance standard for reporting on controls at a service organization, demonstrating robust internal control systems.",
    hipaaTitle: "HIPAA",
    hipaaDesc: "Health Insurance Portability and Accountability Act compliance for protecting sensitive patient health information and data privacy.",
    soxTitle: "SOX",
    soxDesc: "Sarbanes-Oxley Act compliance ensuring the accuracy and reliability of corporate disclosures to protect investors from fraudulent activities.",
    pciDssTitle: "PCI-DSS v4.0",
    pciDssDesc: "The latest Payment Card Industry Data Security Standard for securing credit card transactions and protecting cardholder data.",
    ts13638Title: "TS 13638",
    ts13638Desc: "Turkish Standard for Information Technology Security Techniques, defining specific requirements for penetration testing services.",
    
    // Contact Form
    yourName: "Your Name",
    yourEmail: "Your Email",
    companyName: "Company Name",
    selectService: "Select Service",
    webApplicationTesting_opt: "Web Application Testing",
    networkTesting_opt: "Network Testing",
    mobileApplicationTesting_opt: "Mobile Application Testing",
    socialEngineeringTesting: "Social Engineering Testing",
    wirelessTesting: "Wireless Testing",
    apiTesting_opt: "API Testing",
    other: "Other",
    tellAboutNeeds: "Tell me about your security needs and project scope...",
    contactMe: "Contact Me",
    
    // Services Why Choose Section
    whyChooseSection: "Why Choose Me?",
    whyItem1: "Hands-on experience in penetration testing and cybersecurity",
    whyItem2: "Comprehensive testing following industry standards",
    whyItem3: "Detailed reporting with actionable recommendations",
    whyItem4: "Ongoing support and consultation",
    whyItem5: "Competitive pricing with no hidden costs",
    whyItem6: "Fast turnaround times",
    
    // Contact Details
    readyToSecure: "Ready to secure your systems? Contact me today.",
    mail: "Mail",
    turkey: "Turkey",
    available24_7: "Available 24/7 for urgent security incidents",
    
    // Contact Page - About/Skills
    methodologyTitle: "My Methodology",
    methodologySubtitle: "A strategic, human-led approach to offensive security",
    analysis: "Analysis & Reconnaissance",
    analysisDesc: "I start by understanding your business logic and mapping the attack surface, looking for what automated tools miss.",
    strategic: "Strategic Planning",
    strategicDesc: "I design a custom attack strategy tailored to your specific technology stack and security requirements.",
    manual: "Manual Exploitation",
    manualDesc: "I execute deep-dive manual testing to uncover complex logic flaws and critical vulnerabilities.",
    remediation: "Remediation & Support",
    remediationDesc: "I deliver clear, actionable reports and provide guidance to help your developers fix the issues effectively.",

    // Footer
    copyright: "&copy; 2024 Hacky Security. All rights reserved.",
  },

  tr: {
    // Navigation
    home: "Anasayfa",
    services: "Hizmetler",
    aboutMe: "Hakkımda",
    blog: "Blog",
    tagline: "Saldırgan Güvenlikte Hassasiyet",
    our: "Bizim",
    from: "Şu",
    the: "The",

    // Index/Home Page
    professionalPenetrationTesting: "Profesyonel",
    penetrationTestingServices: "Sızma Testi Hizmetleri",
    expertPenetrationTesting: "Hassas ve uzmanlık ile profesyonel sızma testi hizmetleri. Açıkları ihlale dönüşmeden önce tespit edin.",
    getProfessionalConsultation: "Profesyonel Danışmanlık Al",
    ourServices: "Hizmetler",
    penetrationTesting: "Sızma Testi",
    vulnerabilityManagement: "Zafiyet Yönetimi",
    validationTesting: "Doğrulama Testi",
    threatIntelligenceConsultancy: "Tehdit İstihbaratı Danışmanlığı",
    whyChooseUs: "Neden Bizi Seçmelisiniz?",
    whyChooseUsSubtitle: "Profesyonel uzmanlık en son güvenlik testi teknikleriyle buluşuyor",
    expertiseDriven: "Uzmanlığa Dayalı",
    expertiseDrivenDesc: "Sızma testi ve siber güvenlikte yılların uygulamalı deneyimi ile derin teknik bilgi ve kanıtlanmış metodolojiler sunuyorum.",
    customSolutions: "Özel Çözümler",
    customSolutionsDesc: "Her kuruluş benzersizdir. Sızma testi ve güvenlik çözümlerini özel ihtiyaçlarınız ve risk profilinize göre uyarlarım.",
    proactiveApproach: "Proaktif Yaklaşım",
    proactiveApproachDesc: "Saldırganlardan önce açıkları tespit edin. Kapsamlı testlerimiz ortaya çıkan tehditlere karşı öncü kalmanıza yardımcı olur.",
    continuousSupport: "Sürekli Destek",
    continuousSupportDesc: "Testlerin ötesinde, güçlü bir güvenlik duruşu korumanıza yardımcı olmak için sürekli danışmanlık ve rehberlik sağlarım.",
    methodology: "Metodoloji",
    methodologySubtitle: "Güvenlik testlemesine yapılandırılmış bir yaklaşım",
    reconnaisanceTitle: "Keşif",
    reconnaisanceDesc: "Sistemleriniz, ağlarınız ve altyapınız hakkında bilgi toplayarak saldırı yüzeyini anlayın.",
    scanningTitle: "Tarama",
    scanningDesc: "Aktif sistemleri, açık portları ve çalışan servisleri tanımlayın.",
    enumerationTitle: "Numaralandırma",
    enumerationDesc: "Kullanıcılar, paylaşımlar ve olası açıklar hakkında daha detaylı bilgi çıkarın.",
    vulnerabilityAnalysisTitle: "Zafiyet Analizi",
    vulnerabilityAnalysisDesc: "Bulgularını analiz ederek istismar edilebilir güvenlik zafiyetlerini tespit edin.",
    exploitationTitle: "İstismar",
    exploitationDesc: "Açıkların etkisini göstererek gerçek dünya güvenlik risklerini kanıtlayın.",
    reportingTitle: "Raporlama",
    reportingDesc: "Bulgular, remedilasyon önerileri ve yönetici özetleri içeren kapsamlı raporlar sağlayın.",

    // Services Page
    ourServicesTitle: "Hizmetlerimiz",
    ourServicesSubtitle: "Güvenlik ihtiyaçlarınıza özel uyarlanmış kapsamlı sızma testi çözümleri. Açıkları ihlale dönüşmeden önce tespit edin.",
    servicesConsulting: "Sızma Testi ve Siber Güvenlik Danışmanlığı",
    servicesConsultingDesc: "Tüm başlıca sızma testi alanlarında uzman danışmanlık ve uygulamalı hizmetler sunuyorum.",
    webApplicationTesting: "Web Uygulaması Testi",
    webApplicationTestingDesc: "Web uygulamaları, API'ler ve web servisleri için SQL injection, XSS, CSRF ve daha fazlasını içeren kapsamlı güvenlik açığı testi.",
    networkPentesting: "Ağ Sızma Testi",
    networkPentestingDesc: "Firewall, router, switch ve ağ segmentasyonundaki zafiyetleri tanımlamak için detaylı ağ altyapısı testi.",
    wirelessSecurity: "Kablosuz Ağ Güvenliği",
    wirelessSecurityDesc: "Şifreleme gücü, erişim kontrolü ve sahte erişim noktası tespiti dahil olmak üzere kablosuz ağlarınızın değerlendirilmesi.",
    socialEngineering: "Sosyal Mühendislik ve Kimlik Avı",
    socialEngineeringDesc: "Simüle edilmiş sosyal mühendislik kampanyaları aracılığıyla kuruluşunuzun insan hedefli saldırılara karşı duyarlılığını değerlendirin.",
    activeDDirectory: "Active Directory Testi",
    activeDDirectoryDesc: "Active Directory ortamlarında yanlış konfigürasyonları, zayıf izinleri ve yanal hareket fırsatlarını tanımlamak için uzmanlaşmış test.",
    mobileAppSecurity: "Mobil Uygulama Güvenliği",
    mobileAppSecurityDesc: "Kod analizi, veri depolama açıkları ve API güvenliği dahil olmak üzere iOS ve Android uygulamalarının güvenlik değerlendirilmesi.",
    threatIntelligence: "Tehdit İstihbaratı ve CTI",
    threatIntelligenceDesc: "Endüstrinize ilgili mevcut tehditleri, TTP'leri ve tehlikeye işaret eden göstergeleri anlamak için proaktif tehdit istihbaratı toplama ve analizi.",
    getInTouch: "İletişime Geçin",
    getInTouchDesc: "Güvenlik duruşunuzu güçlendirmeye hazır mısınız? Sızma testi ihtiyaçlarınızı tartışmak için benimle iletişime geçin.",
    fullName: "Ad Soyad",
    email: "E-posta",
    subject: "Konu",
    message: "Mesaj",
    sendMessage: "Mesaj Gönder",

    // About Me Page
    myStory: "Benim Hikayem",
    myStoryText: "Can, siber güvenlik endüstrisinde yaklaşık 3 yıldır aktif olarak Sızma Testi Uzmanı olarak çalışmaktadır. Halihazırda Harici Ağ, İç Ağ, İstemci Tarafı, Kablosuz ve Sosyal Mühendislik testleri yürütmektedir. Web, Mobil ve API güvenliğindeki becerilerini geliştirmeye devam ederken, aynı zamanda yarı zamanlı olarak Siber Tehdit İstihbaratı (CTI) danışmanlığı sağlamaktadır.",
    myMission: "Benim Misyonum",
    myMissionText: "Sürekli evrilen siber güvenlik ortamına, teknik yetkinliklerimi sürekli geliştirerek uyum sağlıyorum. Amacım, etik hacker yaklaşımıyla güvenlik açıklarını belirlemek ve siber tehditlere karşı daha dayanıklı yapıların kurulmasında aktif rol almaktır.",
    technicalSkills: "Teknik Beceriler ve Sertifikalar",
    technicalSkillsDesc: "Çalışmalarımı destekleyen uzmanlık ve kimlik bilgileri",
    coreCompetencies: "Temel Yetkinlikler",
    externalNetworkPentesting: "Harici Ağ Sızma Testi",
    internalNetworkPentesting: "İç Ağ Sızma Testi",
    clientSidePentesting: "İstemci Tarafı Sızma Testi",
    activeDirectoryPentesting: "Active Directory Sızma Testi",
    socialEngineeringPhishing: "Sosyal Mühendislik ve Kimlik Avı Simülasyonu",
    wirelessNetworkSecurity: "Kablosuz Ağ Güvenliği",
    myLanguages: "Diller",
    myCertifications: "Sertifikalarım",
    registeredPenetrationTester: "Kayıtlı Sızma Testi Uzmanı",

    // Blog Page
    fromTheBlog: "Bloğumdan",
    fromTheBlogDesc: "Medium'daki makalelerimden özetler. Tam yazıyı okumak için tıklayın ve güvenlik ihtiyaçlarınız için benimle iletişime geçin.",
    automationInPentesting: "Sızma Testinde Otomasyon Gücü",
    automationInPentestingDesc: "Modern sızma testinde otomasyon araçlarının rolünün genel bir özeti ve manuel testlerle birleştirildiğinde daha etkili sonuçlar nasıl verebileceği.",
    bestPracticesVulnerability: "Zafiyet Yönetiminde En İyi Uygulamalar",
    bestPracticesVulnerabilityDesc: "Açıkları tanımlamak, önceliklendirmek ve düzeltmek için ana hususlar ve endüstri en iyi uygulamaları güçlü bir güvenlik duruşu korumalı.",
    nextGenCybersecurity: "Sonraki Nesil Siber Güvenlik: Trendler ve İnovasyonlar",
    nextGenCybersecurityDesc: "Blockchain, yapay zeka ve modern kuruluşlar için sonraki nesil savunma stratejileri dahil olmak üzere siber güvenliğin en son trendlerini keşfedin.",
    securingCloud: "Bulut Altyapısını Güvenli Hale Getirme: En İyi Uygulamalar",
    securingCloudDesc: "Kimlik yönetiminden veri korumasına ve uyum gereksinimlerine kadar bulut ortamları için temel güvenlik önlemleri öğrenin.",
    apiSecurity: "API Güvenliği: Dijital Uç Noktalarınızı Korumak",
    apiSecurityDesc: "Kimlik doğrulama, hız sınırlandırması ve izleme stratejileri dahil olmak üzere yaygın tehditlere karşı API'leri güvenli hale getirmek için kapsamlı rehber.",
    readOnMedium: "Medium'da Oku",

    // Index - Stats Section (TR)
    projectsCompleted: "Tamamlanan Projeler",
    vulnerabilitiesFound: "Bulunan Zafiyetler",
    happyClients: "Mutlu Müşteriler",
    clientRetention: "Müşteri Tutma Oranı",
    
    // Index - Why Choose Us Cards (TR)
    handsOnExperience: "Uygulamalı Deneyim",
    handsOnExperienceDesc: "Sızma testi ve siber güvenlik alanında uygulamalı deneyim kazanarak birçok kuruluşun güvenliğini geliştirmelerine yardımcı oldum.",
    industryStandards: "Endüstri Standartları",
    industryStandardsDesc: "Kapsamlı ve güvenilir testi sağlamak için OWASP, NIST ve CREST metodolojilerini takip ediyorum.",
    fastTurnaround: "Hızlı Teslimat",
    fastTurnaroundDesc: "Hemen uygulanabilecek önerileri içeren ayrıntılı raporların hızlı bir şekilde sunulması.",
    support24_7: "24/7 Destek",
    support24_7Desc: "Acil güvenlik olayları ve devam eden danışmanlık hizmetleri için 7 gün 24 saat destek.",
    
    // Services - Titles and Headers (TR)
    comprehensivePenTesting: "Sızma Testi ve Siber Güvenlik Danışmanlığı",
    comprehensivePenTestingDesc: "Tüm başlıca sızma testi alanlarında uzman danışmanlık ve uygulamalı hizmetler sunuyorum.",
    networkTesting: "Ağ Testi",
    networkTestingDesc: "Ağ altyapısı, sunucular ve ağ cihazlarının güvenlik zafiyetleri ve potansiyel saldırı vektörlerini tanımlamak için testi.",
    mobileApplicationTesting: "Mobil Uygulama Testi",
    mobileApplicationTestingDesc: "İOS ve Android uygulamalarında mobil-spesifik açıkları ve veri maruziyeti risklerini tanımlamak için güvenlik değerlendirmesi.",
    socialEngineeringWireless: "Sosyal Mühendislik ve Kablosuz Testi",
    socialEngineeringWirelessDesc: "Kimlik avı, yanlış temsil ve Wi-Fi dahil kablosuz ağ güvenliği değerlendirmeleri yoluyla insan zafiyetlerinin kapsamlı testi.",
    apiTesting: "API Testi",
    apiTestingDesc: "REST, SOAP ve GraphQL uç noktalarındaki açıkları tanımlamak için kapsamlı API güvenliği testi.",
    ddosTesting: "DDoS Testi",
    ddosTestingDesc: "Hacimsel ve uygulama katmanı saldırılarına karşı ağ esnekliğini değerlendirmek ve potansiyel açıkları tanımlamak için DDoS testi.",
    
    // Services - Compliance Section (TR)
    complianceTitle: "Uyum ve Yasal Standartlar",
    complianceDesc: "Güvenlik hizmetlerimizin uyum sağlamanıza ve altyapınızı güvenli tutmanıza yardımcı olmak için büyük uluslararası düzenlemeler ve standartlarla uyumlu olmasını sağlıyoruz.",
    iso27001Title: "ISO/IEC 27001:2022",
    iso27001Desc: "Bilgi Güvenliği Yönetim Sistemleri (BGYS) için uluslararası standart, verilerin gizlilik, bütünlük ve kullanılabilirliğini sağlar.",
    isae3402Title: "ISAE 3402",
    isae3402Desc: "Bir hizmet kuruluşundaki kontroller hakkında raporlama için uluslararası güvence standardı, güçlü iç kontrol sistemlerini gösterir.",
    hipaaTitle: "HIPAA",
    hipaaDesc: "Hassas hasta sağlığı bilgilerini ve veri gizliliğini korumak için Sağlık Sigortası Taşınabilirliği ve Sorumluluk Yasası uyumu.",
    soxTitle: "SOX",
    soxDesc: "Kurumsal açıklamaların doğruluğu ve güvenilirliğini sağlayan Sarbanes-Oxley Yasası uyumu, yatırımcıları dolandırıcılıktan korur.",
    pciDssTitle: "PCI-DSS v4.0",
    pciDssDesc: "Kredi kartı işlemlerini güvenli hale getirmek ve kart sahibi verilerini korumak için en son Ödeme Kartı Endüstrisi Veri Güvenliği Standardı.",
    ts13638Title: "TS 13638",
    ts13638Desc: "Bilişim Teknolojileri Güvenliği Teknikleri Türk Standardı, sızma testi hizmetleri için spesifik gereksinimler tanımlar.",
    
    // Contact Form (TR)
    yourName: "Adınız",
    yourEmail: "E-postanız",
    companyName: "Şirket Adı",
    selectService: "Hizmet Seçin",
    webApplicationTesting_opt: "Web Uygulaması Testi",
    networkTesting_opt: "Ağ Testi",
    mobileApplicationTesting_opt: "Mobil Uygulama Testi",
    socialEngineeringTesting: "Sosyal Mühendislik Testi",
    wirelessTesting: "Kablosuz Testi",
    apiTesting_opt: "API Testi",
    other: "Diğer",
    tellAboutNeeds: "Güvenlik ihtiyaçlarınız ve proje kapsamı hakkında bana anlatın...",
    contactMe: "Benimle İletişime Geçin",
    
    // Services Why Choose Section (TR)
    whyChooseSection: "Neden Beni Seçmeli?",
    whyItem1: "Sızma testi ve siber güvenlikte uygulamalı deneyim",
    whyItem2: "Endüstri standartlarını takip eden kapsamlı testi",
    whyItem3: "Eyleme geçirilebilir önerileri içeren ayrıntılı raporlama",
    whyItem4: "Devam eden destek ve danışmanlık",
    whyItem5: "Gizli maliyeti olmayan rekabetçi fiyatlandırma",
    whyItem6: "Hızlı teslimat süreleri",
    
    // Contact Details (TR)
    readyToSecure: "Sistemlerinizi güvenli hale getirmeye hazır mısınız? Bugün benimle iletişime geçin.",
    mail: "Posta",
    turkey: "Türkiye",
    available24_7: "Acil güvenlik olayları için 24/7 kullanılabilir",
    
    // Contact Page - About/Skills (TR)
    methodologyTitle: "Benim Metodolojim",
    methodologySubtitle: "Stratejik, insan liderliğindeki bir saldırgan güvenliği yaklaşımı",
    analysis: "Analiz ve Keşif",
    analysisDesc: "İş mantığınızı anlayarak ve saldırı yüzeyini haritalandırarak başlıyorum, otomat araçlarının kaçırdığını arıyorum.",
    strategic: "Stratejik Planlama",
    strategicDesc: "Spesifik teknoloji yığının ve güvenlik gereksinimlerinize uyarlanmış özel bir saldırı stratejisi tasarlıyorum.",
    manual: "Manuel İstismar",
    manualDesc: "Karmaşık mantık kusurlarını ve kritik açıkları ortaya çıkarmak için derin manuel test yürütüyorum.",
    remediation: "Iyileştirme ve Destek",
    remediationDesc: "Açık raporlar sunuyorum ve sorunları etkili bir şekilde düzeltmelerine yardımcı olmak için rehberlik sağlıyorum.",

    // Footer (TR)
    copyright: "&copy; 2024 Hacky Security. Tüm hakları saklıdır.",
  }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updatePageLanguage();
  updateLanguageButtons();
}

function updateLanguageButtons() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.classList.remove('active');
    if ((currentLanguage === 'en' && btn.textContent === 'EN') ||
        (currentLanguage === 'tr' && btn.textContent === 'TR')) {
      btn.classList.add('active');
    }
  });
}

function getTranslation(key) {
  return translations[currentLanguage]?.[key] || translations['en']?.[key] || key;
}

function updatePageLanguage() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT' || element.tagName === 'OPTION') {
      if (element.tagName === 'OPTION') {
        element.textContent = translation;
      } else {
        element.placeholder = translation;
      }
    } else {
      element.innerHTML = translation;
    }
  });

  // Update document language
  document.documentElement.lang = currentLanguage;
  
  // Update language buttons
  updateLanguageButtons();
}

// Initialize on page load with English as default
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  updatePageLanguage();
});
