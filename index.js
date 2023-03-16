const textArea = document.getElementById("text");
const btn = document.getElementById("btn");

const vowels = ["a", "e", "i", "o", "u"];

btn.addEventListener("click", generatePigLatin);

function generatePigLatin() {
  let text = textArea.value;

  let words = text.split(" ");
  let latinWords = [];

  words.forEach((word) => {
    let chars = word.split("");
    let newWord = "";

    for (let i = 0; i < chars.length; i++) {
      if (vowels.includes(chars[i])) {
        newWord += chars.splice(i, chars.length - 1).join("");
        newWord += chars.splice(0, i).join("");
        newWord += "ay";
        break;
      }
    }

    if (newWord === "") {
      newWord = word;
    }

    latinWords.push(newWord);
  });

  console.log(latinWords);

  textArea.value = latinWords.join(" ");
}
