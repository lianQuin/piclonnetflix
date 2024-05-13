import { addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

// 2 referenciamos a la base de datos (coleccion) de firestore
const heroesCollection = collection(db, "heroes");

/* SWEET ALERT */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);

export const Create = () => {
  const [heroes, setHeroes] = useState([]);
  const [newHero, setNewHero] = useState({
    nombre: '',
    apellido: '',
    especialidad: '',
    nacimiento: ''
  });

  // Función para agregar un nuevo héroe
  const createHero = async () => {
    try {
      // Agregar un nuevo documento a la colección "heroes"
      const docRef = await addDoc(heroesCollection, newHero);
      console.log("Document written with ID: ", docRef.id);
      // Actualizar la lista de héroes
      setHeroes([...heroes, { ...newHero, id: docRef.id }]);
      // Mostrar una alerta de éxito
      mySwal.fire('Éxito', 'Héroe creado con éxito', 'success');
    } catch (e) {
      console.error("Error adding document: ", e);
      // Mostrar una alerta de error
      mySwal.fire('Error', 'Hubo un error al crear el héroe', 'error');
    }
  };

  const handleInputChange = (event) => {
    setNewHero({
      ...newHero,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
      <input type="text" name="apellido" placeholder="Apellido" onChange={handleInputChange} />
      <input type="text" name="especialidad" placeholder="Especialidad" onChange={handleInputChange} />
      <input type="text" name="nacimiento" placeholder="Nacimiento" onChange={handleInputChange} />
      <button onClick={createHero}>Crear héroe</button>
    </div>
  );
};



