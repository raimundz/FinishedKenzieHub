import Container from "./styles";
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
function TechContainer({ handleOpenModal }) {
  const { tech, deleteTech } = useContext(TechContext);

  return (
    <Container>
      <div className="techTopContent">
        <h2>Tecnologias</h2>
        <button className="buttonAddTech" onClick={handleOpenModal}>
          +
        </button>
      </div>

      <div className="techMainContent">
        {tech.length > 0 ? (
          tech.map((elem, index) => (
            <div className="techCard" key={index}>
              <span className="techCardContent">
                <h3>{elem.title}</h3>
                <h4>{elem.status}</h4>
              </span>
              <button
                className="deleteButton"
                onClick={() => deleteTech(elem.id)}
              >
                <BsFillTrashFill />
              </button>
            </div>
          ))
        ) : (
          <h3 className="noTech">Você não possui tecnologias adicionadas</h3>
        )}
      </div>
    </Container>
  );
}

export default TechContainer;
