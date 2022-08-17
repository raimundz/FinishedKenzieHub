import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  margin-top: 19px;
  .techTopContent {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      color: white;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.125rem;
    }
  }

  .buttonAddTech {
    color: white;
    border: none;
    width: 33px;
    height: 33px;
    background-color: #212529;
    border-radius: 4px;
  }
  .techMainContent {
    margin: auto;
    width: 95%;
    max-width: 780px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #212529;
    border-radius: 4px;
  }
  .techCard {
    width: 95%;
    height: 49px;
    margin: auto;
    margin-bottom: 16px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    background-color: #121214;
    border-radius: 4px;
  }
  .techCard:hover {
    background-color: #343b41;
  }
  .techCardContent {
    display: flex;

    width: 90%;
    justify-content: space-between;
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: white;
      margin-left: 10px;
    }
    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;
      color: #868e96;
    }
  }
  .deleteButton {
    display: none;
    margin: auto;
    border: none;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 450px) {
    .deleteButton {
      display: inline;
    }
    .techCardContent {
      width: 80%;
    }
  }
  .noTech {
    color: white;
  }
`;
export default Container;
