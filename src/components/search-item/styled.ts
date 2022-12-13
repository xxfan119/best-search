import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 80%;
  .MuiFormControl-root {
    width: 80%;
  }
  #searchParams {
    height: 40px;
    padding: 0;
    padding-left: 10px;
  }
  button {
    margin-left: 20px;
    height: 100%;
    border-color: rgba(0, 0, 0, 0.3);
  }
`;
