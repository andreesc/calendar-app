import {useDispatch, useSelector} from "react-redux";
import {clearActiveEvent, eventDeleted} from "../../actions/events";

function DeleteEventFab () {

    const {activeEvent} = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eventDeleted(activeEvent));
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
        >
            <i className="fas fa-trash"></i>
            <span> Borrar evento</span>
        </button>
    )
}

export default DeleteEventFab;