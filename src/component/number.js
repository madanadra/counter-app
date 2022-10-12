import { useSelector, useDispatch } from "react-redux";
import { choice } from "../store/reducer";

const Number = () => {
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch()

    return (
        <div className="box2">
            <div className={number === 1 ? 'number choice' : 'number'} onClick={() => dispatch(choice(1))}>1</div>
            <div className={number === 2 ? 'number choice' : 'number'} onClick={() => dispatch(choice(2))}>2</div>
            <div className={number === 3 ? 'number choice' : 'number'} onClick={() => dispatch(choice(3))}>3</div>
            <div className={number === 4 ? 'number choice' : 'number'} onClick={() => dispatch(choice(4))}>4</div>
            <div className={number === 5 ? 'number choice' : 'number'} onClick={() => dispatch(choice(5))}>5</div>
            <div className={number === 6 ? 'number choice' : 'number'} onClick={() => dispatch(choice(6))}>6</div>
            <div className={number === 7 ? 'number choice' : 'number'} onClick={() => dispatch(choice(7))}>7</div>
            <div className={number === 8 ? 'number choice' : 'number'} onClick={() => dispatch(choice(8))}>8</div>
            <div className={number === 9 ? 'number choice' : 'number'} onClick={() => dispatch(choice(9))}>9</div>
        </div>
    );
}

export default Number;
