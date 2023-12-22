import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { item } from "../App";
function LoggedInUser() {
    const userEmail = localStorage.getItem('user');
    const { handleLogout } = useContext(item);
    const navigation = useNavigate();

    const handleLogoutUser = () => {
        handleLogout(userEmail);
        navigation('/home');
        

    }
    return(
        <div style={{border:'2px solid black',marginLeft:'40%',width:'20%',height:'30vh',marginTop:'100px',textAlign:'center'}}>
            <p>Hello</p>
            <p>{userEmail}</p>
            <button onClick={handleLogoutUser} style={{ padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}>Log out</button>
        </div>
    )
}
export default LoggedInUser;