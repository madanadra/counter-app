import { useDispatch } from "react-redux";
import { increment, decrement, refresh } from "../store/reducer";

const Action = () => {
    const dispatch = useDispatch()

    return (
        <div className="box3">
            <div className="btn" onClick={() => dispatch(increment())}><span className="material-icons-outlined">add</span></div>
            <div className="btn" onClick={() => dispatch(decrement())}><span className="material-icons-outlined">remove</span></div>
            <div className="btn" onClick={() => dispatch(refresh())}><span className="material-icons-outlined">refresh</span></div>
        </div>
    );
}

export default Action;
