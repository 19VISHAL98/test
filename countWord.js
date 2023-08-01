//  3. task
//  count the word in data.txt file

//  input   = > 
//   Great sentences are the building blocks of great writing, but getting them just right is something that even professional writers regularly fuss over. There are many ways to muddy a sentence: complicated structure, misplaced modifiers, or confusing delivery. Two of the most common blunders involve incomplete or run-on sentences, which make writing difficult to understand. Luckily we have helpful resources to guide you toward writing crisper, cleaner, easy-to-read sentences so that your ideas don’t get lost in the shuffle.

//  output => 79

const fs = require("fs").promises;
const countWord = async () => {
    const data = await fs.readFile("data.txt", "utf8");
    console.log('-------------------------------------------------------------------------------------------')
    console.log("count word in data.txt File =>", data.trim().split(/\s+/).length);
    console.log('-------------------------------------------------------------------------------------------')
};
countWord();