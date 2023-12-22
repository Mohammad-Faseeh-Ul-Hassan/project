import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faMagnifyingGlass,faGear,faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { item } from '../App';
import { useNavigate } from 'react-router-dom';
function HeaderAdmin() {
  const { handleLogout } = useContext(item);
  const navigation = useNavigate();

  const handleLogoutAdmin = () => {
    handleLogout();
    navigation('/Login');
  }
  const iconStyle = {
    border: '1px solid lightgray',
    borderRadius: '10%',
    padding: '6px',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ textAlign: 'left', margin: '0' }}>Dashboard</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <FontAwesomeIcon icon={faBell} size="lg" style={iconStyle} />
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={iconStyle} />
        <FontAwesomeIcon icon={faGear} size="lg" style={{ ...iconStyle, color: "#000000" }} />
        <FontAwesomeIcon icon={faCircleUser} size="lg" style={iconStyle} />
        <button onClick={handleLogoutAdmin}>Log out</button>
      </div>
    </div>
  );
}

export default HeaderAdmin;








// function HeaderAdmin() {
//     const headerStyle = {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     };
  
//     const imageStyle = {
//       width: '120px', // Increase the size of the image
//       height: '120px',
//     };
  
//     return (
//       <div className="card text-center" style={headerStyle}>
//         <div className="card-body">
//           <div className="text-center">
//             <img
//               src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg"
//               alt="..."
//               style={imageStyle}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default HeaderAdmin;
  