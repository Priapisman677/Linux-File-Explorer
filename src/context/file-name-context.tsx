'use client'

import { createContext, useContext, useState } from "react";

// Type of the context value
type SearchInputContextType = {
    searchInput: string | null;
    setSearchInput: React.Dispatch<React.SetStateAction<string | null>>;
    filesShown: string | null;
    setFilesShown: React.Dispatch<React.SetStateAction<string | null>>;
};

// Create context
export const searchInputContext = createContext<SearchInputContextType | null>(null);

// Provider component
export default function SearchInputContext({ children }: { children: React.ReactNode }) {
    const [searchInput, setSearchInput] = useState<string | null>(null);
    const [filesShown, setFilesShown] = useState<string | null>(null); // ✅ array of filenames

    const value = {
        searchInput,
        setSearchInput,
        filesShown,
        setFilesShown
    };

    return (
        <searchInputContext.Provider value={value}>
            {children}
        </searchInputContext.Provider>
    );
}

// Hook to use context
export const useSearchInput = () => {
    const context = useContext(searchInputContext);
    if (!context) {
        throw new Error('useSearchInput must be used within a SearchInputContextProvider');
    }
    return context;
};
