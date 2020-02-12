import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
export default () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am Pratyasmita Mishra</p>
      <Link to="/">&larr;Back to homepage</Link>
    </Layout>
  );
};
