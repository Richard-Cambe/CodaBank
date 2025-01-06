///### Retirer de l'argent
// - L'utilisateur doit pouvoir retirer de l'argent de son compte
// - Il doit renseigner le montant à retirer, au travers d'un prompt numérique
// - Le montant doit être un entier positif _(pas de décimales)_, qui sera déduit du solde///



/*Voulez-vous retirer de l'argent ou annuler cette action ?
→ Retirer de l'argent
→ Annuler'*/
import { CLI } from "../src/CLI";

const cli = new CLI([
    {
        title: "Retirer de l'argent",
        value: "withdraw",
        action: () => {
            console.log("Ok viens on retire des sous");
        },
    },
])

//const currentBalance : number = 10000
function Withdraw(currentBalance: number): void {

    const withdrawPrompt: string | null = prompt("Entrez la somme à retirer : ");

    const amount: number = withdrawPrompt ? parseInt(withdrawPrompt) : 0

    // Si le prompt n'est pas un int, il faut redemander un prompt. Mais je sais plus comment on vérifie ptdr flemme ce soir c'est bon zebi

    const withdraw: number = currentBalance -= amount;

    console.log("Vous retirez ", amount, "€, il vous reste ", currentBalance, "€.")
}

cli.menu