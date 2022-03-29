import { createContext, useState } from 'react';

export const ScoreContext = createContext();

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

    const ctxValue = {
        playerScore: playerScore,
        computerScore: computerScore,
        incrementPlayerScore: incrementPlayerScore,
        incrementComputerScore: incrementComputerScore,
    }

    return (
        <ScoreContext.Provider value={{ctxValue}}>
            {props.children}
        </ScoreContext.Provider>
    );
}