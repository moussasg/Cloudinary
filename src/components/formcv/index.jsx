import React, { useRef, useState } from 'react';
import axios from 'axios';
import style from "./index.module.css";
import Logo from "../../assets/logo.jpg"
import IconLabelButtons from '../matui';
function Formcv() {
  const [vide, setvide] = useState(""); // Initialize vide with an empty string
  const inputRef = useRef(); // inputref pour tracker input
  const AddAnimal = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = inputRef.current.files[0]; // Get the selected file from the input
    // Check if a file is selected before making the request
    if (file) {
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');
      axios.post('https://api.cloudinary.com/v1_1/dvlj69us4/raw/upload', formData)
      setvide("send success ! ");
      console.log('success');
      confirm('send success !')
        }
    else {
      setvide("Please Put Your cv ! ");
    }
  };
  return (
    <>
      <div className={style.App}>
      <h1>Drop Your CV</h1>
      <p>{vide}</p>
      <div className={style.monimg}>
  <img src={Logo} width='300px' height="200px" alt='rre'></img><br></br>
  </div>
  <div className={style.butup}>
        <input className={style.upload} ref={inputRef} type="file"/><br></br>
        <button type="submit" onClick={AddAnimal}><IconLabelButtons/></button>
        </div>
      </div>
    </>
  );
}
export default Formcv;
