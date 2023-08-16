import './GameButton.css'
import { Props } from './types';

function GameButton(props: Props){
    const style = {
        backgroundColor: props.color
    };
    
    return <button id="firstButton" style={style} onClick={() => props.onClick(props.number)}> {props.number} </button>;
};

export default GameButton;
