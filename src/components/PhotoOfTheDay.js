import React from 'react';

const PhotoOfTheDay = (props) => {
    return (
        <div className='photo-wrapper'>
            <h3>Today's photo is {props.data.title}</h3>
            <p>Today's date is {props.data.date}</p>
            <img src={props.data.hdurl} />
            <p className='explanation'>{props.data.explanation}</p>
            <p>Copyright to: {props.data.copyright}</p>
        </div>
    )
}

export default PhotoOfTheDay;