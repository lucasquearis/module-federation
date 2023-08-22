import React from "react";
import { Button, Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className="display-3">Olá Module Federation</h1>
        <hr className="my-2"></hr>
        <p>Este componente é de outro App React!!</p>
        <div className="lead">
          <Button>Botão</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
