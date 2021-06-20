import React from 'react'
import { withRouter } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div>
        <h1>{"I AM PROTECTED"}</h1>         
        </div>
    )
}
export default withRouter(DashBoard)
