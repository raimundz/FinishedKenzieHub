import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { TechContext } from "./contexts/TechContext";
import * as yup from "yup";
import Modal from "react-modal";
import Router from "./Router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
Modal.setAppElement("#root");
function App() {
  const { addTech } = useContext(TechContext);

  const validation = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) });

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      rigth: "auto",
      botton: "auto",
      marginRigth: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "369px",
      height: "50%",
      maxHeight: "342px",
      backgroundColor: "#212529",
      padding: "0px",
      display: "flex",
      flexDirection: "column",
      alignItens: "center",
    },
  };
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Router handleOpenModal={handleOpenModal} />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={customStyle}
          >
            <div className="modalTopContent">
              <h2 className="modalTopText">Cadastrar Tecnologia</h2>
              <button onClick={handleCloseModal} className="buttonCloseModal">
                X
              </button>
            </div>
            <form className="formModal" onSubmit={handleSubmit(addTech)}>
              <label className="addTechLabel">
                Nome
                <input
                  className="inputAddTech"
                  type="text"
                  placeholder="Tecnologia aqui"
                  name="title"
                  {...register("title")}
                />
                <p className="errorMessage">{errors.title?.message}</p>
              </label>
              <label className="addTechLabel">
                Selecionar Status
                <select
                  className="inputAddTech"
                  name="status"
                  {...register("status")}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </label>
              <button className="addTechSubmit">Cadastrar Tecnologia</button>
            </form>
          </Modal>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
