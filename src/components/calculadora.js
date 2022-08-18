import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "../components/calculadora.css";

const Calculadora = () => {

    const [montototalpropina, setMontototalpropina] = useState(0);
    const [propina, setPropina] = useState(0);
    const [propinaporpersona, setPropinaporpersona] = useState(0);

    const obtenerValor = (e) => {
        const { value } = e.target;
        setPropina(value);
    }

    const calcular = () => {
        let montoTotal = document.getElementById('montototalpagado').value;
        let totalPersonas = document.getElementById('cantidadpersonas').value;
        let porcentaje = propina;

        let tip = (montoTotal * porcentaje) / 100;
        let tipxpersona = tip / totalPersonas;
        setMontototalpropina(tip);
        setPropinaporpersona(tipxpersona);
    }


    const reset = () => {
        document.getElementById('montototalpagado').value = "";
        document.getElementById('tiptext').value = "";
        document.getElementById('cantidadpersonas').value = "";
        setPropinaporpersona(0);
        setMontototalpropina(0);
    }

    return (
        <>
            <h5>SPLI</h5>
            <h5>TTER</h5>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="amount">Bill</label>
                    <input type="text" className="form-control" id="montototalpagado" placeholder="Ingresa el monto total" />
                </div>
                <div className="form-group">
                    <p>Select Tip %</p>
                    <Button
                        id="tip"
                        value="5"
                        variant="contained"
                        onClick={obtenerValor}
                    >
                        5%
                    </Button>
                    <Button
                        id="tip"
                        value="10"
                        variant="contained"
                        onClick={obtenerValor}>
                        10%
                    </Button>
                    <Button
                        id="tip"
                        value="15"
                        variant="contained"
                        onClick={obtenerValor}>
                        15%
                    </Button>
                    <Button
                        id="tip"
                        value="25"
                        variant="contained"
                        onClick={obtenerValor}>
                        25%
                    </Button>
                    <Button
                        id="tip"
                        value="50"
                        variant="contained"
                        onClick={obtenerValor}>
                        50%
                    </Button>
                    <TextField
                        label="Porcentaje de propina"
                        id="tiptext"
                        onChange={obtenerValor}
                    />
                    <TextField
                        label="Cantidad de personas"
                        id="cantidadpersonas"
                    />

                </div>
                <div className="form-group">
                    <input type="button" onClick={calcular} value="Calcular" />
                </div>
                 <div className="Grid">
                    <div className="fr-2">
                        <div>
                            <p id="tipo" className="text-2"><p className="white-text">Tip Amount:</p><p>/ person</p> S/. {montototalpropina.toFixed(2)}</p>
                            <p id="tipo">La propina por persona es: S/. {propinaporpersona.toFixed(2)}</p>
                            <input type="button" onClick={reset} value="Resetear" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Calculadora;