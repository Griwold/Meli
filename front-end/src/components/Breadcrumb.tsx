import React, { FC } from 'react'
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadCrumbType {
    breadCrumbs: string[]
}

const Breadcrumb: FC<BreadCrumbType> = ({ breadCrumbs }) => (
    <Breadcrumbs
        sx={{ marginTop: '16px', marginBottom: '16px' }}
        separator={<NavigateNextIcon fontSize="small" style={{ color: '#999999' }} />}
        aria-label="breadcrumb"
    >
        {breadCrumbs.map((item: string) => {
            if (item) {
                return (
                    <Typography key={item} fontSize={14} color="app.lightDark">
                        {item}
                    </Typography>
                )
            }
        })}
    </Breadcrumbs>
)



export default Breadcrumb;