export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-md">
            <div className="container-section py-6 text-center text-sm text-gray-600 dark:text-gray-400">
                <span>
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                        Portfolio
                    </span>{" "}
                    — Built with React, Vite & Tailwind
                </span>
            </div>
        </footer>
    );
}
