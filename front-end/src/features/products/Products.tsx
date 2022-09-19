import React from 'react';
import { Paper, Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useSearchParams, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch, useDidMountEffect } from '../../app/hooks';
import { fetchProducts } from './productSlice';
import images from '../../constants/images/index';
import Breadcrumb from '../../components/Breadcrumb';
import convertPrice from '../../utils/convertPrice';
import {
    ContainerLoading,
    ContainerProducts,
    ImageProduct,
    DataRow,
    ImageShipping,
    TextPrice,
    TextDecimals,
    ContainerShipping,
    TextTitle,
    Divider,
    ContinerDivider
} from './productsStyles';
import convertBreadcrumb from '../../utils/convertBreadcrumb';

const Products = () => {

    const navigate = useNavigate();
    const [params] = useSearchParams();
    const dispatch = useAppDispatch();
    const products = Object.values(useAppSelector(state => state.products.entities));
    const categories = useAppSelector(state => state.products.categories);
    const status = useAppSelector(state => state.products.status);
    
    // Esto nos sirve por si refrescamos la pagina y por si queremos actualizar por otra busqueda
    useDidMountEffect(() => {
        dispatch(fetchProducts({ product: params.get('search') || '' }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    const onClickToDetail = (identifier: string) => navigate(`/items/${identifier}`);

    //Cuenta cuantas veces se repite una categoria
    const repetedCategories: { [key: string]: number } = categories.reduce((acc: { [key: string]: number }, next: string) => {
        return {
            ...acc,
            [next]: acc[next] ? (acc[next] + 1) : 1
        }
    }, {})


    //Ordena de menor a mayor las categorias 
    const sortable = Object.entries(repetedCategories).sort(([, a], [, b]) => a - b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    return (
        <Box>
            {status === 'failed' &&
                <ContainerLoading >
                    <Typography>Ups.. Algo ha salido mal, intente nuevamente.</Typography>
                </ContainerLoading>
            }
            {status === 'loading' &&
                <ContainerLoading >
                    <CircularProgress size={40} color={'secondary'} />
                </ContainerLoading>
            }
            {status === 'success' &&
                <Box>
                    <Breadcrumb breadCrumbs={convertBreadcrumb(Object.keys(sortable).pop() || '')} />
                    <Paper elevation={0} sx={{ marginBottom: 2 }}>
                        {products.map((product, index) => (
                            <ContainerProducts key={product?.id}>
                                <Box display={'flex'} >
                                    <ImageProduct onClick={() => onClickToDetail(product?.id || '')} src={product?.picture} alt={product?.title} />
                                    <Stack>
                                        <DataRow>
                                            <Stack direction={'row'}>
                                                <TextPrice onClick={() => onClickToDetail(product?.id || '')}>{convertPrice(product?.price.currency || 'ARS').format(product?.price.amount || 0)}</TextPrice>
                                                <TextDecimals onClick={() => onClickToDetail(product?.id || '')}>{product?.price.decimals.toString().padStart(2, '0')}</TextDecimals>
                                            </Stack>
                                            {product?.free_shipping &&
                                                <ContainerShipping>
                                                    <ImageShipping alt={`shipping - ${product?.title}`} src={images.shippig} />
                                                </ContainerShipping>
                                            }
                                        </DataRow>
                                        <TextTitle onClick={() => onClickToDetail(product?.id || '')}>{product?.title}</TextTitle>
                                    </Stack>
                                </Box>
                                <ContinerDivider>
                                    {index !== (products.length - 1) && <Divider />}
                                </ContinerDivider>
                            </ContainerProducts>
                        ))}
                    </Paper>
                </Box>
            }

        </Box>
    )
}

export default Products;