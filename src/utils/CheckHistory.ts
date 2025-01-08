// - L'historique doit contenir la date
// - L'historique doit afficher les 10 dernières opérations, mais doit tout de même enregistrer toutes les opérations effectuées sans limite


let history: string[] = []

export function pushToHistory(entry: string): void {
    history.push(entry)
}

export function getHistory(): string[] {
    return history
}

export function displayHistory(): void {
    const history :string[] = getHistory()

    history.forEach((entry, index) =>
            console.log(index + 1, entry, "\n")
    )
}
