import { PropTypes } from "prop-types";
import "./Cards.css";
import { useEffect, useState } from "react";
export function Cards({ label }) {
  let styles = {
    fontFamily: "Arial",
  };

  const [users, setUsers] = useState();
  useEffect(() => {
    const getUsers = async () => {
      const id = sessionStorage.getItem("idUsuario");
      const token = sessionStorage.getItem("token");
      const res = await fetch(
        "http://3.138.158.90:8000/server/listdatabase" + id,
        {
          method: "GET",
          headers: { autorizacion: token },
        }
      );
    
      const response = await res.json();
      setUsers(response);
    };
    getUsers();
  }, []);
  return (
    <div className="container">
      
        {users?.map((user) => (
          <div className="card-container" style={styles}>
          <div className="description" style={styles}>
              <div className="title" style={styles}>  <h3>{user.autor}</h3></div>

               <br />
                <br />

               <div className="grid-container" style={styles}>
                  <div className="grid-item" style={styles}><p>{user.name}</p></div>
                  <div className="grid-item1" style={styles}>   <p className="pag">{user.pages}</p></div>
               </div>
              <hr />
              </div>
                 <div className="header" style={styles}>
                  <h5>Ver Detalles</h5>
                  <img src={user.coverpage} width={140} height={210} />
                 </div>
             
            </div>
        ))}
      
    </div>
  );
}

Cards.prototype = {
  label: PropTypes.string,
  style: PropTypes.string,
  handleClick: PropTypes.func,
  isShadow: PropTypes.boolean,
  backgroundColor: PropTypes.string
}
