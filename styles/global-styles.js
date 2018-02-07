import { injectGlobal } from 'styled-components';
import Shevy from 'shevyjs';

const shevy = new Shevy({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  baseFontScale: [3, 2.5, 2, 1.5, 1.25, 1],
  addMarginBottom: true,
  proximity: true,
  proximityFactor: 0.25
});

const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  content
} = shevy;

const baseFontColor = '#222';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    box-sizing: border-box;
    overflow: hidden;
    font-family: 'futura-pt', sans-serif;
  }

  .root {
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'freight-text-pro', sans-serif;
    color: ${baseFontColor};
  }

  h1 {
    font-size: ${h1.fontSize};
    line-height: ${h1.lineHeight};
    margin-bottom: ${h1.marginBottom};
  }

  h2 {
    font-size: ${h2.fontSize};
    line-height: ${h2.lineHeight};
    margin-bottom: ${h2.marginBottom};
  }

  h3 {
    font-size: ${h3.fontSize};
    line-height: ${h3.lineHeight};
    margin-bottom: ${h3.marginBottom};
  }

  h4 {
    font-size: ${h4.fontSize};
    line-height: ${h4.lineHeight};
    margin-bottom: ${h4.marginBottom};
  }

  h5 {
    font-size: ${h5.fontSize};
    line-height: ${h5.lineHeight};
    margin-bottom: ${h5.marginBottom};
  }

  h6 {
    font-size: ${h6.fontSize};
    line-height: ${h6.lineHeight};
    margin-bottom: ${h6.marginBottom};
  }

  p, section {
    font-size: ${content.fontSize};
    line-height: ${content.lineHeight};
    margin-bottom: ${content.marginBottom};
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${baseFontColor};

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${baseFontColor};
    }
  }

  ul {
    margin: 0;
    padding: 0 0 0 1.7em;
  }
`;
