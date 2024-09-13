import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="/">Catalog</Link>
          </li>
        </ul>
      </header>
      <Outlet></Outlet>
    </>
  );
}
