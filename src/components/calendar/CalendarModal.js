import Modal from 'react-modal';
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2';
import {useDispatch, useSelector} from "react-redux";
import {uiCloseModal} from "../../actions/modal";
import {clearActiveEvent, startEventAddNew, startEventUpdate} from "../../actions/events";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const endDate = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: endDate.toDate()
}


function CalendarModal () {

    const {modalOpen} = useSelector(state => state.ui);
    const {activeEvent} = useSelector(state => state.calendar);
    const dispatch = useDispatch();

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(endDate.toDate());
    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const {title, notes, start, end} = formValues;

    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent);
        } else {
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues]);

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire('Error', 'La fecha de fin debe ser mayor que la de inicio.', 'error');
            return;
        }

        if (title.trim().length<2) {
            return setTitleValid(false);
        }

        if (activeEvent) {
            dispatch(startEventUpdate(formValues));
        } else {
            dispatch(startEventAddNew(formValues));
        }

        setTitleValid(true);
        closeModal();

    }

    const closeModal = () => {
        dispatch(uiCloseModal());
        setFormValues(initEvent);
        dispatch(clearActiveEvent());
    }

    const handleStartDateChange = (e) => {
        console.log(e);
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }

    const handleEndDate = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    return (
        <Modal
            isOpen={modalOpen}
            style={customStyles}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> { activeEvent ? 'Editando evento' : 'Crear evento' } </h1>
            <hr />
            <form
                onSubmit={handleSubmitForm}
                className="container"
            >
                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleStartDateChange}
                        value={dateStart}
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleEndDate}
                        minDate={dateStart}
                        value={dateEnd}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && `is-invalid`}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea><small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
export default CalendarModal;