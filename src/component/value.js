import { useSelector } from 'react-redux';

const Value = () => {
    const value = useSelector(state => state.counter.value)

    return (
        <div className="box">
            <p>{value}</p>
        </div>
    );
}

export default Value;
