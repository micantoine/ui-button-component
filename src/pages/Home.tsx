import { type FC } from 'react';
import { Link } from "react-router-dom";
import PageTitle from '../components/PageTitle';

const Home: FC = () => {
  return (
    <>
      <PageTitle>Material UI</PageTitle>
      <ul>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
