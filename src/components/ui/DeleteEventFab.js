import {useDispatch, useSelector} from "react-redux";
import {clearActiveEvent, eventDeleted, startEventDeleted} from "../../actions/events";

function DeleteEventFab () {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startEventDeleted());
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