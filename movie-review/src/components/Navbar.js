import React from 'react'

const Navbar = ({icon,title}) => {
  return (
    <div>
      <nav className='navbar bg-nav'>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </nav>
    </div>
  )
}
Navbar.defaultProps = {
  title: 'Movie-Finder',
  icon: 'fas fa-film'
};
export default Navbar;