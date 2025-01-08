import promptSync, {Prompt} from 'prompt-sync';
import {User} from "../models/user";
import {pushToHistory} from "./CheckHistory";
import {getDate} from "./getDate";

export function Deposit(user: User): void {
    const prompt: Prompt = promptSync();

    const addPrompt: string | null = prompt("Entrez la somme à déposer : ");

    const amount: number = addPrompt ? parseInt(addPrompt) : 0

    if (amount < 1) {
        pushToHistory(`\x1b[31m${getDate()} ECHEC DE DEPOT: ${amount}\x1b[0m`)
        console.log(" \x1b[31mEchec: Ajouter un montant supérieur à 1€\x1b[0m")
    } else {
        user.balance += amount;
        pushToHistory(`\x1b[32m${getDate()} DEPOT: ${amount}€. SOLDE : ${user.balance}€\x1b[0m`);
        console.log("\x1b[32mVous déposez", amount, "\x1b[32m€, vous avez désormais ", user.balance, "\x1b[32m€.\x1b[0m")
    }
}
