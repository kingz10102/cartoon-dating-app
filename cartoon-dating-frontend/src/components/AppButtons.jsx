import React from 'react';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import IconButton from '@material-ui/core/IconButton';
import '../css/AppButtons.css';

function AppButtons() {
    return (
        <div className="appButtons">
            <IconButton className="appButtons__repeat">
                <ReplayRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="appButtons__left">
                <CloseRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="appButtons__star">
                <StarRateRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="appButtons__right">
                <FavoriteRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="appButtons__flash">
                <FlashOnRoundedIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default AppButtons
