import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../Redux/Actions";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";
import "./index.css";

const CountryListing = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.data);
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const [selectedMenu, setSelectedMenu] = useState("All");

  const handleSelect = (eventKey) => {
    setSelectedMenu(eventKey==='#asia'?'Asia':eventKey==='#europe'?'Europe':'All');
  };

  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand className="brand-heading" href="#home">
            Countries
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" onSelect={handleSelect}>
              <Nav.Link
                className={`menu-item ${selectedMenu === "All" && "selected"}`}
                href="#all"
              >
                All
              </Nav.Link>
              <Nav.Link
                className={`menu-item ${selectedMenu === "Asia" && "selected"}`}
                href="#asia"
              >
                Asia
              </Nav.Link>
              <Nav.Link
                className={`menu-item ${
                  selectedMenu === "Europe" && "selected"
                }`}
                href="#europe"
              >
                Europe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-3">
          {apiData &&
            (selectedMenu === "All"
              ? apiData
              : apiData.filter((country) => country.region === selectedMenu)
            ).map((m, index) => (
              <Col
                key={index}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="mb-3 ml-1 mr-1"
              >
                <Card
                  imageUrl={m?.flag}
                  name={m?.name}
                  regionName={m?.region}
                />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CountryListing;
