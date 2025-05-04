import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootswatch/dist/simplex/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Tomasz Kadłubowski</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Strona główna</Nav.Link>
              <Nav.Link href="#zawodowa">Działalność zawodowa</Nav.Link>
              <Nav.Link href="#edukacyjna">Działalność edukacyjna</Nav.Link>
              <Nav.Link href="#charytatywna">Działalność charytatywna</Nav.Link>
              <Nav.Link href="#kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="p-5 text-center bg-light">
        <h1 className="display-4">Witaj na mojej stronie</h1>
        <img
          src="photo/1.jpg"
          alt="Tomasz Kadłubowski"
          className="img-fluid rounded-circle my-4"
          style={{ maxWidth: '200px' }}
        />
        <p className="lead">Portfolio, działalność zawodowa i więcej</p>
      </section>
      

      <section id="zawodowa" className="p-5">
        <Container>
          <h2>Działalność zawodowa</h2>
          <p>Opis Twojej pracy, firm, projektów itd.</p>
        </Container>
      </section>

      <section id="edukacyjna" className="p-5 bg-light">
        <Container>
          <h2>Działalność edukacyjna</h2>
          <p>Kursy, szkolenia, uczelnie – wszystko co związane z edukacją.</p>
        </Container>
      </section>

      <section id="charytatywna" className="p-5">
        <Container>
          <h2>Działalność charytatywna</h2>
          <p>Wolontariat, akcje społeczne itp.</p>
        </Container>
      </section>

      <section id="kontakt" className="p-5 bg-light text-center">
        <h2>Kontakt</h2>
        <p>kad.tom@wp.pl</p>
      </section>
    </>
  );
}

export default App;
