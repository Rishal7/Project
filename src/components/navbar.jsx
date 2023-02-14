import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-400">
      <nav className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <ul>
          <CustomLink to="/provision">Provision</CustomLink>
          <CustomLink to="/history">History</CustomLink>
          <CustomLink to="/complaints">Complaints</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
