import React, { useEffect, useState } from "react";
import Datatable from "rhnet-datatable-simple";

import "../../index.css";

export default function Table() {
  const [employees, setEmployees] = useState();
  const [isLoading, setIsLoading] = useState(true); // Ajout de l'état de chargement

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/employees");
        const jsonData = await response.json();
        setEmployees(jsonData);
        setIsLoading(false); // Mettre à jour l'état du chargement une fois les données chargées
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <Datatable data={employees} />
    </>
  );
}
