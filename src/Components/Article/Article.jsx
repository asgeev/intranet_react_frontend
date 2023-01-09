import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* margin-top: 8rem; */
    min-height: calc(100vh - 8rem);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Article = () => {
    const { slug } = useParams()

    return <Wrapper>{slug}</Wrapper>
}
