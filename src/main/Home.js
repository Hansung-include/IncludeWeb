import * as React from 'react';
import ProductHero from './main/views/ProductHero';
import ProductValues from './main/views/ProductValues';
import withRoot from './main/withRoot';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
    </React.Fragment>
  );
}

export default withRoot(Index);
