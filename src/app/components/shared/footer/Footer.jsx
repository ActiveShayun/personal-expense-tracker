import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-8 lg:mt-16 rounded-md">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-white text-xl font-bold mb-4">Expense Tracker</h3>
                    <p className="text-gray-400">
                        Keep track of your spending, manage budgets, and gain insights to save more effectively.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/" className="hover:text-white transition">All Expenses</a></li>
                        <li><a href="/" className="hover:text-white transition">Add Expense</a></li>
                        <li><a href="/" className="hover:text-white transition">About</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <p>Email: support@expensetracker.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition">Facebook</a>
                        <a href="#" className="hover:text-white transition">Twitter</a>
                        <a href="#" className="hover:text-white transition">LinkedIn</a>
                        <a href="#" className="hover:text-white transition">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-8">
                &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;