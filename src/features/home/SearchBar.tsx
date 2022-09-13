import React, { FC } from 'react'
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
    borderColor: theme.palette.app.main,
    width: '100%',
    height: 40,
    marginLeft: 20,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 18,
    '& .css-7dqvty-MuiInputBase-input': {
        paddingBottom: 0,
        paddingTop: 0
    }
})) as typeof InputBase

const ImageCustom = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.app.extraLightDark,
    height: 40,
    width: 40,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        cursor: 'pointer'
    }
})) as typeof Box

const Container = styled(Box)(({ theme }) => ({
    height: 70,
    backgroundColor: theme.palette.app.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})) as typeof Box

interface SearchBarType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void
}

const SearchBar: FC<SearchBarType> = ({ search, setSearch, onSearch}) => {

    return (
        <Container>
            <Box display={'flex'} alignItems={'center'} width={'80vw'}>
                <img src={images.logo} alt={'mercado libre'} />
                <TextFieldCustom
                    size='small'
                    color='primary'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Nunca dejes de buscar'
                />
                <ImageCustom onClick={onSearch}>
                    <img src={images.search} alt={'search'} />
                </ImageCustom>
            </Box>
        </Container>
    )
}

export default SearchBar;