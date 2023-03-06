import styled from '@emotion/styled';

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${randomBackground};
`;

export const StatsLabel = styled.span`
  color: #242424;
`;

export const StatsPersent = styled.span`
  color: #242424;
  font-size: 18px;
`;

function randomBackground() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgb(${x}, ${y}, ${z}, 0.2)`;
}
