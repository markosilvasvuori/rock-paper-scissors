import { useState, useEffect, useContext } from 'react';

import { ScoreContext } from '../../store/score-context';
import Item from './Item';
import Button from '../UI/Button';

import classes from './Results.module.css';

const Results = ({ playerSelectedItem, computerSelectedItem, playAgain }) => {
    const {ctxValue} = useContext(ScoreContext);
    const [winner, setWinner] = useState('');
    const playerWon = 'You Win!';
    const computerWon = 'Computer Win!'

    useEffect(() => {
        if (!winner) {
            if ((playerSelectedItem.name === 'rock' && computerSelectedItem.name === 'scissors') ||
                (playerSelectedItem.name === 'paper' && computerSelectedItem.name === 'rock') ||
                (playerSelectedItem.name === 'scissors' && computerSelectedItem.name === 'paper')) {
                ctxValue.incrementPlayerScore();
                setWinner(playerWon);
            }

            if ((playerSelectedItem.name === 'rock' && computerSelectedItem.name === 'paper') ||
                (playerSelectedItem.name === 'paper' && computerSelectedItem.name === 'scissors') ||
                (playerSelectedItem.name === 'scissors' && computerSelectedItem.name === 'rock')) {
                ctxValue.incrementComputerScore();
                setWinner(computerWon);
            }

            if (playerSelectedItem.name === computerSelectedItem.name) {
                setWinner('draw');
            }
        }
    }, [computerSelectedItem, playerSelectedItem, ctxValue, winner]);

    return (
        <div className={classes.results}>
            <div className={classes.item}>
                <p>You picked:</p>
                <Item 
                    name={playerSelectedItem.name} 
                    img={playerSelectedItem.img} 
                />
            </div>
            <div className={classes.winner}>
                <p>{winner}</p>
                <Button 
                    onClick={playAgain} 
                    background={true}
                >
                    Play Again
                </Button>
            </div>
            <div className={classes.item}>
                <p>Computer picked:</p>
                <Item 
                    name={computerSelectedItem.name} 
                    img={computerSelectedItem.img} 
                />
            </div>
        </div>
    );
};

export default Results;