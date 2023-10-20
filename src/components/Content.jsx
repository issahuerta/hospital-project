import React from "react";

const Content = () => {
  return (
    <div className="hero min-h-full dark:bg-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm mx-auto text-center">
            <img
              src="PYMO3_BLANCO.svg"
              alt="Logo"
              className="max-w-sm"
            />
            <h1 className="font-pymo text-5xl font-bold ">
              PANEL PARA LA ADMINISTRACION DE INSUMOS MEDICOS
            </h1>
            <p className=" font-pymoo py-6">
              El objetivo de este panel es llevar un control del inventario de los distintos hospitales registrados
            </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
