export interface NameOfAllah {
  id: number;
  name: string;
  arabic: string;
  meaning: string;
  explanation: string;
  dhikr: {
    arabic: string;
    transliteration: string;
    translation: string;
  };
}

export const namesOfAllah: NameOfAllah[] = [
  {
    id: 1,
    name: "Ar-Rahman",
    arabic: "الرَّحْمَٰن",
    meaning: "The Most Compassionate",
    explanation: "He is the possessor of immense mercy that covers all creation, believers and non-believers alike. His Rahma is perfect, endless, and will never be outdone. The word encompasses every kind of affection and kindness.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَحْمَٰن، اغْمُرْنِي بِرَحْمَتِكَ الْوَاسِعَة",
      transliteration: "Allahumma ya Rahman, ighmurni birahmatika al-wasi'ah.",
      translation: "O Allah, O Most Compassionate, envelop me in Your vast mercy."
    }
  },
  {
    id: 2,
    name: "Ar-Raheem",
    arabic: "الرَّحِيم",
    meaning: "The Most Merciful",
    explanation: "His specialty mercy is continuous for those who believe, act with sincerity, and seek Him. Ar-Raheem provides His gentle care, forgiveness, and shelter to those who call to Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَحِيم، شْمِلْنِي بِرَحْمَتِكَ الْخَاصَّة وَاغْفِرْ لِي زَلَّاتِي",
      transliteration: "Allahumma ya Raheem, shmilni birahmatika al-khasa wa'ghfir li zalati.",
      translation: "O Allah, O Most Merciful, include me in Your special mercy and forgive my mistakes."
    }
  },
  {
    id: 3,
    name: "Al-Malik",
    arabic: "الْمَلِك",
    meaning: "The Eternal Lord",
    explanation: "The One who possesses the attribute of Mulk (kingdom), dominion, power, authority. Allah is Al Malikul Haqq. He is the One who possesses the disposal of all affairs. He commands, makes and does whatever He wants. And Allah gives Mulk to whoever He wants, as Mulk belongs to Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مَلِك، ارْزُقْنِي قَلْبًا خَاشِعًا لَك",
      transliteration: "Allahumma ya Malik, urzuqnī qalban khāshiʿan lak.",
      translation: "O Allah, O Sovereign King, grant me a heart that humbles itself to You."
    }
  },
  {
    id: 4,
    name: "Al-Quddus",
    arabic: "الْقُدُّوس",
    meaning: "The Most Sacred",
    explanation: "He is pure from all imperfections, transcendent beyond any defect. His perfection is absolute, and He is free from all that is unworthy of His Majesty.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا قُدُّوس، طَهِّرْ قَلْبِي مِن كُلِّ سُوء وَاجْعَلْنِي قَرِيبًا مِنْك",
      transliteration: "Allahumma ya Quddus, tahhir qalbi min kull su' wa'j'alni qariban mink.",
      translation: "O Allah, O Most Sacred, purify my heart from every evil and bring me close to You."
    }
  },
  {
    id: 5,
    name: "As-Salaam",
    arabic: "السَّلَام",
    meaning: "The Source of Peace",
    explanation: "He is the complete source of peace and safety. Every form of peace, wholeness, security, and blessing comes from Him. He grants safety and removes fear from souls.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا سَلَام، أَنزِلِ السَّكِينَة عَلَى قَلْبِي وَاحْفَظْنِي مِن الْقَلَق",
      transliteration: "Allahumma ya Salaam, anzil as-sakina 'ala qalbi wa'hfadhni min al-qalaq.",
      translation: "O Allah, O Source of Peace, send tranquility to my heart and protect me from anxiety."
    }
  },
  {
    id: 6,
    name: "Al-Mu'min",
    arabic: "الْمُؤْمِن",
    meaning: "The Infuser of Faith",
    explanation: "He is the bringer of faith and security, assuring His creation of safety, both spiritual and worldly. He protects the hearts of the righteous and removes their anxieties.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُؤْمِن، ثَبِّتْ إِيمَانِي وَاحْمِنِي مِن الشَّكّ",
      transliteration: "Allahumma ya Mu'min, thabbit eemani wa'hmini min ash-shakk.",
      translation: "O Allah, O Infuser of Faith, strengthen my faith and protect me from doubt."
    }
  },
  {
    id: 7,
    name: "Al-Muhaymin",
    arabic: "الْمُهَيْمِن",
    meaning: "The Protector, The Overseer",
    explanation: "He oversees and safeguards all creatures. Nothing escapes His knowledge or protection. He observes all deeds and grants safety to those who seek it from Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُهَيْمِن، احْمِنِي وَاحْفَظْ عَائِلَتِي مِن كُلِّ سُوء",
      transliteration: "Allahumma ya Muhaymin, ih'mini wa'hfadh 'a'ilati min kull su'.",
      translation: "O Allah, O Protector, guard me and my family from every harm."
    }
  },
  {
    id: 8,
    name: "Al-Aziz",
    arabic: "الْعَزِيز",
    meaning: "The Mighty, The Invincible",
    explanation: "He is invincible and all-powerful. His might cannot be overcome or defeated by any force.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا عَزِيز، قَوِّنِي فِي مُوَاجَهَة الصُّعُوبَات وَامْنَحْنِي الْعِزَّة",
      transliteration: "Allahumma ya Aziz, qawwini fi muwajahat assa'ubat wa'mnahni al-izzah.",
      translation: "O Allah, O Mighty, strengthen me against difficulties and grant me dignity."
    }
  },
  {
    id: 9,
    name: "Al-Jabbar",
    arabic: "الْجَبَّار",
    meaning: "The Compeller",
    explanation: "He is the One who mends brokenness, compels what He wills in creation, and corrects all that is in need of fixing.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا جَبَّار، أَصْلِحْ أَمْرِي وَاجْبُرْ كَسْرِي وَامْنَحْنِي الْقُوَّة عَلَى التَّغَلُّب",
      transliteration: "Allahumma ya Jabbar, asluh amri wa'jbur kasri wa'manahni al-quwwa 'ala at-taghalub.",
      translation: "O Allah, O Compeller, set right my affairs, mend what is broken in me, and grant me strength to overcome."
    }
  },
  {
    id: 10,
    name: "Al-Mutakabbir",
    arabic: "الْمُتَكَبِّر",
    meaning: "The Supreme, The Majestic",
    explanation: "He is exalted above all creation, infinitely majestic, and beyond every trait of creation. He alone deserves true greatness.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُتَكَبِّر، ارْفَعِ عَنِّي الْكِبْرَ وَاجْعَلْنِي مُتَوَاضِعًا أَمَامَ عَظَمَتِك",
      transliteration: "Allahumma ya Mutakabbir, arfa' 'anni al-kibr wa'j'alni mutawadi'an amam azamatik.",
      translation: "O Allah, O Supreme, remove arrogance from my heart and make me humble before Your greatness."
    }
  },
  {
    id: 11,
    name: "Al-Khaliq",
    arabic: "الْخَالِق",
    meaning: "The Creator",
    explanation: "He is the One who created all things out of nothing, with wisdom, precision, and perfection. Every detail in creation reflects His Qudrah.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا خَالِق، اجْعَلْ حَيَاتِي مَلِيئَةً بِالْبَرَكَة وَالْغَرَض الْجَمِيل",
      transliteration: "Allahumma ya Khaliq, ij'al hayati mali'atun bil-baraka wa'l-ghard al-jamil.",
      translation: "O Allah, O Creator, fill my life with blessings and beautiful purpose."
    }
  },
  {
    id: 12,
    name: "Al-Bari'",
    arabic: "الْبَارِئ",
    meaning: "The Evolver",
    explanation: "He shapes and evolves creation according to His will, developing and bringing forth life in perfect form.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَارِئ، طَوِّرْ نَفْسِي وَصِفَاتِي لِلْأَفْضَل",
      transliteration: "Allahumma ya Bari', tawwir nafsi wa sifatī lil-afdal.",
      translation: "O Allah, O Evolver, develop my character and attributes for the better."
    }
  },
  {
    id: 13,
    name: "Al-Musawwir",
    arabic: "الْمُصَوِّر",
    meaning: "The Fashioner of Forms",
    explanation: "He shapes everything as He wills, giving each creation its distinct form, features, and uniqueness.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُصَوِّر، جَمِّلْ خَلْقِي وَخُلُقِي وَأَعْمَالِي",
      transliteration: "Allahumma ya Musawwir, jammil khalqi wa khuluqi wa a'mali.",
      translation: "O Allah, O Fashioner, beautify my appearance, character, and deeds."
    }
  },
  {
    id: 14,
    name: "Al-Ghaffar",
    arabic: "الْغَفَّار",
    meaning: "The Great Forgiver",
    explanation: "He forgives sins again and again, regardless of their magnitude, for those who sincerely seek His mercy.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا غَفَّار، اغْفِرْ لِي ذُنُوبِي وَسَاعِدْنِي عَلَى مَغْفِرَة النَّاس",
      transliteration: "Allahumma ya Ghaffar, ighfir li dhunubi wa sa'idni 'ala maghfirat an-nas.",
      translation: "O Allah, O Great Forgiver, forgive my sins and help me forgive others."
    }
  },
  {
    id: 15,
    name: "Al-Qahhar",
    arabic: "الْقَهَّار",
    meaning: "The All-Prevailing One",
    explanation: "He subdues all things, nothing can resist His authority or escape His control. His will prevails with absolute power.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا قَهَّار، مَكِّنِّي مِن قَهْرِ رَغْبَتِي السَّلْبِيَّة وَثَبِّتْنِي عَلَى الطَّرِيق الْمُسْتَقِيم",
      transliteration: "Allahumma ya Qahhar, makkinni min qahr raghbati as-salbiya wa thabbitni 'ala at-tariq al-mustaqim.",
      translation: "O Allah, O Prevailing One, help me conquer my negative desires and keep me firm on the straight path."
    }
  },
  {
    id: 16,
    name: "Al-Wahhab",
    arabic: "الْوَهَّاب",
    meaning: "The Supreme Bestower",
    explanation: "He gives abundantly and continuously without expecting anything in return. His gifts are countless and endless.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَهَّاب، هَبْ لِي عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا",
      transliteration: "Allahumma ya Wahhab, hab li 'ilman naafi'an wa rizqan wasian.",
      translation: "O Allah, O Supreme Bestower, grant me beneficial knowledge and abundant provision."
    }
  },
  {
    id: 17,
    name: "Ar-Razzaq",
    arabic: "الرَّزَّاق",
    meaning: "The Provider",
    explanation: "He sustains every creature, providing what is needed for bodies and souls, sometimes from unimaginable sources.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَزَّاق، ارْزُقْنِي رِزْقًا حَلَالًا وَاسِعًا",
      transliteration: "Allahumma ya Razzaq, urzuqni rizqan halalan wasi'an.",
      translation: "O Allah, O Provider, grant me wide and halal sustenance."
    }
  },
  {
    id: 18,
    name: "Al-Fattah",
    arabic: "الْفَتَّاح",
    meaning: "The Opener",
    explanation: "He grants clarity, solutions, and success at times when all doors seem closed. He is the opener of hearts, minds, and opportunities.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا فَتَّاح، افْتَحْ أَمَامِي أَبْوَاب الْخَيْر وَالْفَرَج وَالْعِلْم",
      transliteration: "Allahumma ya Fattah, iftah amami abwab al-khayr wal-faraj wal-ilm.",
      translation: "O Allah, O Opener, open before me the doors of goodness, relief, and knowledge."
    }
  },
  {
    id: 19,
    name: "Al-Aleem",
    arabic: "الْعَلِيم",
    meaning: "The All-Knowing",
    explanation: "He knows all that was, is, and will be. Nothing escapes His knowledge—He understands every secret, intention, and action.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا عَلِيم، عَلِّمْنِي مَا يَنْفَعُنِي وَفَهِّمْنِي أُمُور دِينِي وَدُنْيَايَ",
      transliteration: "Allahumma ya Aleem, allimni ma yanfa'ni wa fahhimni umoor deeni wa dunya'i.",
      translation: "O Allah, O All-Knowing, teach me what's beneficial and give me understanding in my religion and worldly matters."
    }
  },
  {
    id: 20,
    name: "Al-Qaabid",
    arabic: "الْقَابِض",
    meaning: "The Withholder",
    explanation: "He withholds provision, mercy, or guidance with wisdom—never out of cruelty. His withholding is always for the benefit of creation.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا قَابِض، أَبْعِدْنِي عَن حُبّ الدُّنْيَا وَامْلَأْ قَلْبِي بِحُبِّك",
      transliteration: "Allahumma ya Qaabid, ab'idni 'an hubb ad-dunya wa'm'la qalbi bihubbik.",
      translation: "O Allah, O Withholder, distance me from worldly attachment and fill my heart with Your love."
    }
  },
  {
    id: 21,
    name: "Al-Baasit",
    arabic: "الْبَاسِط",
    meaning: "The Expander",
    explanation: "He expands sustenance, peace, joy, and opportunities for whomever He wills, according to His wisdom.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَاسِط، وَسِّعْ رِزْقِي وَعُمْرِي وَبَرَكَتِي",
      transliteration: "Allahumma ya Baasit, was-si' rizqi wa 'umri wa barakati.",
      translation: "O Allah, O Expander, widen my provision, my lifetime, and my blessings."
    }
  },
  {
    id: 22,
    name: "Al-Khaafidh",
    arabic: "الْخَافِض",
    meaning: "The Reducer, The Abaser",
    explanation: "He lowers the arrogant, the unjust, and all who defy Him, and He humbles those who stand against truth.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا خَافِض، أَبْعِدْ عَنِّي الْكِبْرَ وَاجْعَلْنِي مُتَوَاضِعًا بَيْنَ يَدَيْك",
      transliteration: "Allahumma ya Khaafidh, ab'id 'anni al-kibr wa'j'alni mutawadi'an bayna yadayk.",
      translation: "O Allah, O Reducer, remove arrogance from me and make me humble before You."
    }
  },
  {
    id: 23,
    name: "Ar-Raafi'",
    arabic: "الرَّافِع",
    meaning: "The Exalter",
    explanation: "He elevates whom He wills in dignity and status, and honors the righteous in both this world and the Hereafter.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَافِع، ارْفَعْ دَرَجَاتِي عِنْدَك وَفِي الدُّنْيَا وَالْآخِرَة",
      transliteration: "Allahumma ya Raafi', irfa' darajati 'indak wa fi'd-dunya wal-akhira.",
      translation: "O Allah, O Exalter, raise my rank in Your sight and in this life and the next."
    }
  },
  {
    id: 24,
    name: "Al-Mu'izz",
    arabic: "الْمُعِزّ",
    meaning: "The Honourer, The Bestower",
    explanation: "He grants honor, faith, and distinction to whomever He wills, raising their status above others.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُعِزّ، أَكْرِمْنِي بِالْعِزَّة وَالْكَرَامَة وَرَفْع الْمَنْزِلَة",
      transliteration: "Allahumma ya Mu'izz, akrimni bil-izzah wal-karama wa raf' al-manzila.",
      translation: "O Allah, O Honourer, honor me with dignity, generosity, and noble elevation."
    }
  },
  {
    id: 25,
    name: "Al-Mudhill",
    arabic: "الْمُذِلّ",
    meaning: "The Dishonourer, The Humiliator",
    explanation: "He brings humiliation to whomever He wills, removing their honor and lowering their status, but never unjustly.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُذِلّ، احْمِنِي مِن الذُّلّ وَالْهَوَان وَكَرِّمْنِي بِطَاعَتِك",
      transliteration: "Allahumma ya Mudhill, ih'mni min az-zull wal-hawan wa karimni bi-ta'atik.",
      translation: "O Allah, O Dishonourer, protect me from disgrace and humiliation, and ennoble me by Your obedience."
    }
  },
  {
    id: 26,
    name: "As-Samee'",
    arabic: "السَّمِيع",
    meaning: "The All-Hearing",
    explanation: "He hears every sound and prayer, no matter how secret. Every plea is within His reach.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا سَمِيع، اسْمَعْ دُعَائِي وَاسْتَجِبْ لِحَاجَتِي",
      transliteration: "Allahumma ya Samee', 'isma' du'ae wa'istajib li hajati.",
      translation: "O Allah, O All-Hearing, hear my supplication and answer my needs."
    }
  },
  {
    id: 27,
    name: "Al-Baseer",
    arabic: "الْبَصِير",
    meaning: "The All-Seeing",
    explanation: "He sees everything in creation, the apparent and the hidden. No detail, action, or intention escapes Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَصِير، أَرِنِي الْحَقّ فِي حَيَاتِي وَاهْدِنِي إِلَيْه",
      transliteration: "Allahumma ya Baseer, arini al-haqq fi hayati wa'ihdini ilayh.",
      translation: "O Allah, O All-Seeing, show me the truth in my life and guide me to it."
    }
  },
  {
    id: 28,
    name: "Al-Hakam",
    arabic: "الْحَكَم",
    meaning: "The Most Just Judge",
    explanation: "He judges with perfect justice and wisdom. His verdicts are always fair and righteous.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَكَم، احْكُمْ لِي بِالْحَقّ وَالْعَدْل",
      transliteration: "Allahumma ya Hakam, ihkum li bil-haqq wal-adl.",
      translation: "O Allah, O Judge, judge for me with truth and justice."
    }
  },
  {
    id: 29,
    name: "Al-Adl",
    arabic: "الْعَدْل",
    meaning: "The Utterly Just",
    explanation: "His justice is perfect and never partial. He is fair in His decrees, laws, and treatment of all creation.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا عَدْل، ارْزُقْنِي الْعَدْل فِي كُلّ مُعَامَلَاتِي",
      transliteration: "Allahumma ya Adl, urzuqni al-adl fi kull ta'amulati.",
      translation: "O Allah, O Utterly Just, grant me justice in all my interactions."
    }
  },
  {
    id: 30,
    name: "Al-Lateef",
    arabic: "اللَّطِيف",
    meaning: "The Most Gentle, The Subtle One",
    explanation: "He is kind and subtle in His actions—His mercy and care reach creation in the most unexpected, delicate ways.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا لَطِيف، الْطُفْ بِي فِي كُلّ أَمْر وَامْنَحْنِي لُطْفَك",
      transliteration: "Allahumma ya Lateef, ultuf bi fi kull amr wa'mnahni lutfak.",
      translation: "O Allah, O Gentle One, be gentle with me in all matters and give me Your kindness."
    }
  },
  {
    id: 31,
    name: "Al-Khabeer",
    arabic: "الْخَبِير",
    meaning: "The All-Aware",
    explanation: "He knows every secret, every hidden matter, and all subtle details. His awareness encompasses the deepest realities.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا خَبِير، عَرِّفْنِي بِعُيُوب نَفْسِي وَأَصْلِحْهَا لِي",
      transliteration: "Allahumma ya Khabeer, 'arrafni bi'uyub nafsi wa aslih-ha li.",
      translation: "O Allah, O All-Aware, show me my flaws and help me fix them."
    }
  },
  {
    id: 32,
    name: "Al-Haleem",
    arabic: "الْحَلِيم",
    meaning: "The Most Forbearing",
    explanation: "He is patient and forbearing with those who disobey Him, giving them time to repent and return.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَلِيم، احْلُمْ عَنِّي وَتَجَاوَزْ عَن خَطَايَايَ",
      transliteration: "Allahumma ya Haleem, ihlum 'anni wa tajawaz 'an khataya'i.",
      translation: "O Allah, O Forbearing, be patient with me and overlook my errors."
    }
  },
  {
    id: 33,
    name: "Al-Azeem",
    arabic: "الْعَظِيم",
    meaning: "The Magnificent, The Supreme",
    explanation: "His greatness is far beyond our imagination—everything about Him is perfect, majestic, and inspiring.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا عَظِيم، اجْعَلْنِي أُقَدِّر عَظَمَتَك وَأُعَظِّمُكَ حَقًّا",
      transliteration: "Allahumma ya 'Azeem, ij'alni aqdir azamatak wa u'azzimuka haqqan.",
      translation: "O Allah, O Magnificent, grant me appreciation of Your greatness and proper reverence."
    }
  },
  {
    id: 34,
    name: "Al-Ghafoor",
    arabic: "الْغَفُور",
    meaning: "The All-Forgiving",
    explanation: "He constantly forgives faults, regardless of their gravity, for those who sincerely repent.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا غَفُور، اغْفِرْ لِي ذُنُوبِي وَاعْصِمْنِي مِن الْعَوْدَة لَهَا",
      transliteration: "Allahumma ya Ghafoor, ighfir li dhunubi wa'isimni min al-awda laha.",
      translation: "O Allah, O All-Forgiving, forgive my sins and shield me from repeating them."
    }
  },
  {
    id: 35,
    name: "Ash-Shakoor",
    arabic: "الشَّكُور",
    meaning: "The Most Appreciative",
    explanation: "He rewards every act of gratitude, multiplying good for those who thank Him. Nothing good is lost.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا شَكُور، اجْعَلْنِي دَائِم الشُّكْر وَأَفْضِنِي بِنِعَمِكَ الْكَثِيرَة",
      transliteration: "Allahumma ya Shakoor, ij'alni da'im ash-shukr wa'afdinni bini'amika al-kathira.",
      translation: "O Allah, O Appreciative, make me always grateful and serve me with Your many favors."
    }
  },
  {
    id: 36,
    name: "Al-Aliyy",
    arabic: "الْعَلِيّ",
    meaning: "The Most High, The Exalted",
    explanation: "He is above all creation in every sense—in power, knowledge, majesty, and perfection.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا عَلِيّ، ارْفَعْنِي إِلَى مَرَاتِب الْعُلَى",
      transliteration: "Allahumma ya Aliyy, irfa'ni ila maratib al-ula.",
      translation: "O Allah, O Most High, raise me to the highest ranks."
    }
  },
  {
    id: 37,
    name: "Al-Kabeer",
    arabic: "الْكَبِير",
    meaning: "The Great, The Most Grand",
    explanation: "His greatness is manifest in everything. He is far above and superior to anything else.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا كَبِير، اجْعَلْ عَظَمَتَك تَمْلَأ قَلْبِي وَأَعْمَالِي",
      transliteration: "Allahumma ya Kabeer, ij'al azamatak tamla' qalbi wa a'mali.",
      translation: "O Allah, O Grand, fill my heart and actions with Your greatness."
    }
  },
  {
    id: 38,
    name: "Al-Hafeez",
    arabic: "الْحَفِيظ",
    meaning: "The Preserver",
    explanation: "He preserves everything by His knowledge and care—nothing is lost from His sight.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَفِيظ، احْفَظْنِي وَأَحِبَّتِي مِن كُلّ سُوء وَضُرّ",
      transliteration: "Allahumma ya Hafeez, ih'fadhni wa 'ahibati min kull su' wa durr.",
      translation: "O Allah, O Preserver, protect me and those I love from all harm and evil."
    }
  },
  {
    id: 39,
    name: "Al-Muqeet",
    arabic: "الْمُقِيت",
    meaning: "The Nourisher",
    explanation: "He provides all that is needed for growth, survival, and well-being to every creation.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُقِيت، ارْزُقْنِي غِذَاءً مُفِيدًا لِلرُّوح وَالْجَسَد",
      transliteration: "Allahumma ya Muqeet, urzuqni ghidha'an mufidan lir-rooh wal-jasad.",
      translation: "O Allah, O Nourisher, provide me with nourishment for my soul and body."
    }
  },
  {
    id: 40,
    name: "Al-Haseeb",
    arabic: "الْحَسِيب",
    meaning: "The Reckoner",
    explanation: "He takes account of all deeds with perfect precision. Nothing escapes His reckoning.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَسِيب، اجْعَلْنِي أُرَاجِع أَعْمَالِي وَأُصْلِح نِيَّتِي",
      transliteration: "Allahumma ya Haseeb, ij'alni uraja' a'mali wa aslih niyyati.",
      translation: "O Allah, O Reckoner, help me review my deeds and correct my intention."
    }
  },
  {
    id: 41,
    name: "Al-Jaleel",
    arabic: "الْجَلِيل",
    meaning: "The Majestic",
    explanation: "His majesty encompasses grandeur in every sense—He is exalted in honor, dignity, and perfection.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا جَلِيل، اجْعَلْنِي أُعَظِّمُكَ كَمَا يَنْبَغِي وَكُنْ لَكَ هَيْبَة فِي قَلْبِي",
      transliteration: "Allahumma ya Jaleel, ij'alni u'azzimuka kama yanbaghi wa kun laka haybah fi qalbi.",
      translation: "O Allah, O Majestic, let me revere You as You deserve and grant You awe in my heart."
    }
  },
  {
    id: 42,
    name: "Al-Kareem",
    arabic: "الْكَرِيم",
    meaning: "The Most Generous",
    explanation: "He is endlessly generous, giving without measure, and rewarding even small acts with great favor.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا كَرِيم، أَغْمِرْنِي بِجُودِك وَعَلِّمْنِي كَيْفَ أُعْطِي الْآخَرِين",
      transliteration: "Allahumma ya Kareem, aghmirni bijudik wa 'allimni kayf a'teel akhareen.",
      translation: "O Allah, O Generous, engulf me with Your bounty and teach me to give to others."
    }
  },
  {
    id: 43,
    name: "Ar-Raqeeb",
    arabic: "الرَّقِيب",
    meaning: "The Watchful",
    explanation: "He is fully aware, watching over every action and intention. Nothing escapes His observation.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَقِيب، رَاقِب عَمَلِي وَاهْدِنِي لِلرُّشْد وَالصَّلَاح",
      transliteration: "Allahumma ya Raqeeb, raqib 'amali wa ihdini lir-rushd wal-salah.",
      translation: "O Allah, O Watchful, oversee my actions and guide me to wisdom and righteousness."
    }
  },
  {
    id: 44,
    name: "Al-Mujeeb",
    arabic: "الْمُجِيب",
    meaning: "The Responsive",
    explanation: "He responds to all who call upon Him, answering prayers in the way that is best.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُجِيب، اسْتَجِبْ دُعَائِي وَحَقِّق رَغْبَاتِي الْمَشْرُوعَة",
      transliteration: "Allahumma ya Mujeeb, istajib du'a'i wa haqqiq raghabaty al-mashrooa.",
      translation: "O Allah, O Responsive, answer my prayers and fulfill my legitimate wishes."
    }
  },
  {
    id: 45,
    name: "Al-Waasi'",
    arabic: "الْوَاسِع",
    meaning: "The All-Encompassing",
    explanation: "He is limitless in mercy, generosity, wisdom, and provision—nothing is outside His reach.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَاسِع، وَسِّعْ قَلْبِي لِلْخَيْر وَأَكْرِمْنِي بِسَعَة رِزْقِك",
      transliteration: "Allahumma ya Waasi', was-si' qalbi lil-khayr wa akrimni bisa'at rizqik.",
      translation: "O Allah, O All-Encompassing, expand my heart for virtue and honor me with wide sustenance."
    }
  },
  {
    id: 46,
    name: "Al-Hakeem",
    arabic: "الْحَكِيم",
    meaning: "The All-Wise",
    explanation: "His wisdom envelops all decrees, laws, and events. Every act is done with perfect wisdom.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَكِيم، ارْزُقْنِي حِكْمَة فِي قَرَارَاتِي وَتَصَرُّفَاتِي",
      transliteration: "Allahumma ya Hakeem, urzuqni hikmah fi qararati wa tasarrufati.",
      translation: "O Allah, O Wise, grant me wisdom in my decisions and actions."
    }
  },
  {
    id: 47,
    name: "Al-Wadud",
    arabic: "الْوَدُود",
    meaning: "The Most Loving",
    explanation: "He loves His creation and grants affection, mercy, and acceptance to those who draw near.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَدُود، امْلَأ قَلْبِي بِحُبِّك وَحُبّ خَلْقِك وَاجْعَلْنِي مَحْبُوبًا لَدَيْك",
      transliteration: "Allahumma ya Wadud, imla qalbi bihubbik wa hubb khalqik wa ij'alni mahbuban ladayk.",
      translation: "O Allah, O Loving, fill my heart with love for You and Your creation, and make me beloved to You."
    }
  },
  {
    id: 48,
    name: "Al-Majeed",
    arabic: "الْمَجِيد",
    meaning: "The Glorious",
    explanation: "His glory is tremendous, encompassing every attribute of magnificence and nobility.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مَجِيد، أَكْرِمْنِي بِمَجْد فِي الدُّنْيَا وَالْآخِرَة",
      transliteration: "Allahumma ya Majeed, akrimni bimaajid fi'd-dunya wal-akhira.",
      translation: "O Allah, O Glorious, honor me with glory in this life and the Hereafter."
    }
  },
  {
    id: 49,
    name: "Al-Ba'ith",
    arabic: "الْبَاعِث",
    meaning: "The Resurrector",
    explanation: "He awakens souls, raises the dead, and inspires the hearts of believers toward righteousness.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَاعِث، أَحْيِ رُوحِي بِالْإِيمَان وَجَدِّدْ عَزِيمَتِي",
      transliteration: "Allahumma ya Ba'ith, ahyi roohi bil-iman wa jaddid azeemati.",
      translation: "O Allah, O Resurrector, revive my spirit with faith and renew my resolve."
    }
  },
  {
    id: 50,
    name: "Ash-Shaheed",
    arabic: "الشَّهِيد",
    meaning: "The Witness",
    explanation: "He witnesses everything openly and secretly, and will bear witness for or against us on the Day of Judgement.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا شَهِيد، اشْهَدْ لِي بِالْإِيمَان وَالْعَمَل الصَّالِح",
      transliteration: "Allahumma ya Shaheed, ishhad li bil-iman wal-'amal as-salih.",
      translation: "O Allah, O Witness, testify for me in faith and righteous deeds."
    }
  },
  {
    id: 51,
    name: "Al-Haqq",
    arabic: "الْحَقّ",
    meaning: "The Truth",
    explanation: "He is the absolute and undeniable truth. All reality exists by His will, and His promises are always fulfilled.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَقّ، ثَبِّتْنِي عَلَى الْحَقّ وَانْصُرْنِي بِه",
      transliteration: "Allahumma ya Haqq, thabbitni 'ala al-haqq wa ansurni bih.",
      translation: "O Allah, O Truth, keep me steadfast upon truth and grant me victory through it."
    }
  },
  {
    id: 52,
    name: "Al-Wakeel",
    arabic: "الْوَكِيل",
    meaning: "The Trustee",
    explanation: "He is the best manager, relying on Him assures security, and His protection is unmatched.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَكِيل، دَبِّرْ لِي أَمْرِي وَثَبِّتْ تَوَكُّلِي عَلَيْك",
      transliteration: "Allahumma ya Wakeel, dabbir li amri wa thabbit tawakkuli 'alayk.",
      translation: "O Allah, O Trustee, manage my affairs and strengthen my trust in You."
    }
  },
  {
    id: 53,
    name: "Al-Qawiyy",
    arabic: "الْقَوِيّ",
    meaning: "The All-Strong",
    explanation: "His power has no limit—all strength, ability, and authority originates with Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا قَوِيّ، قَوِّنِي فِي مُوَاجَهَة ابْتِلَاءَات الدُّنْيَا",
      transliteration: "Allahumma ya Qawiyy, qawwini fi muwajahat ibtilaat ad-dunya.",
      translation: "O Allah, O Strong, empower me in facing the trials of life."
    }
  },
  {
    id: 54,
    name: "Al-Mateen",
    arabic: "الْمَتِين",
    meaning: "The Firm, The Steadfast",
    explanation: "He is unshakeable, firm in power and decree, and nothing can diminish His might.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مَتِين، ثَبِّتْ إِيمَانِي وَقُوَّتِي فِي كُلّ الظُّرُوف",
      transliteration: "Allahumma ya Mateen, thabbit eimani wa quwati fi kull az-zuruf.",
      translation: "O Allah, O Firm, stabilize my faith and resilience in every circumstance."
    }
  },
  {
    id: 55,
    name: "Al-Waliyy",
    arabic: "الْوَلِيّ",
    meaning: "The Protecting Friend",
    explanation: "He is the intimate friend and protector of those who draw near, always providing care and support.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَلِيّ، كُن لِي نَصِيرًا وَحَامِيًا فِي كُلّ شِدَّة",
      transliteration: "Allahumma ya Waliyy, kun li naseeran wa hamiyan fi kull shidda.",
      translation: "O Allah, O Protecting Friend, be my supporter and guardian in every hardship."
    }
  },
  {
    id: 56,
    name: "Al-Hameed",
    arabic: "الْحَمِيد",
    meaning: "The Praiseworthy",
    explanation: "He is worthy of praise for every blessing; every praiseworthy thing is due to His favor.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَمِيد، أَلْهِمْنِي بِحَمْدِك وَامْنَحْنِي الثَّنَاء الْحَسَن",
      transliteration: "Allahumma ya Hameed, al-himni bihamdik wa amnihni ath-thana' al-hasan.",
      translation: "O Allah, O Praiseworthy, inspire me to praise You and grant me a good reputation."
    }
  },
  {
    id: 57,
    name: "Al-Muhsee",
    arabic: "الْمُحْصِي",
    meaning: "The Reckoner, The Enumerator",
    explanation: "He numbers all things with perfect accuracy; nothing escapes His record.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُحْصِي، أَحْصِ أَعْمَالِي وَاجْعَلْنِي حَرِيصًا عَلَى الطَّاعَة",
      transliteration: "Allahumma ya Muhsee, ihsi a'mali wa ij'alni harisan 'ala at-ta'a.",
      translation: "O Allah, O Enumerator, count my deeds and make me eager in obedience."
    }
  },
  {
    id: 58,
    name: "Al-Mubdi'",
    arabic: "الْمُبْدِئ",
    meaning: "The Originator",
    explanation: "He initiates creation from nothing, and every innovation or new start begins with His will.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُبْدِئ، أَنْشِئ فِي قَلْبِي بِدَايَة جَدِيدَة لِلْخَيْر",
      transliteration: "Allahumma ya Mubdi, anshi' fi qalbi bidayatan jadeedatan lil-khayr.",
      translation: "O Allah, O Originator, create in my heart a new beginning for goodness."
    }
  },
  {
    id: 59,
    name: "Al-Mu'eed",
    arabic: "الْمُعِيد",
    meaning: "The Restorer",
    explanation: "He restores life after death, brings back blessings lost, and renews what was thought finished.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُعِيد، أَعِدْ إِلَيَّ الْخَيْر الَّذِي فَقَدْتُه وَأَصْلِح أَمْرِي",
      transliteration: "Allahumma ya Mueed, a'id ilayya al-khayr al-ladhi faqadtuhu wa aslih amri.",
      translation: "O Allah, O Restorer, return to me the goodness I have lost and rectify my affairs."
    }
  },
  {
    id: 60,
    name: "Al-Muhyi",
    arabic: "الْمُحْيِي",
    meaning: "The Giver of Life",
    explanation: "He bestows life upon all things—physical and spiritual revival are both by His command.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُحْيِي، أَحْيِ قَلْبِي بِالْإِيمَان وَارْزُقْنِي حَيَاة طَيِّبَة",
      transliteration: "Allahumma ya Muhyi, ahyi qalbi bil-iman wa urzuqni hayat tayyiba.",
      translation: "O Allah, O Giver of Life, revive my heart with faith and grant me a good life."
    }
  },
  {
    id: 61,
    name: "Al-Mumeet",
    arabic: "الْمُمِيت",
    meaning: "The Caster of Death",
    explanation: "He alone gives life and takes it away. Death happens by His command as a transition to the next stage.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُمِيت، اجْعَلْ مَوْتِي خَيْر خِتَام وَأَعْطِنِي حُسْن الْخَاتِمَة",
      transliteration: "Allahumma ya Mumeet, ij'al mawti khayr khitam wa a'tini husn al-khatima.",
      translation: "O Allah, O Bringer of Death, let my death be a good ending and grant me a blessed final state."
    }
  },
  {
    id: 62,
    name: "Al-Hayy",
    arabic: "الْحَيّ",
    meaning: "The Ever-Living",
    explanation: "He never dies or diminishes; His life is perfect and eternal, and He revives every living and spiritual thing.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا حَيّ، أَحْيِ قَلْبِي بِذِكْرِك وَحُضُورِك فِي حَيَاتِي",
      transliteration: "Allahumma ya Hayy, ahyi qalbi bidhikrik wa hudurak fi hayati.",
      translation: "O Allah, O Ever-Living, revive my heart through Your remembrance and presence in my life."
    }
  },
  {
    id: 63,
    name: "Al-Qayyoom",
    arabic: "الْقَيُّوم",
    meaning: "The Sustainer, The Self-Subsisting",
    explanation: "He manages all creation with perfect ability and does not tire or sleep; everything stands by Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا قَيُّوم، ثَبِّتْنِي عَلَى الطَّرِيق وَادْعَمْ أَمْرِي بِاسْتِمْرَار",
      transliteration: "Allahumma ya Qayyoom, thabbitni 'ala at-tariq wa ad'am amri bistimrar.",
      translation: "O Allah, O Sustainer, keep me firm on the path and continually support my affairs."
    }
  },
  {
    id: 64,
    name: "Al-Waajid",
    arabic: "الْوَاجِد",
    meaning: "The Perceiver",
    explanation: "He possesses everything; He finds and grants whatever He wills to whomever he wants.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَاجِد، عَرِّفْنِي عَلَى نِعَامِك وَأَشْعِرْنِي بِعَظَمَتِك فِي حَيَاتِي",
      transliteration: "Allahumma ya Waajid, 'arrafni 'ala ni'amak wa ash'arni bi'azamatak fi hayati.",
      translation: "O Allah, O Perceiver, help me recognize Your gifts and sense Your greatness daily."
    }
  },
  {
    id: 65,
    name: "Al-Majid",
    arabic: "الْمَاجِد",
    meaning: "The Illustrious, the Magnificent",
    explanation: "He is absolutely glorious and magnificent in all His attributes and actions.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مَاجِد، أَكْرِمْنِي بِالْعِزَّة فِي الدِّين وَالدُّنْيَا",
      transliteration: "Allahumma ya Majid, akrimni bil-'izzah fi ad-deen wa ad-dunya.",
      translation: "O Allah, O Illustrious, honor me with dignity in my faith and my life."
    }
  },
  {
    id: 66,
    name: "Al-Waahid",
    arabic: "الْوَاحِد",
    meaning: "The One",
    explanation: "He alone is singular in every aspect; no one shares His essence, attributes, or authority.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَاحِد، وَحِّدْ قَلْبِي فِي طَاعَتِك وَأَبْعِدْنِي عَن الشِّرْك",
      transliteration: "Allahumma ya Waahid, wahhid qalbi fi ta'atik wa ab'idni 'an ash-shirk.",
      translation: "O Allah, O One, unify my heart in Your worship and distance me from all forms of association."
    }
  },
  {
    id: 67,
    name: "Al-Ahad",
    arabic: "الأَحَد",
    meaning: "The Unique, The Only One",
    explanation: "He is absolutely unique in His nature, Oneness, and sufficiency; none are like Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا أَحَد، اجْعَلْنِي مُخْلِصًا لَكَ وَحْدَك فِي نِيَّتِي وَعَقِيدَتِي",
      transliteration: "Allahumma ya Ahad, ij'alni mukhlisan laka wahdak fi niyyati wa 'aqidati.",
      translation: "O Allah, O Unique, make me sincerely devoted to You alone in my intention and belief."
    }
  },
  {
    id: 68,
    name: "As-Samad",
    arabic: "الصَّمَد",
    meaning: "The Eternal, Satisfier of Needs",
    explanation: "Absolute in perfection, entirely self-sufficient, and every need is fulfilled only through Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا صَمَد، اقْضِ حَاجَتِي وَامْلَأ قَلْبِي بِالْاعْتِمَاد عَلَيْك",
      transliteration: "Allahumma ya Samad, iqdi hajati wa imla' qalbi bil-i'timad 'alayk.",
      translation: "O Allah, O Eternal, satisfy my needs and fill my heart with reliance on You."
    }
  },
  {
    id: 69,
    name: "Al-Qadeer",
    arabic: "الْقَادِر",
    meaning: "The Omnipotent One",
    explanation: "He has absolute power over all things, and nothing is beyond His capability.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا قَادِر، مَكِّنِّي مِن تَحْقِيق الْخَيْر وَأَبْعِدْ عَنِّي الشَّرّ",
      transliteration: "Allahumma ya Qadeer, makkinni min tahqiq al-khayr wa ab'id 'anni ash-sharr.",
      translation: "O Allah, O Omnipotent, empower me to attain goodness and keep me away from evil."
    }
  },
  {
    id: 70,
    name: "Al-Muqtadir",
    arabic: "الْمُقْتَدِر",
    meaning: "The Powerful",
    explanation: "His power and decree are irresistible, and He controls all things with perfect mastery.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُقْتَدِر، أَظْهِرْ قُوَّتَك لِي فِي مُوَاجَهَة كُلّ تَحَدٍّ",
      transliteration: "Allahumma ya Muqtadir, azhir quwwataka li fi muwajihat kull tahaddi.",
      translation: "O Allah, O Powerful, manifest Your power for me in facing every challenge."
    }
  },
  {
    id: 71,
    name: "Al-Muqaddim",
    arabic: "الْمُقَدِّم",
    meaning: "The Expediter",
    explanation: "He brings forth what should be brought forward—opportunities, relief, and answers—according to His wisdom.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُقَدِّم، قَدِّمْ لِي الْخَيْر وَيَسِّرْ أَمْرِي",
      transliteration: "Allahumma ya Muqaddim, qaddim li al-khayr wa yassir amri.",
      translation: "O Allah, O Expediter, advance goodness for me and ease my affairs."
    }
  },
  {
    id: 72,
    name: "Al-Mu'akhkhir",
    arabic: "الْمُؤَخِّر",
    meaning: "The Delayer",
    explanation: "He postpones what needs to be delayed for reasons only He knows, sometimes to teach us patience, growth, and trust.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُؤَخِّر، أَخِّرْ عَنِّي الشَّرّ وَامْنَحْنِي الصَّبْر حَتَّى أَرَى الْخَيْر",
      transliteration: "Allahumma ya Mu'akhkhir, akhir 'anni ash-sharr wa amnihni as-sabr hatta ara al-khayr.",
      translation: "O Allah, O Delayer, delay harm from me and grant me patience until I see good."
    }
  },
  {
    id: 73,
    name: "Al-Awwal",
    arabic: "الأَوَّل",
    meaning: "The First",
    explanation: "He existed before all things; He is the Origin of everything and every blessing begins with Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا أَوَّل، اجْعَلْنِي مِن السَّابِقِين لِلْخَيْر وَأَكْرِمْنِي بِالْبَدَء فِي الطَّاعَات",
      transliteration: "Allahumma ya Awwal, ij'alni min as-sabiqeen lil-khayr wa akrimni bil-bada' fi at-ta'at.",
      translation: "O Allah, O First, make me among the first to do good and honor me with beginnings in devotion."
    }
  },
  {
    id: 74,
    name: "Al-Aakhir",
    arabic: "الآخِر",
    meaning: "The Last",
    explanation: "He will exist after all else perishes; His eternity is unmatched and His mercy endures always.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا آخِر، ارْزُقْنِي حُسْن الْخَاتِمَة وَاجْعَلْ آخِرَتِي أَفْضَل مِن دُنْيَايَ",
      transliteration: "Allahumma ya Aakhir, urzuqni husn al-khatimah wa ij'al akhirati afdal min dunya'i.",
      translation: "O Allah, O Last, grant me a good ending and make my Hereafter better than my worldly life."
    }
  },
  {
    id: 75,
    name: "Az-Zahir",
    arabic: "الظَّاهِر",
    meaning: "The Manifest",
    explanation: "He is evident in creation, manifest in every blessing and sign. Recognizing Him opens doors to faith and insight.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا ظَاهِر، أَظْهِرْ لِي عَلَامَاتِك وَأَرْشِدْنِي لِفَهْم حِكْمَتِك",
      transliteration: "Allahumma ya Zahir, azhir li alamatak wa arshidni li fahm hikmatik.",
      translation: "O Allah, O Manifest, show me Your signs and guide me to understand Your wisdom."
    }
  },
  {
    id: 76,
    name: "Al-Baatin",
    arabic: "الْبَاطِن",
    meaning: "The Hidden",
    explanation: "He is hidden from sight but known by the effects of His actions; His wisdom is often unseen but always present.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَاطِن، أَظْهِرْ لِي حِكْمَتَك الْخَفِيَّة وَارْزُقْنِي الْفَهْم الْعَمِيق",
      transliteration: "Allahumma ya Baatin, azhir li hikmatak al-khafiyyah wa urzuqni al-fahm al-'amiq.",
      translation: "O Allah, O Hidden, reveal to me Your subtle wisdom and grant me deep understanding."
    }
  },
  {
    id: 77,
    name: "Al-Waali",
    arabic: "الْوَالِي",
    meaning: "The Governor",
    explanation: "He oversees everything and manages all creation perfectly, working for the well-being of His servants.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَالِي، تَوَلَّ أَمْرِي بِحِكْمَتِك وَوَفِّقْنِي لِلْخَيْر",
      transliteration: "Allahumma ya Waali, tawalla amri bihikmatik wa waffiqni lil-khayr.",
      translation: "O Allah, O Governor, manage my affairs with Your wisdom and guide me to virtue."
    }
  },
  {
    id: 78,
    name: "Al-Muta'ali",
    arabic: "الْمُتَعَالِي",
    meaning: "The Self-Exalted",
    explanation: "He is far above anything in creation in status, glory, and perfection—none compare to Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُتَعَالِي، ارْفَعْنِي فَوْقَ كُلّ أَمْر دُنْيَوِيّ وَأَكْرِمْنِي بِالْقُرْب مِنْك",
      transliteration: "Allahumma ya Muta'ali, irfa'ni fawqa kull amr dunyawiyy wa akrimni bil-qurb mink.",
      translation: "O Allah, O Self-Exalted, elevate me above worldly matters and honor me with closeness to You."
    }
  },
  {
    id: 79,
    name: "Al-Barr",
    arabic: "الْبَرّ",
    meaning: "The Source of All Goodness",
    explanation: "He is the source of all goodness, kindness, compassion, and virtue shown in creation.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَرّ، ارْزُقْنِي الْخَيْر فِي أَخْلَاقِي وَأَفْعَالِي",
      transliteration: "Allahumma ya Barr, urzuqni al-khayr fi akhlaqi wa af'ali.",
      translation: "O Allah, O Source of Goodness, grant me goodness in my character and actions."
    }
  },
  {
    id: 80,
    name: "At-Tawwaab",
    arabic: "التَّوَّاب",
    meaning: "The Ever-Acceptor of Repentance",
    explanation: "He constantly accepts repentance from every person who returns to Him sincerely, granting endless chances.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا تَوَّاب، تَقَبَّلْ تَوْبَتِي وَاهْدِنِي لِبِدَايَات جَدِيدَة",
      transliteration: "Allahumma ya Tawwaab, taqabbal tawbati wa ihdini li bidayat jadeeda.",
      translation: "O Allah, O Acceptor of Repentance, accept my repentance and guide me to new beginnings."
    }
  },
  {
    id: 81,
    name: "Al-Muntaqim",
    arabic: "الْمُنْتَقِم",
    meaning: "The Avenger",
    explanation: "He avenges injustice and rights wrongs for those whom He wills; His retribution is measured and just.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُنْتَقِم، دَافِعْ عَنِّي ظُلْم النَّاس وَرُدَّ حَقِّي وَأَحْسِن نِيَّتِي",
      transliteration: "Allahumma ya Muntaqim, dafi' anni zulm an-nas wa rudd haqqi wa ahsin niyyati.",
      translation: "O Allah, O Avenger, defend me against injustice, return my rights, and purify my intention."
    }
  },
  {
    id: 82,
    name: "Al-Afuww",
    arabic: "الْعَفُوّ",
    meaning: "The Pardoner",
    explanation: "He erases every trace of sin for those who ask sincerely—His pardon goes beyond forgiveness, removing every consequence.",
    dhikr: {
      arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
      transliteration: "Allahumma innaka 'Afuwwun Kareemun tuhibbu al-'afwa fa'fu anni.",
      translation: "O Allah, truly You are Pardoning and Generous; You love to pardon, so pardon me."
    }
  },
  {
    id: 83,
    name: "Ar-Ra'oof",
    arabic: "الرَّؤُوف",
    meaning: "The Most Kind",
    explanation: "His kindness surpasses what we can imagine, and His mercy envelops His servants with warmth.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَؤُوف، كُن رَحِيمًا بِي وَبِأَهْلِي وَأَحْسِن لُطْفَك بِنَا",
      transliteration: "Allahumma ya Ra'oof, kun rahiman bi wa bi-ahli wa ahsin lutfaka bina.",
      translation: "O Allah, O Kind, be merciful with me and my family, and show us Your gentleness."
    }
  },
  {
    id: 84,
    name: "Malik-ul-Mulk",
    arabic: "مَالِكُ الْمُلْك",
    meaning: "Owner of All Sovereignty",
    explanation: "He owns all dominion and authority; every kingdom is His, and He bestows sovereignty on whom He wills.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مَالِكَ الْمُلْك، احْكُمْ لِي بِالْخَيْر وَأَكْرِمْنِي بِعَدْلِك وَكَرَمِك",
      transliteration: "Allahumma ya Malik ul Mulk, hikm li bil-khayr wa akrimni bi-adlik wa karamika.",
      translation: "O Allah, O Owner of all sovereignty, judge me with goodness and honor me with Your justice and generosity."
    }
  },
  {
    id: 85,
    name: "Dhul-Jalali wal-Ikraam",
    arabic: "ذُو الْجَلَالِ وَالْإِكْرَام",
    meaning: "Possessor of Glory and Honour",
    explanation: "He is the ultimate source of majesty and bountiful generosity in every sense.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا ذَا الْجَلَالِ وَالْإِكْرَام، اجْعَلْنِي مُكَرَّمًا فِي الدُّنْيَا وَالْآخِرَة",
      transliteration: "Allahumma ya Dhul-Jalaali wal-Ikraam, ij'alni mukarraman fi'd-dunya wal-akhirah.",
      translation: "O Allah, O Possessor of glory and honor, make me honored in this world and the Hereafter."
    }
  },
  {
    id: 86,
    name: "Al-Muqsit",
    arabic: "الْمُقْسِط",
    meaning: "The Just One",
    explanation: "He dispenses justice with precision and fairness; equity is His attribute in all dealings.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُقْسِط، أَظْهِرِ الْعَدَالَة فِي عَلَاقَاتِي وَأَحْسِن إِنْصَافِي لِلنَّاس",
      transliteration: "Allahumma ya Muqsit, azhir al-'adala fi 'alaqati wa ahsin insafi lil-nas.",
      translation: "O Allah, O Just One, manifest justice in my relationships and help me be fair to others."
    }
  },
  {
    id: 87,
    name: "Al-Jaami'",
    arabic: "الْجَامِع",
    meaning: "The Gatherer",
    explanation: "He brings together people, hearts, and events as He wills; He unites what was separated for best outcomes.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا جَامِع، اجْمَعْنِي مَعَ الصَّالِحِين وَوَحِّدْ قَلْبِي بِالْإِيمَان",
      transliteration: "Allahumma ya Jami', ijma'ni ma'a as-salihin wa wahhid qalbi bil-iman.",
      translation: "O Allah, O Gatherer, gather me with the righteous and unite my heart in faith."
    }
  },
  {
    id: 88,
    name: "Al-Ghaniyy",
    arabic: "الْغَنِيّ",
    meaning: "The Self-Sufficient, The Wealthy",
    explanation: "He needs nothing and no one, and enriches whom He wills in countless ways.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا غَنِيّ، أَغْنِنِي عَن غَيْرِك وَامْلَأ قَلْبِي بِالْقَنَاعَة",
      transliteration: "Allahumma ya Ghaniyy, aghnini 'an ghayrik wa amla' qalbi bil-qana'ah.",
      translation: "O Allah, O Self-Sufficient, make me independent of anyone but You and fill my heart with contentment."
    }
  },
  {
    id: 89,
    name: "Al-Mughni",
    arabic: "الْمُغْنِي",
    meaning: "The Enricher",
    explanation: "He provides richness, abundance, and beneficial assets—sometimes in wholly unexpected ways.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مُغْنِي، امْنَحْنِي الْقُدْرَة عَلَى إِثْرَاء نَفْسِي وَالْآخَرِين بِالْخَيْر",
      transliteration: "Allahumma ya Mughniyy, amnihni al-qudra 'ala ithra' nafsi wal-akharin bil-khayr.",
      translation: "O Allah, O Enricher, grant me the ability to enrich myself and others with goodness."
    }
  },
  {
    id: 90,
    name: "Al-Maani'",
    arabic: "الْمَانِع",
    meaning: "The Withholder",
    explanation: "He withholds by wisdom and mercy; what He prevents is for our protection and benefit.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا مَانِع، احْمِنِي مِن الشَّرّ وَارْزُقْنِي الْخَيْر وَحْدَك",
      transliteration: "Allahumma ya Maani', ihmini min ash-sharr wa urzuqni al-khayr wahdak.",
      translation: "O Allah, O Withholder, protect me from harm and grant me good from Yourself alone."
    }
  },
  {
    id: 91,
    name: "Ad-Daarr",
    arabic: "الضَّارّ",
    meaning: "The Harmer/Tester",
    explanation: "He allows harm, difficulty, and tests for higher wisdom, growth, and purification—never out of cruelty.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا ضَارّ، احْمِنِي مِن الضُّرّ وَالْطُفْ بِي فِي الْبَلَاء",
      transliteration: "Allahumma ya Daarr, ihmini min ad-durr wa ultuf bi fi al-balaa'.",
      translation: "O Allah, O Harmer/Tester, protect me from harm and be gentle with me during trials."
    }
  },
  {
    id: 92,
    name: "An-Naafi'",
    arabic: "النَّافِع",
    meaning: "The Benefactor",
    explanation: "He brings benefit and blessings to whomever He wills, in every aspect of life and afterlife.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا نَافِع، انْفَعْنِي بِكُلّ خَيْر وَادْفَعْ عَنِّي كُلَّ ضُرّ",
      transliteration: "Allahumma ya Naafi', anfa'ni bikulli khayr wa idfa' 'anni kulla durr.",
      translation: "O Allah, O Benefactor, benefit me with all good and protect me from all harm."
    }
  },
  {
    id: 93,
    name: "An-Noor",
    arabic: "النُّور",
    meaning: "The Light",
    explanation: "He is the ultimate source of light—physical, spiritual, guidance, and hope.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا نُور، أَنِرْ قَلْبِي وَدَرْبِي بِنُورِك وَاجْعَلْنِي سَبَبًا لِلْخَيْر",
      transliteration: "Allahumma ya Noor, anir qalbi wa darbi binurik wa ij'alni sababaan lilkhayr.",
      translation: "O Allah, O Light, illuminate my heart and path with Your light and make me a source of goodness."
    }
  },
  {
    id: 94,
    name: "Al-Haadi",
    arabic: "الْهَادِي",
    meaning: "The Guide",
    explanation: "He guides hearts, minds, and destinies toward truth and salvation, lighting the way with wisdom.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا هَادِي، أَرْشِدْنِي إِلَى الصِّرَاط الْمُسْتَقِيم فِي كُلّ قَرَار",
      transliteration: "Allahumma ya Haadi, arshidni ila as-sirat al-mustaqim fi kull qarar.",
      translation: "O Allah, O Guide, direct me to the straight path in every decision."
    }
  },
  {
    id: 95,
    name: "Al-Badee'",
    arabic: "الْبَدِيع",
    meaning: "The Incomparable Originator",
    explanation: "He creates with no model or precedent; all originality and innovation stem from Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَدِيع، أَبْدِعْ لِي فِي الْحُلُول وَبَارِك لِي فِي الْابْتِكَار",
      transliteration: "Allahumma ya Badee', abdi' li fi al-hulool wa barik li fi al-ibtikar.",
      translation: "O Allah, O Originator, create for me solutions and bless me with creativity."
    }
  },
  {
    id: 96,
    name: "Al-Baaqi",
    arabic: "الْبَاقِي",
    meaning: "The Everlasting",
    explanation: "His existence is eternal, unaffected by change or end, and He grants permanence to the righteous.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا بَاقِي، اجْعَلْ أَعْمَالِي الصَّالِحَة دَائِمَة وَأَكْرِمْنِي بِبَقَاء الْخَيْر",
      transliteration: "Allahumma ya Baaqi, ij'al a'mali as-salihah daimah wa akrimni bi baqa' al-khayr.",
      translation: "O Allah, O Everlasting, make my good deeds enduring and bless me with lasting goodness."
    }
  },
  {
    id: 97,
    name: "Al-Waarith",
    arabic: "الْوَارِث",
    meaning: "The Inheritor",
    explanation: "He inherits all that remains when creation perishes; every possession and legacy returns to Him.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا وَارِث، مِلْكَ أَمْرِي عِنْدَ انْقِطَاع الْأَسْبَاب وَارْزُقْنِي عِنْدَ الْحَاجَة",
      transliteration: "Allahumma ya Waarith, milka amri 'inda inqita' al-asbab wa urzuqni 'inda al-hajah.",
      translation: "O Allah, O Inheritor, take charge of my affairs when all means are gone and provide for me in need."
    }
  },
  {
    id: 98,
    name: "Ar-Rasheed",
    arabic: "الرَّشِيد",
    meaning: "The Guide to the Right Path",
    explanation: "He guides with perfect wisdom those who seek sound understanding, judgment, and practical success.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا رَشِيد، أَرْشِدْنِي إِلَى اتِّخَاذ الْقَرَارَات السَّائِبَة وَوَفِّقْنِي لِلْخَيْر",
      transliteration: "Allahumma ya Rasheed, arshidni ila ittikhadh al-qaraarat as-sa'ibah wa waffiqni lilkhayr.",
      translation: "O Allah, O Guide to the Right Path, direct me to wise decisions and grant me success in goodness."
    }
  },
  {
    id: 99,
    name: "As-Saboor",
    arabic: "الصَّبُور",
    meaning: "The Patient",
    explanation: "His patience is infinite; He does not hasten punishment, allowing time for reflection, repentance, and growth.",
    dhikr: {
      arabic: "اللَّهُمَّ يَا صَبُور، امْنَحْنِي الصَّبْر عَلَى الْبَلَاء وَالثَّبَات فِي الطَّاعَة",
      transliteration: "Allahumma ya Saboor, amnihni as-sabr 'ala al-balaa' wa ath-thabat fi at-ta'ah.",
      translation: "O Allah, O Patient, grant me patience in hardship and steadfastness in obedience."
    }
  }
];
