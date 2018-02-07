import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TopNav from 'components/TopNav';
import SideNav from 'components/SideNav';

const PageWrapper = styled.div`
  display: flex;
  width: 100%;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .content {
    flex-grow: 1;
    padding: 0 3rem 3rem 3rem;
    margin-bottom: 2em;
    height: 100vh;
    overflow-y: auto;
  }
`;

const MainLayout = ({ children, title = 'LaunchDocs', toc }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <PageWrapper>
      <SideNav toc={toc}/>
      <main>
        <TopNav/>
        <div className='content'>{children}</div>
      </main>
    </PageWrapper>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  toc: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MainLayout;
