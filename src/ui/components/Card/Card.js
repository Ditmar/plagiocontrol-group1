import React from 'react'
import {Box, Paper, ButtonBase, styled, Typography, Grid } from "@material-ui/core"
export const Cards = () => {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '140px',
    maxHeight: '210px',
  });
  return (
    <Paper
    sx={{
      p: 3,
      margin: 'auto',
      maxWidth: '499px',
      maxHeight: '300px',
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2}>
      
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h2" component="div">
             Autor. Ing. Raul Gomez
            </Typography>
            <Typography variant="body2" gutterBottom>
            Analisis de la investigacion sobre radio en bolivia...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              322 pages
            </Typography>
          </Grid>
          
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Box>
          <Typography hreft="#">ver detales</Typography>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src="https://source.unsplash.com/random" />
        </ButtonBase>
        </Box>
      </Grid>
    </Grid>
  </Paper>
    
  );
}




