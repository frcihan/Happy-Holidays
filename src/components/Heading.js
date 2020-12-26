import React from 'react'
import styled from "styled-components";


const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;
`

const H1 = styled.h1`
    font-family: "Great Vibes", sans-serif;
    font-size: 6rem;
`

export const Heading = () => {
    return (
        <Header>
            <H1>Happy Holidays</H1>
        </Header>
    )
}
