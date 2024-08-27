import { useState } from 'react';
import { generatePrimes } from '../lib/utils';

export default function ExpensiveCalculationComponent() {
    const [count, setCount] = useState(0);

    return (
        <div className="rounded-lg border border-slate-400 mt-12 p-8 dark:border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-6">Componente Pesado</h2>
            <p>
                Este componente muestra un listado de números primos. Prueba clickear
                muchas veces en el botón de re-render para ver su efecto.{' '}
                <strong>Debe ser optimizado!</strong>
            </p>
            <button
                className="rounded mt-2 py-2 px-4 bg-indigo-600 text-slate-200 dark:bg-indigo-400"
                onClick={() => setCount(count + 1)}
            >
                Re-render ({count})
            </button>

            <PrimeComponent />
        </div>
    );
}

function PrimeComponent() {
    const primes = generatePrimes(50000);

    return (
        <div>
            <h3 className="my-4 text-left">Numeros primos del 0 al 50000:</h3>
            <p className="max-h-44 overflow-y-scroll">
                {primes.reverse().join(', ')}
            </p>
        </div>
    );
}
