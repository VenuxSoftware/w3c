/*
  Status: prototype
  Process: API generation
*/

importScripts('speakGenerator.js');

onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};

