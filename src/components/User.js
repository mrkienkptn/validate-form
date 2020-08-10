import React from 'react'
import {useParams, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
const User = (props)=>{
    let {username} = useParams()
    return (
        <div>
            <h2 style={{ 'textAlign': 'center' }}>Welcome, {username}</h2>
            <Link style={{  'marginTop': '40px' }} to="/" >
                <Button
                    variant="contained"
                    color="primary"
                    style={{ 'display': 'block', 'marginTop': '40px' }}
                    size="small" >
                    Home
                </Button>
            </Link>
        </div>
        
    )
}
export default User