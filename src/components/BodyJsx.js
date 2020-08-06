import React from 'react'

const Body = (props) => {
    //console.log(props)
    return(
        <div>
            <h1>Hi {props.name} And {props.Lname}</h1>
            {props.children}
        </div>
    )
}

export default Body