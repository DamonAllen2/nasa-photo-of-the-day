import React from 'react';
import styled, { keyframes } from 'styled-components'

const PhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const kf = keyframes`
0% {
    opacity: 0;
    max-width: 200%;
}
100% {
    opacity: 1;
    max-width: 60%;
}
`

const StyledImg = styled.img`
    max-width: 60%;
    border-radius: 15px;
    animation: ${kf} 0.5s ease-in-out backwards;
`

const PhotoOfTheDay = (props) => {
    return (
        <PhotoWrapper>
            <h3>Today's photo is {props.data.title}</h3>
            <p>Today's date is {props.data.date}</p>
            <StyledImg src={props.data.hdurl} />
            <p className='explanation'>{props.data.explanation}</p>
            <p>Copyright to: {props.data.copyright}</p>
        </PhotoWrapper>
    )
}

export default PhotoOfTheDay;