import React from 'react'

function facebook(props) {
    const link= props.link;
    return (
        <a href={link}><img src="media/images/icons/facebook (3).svg" alt=""/> </a>
    )
}

export default facebook