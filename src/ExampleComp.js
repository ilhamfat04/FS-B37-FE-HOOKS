import React, { useEffect } from 'react'

export default function ExampleComp(props) {

    useEffect(() => {
        console.log("ExampleComp is Updated by Props");
    }, [props])

    return (
        <div>Email : { props.user.email }</div>
    )
}
