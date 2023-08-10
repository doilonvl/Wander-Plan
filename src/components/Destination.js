import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import "../styles/Default.css";
import { Link } from "react-router-dom";

const Destination = () => {
  const [destination, setDestination] = useState([]);
  const [searchDestin, setSearchDestin] = useState("");
  const [searchtext, setSearchtext] = useState("");
  useEffect(() => {
    fetch(" http://localhost:9999/Destination")
      .then((resp) => resp.json())
      .then((data) => {
        setDestination(data);
      });
  }, []);
  const handleSearch = (event) => {
    setSearchDestin(event.target.value);
    console.log(searchDestin);
  };

  const log = (log) => {
    console.log(log);
  };
  const handleSearchtext = (event2) => {
    setSearchtext(event2.target.value);
    console.log(searchtext);
  };
  const filterList = destination.filter(
    (d) =>
      d.name.toLowerCase().includes(searchDestin.toLowerCase()) &&
      d.description.toLowerCase().includes(searchtext.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <h1>Places around the world:</h1>
      </Row>
      <Row>
        <div className="form-group text-left">
          <input
            type="text"
            id="destination"
            placeholder="search by name"
            className="form-control"
            value={searchDestin}
            onChange={handleSearch}
            //   pattern="[a-zA-Z0-9]{5,}"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="text"
            id="description"
            placeholder="search by content"
            className="form-control"
            value={searchtext}
            onChange={handleSearchtext}
            //   pattern="[a-zA-Z0-9]{5,}"
          />
        </div>
      </Row>
      <Row>
        {filterList
          //   .filter(
          //     (d) => {
          //       if (searchDestin !== "") {
          //         return d.name
          //           .toLowerCase()
          //           .includes(searchDestin.toLowerCase());
          //       }
          //       if (searchtext !== "") {
          //         return d.description
          //           .toLowerCase()
          //           .includes(searchtext.toLowerCase());
          //       }
          //     }
          //   searchDestin == "" ||
          //   (d.name.toLowerCase().includes(searchDestin.toLowerCase()) &&
          //         (searchtext == "" ||
          //           d.description.toLowerCase().includes(searchtext.toLowerCase())))
          // )
          .map((d) => (
            <Card className=" col-4" border="info">
              <Card.Title>
                <Link to={"/Destination/detail/" + d.id}>{d.name}</Link>
              </Card.Title>
              <Card.Body>
                <Card.Img src={d.img} />
                <Card.Text style={{ height: "200px", overflow: "auto" }}>
                  {d.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default Destination;
