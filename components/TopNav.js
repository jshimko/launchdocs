import React from 'react';
import { Link } from '../routes';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav = styled.nav`
  display: inline-flex;
  flex-shrink: 0;
  padding: 20px;
  background: linear-gradient(90deg, #20242f 2%, #3e4459 55%, #4d5975 85%, #4d5b74 100%);

  ul {
    display: inline-flex;
    list-style: none;
    margin: 0;
  }

  li {
    margin-right: 3em;
  }

  a {
    color: #fff;

    &:visited {
      color: #fff;
    }
  }
`;

const TopNav = () => (
  <Nav>
    <ul>
      <li><Link route='/'><a>Link</a></Link></li>
      <li><Link route='/'><a>Link</a></Link></li>
      <li><Link route='/'><a>Link</a></Link></li>
      <li><Link route='/'><a>Link</a></Link></li>
    </ul>
  </Nav>
);

export default TopNav;
