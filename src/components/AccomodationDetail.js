import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AccomodationDetail = () => {
  const { cId } = useParams();
  const [a, setAcomo] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:9999/Accomodation/" + cId)
      .then((resp) => resp.json())
      .then((data) => {
        setAcomo(data);
      });
  }, [cId]);
  return (
    <Container>
      <h1>{a.name}</h1>
      <Row>
        {" "}
        <img src={a.img} />
      </Row>
      <h4>{a.type}</h4>
      <h4>{a.price}</h4>
    </Container>
  );
};

export default AccomodationDetail;
