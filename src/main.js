class modernString {
    constructor(string) {
      this.string = string;
    }
  
    // Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
    capitalize() {
      this.string = this.string.toLowerCase();
      return this.string[0].toUpperCase() + this.string.slice(1);
    }
  
    // Преобразование строки с целью правильно расстановки пробелов.
    correctSpaces() {
      this.string = this.string.trim()
        .replace(/\s+/g, ' ')
        .replace(/([,.!?])(\S)/g, '$1 $2')
        .replace(/\s+([,.!?])/g, '$1');
  
      return this.string;
    }
  
    // Подсчитывание слов в строке
    lengthOfString() {
      this.correctSpaces();
      return this.string.split(' ').length;
    }
  
    // Подсчитывание уникальных слов
    UnicWords() {
        const wordArray = this.correctSpaces()
            .toLowerCase()
            .replace(/([,.!?])/g, '')
            .split(' ');
        const unicSet = new Set(wordArray);
        return unicSet;
        const obj = {};
        for (let value of wordArray) {
            let regex = new RegExp(`\\b${value}\\b`, "gi");
            let counter = (this.string.match(regex) || []).length;
            obj[value] = counter;
        }
        let returnString = `Количество уникальных слов: ${unicSet.size}\n`;
        for (let [key, value] of Object.entries(obj))
            returnString += `Слово '${key}' встречается ${value} раз(а)\n`
        return returnString;
    }
  }
  
  let testUnicWords = new modernString('Текст, в котором слово текст несколько раз встречается и слово тоже');
  console.log(testUnicWords.UnicWords());