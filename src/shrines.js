const shrines = [
  {
    shrineName: 'Fushimi Inari Taisha',
    summary:
      'Located in Kyoto, is the head shrine of approximately 32,000 Inari shrines across Japan. Dedicated to Inari Ōkami, the Shinto deity of rice, prosperity, and foxes, it is famous for its Senbon Torii, thousands of vermillion gates forming a mesmerizing pathway up Mount Inari',
    location: {
      city: 'Kyoto',
      prefecture: 'Kyoto Prefecture'
    },
    yearBuilt: '711 AD',
    typeOfShrine: {
      shrineCategory: 'Inari',
      enshrinedKami: 'Inari Ōkami'
    },
    architecturalFeatures: {
      toriiGate: true,
      hondon: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Hatsu-uma Festival'],
      ritualPractices: [
        'Senbon Torii (thousands of torii gates)',
        'Omamori (amulet) offerings'
      ],
      artifacts: ['Fox statues', 'Rice granaries'],
      folklore: [
        'Associated with fox deities as messengers',
        'Believed to bless agriculture and business'
      ]
    },
    image:
      'https://www.touristinjapan.com/wp-content/uploads/2019/03/fushimi-inari-taisha-torii-1020x600.jpg'
  },

  {
    shrineName: 'Ishi Grand Shrine',
    summary:
      'Ise Jingū is considered the most sacred Shinto shrine in Japan. The shrine is dedicated to Amaterasu-Ōmikami, the sun goddess and ancestor of the imperial family. One of its unique practices is the Shikinen Sengu, the ritual rebuilding of the shrine every 20 years, symbolizing the Shinto belief in the impermanence and renewal of nature.',
    location: {
      city: 'Ise',
      prefecture: 'Mie Prefecture'
    },
    yearBuilt: '4 BC',
    typeOfShrine: {
      shrineCategory: 'Imperial',
      enshrinedKami: 'Amaterasu-Ōmikami'
    },
    architecturalFeatures: {
      toriiGate: true,
      hondon: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Kannamesai Festival'],
      ritualPractices: [
        'Shikinen Sengu (rebuilding every 20 years)',
        'Offerings of first harvest rice'
      ],
      artifacts: ['Sacred Mirror (Yata no Kagami)'],
      folklore: [
        'Central shrine of Shinto',
        'Believed to house the spirit of the sun goddess'
      ]
    },
    image:
      'https://www.the-kansai-guide.com/kansaiguide/data/article/21000/20018/20211225_054611_23c2b5a1_w1920.jpg'
  },

  {
    shrineName: 'Yaegaki Shrine',
    summary:
      'A famous love shrine in Shimane Prefecture, known for its water-based love divination ritual. Visitors float paper on sacred water to predict their romantic future.',
    location: {
      city: 'Matsue',
      prefecture: 'Shimane Prefecture'
    },
    yearBuilt: 'Unknown (Ancient origins)',
    typeOfShrine: {
      shrineCategory: 'Love Shrine',
      enshrinedKami: 'Susanoo-no-Mikoto and Kushinadahime'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Yaegaki Shrine Love Festival'],
      ritualPractices: [
        'Love divination with floating paper on sacred pond',
        'Marriage blessings'
      ],
      artifacts: ['Sacred Mirror of Love'],
      folklore: [
        'Said to help visitors find true love',
        'Ancient myths of Susanoo and Kushinadahime'
      ]
    },
    image:
      'https://www.visit-matsue.com/_assets/page_images/images/000/009/197/19e39ab56c56b1ed270970f9cfde0b0d862cb4b5.jpg?1485315662'
  },
  {
    shrineName: 'Nitta Shrine',
    summary:
      'A samurai-themed shrine dedicated to Nitta Yoshisada, a legendary warrior. Visitors pray for victory and offer wooden swords as a sign of strength and courage.',
    location: {
      city: 'Ota',
      prefecture: 'Gunma Prefecture'
    },
    yearBuilt: 'Unknown (Medieval period)',
    typeOfShrine: {
      shrineCategory: 'Warrior Shrine',
      enshrinedKami: 'Nitta Yoshisada'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Samurai Procession'],
      ritualPractices: [
        'Worship for victory in battle',
        'Offerings of wooden swords'
      ],
      artifacts: ['Samurai armor and weapons'],
      folklore: [
        'Nitta Yoshisada was a samurai hero',
        'Said to grant strength and courage'
      ]
    },
    image: 'https://www.sandersofoxford.com/media/uploads/product/52409.jpg'
  },
  {
    shrineName: 'Kanda Myojin',
    summary:
      'A tech-focused shrine in Tokyo, popular among IT professionals, anime fans, and gamers. It offers blessings for electronic devices and business prosperity.',
    location: {
      city: 'Tokyo',
      prefecture: 'Tokyo Prefecture'
    },
    yearBuilt: '730 AD',
    typeOfShrine: {
      shrineCategory: 'Tech Shrine',
      enshrinedKami: 'Taira no Masakado, Ebisu, and Daikokuten'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Kanda Matsuri'],
      ritualPractices: [
        'Blessing of electronic devices',
        'Business prosperity prayers'
      ],
      artifacts: ['Computer omamori (protective amulets)'],
      folklore: [
        'Popular with IT professionals and anime fans',
        'Believed to protect against cyber threats'
      ]
    },
    image:
      'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2015/01/kanda-myojin-shrine-ctk-2.jpg'
  },
  {
    shrineName: 'Udo Shrine',
    summary:
      'A cave shrine on a cliff overlooking the ocean, known for its unique fertility blessings. Visitors throw lucky stones for good fortune in love and family life.',
    location: {
      city: 'Nichinan',
      prefecture: 'Miyazaki Prefecture'
    },
    yearBuilt: 'Unknown (Ancient origins)',
    typeOfShrine: {
      shrineCategory: 'Cave Shrine',
      enshrinedKami: 'Ugayafukiaezu'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Udo Shrine Fertility Festival'],
      ritualPractices: [
        'Throwing lucky stones into a target',
        'Fertility and childbirth blessings'
      ],
      artifacts: ['Sacred breast-shaped stones'],
      folklore: [
        'Shrine is built inside a cave',
        'Said to bless couples with children'
      ]
    },
    image:
      'https://www.kankou-nichinan.jp/ctrl-nichinan/wp-content/uploads/573b9790ec828372a638cc16d37fdad4-1-1.jpg'
  },

  {
    shrineName: 'Oyunohara',
    summary:
      'The original site of Kumano Hongu Taisha, Oyunohara is a sacred open-air site marked by Japan’s tallest torii gate. It no longer has traditional shrine buildings.',
    location: {
      city: 'Tanabe',
      prefecture: 'Wakayama Prefecture'
    },
    yearBuilt: 'Ancient (exact date unknown)',
    typeOfShrine: {
      shrineCategory: 'Pilgrimage Site',
      enshrinedKami: 'Ketsumimiko-no-Ōkami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: false,
      haiden: false
    },
    religionAndCulture: {
      annualFestivals: ['Kumano Hongu Taisha Spring Festival'],
      ritualPractices: [
        'Spiritual purification ceremonies',
        'Pilgrims walking the Kumano Kodo trail'
      ],
      artifacts: ['Japan’s tallest torii gate'],
      folklore: [
        'Once the grandest of the Kumano shrines, but was destroyed by a flood in 1889',
        'Said to be a place of deep spiritual power'
      ]
    },
    image:
      'https://global.jr-central.co.jp/en/onlinebooking/featured-theme/mysterious-kiipeninsula/assets/images/content/spot/oyunohara/photo02.jpg'
  },
  {
    shrineName: 'Hakuto Shrine',
    summary:
      'A small but significant shrine dedicated to the White Rabbit of Inaba, known for bringing love and good fortune. It is associated with Japan’s oldest love story.',
    location: {
      city: 'Tottori',
      prefecture: 'Tottori Prefecture'
    },
    yearBuilt: 'Ancient (exact date unknown)',
    typeOfShrine: {
      shrineCategory: 'Love Shrine',
      enshrinedKami: 'Hakuto no Okami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: false
    },
    religionAndCulture: {
      annualFestivals: ['White Rabbit Love Festival'],
      ritualPractices: [
        'Love divination',
        'Healing prayers inspired by rabbit mythology'
      ],
      artifacts: ['Rabbit statues'],
      folklore: [
        'Based on the myth of the White Rabbit of Inaba',
        'Said to bring love and romantic luck'
      ]
    },
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Hakuto_Shrine.jpg'
  },
  {
    shrineName: 'Motoise Kono Shrine',
    summary:
      'A shrine said to have once housed Amaterasu before she was enshrined at Ise Grand Shrine. It features an unusual double torii gate.',
    location: {
      city: 'Miyazu',
      prefecture: 'Kyoto Prefecture'
    },
    yearBuilt: 'Unknown (Ancient origins)',
    typeOfShrine: {
      shrineCategory: 'Historical Shrine',
      enshrinedKami: 'Amaterasu-Ōmikami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Kono Matsuri'],
      ritualPractices: [
        'Offerings of salt from the sea',
        'Sun-related ceremonies'
      ],
      artifacts: ['Double torii gate'],
      folklore: [
        'Believed to be the former home of Amaterasu',
        'One of the oldest shrines in the region'
      ]
    },
    image: 'https://www.japan-guide.com/news/thumb/1811_kinosaki_geta_L.jpg'
  },
  {
    shrineName: 'Kaichu Inari Shrine',
    summary:
      'A unique shrine standing in the middle of the ocean, accessible only at low tide. Dedicated to Inari and maritime safety.',
    location: {
      city: 'Kudamatsu',
      prefecture: 'Yamaguchi Prefecture'
    },
    yearBuilt: 'Unknown',
    typeOfShrine: {
      shrineCategory: 'Sea Shrine',
      enshrinedKami: 'Inari Ōkami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: false
    },
    religionAndCulture: {
      annualFestivals: ['Maritime Safety Festival'],
      ritualPractices: ['Prayers for safe voyages', 'Seaweed offerings'],
      artifacts: ['Submerged torii gate'],
      folklore: [
        'Only accessible at low tide',
        'Worshipped by sailors and fishermen'
      ]
    },
    image:
      'https://article-image.travel.navitime.jp/img/NTJtrvsp0070-en/is02.jpg'
  }
]
