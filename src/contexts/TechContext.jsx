import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function deleteTech(id) {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, config)
      .then(
        Swal.fire(
          "Tecnologia excluida com sucesso",
          "A tecnologia selecionada foi exluida",
          "success"
        )
      );
    axios
      .get("https://kenziehub.herokuapp.com/profile", config)
      .then((res) => setTech(res.data.techs))
      .catch((err) => console.log(err));
  }
  const addTech = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        Swal.showLoading();
        setTimeout(() => {
          Swal.fire("Parabens", "Tecnologia adicionada com sucesso", "success");
          axios
            .get("https://kenziehub.herokuapp.com/profile", config)
            .then((res) => setTech(res.data.techs))
            .catch((err) => console.log(err));
        }, "3000");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuário ja possui essa tecnologia adicionada, você pode apenas atualiza-la",
        })
      );
  };

  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", config)
      .then((res) => setTech(res.data.techs))
      .catch((err) => console.log(err));
  }, [tech]);

  return (
    <TechContext.Provider value={{ addTech, tech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
