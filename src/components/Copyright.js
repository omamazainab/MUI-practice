import React from 'react'
import { Typography, Link } from '@material-ui/core'

export const Copyright = () => {
    return (
        <Typography variant="body2"  align="center" background="backgroundPaper" style={{background:'black', color:'white'}}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Omama Zainab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}