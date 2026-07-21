const rubrics = [
  { id: "fashion", title: "fashion", note: "fashion films, campaigns, editorials" },
  { id: "music", title: "music", note: "music videos and live visual pieces" },
  { id: "commercials", title: "commercials", note: "brand films, social cuts, campaigns" },
  { id: "documentary", title: "documentary", note: "places, people, field stories" },
  { id: "videoart", title: "videoart", note: "art projects and experimental images" },
  { id: "ai", title: "AI", note: "AI visuals, generated images, experiments" },
  { id: "reels", title: "reels", note: "short cuts and social formats" },
  { id: "photo", title: "photo", note: "photo stories, portraits, stills" }
];

const works = [
  { slug: "pketar-catch-em-all", title: "Pketar x Others", categories: ["ai", "photo"], image: "assets/images/pketar-catch-em-all-01.webp" },
  { slug: "daena", title: "Daena", categories: ["music"], image: "assets/legacy/4808d3cc72eb6c5b28ef.webp" },
  { slug: "elle", title: "Elle", categories: ["fashion", "commercials"], image: "assets/legacy/1b6e5bbdd85598cc1bdf.webp" },
  { slug: "noize", title: "Noize MC", categories: ["music"], image: "assets/legacy/8b6fe60d765410274cb2.webp" },
  { slug: "alfa-bank-commercial", title: "Alfa Bank commercial", categories: ["reels", "commercials"], image: "assets/images/alfa-bank-commercial-01-poster.jpg" },
  { slug: "lancome-bafta-bts", title: "BAFTA BTS for Lancome", categories: ["reels", "commercials"], image: "assets/images/lancome-bafta-bts-01-poster.jpg" },
  { slug: "caspian", title: "Caspian", categories: ["fashion", "commercials"], image: "assets/legacy/853e611b3edf05f400f9.webp" },
  { slug: "flat22", title: "Flat22", categories: ["fashion", "commercials"], image: "assets/legacy/93134bd254b5622b6b08.webp" },
  { slug: "more-is-love", title: "More is love", categories: ["reels", "fashion"], image: "assets/images/more-is-love-01-poster.jpg" },
  { slug: "sildi", title: "Sildi", categories: ["commercials", "documentary"], image: "assets/legacy/aace6eb01f2c83e59538.webp" },
  { slug: "zabit", title: "Zabit", categories: ["commercials"], image: "assets/legacy/80ddc81c825d50db4c07.webp" },
  { slug: "measureanji", title: "Measure Anji", categories: ["fashion", "commercials"], image: "assets/legacy/40e58791fffc8b0da6e8.webp" },
  { slug: "donutsday", title: "Donuts Day", categories: ["commercials"], image: "assets/legacy/0ec43d844f252a9634a6.webp" },
  { slug: "wayhome", title: "Way Home", categories: ["videoart"], image: "assets/legacy/2f2e8e4b69005a4097b0.webp" },
  { slug: "alice", title: "Alice", categories: ["videoart"], image: "assets/legacy/d9330974cd9f3270b1e7.webp" },
  { slug: "dagestan", title: "Dagestan", categories: ["commercials"], image: "assets/legacy/a80d8d994e5c93060d18.webp" },
  { slug: "pankisi", title: "Pankisi", categories: ["music", "videoart"], image: "assets/legacy/bfeb12cd883db2c88b53.webp" },
  { slug: "qhuaua", title: "JRPJEJ", categories: ["music"], image: "assets/legacy/c161d6fc2fc71495ab7b.webp" },
  { slug: "followmeto", title: "Follow Me To", categories: ["commercials", "fashion"], image: "assets/legacy/5e4ca159cd721a13a338.webp" },
  { slug: "madeinmilan", title: "Made in Milan", categories: ["fashion", "commercials"], image: "assets/legacy/8b6912ead2be3cd99d9f.webp" },
  { slug: "subay", title: "Subay", categories: ["fashion", "commercials"], image: "assets/legacy/a6e7a2be1af96b606a38.webp" },
  { slug: "tbilisi", title: "Tbilisi", categories: ["fashion", "commercials"], image: "assets/legacy/35c034e5106f2b6d9e62.webp" },
  { slug: "roberto-cavalli-mfw", title: "Roberto Cavalli Milan Fashion Week", categories: ["reels", "fashion"], image: "assets/images/roberto-cavalli-mfw-01-poster.jpg" },
  { slug: "daydreaming", title: "Daydreaming", categories: ["videoart"], image: "assets/legacy/897c042c8aeea3b31b78.webp" },
  { slug: "watercolor", title: "Watercolor", categories: ["videoart"], image: "assets/legacy/c54fbbf082d64509774f.webp" },
  { slug: "variso-lookbook", title: "Lookbook for Variso", categories: ["reels", "fashion"], image: "assets/images/variso-lookbook-01-poster.jpg" },
  { slug: "karmel", title: "Karmel", categories: ["commercials"], image: "assets/legacy/079b09ce28a0701a17d0.webp" },
  { slug: "tole", title: "JRPJEJ", categories: ["music"], image: "assets/legacy/8ca239ef66fa48a448bd.webp" },
  { slug: "flowers", title: "Flowers", categories: ["videoart"], image: "assets/legacy/6f5f4f570825dcf222c1.webp" },
  { slug: "chanel", title: "Chanel", categories: ["fashion", "commercials"], image: "assets/legacy/a95143b98494de61f7ac.webp" },
  { slug: "mavlet", title: "Mavlet", categories: ["videoart"], image: "assets/legacy/ab5c2d1f4c5ee566a40c.webp" },
  { slug: "std", title: "STD", categories: ["fashion"], image: "assets/legacy/ce402913dd5d961a781a.webp" },
  { slug: "bork-commercial", title: "Commercial for Bork", categories: ["commercials"], image: "assets/images/bork-commercial-01-poster.jpg" },
  { slug: "buro", title: "Buro", categories: ["fashion", "commercials"], image: "assets/legacy/4231ef5a737f4eecc177.webp" },
  { slug: "la-lettre-perfumes", title: "Visuals for La Lettre perfumes", categories: ["reels", "commercials"], image: "assets/images/la-lettre-perfumes-01-poster.jpg" },
  { slug: "geegun", title: "Geegun", categories: ["music", "commercials"], image: "assets/legacy/c9f58814600cd3af84b5.webp" },
  { slug: "moonka", title: "Moonka", categories: ["fashion", "commercials"], image: "assets/legacy/805266895b52ccbfbe28.webp" }
];

const projectDetails = {
  "more-is-love": {
    "title": "More is love",
    "description": "client [**More is love**](https://www.moreislove.com/)\nbrief short video with an influencer [**Nataly Osmann**](https://www.instagram.com/natalyosmann/?hl=en) showing clothes and accessories",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/more-is-love-01.mp4",
      "assets/images/more-is-love-02.webp",
      "assets/images/more-is-love-03.webp",
      "assets/images/more-is-love-04.webp",
      "assets/images/more-is-love-05.webp",
      "assets/images/more-is-love-06.webp"
    ]
  },
  "bork-commercial": {
    "title": "Commercial for Bork",
    "description": "brand [**Bork**](https://www.bork.ru/)\nbrief short video with an influencer exploiting coffee machine\nprod Aleko team\nDOP Aleko team\ndir Pavel Maklyarovsky",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "featuredAspect": "wide",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/bork-commercial-01.mp4",
      "assets/images/bork-commercial-02.webp",
      "assets/images/bork-commercial-03.webp",
      "assets/images/bork-commercial-04.webp",
      "assets/images/bork-commercial-05.png",
      "assets/images/bork-commercial-06.webp"
    ]
  },
  "variso-lookbook": {
    "title": "Lookbook for Variso",
    "description": "brand [**Variso**](https://www.instagram.com/_variso_/#)\nbrief series of short videos showing product\nprod Saida Nazarova\nstyle Madina Varisova",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "featuredAspect": "wide",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/variso-lookbook-01.mp4",
      "assets/images/variso-lookbook-02.jpg",
      "assets/images/variso-lookbook-03.jpg",
      "assets/images/variso-lookbook-04.jpg",
      "assets/images/variso-lookbook-05.webp",
      "assets/images/variso-lookbook-06.webp",
      "assets/images/variso-lookbook-07.webp"
    ]
  },
  "roberto-cavalli-mfw": {
    "title": "Roberto Cavalli Milan Fashion Week",
    "description": "brand [**Roberto Cavalli**](https://www.robertocavalli.com/)\nbrief short video with an [influencer](https://www.instagram.com/kategusar?igsh=MWpjZWluMnBrbGpnbQ==) during Milan fashion week",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/roberto-cavalli-mfw-01.mp4",
      "assets/images/roberto-cavalli-mfw-02.jpg",
      "assets/images/roberto-cavalli-mfw-03.jpg",
      "assets/images/roberto-cavalli-mfw-04.jpg",
      "assets/images/roberto-cavalli-mfw-05.jpg",
      "assets/images/roberto-cavalli-mfw-06.jpg"
    ]
  },
  "la-lettre-perfumes": {
    "title": "Visuals for La Lettre perfumes",
    "description": "brand [**La Lettre**](https://lalettre-parfum.com/)\nbrief short campaign videos",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "featuredAspect": "wide",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/la-lettre-perfumes-01.mp4",
      "assets/images/la-lettre-perfumes-02.jpg",
      "assets/images/la-lettre-perfumes-03.jpg",
      "assets/images/la-lettre-perfumes-04.jpg",
      "assets/images/la-lettre-perfumes-05.webp",
      "assets/images/la-lettre-perfumes-06.webp"
    ]
  },
  "alfa-bank-commercial": {
    "title": "Alfa Bank commercial",
    "description": "client [**Alfa-Bank**](https://alfabank.ru/en/)\nbrief short video with an influencer [**Aleko**](https://www.instagram.com/aleko_n?igsh=anVyMGNuc2g4ZXU0) showing possibilities of payment ring\nproduced by Aleko team\nsound Ekaterina Druzhinina\nVFX Islam Ayubi",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/alfa-bank-commercial-01.mp4",
      "assets/images/alfa-bank-commercial-02.jpg",
      "assets/images/alfa-bank-commercial-03.webp",
      "assets/images/alfa-bank-commercial-04.jpg",
      "assets/images/alfa-bank-commercial-05.jpg",
      "assets/images/alfa-bank-commercial-06.webp"
    ]
  },
  "lancome-bafta-bts": {
    "title": "BAFTA BTS for Lancome",
    "description": "client [**Lancome UK**](https://www.lancome.co.uk/)\nbrief short video with influencers getting prepared for BAFTA with Lancome\nprod fashion2max",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/lancome-bafta-bts-01.mp4",
      "assets/images/lancome-bafta-bts-02.jpg",
      "assets/images/lancome-bafta-bts-03.jpg",
      "assets/images/lancome-bafta-bts-04.jpg",
      "assets/images/lancome-bafta-bts-05.jpg",
      "assets/images/lancome-bafta-bts-06.jpg",
      "assets/images/lancome-bafta-bts-07.jpg",
      "assets/images/lancome-bafta-bts-08.jpg"
    ]
  },
  "pketar-catch-em-all": {
    "title": "Pketar x Others \"catch 'em all\"",
    "description": "client [**Others**](https://www.instagram.com/oth.ers/) / [**Pketar**](https://pketar.com/)\nAI photo series for Pketar x Others\nA reference to the Dagestani tradition of going door to door collecting sweets during the holidays of Eid al-Fitr (Uraza Bayram) and Eid al-Adha (Kurban Bayram).",
    "embeds": [],
    "videoLinks": [],
    "gallery": [
      "assets/images/pketar-catch-em-all-01.webp",
      "assets/images/pketar-catch-em-all-02.webp",
      "assets/images/pketar-catch-em-all-03.webp",
      "assets/images/pketar-catch-em-all-04.webp",
      "assets/images/pketar-catch-em-all-05.webp",
      "assets/images/pketar-catch-em-all-06.webp",
      "assets/images/pketar-catch-em-all-07.webp"
    ]
  },
  "daena": {
    "title": "Daena — Hadiyca",
    "description": "Music video based on a Chechen legend\nproduced & directed by Zaidat Gamzabekova, Daria Gratilova, Pavel Maklyarovsky\nDOP, light, edit Pavel Maklyarovsky\nstyle Makka Idigova\nmodels Daena Tsatsaeva, Ilona Pskhatsieva\ntitles Ama Satueva\nbrands Antalvala, Gerem, Kubachijewel, Posleslovie",
    "embeds": [
      "https://www.youtube.com/embed/-URq7PZrf9I?rel=0&fmt=18&html5=1&showinfo=0"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/18d2f373a26115603172.webp",
      "assets/legacy/e1a6832b9134dbcb0418.webp",
      "assets/legacy/3cee5397b5ad25cd6b5b.webp",
      "assets/legacy/e1b4b80eacdad031916b.webp",
      "assets/legacy/b61cdebdb54816a42c40.webp",
      "assets/legacy/97caca197aba2c281a86.webp",
      "assets/legacy/7d75fe0c7fbae22a3a6e.webp",
      "assets/legacy/f9a62ef40aa4d59f9f1a.webp",
      "assets/legacy/e53b90284e6caea1ea60.webp",
      "assets/legacy/20455fe4e11b42708e4d.webp",
      "assets/legacy/4b77372cf6a3d09ad489.webp",
      "assets/legacy/500dac270a53558b9e00.webp"
    ],
    "originalUrl": "https://pavlet.ru/daena"
  },
  "elle": {
    "title": "VintageDream for Elle Russia",
    "description": "client **Elle**\nphoto Anna Antosik style Ekaterina Kassina model Elena Chebotova muah Oksana Laskina set-design Kristina Nekrasova light Pavel Pankratov, Anna Kaganovich style assist Polina Chernina video Pavel Maklyarovsky",
    "embeds": [
      "https://player.vimeo.com/video/489557922?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/86b61cc63734c1fd53af.webp",
      "assets/legacy/9c9e632a26186ee8d491.webp",
      "assets/legacy/648e7ddfac10e3ce8a83.webp",
      "assets/legacy/2c754b28136c7ecadc10.webp",
      "assets/legacy/92f40bf6506b332de4bc.webp",
      "assets/legacy/7a5566c0a8feb1422c74.webp",
      "assets/legacy/2c9730467f63c7e22a43.webp",
      "assets/legacy/6b78172021a6147f7d09.webp"
    ],
    "originalUrl": "https://pavlet.ru/elle"
  },
  "noize": {
    "title": "Noize MC x Osip Mandelstam BTS for Red Pepper film",
    "description": "client [**Red Pepper Film**](https://redpepperfilm.com/)\nVideo for Noize MC artist based on the study of Osip Mandelstam's manuscripts\nvideo Pavel Maklyarovsky",
    "embeds": [
      "https://player.vimeo.com/video/549907347?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/ed5974393913faf50934.webp",
      "assets/legacy/f009703d4f2738ba2256.webp",
      "assets/legacy/44ba440ca0aae6dc6248.webp",
      "assets/legacy/3001aa5fd7b53c05c80e.webp",
      "assets/legacy/2b874864de821bfaac6c.webp",
      "assets/legacy/81131d0522e8168d4e82.webp"
    ],
    "originalUrl": "https://pavlet.ru/noize"
  },
  "caspian": {
    "title": "\"The Caspian\"",
    "description": "Short film in a collaboration with local clothing brand, dedicated to eclecticism of the capital of Dagestan. Inspired by soviet architecture, music, patriotic documentaries and islamic influence\nclient [**Others**](https://www.instagram.com/oth.ers/)\nstyle Zaynab Saydulaeva\nmodel Sarra Akhmedova",
    "embeds": [
      "https://player.vimeo.com/video/459276791?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/ba745c94d5561d368e5b.webp",
      "assets/legacy/3e491e87a142a1b1f96a.webp",
      "assets/legacy/0eaebb431853d2c18827.webp",
      "assets/legacy/d2231e01075b7ebc3b88.webp",
      "assets/legacy/14be90ae10ece01e986a.webp",
      "assets/legacy/a2b2133766d9f46e0270.webp",
      "assets/legacy/7a4713f170927bc2f040.webp"
    ],
    "originalUrl": "https://pavlet.ru/caspian"
  },
  "flat22": {
    "title": "Mirrorland for Flat 22 showroom",
    "description": "client [**Flat22**](https://www.instagram.com/flat22place)\nphoto & art direction Arina Tadzhibova style Khava assist Abdi model Polina Dmitrieva video Pavel Maklyarovsky",
    "embeds": [
      "https://player.vimeo.com/video/907218004?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/b4cdee890d3e04b5a74c.webp",
      "assets/legacy/e4d4b8049d3c7fb7022f.webp",
      "assets/legacy/ff9a19ef067a0e9c273e.webp",
      "assets/legacy/24cf12d95a104290b67c.webp",
      "assets/legacy/98fdbb7e5abe4677f70b.webp",
      "assets/legacy/77822939f0e8a339c9a9.webp"
    ],
    "originalUrl": "https://pavlet.ru/flat22"
  },
  "sildi": {
    "title": "\"The Sildi village\" for Papakha restaurant & Khabib Nurmagomedov",
    "description": "client [**Papakha**](https://papakha.ru/)\nShort film about Sildi village, motherland of Khabib Nurmagomedov.\nprod Refine agency",
    "embeds": [
      "https://player.vimeo.com/video/728831063?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/5501c5d8bc2913895e1a.webp",
      "assets/legacy/a0f7fc25af1cdb2b5e93.webp",
      "assets/legacy/1939b35ca12d493db88b.webp",
      "assets/legacy/d373d783258e9007fc00.webp",
      "assets/legacy/824f899b1a9da078331b.webp",
      "assets/legacy/1f69345d0ee2176e454b.webp"
    ],
    "originalUrl": "https://pavlet.ru/sildi"
  },
  "zabit": {
    "title": "Zabit Magomedsharipov \"Origins of war\"",
    "description": "Short film about world top-3 featherweight UFC fighter. Zabit Magomedsharipov gets inspired by his ancestors-warriors, trains hard in his homeland with multidisciplinary athletes (cameo of Abdurashid Sadulaev, two-time freestyle wrestling Olympic champion), what forms his fighting style into a piece of art.",
    "embeds": [
      "https://player.vimeo.com/video/340854830?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/cceee9943ae40c9d3132.webp",
      "assets/legacy/c2e2a98bd75026495e43.webp",
      "assets/legacy/7ec0aea243b1dadba2c2.webp",
      "assets/legacy/1bd09433cc98805d4e08.webp",
      "assets/legacy/5947100dfa19a4d67e69.webp",
      "assets/legacy/301a811ac40e9de0ccd4.webp",
      "assets/legacy/52b5caf4fc6860ffc79f.webp",
      "assets/legacy/3ffda37105fc08b2d484.webp"
    ],
    "originalUrl": "https://pavlet.ru/zabit"
  },
  "measureanji": {
    "title": "Measure — Anzhi",
    "description": "client [**Measure**](https://www.instagram.com/measure.ru/)\nDOP, director Pavel Maklyarovsky\nstyle Zaynab Saidulaeva\nmodels Aminat Ibragimova, Patimat Sultanbagamaeva\nassist Muslimat",
    "embeds": [
      "https://player.vimeo.com/video/1061824671?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/cbed777f4cd3fc93a32c.webp",
      "assets/legacy/404404d90dfc3e3492a2.webp",
      "assets/legacy/a795d0583d6e8aa83b57.webp",
      "assets/legacy/76bf73379794b0a33a50.webp",
      "assets/legacy/2f1be578d4379ed0c33a.webp",
      "assets/legacy/87edda49c7e4f5425c10.webp",
      "assets/legacy/1adab643c124bc6d18d7.webp",
      "assets/legacy/8e5050025154ecd712a3.webp"
    ],
    "originalUrl": "https://pavlet.ru/measureanji"
  },
  "donutsday": {
    "title": "\"The Era of More Intensive Observation of the Sky\" — Donutsday commercial",
    "description": "client [**Donutsday**](https://donutsday.ru/)\nproducer and casting Uma Magadova\nDirector, DOP, concept Pavel Maklyarovsky\nstyle Hava\nstyle assist Abdi\nmodels Anna Yudakova, Sasha, Open Up Model Management\nproduction assists Nozya, Dzhuma\nmakeup, hair Julia Tingaeva\ngaffer Yaroslav",
    "embeds": [
      "https://player.vimeo.com/video/1177690385?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/60295d1225d0042f08a7.webp",
      "assets/legacy/1097632ad876dd751ba3.webp",
      "assets/legacy/0ec43d844f252a9634a6.webp",
      "assets/legacy/7230b626324353028a0a.webp",
      "assets/legacy/7cfe4da9fe0fefcf0f33.webp",
      "assets/legacy/6e48ea585f6b41be9205.webp",
      "assets/legacy/270a70d522a5191b40b4.webp",
      "assets/legacy/8c09d656658cc42e1955.webp"
    ],
    "originalUrl": "https://pavlet.ru/donutsday"
  },
  "wayhome": {
    "title": "\"The way home\" essay",
    "description": "production Saida Osmann dress Asiya Bareeva model Marina",
    "embeds": [
      "https://player.vimeo.com/video/862529349?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/0fbd7d739e08787e80fb.webp",
      "assets/legacy/d3166c465df6c2acfc3b.webp",
      "assets/legacy/b09cd0b4704a9fedd054.webp",
      "assets/legacy/95647345b8983c3191d3.webp",
      "assets/legacy/b3c3710a545e155a55d7.webp",
      "assets/legacy/fc4b8afce89a482b3989.webp",
      "assets/legacy/6f2eef0982a757151711.webp",
      "assets/legacy/96710b6f88e7e6045416.webp"
    ],
    "originalUrl": "https://pavlet.ru/wayhome"
  },
  "alice": {
    "title": "\"Alice in den Städten\"",
    "description": "Homage to Win Wenders' film",
    "embeds": [
      "https://player.vimeo.com/video/464459746?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/7ee1e724ece69dc33ffa.webp",
      "assets/legacy/6bff2c6b10b03b5c91d6.webp",
      "assets/legacy/9d3575a5cd20db293f00.webp",
      "assets/legacy/b4dafe6eb02410ff0bcd.webp",
      "assets/legacy/ea43cf78cac407270cf2.webp",
      "assets/legacy/7282f8f947b2aa186f3b.webp",
      "assets/legacy/a6d62aef56e134f22eca.webp",
      "assets/legacy/b28933ec033af720ce49.webp"
    ],
    "originalUrl": "https://pavlet.ru/alice"
  },
  "dagestan": {
    "title": "South Dagestan",
    "description": "client [**southdag.ru**](https://southdag.ru/)\nPeople and places of Dagestan",
    "embeds": [
      "https://player.vimeo.com/video/525219335?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/f52272d6e5ac4ee26c9c.webp",
      "assets/legacy/14a87145749aaf1c223b.webp",
      "assets/legacy/39664f912b923c1753af.webp",
      "assets/legacy/1c2fd54e690b6e70b1bb.webp",
      "assets/legacy/fe653dcac23d133bac73.webp",
      "assets/legacy/993641205b5ef7b9456c.webp"
    ],
    "originalUrl": "https://pavlet.ru/dagestan"
  },
  "pankisi": {
    "title": "Pankisi — Deli Reza Khilva Shuna",
    "description": "client **Ored Recordings**\ndirector & DOP Pavel Maklyarovsky VFX Islam Ayubi\nRelease captured by Ored Recordings folk label\nChechen sufi chant “Deli Reza Khilva Shuna” performed by Pankisi ensemble from Georgia. Music video directed by Pavel Maklyarovsky with VFX of Islam Ayubi is based on quotes of chechen influencers of different periods of time — religious leaders and folklore performers, bards and poets. They are given in English, Russian, Georgian and Chechen languages — most common for the nation due to the regions they live in. Chechen language is given in latin version of 1990s which was used for the concept of free republic. Women are represented in a warlike way as ones who can fight if necessary, not just revive the nation. During the process of singing, traditionally-shaped ancestral towers are being restored. In the end, towers stand still as a symbol of regained and free homeland of ancestors and utopian world of peace chechens have been trying to reach.",
    "embeds": [
      "https://player.vimeo.com/video/908044607?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/985c62beb3edf40866f2.webp",
      "assets/legacy/a8f46b250097e309bc39.webp",
      "assets/legacy/47a21869b1615d260058.webp",
      "assets/legacy/2a7c8f708ae1066cfef8.webp",
      "assets/legacy/091857f25f59d7a137e2.webp",
      "assets/legacy/bdc762776fede428a4d6.webp"
    ],
    "originalUrl": "https://pavlet.ru/pankisi"
  },
  "qhuaua": {
    "title": "JRPJEJ — Qhuaua E Ored music video",
    "description": "client **Ored Recordings**\nMusic video for Circassian post-traditional band «JRPJEJ» on \"The Boar and The Hunter\" song, using digital interpretations of old Circassian ornaments\nVideo is a part of The Russian Art Archive Network (RAAN), an online catalogue of documents on the history of Russian contemporary art from the collections of Garage Museum and partner institutions.\n[Russian Art Archive Network](https://russianartarchive.net/ru/catalogue/document/V14460)",
    "embeds": [
      "https://player.vimeo.com/video/361296474?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/603980b2e91f99fe418e.webp",
      "assets/legacy/1882d4d5456fe3f05573.webp",
      "assets/legacy/6ccd479ab262e3915ab1.webp",
      "assets/legacy/e978b25b06764a337a7c.webp",
      "assets/legacy/d72bb81513ad8aa1d054.webp",
      "assets/legacy/5b8f1b611c5e1be431ef.webp",
      "assets/legacy/ae452ff22e3978585986.webp",
      "assets/legacy/064f3104033997210908.webp"
    ],
    "originalUrl": "https://pavlet.ru/qhuaua"
  },
  "followmeto": {
    "title": "#followmeto Mercedes-Benz Fashion Week Tbilisi",
    "description": "client [**Follow Me To**](https://www.instagram.com/followmeto/)\nstarring [**Nataly Osmann**](https://www.instagram.com/natalyosmann/?hl=en)",
    "embeds": [
      "https://player.vimeo.com/video/381445129?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/3d30b300cd7cfd511893.webp",
      "assets/legacy/87cbf754b622dfa52cd8.webp",
      "assets/legacy/f21d654d7509ad4bbce6.webp",
      "assets/legacy/a3e011584b5b6014b63f.webp",
      "assets/legacy/1124b15e7d37ac26ec7d.webp",
      "assets/legacy/c097f4320738a2ae4eaa.webp",
      "assets/legacy/dc69e251642eb0497a64.webp",
      "assets/legacy/787e49b3dcc25acd98b6.webp"
    ],
    "originalUrl": "https://pavlet.ru/followmeto"
  },
  "madeinmilan": {
    "title": "\"Made in Milan\"",
    "description": "Video starring influencer Kate Gusar, inspired by classic Italian movies and Giorgio Armani biopic",
    "embeds": [
      "https://player.vimeo.com/video/398880269?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/fa5bc3e8ea372ee843ed.webp",
      "assets/legacy/ba2c5e4b192855a48146.webp",
      "assets/legacy/44828a1fea48d43a94b4.webp",
      "assets/legacy/ae816bad73d6948823c6.webp",
      "assets/legacy/b9b3bb466e396ac4aeea.webp"
    ],
    "originalUrl": "https://pavlet.ru/madeinmilan"
  },
  "subay": {
    "title": "\"Windy\" for Subay store",
    "description": "client [**Subay**](https://www.instagram.com/subay.store/)\nCommercial for Karachai and Spanish headscarves brand inspired by old westerns and Karachai national dress\nstyle&model Ruzanna Semenova",
    "embeds": [
      "https://player.vimeo.com/video/416990975?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/5902bdd7ed11895f8bd0.webp",
      "assets/legacy/276b8af0a5eecd46d7ae.webp",
      "assets/legacy/df195cecaf8cf9a2257a.webp",
      "assets/legacy/03fcaaa434400e79cb32.webp",
      "assets/legacy/101c1cd2a6b60d1e6e1b.webp",
      "assets/legacy/478927f189543a9c2206.webp"
    ],
    "originalUrl": "https://pavlet.ru/subay"
  },
  "tbilisi": {
    "title": "Mercedes-Benz Fashion Week Tbilisi Spring-Summer 2020",
    "description": "Overview of top Tbilisi fashion week 2019 shows",
    "embeds": [
      "https://player.vimeo.com/video/445382030?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/9ae823761cc274ba9e2f.webp",
      "assets/legacy/3931938528682a143901.webp",
      "assets/legacy/fb6610d57f5b10e63dae.webp",
      "assets/legacy/771ccd1c7ef10fa1299d.webp",
      "assets/legacy/96236103d3bea5abbebc.webp",
      "assets/legacy/f34ec9fa68f19f6500d7.webp",
      "assets/legacy/60387421357dde31e6be.webp",
      "assets/legacy/a4a37025c54e0a400584.webp"
    ],
    "originalUrl": "https://pavlet.ru/tbilisi"
  },
  "daydreaming": {
    "title": "\"Daydreaming\"",
    "description": "Mood video starring dancer Nargilya Shirmagomedova at the sunrise on the Caspian Sea",
    "embeds": [
      "https://player.vimeo.com/video/360746148?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/aded6f6d0a6c940ca08a.webp",
      "assets/legacy/7aa72de19a41568c8536.webp",
      "assets/legacy/8397e11939f4364564ce.webp",
      "assets/legacy/6e8e0247c22b7b4535b9.webp",
      "assets/legacy/cacadfeeb554f8a09bba.webp"
    ],
    "originalUrl": "https://pavlet.ru/daydreaming"
  },
  "watercolor": {
    "title": "\"Watercolor\"",
    "description": "Story about artist Maral Fatalieva working in the studio and exploring mountains",
    "embeds": [
      "https://player.vimeo.com/video/334273732?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/f3438ad8e7770751cf62.webp",
      "assets/legacy/fe6d8153c1c51f5b1e3e.webp",
      "assets/legacy/ffe7b7232b5aafee995d.webp",
      "assets/legacy/86a17f273ff1e104c869.webp",
      "assets/legacy/5c9320429120d0e377d7.webp",
      "assets/legacy/bc9b66604c982dea1d57.webp"
    ],
    "originalUrl": "https://pavlet.ru/watercolor"
  },
  "karmel": {
    "title": "\"Going crazy on arts\" for Karmel dress",
    "description": "Short film for clothing brand inspired by traditional arts studies\nprod Maria Kovalenko mua Venera Kalaychieva model Polina Mangalis",
    "embeds": [
      "https://player.vimeo.com/video/297414984?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/99844eebe66db9068f68.webp",
      "assets/legacy/562d519eb9a8a83da8df.webp",
      "assets/legacy/71ea8d97ac6143e76622.webp",
      "assets/legacy/68aa92136811e2164cbf.webp",
      "assets/legacy/7038757d390a7ff22c1a.webp",
      "assets/legacy/b4ab38e3e468a475d8f8.webp"
    ],
    "originalUrl": "https://pavlet.ru/karmel"
  },
  "tole": {
    "title": "JRPJEJ — Quedzoque Tole Tsık’u (Single Version)",
    "description": "Mood music video for JRPJEJ post-traditional circassian folk band. The song, despite its military theme, is not really about war. It serves more as a backdrop for a story about a tough life and the approach of death, with some bright moments sprinkled in. The video was shot in Southern Dagestan in May 2023.",
    "embeds": [
      "https://www.youtube.com/embed/uD8XFIyIeGc?rel=0&fmt=18&html5=1&showinfo=0"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/648f812db7b6b244cdf8.webp",
      "assets/legacy/b6f93192a3e14dc76d07.webp",
      "assets/legacy/3049b8ffe5e767b3bfe2.webp",
      "assets/legacy/963d6cb9975f18ab2f73.webp",
      "assets/legacy/838cf20b6edaf1eaf16e.webp",
      "assets/legacy/0f5218b72fd82dd6c5c5.webp"
    ],
    "originalUrl": "https://pavlet.ru/tole"
  },
  "flowers": {
    "title": "Flowers will be blooming here anyway",
    "description": "model Maral Fatalieva",
    "embeds": [
      "https://player.vimeo.com/video/990550757?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/ba43f0b55b3b368c8972.webp",
      "assets/legacy/6ddfe17fd36a1e2fc621.webp",
      "assets/legacy/3ac8ab4791e6435c7d55.webp",
      "assets/legacy/d087ed9d30955657e6a9.webp",
      "assets/legacy/730f51ade64f240cfe8f.webp",
      "assets/legacy/ff558fe9be9ae7e100dc.webp"
    ],
    "originalUrl": "https://pavlet.ru/flowers"
  },
  "chanel": {
    "title": "the style director — chanel",
    "description": "media The Style Director\nproducer Madina Akhsarova\nstyle Ibragim Gatsiev\nvideo Pavel Maklyarovsky",
    "embeds": [
      "https://www.youtube.com/embed/YJyh7JsaJWc?rel=0&fmt=18&html5=1&showinfo=0"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/ca14df7677113091bdd8.webp",
      "assets/legacy/8f85e9b282ecfa73f052.webp",
      "assets/legacy/0ec6db2e188aeb70e8cd.webp",
      "assets/legacy/e38f0329d62848f67e71.webp",
      "assets/legacy/a66d764fa647042c484d.webp",
      "assets/legacy/ec7bfdd3aacc69e6d5b9.webp"
    ],
    "originalUrl": "https://pavlet.ru/chanel"
  },
  "mavlet": {
    "title": "Old wrestling shoes — Mavlet Batyrov",
    "description": "Mavlet has found his old wrestling shoes, which went through dozens of matches, championships, Olympics, and after 20 years they’re still ready to roll.\nIn this video Mavlet Batyrov, two-time Olympic champion and his brother Adam, champion of Asia, meet again in the wrestling match as it was in their childhood and a few championships.",
    "embeds": [
      "https://player.vimeo.com/video/990789938?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/d9c78f16d2c23d93be91.webp",
      "assets/legacy/6c9a1c84918445b58e50.webp",
      "assets/legacy/ea4b3e500d520992911c.webp",
      "assets/legacy/b708ab1588a98c7075b1.webp",
      "assets/legacy/19a752971a5f876cab43.webp",
      "assets/legacy/1eb0839c994fc06106bb.webp"
    ],
    "originalUrl": "https://pavlet.ru/mavlet"
  },
  "std": {
    "title": "The Style Director — Chanel Special Issue",
    "description": "Portrait video inspired by iconic Chanel looks\nstyle Ibragim Gatsiev prod Madina Akhsarova muah Kristina Gulaya",
    "embeds": [
      "https://player.vimeo.com/video/445387100?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/08f6f7dc27fc25d57255.webp",
      "assets/legacy/7878048f2b600b8babc9.webp",
      "assets/legacy/fb08a46e4b0f13419a8d.webp",
      "assets/legacy/a3a0e07de98299f11fb5.webp",
      "assets/legacy/ded728b5ac8e78981a98.webp",
      "assets/legacy/8a2ccfd365b6a6c513bf.webp"
    ],
    "originalUrl": "https://pavlet.ru/std"
  },
  "buro": {
    "title": "Buro 212 commercial",
    "description": "Short video for jewerly brand inspired by 90's videoart\nprod Maria Kovalenko",
    "embeds": [
      "https://player.vimeo.com/video/323573610?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/ec428bced6b86eb43de7.webp",
      "assets/legacy/827b3211ace605c9c7d6.webp",
      "assets/legacy/bb66edb58cb69a029aa4.webp",
      "assets/legacy/c39669d4750c039656a3.webp",
      "assets/legacy/6877af08bce8b29f99b9.webp"
    ],
    "originalUrl": "https://pavlet.ru/buro"
  },
  "geegun": {
    "title": "Geegun & Gunwest backstage",
    "description": "Promo video for hip hop artists' collaboration track\nprod Maria Kovalenko mua Dayana Smith",
    "embeds": [
      "https://www.youtube.com/embed/GjFJkxymUmo?rel=0&fmt=18&html5=1&showinfo=0"
    ],
    "videoLinks": [],
    "gallery": [],
    "originalUrl": "https://pavlet.ru/geegun"
  },
  "moonka": {
    "title": "Moonka store",
    "description": "brand **Moonka**\nprod Anna Pisman, Anzhela Sarbasheva\nstyle Ibragim Gatsiev",
    "embeds": [
      "https://player.vimeo.com/video/453548289?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "assets/legacy/d5f64121646a224c4c91.webp",
      "assets/legacy/9db835a6900f845deb81.webp",
      "assets/legacy/fcf3cb32670cfb22583b.webp",
      "assets/legacy/c3ea34e08a6061878700.webp",
      "assets/legacy/17a79a76db10b072e0d2.webp",
      "assets/legacy/8c672b8ce2c2b970624b.webp"
    ],
    "originalUrl": "https://pavlet.ru/moonka"
  }
};
