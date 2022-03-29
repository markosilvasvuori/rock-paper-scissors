import { useContext } from 'react';

import { ScoreContext } from '../../store/score-context';
import classes from './Scoreboard.module.css';

const Scoreboard = () => {
    const {ctxValue} = useContext(ScoreContext);

    return (
        <div className={classes.scoreboard}>
            <h1>
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <div className={classes.scores}>
                <div className={classes['score-container']}>
                    <p>Player Score:</p>
                    <p className={classes.score}>{ctxValue.playerScore}</p>
                </div>
                <div className={classes['score-container']}>
                    <p>Computer Score:</p>
                    <p className={classes.score}>{ctxValue.computerScore}</p>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;