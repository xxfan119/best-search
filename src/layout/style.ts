import styled from "styled-components";

export const LayoutBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  > div:last-child {
    margin: 50px 100px 0;
  }
`;

export const TopBar = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(225, 225, 225);
`;
