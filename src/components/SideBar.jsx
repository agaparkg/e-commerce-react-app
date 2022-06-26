function SideBar() {
  return (
    <div className='sidebar-overlay'>
      <aside className='sidebar'>
        {/* close */}
        <button className='sidebar-close'>
          <i className='fa fa-times'></i>
        </button>
        {/* links */}
        <ul className='sidebar-links'>
          <li>
            <a href='index.html' className='sidebar-link'>
              <i className='fa fa-home fa-fw'></i>
              home
            </a>
          </li>
          <li>
            <a href='products.html' className='sidebar-link'>
              <i className='fa fa-couch fa-fw'></i>
              products
            </a>
          </li>
          <li>
            <a href='about.html' className='sidebar-link'>
              <i className='fa fa-book fa-fw'></i>
              about
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
