import styled from 'styled-components';
import { Articles } from '../Articles/Articles';
import { Slider } from '../Slider/Slider';
import { Widgets } from '../Widgets/Widgets';

const HomeWrapper = styled.div`
    background-color: red;
    height: calc(100vh - 8rem);
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
`;

export const Home = () => {
    return (
        <HomeWrapper>
            <Slider />
            <Articles />
            <Widgets />
        </HomeWrapper>
    );
};
