import React, { useState } from 'react'
import { Switch, BrowserRouter as Router, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm'





const Home = () => {
    return (
        <div>
            <h2 style={{ 'textAlign': 'center' }}>HOME</h2>
            <br />
            <Link to="/login">

                <Button
                    variant="contained"
                    color="primary"
                    style={{ 'display': 'block', 'margin': 'auto', 'marginTop': '40px' }}
                    size="small" >
                    Login
                </Button>
            </Link>
            <br />
        </div>
    )
}



const App = () => {
    const [user, setUser] = useState('')
    const [loggedin, setLoggedin] = useState(false)
    let Auth = {

        login(username) {
            Auth.loggedIn = true
            setUser(username)
            return new Promise((res) => {
                setLoggedin(true)
                return res()
            })
        },
        logout() {
            setLoggedin(false)
            setUser("")
        }
    }

    return (
        <Router>

            {loggedin ?
                <div>
                    <h2 style={{ 'textAlign': 'center' }}>Wellcome {user}</h2>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ 'display': 'block', 'margin': 'auto', 'marginTop': '40px' }}
                        onClick={Auth.logout} >Logout</Button>

                    <br />

                </div> :

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/login"
                        render={props => (
                            <LoginForm {...props} changeState={Auth} />
                        )}
                    />
                </Switch>
            }
        </Router>
    )


}
export default App