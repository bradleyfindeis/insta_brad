import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <Header textAlign="center" as="h3"> Welcome To <Link to="/apps">INSTA_BRAD</Link></Header>
)

export default Home;