import styled from 'styled-components';

const WidgetsWrapper = styled.div`
    background-color: green;
    min-height: 150px;
`;

export const Widgets = () => {
    return (
        <WidgetsWrapper>
            {console.log('HOST:', import.meta.env.VITE_API_ADRESS)}
            Widgets
        </WidgetsWrapper>
    );
};
