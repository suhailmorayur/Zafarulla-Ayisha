/**
 * ==============================================================================
 * ROYAL WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * 
 * All details, names, dates, venues, notes, and photos are managed EXCLUSIVELY
 * in this file. There is NO in-browser editor, ensuring no guest or third-party
 * can ever alter or tamper with your wedding invitation.
 * 
 * HOW TO ADD YOUR OWN PHOTOS:
 * 1. Local files: Place your image files in the `public/` folder (e.g., `public/groom.jpg`)
 *    and set the path as `"/groom.jpg"`.
 * 2. Web links: Paste any direct image URL (e.g., `"https://example.com/photo.jpg"`).
 * 3. Leave empty `""` to display the default royal Islamic monogram artwork.
 */

export const weddingConfig = {
  // ==========================================
  // 1. COUPLE INFORMATION & PORTRAIT PHOTOS
  // ==========================================
  groomName: "ZAFARULLA H",
  groomTitle: "The Groom",
  // Groom photo: enter local path like "/groom.jpg" or full URL. Leave empty "" for gold monogram.
  groomPhoto: "./groom.jpg",

  brideName: "AYISHA",
  brideTitle: "The Bride",
  // Bride photo: enter local path like "/bride.jpg" or full URL. Leave empty "" for gold monogram.
  bridePhoto: "/bride.jpg",

  // ==========================================
  // 2. WEDDING DATES & TIMINGS
  // ==========================================
  // Target date & time in ISO format for the live countdown timer
  weddingDate: "2026-12-07T10:00:00",
  // Formatted date displayed on headers, scratch card reveal, and footer
  weddingDateDisplay: "07 • 12 • 2026",
  weddingDay: "Monday",
  weddingTime: "10:30 AM - 04:00 PM",

  // ==========================================
  // 3. VENUE & GOOGLE MAPS
  // ==========================================
  venueName: "GM GARDENS A/C AUDITORIUM MORAYUR",
  venueAddress: "GM GARDENS A/C AUDITORIUM, Arimbra Road ,Morayur, Malappuram, Kerala,",
  venueMapUrl: "https://maps.app.goo.gl/v5iVgVmxbwP3btmX6",

  // ==========================================
  // 4. PERSONAL SCRATCH CARD NOTE & BLESSINGS
  // ==========================================
  // Revealed when guests scratch the golden love heart card
  personalNote: "With joyful hearts and the blessings of our beloved parents, we invite you to share in this sacred milestone of our lives. Your prayers and presence will bring immense barakah to our union.",

  // ==========================================
  // 5. ISLAMIC CALLIGRAPHY & QURANIC VERSES
  // ==========================================
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish: "In the Name of Allah, The Most Gracious, The Most Merciful",
  specialInvitation: "A SPECIAL INVITATION",
  celebrationSubtitle: "TO CELEBRATE A BEAUTIFUL BEGINNING",

  quranVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  quranVerseTranslation: "And among His signs is that He created for you mates from among yourselves, that you may dwell in peace with them, and He has put love and mercy between your hearts.",
  quranVerseRef: "— Surah Ar-Rum (30:21)",

  // ==========================================
  // 6. ITINERARY & CEREMONY EVENTS
  // ==========================================
  events: [
    {
      id: "nikah",
      title: "The Sacred Nikah Ceremony",
      time: "10:30 AM",
      date: "Sunday, 06 December 2026",
      location: "Coimbatore",
      description: "The solemn marriage contract ceremony followed by prayers, blessings, and dates distribution.",
      attire: "Traditional Islamic Formal / Regal Emerald & Gold",
    },
    {
      id: "walima",
      title: "The Royal Walima & Banquet",
      time: "01:30 PM",
      date: "Saturday, 12 December 2026",
      location: "Crystal Ballroom & Gardens",
      description: "A celebratory feast honoring the newlyweds with artisanal banquet dining, heartfelt speeches, and hospitality.",
      attire: "Black Tie / Elegant Modest Evening Wear",
    },
  ],

  // ==========================================
  // 7. WEDDING GALLERY ALBUM (4 SLOTS)
  // ==========================================
  // To display a photo, add `image: "/gallery1.jpg"` or an image URL.
  // If `image` is empty or omitted, an artistic Islamic arch gradient is shown.
  gallery: [
    {
      id: 1,
      image: "./pic2.jpg", // e.g. "/photos/gallery-1.jpg" or direct URL
      caption: "",
      category: "",
      color: "from-emerald-950 to-[#07241b]",
    },
    {
      id: 2,
      image: "./pic1 (2).png", // e.g. "/photos/gallery-2.jpg" or direct URL
      caption: "",
      category: "",
      color: "from-[#0a3325] to-[#124d38]",
    },

    {
      id: 4,
      image: "./pic4.png", // e.g. "/photos/gallery-4.jpg" or direct URL
      caption: "",
      category: "",
      color: "from-emerald-900 to-[#0a3a2b]",
    },
    {
      id: 3,
      image: "./pic3.png", // e.g. "/photos/gallery-3.jpg" or direct URL
      caption: "",
      category: "",
      color: "from-[#07251c] to-[#041711]",
    },
    
  ],
};
