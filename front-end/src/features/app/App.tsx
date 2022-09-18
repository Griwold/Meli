import React from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchBar from '../../components/SearchBar';

import Home from '../home/Home'
import Products from "../products/Products";
import ProductDetail from "../products/detail/ProductDetail";
import { Container } from './appStyles';

const App = () => {
    return (
        <BrowserRouter>
            <Box minWidth={'fit-content'}>
                <SearchBar />
                <Container>
                    <Box width={'80%'}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/items" element={<Products />} />
                            <Route path="/items/:id" element={<ProductDetail />} />
                        </Routes>
                    </Box>
                </Container>
            </Box>
        </BrowserRouter>
    )
}

export default App;