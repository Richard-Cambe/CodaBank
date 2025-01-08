import promptSync from 'prompt-sync';
import {User} from "../models/user";
import {pushToHistory} from "./CheckHistory";

export function Withdraw(user: User): void {
    const prompt = promptSync();

    const withdrawPrompt: string | null = prompt("Entrez la somme à retirer : ");

    const amount: number = withdrawPrompt ? parseInt(withdrawPrompt) : 0

    if (amount > user.balance) {
        pushToHistory(`Echec de retrait: ${amount}`)
        console.log("Vous avez actuellement ", user.balance, "vous ne pouvez pas retirer plus.");
    } else {
        user.balance -= amount;
        pushToHistory(`Retrait: ${amount}€. SOLDE : ${user.balance}€`);
        console.log("Vous retirez ", amount, "€, il vous reste ", user.balance, "€.")
    }
}



