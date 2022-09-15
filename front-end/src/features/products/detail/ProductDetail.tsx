import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Box, CircularProgress, Stack, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchProductDetail } from '../productSlice';
import { ContainerLoading, BuyButton, ContainerShipping, ImageShipping } from '../productsStyles';
import Breadcrumb from '../../../components/Breadcrumb';
import convertPrice from '../../../utils/convertPrice';
import images from '../../../constants/images/index';

const ProductDetail = () => {

    const params = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => state.products.product_detail);
    const status_detail = useAppSelector(state => state.products.status_detail);
    console.log(product, 'product');

    useEffect(() => {
        dispatch(fetchProductDetail({ identifier: params.id || '' }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box>
            {status_detail === 'loading' &&
                <ContainerLoading >
                    <CircularProgress size={40} color={'secondary'} />
                </ContainerLoading>
            }
            {status_detail === 'success' &&
                <Box>
                    <Breadcrumb breadCrumbs={['Mjicho', 'tito', 'gordo', 'cabezon']} />
                    <Paper elevation={0} sx={{ marginBottom: 2 }}>
                        <Stack direction={'row'} justifyContent={'space-around'}>
                            <Box width={680} height={680} display={'flex'} justifyContent={'center'} marginTop={'32px'} paddingBottom={10}>
                                <img src={product?.picture} alt={product?.title} />
                            </Box>
                            <Stack width={243}>
                                <Typography sx={{ marginTop: '32px', textAlign: 'left' }} fontSize={14}>{product?.condition} - {product?.sold_quantity} vendidos</Typography>
                                <Typography sx={{ marginTop: '16px', textAlign: 'left' }} fontSize={24}>{product?.title}</Typography>
                                <Stack direction={'row'} sx={{ marginTop: '32px', marginBottom: '32px' }} alignItems={'center'}>
                                    <Typography fontSize={46}>{convertPrice(product?.price.currency || '').format(product?.price.amount || 0)}</Typography>
                                    <Typography fontSize={32} sx={{ marginTop: '-10px' }}>{product?.price.decimals.toString().padStart(2, '0')}</Typography>
                                    {product?.free_shipping &&
                                        <ContainerShipping>
                                            <ImageShipping alt={`shipping - ${product?.title}`} src={images.shippig} />
                                        </ContainerShipping>
                                    }
                                </Stack>
                                <BuyButton variant="contained">Comprar</BuyButton>
                            </Stack>
                        </Stack>
                        {product?.description &&
                            <Stack marginLeft={'32px'} width={680}>
                                <Typography fontSize={28} marginBottom={'32px'}>Descripción del producto</Typography>
                                <Typography fontSize={16} marginBottom={'32px'} color='app.lightDark'>{product?.description}</Typography>
                            </Stack>
                        }
                    </Paper>
                </Box>
            }

        </Box>
    )
}

export default ProductDetail;