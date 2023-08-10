import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const DestinationDetail = () => {
  const { dId } = useParams();
  const [d, setDestinationDetail] = useState([]);
  const [accomo, setAcomo] = useState([]);
  const [transportation, setTransport] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:9999/Destination/" + dId)
      .then((resp) => resp.json())
      .then((data) => {
        setDestinationDetail(data);
      });
  }, [dId]);
  useEffect(() => {
    fetch(" http://localhost:9999/Transportation")
      .then((resp) => resp.json())
      .then((data) => {
        setTransport(data);
      });
  }, []);
  useEffect(() => {
    fetch(" http://localhost:9999/Accomodation")
      .then((resp) => resp.json())
      .then((data) => {
        setAcomo(data);
      });
  }, []);
  return (
    <Container>
      <h1>{d.name}</h1>
      <img src={d.img} />
      <p>{d.description}</p>
      <Row>
        <div className="col-6">
          <h4>accomodation</h4>
          <ul>
            {accomo.map((a) =>
              a.dId === d.id ? (
                <li>
                  <Link to={"/Accomodation/detail/" + a.id}>{a.name}</Link>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="col-6">
          <h4>transport</h4>
          <ul>
            {transportation.map((t) =>
              t.dId === d.id ? (
                <li>
                  <Link to={"/Transportation/detail/" + t.id}>{t.name}</Link>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </Row>
    </Container>
  );
};

export default DestinationDetail;
