function capitalizeWords(str) {
    let words = str.split(" ");
    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
            capitalizedWords.push(capitalized);
        } else {
            capitalizedWords.push(""); // Handle multiple spaces
        }
    }

    return capitalizedWords.join(" ");
}
