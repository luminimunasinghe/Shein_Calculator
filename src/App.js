import { useState } from "react";
import "./App.css";

function App() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const n = Number(number);

        if (isNaN(n)) {
            return setResult("Please enter a valid number");
        }

        if (n > 28) {
            return setResult(
                "The entered product value exceeds $28. Please contact Lily Heaven."
            );
        }

        let calculation;
        if (n < 2) {
            calculation = (n + 0.5) * 300 + 280;
        } else if (n >= 2 && n < 3) {
            calculation = (n + 1) * 300 + 450;
        } else if (n >= 3 && n < 5) {
            calculation = (n + 2) * 300 + 550;
        } else if (n >= 5 && n < 8) {
            calculation = (n + 3) * 300 + 950;
        } else if (n >= 8 && n < 10) {
            calculation = (n + 3) * 300 + 1150;
        } else if (n >= 10 && n < 12) {
            calculation = (n + 4) * 300 + 1250;
        } else if (n >= 12 && n < 16) {
            calculation = (n + 5) * 300 + 1500;
        } else if (n >= 16 && n < 20) {
            calculation = (n + 6) * 300 + 1780;
        } else if (n >= 20 && n < 23) {
            calculation = (n + 7) * 300 + 1990;
        } else if (n >= 23 && n < 25) {
            calculation = (n + 8) * 300 + 2200;
        } else {
            calculation = (n + 5) * 300 + 1500;
        }

        setResult(calculation);
    };


    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleCalculate();
    };

    const handleReset = () => {
        setNumber("");
        setResult(null);
    };

    return (
        <div
            className="Main"
            style={{
                minHeight: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.jpeg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <header className="Header">
                <img src="/Lily.png" alt="Logo" className="logo" />
                <span className="title">Lily Heaven</span>
            </header>

            <div className="container">
                <h1>Shein Price Calculator</h1>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Please enter Dollar value"
                />
                <div className="button-group">
                    <button onClick={handleCalculate}>Calculate</button>
                    <button onClick={handleReset} className="reset-btn">Reset</button>
                </div>

                {result !== null && (
                    <>
                        <p
                            className={`result ${
                                typeof result === "string" && isNaN(Number(result))
                                    ? "result-alert"
                                    : ""
                            }`}
                        >
                            {typeof result === "number" ? `Price Rs: ${result}` : result}
                        </p>
                        {typeof result === "number" && (
                            <p className="note">
                                *Kindly note that the final price is subject to change depending on the item's weight.
                            </p>
                        )}
                    </>
                )}

                <p className="note1">
                    *Please contact Lily Heaven for price calculations on shoes and trousers.
                </p>
                <div className="footer">
                    <p>Powered by -- Lumii</p>
                </div>
            </div>
        </div>
    );
}

export default App;
