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
  { slug: "pketar-catch-em-all", title: "Pketar x Others", categories: ["ai", "photo"], image: "assets/images/pketar-catch-em-all-01.jpg" },
  { slug: "daena", title: "Daena", categories: ["music"], image: "https://static.tildacdn.com/tild6236-6535-4635-b730-393866346463/Screenshot_2024-08-0.png" },
  { slug: "elle", title: "Elle", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3031-3938-4133-b433-653636303939/Screenshot_2024-01-1.png" },
  { slug: "noize", title: "Noize MC", categories: ["music"], image: "https://static.tildacdn.com/tild6462-3033-4062-a463-613033643365/Screenshot_2024-07-1.png" },
  { slug: "alfa-bank-commercial", title: "Alfa Bank commercial", categories: ["reels", "commercials"], image: "assets/images/alfa-bank-commercial-01.gif" },
  { slug: "lancome-bafta-bts", title: "BAFTA BTS for Lancome", categories: ["reels", "commercials"], image: "assets/images/lancome-bafta-bts-01.gif" },
  { slug: "caspian", title: "Caspian", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3039-3563-4361-b732-353662663031/Screenshot_2024-01-1.png" },
  { slug: "flat22", title: "Flat22", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3663-6531-4565-b735-616131343961/Screenshot_2024-01-1.png" },
  { slug: "more-is-love", title: "More is love", categories: ["reels", "fashion"], image: "assets/images/more-is-love-01.gif" },
  { slug: "sildi", title: "Sildi", categories: ["commercials", "documentary"], image: "https://static.tildacdn.com/tild6333-3936-4861-b838-363435643636/Screenshot_2024-01-1.png" },
  { slug: "zabit", title: "Zabit", categories: ["commercials"], image: "https://static.tildacdn.com/tild3532-3766-4037-b635-316162366533/Screenshot_2024-07-2.png" },
  { slug: "measureanji", title: "Measure Anji", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3732-3331-4230-a132-353862303734/Screenshot_2025-03-0.png" },
  { slug: "donutsday", title: "Donuts Day", categories: ["commercials"], image: "https://static.tildacdn.com/tild3234-6436-4337-b239-633462303365/Screenshot_2026-03-2.jpg" },
  { slug: "wayhome", title: "Way Home", categories: ["videoart"], image: "https://static.tildacdn.com/tild3630-3834-4437-b863-633330393831/Screenshot_2024-01-1.png" },
  { slug: "alice", title: "Alice", categories: ["videoart"], image: "https://static.tildacdn.com/tild6434-6562-4533-b238-353066663564/Screenshot_2024-01-2.png" },
  { slug: "dagestan", title: "Dagestan", categories: ["commercials"], image: "https://static.tildacdn.com/tild3232-3932-4237-b830-666435363430/Screenshot_2024-01-1.png" },
  { slug: "pankisi", title: "Pankisi", categories: ["music", "videoart"], image: "https://static.tildacdn.com/tild6230-6636-4161-b437-363831663864/Screenshot_2024-02-2.png" },
  { slug: "qhuaua", title: "JRPJEJ", categories: ["music"], image: "https://static.tildacdn.com/tild3661-6232-4561-a365-306661636365/IMG_6344_copy.jpg" },
  { slug: "followmeto", title: "Follow Me To", categories: ["commercials", "fashion"], image: "https://static.tildacdn.com/tild3633-3066-4133-a432-653561366232/222.jpg" },
  { slug: "madeinmilan", title: "Made in Milan", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild6366-3330-4261-a135-303038373535/IMG_6357_copy.jpg" },
  { slug: "subay", title: "Subay", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild6234-6631-4133-a563-373964386234/Screenshot_2024-01-1.png" },
  { slug: "tbilisi", title: "Tbilisi", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3263-3265-4034-b131-396538363936/Screenshot_2024-01-2.png" },
  { slug: "roberto-cavalli-mfw", title: "Roberto Cavalli Milan Fashion Week", categories: ["reels", "fashion"], image: "assets/images/roberto-cavalli-mfw-01.gif" },
  { slug: "daydreaming", title: "Daydreaming", categories: ["videoart"], image: "https://static.tildacdn.com/tild3337-3932-4138-b031-623461643534/Screenshot_2024-01-2.png" },
  { slug: "watercolor", title: "Watercolor", categories: ["videoart"], image: "https://static.tildacdn.com/tild6537-6637-4863-b030-376239343132/Screenshot_2024-01-2.png" },
  { slug: "variso-lookbook", title: "Lookbook for Variso", categories: ["reels", "fashion"], image: "assets/images/variso-lookbook-01.gif" },
  { slug: "karmel", title: "Karmel", categories: ["commercials"], image: "https://static.tildacdn.com/tild6437-3039-4134-b764-303637626461/4r4r4r.jpg" },
  { slug: "tole", title: "JRPJEJ", categories: ["music"], image: "https://static.tildacdn.com/tild6162-6234-4439-a262-356662373532/Screenshot_2024-07-2.png" },
  { slug: "flowers", title: "Flowers", categories: ["videoart"], image: "https://static.tildacdn.com/tild3863-3366-4738-a361-343539383231/Screenshot_2024-07-2.png" },
  { slug: "chanel", title: "Chanel", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3338-3538-4163-a539-373138663337/Screenshot_2024-07-2.jpg" },
  { slug: "mavlet", title: "Mavlet", categories: ["videoart"], image: "https://static.tildacdn.com/tild3037-3133-4462-a461-623736366536/Screenshot_2024-07-2.jpg" },
  { slug: "std", title: "STD", categories: ["fashion"], image: "https://static.tildacdn.com/tild3266-3533-4439-b037-333762373165/5t5t.jpg" },
  { slug: "bork-commercial", title: "Commercial for Bork", categories: ["commercials"], image: "assets/images/bork-commercial-01.gif" },
  { slug: "buro", title: "Buro", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild6563-3337-4266-a366-666331383734/6y6y.jpg" },
  { slug: "la-lettre-perfumes", title: "Visuals for La Lettre perfumes", categories: ["reels", "commercials"], image: "assets/images/la-lettre-perfumes-01.gif" },
  { slug: "geegun", title: "Geegun", categories: ["music", "commercials"], image: "https://static.tildacdn.com/tild6265-3635-4539-a530-373934313038/7u7u.jpg" },
  { slug: "moonka", title: "Moonka", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3739-6231-4465-b331-383131303133/Screenshot_2024-07-2.png" }
];

const projectDetails = {
  "more-is-love": {
    "title": "More is love",
    "description": "brand [**More is love**](https://moreislove.com/)\nbrief short video with an influencer [**Nataly Osmann**](https://www.instagram.com/natalyosmann/?hl=en) showing clothes and accessories",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/more-is-love-01.gif",
      "assets/images/more-is-love-02.png",
      "assets/images/more-is-love-03.png",
      "assets/images/more-is-love-04.png",
      "assets/images/more-is-love-05.png",
      "assets/images/more-is-love-06.png"
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
      "assets/images/bork-commercial-01.gif",
      "assets/images/bork-commercial-02.png",
      "assets/images/bork-commercial-03.png",
      "assets/images/bork-commercial-04.png",
      "assets/images/bork-commercial-05.png",
      "assets/images/bork-commercial-06.png"
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
      "assets/images/variso-lookbook-01.gif",
      "assets/images/variso-lookbook-02.jpg",
      "assets/images/variso-lookbook-03.jpg",
      "assets/images/variso-lookbook-04.jpg",
      "assets/images/variso-lookbook-05.png",
      "assets/images/variso-lookbook-06.png",
      "assets/images/variso-lookbook-07.png"
    ]
  },
  "roberto-cavalli-mfw": {
    "title": "Roberto Cavalli Milan Fashion Week",
    "description": "brand [**Roberto Cavalli**](https://www.robertocavalli.com/)\nbrief short video with an [**influencer**](https://www.instagram.com/kategusar?igsh=MWpjZWluMnBrbGpnbQ==) during Milan fashion week",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/roberto-cavalli-mfw-01.gif",
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
      "assets/images/la-lettre-perfumes-01.gif",
      "assets/images/la-lettre-perfumes-02.jpg",
      "assets/images/la-lettre-perfumes-03.jpg",
      "assets/images/la-lettre-perfumes-04.jpg",
      "assets/images/la-lettre-perfumes-05.png",
      "assets/images/la-lettre-perfumes-06.png"
    ]
  },
  "alfa-bank-commercial": {
    "title": "Alfa Bank commercial",
    "description": "brand [**Alfa Bank**](https://alfabank.ru/en/)\nbrief short video with an influencer [**Aleko**](https://www.instagram.com/aleko_n?igsh=anVyMGNuc2g4ZXU0) showing possibilities of payment ring\nproduced by Aleko team\nsound Ekaterina Druzhinina\nVFX Islam Ayubi",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/alfa-bank-commercial-01.gif",
      "assets/images/alfa-bank-commercial-02.jpg",
      "assets/images/alfa-bank-commercial-03.png",
      "assets/images/alfa-bank-commercial-04.jpg",
      "assets/images/alfa-bank-commercial-05.jpg",
      "assets/images/alfa-bank-commercial-06.png"
    ]
  },
  "lancome-bafta-bts": {
    "title": "BAFTA BTS for Lancome",
    "description": "brand [**Lancome UK**](https://www.lancome.co.uk/)\nbrief short video with influencers getting prepared for BAFTA with Lancome\nprod fashion2max",
    "embeds": [],
    "videoLinks": [],
    "layout": "featured-gif",
    "galleryAspect": "four-five",
    "gallery": [
      "assets/images/lancome-bafta-bts-01.gif",
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
    "description": "AI photo series for Pketar x Others\nA reference to the Dagestani tradition of going door to door collecting sweets during the holidays of Eid al-Fitr (Uraza Bayram) and Eid al-Adha (Kurban Bayram).",
    "embeds": [],
    "videoLinks": [],
    "gallery": [
      "assets/images/pketar-catch-em-all-01.jpg",
      "assets/images/pketar-catch-em-all-02.png",
      "assets/images/pketar-catch-em-all-03.jpg",
      "assets/images/pketar-catch-em-all-04.jpg",
      "assets/images/pketar-catch-em-all-05.jpg",
      "assets/images/pketar-catch-em-all-06.jpg",
      "assets/images/pketar-catch-em-all-07.png"
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
      "https://static.tildacdn.com/tild3566-6164-4538-b432-383163313231/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild3034-3035-4435-a438-633961663064/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild3464-3036-4238-a136-323133313637/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild3636-6636-4535-b566-656365313636/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild6430-3435-4166-a132-653763323161/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild6665-6265-4634-b131-346335306138/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild6634-6234-4630-a132-383930663830/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild6664-3135-4164-a662-386364373832/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild6135-3463-4233-a635-346333643664/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild3038-3136-4532-b634-633766396563/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild3866-3062-4065-b935-306130616638/Screenshot_2024-08-0.jpg",
      "https://static.tildacdn.com/tild6331-3263-4531-b937-353839633831/Screenshot_2024-08-0.jpg"
    ],
    "originalUrl": "https://pavlet.ru/daena"
  },
  "elle": {
    "title": "VintageDream for Elle Russia",
    "description": "photo Anna Antosik style Ekaterina Kassina model Elena Chebotova muah Oksana Laskina set-design Kristina Nekrasova light Pavel Pankratov, Anna Kaganovich style assist Polina Chernina video Pavel Maklyarovsky",
    "embeds": [
      "https://player.vimeo.com/video/489557922?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild6539-3631-4265-b733-636462313766/IMG_6259.jpg",
      "https://static.tildacdn.com/tild3737-3633-4137-b133-363937633637/IMG_6269.jpg",
      "https://static.tildacdn.com/tild3530-3366-4736-b838-666133663261/IMG_6267.jpg",
      "https://static.tildacdn.com/tild3639-6336-4032-b231-653062643062/IMG_6266.jpg",
      "https://static.tildacdn.com/tild3665-6466-4435-b965-333734643233/IMG_6264.jpg",
      "https://static.tildacdn.com/tild6563-3463-4166-b763-306263393463/IMG_6263.jpg",
      "https://static.tildacdn.com/tild3338-6339-4737-b034-656662343832/IMG_6262.jpg",
      "https://static.tildacdn.com/tild6662-3637-4462-b537-616633613963/IMG_6260.jpg"
    ],
    "originalUrl": "https://pavlet.ru/elle"
  },
  "noize": {
    "title": "Noize MC x Osip Mandelstam BTS for Red Pepper film",
    "description": "Video for Noize MC artist based on the study of Osip Mandelstam's manuscripts\nproduction Red Pepper film\nvideo Pavel Maklyarovsky",
    "embeds": [
      "https://player.vimeo.com/video/549907347?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild3866-3832-4861-b565-393261326665/IMG_6270.jpg",
      "https://static.tildacdn.com/tild3363-6236-4362-b963-353461323965/IMG_6275.jpg",
      "https://static.tildacdn.com/tild6538-3330-4561-a432-393762343832/IMG_6271.jpg",
      "https://static.tildacdn.com/tild6530-3336-4461-b534-343939363362/IMG_6276.jpg",
      "https://static.tildacdn.com/tild3033-6266-4765-b334-343738383862/IMG_6274.jpg",
      "https://static.tildacdn.com/tild3432-6366-4538-b865-613364623633/IMG_6273.jpg"
    ],
    "originalUrl": "https://pavlet.ru/noize"
  },
  "caspian": {
    "title": "\"The Caspian\"",
    "description": "Short film in a collaboration with local clothing brand, dedicated to eclecticism of the capital of Dagestan. Inspired by soviet architecture, music, patriotic documentaries and islamic influence\nbrand **Oth.ers**\nstyle Zaynab Saydulaeva\nmodel Sarra Akhmedova",
    "embeds": [
      "https://player.vimeo.com/video/459276791?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild6534-6239-4162-b330-623734653166/afisha_2.jpg",
      "https://static.tildacdn.com/tild6335-3335-4137-b066-663036636538/Screenshot_2024-01-1.png",
      "https://static.tildacdn.com/tild3561-6638-4364-a137-623233363664/Screenshot_2024-01-1.png",
      "https://static.tildacdn.com/tild3833-3261-4336-b535-646135653462/Screenshot_2024-01-1.png",
      "https://static.tildacdn.com/tild3462-3663-4062-a436-386436646635/Screenshot_2024-01-1.png",
      "https://static.tildacdn.com/tild6237-3731-4533-a664-366665633130/Screenshot_2024-01-1.png",
      "https://static.tildacdn.com/tild3966-6638-4532-b565-386663393566/Screenshot_2024-01-1.png"
    ],
    "originalUrl": "https://pavlet.ru/caspian"
  },
  "flat22": {
    "title": "Mirrorland for Flat 22 showroom",
    "description": "photo & art direction Arina Tadzhibova style Khava assist Abdi model Polina Dmitrieva video Pavel Maklyarovsky",
    "embeds": [
      "https://player.vimeo.com/video/907218004?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild3963-3531-4363-b461-633238383064/IMG_6287.jpg",
      "https://static.tildacdn.com/tild3563-3163-4533-b362-393131633433/IMG_6286.jpg",
      "https://static.tildacdn.com/tild3131-6435-4863-b164-393538383138/IMG_6285.jpg",
      "https://static.tildacdn.com/tild6137-6337-4464-a338-333063393462/IMG_6284.jpg",
      "https://static.tildacdn.com/tild6638-6430-4461-b231-653530643164/IMG_6281.jpg",
      "https://static.tildacdn.com/tild3261-3930-4433-b232-616231613064/IMG_6280.jpg"
    ],
    "originalUrl": "https://pavlet.ru/flat22"
  },
  "sildi": {
    "title": "\"The Sildi village\" for Papakha restaurant & Khabib Nurmagomedov",
    "description": "Short film about Sildi village, motherland of Khabib Nurmagomedov.\nprod Refine agency",
    "embeds": [
      "https://player.vimeo.com/video/728831063?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild3332-3566-4562-b165-383163396564/IMG_6292.jpg",
      "https://static.tildacdn.com/tild6666-6638-4365-a539-626631376530/IMG_6291.jpg",
      "https://static.tildacdn.com/tild3237-6435-4438-a630-343432306466/IMG_6290.jpg",
      "https://static.tildacdn.com/tild6538-6264-4131-a230-646539393361/IMG_6289.jpg",
      "https://static.tildacdn.com/tild3562-3035-4466-b432-646562323131/IMG_6288.jpg",
      "https://static.tildacdn.com/tild6139-6465-4362-b338-653536393533/IMG_6293.jpg"
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
      "https://static.tildacdn.com/tild6638-3932-4235-b135-333739653230/IMG_6302.jpg",
      "https://static.tildacdn.com/tild6533-3835-4133-b730-333138333538/IMG_6300.jpg",
      "https://static.tildacdn.com/tild3930-3232-4663-a131-313531313463/IMG_6299.jpg",
      "https://static.tildacdn.com/tild3031-3965-4366-a665-616332663263/IMG_6298.jpg",
      "https://static.tildacdn.com/tild3364-3463-4330-a339-323766333135/IMG_6294.jpg",
      "https://static.tildacdn.com/tild3531-3736-4136-b064-353231663739/IMG_6295.jpg",
      "https://static.tildacdn.com/tild6164-3161-4335-b034-653862303661/IMG_6296.jpg",
      "https://static.tildacdn.com/tild3635-6132-4236-b664-633938636134/IMG_6297.jpg"
    ],
    "originalUrl": "https://pavlet.ru/zabit"
  },
  "measureanji": {
    "title": "Measure — Anzhi",
    "description": "produced by [**Measure**](https://measure-online.com/anji-kala)\nDOP, director Pavel Maklyarovsky\nstyle Zaynab Saidulaeva\nmodels Aminat Ibragimova, Patimat Sultanbagamaeva\nassist Muslimat",
    "embeds": [
      "https://player.vimeo.com/video/1061824671?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild6430-3930-4135-a631-313433336236/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild6462-3637-4130-a534-653865666330/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild3336-3037-4531-a566-656665316331/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild3836-6465-4532-b631-313138376263/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild3164-3665-4066-b763-643161613135/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild6462-6264-4363-b434-356639326438/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild6134-3263-4932-b836-326562353633/Screenshot_2025-03-0.png",
      "https://static.tildacdn.com/tild3835-3033-4037-b864-303236623066/Screenshot_2025-03-0.png"
    ],
    "originalUrl": "https://pavlet.ru/measureanji"
  },
  "donutsday": {
    "title": "\"The Era of More Intensive Observation of the Sky\" — Donutsday commercial",
    "description": "client Donutsday\nproducer and casting Uma Magadova\nDirector, DOP, concept Pavel Maklyarovsky\nstyle Hava\nstyle assist Abdi\nmodels Anna Yudakova, Sasha, Open Up Model Management\nproduction assists Nozya, Dzhuma\nmakeup, hair Julia Tingaeva\ngaffer Yaroslav",
    "embeds": [
      "https://player.vimeo.com/video/1177690385?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild6130-6135-4231-b837-373466666631/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild3334-3162-4331-b138-666565333465/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild3234-6436-4337-b239-633462303365/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild3361-3864-4661-b965-383539666430/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild6133-6435-4039-a435-656436313562/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild3065-3632-4232-b234-653962613264/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild6538-3161-4633-b331-356538643632/Screenshot_2026-03-2.jpg",
      "https://static.tildacdn.com/tild6163-6463-4064-a634-313537663532/Screenshot_2026-03-2.jpg"
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
      "https://static.tildacdn.com/tild6439-6135-4661-b030-393865323162/IMG_6313.jpg",
      "https://static.tildacdn.com/tild6132-3830-4263-b535-313939626561/IMG_6312.jpg",
      "https://static.tildacdn.com/tild3639-6237-4039-a331-363631656461/IMG_6310.jpg",
      "https://static.tildacdn.com/tild3561-6462-4030-b239-613335306662/IMG_6309.jpg",
      "https://static.tildacdn.com/tild3530-6638-4465-b136-636437316432/IMG_6305.jpg",
      "https://static.tildacdn.com/tild3061-3962-4761-b232-363939356237/IMG_6307.jpg",
      "https://static.tildacdn.com/tild6434-3231-4531-b164-636230336464/IMG_6308.jpg",
      "https://static.tildacdn.com/tild3738-3038-4431-b430-656233323666/Screenshot_2024-01-1.png"
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
      "https://static.tildacdn.com/tild6437-3664-4430-b766-363737303834/IMG_6318.jpg",
      "https://static.tildacdn.com/tild6535-3137-4361-a363-366430336132/IMG_6317.jpg",
      "https://static.tildacdn.com/tild3735-3037-4832-a165-396231396230/IMG_6316.jpg",
      "https://static.tildacdn.com/tild3135-3631-4230-a361-393965353734/IMG_6315.jpg",
      "https://static.tildacdn.com/tild6537-3937-4464-a261-663832653634/IMG_6319.jpg",
      "https://static.tildacdn.com/tild6331-6634-4930-b832-336233626435/IMG_6320.jpg",
      "https://static.tildacdn.com/tild6237-6332-4430-a135-323862623063/IMG_6321.jpg",
      "https://static.tildacdn.com/tild6533-6333-4965-b261-373930336438/IMG_6322.jpg"
    ],
    "originalUrl": "https://pavlet.ru/alice"
  },
  "dagestan": {
    "title": "South Dagestan",
    "description": "People and places of Dagestan for southdag.ru",
    "embeds": [
      "https://player.vimeo.com/video/525219335?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild3032-3538-4730-a637-356262643566/IMG_6323.jpg",
      "https://static.tildacdn.com/tild3738-6134-4336-a435-646431623834/IMG_6325.jpg",
      "https://static.tildacdn.com/tild3163-6536-4236-b630-303463386565/IMG_6326.jpg",
      "https://static.tildacdn.com/tild6662-6638-4138-a465-333866343462/IMG_6327.jpg",
      "https://static.tildacdn.com/tild6663-3061-4535-b162-333564643338/IMG_6328.jpg",
      "https://static.tildacdn.com/tild3031-3366-4038-a238-343766616666/IMG_6329.jpg"
    ],
    "originalUrl": "https://pavlet.ru/dagestan"
  },
  "pankisi": {
    "title": "Pankisi — Deli Reza Khilva Shuna",
    "description": "director & DOP Pavel Maklyarovsky VFX Islam Ayubi\nRelease captured by Ored Recordings folk label\nChechen sufi chant “Deli Reza Khilva Shuna” performed by Pankisi ensemble from Georgia. Music video directed by Pavel Maklyarovsky with VFX of Islam Ayubi is based on quotes of chechen influencers of different periods of time — religious leaders and folklore performers, bards and poets. They are given in English, Russian, Georgian and Chechen languages — most common for the nation due to the regions they live in. Chechen language is given in latin version of 1990s which was used for the concept of free republic. Women are represented in a warlike way as ones who can fight if necessary, not just revive the nation. During the process of singing, traditionally-shaped ancestral towers are being restored. In the end, towers stand still as a symbol of regained and free homeland of ancestors and utopian world of peace chechens have been trying to reach.",
    "embeds": [
      "https://player.vimeo.com/video/908044607?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild6339-3331-4666-b637-353463373930/IMG_6335.jpg",
      "https://static.tildacdn.com/tild6162-3932-4538-a332-663733636235/IMG_6334.jpg",
      "https://static.tildacdn.com/tild6338-3635-4035-b634-333239306665/IMG_6330.jpg",
      "https://static.tildacdn.com/tild3230-3530-4833-b739-623565353064/IMG_6331.jpg",
      "https://static.tildacdn.com/tild6632-3839-4637-a635-396439393831/IMG_6332.jpg",
      "https://static.tildacdn.com/tild6361-6335-4439-a261-383331623063/IMG_6333.jpg"
    ],
    "originalUrl": "https://pavlet.ru/pankisi"
  },
  "qhuaua": {
    "title": "JRPJEJ — Qhuaua E Ored music video",
    "description": "Music video for Circassian post-traditional band «JRPJEJ» on \"The Boar and The Hunter\" song, using digital interpretations of old Circassian ornaments\nVideo is a part of The Russian Art Archive Network (RAAN), an online catalogue of documents on the history of Russian contemporary art from the collections of Garage Museum and partner institutions.\nprod Ored Recordings\n[Russian Art Archive Network](https://russianartarchive.net/ru/catalogue/document/V14460)",
    "embeds": [
      "https://player.vimeo.com/video/361296474?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild3862-3935-4461-b636-386333323134/IMG_6338.jpg",
      "https://static.tildacdn.com/tild3861-6338-4563-b961-346465636562/IMG_6337.jpg",
      "https://static.tildacdn.com/tild3731-3134-4666-a364-326635653661/IMG_6336.jpg",
      "https://static.tildacdn.com/tild3065-6566-4234-b232-613030346231/IMG_6339.jpg",
      "https://static.tildacdn.com/tild3265-3430-4532-a639-373630633762/IMG_6341.jpg",
      "https://static.tildacdn.com/tild6238-3462-4633-b939-353138366238/IMG_6342.jpg",
      "https://static.tildacdn.com/tild6333-3036-4733-a335-613861643232/IMG_6343.jpg",
      "https://static.tildacdn.com/tild6335-3839-4163-a230-326362356438/IMG_6344.jpg"
    ],
    "originalUrl": "https://pavlet.ru/qhuaua"
  },
  "followmeto": {
    "title": "#followmeto Mercedes-Benz Fashion Week Tbilisi",
    "description": "video for [**FollowMeTo**](https://www.instagram.com/followmeto/?hl=en)\nstarring [**Nataly Osmann**](https://www.instagram.com/natalyosmann/?hl=en)",
    "embeds": [
      "https://player.vimeo.com/video/381445129?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild3235-3131-4337-b266-363935353335/IMG_6346.jpg",
      "https://static.tildacdn.com/tild6563-3530-4131-a132-636661333764/IMG_6347.jpg",
      "https://static.tildacdn.com/tild6135-6339-4931-b265-396530643437/IMG_6348.jpg",
      "https://static.tildacdn.com/tild6136-6431-4461-b463-636636353036/IMG_6352.jpg",
      "https://static.tildacdn.com/tild3664-3965-4164-b731-643437393238/IMG_6351.jpg",
      "https://static.tildacdn.com/tild3432-6333-4632-b461-626463396665/IMG_6350.jpg",
      "https://static.tildacdn.com/tild3633-6133-4734-b532-346231393736/IMG_6349.jpg",
      "https://static.tildacdn.com/tild3364-6162-4635-a464-353137613839/IMG_6353.jpg"
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
      "https://static.tildacdn.com/tild3065-3930-4933-b438-393466353037/IMG_6357.jpg",
      "https://static.tildacdn.com/tild6665-3165-4561-b863-306163623432/IMG_6356.jpg",
      "https://static.tildacdn.com/tild3331-6532-4564-b035-623764343730/IMG_6355.jpg",
      "https://static.tildacdn.com/tild3864-6230-4962-b765-373334303332/IMG_6354.jpg",
      "https://static.tildacdn.com/tild3737-3835-4465-a530-393030386536/IMG_6359.jpg"
    ],
    "originalUrl": "https://pavlet.ru/madeinmilan"
  },
  "subay": {
    "title": "\"Windy\" for Subay store",
    "description": "Commercial for Karachai and Spanish headscarves brand inspired by old westerns and Karachai national dress\nbrand **Subay**\nstyle&model Ruzanna Semenova",
    "embeds": [
      "https://player.vimeo.com/video/416990975?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    ],
    "videoLinks": [],
    "gallery": [
      "https://static.tildacdn.com/tild6162-6462-4366-b530-666465346338/IMG_6360.jpg",
      "https://static.tildacdn.com/tild3933-6131-4131-b538-663964366565/IMG_6361.jpg",
      "https://static.tildacdn.com/tild3261-3032-4539-b162-333861396432/IMG_6362.jpg",
      "https://static.tildacdn.com/tild3937-3836-4639-a130-653264316334/IMG_6363.jpg",
      "https://static.tildacdn.com/tild6231-6461-4330-b036-666336653634/IMG_6365.jpg",
      "https://static.tildacdn.com/tild6664-6562-4533-a631-346366356336/IMG_6364.jpg"
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
      "https://static.tildacdn.com/tild6661-3764-4230-b635-383461313839/IMG_6377.jpg",
      "https://static.tildacdn.com/tild6666-6362-4739-a537-343939643463/IMG_6376.jpg",
      "https://static.tildacdn.com/tild3165-3663-4338-b564-303265363466/IMG_6375.jpg",
      "https://static.tildacdn.com/tild3061-3731-4535-a564-666338313336/IMG_6369.jpg",
      "https://static.tildacdn.com/tild3538-6437-4565-a337-313130336235/IMG_6370.jpg",
      "https://static.tildacdn.com/tild3565-3866-4538-b634-353034663434/IMG_6373.jpg",
      "https://static.tildacdn.com/tild3534-3434-4938-b838-393038656262/IMG_6367.jpg",
      "https://static.tildacdn.com/tild3535-6264-4330-b232-313265613633/IMG_6366.jpg"
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
      "https://static.tildacdn.com/tild3738-3062-4839-b865-306438326365/IMG_6381.jpg",
      "https://static.tildacdn.com/tild3133-6561-4630-a137-346432626635/IMG_6382.jpg",
      "https://static.tildacdn.com/tild3633-6339-4434-a464-386339306435/IMG_6380.jpg",
      "https://static.tildacdn.com/tild3264-6265-4438-a239-336438613964/IMG_6379.jpg",
      "https://static.tildacdn.com/tild3938-3234-4434-b938-633436623438/IMG_6378.jpg"
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
      "https://static.tildacdn.com/tild6536-3236-4332-b463-363365333933/IMG_6391.jpg",
      "https://static.tildacdn.com/tild3330-3164-4832-b831-646666623261/IMG_6389.jpg",
      "https://static.tildacdn.com/tild6538-6162-4136-a163-336665346338/IMG_6388.jpg",
      "https://static.tildacdn.com/tild3236-6265-4032-b165-633338303739/IMG_6387.jpg",
      "https://static.tildacdn.com/tild3139-3662-4438-b234-646339663639/IMG_6386.jpg",
      "https://static.tildacdn.com/tild3930-3666-4237-b934-333666653162/IMG_6385.jpg"
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
      "https://static.tildacdn.com/tild3033-6561-4836-a437-386563383337/IMG_6400.jpg",
      "https://static.tildacdn.com/tild3938-3063-4037-b934-366137376664/IMG_6394.jpg",
      "https://static.tildacdn.com/tild3664-6238-4561-a164-343338366666/IMG_6399.jpg",
      "https://static.tildacdn.com/tild3331-3437-4031-a532-623231336233/IMG_6398.jpg",
      "https://static.tildacdn.com/tild3063-3265-4631-b932-353165633166/IMG_6397.jpg",
      "https://static.tildacdn.com/tild3966-3934-4465-a133-353161303066/IMG_6396.jpg"
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
      "https://static.tildacdn.com/tild6561-6234-4464-b634-643136396461/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3038-3535-4737-b033-653130653961/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild6137-3861-4430-a164-303936653162/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3232-3934-4332-b934-376432623239/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3566-3361-4564-b533-376539363032/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild6338-3338-4330-a166-356539303136/Screenshot_2024-07-2.png"
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
      "https://static.tildacdn.com/tild3533-3434-4466-b463-646432316563/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3262-6235-4965-b636-343135393765/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3964-6133-4535-a562-306630333266/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3861-3064-4264-b030-616363343666/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3630-3130-4038-a661-303432303065/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3938-3265-4937-b365-373939376637/Screenshot_2024-07-2.png"
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
      "https://static.tildacdn.com/tild3436-6535-4239-a538-353366363464/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3665-6563-4132-b763-363733353162/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3335-3661-4233-b264-386437336634/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3765-6465-4132-a537-303934383932/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild6132-6339-4566-a238-316430366439/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3734-3639-4638-b264-643265386463/Screenshot_2024-07-2.jpg"
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
      "https://static.tildacdn.com/tild3834-3533-4139-b838-616231333363/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3536-3064-4665-a561-376138383465/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3066-3430-4035-a632-343430336266/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild6334-3862-4338-a637-393833306361/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild6436-3866-4935-a631-653162663566/Screenshot_2024-07-2.jpg",
      "https://static.tildacdn.com/tild3664-3738-4437-b138-636237383766/Screenshot_2024-07-2.jpg"
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
      "https://static.tildacdn.com/tild3565-3630-4035-a433-376535653138/IMG_6406.jpg",
      "https://static.tildacdn.com/tild3865-6438-4265-b663-633037613862/IMG_6405.jpg",
      "https://static.tildacdn.com/tild3962-3161-4335-b336-656564366537/IMG_6404.jpg",
      "https://static.tildacdn.com/tild3135-3530-4163-b139-353231663136/IMG_6403.jpg",
      "https://static.tildacdn.com/tild3834-6365-4666-b237-363832303630/IMG_6402.jpg",
      "https://static.tildacdn.com/tild6335-3137-4336-b262-623464303336/IMG_6401.jpg"
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
      "https://static.tildacdn.com/tild6165-3866-4334-b930-353235383434/IMG_6411.jpg",
      "https://static.tildacdn.com/tild3531-6237-4535-b762-383237373532/IMG_6410.jpg",
      "https://static.tildacdn.com/tild6564-6533-4231-b761-626663353663/IMG_6409.jpg",
      "https://static.tildacdn.com/tild3739-6561-4264-a533-343262393931/IMG_6408.jpg",
      "https://static.tildacdn.com/tild6233-6637-4633-a363-643461343066/IMG_6407.jpg"
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
      "https://static.tildacdn.com/tild6138-3638-4231-a635-316538343562/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild6237-6235-4337-a438-393162373339/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3761-6636-4666-a639-613839343364/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3862-3161-4238-a436-616165336432/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3433-3133-4436-a664-626166373033/Screenshot_2024-07-2.png",
      "https://static.tildacdn.com/tild3065-3939-4637-b965-393434613435/Screenshot_2024-07-2.png"
    ],
    "originalUrl": "https://pavlet.ru/moonka"
  }
};
