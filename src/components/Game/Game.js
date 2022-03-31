import { useState, useContext } from 'react';

import { ScoreContext } from '../../store/score-context';
import RockImg from '../../img/rock.jpg';
import PaperImg from '../../img/paper.jpg';
import ScissorsImg from '../../img/scissors.jpg';
import Item from './Item';
import Results from './Results';

import classes from './Game.module.css';
import Button from '../UI/Button';

const Game = () => {
    const {ctxValue} = useContext(ScoreContext);
    const [playerSelectedItem, setPlayerSelectedItem] = useState('');
    const [computerSelectedItem, setComputerSelectedItem] = useState('');

    const items = [
        {
            name: 'rock',
            img: RockImg,
        },
        {
            name: 'paper',
            img: PaperImg,
        },
        {
            name: 'scissors',
            img: ScissorsImg,
        },
    ];

    const onSelectHandler = (event) => {
        const randomIndex = Math.floor(Math.random() * 3);

        setPlayerSelectedItem(items.find(item => item.name === event.target.id));
        setComputerSelectedItem(items[randomIndex]);
    };

    const playAgainHandler = () => {
        setPlayerSelectedItem('');
    };

    return (
        <div className={classes.game}>
            {!playerSelectedItem && 
                items.map(item => (
                    <Item 
                        key={item.name} 
                        name={item.name}
                        img={item.img}
                        onSelect={onSelectHandler}
                    />
                )
            )}
            {!playerSelectedItem && 
                <Button 
                    className={classes.reset}
                    onClick={ctxValue.resetGame}
                >
                    Reset Game
                </Button>
            }
            {playerSelectedItem && 
                <Results 
                    playerSelectedItem={playerSelectedItem} 
                    computerSelectedItem={computerSelectedItem} 
                    playAgain={playAgainHandler}
                />
            }
        </div>
    );
};

export default Game;