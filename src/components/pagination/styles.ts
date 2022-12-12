import styled from "styled-components";
import tw from "twin.macro";

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
  ${tw`bg-[#810CA8] inline-block ml-1 cursor-pointer py-2 px-0 max-w-max rounded-full`}
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
  
  &:hover {
    background-color: #2D033B;
    border-radius: 9999px;
  }
  
  &.active {
    background-color: #2D033B;
  }
`;

export { PaginationContainer, PageLinks };
