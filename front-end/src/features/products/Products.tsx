import React, { useEffect } from 'react'
import { Paper, Box, CircularProgress, Typography  } from '@mui/material';
import { useSearchParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchProducts } from './productSlice';
import images from '../../constants/images/index';
import Breadcrumb from '../../components/Breadcrumb';

const Products = () => {

    const [params] = useSearchParams();
    const dispatch = useAppDispatch();
    const products = Object.values(useAppSelector(state => state.products.entities));
    const categories = useAppSelector(state => state.products.categories);
    const status = useAppSelector(state => state.products.status);

    useEffect(() => {
        dispatch(fetchProducts({ product: params.get('search') || '' }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    let pesoARS = (currency: string) => Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0
    });

    const repetedCategories: { [key: string]: number } = categories.reduce((acc: { [key: string]: number }, next: string) => {
        return {
            ...acc,
            [next]: acc[next] ? (acc[next] + 1) : 1
        }
    }, {})

    const sortable = Object.entries(repetedCategories).sort(([,a],[,b]) => a - b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
 
    return (
        <Box display={'flex'} >
            {status === 'loading' && <CircularProgress size={40} color={'secondary'} />}
            {status === 'success' &&
                <Box width={'100%'}>
                    <Breadcrumb breadCrumbs={[Object.keys(sortable).pop() || '', params.get('search') || '']} />
                    <Paper elevation={0}>
                        {products.map((product, index) => (
                            <Box display={'flex'} flexDirection={'column'}>
                                <Box display={'flex'} >
                                    <img style={{ height: 180, width: 180, borderRadius: 4, margin: 16 }} src={product?.picture} alt={product?.title} />
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Box display={'flex'} alignItems={'center'} marginTop={'32px'}>
                                            <Box display={'flex'}>
                                                <Typography fontSize={24} sx={{ lineHeight: 'normal' }}>{pesoARS(product?.price.currency || 'ARS').format(product?.price.amount || 0)}</Typography>
                                                <Typography fontSize={18} >{product?.price.decimals.toString().padStart(2, '0')}</Typography>
                                            </Box>
                                            {product?.free_shipping && <Box marginLeft={'10px'}>
                                                <img style={{ width: 'auto' }} alt={`shipping - ${product?.title}`} src={images.shippig} />
                                            </Box>}
                                        </Box>
                                        <Typography fontSize={18} marginTop={'32px'}>{product?.title}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    {index !== (products.length - 1) && <Box sx={{ height: '1px', backgroundColor: '#EEEEEEEE', marginLeft: '16px', marginRight: '16px', width: '100%' }} />}
                                </Box>
                            </Box>
                        ))}
                    </Paper>
                </Box>
            }

        </Box>
    )
}

export default Products;