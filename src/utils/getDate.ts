export function getDate():string {
    const today = new Date();
    const month :number = today.getMonth() + 1;
    const year :number = today.getFullYear();
    const date :number = today.getDate();
    console.log(date);
    return `${month}/${date}/${year}`;
}
