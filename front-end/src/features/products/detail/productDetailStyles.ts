import { styled, Box, Typography, Stack } from "@mui/material";

export const ImageProduct = styled(Box)({
    width: 680, 
    height: 680,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
    paddingBottom: 10
}) as typeof Box

export const TitleText = styled(Typography)({
    textAlign: 'left',
    fontSize: 24,
    marginTop: 16,
}) as typeof Typography

export const ConditionText = styled(Typography)({
    textAlign: 'left',
    textTransform: 'capitalize',
    marginTop: 32,
    fontSize: 14
}) as typeof Typography

export const PriceText = styled(Typography)({
    fontSize: 46
}) as typeof Typography

export const DecimalsText = styled(Typography)({
    fontSize: 32,
    marginTop: -10
}) as typeof Typography

export const PriceRow = styled(Stack)({
    flexDirection:'row',
    marginTop: '32px', 
    marginBottom: '32px',
    alignItems: 'center'
}) as typeof Stack