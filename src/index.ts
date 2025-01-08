import {CLI} from "./CLI";
import {Deposit} from "./utils/Deposit";
import {Withdraw} from "./utils/Withdraw";
import {User} from "./models/user"
import {displayHistory} from "./utils/CheckHistory";

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

// TODO

const users: User[] = [
    {
        id: 1,
        name: "Richard",
        PIN: "1234",
        balance: 100
    },
    {
        id: 2,
        name: "Maxence",
        PIN: "1234",
        balance: 150
    }
];

const cli = new CLI([
    {
        title: "Créer un compte",
        value: "create",
        action: () => {
            console.log("Votre compte a été créé !");
        },
    },
    {
        title: "Déposer de l'argent",
        value: "deposit",
        action: () => {
            Deposit(users[1])
        },
    },
    {
        title: "Retirer de l'argent",
        value: "withdraw",
        action: () => {
            Withdraw(users[1])
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

cli.menu();
