import React, { Component } from "react";
import Number from "./Number";
export default class LuckyNumbers extends Component {
    state = {
        arrayNumber: [],
        specialNumber: ""
    };
    generateLuckyNumber = () => {
        let luckyNumbers = [];
        for (let index = 0; index < 6; index++) {
            let randomNumber = Math.floor(Math.random() * 49 + 1);
            while (luckyNumbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 49 + 1);
            }
            luckyNumbers.push(randomNumber);
        }
        this.setState({
            arrayNumber: luckyNumbers,
            specialNumber: Math.floor(Math.random() * 10 + 1)
        });
    };
    resetNumbers = () => {
        this.setState({
            arrayNumber: [],
            specialNumber: ""
        });
    };
    render() {
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
                    {this.state.arrayNumber.map((currentValue) => {
                        return <Number number={currentValue} />;
                    })}
                    {/*   {this.state.specialNumber && (
            <Number number={this.state.specialNumber} />
          )} */}
                    {this.state.specialNumber !== "" ? (
                        <Number number={this.state.specialNumber} />
                    ) : null}
                </div>
                <button onClick={this.resetNumbers}>Reset</button>
                <button onClick={this.generateLuckyNumber}>Lucky Number</button>
            </div>
        );
    }
}