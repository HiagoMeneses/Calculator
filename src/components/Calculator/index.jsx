import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import "./Calculator.css";
// import { Container } from './styles';

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setoldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear(e) {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSing() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setoldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  const digitos = [
    { digito: "AC", onClick: clear, color: "white" },
    { digito: "+/-", onClick: changeSing, color: "white" },
    { digito: "%", onClick: porcentage, color: "white" },
    { digito: "/", onClick: operatorHandler, color: "orange" },
    { digito: 7, onClick: inputNum, color: "gray" },
    { digito: 8, onClick: inputNum, color: "gray" },
    { digito: 9, onClick: inputNum, color: "gray" },
    { digito: "X", onClick: operatorHandler, color: "orange" },
    { digito: 4, onClick: inputNum, color: "gray" },
    { digito: 5, onClick: inputNum, color: "gray" },
    { digito: 6, onClick: inputNum, color: "gray" },
    { digito: "-", onClick: operatorHandler, color: "orange" },
    { digito: 1, onClick: inputNum, color: "gray" },
    { digito: 2, onClick: inputNum, color: "gray" },
    { digito: 3, onClick: inputNum, color: "gray" },
    { digito: "+", onClick: operatorHandler, color: "orange" },
    { digito: 0, onClick: inputNum, color: "gray" },
    { digito: ".", onClick: inputNum, color: "gray" },
    { digito: ",", onClick: operatorHandler, color: "gray" },
    { digito: "=", onClick: calculate, color: "orange" },
  ];

  const handlerButton = (data) => {
    return data.map((element) => (
      <button
        key={element.digito}
        className={element.color}
        onClick={element.onClick}
        value={element.digito}
        style={{
          visibility: `${element.digito !== "," ? "visible" : "hidden"}`,
        }}
      >
        {element.digito}
      </button>
    ));
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="result">{num}</h1>
          {handlerButton(digitos)}
        </div>
      </Container>
    </div>
  );
}
