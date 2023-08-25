import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

// A HOC for adding authentication check to a component.
const withAuth = Component => props => {
    const { user } = useUser()
    
    // Checking if a user is authenticated
    if (user !== null) {
        return <Component {...props} /> // Rendering the provided component with its props
    } else {
        return <Navigate to="/" /> // Redirecting to the homepage if not authenticated
    }
}
export default withAuth