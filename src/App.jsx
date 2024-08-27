import AnimatedComponent from './components/AnimatedComponent';
import Calculator from './components/Calculator';
import ExpensiveCalculationComponent from './components/ExpensiveCalculationComponent';
import Navbar from './components/Navbar';

// import { useTheme, ThemeContext } from './context/ThemeContext';

import './App.css';

function App() {
    // const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Navbar />
            <ExpensiveCalculationComponent />
            <Calculator />
            <AnimatedComponent />
        </>
    );
}

export default App;
