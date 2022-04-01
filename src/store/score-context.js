import { createContext, useState } from 'react';

export const ScoreContext = createContext({
    playerScore: 0,
    computerScore: 0,
    incrementPlayerScore: () => {},
    incrementComputerScore: () => {},
    resetGame: () => {},
});

export const ScoreProvider = (props) => {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const incrementPlayerScore = () => {
        setPlayerScore(prevScore => {
            return prevScore + 1
        });
    }

    const incrementComputerScore = () => {
        setComputerScore(prevScore => {
            return prevScore + 1
        });
    }

    const resetGame = () => {
        setPlayerScore(0);
        setComputerScore(0);
    };

    const ctxValue = {
        playerScore: playerScore,
        computerScore: computerScore,
        incrementPlayerScore: incrementPlayerScore,
        incrementComputerScore: incrementComputerScore,
        resetGame: resetGame,
    }

    return (
        <ScoreContext.Provider value={{ctxValue}}>
            {props.children}
        </ScoreContext.Provider>
    );
}