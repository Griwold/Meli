import React, { useState } from 'react'
import {
    Box,
    InputBase
} from '@mui/material';
import { styled } from '@mui/material/styles'

import images from '../../constants/images/index';

const TextFieldCustom = styled(InputBase)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderColor: theme.palette.searchBar.main,
    width: '100%',
    height: 40,
    marginLeft: 20,
    paddingLeft: 12,
    fontSize: 18
})) as typeof InputBase

const ImageCustom = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.searchBar.extraLightDark,
    height: 40,
    width: 40,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        cursor: 'pointer'
    }
})) as typeof Box

const Container = styled(Box)(( { theme}) => ({
    height: 70,
    backgroundColor: theme.palette.searchBar.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})) as typeof Box

const SearchBar = () => {

    const [search, setSearch] = useState<string>('');

    return (
        <Container>
            <Box display={'flex'} alignItems={'center'} width={'80vw'}>
                <img src={images.logo} alt={'mercado libre'}/>
                <TextFieldCustom
                    size='small'
                    color='primary'
                    placeholder='Nunca dejes de buscar'
                    
                />
                <ImageCustom onClick={() => console.log("ESTOY APRETANDO")}>
                    <img src={images.search} alt={'search'}/>
                </ImageCustom>
            </Box>
        </Container>
    )
}

export default SearchBar;