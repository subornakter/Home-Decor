import React from 'react';
import { Link, NavLink } from 'react-router'
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               <NavLink to="/" className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Home</NavLink>   
      <NavLink to="/readList" className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Products</NavLink> 
     <NavLink to="/PagesToChart"className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Wishlist</NavLink>
     
      </ul>
    </div>
    <a className=" text-2xl font-bold">Home Decor</a>
  </div>
  <div className="navbar-center ">
   
  </div>
  <div className="navbar-end ">
     <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <NavLink to="/" className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Home</NavLink>   
      <NavLink to="/products" className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Products</NavLink> 
     <NavLink to="/wishlist"className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Wishlist</NavLink>
    </ul>
    
      <NavLink to='/products' className='btn bg-amber-200'>
          Visit Shop
        </NavLink>
  </div>
</div>
    );
};

export default NavBar;