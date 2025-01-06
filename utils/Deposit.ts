// ### Déposer de l'argent
// - L'utilisateur doit pouvoir déposer de l'argent sur son compte
// - Il doit renseigner le montant à déposer, au travers d'un prompt numérique
// - Le montant doit être un entier positif _(pas de décimales)_



/*Voulez-vous déposer de l'argent ou annuler cette action ?
→ Déposer de l'argent
→ Annuler'*/
import { CLI } from "../src/CLI";

const cli = new CLI([
    {
        title: "Déposer de l'argent",
        value: "deposit",
        action: () => {
            console.log("Ok viens on dépose des sous");
        },
    },
])

//const currentBalance : number = 10000;
function Deposit(currentBalance: number, /*amount: number*/): void {

    const addPrompt: string | null = prompt("Entrez la somme à déposer : ");

    const amount: number = addPrompt ? parseInt(addPrompt) : 0

    // Si le prompt n'est pas un int, il faut redemander un prompt. Mais je sais plus comment on vérifie ptdr flemme ce soir c'est bon zebi

    const deposit: number = currentBalance + amount;

    console.log("Vous déposez ", amount, "€, vous avez désormais ", deposit, "€.")
}

cli.menu