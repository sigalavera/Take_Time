import React, { useEffect, useState } from "react";
import "./cases.css";

const Cases = () => {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/case/getAllCases")
      .then((response) => response.json())
      .then((data) => setCases(data));
  }, []);


  console.log(cases);
  const mapCases = () =>
    cases?.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item?.title}</td>
          <td>{item?.createdAt}</td>
          <td>{item?.descripition}</td>
        </tr>
      );
    });

  return (
    <table>
      <th>Name</th>
      <th>Date</th>
      <th>Descripition</th>
      {mapCases}
    </table>
  );
};
export default Cases;
