import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
 
const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();
  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} style={{backgroundColor:"gray",height:"3rem",width:"3rem",margin:"2rem", borderRadius:'.5rem'}}/>{' '}
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Hello World"
        items={['home', 'services', 'about', 'contact']}
        titleStyle={{ backgroundColor: '#4CAF50'}}
        itemStyle={{ backgroundColor: '#fff' }}
        itemHoverStyle={{ backgroundColor: '#CDDC39' }}
      />
    </div>
  );
};

export default MyComponent