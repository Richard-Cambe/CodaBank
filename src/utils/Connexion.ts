import {User} from "../models/user"
import promptSync, {Prompt} from 'prompt-sync';
import { CLI } from "../CLI";

const prompt: Prompt = promptSync();

const users: User[] = [
    {
        id: 1,
        name: "Richard",
        PIN: "1234",
        balance: 1000
    },
    {
        id: 2,
        name: "Maxence",
        PIN: "5678",
        balance: 3000
    }
];

function findMe(PIN: string): User | null {
    return users.find(user => user.PIN === PIN) || null;
}

let tryPIN: number = 0

export function Login(cli: CLI): void | null {
    const PIN: string = prompt("Entrez votre PIN : ");
    const user: User | null = findMe(PIN);

    if (user) {
        console.log(`Bienvenue, ${user.name}`);
        cli.menu()
    }
    else {
        while (tryPIN < 3) {
            tryPIN++;
            console.log(`PIN incorrect veuillez réessayer.`);
            Login(cli)
        }
        if (tryPIN >= 3) {
            console.log(`Trop de tentatives ont échoué, veuillez réessayer plus tard.`);
            process.exit()
        }
    }
    return null
}
