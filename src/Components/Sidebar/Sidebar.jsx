import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css';
import MenuIcon from '@mui/icons-material/Menu';


const Sidebar = () => {
 

  return (
    <div>
      <ul style={{backgroundColor:"#F7BB3F"}}>
        <li>
          <Link to='/filter' 
           style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }}>
            MEN
            </Link>
        </li>
        <li>
          <Link to='/filter'
           style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }}>
            WOMEN
            </Link>
        </li>
        <li>
          <Link to='/login'  
          style={{ textDecoration: 'none', color: 'black',fontSize:'20px'  }}>
            LOGIN
            </Link>
        </li>
        <li>
          <Link to='/'
           style={{ textDecoration: 'none', color: 'black',fontSize:'20px'  }}>
            Home
            </Link>
        </li>
        <li>
          <Link to='/wishlist' 
           style={{ textDecoration: 'none', color: 'black',fontSize:'20px'  }}>
            WishList
            </Link>
        </li>
        <li>
          <Link to='/cart'
           style={{ textDecoration: 'none', color: 'black',fontSize:'20px'}}>
            Cart
            </Link>
        </li>
        <li>
          <Link to='/filter' 
           style={{ textDecoration: 'none', color: 'black',fontSize:'20px'  }}>
            Search by Filter
            </Link>
        </li>
        <li>
          <Link to='/order'  
          style={{ textDecoration: 'none', color: 'black',fontSize:'20px'  }}>
            Orderlist
            </Link>
        </li>
        <li>
          <Link to='/profile'  
          style={{ textDecoration: 'none', color: 'black',fontSize:'20px'  }}>
            profile
            </Link>
        </li>
      </ul>

      {/* Button to close the sidebar */}
    </div>
  );
};

export default Sidebar;
