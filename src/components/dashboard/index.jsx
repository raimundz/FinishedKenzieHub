import { DashboardKenziehub } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import TechContainer from "../TechContainer/TechContainer";

function Dashboard({ handleOpenModal }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <DashboardKenziehub>
      <div className="KenziehubHeader">
        <h1 className="logoKenzie">Kenzie Hub</h1>
        <button
          className="exitButton"
          onClick={() => {
            window.localStorage.clear();
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
      <div className="topContentDashboard">
        <h1>Olá, {window.localStorage.getItem("userName")}</h1>
        <p>Primeiro módulo (Introdução ao Frontend)</p>
      </div>

      <TechContainer handleOpenModal={handleOpenModal} />
    </DashboardKenziehub>
  );
}

export default Dashboard;
