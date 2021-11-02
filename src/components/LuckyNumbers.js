import React, { useState, Component } from "react";
import Number from "./Number";

export default function LuckyNumbers() {

    const [arrayNumber, setArrayNumber] = useState([])

    const [specialNumber, setSpecialNumber] = useState("")


    const generateLuckyNumber = () => {
        let luckyNumbers = [];
        for (let index = 0; index < 6; index++) {
            let randomNumber = Math.floor(Math.random() * 49 + 1);
            while (luckyNumbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 49 + 1);
            }
            luckyNumbers.push(randomNumber);
        }
        setArrayNumber(
            luckyNumbers,
        );

        setSpecialNumber(
            Math.floor(Math.random() * 10 + 1)
        );
    };

    const resetNumbers = () => {
        setArrayNumber([]);
        setSpecialNumber("")

    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",

                    padding: "20px"
                }}
            >
                {arrayNumber.map((currentValue) => {
                    return <Number number={currentValue} />;
                })}
                {/*   {this.state.specialNumber && (
            <Number number={this.state.specialNumber} />
          )} */}
                {specialNumber !== "" ? (
                    <Number number={specialNumber} />
                ) : null}
            </div>
            <button onClick={resetNumbers}>Reset</button>
            <button onClick={generateLuckyNumber}>Lucky Number</button>
        </div>
    );
}
