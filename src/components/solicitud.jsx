import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import viteLogo from "/vite.svg";
import pymoLogo from "/pymo.svg";
import TextField from "@mui/material/TextField";
import "../Style/customSelect.css";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

import { TableDetalleSolicitud } from "../tables/TableDetalleSolicitud";

const Solicitudes = () => {
  const [allInsumos, setAllInsumos] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [startDate, setStartDate] = useState();
  const [detallePedido, setDetallePedido] = useState([]);
  const [hospitalSelect, setHospitalSelect] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [insumo, setInsumo] = useState([]);

  const [openAlert, setOpenAlert] = useState(false);

  const insertSolicitud = async () => {
    const params = {
      fecha: startDate,
      hospital: hospitalSelect,
      detalle_pedido: detallePedido,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/insertSolicitud",
        {
          params,
        }
      );
      if (response.status == 200) {
        setDetallePedido([]);
        renderAllInsumos();
        setCantidad([]);
        setOpenAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getInsumos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/insumos");
      setAllInsumos(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const renderAllInsumos = () => {
    if (Object.keys(allInsumos).length === 0) return;
    return allInsumos.map((allInsumos) => {
      return (
        <option>
          {allInsumos.id} - {allInsumos.nombre_insumo}
        </option>
      );
    });
  };

  const getHospital = async () => {
    try {
      const response = await axios.get("http://localhost:5000/customhospital");
      setHospital(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const renderHospitales = () => {
    if (Object.keys(hospital).length === 0) return;
    return hospital.map((hospital) => {
      return (
        <option>
          {hospital.id} - {hospital.nombre_hospital}
        </option>
      );
    });
  };
  //here is the show to insert into table
  const insertTable = async () => {
    if (openAlert == true) {
      setOpenAlert(false);
    }
    let arr = [];
    let temp = insumo.replaceAll(" ", "").split("-");

    if (Object.keys(detallePedido).length > 0) {
      detallePedido.map((detallePedido) => {
        arr.push(detallePedido);
      });
    }
    const producto = {
      id: detallePedido.length + 1,
      nombre_insumo: temp[1],
      id_insumo: temp[0],
      cantidad_solicitada: cantidad,
    };
    arr.push(producto);
    setDetallePedido(arr);
  };

  useEffect(() => {
    getInsumos();
    getHospital();
    return () => {};
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <Header />
        <div className="content bg-blue-50 flex">
          <div className="info w-full p-7">
            <h1 className="font-bold text-2xl">
              Solicitud De <span>Insumos </span>
            </h1>
            <div className="CardInfo w-12/12 bg-white mt-8 rounded-xl" >
              <div className="Cardheadr bg-blue-500 text-white rounded-t-xl " style={{ backgroundColor: '#E28E25' }}>
                <h1 className="p-4">Creacion de Solicitudes de Insumos</h1>
              </div>
              <div className="CardConten p-6" >
                <Collapse in={openAlert}>
                  <Alert severity="success">
                    Se realizo correctamente la solicitud de los insumos!
                  </Alert>
                  <br />
                </Collapse>
                <div className="dates mb-6 flex justify-between items-center">
                  <h1 className="w-1/12 text-sm text-black">Fecha de Orden</h1>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      slotProps={{ textField: { size: "small" } }}
                      onChange={(data) => setStartDate(data)}
                      className="w-3/12"
                    />
                  </LocalizationProvider>

                  <h1 className="w-1/12 text-sm text-black">Hospitales</h1>
                  <select
                    className="selectCustom"
                    onChange={(e) => setHospitalSelect(e.target.value)}
                  >
                    <option>Seleccione un Hospital</option>
                    {renderHospitales()}
                  </select>
                </div>
                <div className="dates mb-6 flex justify-between items-center">
                  <h1 className="w-1/12 text-sm text-black">Insumos</h1>
                  <select
                    className="selectCustom"
                    onChange={(e) => setInsumo(e.target.value)}
                  >
                    <option>Seleccione un Insumo</option>
                    {renderAllInsumos()}
                  </select>
                  <h1 className="w-1/12 text-sm text-black">Cantidad</h1>
                  <TextField
                    id="outlined-number"
                    type="number"
                    className="w-3/12"
                    InputLabelProps={{ textField: { size: "small" } }}
                    onChange={(ev) => setCantidad(ev.target.value)}
                  />
                </div>
                <div className="w-4/12 m-1 mb-3 flex justify-between items-center">
                  <Button variant="contained" style={{ backgroundColor: '#5C7DF3'}} onClick={insertTable}>
                    Agregar Insumos
                  </Button>
                  <Button variant="contained" style={{ backgroundColor: '#5C7DF3'}} onClick={insertSolicitud} >
                    Generar Solicitud
                  </Button>
                </div>
                <br></br>
                {Object.keys(detallePedido).length !== 0 ? (
                  <TableDetalleSolicitud tablebody={detallePedido} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solicitudes;
