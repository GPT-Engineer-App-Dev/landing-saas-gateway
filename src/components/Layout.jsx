import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">SaaSCo</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
                            <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>&copy; 2024 SaaSCo. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
