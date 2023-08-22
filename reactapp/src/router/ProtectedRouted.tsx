// Desc: Private route for authenticated users
import {Navigate} from 'react-router-dom';

//Get token from local storage

const token = localStorage.getItem("token")

// type ProtectedRouteProps = {
//     redirectPath: string;
//     children:  React.ReactNode;
// }
const ProtectedRoute = ({
    redirectPath='/',
    children
} : any)=> {
    if(!token){
        return <Navigate to={redirectPath} />
    }
    return children

}
    
export default ProtectedRoute