import {useState} from 'react';

export const useCounter = () => {
    const[state, setState] = useState(0);

    const handleIncrement = () => {
        setState(state + 1);
    }

    const handleDecrement = () => {
        setState(state - 1);
    }

    const handleReset = () => {
        setState(0);
    }

    return{state, handleIncrement, handleDecrement, handleReset}

}