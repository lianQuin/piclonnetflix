import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db,app } from "../firebaseConfig/firebase.js";
import "./HomeUsuario.css"

import { getAuth,onAuthStateChanged, signOut } from "firebase/auth";
const auth=getAuth(app)

/* SWEET ALERT */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);

export const HomeUsuario= () => {
  const [heroes, setHeroes] = useState([]);

  const heroesCollection = collection(db, "heroes");

  const deleteHeroe = async (id) => {
    const heroeDoc = doc(db, "heroes", id);
    await deleteDoc(heroeDoc);
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Seguro?",
      text: "Esto sera definitivo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHeroe(id);
        Swal.fire({
          title: "Borrado!",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const getHeroes = async () => {
      const data = await getDocs(heroesCollection);

      setHeroes(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getHeroes();
  }, [heroes]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={()=>signOut(auth)}>volver</button>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <div>
          <div>
            <div>
              <Link to="/create">CREAR</Link>
            </div>

            <table style={{ width: '100%', margin: '20px 0', textAlign: 'center' }}>
              <thead>
                <tr>
                  <td>Nombre</td>
                  <td>Apellido</td>
                  <td>Especialidad</td>
                  <td>Nacimiento</td>
                  <td>Acciones</td>
                </tr>
              </thead>

              <tbody>
                {heroes.map((heroe) => (
                  <tr key={heroe.id}>
                    <td>{heroe.nombre}</td>
                    <td>{heroe.apellido}</td>
                    <td>{heroe.especialidad}</td>
                    <td>{heroe.nacimiento}</td>
                    <td>
                      <Link to={`edit/${heroe.id}`}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button
                        onClick={() => confirmDelete(heroe.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

