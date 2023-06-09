import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
   const {games,error} =  useGames();
  return (
    <>
      {error && <span>{error}</span>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        </div>
    </>
  );
};

export default GameGrid;
