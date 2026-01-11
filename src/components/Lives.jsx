import heartFilledRed from "../assets/life-heart-filled-red.svg";
import heartUnfilled from "../assets/life-heart-empty.svg";

function Lives({ lives }) {
  const MAX_LIVES = 8;

  const hearts = Array.from({ length: MAX_LIVES }, (_, index) => {
    const isFilled = index >= MAX_LIVES - lives; 

    return (
      <img
        key={index}
        src={isFilled ? heartFilledRed : heartUnfilled}
        alt="Heart"
      />
    );
  });

  return <div className="lives-container" >{hearts}</div>;
}

export default Lives;
