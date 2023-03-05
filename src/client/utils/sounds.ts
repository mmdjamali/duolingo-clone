const correct = new Audio("/sounds/correct.mp3")
const wrong = new Audio("/sounds/wrong.mp3")

export const speak = async (
    text : string,
    lang : string
) => {
    const TTS = speechSynthesis;
    const toSpeech = new SpeechSynthesisUtterance(text);
    toSpeech.voice = TTS.getVoices().filter((item) => item.lang === lang)[2]
    TTS.speak(toSpeech)
}

export const playCorrect = () => {
    correct.play()
}
export const playWrong = () => {
    wrong.play()
}