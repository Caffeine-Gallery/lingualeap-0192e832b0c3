import { backend } from 'declarations/backend';

const englishText = document.getElementById('englishText');
const targetLanguage = document.getElementById('targetLanguage');
const translateButton = document.getElementById('translateButton');
const translatedText = document.getElementById('translatedText');
const speakButton = document.getElementById('speakButton');

translateButton.addEventListener('click', async () => {
  const text = englishText.value;
  const language = targetLanguage.value;
  translatedText.value = 'Translating...';

  try {
    const response = await fetch(`https://libretranslate.de/translate`, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: language,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    translatedText.value = data.translatedText;
    await backend.storeTranslation(data.translatedText); // Store the translation
  } catch (error) {
    translatedText.value = 'Error translating text.';
    console.error('Translation error:', error);
  }
});

speakButton.addEventListener('click', () => {
  const text = translatedText.value;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
});
