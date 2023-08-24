import { createContext, useContext, useState } from "react";
import { storageRead, storageSave } from "../utils/storage"; // <- Added storageWrite here
import { STORAGE_KEY_USER } from "../const/storageKeys";

// Context Object -> exposing
const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext); // { user, setUser }
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

    // This function updates the user state and also writes the updated data to local storage
    const updateUser = (updatedUser) => {
        setUser(updatedUser);
        storageSave(STORAGE_KEY_USER, updatedUser); // <- Changed storageWrite to storageSave here
    }

    const state = {
        user,
        setUser: updateUser // Using updateUser now instead of setUser directly
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
