import React, { useState } from 'react'
import {
    Box
} from '@mui/material';

import { useAppDispatch } from '../../app/hooks';
import SearchBar from './SearchBar';
import { fetchProducts } from './homeSlice';

const Home = () => {

    const [search, setSearch] = useState<string>('');
    const dispatch = useAppDispatch();


    const onSearch = () => {
        dispatch(fetchProducts({ product: search }))
    }

    return (
        <Box >
            <SearchBar search={search} setSearch={setSearch} onSearch={onSearch} />
        </Box>
    )
}

export default Home;