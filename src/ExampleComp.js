import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export default function ExampleComp(props) {
    const [state, _] = useContext(UserContext)
    console.log(state);

    return (
        <div>Email : { props.user.email }</div>
    )
}
