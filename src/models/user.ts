export class User {
    public id: number;
    public name: string;
    public PIN: string;
    public balance: number;

    constructor(id: number, name: string, PIN:string, balance:number) {
        this.id = id;
        this.name = name;
        this.PIN = PIN;
        this.balance = balance;
    }
}
