// IMAGE LINE-UP
import GryGry_LU from 'assets/line-up/GryGry.jpg';
import LB_LU from 'assets/line-up/LB.jpg';
import BB_LU from 'assets/line-up/BB.jpg';
import Glauque_LU from 'assets/line-up/Glauque.jpg';
import AnaDiaz_LU from 'assets/line-up/AnaDiaz.jpg';
import FR_LU from 'assets/line-up/FR.jpg';

// IMAGE ARTIST 
import Glauque from 'assets/artist/Glauque.jpg';
import BB from 'assets/artist/BB.jpg';
import LB from 'assets/artist/LB.jpg';
import AnaDiaz from 'assets/artist/AnaDiaz.jpg';
import GryGry from 'assets/artist/GG.jpg';
import FR from 'assets/artist/FR.jpeg';
import Ferqli from 'assets/artist/Ferqli.png';
import Boussole from 'assets/artist/boussole.jpg';

export default {
  BB: {
    id: 'BB',
    name: 'Borokov Borokov',
    style: 'Live analogique Electronique',
    description: {
      first : '"En grandissant dans les périphéries non urbaines de Anvers, a.omloop, b.van den eynden, n.melis et y.tsakiridis auraient été éduqué aux sons mélancoliques et joyeux coulant des hauuts-parleurs de leurs parents divorcés et souvent été emmenés dans des salons de thé trop éclairés aux alentours de leurs villages d\'origine pour assister aux concerts les plus divers d\'artistes locaux"',
      second: '(De Coster, G. (2016). Early Influences on the development of unurban musical preferences. Verchen : EBO. P.34)'
    },
    links: {
      soundcloud: 'https://soundcloud.com/borokovborokov',
      facebook: 'https://www.facebook.com/borokovborokov',
    },
    lineUpImg: BB_LU,
    artistImg: BB,
    video: 'YHBT24FZjMw',
  },
  Glauque: {
    id: 'Glauque',
    name: 'Glauque',
    style: 'Rap',
    description: {
      first: 'Réputée pour son calme plat et sa bonhomie « à la belge », la ville de Namur est le terrain de jeux de l’un groupe le plus intriguant du moment. Sur la carte des musiques actuelles, Glauque marque le territoire de son identité forte. Ouverte aux expériences électroniques, la formation modifie l’ADN du hip-hop et explose les codes de la chanson française.',
      second: 'A la tête de leur propre label Ecluse, les cinq garçons s’affranchissent des codes pour défendre les valeurs d’une esthétique différente, vraiment radicale. En phase avec ses convictions, persuadé du bienfondé de sa démarche, le groupe mise sur l’artisanat, les compétences individuelles et un esprit d’équipe indéfectible. Cette maîtrise totale sur la production se matérialise aujourd’hui sous les coups de pinceaux apposés sur la pochette d’un premier E.P. sans concession. Baptisé ‘Glauque’, l’objet retrace la genèse du projet en cinq morceaux essentiels.',
    },
    links: {
      soundcloud: 'https://soundcloud.com/glauqueband',
      facebook: 'https://www.facebook.com/glauqueband',
    },
    lineUpImg: Glauque_LU,
    artistImg: Glauque,
    video: 'ttJKvanxtxg',
  },
  LB: {
    id: 'LB',
    name: 'LB aka Labat',
    style: 'Dance/Electronique',
    description: {
      first : 'LB aka LABAT est un vinyl collector et MPC Workaho-lic passionné de jazz, de hip-hop et de sonorités soulful.',
      second : 'Depuis plusieurs années LABAT enchaîne les signatures sur des labels de renoms (D.KO, Wolf, Faces & MCDE). Il lance en 2017 son propre label Alélah Records avec l’artiste Polow et démarre deux ans plus tard une tournée live analogique “1993 Elevation” aux inspirations Detroit & Acid House qui conduira ses machines dans les meilleurs clubs d’Europe.',
    },
    
    links: {
      soundcloud: 'https://soundcloud.com/lb-aka-labat',
      facebook: 'https://www.facebook.com/LbAkaLabat/',
    },
    lineUpImg: LB_LU,
    artistImg: LB,
    video: '-KvME9LHUbQ',
  },
  FR: {
    id: 'FR',
    name: 'Felician & Rocta',
    style: 'House',
    description: {
      first : '',
      second : '',
    },
    links: {
      soundcloud: 'https://soundcloud.com/antoine-rcrt',
      facebook: 'https://www.facebook.com/Felicianwoes/',
    },
    lineUpImg: FR_LU,
    artistImg: FR,
    video: '',
  },
 /* AnaDiaz: {
    id: 'AnaDiaz',
    name: 'AnaDiaz',
    style: 'Rap/RnB',
    description: {
      first: 'Ana Diaz est une jeune chanteuse, auteure compositrice et interprète. Elle a le sang espagnol mais elle a grandi à Bruxelles, où sa voix, sous l’impulsion d’une génération au profil similaire, adopte le mélange vibrant et le parler-vrai de la capitale. « Tous les genres sont permis. »',
      second: 'Elle nous fait voyager dans son univers : un univers à la fois introspectif et sociétal tout en restant positive sur des sujets parfois sensibles et tristes.',
      third: 'Son premier EP « REC_FINAL », inspiré par sa vie, ses expériences et celles de son entourage, est sorti le 13 septembre 2019, et composé par Iliona Roulin et enregistré dans le studio "L\'Oeil Ecoute Laboratoire" à Bruxelles.'
    },
    links: {
      soundcloud: 'https://soundcloud.com/anadiazofficial',
      facebook: 'https://www.facebook.com/iamdiazana/',
    },
    lineUpImg: AnaDiaz_LU,
    artistImg: AnaDiaz,
    video: 'omiiJRa-6qA',
  },
  grygry: {
    id: 'GryGry',
    name: 'Les Grys Grys',
    style: 'ROCK PSYCH-PUNK',
    description: {
      first: 'En 2010, cinq gamins qui s’emmerdaient dans leur ville cévenole ont décidé de créer leur groupe et de partir sur les traces de Bo Diddley et Muddy Waters. Reprises obscures et survitaminées des Yardbirds, Master Apprentices, Q65, arrangements explosifs, énergie à revendre, en quelques années, les principaux festivals indépendants de France et d’Europe leur ont ouvert leur scène: Le Funtastic et Purple Week-End en Espagne, le Beat Bespoké à Londres, le Festival Beat en Italie, le Berlin Beat Explosion en Allemagne, la liste est longue. Invités par le festival Tiki Oasis à San Diego, une tournée américaine a suivi en 2017.',
      second: 'Au fil des années le son des Grys-Grys s’est teinté de psych-punk, pour un résultat plus personnel et actuel, qui pourrait rappeler «Help» des Oh Sees, «Nonagon Infinity» de King Gizzard & the Wizard Lizard ou encore «Fuzz» le side project de Ty Segall et Charles Moothart. Ils ont acquis l’expérience nécessaire pour enfin atteindre leur but suprême : la confection toujours difficile du premier album, qui plus est, album de compositions originales. L’enregistrement s’est réalisé dans les studios Toe Rag à Londres sous la direction du sorcier Liam Watson déjà producteur de l’immense succès «Seven Nation Army» des White Stripes. Le disque tant attendu par une cohorte de fans est fin prêt. Les murs de la maison rock’n’roll n’ont pas fini de trembler...',
    },
    links: {
      site: 'https://avfrecs.tumblr.com/',
      facebook: 'https://www.facebook.com/LesGrysGrys/',
    },
    lineUpImg: GryGry_LU,
    artistImg: GryGry,
    video: ''
  },
  anglemortetclignotant: {
    id: 'anglemortetclignotant',
    name: 'Angle Mort & Clignotant',
    style: 'TechnoBoom | Samedi 20 Juillet',
    description: {
      first: 'Angle Mort & Clignotant sont deux chauffards de Trap Music, qui la recrachent version Technoboom et stroboscopique.',
      second: 'Une performance zapping martelée d’hymnes féria/rugby à l’énergie punk où copulent l\'esthétique clubbing de campagne, des slogans ravageurs et quelques centimes d’euros.',
    },
    
    links: {
      youtube: 'https://www.youtube.com/watch?v=1Vba2TGa830',
      soundcloud: 'https://soundcloud.com/angle-mort-clignotant/des-frites-putain-et-de-la-sauce-bordel',
      facebook: 'https://www.facebook.com/anglemortetclignotant/',
    },
    lineUpImg: GryGry, 
    artistImg: LB,
    video: '1Vba2TGa830',
  },
  robby: {
    id: 'robby',
    name: 'Robby & Stupid Flash',
    style: 'Cosmic Groove | Samedi 20 Juillet',
    description: {
      first: 'Robby et Stupid Flash est né de la rencontre artistique entre deux musiciens, passionnés dont complémentarité musicale les a naturellement conduits à produire ensemble. Sur scène, ce sont leurs échanges aux claviers et à la basse qui façonnent leur univers : une musique dynamisante aux accents funk, house, jazz et disco.',
      second: 'Au fil des jams, les gimmicks ont été trouvés, les harmonies se sont dessinées, pour mener vers l’enregistrement d’un EP sorti le 18 janvier 2019 sur Dynamiterie Records. Actuellement, ils rodent leur projet en le proposant au travers de plusieurs scènes. Grâce cette passion commune, ils retrouvent une spontanéité et un plaisir unique qu\'ils font partager à la première occasion.',
    },
    links: {
      soundcloud: 'https://soundcloud.com/robbyandstupidflash',
      facebook: 'https://www.facebook.com/robbyandstupidflash',
    },
    lineUpImg:  GryGry,
    artistImg: '',
    video: '-wX5dOxMXEQ',
  },
  ferqli: {
    id: 'ferqli',
    name: 'Ferqli',
    style: 'Electro | Samedi 20 Juillet',
    description: {
      first: 'Habitué des clubs lillois comme le Magazine, Le Baron, TheBox et d\'autres, Ferqli commence à s’imposer dans la région grâce à des mixs léchés et à un public fidèle. Ayant débuté avec Pure Events, il a notamment joué au Jardin des Pommes grâce à un DJ Contest ou au club Vaag.',
      second: 'Laissez-le vous transporter grâce à ses sets progressifs inspirés de DJs comme Extrawelt, Max Cooper ou Stephan Bodzin, vous ne serez pas déçus.',
    },
    links: {
      youtube: '',
      soundcloud: 'https://soundcloud.com/ferqli',
      facebook: 'https://www.facebook.com/F3rqli',
    },
    lineUpImg: GryGry,
    artistImg: Ferqli,
    video: 'ksHwr2eNJUc',
  },

  TomaRey: {
    id: 'toma',
    name: 'Toma Rey',
    style: 'Tech House | Samedi 20 Juillet',
    description: {
      first: 'Passionné de musique électronique depuis de nombreuses années il commence par écumer les plus gros festivals d’Europe, Sonàr, Awakenings, Sonus... Été 2017 il décide de se lancer lui aussi dans la musique et commence par remporter un dj contest au Madwood où il sera résident plusieurs mois. Cofondateur de Come & Dance, il organise son premier open air l\'été dernier ou il invite un des jeunes acteurs de la house music actuelle Shaf Huse.',
      second: 'Préférant poursuivre en solo il joue dans les collectifs les plus actifs de la région, Pure Events, Secret garden, Partners in Crime ou encore Coma du Nord et dans les clubs Lillois tel que Magazine Club et le Baron club toujours dans un style tech-house.',
    },
    links: {
      youtube: '',
      soundcloud: '',
      facebook: '',
    },
    lineUpImg: GryGry,
    artistImg: '',
    video: null,
  },
  boussole: {
    id: 'la-boussole',
    name: 'Cie La Boussole',
    style: 'Spectacle | Vendredi 19 Juillet',
    description: {
      first: "Spectacle Vivant Architectural Pyromélodique en Son & Lumière. Quatre échassiers lumineux, une comédienne, mise en lumière d'un bâtiment ou d'un espace, sonorisation, feu d'artifices, effets spéciaux..",
      second: "Spectacle écologique, prise de conscience de l'impact de l'Homme sur la planète au travers d'une rencontre avec les quatre éléments : l'Eau, l'Air, la Terre et le Feu. Le cinquième étant bien entendu... l'Homme... qui en essayant de maîtriser les éléments a rompu l'équilibre naturel de la vie mettant ainsi en péril sa survie... Mais il existe des solutions et sous une pluie d'étoiles, l'Homme verra son avenir renaître.",
      third: ''
    },
    links: {
      site: 'https://www.conceptspectacle.com/spectacles-cinquieme-element.php',
      facebook: 'https://www.facebook.com/Laboussoleconceptsetspectacles/',
    },
    lineUpImg: GryGry,
    artistImg: Boussole,
    video: null,
  },
  */
};

