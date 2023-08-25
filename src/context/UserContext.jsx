import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { updateUser, logoutUser } from './userActions';

// Creating a context to hold user-related data
const UserContext = createContext();

// A custom hook to easily access the UserContext
export const useUser = () => {
    return useContext(UserContext);
}

// A component that provides user-related data to its children
const UserProvider = ({ children }) => {

    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

    // Creating an object to hold user-related state and functions
    const state = {
        user,
        setUser: (updatedUser) => updateUser(setUser, updatedUser),
        logout: () => logoutUser(setUser)
    }
  // Providing the state object to the components in the context
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
