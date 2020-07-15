'use strict';
console.log('--- loading: add-word.js');

const addWordHandler = () => {
  debugger;
  const userInput = prompt('enter string');
  if (userInput === null) {
    return;
  }

  words.push(userInput);
  const newMessage = `string added ${userInput}`;
  alert(newMessage);
};
