import 'animate.css';

const Dice = ({number, animate}) => {

  return (
    <i className={`fa-solid fa-dice-${number} text-8xl ${animate && 'animate__animated animate__shakeX'}`}></i>
  )
}

export default Dice