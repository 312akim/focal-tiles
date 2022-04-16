import { useState, useEffect } from "react";

const useSearchBarResults = () => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Get and set results here
    }, [])

    return { search, setSearch };
}

export default useSearchBarResults;