import './App.css'
import { useState, useEffect } from "react"
import ptCommon from './i18n/ptbr/PTBR.json'
import enCommon from './i18n/en/EN.json'
import Lives from "./components/Lives"
import Keyboard from "./components/Keyboard"
import Header from "./components/Header"
import wordsPt from "./i18n/ptbr/words-ptbr.js"
import wordsEn from "./i18n/en/words-en.js"
import WordDisplay from "./components/WordDisplay"


function App() {
  
  const resources = {
    pt: ptCommon,
    en: enCommon
  }

  const [languageText, setLanguageText] = useState(resources.en)
  const [selectedCharacters, setSelectedCharacters] = useState([])
  const [lives, setLives] = useState(8)
  const [isWin, setIsWin] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)



  function getRandomWord(languageText) {
    if (languageText === resources.en) {
      const index = Math.floor(Math.random() * wordsEn.length);
      return wordsEn[index];
    } else {
      const index = Math.floor(Math.random() * wordsPt.length);
      return wordsPt[index];
    }
};


  const [displayWord, setDisplayWord] = useState(() =>
    getRandomWord(languageText)
  );


  function toggleLanguage() {
    setLanguageText((prevLanguageText) => {
      
      let newLanguage
      if (prevLanguageText === resources.en) {
        newLanguage = resources.pt 
      } else {
        newLanguage = resources.en
      }
      setDisplayWord(getRandomWord(newLanguage))
      return newLanguage
    })

    setSelectedCharacters([])
    setLives(8)
  }


  function onClickCaracter(key) {
    if (selectedCharacters.includes(key)) {
      return
    } else {
      setSelectedCharacters((prevCaracters) => [...prevCaracters, key])
      if (!displayWord.includes(key)) {
        loseHeart()
      }
    }

  }


function loseHeart() {
  setLives(prevLives => {
    const nextLives = prevLives - 1;
    if (nextLives <= 0) {
      setIsGameOver(true);
    }
    return nextLives;
  });
}


function checkVictory(displayWord, selectedCharacters) {
  for(const char of displayWord) {
    if (!selectedCharacters.includes(char)) {
      return false
    }
  }
  return true
}

// Use Effect para acabar com o jogo:
useEffect(() => {
  if ( checkVictory(displayWord, selectedCharacters) ) {
    setIsWin(true)
    setIsGameOver(true)
  }

}, [displayWord, selectedCharacters])


  return (
    <>
      {isGameOver ? 

      <> 
        {isWin ? <> <h2>{languageText.wonMessage}</h2> <p>{`${languageText.theWordWas}${displayWord}`}</p> </> : <h2>{languageText.LoseMessage}</h2>}
        <button onClick={()=> {window.location.reload()}}> Restart </button>
      </>

      :
          <>
          <Header  languageText={languageText} toggleLanguage={toggleLanguage}/>
          <Lives lives={lives} />
          <WordDisplay displayWord={displayWord} selectedCharacters={selectedCharacters}/>
          <Keyboard onClickCaracter={onClickCaracter} selectedCharacters={selectedCharacters}/>
          </>
      }
    
    </>
  )
}

export default App
