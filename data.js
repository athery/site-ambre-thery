/*
  ============================================================
  CONTENU DU SITE — c'est le SEUL fichier à modifier au quotidien.
  Pas besoin de savoir coder : ajoute/modifie/supprime des lignes
  entre guillemets, ou ajoute un bloc { ... } dans une liste en
  copiant un bloc existant.
  Tous les blocs sont facultatifs : tu peux mettre "//" devant une ligne
  pour la désactiver, ou supprimer un bloc { ... } entier — le reste du
  site continue de s'afficher normalement.

  Dans la plupart des textes (intro, détails, descriptions...), tu peux
  utiliser :
    **texte**                        → texte en gras
    *texte*                          → texte en italique
    [texte](https://exemple.com)     → lien cliquable
  Exemple : "**Microbiologie :** culture, dénombrement, PCR"

  Après modification : enregistre le fichier, puis "commit" sur
  GitHub (voir README.md) pour mettre le site à jour en ligne.
  ============================================================
*/

const SITE_DATA = {

  // ----- Ordre d'affichage des sections -----
  // Change simplement l'ordre des lignes ci-dessous pour changer l'ordre
  // sur le site. "Accueil" (photo + nom) reste toujours en premier, et
  // "Contact" toujours en dernier — ce sont les seules non réordonnables.
  sectionOrder: ["formation", "stages", "travaux", "competences", "plongee"],

  // ----- Titres des sections (le texte affiché en haut de chaque bloc) -----
  sections: {
    plongee: { eyebrow: "Plongée", title: "Plongeuse naturaliste", galleryTitle: "Photographies : quelques rencontres en méditerranée..." },
    formation: { eyebrow: "Formation", title: "Parcours académique", terrainTitle: "Sciences participatives" },
    stages: { eyebrow: "Expérience", title: "Stages & expériences de terrain" },
    travaux: { eyebrow: "Réalisations", title: "Travaux réalisés et consultables" },
    competences: { eyebrow: "Compétences", title: "Techniques & technologies" },
    contact: {
      title: "Travaillons ensemble",
      lead: "Je suis disponible pour un stage de technicienne scientifique — écologie, écotoxicologie, microbiologie, biologie moléculaire, surveillance, suivi et restauration d'écosystèmes.",
    },
  },

  // ----- Profil / en-tête -----
  profile: {
    name: "Ambre Thery",
    role: "Technicienne scientifique — Sciences de la mer",
    tagline: "Écologie · Écotoxicologie · Microbiologie · Biologie Moléculaire · Surveillance · Suivi et restauration d'écosystèmes",
    availability: "Recherche de stage · 4 mois à partir du 26 avril 2027",
    photo: "assets/img/portrait.jpg",
    cvFile: "assets/cv/CV-Ambre-Thery.pdf",
    email: "ambre@thery.io",
    // Pas de téléphone affiché publiquement (décision volontaire) — seul
    // l'email est utilisé comme moyen de contact sur le site.
    intro: "Étudiante en dernière année de Cadre Technique - Génie de l'Environement Marin au **CNAM Intechmer** (Cherbourg-en-Cotentin), je suis formée aux sciences de la mer, aux techniques de laboratoire, aux mesures et à l'observation in-situ et au traitement cartographique et statistique des données. Plongeuse naturaliste depuis mon plus jeune âge, amoureuse des écosystèmes et de la biodiversité marine, je souhaite contribuer à leur meilleure compréhension, à leur protection et à leur restauration.",
    // "verifyUrl" est facultatif : ajoute un lien "(check)" vers une page
    // de vérification de certificat, ouvert dans un nouvel onglet.
    languages: [
      { lang: "Français", level: "Langue maternelle" },
      { lang: "Anglais", level: "Niveau C1", verifyUrl: "https://internationalenglishtest.com/verify-certificate?code=IET-2026-KXY544" },
      { lang: "Navigation", level : "Permis côtier" },
      { lang: "Sécurité", level: "Formation NEO (CNRS)" }
    ],
  },

  // ----- Section Plongée -----
  plongee: {
    intro: "Plongeuse autonome à 60m, formée aux protocoles de suivi des écosystèmes marins (FAST, Seascape, RESMED). 230 plongées en mer.",
    //stat: { value: "230", label: "plongées en mer" },
    // Certifications groupées par organisme. Pour ajouter une certif,
    // ajoute une ligne { name: "..." } dans le groupe qui convient
    // (ou { name: "...", status: "à venir" } si elle n'est pas encore obtenue).
    certifications: [
      {
        groupe: "FFESSM / CMAS",
        logo: "assets/img/logos/ffessm.jpg",
        items: [
          { name: "Niveau 3 (PA60)" },
          { name: "RIFAP" },
          { name: "Plongeur Biologiste Niveau 1" },
        ],
      },
      {
        groupe: "SSI",
        logo: "assets/img/logos/ssi.jpg",
        items: [
          { name: "Advanced Diver" },
          { name: "Deep Diver" },
          { name: "Dry Suit" },
          { name: "Navigation" },
          { name: "Diver Stress & Rescue" },
          { name: "Nitrox" },
        ],
      },
      {
        groupe: "Plongée professionnelle",
        items: [
          { name: "Scaphandrier classe 1B", status: "à venir" },
        ],
      },
    ],
    // Photos de plongée. "caption" (descriptif) et "lieu" sont facultatifs
    // et à toi de remplir — ils s'affichent uniquement quand on clique sur
    // une photo (pas sur la vignette). L'ordre ci-dessous suit à peu près
    // l'ordre chronologique des prises de vue ; réordonne les lignes si tu
    // veux changer l'ordre d'affichage.
    // Pour ajouter une nouvelle photo : dépose le fichier dans
    // assets/img/plongee/, puis ajoute une ligne { src: "assets/img/plongee/nom.jpg", caption: "", lieu: "" }.
    gallery: [
      { src: "assets/img/plongee/PA040562.JPG", thumb: "assets/img/plongee/thumbs/PA040562.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA040563_resized.JPG", thumb: "assets/img/plongee/thumbs/PA040563_resized.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA040567.JPG", thumb: "assets/img/plongee/thumbs/PA040567.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA200608.JPG", thumb: "assets/img/plongee/thumbs/PA200608.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA210624.JPG", thumb: "assets/img/plongee/thumbs/PA210624.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA210639~2.JPG", thumb: "assets/img/plongee/thumbs/PA210639~2.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA210630~3.JPG", thumb: "assets/img/plongee/thumbs/PA210630~3.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA200600~2.JPG", thumb: "assets/img/plongee/thumbs/PA200600~2.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA210622~2.JPG", thumb: "assets/img/plongee/thumbs/PA210622~2.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA210632~2.JPG", thumb: "assets/img/plongee/thumbs/PA210632~2.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA210627~4.JPG", thumb: "assets/img/plongee/thumbs/PA210627~4.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA031089.JPG", thumb: "assets/img/plongee/thumbs/PA031089.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA031097.JPG", thumb: "assets/img/plongee/thumbs/PA031097.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA031108.JPG", thumb: "assets/img/plongee/thumbs/PA031108.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA031091.JPG", thumb: "assets/img/plongee/thumbs/PA031091.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA041118.JPG", thumb: "assets/img/plongee/thumbs/PA041118.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA031085.JPG", thumb: "assets/img/plongee/thumbs/PA031085.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA191142.JPG", thumb: "assets/img/plongee/thumbs/PA191142.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA191154.JPG", thumb: "assets/img/plongee/thumbs/PA191154.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA191160.JPG", thumb: "assets/img/plongee/thumbs/PA191160.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PA201209.JPG", thumb: "assets/img/plongee/thumbs/PA201209.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PB071275(1).JPG", thumb: "assets/img/plongee/thumbs/PB071275(1).JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PB071278.JPG", thumb: "assets/img/plongee/thumbs/PB071278.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PB071316(1).JPG", thumb: "assets/img/plongee/thumbs/PB071316(1).JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/PB091442.JPG", thumb: "assets/img/plongee/thumbs/PB091442.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P5231570.JPG", thumb: "assets/img/plongee/thumbs/P5231570.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P5231571.JPG", thumb: "assets/img/plongee/thumbs/P5231571.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P5231579(1).JPG", thumb: "assets/img/plongee/thumbs/P5231579(1).JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P5231593.JPG", thumb: "assets/img/plongee/thumbs/P5231593.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P6201675.JPG", thumb: "assets/img/plongee/thumbs/P6201675.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P6261714.JPG", thumb: "assets/img/plongee/thumbs/P6261714.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P7181736[1].JPG", thumb: "assets/img/plongee/thumbs/P7181736[1].JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P7181731.JPG", thumb: "assets/img/plongee/thumbs/P7181731.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P8111772.JPG", thumb: "assets/img/plongee/thumbs/P8111772.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P8111763.JPG", thumb: "assets/img/plongee/thumbs/P8111763.JPG", caption: "", lieu: "" },
      { src: "assets/img/plongee/P8111762.JPG", thumb: "assets/img/plongee/thumbs/P8111762.JPG", caption: "", lieu: "" },
    ],
  },

  // ----- Section Formation -----
  // Deux sous-parties, chacune facultative indépendamment :
  // "academique" (parcours diplômant) et "terrain" (formations courtes).
  formation: {
    academique: [
      {
        period: "2023 — 2027",
        title: "Cadre Technique — Génie de l'Environnement Marin",
        place: "CNAM Intechmer, Cherbourg",
        details: [
          "**Biologie & écologie marine :** écosystèmes, biodiversité, anatomie, zoologie, halieutique, éthologie, écotoxicologie, protection du milieu",
          "**Sciences marines :** océanographie, géologie marine, biogéochimie, sédimentologie, microbiologie, biochimie, techniques séparatives",
          "**Méthodes & terrain :** mesures in situ, métrologie, statistiques, traitement de données, SIG, cartographie · TP embarqués & laboratoire",
        ],
      },
      {
        period: "2023",
        title: "Bac Sciences et Techniques de Laboratoire (95)",
        place: "Biotechnologies, Biologie-biochimie, Maths Physique Chimie",
        details: [
          "Projet technologique : Bioluminescence bactérienne marine — culture et dénombrement de Photobacterium phosphoreum, mesure de consommation d'O₂",
        ],
      },
    ],
    terrain: [
      {
        period: "2022",
        title: "Protocoles de suivi d'écosystème FAST et Seascape",
        place: "Naturdive",
        details: [],
      },
      {
        // Deux formations la même année : "period" une seule fois,
        // puis "items" avec chacune son titre/sous-titre/détails.
        period: "2021",
        items: [
          {
            title: "Identification des traces de tortues caouannes",
            place: "CESTMED",
            details: [],
          },
          {
            title: "Protocole RESMED - Recensement de poissons en plongée",
            place: "RESMED (66)",
            details: [],
          },
        ],
      },
      {
        period: "2020",
        title: "Formation en réhabilitation de corail",
        place: "Ocean Quest, Toulon",
        details: [],
      },
    ],
  },

  // ----- Section Stages & terrain -----
  stages: [
    {
      period: "2027",
      title: "Évolution de la dune bordière et des marais arrière-littoraux du Val de Saire",
      place: "CNAM Intechmer",
      details: ["Photographies, LIDAR, GNSS, SIG, capteurs in situ"],
    },
    {
      period: "septembre 2026",
      title: "Restauration et suivi des herbiers de zostère",
      place: "GIPREB, étang de Berre",
      details: ["Mesures biogéochimiques, sédimentologie, inventaire macroalgues, biométrie des zostères"],
    },
    {
      period: "mai-juin 2026",
      title: "Stage de Technicienne de recherche",
      place: "CRIOBE, Perpignan — équipe « Marine Interactome », tutrice Dr Claudia Pogoreutz",
      details: [
        "**Thème :** Rôle des microalgues symbiotiques sur la thermorésistance des anémones *Aiptasia* de Méditerranée et de mer Rouge",
        "**Missions : **Aquariologie scientifique, échantillonnage, extraction d'ADN, PCR, spectrophotométrie, électrophorèse, dosage de protéines et activité spécifique de la catalase",
      ],
    },
    {
      period: "2025-2026",
      title: "Etude de l'estran et réalisation d'un alguier scientifique",
      place: "CNAM Intechmer",
      details: [
        "Identification et abondance des espèces faune et flore le long de transects coupant les ceintures algales",
        "Constitution de bases de données, analyses en langage R et création d'un poster scientifique",
        "Réalisation d'un alguier scientifique de plus de 60 espèces récoltées sur l'estran et en plongée",
      ],
    },
    {
      period: "2025",
      title: "Analyse de l'eau de la rade de Cherbourg",
      place: "CNAM Intechmer, Navire océanographique",
      details: [
         "Embarquement sur un navire de la flotte océanographique française",
         "Prélèvements d'eau et de sédiments, filtration à bord, sonde multiparamètres",
         "Analyses en laboratoire : pH, O2 dissout, Nutriments, Chlorophylle"
      ],
    },
    {
      period: "2020",
      title: "Stage d'observation de troisième",
      place: "Observatoire Océanologique de Banyuls (66)",
      details: [],
    },
  ],

  // ----- Section Travaux réalisés -----
  // "links" est facultatif : liste de boutons (rapport, poster, etc.).
  // Chaque url pointe vers un fichier déposé dans assets/travaux/.
  travaux: [
    {
      title: "Rapport de stage : Interactions microbiennes au sein de l'holobionte photosymbiotique de l'anémone de mer",
      period: "2026 · CRIOBE Perpignan",
      desc: "Analyses de deux souches Méditerranée / mer Rouge et leur holobionte : aquariologie, extraction ADN, PCR, dosage de protéines et catalase.",
      tags: ["Biologie moléculaire", "Cnidaria", "ADN", "PCR", "Proteinomics"],
      links: [
        { label: "Lire le rapport", url: "assets/travaux/Rapport_Stage_Ambre_Thery_CRIOBE.pdf" },
        { label: "Lire l'abstract", url: "assets/travaux/Abstract_Stage_AmbreThery_CRIOBE.pdf" },
      ],
    },
    {
      title: "Etude bibliographique : L'écosystème Mangrove - services écosystémiques et restauration type solutions fondées sur la nature.",
      period: "2026 · CNAM Intechmer",
      desc: "Synthèse de 43 publications et sources scientifiques traitant de ce socio-écosystème, des limites et des perspectives de sa restauration.",
      tags: ["Mangrove", "bibliographie"],
      links: [
        { label: "Lire l'étude", url: "assets/travaux/Etude_Biblio_Ambre_Thery_Mangrove.pdf" },
        { label: "Poster scientifique", url: "assets/travaux/Poster_Scientifique_Ambre_Thery_Mangrove.pdf" },
        { label: "Présentation au jury", url: "assets/travaux/Presentation_Juty_Ambre_Thery_Mangrove.pdf" },
      ],
    },
    {
      title: "Etude de l'estan - Peuplement des zones algales de deux sites du Cotentin.",
      period: "2026 · CNAM Intechmer",
      desc: "Analyse de la diversité et de la densité de populations de macroalgues sur les différentes ceintures algales d'un site battu et d'un site abrité. Analyse des données recueillies et comparaison.",
      tags: ["Quadrat", "Macroalgues", "Langage R"],
      links: [
        { label: "Poster scientifique", url: "assets/travaux/Poster_Scientifique_Estran_Cotentin.pdf" },
        { label: "Alguier scientifique (extraits)", url: "assets/travaux/Extrait_Alguier_Ambre_Thery.pdf" },
      ],
    },
  ],

  // ----- Compétences techniques -----
  competences: [
    {
      categorie: "Mesures in situ",
      items: ["Sonde multi-paramètres", "Bouteilles Niskin", "Sondeur", "Carottage", "Prélèvement en plongée", "Quadrats (faune et flore)"],
    },
    {
      categorie: "Chimie & analyse",
      items: ["Spectrophotométrie", "Chromatographie CCM et colonne", "Électrophorèse", "Analyse d'eau de mer (pH, salinité, nutriments, turbidité, O₂, chlorophylle)", "Granulométrie tamis et laser"],
    },
    {
      categorie: "Microbiologie",
      items: ["Culture, dénombrement", "PCR, extraction ADN", "Transfert de gènes", "Tests de Gram", "Microscopie", "Test de sensibilité bactérienne"],
    },
    {
      categorie: "Biologie / Zoologie",
      items: ["Identification d'espèces", "Préparation d'échantillon", "Dissection", "Confection d'un herbier scientifique"],
    },
    {
      categorie: "Logiciels & données",
      items: ["QGIS (SIG)", "R / RStudio / R Markdown", "MS Office, LibreOffice"],
    },
  ],

  // ----- Divers -----
  divers: {
    embarquement: ["Matricule de marin", "Permis côtier"],
    securite: ["6 ans de pratique en laboratoire", "Certification NEO (CNRS)"],
  },
};
