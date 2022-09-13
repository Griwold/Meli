import React, { useState } from 'react'
import {
    Box
} from '@mui/material';

import SearchBar from './SearchBar';

const Home = () => {

    const [search, setSearch] = useState<string>('');

    const onSearch = () => {
        console.log('Apretando')
    }
    
    return (
        <Box >
            <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
        </Box>
    )
}

export default Home;