export default function Keyboard({onClickCaracter, selectedCharacters}) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    

    return (
    <div className="keyboard-container">
        {letters.map((letter) => (
        <div key={letter} className={`key ${selectedCharacters.includes(letter) ? "selected" : null}`} onClick={() => onClickCaracter(letter)}>
            <button name={letter}>{letter}</button>
        </div>
        ))}
    </div>
    );
}
