import { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";

const Transportation = () => {
  const [transport, setTransport] = useState([]);
  const [searchTransport, setSearchTransport] = useState([]);
  const [type, setType] = useState([]);
  const [filterType, setFilterType] = useState(0);
  const [transId, setTransId] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    fetch(" http://localhost:9999/Transportation")
      .then((resp) => resp.json())
      .then((data) => {
        setTransport(data);
      });
  }, [filterType]);
  useEffect(() => {
    fetch(" http://localhost:9999/type")
      .then((resp) => resp.json())
      .then((data) => {
        setType(data);
      });
  }, []);
  const handleSearch = (event) => {
    setSearchTransport(event.target.value.toLowerCase());
  };
  const handleTypeFilter = (event) => {
    setFilterType(event.target.value);
    //  console.log(filterType);
  };
  const handleSort = () => {
    const sortedTransport = [...transport];

    sortedTransport.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setTransport(sortedTransport);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const filter = transport.filter((t) => {
    if (filterType != 0) {
      return (
        t.type == filterType && t.name.toLowerCase().includes(searchTransport)
      );
    } else {
      return t.name.toLowerCase().includes(searchTransport);
    }
  });

  //
  return (
    <Container>
      <Row>
        <h1>List of transport</h1>
      </Row>
      <Row>
        <input
          type="text"
          id="transport"
          placeholder="search by name"
          className="form-control"
          value={searchTransport}
          onChange={handleSearch}
          //   pattern="[a-zA-Z0-9]{5,}"
        />
        <select onChange={handleTypeFilter}>
          <option value={0}>all</option>
          {type.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <button onClick={handleSort}>sort price</button>
      </Row>
      <Row>
        <Table>
          <thead className="thead-dark">
            <td>name</td>
            <td>type</td>
            <td>price</td>
          </thead>
          <tbody>
            {filter.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{type.map((y) => (t.type === y.id ? y.name : ""))}</td>
                <td>{t.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Transportation;
