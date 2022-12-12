import styled from "styled-components";
import tw from "twin.macro";

const MovieTitle = styled.p`
  ${tw`text-3xl  font-avenir-bold font-bold tracking-tight text-primary`}
`;

const MoviesGrid = styled.div`
  ${tw`grid grid-cols-1 gap-x-6 sm:grid-cols-4  lg:grid-cols-5 xl:gap-x-8`}
`;

export { MovieTitle, MoviesGrid };
