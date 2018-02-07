import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from 'layouts/MainLayout';
import { getConfig, getHtml } from 'api/github';

const Content = styled.main`
  max-width: 60rem;

  .anchor {
    margin-left: -20px;
  }

  .octicon-link {
    visibility: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    &:hover {
      & .anchor .octicon-link {
        visibility: visible;
      }
    }
  }
`;

const DocPage = ({ content, toc }) => (
  <Layout toc={toc}>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Layout>
);

DocPage.getInitialProps = async ({ asPath, err }) => {
  const content = await getHtml(`${asPath === '/' ? '/index' : asPath}.md`);
  const config = await getConfig();
  const toc = config.tocData;
  return { content, toc, err };
};

DocPage.propTypes = {
  content: PropTypes.string,
  toc: PropTypes.arrayOf(PropTypes.object)
};

export default DocPage;
