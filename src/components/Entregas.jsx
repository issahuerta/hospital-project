import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

import { TableEntregas } from "../tables/TableEntregas";

const Entregas = () => {
  const [allEntregas, setAllEntregas] = useState([]);

  const getEntregas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/entregas");
      setAllEntregas(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEntregas();
    return () => { };
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <Header />
        <div className="content bg-blue-50 flex">
          <div className="info w-full p-7">
            <img
              src="pymo.svg" 
              alt="Logo2"
              className="w-8 h-8 mr-2"
            />
            <h1 className="font-bold text-2xl">Entregas</h1>
            <div className="CardInfo w-12/12 bg-white mt-8 rounded-xl">
              <div className="Cardheadr bg-blue-500 text-white rounded-t-xl" style={{ backgroundColor: '#E28E25' }}>
                <h1 className="p-4">Detalle de cada entrega</h1>
              </div>
              <div className="CardConten p-6">
                <div className="tienda mb-6 flex justify-between items-center"></div>
                <br></br>
                {Object.keys(allEntregas).length !== 0 ? (
                  <TableEntregas tablebody={allEntregas} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entregas;
