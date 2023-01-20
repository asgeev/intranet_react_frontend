import styled from 'styled-components';
import { Articles } from '../Articles/Articles';
import { Slider } from '../Slider/Slider';
import { Widgets } from '../Widgets/Widgets';

const HomeWrapper = styled.div`
    margin-top: ${({ theme }) => theme.navigation.height};
    gap: 2rem;
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
