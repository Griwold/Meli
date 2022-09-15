import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchBar from '../../components/SearchBar';

import Home from '../home/Home'
import Products from "../products/Products";

const App = () => {
    return (
        <BrowserRouter>
            <SearchBar />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box width={'80%'}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/items" element={<Products />} />
                    </Routes>
                </Box>
            </Box>
        </BrowserRouter>
    )
}

export default App;