"use strict"

class modernString {

    constructor(string) {
        this.string = string;
    }

    // Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
    capitalize() {
        this.string = this.string.toLowerCase();
        return this.string[0].toUpperCase() + this.string.slice(1);
    }
    //Преобразование строки с целью правильно расстановки пробелов.
    correctSpaces() {
        this.string = this.string.trim()
                                .replace(/\s+/g, ' ')
                                .replace(/([,.!?])(\S)/g, '$1 $2')
                                .replace(/\s+([,.!?])/g, '$1');
        
        return this.string;
    }
    // Подсчитывание слов в строке
    counterWords() {
        this.correctSpaces();
        return this.string.split(' ').length;
    }
    // Подсчитывание уникальных слов
    UnicWords() {
        const wordArray = this.correctSpaces()
                                .toLowerCase()
                                .replace(/([,.!?])/g, '')
                                .split(' ');
        const unicSet = new Set(wordArray)             
        let obj = {};
        for (let value of unicSet) {
            /* Это не сработало почему-то, пришлось создать дополнительный массив. Был бы рад узнать почему
            в обратной связи! =)

            let regex = new RegExp(`\\b${value}\\b`, "gi");
            let counter = (this.string.match(regex)).length;
            obj[value] = counter;

            */

            obj[value] = wordArray.filter(i => i==value).length;
        }
        let returnString = `Количество уникальных слов: ${unicSet.size}\n`;
        for (let [key, value] of Object.entries(obj))
            returnString += `\tСлово '${key}' встречается ${value} раз(а)\n`
        return returnString;
    }
}

/* Проверки каждого метода

let testCapitalize = new modernString('aRTeM');
console.log(testCapitalize.capitalize());
console.log(`\n`)

let testSpaces = new modernString('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.');
console.log(testSpaces.correctSpaces());
console.log(`\n`)

console.log(testSpaces.counterWords());
console.log(`\n`)

let testUnicWords = new modernString('Текст, в котором слово текст несколько раз встречается и слово тоже');
console.log(testUnicWords.UnicWords());
*/

export {modernString};