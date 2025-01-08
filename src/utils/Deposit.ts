import promptSync from 'prompt-sync';
import {User} from "../models/user";
import {pushToHistory} from "./CheckHistory";

export function Deposit(user: User): void {
    const prompt = promptSync();

    const addPrompt: string | null = prompt("Entrez la somme à déposer : ");

    const amount: number = addPrompt ? parseInt(addPrompt) : 0

    if (amount < 1) {
        pushToHistory(`Echec de dépot: ${amount}`)
        console.log("Echec: Ajouter un montant supérieur à 1€")
    } else {
        user.balance += amount;
        pushToHistory(`Dépot: ${amount}€. SOLDE : ${user.balance}€`);
        console.log("Vous déposez", amount, "€, vous avez désormais ", user.balance, "€.")
    }
}
