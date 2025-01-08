import {CLI} from "./CLI";
import {Deposit} from "./utils/Deposit";
import {Withdraw} from "./utils/Withdraw";
import {User} from "./models/user"
import {displayHistory} from "./utils/CheckHistory";
import {Login} from "./utils/Connexion";

const startupParts = [
    "   __________  ____  ___       ____  ___    _   ____ __",
    "  / ____/ __ \\/ __ \\/   |     / __ )/   |  / | / / //_/",
    " / /   / / / / / / / /| |    / __  / /| | /  |/ / ,<   ",
    "/ /___/ /_/ / /_/ / ___ |   / /_/ / ___ |/ /|  / /| |  ",
    "\\____/\\____/_____/_/  |_|  /_____/_/  |_/_/ |_/_/ |_|",
    "",
    "La banque de demain, aujourd'hui.",
    "",
];

console.log(startupParts.join("\n"));

const cli = new CLI([
    {
        title: "Déposer de l'argent",
        value: "deposit",
        action: () => {
            Deposit()
        },
    },
    {
        title: "Retirer de l'argent",
        value: "withdraw",
        action: () => {
            Withdraw()
        },
    },
    {
        title: "Consulter l'historique des mouvements",
        value: "checkHistory",
        action: () => {
            displayHistory()
        },
    },
    {
        title: "Consulter mon solde",
        value: "balance",
        action: () => {
            console.log(users[1].balance)

        },
    }
]);

/* AVANT QUE LE MENU S'AFFICHE, JE VEUX QUE MON UTILISATEUR SE CONNECTE
MAIS OBLIGE DE METTRE CES DEUX LIGNES APRES CAR
LA CONST CLI N'EXISTE PAS ENCORE SI JE LES MET AVANT ET N'EST DONC
PAS ACCESSIBLE PAR LE LOGIN
 */
console.log(`Bonjour, veuillez vous connecter: `);
Login(cli)
