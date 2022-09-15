import { styled, Box, Typography } from '@mui/material';

export const ContainerLoading = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}) as typeof Box

export const ContainerProducts = styled(Box)({
    display: 'flex',
    flexDirection: 'column'
}) as typeof Box

export const ImageProduct = styled('img')({
    height: 180,
    width: 180,
    borderRadius: 4,
    margin: 16
})

export const DataRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: 32
}) as typeof Box

export const ImageShipping = styled('img')({
    width: 'auto'
})

export const ContainerShipping = styled(Box)({
    marginLeft: 10
}) as typeof Box

export const TextPrice = styled(Typography)({
    fontSize: 24,
    lineHeight: 'normal'
}) as typeof Typography

export const TextDecimals = styled(Typography)({
    fontSize: 18
}) as typeof Typography

export const TextTitle = styled(Typography)({
    fontSize: 18,
    marginTop: 32
}) as typeof Typography

export const ContinerDivider = styled(Box)({
    display: 'flex',
    justifyContent: 'center'
}) as typeof Box

export const Divider = styled(Box)(({ theme }) => ({
    height: 1,
    backgroundColor: theme.palette.app.extraLightDark,
    marginLeft: 16,
    marginRight: 16,
    width: '100%'
})) as typeof Box