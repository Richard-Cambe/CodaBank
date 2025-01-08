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

console.log(`Bonjour, veuillez vous connecter: `);
const user:User | null = Login()

const cli = new CLI([
    {
        title: "Déposer de l'argent",
        value: "deposit",
        action: (user:User) => {
            Deposit(user)
        },
    },
    {
        title: "Retirer de l'argent",
        value: "withdraw",
        action: (user:User) => {
            Withdraw(user)
        },
    },
    {
        title: "Consulter l'historique des mouvements",
        value: "checkHistory",
        action: (user:User) => {
            displayHistory(user)
        },
    },
    {
        title: "Consulter mon solde",
        value: "balance",
        action: (user:User) => {
            console.log(`Vous avez actuellement ${user.balance}€)`)
        },
    }
], user);
cli.menu()

