import React, { useEffect, useState } from "react";
import Datatable from "rhnet-datatable-simple";

export default function Table() {
  // State
  const [employees, setEmployees] = useState(); // Data
  const [isLoading, setIsLoading] = useState(true); // is Loading

  // Get data from Live Server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/employees");
        const jsonData = await response.json();
        setEmployees(jsonData);
        setIsLoading(false);
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
