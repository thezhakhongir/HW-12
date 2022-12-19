import styled from "styled-components";

const MainContent = styled.main`
  & {
    background-color: ${({isDay}) => !isDay ? 'white' : 'rgba(0,0,0,0.7)'};
    padding: 100px 0;
    margin: 0;
    height: 100vh;
    transition: background-color .3s ease-in-out;
  }
`;
export { MainContent };
