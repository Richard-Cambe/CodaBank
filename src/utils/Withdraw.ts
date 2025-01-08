import promptSync, {Prompt} from 'prompt-sync';
import {User} from "../models/user";
import {pushToHistory} from "./CheckHistory";
import {getDate} from "./getDate";

export function Withdraw(user: User): void {
    const prompt: Prompt = promptSync();

    const withdrawPrompt: string | null = prompt("Entrez la somme à retirer : ");

    const amount: number = withdrawPrompt ? parseInt(withdrawPrompt) : 0

    if (amount > user.balance) {
        pushToHistory(`\x1b[31m${getDate()} ECHEC DE RETRAIT: ${amount}\x1b[0m`)

        console.log("\x1b[31mVous avez actuellement", user.balance, ", vous ne pouvez pas retirer plus.\x1b[0m");
    } else {
        user.balance -= amount;
        pushToHistory(`\x1b[32m${getDate()} RETRAIT: ${amount}€. SOLDE : ${user.balance}€\x1b[0m`);
        console.log("\x1b[32mVous retirez ",amount,"\x1b[32m€, il vous reste ", user.balance, "\x1b[32m€.\x1b[0m")
    }
}
