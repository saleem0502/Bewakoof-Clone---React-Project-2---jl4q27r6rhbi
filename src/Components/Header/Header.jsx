import React, { useEffect } from 'react'
import "../Header/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Paper, InputBase, Avatar, MenuItem, Menu, Divider, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useStateProvider } from '../../Utils/StateProvider';
import { Badge } from '@mui/icons-material';

const Header = () => {

  const [{ products, token, wishlistProducts }, dispatch] = useStateProvider();

  const [search, setSearch] = useState('');
  const [sidebar , setSidebar] = useState(false);
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [wish, setWishlist] = useState([]);
  const [logout, setLogout] = useState(false);

  const navigate = useNavigate();

  
  const userName = localStorage.getItem("userName") || "";

  const handleAvatarClick = (event) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };

  useEffect(() =>{
    var productCart = JSON.parse(localStorage.getItem('products')) || [];
    var filteredItem = productCart.filter((obj) => obj.cart === true);
    setCartCount(filteredItem?.length);
  },[JSON.parse(localStorage.getItem('products'))]);

  const handleAvatarClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAvatarMenuAnchorEl(null);
    setLogout(true);
    navigate("/");
  };

  useEffect(()=>{
    let wished = JSON.parse(localStorage.getItem('products'))?.filter(
      (obj) => obj.wishList === true,);
      console.log(wished);
      if(wished !== undefined){
        setWishlist(wished);
      }
  },[]);

  useEffect(()=>{
    console.log("meri wish", wish);
  },[wish]);

  useEffect(() => {
    const updatedWishlist = JSON.parse(
      localStorage.getItem("products"),
    )?.filter((obj) => obj.wishList === true);
    if (updatedWishlist) {
      setWishlist(updatedWishlist);
    }
  }, [localStorage.getItem("products")]);

  const handleChangeKey = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const updatedPost1 = products.filter((post) =>
      post.brand.toLowerCase().includes(searchValue),
    );
    const updatedPost2 = products.filter((post) => post.price === searchValue);
    const updatedPost3 = products.filter((post) =>
      post.subCategory.toLowerCase().includes(searchValue),
    );
    const updatedPost4 = products.filter((post) =>
      post.sellerTag.toLowerCase().includes(searchValue),
    );
    const updatedPost5 = products.filter((post) =>
      post.gender.toLowerCase().includes(searchValue),
    );
    const result = [
      ...updatedPost1,
      ...updatedPost2,
      ...updatedPost3,
      ...updatedPost4,
      ...updatedPost5,
    ];
    // Remove duplicate objects based on the _id property
    const uniqueResult = result.reduce((unique, item) => {
      if (!unique.some((uniqueItem) => uniqueItem._id === item._id)) {
        unique.push(item);
      }
      return unique;
    }, []);

    console.log(result);
    dispatch({ type: "SET_SEARCHRESULT", payload: result });
    navigate("/");
    navigate("/search");
  };
  

  const handleToggleMenu = () => {
    // console.log("yes")
    setSidebar(!sidebar);
    // dispatch(toggleMenu());
}

  return (
    <>
      <div className='header'>
        <div className='left-side'>

          
            <img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg' alt='bewakoof-logo' 
             onClick={() => navigate("/")}/>
        </div>

        <div className='Items'>
          <p><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>MEN</Link></p>
          <p ><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>WOMEN</Link></p>

        </div>

        <div className='right-side'>
          <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 300, }}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              onChange={handleChangeKey}
              placeholder="Search....."
            />
          </Paper>

        <Divider orientation="vertical" className="vertical-divider" />

          <div className='icons'>
          {token ? (
            <>
            {wish?.length === 0 ? (
              <FavoriteBorderIcon
                sx={{ cursor: "pointer",fontSize:'2.4rem' }}
                onClick={() => navigate("/wishlist")}
              />
            ) : (
              <FavoriteIcon
                sx={{
                  cursor: "pointer",
                  color: "red",
                  fontSize:'2.4rem',
                  ":hover": { transform: "scale(1.6)" },
                  transition: "transform 0.5s",
                }}
                onClick={() => navigate("/wishlist")}
              />
            )}
            

              {cartCount !== 0 ? (
              <ShoppingBagOutlinedIcon
                className='icon'
                sx={{ fontSize: '2.4rem', cursor: 'pointer' }}
                onClick={() => navigate("/cart")}
                 />
              
            ) : (

              <ShoppingBagOutlinedIcon
                  sx={{ cursor: "pointer",padding:'10px',fontSize:'2.4rem' }}
                  onClick={() => navigate("/cart")}
                />
              )}
              </>
           ) : null}

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar
              alt="User Avatar"
              sx={{
                width: 45,
                height: 45,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            />
            <Menu
              anchorEl={avatarMenuAnchorEl}
              open={Boolean(avatarMenuAnchorEl)}
              onClose={handleAvatarClose}>
              {userName ? (
                <div>
                  <MenuItem onClick={() =>{handleAvatarClick();
                   navigate("/")}}>
                    Hey.. {"saleem"}
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  <MenuItem
                    onClick={() => {handleAvatarClose();navigate("/account");}}>My Account</MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={() =>{handleAvatarClose();
                     navigate("/login")}}>Login</MenuItem>
                  <MenuItem onClick={() =>{handleAvatarClose();
                     navigate("/signup")}}>
                    Signup
                  </MenuItem>
              </div>
            )}
          </Menu>
        </div>   
        </div>
        </div>
        <div className='display'>
                <div className='display-item'>
                    < MenuIcon onClick={handleToggleMenu}  />

                </div>
                    
            </div>
      </div>
      {
            sidebar && <Sidebar/>
        }
    </>
  )
}

export default Header;