// ============================================================
// VAULGARD — CONFIGURATION DE LA PAGE
// Le SEUL fichier à modifier au quotidien.
// ============================================================

window.VAULGARD_CONFIG = {
  // 1. LA VSL
  VSL_WISTIA_ID: "m21yi7j5yf", // ID Wistia de la VSL (prioritaire sur VSL_URL)
  VSL_URL: "",            // ex: "assets/vsl.mp4" ou une URL Bunny Stream (si pas de Wistia)
  VSL_POSTER: "",         // ⚠️ mets TON VISAGE face caméra (visages = +70% de fixation, confiance)

  // 2. RARETÉ RÉELLE — c'est TOI qui pilotes ces chiffres, à la main.
  //    Le badge affiche : "7 places sur la cohorte de juillet · 3 prises cette semaine"
  //    Décrémente PLACES_RESTANTES à chaque vente. Crédible parce que vrai.
  COHORTE: "juillet",
  PLACES_RESTANTES: 10,
  PLACES_PRISES_SEMAINE: 0,   // 0 = la mention "prises cette semaine" est masquée

  // 3. LES 13 MIROIRS — le "avant" de chaque membre (la porte d'identification).
  //    Choisis pour chacun UNE des 6 portes (calquées sur tes 6 personas réels) :
  //      « Parti de zéro, tout tenté seul »        (jeune déterminé, 27% du trafic)
  //      « CDI confortable, un seul salaire »       (salarié-cadre, 20%)
  //      « Déjà brûlé par une autre formation »     (ex-élève déçu, 16%)
  //      « Freelance, fatigué des clients »         (freelance/expat, 12%)
  //      « Reparti de zéro après 45 ans »           (reconversion, 12%)
  //      « Voulait la data avant de signer »        (analytique, 13%)
  //    Ou un fait réel du parcours. "" = "Interview membre" par défaut.
  INTERVIEWS_FROM: {
    "Mavrick": "",
    "Florian": "« C'est une arnaque. » — son premier message.",
    "Anaïs": "",
    "Maxime-1": "",
    "Stéphane": "Parti de zéro. 3 chaînes et un Play Button au mur.*",
    "Iris": "",
    "Marcus": "",
    "Yumé": "",
    "Théo": "",
    "Titouan": "",
    "Maxime-2": "",
    "Léo": "",
    "Mathis": "",
  },

  // 4. IDENTITÉ (âge · région) — la divulgation d'identité augmente les ventes
  //    (Forman 2008). Format : "23 ans · Belgique". "" = rien d'affiché.
  INTERVIEWS_META: {
    "Mavrick": "",
    "Florian": "",
    "Anaïs": "",
    "Maxime-1": "",
    "Stéphane": "",
    "Iris": "",
    "Marcus": "",
    "Yumé": "",
    "Théo": "",
    "Titouan": "",
    "Maxime-2": "",
    "Léo": "",
    "Mathis": "",
  },

  // 5. ORDRE DU RAIL — les 3-4 premiers visibles sans scroller doivent couvrir
  //    tes plus gros personas. Mets les clés dans l'ordre voulu.
  INTERVIEWS_ORDER: ["Florian", "Stéphane", "Mavrick", "Anaïs", "Maxime-1", "Iris", "Marcus", "Yumé", "Théo", "Titouan", "Maxime-2", "Léo", "Mathis"],

  // ============================================================
  // PAGE DE CONFIRMATION (confirmation.html) — configure la
  // redirection post-booking d'iClosed vers cette page.
  // ============================================================

  // 6. LE NUMÉRO QUI APPELLE — affiché pour que le prospect décroche
  //    (et enregistre le contact). "" = bloc masqué.
  TEAM_PHONE: "+33 7 85 13 33 48",

  // 7. VIDÉO PRINCIPALE de la confirmation (format "je t'aide à faire
  //    tes recherches" / réponses aux questions des calls).
  //    Soit un mp4 (chapitres cliquables), soit un ID Wistia.
  CONFIRM_VIDEO_URL: "",       // ex: "assets/confirmation.mp4"
  CONFIRM_WISTIA_ID: "",       // ex: "abc123xyz" (utilisé si pas de mp4)
  // Chapitres [seconde, titre] — cliquables si mp4
  CONFIRM_CHAPTERS: [
    [0, "Ce qui se passe maintenant"],
    [45, "Comment vérifier qui on est"],
    [120, "Ce qu'on va regarder ensemble sur l'appel"],
    [200, "Comment on gagne de l'argent (le pourcentage)"],
  ],

  // 8. BREAKOUT VIDEOS — une vidéo courte par question posée en call.
  //    Wistia ID vide = carte affichée en "bientôt disponible" masquée.
  BREAKOUTS: [
    { titre: "C'est quoi Vaulgard Engine, concrètement ?", wistia: "" },
    { titre: "Et si YouTube coupe la monétisation des chaînes IA ?", wistia: "" },
    { titre: "Pourquoi certains réussissent et d'autres non ?", wistia: "" },
    { titre: "Comment vous gagnez de l'argent avec moi ? (le pourcentage)", wistia: "" },
  ],
};
