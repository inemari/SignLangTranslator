import { storageSave } from "../utils/storage"; // Ensure the path is correct
import { STORAGE_KEY_USER } from "../const/storageKeys";// userActions.js


export const updateUser = (setUser, updatedUser) => {
    setUser(updatedUser);
    storageSave(STORAGE_KEY_USER, updatedUser);
}

export const logoutUser = (setUser) => {
    setUser(null);
    storageSave(STORAGE_KEY_USER, null);
}
