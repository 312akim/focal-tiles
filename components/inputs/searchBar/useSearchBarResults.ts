import { useState, useEffect } from "react";

import React from 'react';

const useSearchBarResults = () => {
    const [show, setShow] = useState(false);
    const [results, setResults] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Get and set results here
    }, [])

    return { show, results, search, setShow, setSearch };
}

export default useSearchBarResults;