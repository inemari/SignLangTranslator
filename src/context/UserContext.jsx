import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { updateUser, logoutUser } from './userActions';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

    const state = {
        user,
        setUser: (updatedUser) => updateUser(setUser, updatedUser),
        logout: () => logoutUser(setUser)
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
