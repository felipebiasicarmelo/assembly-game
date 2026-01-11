function WordDisplay(props) {
  const word = props.displayWord
  const selectedCharacters = props.selectedCharacters

  const displayWord = word
    .split("") 
    .map((character, index) => {
      if (selectedCharacters.includes(character)) {
        return (<div key={`${character} ${index}`} className="word">{character}</div>);
      } else {
        return (<div key={`${character} ${index}`} className="word">{"?"}</div>);
      }
    })
    


  return (
    <div className="word-container">
        {displayWord}
    </div>
    
  )
  
  
}

export default WordDisplay;

