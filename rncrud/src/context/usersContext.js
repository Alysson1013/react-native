import React from 'react';
import users from '../data/users'

const UsersContext = React.createContext({})

export const UsersProvider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext