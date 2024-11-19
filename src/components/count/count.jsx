import { useSelector } from 'react-redux';

function Count() {
    let count = useSelector((state) => state.counter.value);
    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default Count;