import React from 'react'

const Twitter = (props) => {
    const link= props.link;
    return (
        <a href={link}><img src="media/images/icons/twitter (2).svg" alt=""/></a>
    )
}

export default Twitter