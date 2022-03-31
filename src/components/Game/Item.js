import classes from './Item.module.css';

const Item = ({ name, img, onSelect }) => {
    const borderColor = name === 'rock' ? '#f95959' 
                    : name === 'paper' ? '#a2a8d3' 
                    : '#97cba9';

    return (
        <div
            id={name} 
            className={classes.item}
            style={{ backgroundImage: `url(${img})`, borderColor: borderColor }}
            onClick={onSelect}
            >
        </div>
    );
};

export default Item;