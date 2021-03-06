import moment from "moment";
import 'moment/locale/es';
import {Calendar, momentLocalizer} from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NavBar from "../ui/NavBar";
import {messages} from "../../helpers/calendar-messages-es";
import CalendarEvent from "./CalendarEvent";
import {useEffect, useState} from "react";
import CalendarModal from "./CalendarModal";
import {useDispatch, useSelector} from "react-redux";
import {uiOpenModal} from "../../actions/modal";
import {clearActiveEvent, eventSetActive, eventStartLoading} from "../../actions/events";
import AddNewFab from "../ui/AddNewFab";
import DeleteEventFab from "../ui/DeleteEventFab";

moment.locale('es');

const localizer = momentLocalizer(moment);

function CalendarScreen () {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const {uid} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(eventStartLoading());
    }, []);

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        dispatch(clearActiveEvent());
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: (uid===event.user._id) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <NavBar />
            <Calendar
                localizer={ localizer }
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            {
                activeEvent && <DeleteEventFab />
            }
            <AddNewFab />
            <CalendarModal/>

        </div>
    )
}
export default CalendarScreen;