import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 100%;
    top: 8rem;
    height: 100vh;
    background-color: salmon;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Page = () => {
    const { slug } = useParams()

    return (
        <PageWrapper>
            <h1>{slug}</h1>
        </PageWrapper>
    )
}
