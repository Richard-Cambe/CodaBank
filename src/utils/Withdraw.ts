import promptSync from 'prompt-sync';
import {User} from "../models/user";

export function Withdraw(user: User): void {
    const prompt = promptSync();

    const withdrawPrompt: string | null = prompt("Entrez la somme à retirer : ");

    const amount: number = withdrawPrompt ? parseInt(withdrawPrompt) : 0

    if (amount > user.balance) {
        console.log("Vous avez actuellement ", user.balance, "vous ne pouvez pas retirer plus.");
    } else {
        user.balance -= amount;
        console.log("Vous retirez ", amount, "€, il vous reste ", user.balance, "€.")
    }
}



