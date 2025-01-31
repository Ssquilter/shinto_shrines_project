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
        'Associated with fox deities as messengers.',
        'Believed to bless agriculture and business.'
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
        'Central shrine of Shinto.',
        'Believed to house the spirit of the sun goddess.'
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
        'Said to help visitors find true love.',
        'Ancient myths of Susanoo and Kushinadahime.'
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
        'Nitta Yoshisada was a samurai hero.',
        'Said to grant strength and courage.'
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
        'Popular with IT professionals and anime fans.',
        'Believed to protect against cyber threats.'
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
        'Shrine is built inside a cave.',
        'Said to bless couples with children.'
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
        'Once the grandest of the Kumano shrines, but was destroyed by a flood in 1889.',
        'Said to be a place of deep spiritual power.'
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
        'Based on the myth of the White Rabbit of Inaba.',
        'Said to bring love and romantic luck.'
      ]
    },
    image:
      'https://static.gltjp.com/glt/data/directory/16000/15612/20240403_204349_6d17aad6_w1920.webp'
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
        'Believed to be the former home of Amaterasu.',
        'One of the oldest shrines in the region.'
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
        'Only accessible at low tide.',
        'Worshipped by sailors and fishermen.'
      ]
    },
    image:
      'https://article-image.travel.navitime.jp/img/NTJtrvsp0070-en/is02.jpg'
  },

  {
    shrineName: 'Itsukushima Shrine',
    summary:
      "Famous for its 'floating' torii gate, appearing to float on water during high tide.",
    location: {
      city: 'Hatsukaichi',
      prefecture: 'Hiroshima Prefecture'
    },
    yearBuilt: '593 AD',
    typeOfShrine: {
      shrineCategory: 'Island Shrine',
      enshrinedKami: 'Ichikishima-hime-no-mikoto'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Kangen-sai Festival'],
      ritualPractices: ['Boat processions', 'Music and dance performances'],
      artifacts: ['Heike Nokyo (Sutras dedicated by the Taira clan)'],
      folklore: [
        'Believed to be the dwelling place of deities.',
        'Site where Taira no Kiyomori prayed for prosperity.'
      ]
    },
    image:
      'https://res.cloudinary.com/jnto/image/upload/w_1080,h_756,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/0b/34/0b34b10e-970e-4886-b484-6038871b83ca/itsukushima_shrine_pemo3k'
  },
  {
    shrineName: 'Izumo Taisha',
    summary:
      "One of Japan's oldest and most significant shrines, believed to be the gathering place for all kami during the 10th month.",
    location: {
      city: 'Izumo',
      prefecture: 'Shimane Prefecture'
    },
    yearBuilt: 'Unknown (ancient origins)',
    typeOfShrine: {
      shrineCategory: 'Grand Shrine',
      enshrinedKami: 'Ōkuninushi-no-mikoto'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Kamiari-sai'],
      ritualPractices: [
        'En-musubi (marriage) blessings',
        'Offerings of sake and rice'
      ],
      artifacts: ['Massive shimenawa (sacred straw rope)'],
      folklore: [
        'Associated with the creation of Japan.',
        'Known as the deity of marriage and good relationships.'
      ]
    },
    image:
      'https://t3.ftcdn.net/jpg/06/62/74/24/360_F_662742411_7u1DRvtifR6bwGo4i7xenTexIQDLY0iP.jpg'
  },
  {
    shrineName: 'Meiji Jingu',
    summary:
      'Dedicated to Emperor Meiji and Empress Shōken, located in a forested area in Tokyo.',
    location: {
      city: 'Tokyo',
      prefecture: 'Tokyo Metropolis'
    },
    yearBuilt: '1920',
    typeOfShrine: {
      shrineCategory: 'Imperial Shrine',
      enshrinedKami: 'Emperor Meiji and Empress Shōken'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Meiji Jingu Spring Grand Festival'],
      ritualPractices: ['Traditional Shinto weddings', "New Year's prayers"],
      artifacts: ['Treasures of Emperor Meiji'],
      folklore: [
        'Built to honor the spirits of the Emperor and Empress.',
        'Known for its expansive forested grounds.'
      ]
    },
    image:
      'https://www.ancient-origins.net/sites/default/files/styles/article_image/public/field/image/Meiji-shrine.jpg?itok=C_UcwnUH'
  },
  {
    shrineName: 'Toshogu Shrine',
    summary:
      'Lavishly decorated shrine dedicated to Tokugawa Ieyasu, the founder of the Tokugawa shogunate.',
    location: {
      city: 'Nikkō',
      prefecture: 'Tochigi Prefecture'
    },
    yearBuilt: '1617',
    typeOfShrine: {
      shrineCategory: 'Mausoleum Shrine',
      enshrinedKami: 'Tokugawa Ieyasu'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Grand Spring and Autumn Festivals'],
      ritualPractices: [
        'Yabusame (horseback archery)',
        'Processions honoring Tokugawa Ieyasu'
      ],
      artifacts: ["Famous 'Sleeping Cat' carving"],
      folklore: [
        'Believed to protect Japan from evil spirits.',
        'Known for its intricate carvings and decorations.'
      ]
    },
    image: 'https://japanupclose.web-japan.org/files/100473045.jpeg'
  },
  {
    shrineName: 'Sumiyoshi Taisha',
    summary:
      "One of Osaka's oldest shrines, known for its unique straight bridge and Sumiyoshi-zukuri architecture.",
    location: {
      city: 'Osaka',
      prefecture: 'Osaka Prefecture'
    },
    yearBuilt: '211 AD',
    typeOfShrine: {
      shrineCategory: 'Sea Shrine',
      enshrinedKami: 'Sumiyoshi Sanjin'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true,
      uniqueBridge: true
    },
    religionAndCulture: {
      annualFestivals: ['Sumiyoshi Matsuri'],
      ritualPractices: [
        'Prayers for safe sea voyages',
        'Traditional dance performances'
      ],
      artifacts: ['Ancient ceremonial swords'],
      folklore: [
        'Associated with the protection of sailors.',
        'Known for its distinctive architectural style.'
      ]
    },
    image:
      'https://delightfultravelnotes.com/wp-content/uploads/2024/06/Sorihashi-Taiko-bashi-Sumiyoshi-Taisha-arched-bridge.jpg'
  },
  {
    shrineName: 'Kumano Nachi Taisha',
    summary:
      'Part of the Kumano Sanzan, located near the famous Nachi Waterfall.',
    location: {
      city: 'Nachikatsuura',
      prefecture: 'Wakayama Prefecture'
    },
    yearBuilt: '4th century',
    typeOfShrine: {
      shrineCategory: 'Pilgrimage Shrine',
      enshrinedKami: 'Fusumi-no-kami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true,
      waterfall: true
    },
    religionAndCulture: {
      annualFestivals: ['Nachi Fire Festival'],
      ritualPractices: ['Fire rituals', 'Pilgrimages along the Kumano Kodo'],
      artifacts: ['Sacred flames used in ceremonies'],
      folklore: [
        'Believed to house the spirit of the waterfall.',
        'Known for its scenic beauty and spiritual significance.'
      ]
    },
    image: 'https://byfood.b-cdn.net/api/public/assets/10991/content'
  },
  {
    shrineName: 'Takachiho Shrine',
    summary:
      'Located in the mythical Takachiho Gorge, this shrine is linked to the legend of Amaterasu and the Sun Goddess hiding in a cave.',
    location: {
      city: 'Takachiho',
      prefecture: 'Miyazaki Prefecture'
    },
    yearBuilt: 'Unknown (Ancient origins)',
    typeOfShrine: {
      shrineCategory: 'Mythological Shrine',
      enshrinedKami: 'Takachiho Sumegami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Takachiho Night Kagura'],
      ritualPractices: [
        'Night Kagura dance performances',
        'Offerings to the Sun Goddess'
      ],
      artifacts: ['Ancient masks used in Kagura dances'],
      folklore: [
        'Connected to Amaterasu’s myth of hiding in a cave.',
        'Said to be a gateway to the heavens.'
      ]
    },
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_SdeBf-crMdQXCDUOLX6B97o3VhoWSQGOl220zJQXH15yEBJoW8CHBvHPKPNyvznKtC_txwI6OCwLuSflQyI8S9HW-8zAjNv6OU3qqGsZhzDIsDjf8jpLFVAcyWohecc8KDuQQ0OeyZe-/s1600/Takachiho.jpg'
  },
  {
    shrineName: 'Aoshima Shrine',
    summary:
      "A picturesque seaside shrine located on a small island, known for its unusual 'Devil’s Washboard' rock formations surrounding it.",
    location: {
      city: 'Miyazaki',
      prefecture: 'Miyazaki Prefecture'
    },
    yearBuilt: 'Unknown (Ancient origins)',
    typeOfShrine: {
      shrineCategory: 'Island Shrine',
      enshrinedKami: 'Hikohohodemi no Mikoto'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: false
    },
    religionAndCulture: {
      annualFestivals: ['Aoshima Shrine Festival'],
      ritualPractices: [
        'Blessings for safe travel',
        'Prayers for love and prosperity'
      ],
      artifacts: ['Ema (wooden plaques) with sea-themed wishes'],
      folklore: [
        'Located on an island formed by mythical forces.',
        'Said to bring luck to newlyweds.'
      ]
    },
    image:
      'https://peterlamphotography.com/wp-content/uploads/2020/05/miyazaki-shrines-1006558.jpg'
  },
  {
    shrineName: 'Hakozaki Shrine',
    summary:
      'One of Japan’s most important Hachiman shrines, known for its historic resistance against Mongol invasions in the 13th century.',
    location: {
      city: 'Fukuoka',
      prefecture: 'Fukuoka Prefecture'
    },
    yearBuilt: '923 AD',
    typeOfShrine: {
      shrineCategory: 'Warrior Shrine',
      enshrinedKami: 'Hachiman'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Tamariba Festival'],
      ritualPractices: [
        'Military victory prayers',
        'Ceremonial armor blessings'
      ],
      artifacts: ['Stone monuments from Mongol invasions'],
      folklore: [
        'Believed to have summoned the ‘Divine Wind’ (Kamikaze) that stopped Mongol fleets.',
        'A key shrine for samurai prayers.'
      ]
    },
    image:
      'https://www.fukuoka-now.com/wp-content/uploads/2019/08/fn_hojoya-showcase_2022_cl-001.jpeg'
  },
  {
    shrineName: 'Miyajidake Shrine',
    summary:
      'Famous for its massive shimenawa (sacred rope) and a perfect sunset alignment that illuminates its pathway twice a year.',
    location: {
      city: 'Fukutsu',
      prefecture: 'Fukuoka Prefecture'
    },
    yearBuilt: 'Unknown',
    typeOfShrine: {
      shrineCategory: 'Sunset Shrine',
      enshrinedKami: 'Okinagatarashihime no Mikoto'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true
    },
    religionAndCulture: {
      annualFestivals: ['Miyajidake Sunset Festival'],
      ritualPractices: ['Sunset pathway viewing', 'Rituals for safe travels'],
      artifacts: ['Largest shimenawa in Japan'],
      folklore: [
        'Known for its ‘Path of Light’ alignment',
        'Said to bless those who witness the sunset pathway'
      ]
    },
    image:
      'https://www.crossroadfukuoka.jp/storage/tourism_attractions/10236/responsive_images/Q6ga6DMVXETBLHVdgzy3dEE1A7r7TMJIYbjnrs6l__1673_1115.jpg'
  },
  {
    shrineName: 'Hirano Shrine',
    summary:
      'A Kyoto shrine famous for its cherry blossoms, hosting one of Japan’s oldest annual sakura festivals.',
    location: {
      city: 'Kyoto',
      prefecture: 'Kyoto Prefecture'
    },
    yearBuilt: '794 AD',
    typeOfShrine: {
      shrineCategory: 'Seasonal Shrine',
      enshrinedKami: 'Imaki-no-Kami'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true,
      seasonalGardens: true
    },
    religionAndCulture: {
      annualFestivals: ['Hirano Sakura Festival'],
      ritualPractices: ['Cherry blossom celebrations', 'Tea ceremonies'],
      artifacts: ['Ancient sakura tree records'],
      folklore: [
        'Said to protect Kyoto’s cherry blossoms.',
        'A symbol of renewal and life.'
      ]
    },
    image:
      'https://www.travelcaffeine.com/wp-content/uploads/2020/03/hirano-shrine-cherry-blossom-hanami-sakura-season-kyoto-japan-torii-gate-sunburst.jpg'
  },
  {
    shrineName: 'Zeniarai Benzaiten Ugafuku Shrine',
    summary:
      'A shrine in Kamakura where visitors wash money in sacred spring water, believing it will double their fortune.',
    location: {
      city: 'Kamakura',
      prefecture: 'Kanagawa Prefecture'
    },
    yearBuilt: '1185 AD',
    typeOfShrine: {
      shrineCategory: 'Wealth Shrine',
      enshrinedKami: 'Benzaiten'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: false,
      caveSpring: true
    },
    religionAndCulture: {
      annualFestivals: ['Spring Money-Washing Festival'],
      ritualPractices: [
        'Washing money in sacred water',
        'Wealth and prosperity prayers'
      ],
      artifacts: ['Sacred washing baskets'],
      folklore: [
        "Said to double the money washed in the shrine's spring.",
        'Linked to Minamoto no Yoritomo’s vision.'
      ]
    },
    image:
      'https://i0.wp.com/www.japanbyweb.com/wp-content/uploads/2016/09/Kamakura-Zeniarai-Benzaiten.jpg?fit=1600%2C1058&ssl=1'
  },
  {
    shrineName: 'Mitake Shrine',
    summary:
      'A sacred mountain shrine with a long history of wolf worship, popular among hikers and pet owners seeking blessings.',
    location: {
      city: 'Ome',
      prefecture: 'Tokyo Prefecture'
    },
    yearBuilt: 'Ancient origins',
    typeOfShrine: {
      shrineCategory: 'Mountain Shrine',
      enshrinedKami: 'Ōguchi-no-Magami (Wolf Deity)'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true,
      mountainTrail: true
    },
    religionAndCulture: {
      annualFestivals: ['Mitake Autumn Festival'],
      ritualPractices: [
        'Wolf protection prayers',
        'Hiking purification rituals'
      ],
      artifacts: ['Wolf statues'],
      folklore: [
        'Said to be guarded by sacred wolves.',
        'Pilgrims believe the wolves protect from evil spirits.'
      ]
    },
    image:
      'https://totaljapanexperience.wordpress.com/wp-content/uploads/2016/04/2657990145_a7f2081a4c_b.jpg?w=640'
  },
  {
    shrineName: 'Tottori Sand Dunes Shrine',
    summary:
      'A hidden desert shrine located within Japan’s only sand dunes, offering prayers for travel safety and endurance.',
    location: {
      city: 'Tottori',
      prefecture: 'Tottori Prefecture'
    },
    yearBuilt: 'Unknown',
    typeOfShrine: {
      shrineCategory: 'Desert Shrine',
      enshrinedKami: 'Susanoo-no-Mikoto'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: false,
      haiden: true,
      sandPath: true
    },
    religionAndCulture: {
      annualFestivals: ['Sun and Sand Ceremony'],
      ritualPractices: [
        'Blessings for endurance',
        'Offerings of sand sculptures'
      ],
      artifacts: ['Desert torii gate'],
      folklore: [
        'Shrine remains buried and uncovered by shifting sand.',
        'Said to give strength to travelers.'
      ]
    },
    image:
      'https://www.kanpai-japan.com/sites/default/files/styles/og/public/uploads/2020/07/tottori-sand-museum-6.jpg'
  },
  {
    shrineName: 'Atago Shrine',
    summary:
      'A shrine on top of Tokyo’s highest natural hill, known for its steep stairway challenge called the ‘Stairs of Success’.',
    location: {
      city: 'Tokyo',
      prefecture: 'Tokyo Prefecture'
    },
    yearBuilt: '1603',
    typeOfShrine: {
      shrineCategory: 'Success Shrine',
      enshrinedKami: 'Homusubi-no-Mikoto (Fire Deity)'
    },
    architecturalFeatures: {
      toriiGate: true,
      honden: true,
      haiden: true,
      steepStairs: true
    },
    religionAndCulture: {
      annualFestivals: ['Fire Protection Festival'],
      ritualPractices: [
        'Climbing the ‘Stairs of Success’',
        'Fire safety blessings'
      ],
      artifacts: ['Firefighter amulets'],
      folklore: [
        'Samurai who climbed the stairs on horseback was rewarded by the shogun.',
        'Said to bring career success to those who climb the stairs.'
      ]
    },
    image:
      'https://japanfreak.tokyo/wp-content/uploads/2017/09/TOKYO-Atago-Shrine-Stone-staircase.png'
  },
  {
    shrineName: 'Nageiredo Hall',
    summary:
      'Japan’s most ‘dangerous’ shrine, built into a vertical cliffside, accessible only by a hazardous climb.',
    location: {
      city: 'Misasa',
      prefecture: 'Tottori Prefecture'
    },
    yearBuilt: 'Unknown (ancient)',
    typeOfShrine: {
      shrineCategory: 'Cliff Shrine',
      enshrinedKami: 'Kannon (Bodhisattva of Mercy)'
    },
    architecturalFeatures: {
      toriiGate: false,
      honden: true,
      haiden: false,
      cliffsideBuilding: true
    },
    religionAndCulture: {
      annualFestivals: ['Sacred Mountain Pilgrimage'],
      ritualPractices: [
        'Spiritual endurance test',
        'Offering pebbles at the summit'
      ],
      artifacts: ['Cliffside temple structures'],
      folklore: [
        'Said to have been built overnight by monks using magic.',
        'Only the truly devoted can complete the dangerous hike.'
      ]
    },
    image:
      'https://www.tokyoweekender.com/wp-content/uploads/2019/05/Tottori-Prefecture-Mount-Mitoku-featured-image.jpg'
  }
]
export default shrines
