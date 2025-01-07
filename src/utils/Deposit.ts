import promptSync from 'prompt-sync';
import {User} from "../models/user";

export function Deposit(user: User): void {
    const prompt = promptSync();

    const addPrompt: string | null = prompt("Entrez la somme à déposer : ");

    const amount: number = addPrompt ? parseInt(addPrompt) : 0

    if(amount<1){
        console.log("Merci d'ajouter un montant supérieur à 1€")
    } else {
        user.balance += amount;
        console.log("Vous déposez", amount, "€, vous avez désormais ", user.balance, "€.")
    }
}
