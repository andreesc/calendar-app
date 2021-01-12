import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import LoginScreen from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {startChecking} from "../actions/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function AppRouter () {

    const dispatch = useDispatch();

    const {checking, uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return <h5>Loading...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={!!uid}
                        exact
                        path="/login"
                        component={LoginScreen}
                    />
                    <PrivateRoute
                        isAuthenticated={!!uid}
                        exact
                        path="/"
                        component={CalendarScreen}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
export default AppRouter;