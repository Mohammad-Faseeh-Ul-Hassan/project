function HeaderAdmin() {
    const headerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
  
    const imageStyle = {
      width: '120px', // Increase the size of the image
      height: '120px',
    };
  
    return (
      <div className="card text-center" style={headerStyle}>
        <div className="card-body">
          <div className="text-center">
            <img
              src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg"
              alt="..."
              style={imageStyle}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default HeaderAdmin;
  