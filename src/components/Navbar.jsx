import { Moon, Sun1 } from 'iconsax-react';

export default function Navbar() {
    // const { theme, toggleTheme } = useTheme();

    const handleToggle = () => {
        // toggleTheme();
    };

    return (
        <nav className="flex h-20 items-center justify-between border-b">
            <h1 className="text-2xl">React Advanced 1</h1>
            <button
                onClick={handleToggle}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-md border border-darkmode dark:border-white"
            >
                <Moon size={20} />
                {/* {theme ? <Sun1 size={20} /> : <Moon size={20} />} */}
            </button>
        </nav>
    );
}
