import React, { useState } from 'react'
import {
    Box
} from '@mui/material';

import SearchBar from './SearchBar';

const Home = () => {

    const [search, setSearch] = useState<string>('');
    
    return (
        <Box >
            <SearchBar />
        </Box>
    )
}

export default Home;