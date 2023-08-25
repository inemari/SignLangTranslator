//importing the necessary functions and constans from different modules
import { storageSave } from "../utils/storage"; // importing a function to save data to storage
import { STORAGE_KEY_USER } from "../const/storageKeys"; //importing a constant for the storage key

// This function updates the user data and saves it to storage
export const updateUser = (setUser, updatedUser) => { 
    setUser(updatedUser);
    storageSave(STORAGE_KEY_USER, updatedUser);
}

// This function logs out the user and clears their data from storage
export const logoutUser = (setUser) => {
    setUser(null);
    
    // Removing the user data from storage by saving null with the same key
    storageSave(STORAGE_KEY_USER, null); 
}
