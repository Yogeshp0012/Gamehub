import { Game } from "../hooks/useGames"

interface Props{
game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-md">
    <figure><img src={game.background_image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{game.name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default GameCard
