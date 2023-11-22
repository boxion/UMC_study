import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #2b2a49;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;

export const MovieContainer = styled.div`
  margin-top: 10px;
  flex: 0 0 12.5%;
  box-sizing: border-box;
  position: relative;
  background-color: #4b4975;
  border-radius: 3px;

  &:hover {
    .MovieDetail {
      display: block;
    }
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: white;
  justify-content: space-between;
  margin-top: 1vw;
  margin-right: 1vw;
`;

export const MovieDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  color: white;
  padding: 5px;
  font-size: 15px;
`;
