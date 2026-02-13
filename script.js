/* ============================================
   YDS SERVICES - Script JavaScript principal
   ============================================ */

// ===== DONNÉES ALPINE.JS =====
// Ces données seront utilisées dans x-data du body
const ydsAppData = {
    // États de l'interface
    mobileMenu: false,
    isScrolled: false,
    showServiceModal: false,
    showGuideModal: false,
    activeService: null,
    activeGuide: null,

    // Fonction : Réinitialiser le scroll des modales
    resetModalScroll(elementId) {
        this.$nextTick(() => {
            const el = document.getElementById(elementId);
            if (el) el.scrollTop = 0;
        });
    },
    
    // ===== DONNÉES SERVICES =====
    services: {
        nettoyage: {
            title: 'Nettoyage de Bureaux',
            icon: 'fa-thumbs-up',
            color: 'ydsTeal',
            image: 'https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?q=80&w=800',
            description: 'Un environnement de travail propre est la clé de la productivité et du bien-être de vos collaborateurs.',
            details: [
                'Entretien quotidien des bureaux et open-spaces',
                'Lavage de vitrerie toutes hauteurs (perche ou nacelle)',
                'Gestion des consommables sanitaires (savon, papier, essuie-mains)',
                'Désinfection complète des points de contact (poignées, interrupteurs)',
                'Entretien spécifique des sols (décapage, mise en cire, shampoing moquette)',
                'Nettoyage haute pression des parkings et façades'
            ]
        },
        remise: {
            title: 'Remise en État Fin de Chantier',
            icon: 'fa-building-circle-check',
            color: 'ydsOrange',
            image: 'https://images.unsplash.com/flagged/photo-1556438758-872c68902f60?q=80&w=800',
            description: 'Nous intervenons sur les situations complexes nécessitant un équipement industriel et une expertise technique.',
            details: [
                'Évacuation des déchets et gravats',
                'Dépoussiérage complet des surfaces',
                'Nettoyage des sols (tous revêtements)',
                'Nettoyage des vitres et menuiseries',
                'Nettoyage des sanitaires',
                'Mise en propreté avant livraison client',
                'Nettoyage après sinistres (incendies, dégâts des eaux)'
            ]
        },
        maintenance: {
            title: 'Maintenance & Services Généraux',
            icon: 'fa-screwdriver-wrench',
            color: 'ydsGray',
            image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800',
            description: 'Externalisez la petite maintenance pour vous concentrer sur votre cœur de métier.',
            details: [
                'Remplacement d\'ampoules et petits travaux d\'électricité',
                'Montage et installation de mobilier de bureau',
                'Pose d\'étagères, de cadres et signalétique',
                'Petite plomberie (débouchage, changement de joints)',
                'Peinture de rafraîchissement (retouches murs et portes)',
                'Aide au déménagement interne des postes de travail'
            ]
        },
        immobilier: {
            title: 'Services aux régies et agences immo.',
            icon: 'fa-building-user',
            color: 'ydsTeal',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
            description: 'Un partenaire fiable pour garantir des logements impeccables entre chaque locataire.',
            details: [
                'Nettoyage sortie locataire (complet et conforme aux standards des régies)',
                'Remise en état après location (nettoyage approfondi, désinfection)',
                'Préparation des logements à la relocation (vitres, sols, sanitaires)',
                'Travaux de rafraîchissement (peinture, petites réparations, joints)'
            ]
        }
    },
    
    // ===== DONNÉES GUIDES =====
    guides: [
        {
            id: 1,
            category: 'Nettoyage',
            tagColor: 'ydsTeal',
            title: '5 astuces pour des bureaux productifs',
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800',
            intro: 'Un environnement de travail propre et organisé n\'est pas un luxe, c\'est un levier de performance. Découvrez comment transformer vos bureaux en véritables moteurs de productivité.',
            content: 'Les études le confirment : un espace de travail bien entretenu peut réduire l\'absentéisme de 12% et augmenter significativement la concentration des collaborateurs. Voici nos conseils pour transformer vos bureaux en véritables moteurs de productivité.\n\n𝟭. 𝗗𝗲́𝘀𝗲𝗻𝗰𝗼𝗺𝗯𝗿𝗲𝘇 𝗹𝗲𝘀 𝗲𝘀𝗽𝗮𝗰𝗲𝘀 𝗱𝗲 𝘁𝗿𝗮𝘃𝗮𝗶𝗹\nUn bureau surchargé de dossiers, de câbles et d\'objets inutiles génère une pollution visuelle qui fatigue le cerveau. Encouragez la politique du \'Clean Desk\' : chaque soir, les postes doivent être dégagés pour permettre un nettoyage efficace et offrir un accueil serein le lendemain matin.\n\n𝟮. 𝗦𝗼𝗶𝗴𝗻𝗲𝘇 𝗹𝗮 𝗾𝘂𝗮𝗹𝗶𝘁𝗲́ 𝗱𝗲 𝗹\'𝗮𝗶𝗿 𝗶𝗻𝘁𝗲́𝗿𝗶𝗲𝘂𝗿\nLa poussière accumulée dans les moquettes, les rideaux et les systèmes de ventilation provoque des micro-allergies et une fatigue chronique souvent inexpliquée. Un dépoussiérage régulier avec des équipements adaptés, notamment des aspirateurs à filtres HEPA, est indispensable pour préserver la santé de vos équipes.\n\n𝟯. 𝗘𝗻𝘁𝗿𝗲𝘁𝗲𝗻𝗲𝘇 𝗶𝗺𝗽𝗲𝗰𝗰𝗮𝗯𝗹𝗲𝗺𝗲𝗻𝘁 𝗹𝗲𝘀 𝗲𝘀𝗽𝗮𝗰𝗲𝘀 𝗰𝗼𝗺𝗺𝘂𝗻𝘀\nLa machine à café, la cuisine et les salles de pause sont des lieux de convivialité essentiels, mais aussi des nids à bactéries si l\'entretien n\'est pas quotidien. Une cuisine propre envoie un signal fort de respect envers les collaborateurs et renforce leur sentiment d\'appartenance.\n\n𝟰. 𝗣𝗹𝗮𝗻𝗶𝗳𝗶𝗲𝘇 𝗹𝗲𝘀 𝗶𝗻𝘁𝗲𝗿𝘃𝗲𝗻𝘁𝗶𝗼𝗻𝘀 𝗱𝗲 𝗻𝗲𝘁𝘁𝗼𝘆𝗮𝗴𝗲 𝗶𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗺𝗺𝗲𝗻𝘁\nFaire intervenir les équipes de ménage pendant les heures de forte activité crée des nuisances sonores et olfactives contre-productives. Privilégiez des créneaux en début ou fin de journée, voire un nettoyage en journée avec des méthodes silencieuses et discrètes.\n\n𝟱. 𝗡\'𝗼𝘂𝗯𝗹𝗶𝗲𝘇 𝗽𝗮𝘀 𝗹𝗲𝘀 𝗱𝗲́𝘁𝗮𝗶𝗹𝘀 𝗾𝘂𝗶 𝗳𝗼𝗻𝘁 𝗹𝗮 𝗱𝗶𝗳𝗳𝗲́𝗿𝗲𝗻𝗰𝗲\nLes poignées de portes, les interrupteurs, les claviers et les téléphones sont des points de contact à haute fréquence qui accumulent les germes. Une désinfection régulière de ces surfaces réduit considérablement la propagation des virus saisonniers au sein de vos équipes.',
            ydsApproach: 'Chez YDS Services, nous avons développé une méthodologie de nettoyage pensée pour la performance de votre entreprise. Nos équipes interviennent avec discrétion grâce à des techniques silencieuses qui ne perturbent jamais vos collaborateurs. Nous utilisons des produits certifiés respectueux de la santé et de l\'environnement, et nous portons une attention particulière aux points de contact sensibles. Avec YDS, vous bénéficiez d\'un interlocuteur unique qui comprend vos contraintes et adapte nos interventions à votre rythme de travail. Résultat : des bureaux impeccables, des équipes en meilleure santé, et une productivité optimisée.'
        },
        {
            id: 2,
            category: 'Chantier',
            tagColor: 'ydsOrange',
            title: 'Réussir son nettoyage de fin de chantier',
            image: 'https://images.unsplash.com/photo-1698234790041-ca1eeb574e5a?q=80&w=800',
            intro: 'La livraison d\'un bâtiment après travaux est une étape cruciale qui ne s\'improvise pas. Découvrez les étapes clés pour passer de la poussière de travaux à un espace prêt à l\'emploi.',
            content: 'La remise en état fin de chantier est souvent sous-estimée alors qu\'elle conditionne l\'image finale du projet et la satisfaction client. Un chantier mal nettoyé peut retarder la réception ou générer des litiges coûteux.\n\n𝟭. 𝗘́𝘃𝗮𝗰𝘂𝗲𝗿 𝗹𝗲𝘀 𝗴𝗿𝗮𝘃𝗮𝘁𝘀 𝗲𝘁 𝗱𝗲́𝗰𝗵𝗲𝘁𝘀\nLa première étape consiste à évacuer tous les déchets de construction : gravats, emballages, chutes de matériaux. Cela permet de libérer les espaces et de travailler dans des conditions optimales pour les étapes suivantes. Un tri sélectif approprié est essentiel pour respecter les normes environnementales.\n\n𝟮. 𝗗𝗲́𝗽𝗼𝘂𝘀𝘀𝗶𝗲́𝗿𝗮𝗴𝗲 𝗴𝗿𝗼𝘀𝘀𝗶𝗲𝗿\nLes résidus de plâtre, ciment et poussière de ponçage recouvrent toutes les surfaces. Un dépoussiérage méthodique du haut vers le bas est nécessaire : plafonds, luminaires, murs, puis sols. Cette étape nécessite des équipements industriels adaptés.\n\n𝟯. 𝗡𝗲𝘁𝘁𝗼𝘆𝗮𝗴𝗲 𝗱𝗲𝘀 𝘃𝗶𝘁𝗿𝗲𝘀 𝗲𝘁 𝗺𝗲𝗻𝘂𝗶𝘀𝗲𝗿𝗶𝗲𝘀\nLes projections de peinture, de colle ou de joint laissent des traces tenaces sur les vitres et menuiseries. Un nettoyage spécialisé avec des produits adaptés est indispensable pour retrouver la transparence et l\'éclat d\'origine.\n\n𝟰. 𝗧𝗿𝗮𝗶𝘁𝗲𝗺𝗲𝗻𝘁 𝗱𝗲𝘀 𝘀𝗼𝗹𝘀\nSelon le type de revêtement (carrelage, parquet, béton ciré), le traitement sera différent : décapage des voiles de ciment, lustrage, protection. C\'est une étape cruciale qui révèle la qualité finale du sol.\n\n𝟱. 𝗙𝗶𝗻𝗶𝘁𝗶𝗼𝗻𝘀 𝗲𝘁 𝗱𝗲́𝘁𝗮𝗶𝗹𝘀\nNettoyer les plinthes, interrupteurs, radiateurs, sanitaires... Tous les détails comptent pour une livraison impeccable qui valorise le travail réalisé.',
            ydsApproach: 'YDS Services intervient régulièrement en fin de chantier pour des promoteurs, entreprises de construction et architectes exigeants. Notre expérience nous permet d\'anticiper les problématiques spécifiques à chaque type de bâtiment. Nous disposons d\'équipements industriels performants (autolaveuses, mono-brosses, injecteurs-extracteurs) et de produits techniques professionnels. Notre méthodologie éprouvée garantit une remise en état conforme aux attentes les plus strictes, dans les délais impartis.'
        },
        {
            id: 3,
            category: 'Maintenance',
            tagColor: 'ydsGray',
            title: 'Maintenance préventive vs curative',
            image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?q=80&w=800',
            intro: 'Dans la gestion de locaux professionnels, attendre qu\'un équipement casse pour le réparer est la stratégie la plus coûteuse. Découvrez pourquoi anticiper les petites pannes vous fait économiser de l\'argent.',
            content: 'La maintenance curative, c\'est intervenir dans l\'urgence après une panne. Elle génère du stress, désorganise vos équipes et entraîne systématiquement des surcoûts : intervention en urgence, pièces commandées en express, arrêt d\'activité non planifié. À l\'inverse, la maintenance préventive consiste à inspecter et entretenir régulièrement vos installations pour détecter les signes d\'usure avant la rupture.\n\n𝟭. 𝗟𝗶𝘀𝘀𝗲𝘇 𝘃𝗼𝘀 𝗰𝗼𝘂̂𝘁𝘀 𝘀𝘂𝗿 𝗹\'𝗮𝗻𝗻𝗲́𝗲\nUne approche préventive permet de budgétiser la maintenance de manière prévisible. Plus de mauvaises surprises en fin de mois : vous savez exactement ce que coûte l\'entretien de vos locaux. Les interventions planifiées sont toujours moins chères que les dépannages d\'urgence, souvent facturés avec des majorations importantes.\n\n𝟮. 𝗣𝗿𝗼𝗹𝗼𝗻𝗴𝗲𝘇 𝗹𝗮 𝗱𝘂𝗿𝗲́𝗲 𝗱𝗲 𝘃𝗶𝗲 𝗱𝗲 𝘃𝗼𝘀 𝗲́𝗾𝘂𝗶𝗽𝗲𝗺𝗲𝗻𝘁𝘀\nUn luminaire qui vacille consomme plus d\'énergie et finit par griller le ballast : une simple intervention de changement d\'ampoule aurait permis d\'économiser le remplacement complet. Un robinet qui goutte use prématurément les joints et peut provoquer un dégât des eaux. Chaque petit problème ignoré en génère un plus gros.\n\n𝟯. 𝗚𝗮𝗿𝗮𝗻𝘁𝗶𝘀𝘀𝗲𝘇 𝗹𝗮 𝘀𝗲́𝗰𝘂𝗿𝗶𝘁𝗲́ 𝗱𝗲 𝘃𝗼𝘀 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗲𝘂𝗿𝘀\nUne dalle de faux-plafond mal fixée, une poignée de porte qui se détache, une marche d\'escalier descellée... Ces négligences sont des risques d\'accidents du travail qui engagent directement votre responsabilité en tant que gestionnaire. La maintenance préventive est aussi une obligation légale de sécurité.\n\n𝟰. 𝗣𝗿𝗲́𝘀𝗲𝗿𝘃𝗲𝘇 𝗹\'𝗶𝗺𝗮𝗴𝗲 𝗱𝗲 𝘃𝗼𝘁𝗿𝗲 𝗲𝗻𝘁𝗿𝗲𝗽𝗿𝗶𝘀𝗲\nDes locaux entretenus au fil de l\'eau ne donnent jamais cette impression de délabrement progressif qui nuit à votre image de marque. Vos clients, partenaires et futurs talents jugent votre entreprise dès l\'entrée dans vos locaux. Une poignée branlante ou un plafonnier éteint envoient un signal négatif.\n\n𝟱. 𝗢𝗽𝘁𝗶𝗺𝗶𝘀𝗲𝘇 𝗹𝗲 𝘁𝗲𝗺𝗽𝘀 𝗱\'𝗶𝗻𝘁𝗲𝗿𝘃𝗲𝗻𝘁𝗶𝗼𝗻\nRegrouper plusieurs petites interventions lors d\'un même passage est bien plus efficace que de multiplier les déplacements. Vérifier l\'état des joints de robinetterie, le serrage des charnières de portes, le fonctionnement des éclairages et l\'état des prises électriques en une seule visite permet de tout traiter en quelques heures.\n\n𝟲. 𝗔𝗻𝘁𝗶𝗰𝗶𝗽𝗲𝘇 𝗹𝗲𝘀 𝗽𝗲́𝗿𝗶𝗼𝗱𝗲𝘀 𝗰𝗿𝗶𝘁𝗶𝗾𝘂𝗲𝘀\nCertains équipements sont plus sollicités à certaines périodes : climatisation en été, chauffage en hiver, stores en période de forte luminosité. Planifier leur vérification avant ces pics d\'utilisation évite les pannes au pire moment.',
            ydsApproach: 'Chez YDS Services, nous proposons des contrats de Facility Management léger parfaitement adaptés aux PME et aux gestionnaires de locaux. Lors d\'un passage unique et régulier, notre technicien polyvalent inspecte l\'ensemble de vos points techniques selon une check-list exhaustive : éclairage, plomberie, menuiserie, serrurerie, petite électricité. Les anomalies détectées sont traitées immédiatement si possible, ou planifiées pour une intervention rapide. Vous recevez un rapport de visite détaillé et des préconisations d\'entretien. Avec YDS, vous passez d\'une logique de dépannage subi à une maîtrise totale de l\'état de vos locaux, tout en optimisant chaque euro investi dans la maintenance.'
        },
        {
            id: 4,
            category: 'Hygiène',
            tagColor: 'ydsTeal',
            title: 'Protocole de désinfection sanitaire',
            image: 'https://images.unsplash.com/photo-1545693315-85b6be26a3d6?q=80&w=800',
            intro: 'L\'hygiène des sanitaires est le premier critère de jugement de la qualité du nettoyage par les usagers d\'un bâtiment. Découvrez comment garantir une hygiène irréprochable dans vos zones sensibles.',
            content: 'Dans les sanitaires, la simple propreté visuelle ne suffit pas : il faut viser la propreté bactériologique. Un sol qui brille mais des poignées contaminées, c\'est un risque sanitaire invisible mais bien réel. Un protocole rigoureux est indispensable pour protéger la santé de tous les usagers.\n\n𝟭. 𝗖𝗶𝗯𝗹𝗲𝘇 𝗹𝗲𝘀 𝗽𝗼𝗶𝗻𝘁𝘀 𝗱𝗲 𝗰𝗼𝗻𝘁𝗮𝗰𝘁 𝗮̀ 𝗵𝗮𝘂𝘁𝗲 𝗳𝗿𝗲́𝗾𝘂𝗲𝗻𝗰𝗲\nPoignées de portes, robinets, boutons de chasse d\'eau, distributeurs de savon, interrupteurs... Ces zones sont de véritables autoroutes pour les virus et bactéries. Elles doivent être désinfectées plusieurs fois par jour dans les établissements à fort passage, et au minimum quotidiennement dans les bureaux classiques.\n\n𝟮. 𝗨𝘁𝗶𝗹𝗶𝘀𝗲𝘇 𝗱𝗲𝘀 𝗽𝗿𝗼𝗱𝘂𝗶𝘁𝘀 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗲́𝘀 𝗲𝘁 𝗮𝗱𝗮𝗽𝘁𝗲́𝘀\nTous les désinfectants ne se valent pas. Exigez des produits conformes aux normes européennes : EN 14476 pour l\'efficacité virucide, EN 1276 pour l\'action bactéricide. Ces certifications garantissent une élimination réelle des pathogènes et non un simple effet marketing. Attention aussi à la compatibilité avec les surfaces traitées.\n\n𝟯. 𝗥𝗲𝘀𝗽𝗲𝗰𝘁𝗲𝘇 𝗹\'𝗼𝗿𝗱𝗿𝗲 𝗱𝗲𝘀 𝗼𝗽𝗲́𝗿𝗮𝘁𝗶𝗼𝗻𝘀 : 𝗱𝘂 𝗽𝗿𝗼𝗽𝗿𝗲 𝘃𝗲𝗿𝘀 𝗹𝗲 𝘀𝗮𝗹𝗲\nOn nettoie toujours les zones les moins contaminées en premier (miroirs, lavabos) avant de passer aux zones critiques (cuvettes, urinoirs). Cette méthode évite les contaminations croisées. Utiliser la même lavette pour le lavabo et la cuvette est une erreur grave qui propage les bactéries au lieu de les éliminer.\n\n𝟰. 𝗔𝗽𝗽𝗹𝗶𝗾𝘂𝗲𝘇 𝘂𝗻 𝗰𝗼𝗱𝗲 𝗰𝗼𝘂𝗹𝗲𝘂𝗿 𝘀𝘁𝗿𝗶𝗰𝘁 𝗽𝗼𝘂𝗿 𝗹𝗲 𝗺𝗮𝘁𝗲́𝗿𝗶𝗲𝗹\nLe matériel utilisé dans les sanitaires (lavettes, seaux, gants) ne doit jamais servir ailleurs. Le code couleur professionnel est une norme : rouge pour les WC, bleu pour les vitres, jaune pour les surfaces, vert pour la cuisine. Ce système simple élimine tout risque de contamination croisée entre les espaces.\n\n𝟱. 𝗡\'𝗼𝘂𝗯𝗹𝗶𝗲𝘇 𝗽𝗮𝘀 𝗹\'𝗮𝗰𝘁𝗶𝗼𝗻 𝗺𝗲́𝗰𝗮𝗻𝗶𝗾𝘂𝗲\nLe produit désinfectant seul ne suffit pas. Le frottage mécanique est indispensable pour casser le biofilm protecteur dans lequel se réfugient les bactéries. Pulvériser un produit et essuyer immédiatement est inefficace : il faut frotter, laisser agir le temps de contact indiqué, puis rincer si nécessaire.\n\n𝟲. 𝗚𝗲́𝗿𝗲𝘇 𝗹𝗲𝘀 𝗰𝗼𝗻𝘀𝗼𝗺𝗺𝗮𝗯𝗹𝗲𝘀 𝘀𝗮𝗻𝘀 𝗿𝘂𝗽𝘁𝘂𝗿𝗲\nL\'absence de savon est le premier frein à l\'hygiène des mains. Un distributeur vide, c\'est des dizaines de personnes qui ne se lavent pas les mains correctement. La gestion des stocks (savon, papier, essuie-mains) fait partie intégrante du protocole d\'hygiène et doit être anticipée, jamais subie.',
            ydsApproach: 'Chez YDS Services, l\'hygiène sanitaire est une priorité absolue. Nos agents sont formés aux protocoles hospitaliers et appliquent systématiquement le code couleur professionnel pour garantir zéro contamination croisée. Nous utilisons exclusivement des produits certifiés EN 14476 et EN 1276, efficaces contre les virus et bactéries tout en restant respectueux de l\'environnement. Notre prestation inclut la gestion proactive des consommables : nous anticipons les besoins pour que vos distributeurs ne soient jamais vides. Avec YDS, vos sanitaires ne sont pas seulement propres visuellement, ils sont sains bactériologiquement.'
        },
        {
            id: 5,
            category: 'Immobilier',
            tagColor: 'ydsOrange',
            title: 'Réussir son état des lieux sortant',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
            intro: 'L\'état des lieux de sortie est souvent source de stress et de litiges. Découvrez comment maximiser vos chances de récupérer l\'intégralité de votre dépôt de garantie grâce à un nettoyage méthodique.',
            content: 'Les propriétaires et les régies immobilières ne se contentent plus d\'un ménage de surface. Chaque recoin est inspecté, chaque détail est noté. Une préparation méthodique et un nettoyage professionnel peuvent faire la différence entre une restitution intégrale de votre caution et des retenues importantes.\n\n𝟭. 𝗖𝗼𝗺𝗺𝗲𝗻𝗰𝗲𝘇 𝗽𝗮𝗿 𝗹𝗲𝘀 𝘇𝗼𝗻𝗲𝘀 𝗱𝗲 𝘀𝘁𝗼𝗰𝗸𝗮𝗴𝗲\nL\'intérieur des placards est systématiquement vérifié. Videz-les entièrement, lessivez les étagères, nettoyez les coins et les charnières où la poussière s\'accumule. Les traces de stockage prolongé (auréoles, marques) doivent être traitées. Un placard négligé est un signal d\'alerte pour l\'inspecteur.\n\n𝟮. 𝗟𝗮 𝗰𝘂𝗶𝘀𝗶𝗻𝗲 : 𝗹𝗮 𝗽𝗶𝗲̀𝗰𝗲 𝗹𝗮 𝗽𝗹𝘂𝘀 𝘀𝗰𝗿𝘂𝘁𝗲́𝗲\nLa hotte aspirante est un point critique : les filtres doivent être dégraissés à fond, l\'extérieur comme l\'intérieur. Le four doit retrouver son éclat d\'origine, sans résidus carbonisés sur les parois ni sur la vitre. Les plaques de cuisson, les joints du réfrigérateur, l\'intérieur du lave-vaisselle... Tout est passé en revue.\n\n𝟯. 𝗦𝗮𝗹𝗹𝗲 𝗱𝗲 𝗯𝗮𝗶𝗻 : 𝗹𝗮 𝗴𝘂𝗲𝗿𝗿𝗲 𝗮𝘂 𝗰𝗮𝗹𝗰𝗮𝗶𝗿𝗲\nLe calcaire est votre ennemi numéro un. Robinetterie, parois de douche, faïence, pommeau de douche... Tout doit briller. Les joints de carrelage noircis ou moisis sont systématiquement notés comme nécessitant une remise en état à vos frais. Un traitement anticalcaire et un nettoyage des joints peuvent vous éviter des retenues conséquentes.\n\n𝟰. 𝗟𝗲𝘀 𝘃𝗶𝘁𝗿𝗲𝘀 : 𝗱𝗲𝘀 𝗱𝗲𝘂𝘅 𝗰𝗼̂𝘁𝗲́𝘀\nDes vitres propres donnent immédiatement une impression de logement sain et bien entretenu. N\'oubliez pas l\'extérieur, souvent négligé. Les rails de baies vitrées sont également inspectés : ces rainures accumulent poussière, insectes et débris qu\'il faut aspirer et nettoyer méticuleusement.\n\n𝟱. 𝗟𝗲𝘀 𝘀𝗼𝗹𝘀 : 𝗮𝗱𝗮𝗽𝘁𝗲𝘇 𝗹𝗲 𝘁𝗿𝗮𝗶𝘁𝗲𝗺𝗲𝗻𝘁\nUn parquet doit être nettoyé avec des produits adaptés et éventuellement légèrement huilé. Un carrelage doit être débarrassé de tout voile terne. Une moquette nécessite généralement un shampouinage professionnel pour éliminer les taches incrustées et les odeurs. Les plinthes et les seuils de portes font partie de l\'inspection.\n\n𝟲. 𝗟𝗲𝘀 𝗱𝗲́𝘁𝗮𝗶𝗹𝘀 𝗾𝘂𝗶 𝗳𝗼𝗻𝘁 𝗹𝗮 𝗱𝗶𝗳𝗳𝗲́𝗿𝗲𝗻𝗰𝗲\nInterrupteurs jaunis, traces de doigts sur les portes, poignées grasses, dessus des plinthes poussiéreux, rebords de fenêtres, radiateurs encrassés, grilles de ventilation obstruées... Ces détails souvent oubliés sont pourtant systématiquement vérifiés par les professionnels de l\'immobilier.',
            ydsApproach: 'Chez YDS Services, nous avons développé un forfait État des Lieux spécialement conçu pour les locataires et les gestionnaires de biens. Notre check-list est calquée sur les formulaires des grandes régies immobilières : nous savons exactement ce qui sera contrôlé. Nos équipes interviennent avec un équipement professionnel (nettoyeur vapeur, shampouineuse, produits anticalcaires professionnels) pour un résultat irréprochable. Nous proposons également une contre-visite avant l\'état des lieux officiel pour corriger les derniers détails. Avec YDS, vous maximisez vos chances de récupérer 100% de votre dépôt de garantie.'
        },
        {
            id: 6,
            category: 'RSE',
            tagColor: 'ydsGray',
            title: 'Nettoyage écologique et impact RSE',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800',
            intro: 'Le nettoyage est un levier puissant et souvent sous-estimé pour améliorer le bilan RSE de votre entreprise. Découvrez comment intégrer la propreté dans votre démarche de développement durable.',
            content: 'Longtemps perçu comme une activité polluante à cause des produits chimiques agressifs, le secteur du nettoyage a fait sa révolution verte. Aujourd\'hui, il est possible de concilier propreté impeccable, santé des occupants et respect de l\'environnement. Une opportunité pour renforcer votre engagement RSE de manière concrète et visible.\n\n𝟭. 𝗖𝗵𝗼𝗶𝘀𝗶𝘀𝘀𝗲𝘇 𝗱𝗲𝘀 𝗽𝗿𝗼𝗱𝘂𝗶𝘁𝘀 𝗲́𝗰𝗼-𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗮𝗯𝗹𝗲𝘀\nLes produits porteurs de l\'Écolabel européen garantissent une biodégradabilité élevée et l\'absence de substances nocives (perturbateurs endocriniens, composés cancérigènes, allergènes puissants). C\'est une protection pour la planète, mais aussi pour la santé de vos collaborateurs et des agents de nettoyage qui manipulent ces produits quotidiennement.\n\n𝟮. 𝗥𝗲́𝗱𝘂𝗶𝘀𝗲𝘇 𝗹𝗮 𝗰𝗼𝗻𝘀𝗼𝗺𝗺𝗮𝘁𝗶𝗼𝗻 𝗱\'𝗲𝗮𝘂 𝗲𝘁 𝗱𝗲 𝗱𝗲́𝘁𝗲𝗿𝗴𝗲𝗻𝘁𝘀\nLes nouvelles techniques de nettoyage, notamment l\'utilisation de microfibres haute performance, permettent de diviser par dix la consommation d\'eau et de produits. La microfibre capture la saleté mécaniquement, réduisant drastiquement le besoin en chimie. Moins de produits utilisés, c\'est moins de rejets dans les nappes phréatiques.\n\n𝟯. 𝗩𝗮𝗹𝗼𝗿𝗶𝘀𝗲𝘇 𝗹𝗲 𝗽𝗲𝗿𝘀𝗼𝗻𝗻𝗲𝗹 𝗱𝗲 𝗻𝗲𝘁𝘁𝗼𝘆𝗮𝗴𝗲\nL\'aspect social de la RSE passe aussi par le respect des conditions de travail. Le nettoyage en journée, plutôt qu\'aux aurores ou tard le soir, permet aux agents de concilier vie professionnelle et vie familiale. Cela favorise également le lien social avec les occupants des locaux : l\'agent de nettoyage devient un collaborateur reconnu et non une présence invisible.\n\n𝟰. 𝗢𝗽𝘁𝗶𝗺𝗶𝘀𝗲𝘇 𝗹𝗮 𝗴𝗲𝘀𝘁𝗶𝗼𝗻 𝗱𝗲𝘀 𝗱𝗲́𝗰𝗵𝗲𝘁𝘀\nUn prestataire de nettoyage moderne doit accompagner son client dans le tri sélectif. Mise en place de poubelles adaptées, sensibilisation des occupants, traçabilité des collectes, reporting sur les volumes triés... Le nettoyage est en première ligne pour faire évoluer les comportements et améliorer le taux de recyclage de l\'entreprise.\n\n𝟱. 𝗠𝗲𝘀𝘂𝗿𝗲𝘇 𝗲𝘁 𝗰𝗼𝗺𝗺𝘂𝗻𝗶𝗾𝘂𝗲𝘇\nUne démarche RSE n\'a de sens que si elle est mesurable. Quantité de produits écologiques utilisés, litres d\'eau économisés, tonnes de déchets triés, heures de travail en journée... Ces indicateurs concrets peuvent alimenter votre rapport RSE et démontrer votre engagement auprès de vos parties prenantes.\n\n𝟲. 𝗙𝗮𝗶𝘁𝗲𝘀 𝗱𝗲 𝗹𝗮 𝗽𝗿𝗼𝗽𝗿𝗲𝘁𝗲́ 𝘂𝗻 𝘃𝗲𝗰𝘁𝗲𝘂𝗿 𝗱\'𝗶𝗺𝗮𝗴𝗲\nAfficher votre engagement pour un nettoyage responsable, c\'est envoyer un signal fort à vos collaborateurs, clients et partenaires. Des locaux propres ET respectueux de l\'environnement renforcent votre marque employeur et votre attractivité auprès des talents sensibles aux enjeux environnementaux.',
            ydsApproach: 'Chez YDS Services, la responsabilité environnementale et sociale est au cœur de notre métier. Nous utilisons exclusivement des produits certifiés Écolabel européen et des équipements à faible consommation d\'eau. Nos agents sont formés aux gestes éco-responsables et travaillent en horaires de journée chaque fois que possible. Nous accompagnons nos clients dans l\'optimisation du tri sélectif et fournissons des indicateurs chiffrés pour alimenter leur reporting RSE. Avec YDS, le nettoyage de vos locaux devient un levier concret de votre engagement développement durable, et non plus une simple ligne de dépense.'
        }
    ]
};

// ===== INITIALISATION AU CHARGEMENT DU DOM =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
    
    // Détection du scroll pour le header
    window.addEventListener('scroll', function() {
        const alpineComponent = Alpine.$data(document.body);
        if (alpineComponent) {
            alpineComponent.isScrolled = window.scrollY > 50;
        }
    });
    
    // Démarrage automatique du carrousel au chargement
    setTimeout(() => {
        const alpineComponent = Alpine.$data(document.body);
        if (alpineComponent && typeof alpineComponent.startCarousel === 'function') {
            alpineComponent.startCarousel();
        }
    }, 100);
    
    console.log('✅ YDS Services - Script chargé avec succès');
});

// ===== EXPORT POUR ALPINE.JS =====
// Rendre les données disponibles globalement pour Alpine
window.ydsAppData = ydsAppData;

// Fusionner ces données avec ydsAppData existant
Object.assign(window.ydsAppData, {
    // États de la modale formulaire
    showContactModal: false,
    contactCurrentStep: 1,
    contactTotalSteps: 5,
    contactFormType: '',
    contactService: '',
    contactSurface: '',
    contactFrequency: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactMessage: '',
    contactErrors: {},
    
    // Ouvrir la modale de contact
    openContactModal() {
        this.showContactModal = true;
        document.body.style.overflow = 'hidden';
    },
    
    // Fermer la modale de contact
    closeContactModal() {
        this.showContactModal = false;
        document.body.style.overflow = '';
        this.resetContactForm();
    },
    
    // Réinitialiser le formulaire
    resetContactForm() {
        this.contactCurrentStep = 1;
        this.contactFormType = '';
        this.contactService = '';
        this.contactSurface = '';
        this.contactFrequency = '';
        this.contactName = '';
        this.contactEmail = '';
        this.contactPhone = '';
        this.contactMessage = '';
        this.contactErrors = {};
    },
    
    // Validation email
    validateContactEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validation téléphone
    validateContactPhone(phone) {
        const re = /^[\d\s\-\+\(\)]{10,}$/;
        return re.test(phone);
    },
    
    // Validation d'une étape
    validateContactStep() {
        this.contactErrors = {};
        let isValid = true;
        
        // Étape 1 : Type de demande
        if (this.contactCurrentStep === 1 && !this.contactFormType) {
            this.contactErrors.formType = 'Veuillez sélectionner une option';
            isValid = false;
        }
        
        // Étape 2 : Service (uniquement pour devis)
        if (this.contactCurrentStep === 2 && this.contactFormType === 'devis' && !this.contactService) {
            this.contactErrors.service = 'Veuillez sélectionner un service';
            isValid = false;
        }
        
        // Étape 3 : Surface (uniquement pour devis)
        if (this.contactCurrentStep === 3 && this.contactFormType === 'devis' && !this.contactSurface) {
            this.contactErrors.surface = 'Veuillez sélectionner une surface';
            isValid = false;
        }
        
        // Étape 4 : Fréquence (uniquement pour devis)
        if (this.contactCurrentStep === 4 && this.contactFormType === 'devis' && !this.contactFrequency) {
            this.contactErrors.frequency = 'Veuillez sélectionner une fréquence';
            isValid = false;
        }
        
        // Étape 5 : Coordonnées
        if (this.contactCurrentStep === this.contactTotalSteps) {
            if (!this.contactName || this.contactName.length < 2) {
                this.contactErrors.name = 'Veuillez entrer votre nom complet';
                isValid = false;
            }
            if (!this.validateContactEmail(this.contactEmail)) {
                this.contactErrors.email = 'Veuillez entrer un email valide';
                isValid = false;
            }
            if (!this.validateContactPhone(this.contactPhone)) {
                this.contactErrors.phone = 'Veuillez entrer un numéro de téléphone valide';
                isValid = false;
            }
            if (this.contactFormType !== 'devis' && (!this.contactMessage || this.contactMessage.length < 10)) {
                this.contactErrors.message = 'Veuillez entrer un message (minimum 10 caractères)';
                isValid = false;
            }
        }
        
        return isValid;
    },
    
    // Passer à l'étape suivante
    nextContactStep() {
        if (this.validateContactStep()) {
            // Ajuster le nombre d'étapes selon le type de formulaire
            if (this.contactFormType === 'devis') {
                this.contactTotalSteps = 5;
            } else {
                this.contactTotalSteps = 2;
                if (this.contactCurrentStep === 1) {
                    this.contactCurrentStep = 5; // Sauter directement aux coordonnées
                    return;
                }
            }
            
            if (this.contactCurrentStep < this.contactTotalSteps) {
                this.contactCurrentStep++;
            }
        }
    },
    
    // Revenir à l'étape précédente
    prevContactStep() {
        if (this.contactFormType !== 'devis' && this.contactCurrentStep === 5) {
            this.contactCurrentStep = 1;
        } else if (this.contactCurrentStep > 1) {
            this.contactCurrentStep--;
        }
    },
    
    // Soumettre le formulaire
    submitContactForm() {
        if (this.validateContactStep()) {
            // TODO: Logique d'envoi email (à implémenter plus tard)
            console.log('Formulaire de contact soumis:', {
                formType: this.contactFormType,
                service: this.contactService,
                surface: this.contactSurface,
                frequency: this.contactFrequency,
                name: this.contactName,
                email: this.contactEmail,
                phone: this.contactPhone,
                message: this.contactMessage
            });
            
            // Message de succès temporaire
            alert('✅ Votre demande a été envoyée avec succès !\n\nNous vous recontacterons dans les 24h.\n\n(Envoi email à configurer)');
            
            // Fermer la modale
            this.closeContactModal();
        }
    }
});

console.log('✅ Formulaire de contact - Script chargé avec succès');