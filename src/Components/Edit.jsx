import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

export const Edit = () => {
  const { id } = useParams();
  const [hero, setHero] = useState({
    nombre: '',
    apellido: '',
    especialidad: '',
    nacimiento: ''
  });

  useEffect(() => {
    const fetchHero = async () => {
      const heroDoc = doc(db, "heroes", id);
      const heroData = await getDoc(heroDoc);
      if (heroData.exists()) {
        setHero(heroData.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchHero();
  }, [id]);

  const handleInputChange = (event) => {
    setHero({
      ...hero,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const heroDoc = doc(db, "heroes", id);
    await updateDoc(heroDoc, hero);
    alert('Hero updated');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={hero.nombre} onChange={handleInputChange} />
      <input type="text" name="apellido" value={hero.apellido} onChange={handleInputChange} />
      <input type="text" name="especialidad" value={hero.especialidad} onChange={handleInputChange} />
      <input type="text" name="nacimiento" value={hero.nacimiento} onChange={handleInputChange} />
      <button type="submit">Actualizar héroe</button>
    </form>
  );
};

