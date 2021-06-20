import React, {FunctionComponent} from 'react'
import {Route, Redirect} from 'react-router-dom'

type ProtectedRouteProps = {
    setAuth: boolean,
    component: React.ReactNode,
    rest: any
    
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({setAuth , component , ...rest}: ProtectedRouteProps) => {
    return (
        <Route {...rest} render={(props) => {
            if (setAuth){
                return component } else {
                return <Redirect to={{pathname: "/", state: {from: props.location}}} />}}}></Route>
    )
}
