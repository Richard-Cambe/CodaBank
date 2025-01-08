import promptSync, {Prompt} from 'prompt-sync';
import {User} from "../models/user";
import {pushToHistory} from "./CheckHistory";

export function Withdraw(user: User): void {
    const prompt: Prompt = promptSync();

    const withdrawPrompt: string | null = prompt("Entrez la somme à retirer : ");

    const amount: number = withdrawPrompt ? parseInt(withdrawPrompt) : 0

    if (amount > user.balance) {
        pushToHistory(`ECHEC DE RETRAIT: ${amount}`)
        console.log("\x1b[31m","Vous avez actuellement ", user.balance, "vous ne pouvez pas retirer plus.");
    } else {
        user.balance -= amount;
        pushToHistory(`RETRAIT: ${amount}€. SOLDE : ${user.balance}€`);
        console.log("Vous retirez ", amount,"€, il vous reste ", user.balance, "€.")
    }
}
