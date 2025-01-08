// ### Voir l'historique
//
// - L'utilisateur doit pouvoir voir l'historique de ses opérations
// - L'historique doit contenir la date, le type d'opération _(dépôt ou retrait)_, le montant, le solde après l'opération ainsi que la validité de l'opération _(réussie ou non)_
// - L'historique doit afficher les 10 dernières opérations, mais doit tout de même enregistrer toutes les opérations effectuées sans limite

import {User} from "../models/user";

let history: string[] = []

export function pushToHistory(entry: string): void {
    history.push(entry)
}

export function getHistory(): string[] {
    return history
}

export function displayHistory(): void {
    const history = getHistory()

    history.forEach((entry, index) =>
        console.log(index + 1, entry, "\n"))
}
