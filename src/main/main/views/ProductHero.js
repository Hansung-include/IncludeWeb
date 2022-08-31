import * as React from 'react';
import Button from '../components/Button';
import {Link} from 'react-scroll';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

import backgroundImage from '../../../Image/main.jpg';


export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        #include
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        학술 동아리
      </Typography>
      <Link to='arrow' spy={true} smooth={true}>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        // href="/premium-themes/main/sign-up/"
        sx={{ minWidth: 200 }}
      >

          Activity
      </Button>
      </Link>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Hansung Univ
      </Typography>
    </ProductHeroLayout>
  );
}
