function analyzeText(text) {
  // Remove all non-word characters and convert to lowercase
  const words = text.toLowerCase().match(/\b\w+\b/g);
  
  // Create an object to store the frequency count of each word
  const wordFrequency = {};
  for (const word of words) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  }
  
  // Convert the word frequency object to an array of {word, frequency} objects
  const wordFrequencyArray = Object.entries(wordFrequency).map(([word, frequency]) => ({ word, frequency }));
  
  // Sort the array 
  wordFrequencyArray.sort((a, b) => b.frequency - a.frequency);
  
  return wordFrequencyArray;
}

const text = "This is a sample text. It contains some words that will be analyzed.";
const wordFrequency = analyzeText(text);
console.log(wordFrequency);

