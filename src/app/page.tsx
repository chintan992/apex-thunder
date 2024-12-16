'use client';

import { useState, useEffect } from 'react';
// import Image from 'next/image';
import AnimeList from './components/AnimeList'; // Assuming you have this component

export default function Home() {
    const [theme, setTheme] = useState('light'); // Default theme

    useEffect(() => {
        // Load user's theme preference from localStorage on component mount
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        // Update the document's class based on the theme
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

        // Save user's theme preference to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-geist-sans">
            <header className="py-6 px-8 sm:px-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Replace with your logo */}
                    {/* <Image
                        src="/vercel.svg" 
                        alt="Logo"
                        width={40}
                        height={40}
                    /> */}
                    <h1 className="text-2xl font-bold">Anime Tracker</h1>
                </div> 

                <div className="flex items-center gap-4">
                    {/* AniList Login Button */}
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Login with AniList
                    </button>
                    {/* Theme Toggle Button */}
                    <button
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <span role="img" aria-label="Light Mode">
                                ☀️
                            </span>
                        ) : (
                            <span role="img" aria-label="Dark Mode">
                                🌙
                            </span>
                        )}
                    </button>
                </div>
            </header>
            <main className="px-8 sm:px-16 py-10">
                {/* Anime List Component */}
                <AnimeList /> 
            </main>
        </div>
    );
}
