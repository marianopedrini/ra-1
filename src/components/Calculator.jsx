import { useState } from 'react';

export default function Calculator() {
    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    const [result, setResult] = useState(0);

    const handleSum = () => setResult(numA + numB);
    const handleSubtract = () => setResult(numA - numB);
    const handleMultiply = () => setResult(numA * numB);

    return (
        <div className="rounded-lg border border-slate-400 mt-12 p-8 dark:border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-6">Calculadora</h2>
            <div className="space-y-4">
                <input
                    type="number"
                    value={numA}
                    onChange={(e) => setNumA(Number(e.target.value))}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={numB}
                    onChange={(e) => setNumB(Number(e.target.value))}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter second number"
                />
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={handleSum}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Suma
                    </button>
                    <button
                        onClick={handleSubtract}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Resta
                    </button>
                    <button
                        onClick={handleMultiply}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                    >
                        Multiplicación
                    </button>
                </div>
            </div>
            <h3 className="text-xl font-semibold text-center mt-6">
                Resultado: <span className="text-blue-500">{result}</span>
            </h3>
        </div>
    );
}
