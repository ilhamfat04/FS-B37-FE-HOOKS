//import useState & useEffect here
import { useEffect, useContext } from 'react'

import {
    Container,
    Row, Col, Form,
    Button
} from 'react-bootstrap'

import Welcome from './Welcome'
import GuestGreeting from './GuestGreeting'

import ExampleComp from './ExampleComp'
import List from './component/List'

import { UserContext } from './context/userContext'

function App() {

    // declaration state global
    const [state, dispatch] = useContext(UserContext)
    // console.log(state);

    // Create DidMount with useEffect inside it can print "App Component Did Mount" & state value here
    useEffect(() => {
        console.log("App Component Did Mount");
    })

    // Create DidUpdate with useEffect inside it can print "App Component Did Update" & state value here
    useEffect(() => {
        if (state.user.email) {
            console.log("App Component Did Update");
        }
    }, [state])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        const data = {
            email,
            password
        }

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data
        })
    }

    return (
        <>
            <List />
        </>
    )
}

export default App;