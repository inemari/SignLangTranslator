
import UserProvider from "./UserContext";

/**
 * Wrapper component for the top-level context providersthis
 * structure will allow for easy expansion if we need to add 
 * more context providers in the future.
 */


// Context provider component for the entire app
const AppContext = ({ children }) => {
    return (
        // Wrapping child components with the UserProvider
        <UserProvider>
            {children}
        </UserProvider>
    );
}
export default AppContext;
