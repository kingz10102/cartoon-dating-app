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

            <h3 className='heading__title'><span className='cartoon-tile-1'>Cartoon</span> Cartoon <span className="cartoon-tile-2">Dating</span></h3>

            <IconButton>
            <ForumIcon fontSize="large" className="heading__icon"/>
            </IconButton>
        </div>
    )
}

export default Heading
