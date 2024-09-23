export const reverseString = (word: string): string => {
    const newArray = word.split('');
    const reversedArray = newArray.reverse();
    const result = reversedArray.join('');
    console.log(result);
    return result;
};

export const countCharacters = (word: string): number => {
    const newArray = word.split('');
    const lettersArray = newArray.filter(i => i !== ' ');
    const result = lettersArray.length;
    console.log(result);
    return result;
};


//function mostVowels takes in a sentence string and returns the word of the sentence that contains the most vowels.

export const mostVowels = (sentence: string): string => {
    const newArray = sentence.split(' ');

    let count = countVowels(newArray[0]);

    let index = 0;

    for (let i = 1; i < newArray.length; i++) {
        if (count < countVowels(newArray[i])) {
            count = countVowels(newArray[i]);
            index = i;
        }
    };

    return newArray[index];
}

function countVowels(word: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

console.log(mostVowels("what a wonderful life")); //wonderful
