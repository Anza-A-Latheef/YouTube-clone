import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, updateSearchQuery, isSearchActive, setIsSearchActive  }}>
            {children}
        </SearchContext.Provider>
    );
};
