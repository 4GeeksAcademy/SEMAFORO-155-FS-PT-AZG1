import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("yellow");

  // const colores = ["red", "yellow", "green"];

  // const cambiarColor = () => {
  //   const actualIndex = colores.indexOf(color);
  //   const nextIndex = (actualIndex + 1) % colores.length;
  //   setColor(colores[nextIndex]);
  // }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div
        style={{
          width: "13px",
          height: "100px",
          backgroundColor: "black",
        }}
      ></div>

      
      <div
        className="d-flex flex-column align-items-center bg-dark p-4 rounded"
        style={{ width: "125px" }}
      >
        <div
          className={`rounded-circle bg-danger m-2 p-4 ${
            color === "red" ? "opacity-100" : "opacity-25"
          }`}
		  style={{width: "80px", height: "80px"}}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={`rounded-circle bg-warning m-2 p-4 ${
            color === "yellow" ? "opacity-100" : "opacity-25"
          }`}
		  style={{width: "80px", height: "80px"}}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={`rounded-circle bg-success m-2 p-4 ${
            color === "green" ? "opacity-100" : "opacity-25"
          }`}
		  style={{width: "80px", height: "80px"}}
          onClick={() => setColor("green")}
        ></div>
      </div>
{/* <button className="btn btn-primary mt-3" onClick={cambiarColor}>
  Cambiar color!
</button> */}

    </div>
  );
};

export default Home;



