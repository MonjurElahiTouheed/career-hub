import { Link, NavLink } from "react-router";
import Container from "../Layout/Container";
import Button from "../Layout/Button";
const Header = () => {

  const links =
    <>
      <li><NavLink to='/' className={({ isActive }) =>
        `font-bold font-primary text-base ${isActive ? "text-transparent bg-clip-text bg-linear-to-r from-gradinet-from to-gradinet-to bg-transparent" : "hover:text-violet-500 hover:bg-transparent"
        }`
      }>Home</NavLink></li>

      <li><NavLink to='/applied' className={({ isActive }) =>
        `font-bold font-primary text-base ${isActive ? "text-transparent bg-clip-text bg-linear-to-r from-gradinet-from to-gradinet-to bg-transparent" : "hover:text-violet-500 hover:bg-transparent"
        }` 
      }>Applied Jobs</NavLink></li>
    </>

  return (
    <Container>
      <div className="navbar bg-tranparent p-5 pt-[40px] md:pt-[50px] md:p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to='/' className="font-primary font-extrabold text-dark-primary text-[32px]">CareerHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-[42px] menu-horizontal px-1 font-primary font-bold text-base">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Button className='px-7 py-[19px] rounded-lg'>Star Applying</Button>
        </div>
      </div>

    </Container>
  );
};

export default Header;