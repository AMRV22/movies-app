import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 13px;

  ul {
    text-decoration: none;
  }
`;

const PageLinks = styled.li`
  background-color: #444444;
  display: inline-block;
  margin-left: 4px;
  cursor: pointer;
  padding: 8px 0;
  max-width: max-content;

  p {
    transition: all 0.1s linear;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    padding-top: 1px;
    text-decoration: none;
    min-width: 44px;
    color: #eeeeee;
  }

  .active {
    background-color: #26272b;
  }
`;

export { PaginationContainer, PageLinks };
