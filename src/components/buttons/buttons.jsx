"use client"
import { increment, decrement } from '../../store/store';
import { useDispatch } from 'react-redux';

function Buttons() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>

        </div>
    );
};

export default Buttons;