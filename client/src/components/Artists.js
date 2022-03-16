import React from 'react';

const Artists = () => {
	const artists = {
        1: {
            name: 'Trio Prime',
            nationality: 'Ukraine',
            flag: require('../assets/img/country/ukraine.png'),
            description:
                "Un numéro d'équilibre différent et exclusivement féminin. Comme dans tous les programmes de haut niveau, il faut un moment de poésie. Ici pas de muscles ni de forces mais bien des positions créatives et complexes réalisées avec grâce et élégance par trois jeunes filles Ukrainiennes. Un moment innovant de charme et de finesse au cours de ce spetacles aux multiples surprises.",
        },
        2: {
            name: 'Robi Berousek (CZ)',
            nationality: 'République Tchèque',
            flag: require('../assets/img/country/czech.png'),
            description:
                'Invité au Festival International du cirque de Monte-Carlo, cela en dit long sur la qualité de son numéro. Cet artiste confirmé présente une préstation exceptionnelle et étonnante sur plusieurs échelles... libres ! La encore, l\'équilibre doit être optimal...'
        },
        3: {
            name: 'Anton Navratil (CZ)',
            nationality: 'République Tchèque',
            flag: require('../assets/img/country/czech.png'),
            description:
                "Numéro impressionnant au trapèze Washington avec équilibres sur tête et sur chaise sur la seule 'barre' de quelques centimètres de ce même trapèze. Le tout à la coupole du chapiteau. Ce numéro demande une maitrise de l'équilibre et une concentration extrême. Il a reçu la médaille de Bronze au Festival du Cirque de Prague 2020.",
        },
        4: {
            name: 'Catwall',
            nationality: 'Canada',
            flag: require('../assets/img/country/canada.png'),
            description:
                "Nous sommes très fiers de pouvoir vous présenter ce numéro de trampoline à 360° et qui n'a rien à voir avec les numéros de trampoline déjà vus. Cinq artistes canadiens arrivent de la prestigieuse école du Cirque de Montréal. Clown de bronze au festival de Monte-Carlo, ce numéro extraodinaire est composé d'excercices et sauts périllieux exceptionnels rattrapés au sommet d'un véritable mur de 4,5m de haut. Il faut le voir pour le croire.",
        },
        5: {
            name: 'Orchestre (CH)',
            nationality: 'Suisse',
            flag: require('../assets/img/country/suisse.png'),
            description:
                "Passé par le festival du Cirque de Monte-Carlo, le chef d'orchestre Tino Aeby a exactement le tempérament requis pour animer un vrai spectacle de cirque de très haut niveau."
            },
        6: {
            name: 'Le Carrousel de Louis (CH)',
            nationality: 'Suisse',
            flag: require('../assets/img/country/suisse.png'),
            description:
                "Carrousel équestre et chevaux en liberté, cette famille Suisse s'est vue attribuer en 2019, le prix piste d'Or au festival de Massy. En 5 participations au festival International de Monte-Carlo, elle a raflé 3 clowns d'Or et 2 clowns D'argent. Dans cette discipline légendaire, il vous sera proposé un show des plus spectaculaires avec 'très rare' des chevaux qui pivotent sur eux-mêmes.",
            },
        7: {
            name: 'Mario Berousek (CZ)',
            nationality: 'République Tchèque',
            flag: require('../assets/img/country/czech.png'),
            description:
                "Un numéro unique qui a voyagé dans le monde entier. Clown de bronze à Monaco, il s'agit du jongleur le plus rapide du monde quifigure au Guiness Book des records. La rapidité de ses mouvements et la vitesse des massues qui tourbillonnent font penser à des hélices d'avions. Numéro présenté sur la scène du Moulin Rouge à Paris pendant 5 ans."
            },
        8: {
            name: 'Flying Mendonca',
            nationality: 'Brésil',
            flag: require('../assets/img/country/bresil.png'),
            description:"La légendaire triple saut périlleux et double passage font partie de ce numéro de trapèze volant. Il reste un des plus spectaculaires au cirque surtout sous un grand chapiteau comme celui-ci. Cette sympathique troupe brésilienne qui parcourt le monde entier avec beaucoup de qualité est restée toute une saison au cirque d\'hiver de Paris durant l\'année 2017.",
        },
        9: {
            name: 'Diana Boiachin (H)',
            nationality: 'Hongrie',
            flag: require('../assets/img/country/hongrie.png'),
            description:
                "Cette jeune artiste a voulu métamorphoser le numéro classique de 'mât chinois'. Le mât devient 'pôle aérien' et les figures pratiquées habituellement au sol sont ici exécutées à 12 mètres de hauteau. Un joli moment d'audace, de grâce et d'esthétisme. Ce numéro orginal est une première en France.",
            },
        10: {
            name: 'Jimmy l\'Italien',
            nationality: 'Italie',
            flag: require('../assets/img/country/italie.png'),
            description:
                "Ce n'est pas dans les habitudes du concept de la Générosité, mais vous l'avez plébiscité, donc il revient avec de nouveaux numéros. Avec des sketches 'INVENTES', c'est le CLOWN chef d'orchestre avec son humour naturel, communication et garanti. Avec Jimmy on se laisse vite prendre au jeu du rire. Toute la joie, la bonne humeur et la gaité sont réunies dans les apparitions de cet artiste recoonu mondialement.",
            },
        11: {
            name: 'Nicol Nicols',
            nationality: 'Espagne',
            flag: require('../assets/img/country/espagne.png'),
            description:
                "L'acrobatie, l'équilibre avec une extrême concentration est nécessaire pour réaliser la performance qu'exécute Nicol sur son fil de fer. Saut périlleux arrière et saut périlleux avant sur un câble tendu à plus de 3 mètres du sol et surtout d'à peune un petit centimètre d'épaisseur relève en effet d'un véritable 'Exploit'. C'est un immense honneur pour nous de recevoir cet artiste de renommée internationale, primé dans les plus grands festivals en Italie, en Chine, en France ou encore en Hongrie pour notre 13ème spectacle.",
            },
        };
    
	return (
        Object.keys(artists).map((item, i) => (
            <div className='profil-artist' key={i}>
				<div className='name'>{artists[item].name}</div>
				<div className='nationality'>
					<div className='nationality-name'>{artists[item].nationality}</div>
					<div className='nationality-img'>
						<img
							src={artists[item].flag}
							alt={artists[item].nationality}
						/>
					</div>
				</div>
				<div className='description-artist'>
					<p>{artists[item].description}</p>
				</div>
			</div>
        ))
	);

};

export default Artists;