import styled from "styled-components";

export const TrendBox = styled.div`
  margin: 10px 20px;
  height: 300px;
  border: 1px solid rgba(225, 225, 225);
  border-radius: 10px;
  background-color: #fff;
  position: relative;

  .chart {
    height: 80%;
    margin: 0;
  }
  .name {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 25px;
    span {
      font-weight: 600;
    }
  }
  .growth {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 18px;
    color: rgba(185, 185, 185);
  }
  .time {
    font-size: 20px;
    color: rgba(185, 185, 185);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
    white-space: nowrap;
  }
`;
