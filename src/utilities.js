export const dataOdierna = newDate();

export function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createRandomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[createRandomNumber(0, alphabet.length - 1)];
}