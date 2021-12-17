import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Newspaper from '../Newspaper/Newspaper';


const Newspapers = () => {
  

  const [articles,setArticles]=useState([]);


  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=96ff0b7151c1457cbacb151800381c71')
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
           articles.map(article=> <Grid item xs={2} sm={4} md={4}>
              <Newspaper article={article}></Newspaper>
            </Grid>)
         }
        </Grid>
      </Box>
    );
};

export default Newspapers;