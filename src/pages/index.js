import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
export default () => (
  <Layout>
    <h1>Hello Gatsby!</h1>
    <p>This is home page</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
