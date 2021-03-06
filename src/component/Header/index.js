import React from 'react';
import classes from './Header.module.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.header__icons}>
                <div className={`${classes.header__icon} ${classes["header__icon--active"]}`}>
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className={classes.header__icon}>
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className={classes.header__icon}>
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className={classes.header__icon}>
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className={classes.header__icon}>
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className={classes.header__icon}>
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>

            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="Hulu logo" />
        </div>
    )
}

export default Header
