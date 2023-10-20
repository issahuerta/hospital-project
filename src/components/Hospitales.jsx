import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Button from "@mui/material/Button";
import viteLogo from "/vite.svg";
import TextField from "@mui/material/TextField";

import { TableHospitales } from "../tables/TableHospitales";

const Hospitales = () => {
  const [allHospitales, setAllHospitales] = useState([]);
  const [hospital, setHospital] = useState("");
  const [casos, setCasos] = useState("");

  const insertHospital = async () => {
    const params = {
      nombre_hospital: hospital,
      num_casos: casos,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/insertHospital",
        {
          params,
        }
      );
      getHospitales();
    } catch (err) {
      console.log(err);
    }
  };

  const getHospitales = async () => {
    try {
      const response = await axios.get("http://localhost:5000/hospitales");
      setAllHospitales(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHospitales();
    return () => {};
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <Header />
        <div className="content bg-blue-50 flex">
          <div className="info w-full p-7">
            <h1 className="font-bold text-2xl">
              Hospitales
            </h1>
            <div className="CardInfo w-12/12 bg-white mt-8 rounded-xl">
              <div className="Cardheadr bg-blue-500 text-white rounded-t-xl" style={{ backgroundColor: '#E28E25' }}>
                <h1 className="font-pymo2 p-4">Consulta y creacion de Hospitales</h1>
              </div>
              <div className="CardConten p-6">
                <div className="tienda mb-6 flex justify-between items-center">
                  <Button variant="contained" onClick={insertHospital} style={{ backgroundColor: '#5C7DF3' }}>
                    CREAR
                  </Button>

                  <div className="buttons w-10/12 ">
                    <TextField
                      required
                      id="outlined-required"
                      label="Nombre Hospital"
                      onChange={(ev) => setHospital(ev.target.value)}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Numero de Casos"
                      onChange={(ev) => setCasos(ev.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                {Object.keys(allHospitales).length !== 0 ? (
                  <TableHospitales tablebody={allHospitales} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitales;
