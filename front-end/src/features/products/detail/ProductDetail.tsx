import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Box, CircularProgress, Stack, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchProductDetail } from '../productSlice';
import { ContainerLoading, BuyButton, ContainerShipping, ImageShipping } from '../productsStyles';
import Breadcrumb from '../../../components/Breadcrumb';
import convertPrice from '../../../utils/convertPrice';
import images from '../../../constants/images/index';
import { ImageProduct, ConditionText, TitleText, PriceText, DecimalsText, PriceRow } from './productDetailStyles';

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
                            <ImageProduct>
                                <img src={product?.picture} alt={product?.title} />
                            </ImageProduct>
                            <Stack width={243}>
                                <ConditionText >{product?.condition} - {product?.sold_quantity} vendidos</ConditionText>
                                <TitleText >{product?.title}</TitleText>
                                <PriceRow>
                                    <PriceText>{convertPrice(product?.price.currency || '').format(product?.price.amount || 0)}</PriceText>
                                    <DecimalsText>{product?.price.decimals.toString().padStart(2, '0')}</DecimalsText>
                                    {product?.free_shipping &&
                                        <ContainerShipping marginTop={'-12px'}>
                                            <ImageShipping alt={`shipping - ${product?.title}`} src={images.shippig} />
                                        </ContainerShipping>
                                    }
                                </PriceRow>
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