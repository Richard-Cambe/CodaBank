import {User} from "../models/user";

let history: string[] = []

export function pushToHistory(entry: string): void {
    history.push(entry)
}

export function getHistory(): string[] {
    return history
}

export function displayHistory(users: User): void {
    const history: string[] = getHistory()

    const last10:string[] = history.reverse().slice(0,10)
        last10.forEach((entry: string, index: number): void =>
            console.log(entry)
        )
}
