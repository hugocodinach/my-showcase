import ICompanyProject from "../Interfaces/ICompanyProject";

const companyProjects: ICompanyProject[] = [
    {
        name: 'Scraping bot',
        company: 'BSWeb',
        logo: 'https://pricecomparator.pro/wp-content/uploads/2019/05/Logo-132px.png',
        description: `Développement d'un script js permettant de générer un script de scraping pour un site donné.\nQuand la génération ne fonctionnait pas, je réalisais le script de scraping à la main. Le but était de récupérer différentes informations d'un article mis en vente sur un site d'e-commerce.\nLes résultats étaient ensuite mis à disposition du client pour qu'il puisse réguler ses propres prix en fonction de ceux du marché.`,
        technologies: [
            {
                logo: '/technos/javascript.png',
                name: 'javascript'
            }
        ]
    },
    {
        name: 'Backoffice',
        company: 'BSWeb',
        logo: 'https://pricecomparator.pro/wp-content/uploads/2019/05/Logo-132px.png',
        description: `Développement d'un backoffice permettant de gérer les différents clients ainsi que les résultats récupérés par les scripts de scraping.\nCet outil nous permettait aussi de repérer et de mettre à jour les scripts obsolètes.`,
        technologies: [
            {
                logo: '/technos/javascript.png',
                name: 'javascript'
            },
            {
                logo: '/technos/react.png',
                name: 'react JS'
            },
            {
                logo: '/technos/expressjs.png',
                name: 'express js'
            },
            {
                logo: '/technos/mongodb.png',
                name: 'mongoDB'
            }
        ]
    },
    {
        name: 'Bonjour Henry',
        company: 'Barbablanka',
        logo: 'https://www.barbablanka.com/_next/image?url=%2Fimages%2Fbarbablanka-logo-small.png&w=3840&q=75',
        description: `Réalisation en autonomie de la v2 de l'application "Bonjour Henry".\nCette dernière, destinée aux personnes âgées, permet de centraliser et d'afficher tous les messages envoyés via messenger ou sms sur l'application. Une fois ces derniers récupérés, ils seront lu à haute voix par l'application, comme pour un répondeur.\nJ'ai aussi dévéloppé un système de visio pour permettre à la personne âgée d'appeler ses proches sur messenger sans quitter l'application "Bonjour Henry".`,
        technologies: [
            {
                logo: '/technos/javascript.png',
                name: 'javascript'
            },
            {
                logo: '/technos/react.png',
                name: 'react native'
            },
            {
                logo: '/technos/expressjs.png',
                name: 'express js'
            },
            {
                logo: '/technos/mongodb.png',
                name: 'mongoDB'
            },
            {
                logo: '/technos/socketio.png',
                name: 'socket.io'
            }
        ]
    },
    {
        name: 'ViaTransit',
        company: 'ViaDigital',
        logo: 'https://static.data.gouv.fr/images/38/55bf16d4c34040b47ddfdaa8bf4f27.png',
        description: `Réalisation de l'onglet magasin de l'application, et implémentation d'un système d'achat de titre de transport. J'ai aussi réalisé un onglet permettant de réserver des trajets de transport à la demande.\nPour finir, j'ai entretenu l'application pendant tout mon séjour chez viaDigital (Rework visuel de l'application, optimisation et amélioration de la scalabilité du code).`,
        technologies: [
            {
                logo: '/technos/javascript.png',
                name: 'javascript'
            },
            {
                logo: '/technos/react.png',
                name: 'react native'
            },
            {
                logo: '/technos/expressjs.png',
                name: 'express js'
            },
            {
                logo: '/technos/mongodb.png',
                name: 'mongoDB'
            },
            {
                logo: '/technos/firebase.png',
                name: 'firebase'
            },
            {
                logo: '/technos/payzen.png',
                name: 'payzen'
            }
        ]
    },
    {
        name: 'Dashboard',
        company: 'ViaDigital',
        logo: 'https://static.data.gouv.fr/images/38/55bf16d4c34040b47ddfdaa8bf4f27.png',
        description: `Réalisation d'un dashboard permettant de gérer nos utilisateurs, les réseaux de transport, nos différentes applications (couleurs, logo, onglets affichés), et les potentielles perturbations des réseaux de transport.`,
        technologies: [
            {
                logo: '/technos/javascript.png',
                name: 'javascript'
            },
            {
                logo: '/technos/next.jpeg',
                name: 'next'
            },
            {
                logo: '/technos/expressjs.png',
                name: 'express js'
            },
            {
                logo: '/technos/mongodb.png',
                name: 'mongoDB'
            },
            {
                logo: '/technos/firebase.png',
                name: 'firebase'
            }
        ]
    },
    {
        name: 'Dashboard',
        company: 'Culture relax',
        logo: 'https://strapi.culture-relax.org/uploads/logo_5db91a8452.svg',
        description: `Réalisation d'un dashboard permettant de gérer les salles de cinéma / théatres partenaires, ainsi que les films et spectacles à l'affiche.`,
        technologies: [
            {
                logo: '/technos/javascript.png',
                name: 'javascript'
            },
            {
                logo: '/technos/next.jpeg',
                name: 'next'
            },
            {
                logo: '/technos/strapi.jpeg',
                name: 'strapi'
            }
        ]
    },
    {
        name: 'Morphy',
        company: 'Morphy',
        description: `Réalisation de la v1 et de la v2 d'une application de musculation pour débutant.\nCela implique la réalisation d'un onglet permettant la création de ses propres programmes d'entraînement, d'un onglet permettant de faire sa séance, ainsi qu'un onglet communautaire permettant de partager ses programmes à ses amis.`,
        technologies: [
            {
                logo: '/technos/typescript.webp',
                name: 'typescript'
            },
            {
                logo: '/technos/expo.png',
                name: 'expo'
            },
            {
                logo: '/technos/directus.avif',
                name: 'directus'
            }
        ]
    }
];

export default companyProjects;