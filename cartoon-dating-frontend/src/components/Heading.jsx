import React from 'react';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import '../css/Heading.css';

function Heading() {
    return (
        <div className='heading'>
           <IconButton>
                <PersonSharpIcon fontSize="large" className="heading__icon"/>
            </IconButton>

            <h3 className='heading__title'>Character Dating</h3>

            <IconButton>
            <ForumIcon fontSize="large" className="heading__icon"/>
            </IconButton>
        </div>
    )
}

export default Heading
