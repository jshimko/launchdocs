import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../routes';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 350px;
  background: linear-gradient(180deg, #20242f 25%, #3e4459 55%, #4d5975 85%, #4d5b74 100%);

  .logo {
    flex-shrink: 0;
    background-color: #20242f;
    font-size: 1.5rem;
    color: white;
    padding: 15px;

    &:hover {
      text-decoration: none;
    }
  }

  .toc {
    flex-grow: 1;
    height: 100vh;
    overflow-y: auto;
    padding: 1rem;
    color: #fff;

    a {
      padding: 0 15px;
      color: #FFF;
      font-weight: normal;

      &:hover {
        text-decoration: none;
      }

      &:visited {
        color: #FFF;
      }
    }

    ul {
      list-style: none;
      margin: 0;
    }

    li {
      margin-bottom: 20px;
    }
  }
`;

const SideNav = ({ toc }) => (
  <Nav>
    <div className='logo'>
      <Link route='/'><a className='logo'>Reaction Docs</a></Link>
    </div>
    <div className='toc'>
      <ul>
        {!!toc && toc.map((item, i) => (
          <li key={i}>
            <Link route={`/${item.docPath.substring(0, item.docPath.length - 3)}`}><a>{item.label}</a></Link>
          </li>
        ))}
      </ul>
    </div>
  </Nav>
);

SideNav.propTypes = {
  toc: PropTypes.arrayOf(PropTypes.object)
};

export default SideNav;
