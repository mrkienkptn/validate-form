import React, { useState } from 'react'
import { Switch, BrowserRouter as Router, Route, Link, useRouteMatch ,Redirect, useHistory, useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm'
import User from './User'
import AvaImg from '../../public/images/avatar.png'




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

const Ava = (props)=>{
    const styleIm = {
        'display':' inline'
    }
    const styleDiv = {
        'display':'flex',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'textDecoration': 'none',
        'fontSize': '20px',
        'fontWeight': 'bold'

    }
    const styleName = {
        'marginRight': '10px'
    }
    return (
        <Link style={styleDiv} to={`user/${props.username}`}>
            <label style={styleName}>{props.username}</label>
            <Avatar alt="Image" src={AvaImg}/>
            
        </Link>
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
            <Switch>
                <Route
                    path='user/:username'
                    component={User}
                />
                {!loggedin && <Route path="/" exact component={Home} />}
                {loggedin && (<>
                
                    <Route
                        exact
                        path="/"
                        render={() => (
                            
                            <>
                            <Ava username={user} />
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{ 'display': 'block', 'margin': 'auto', 'marginTop': '40px' }}
                                onClick={Auth.logout} >Logout</Button>
                            </>
                        )}
                    />
                    <Route
                            path='/user/:username'
                            component={User}
                    />
                    
                </>)}

                <Route
                    path="/login"
                    render={props => (
                        <LoginForm {...props} changeState={Auth} />
                    )}
                />

            </Switch>

        </Router>
    )


}
export default App