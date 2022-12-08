import styled from "styled-components";
import tw from "twin.macro";

const MovieTitle = styled.p`
  ${tw`text-3xl  font-avenir-bold font-bold tracking-tight text-primary`}
`;

const GenreChip = styled.div`
  ${tw`bg-purple-light rounded-full px-4 py-1 text-center text-white`}
`;

export { MovieTitle, GenreChip };
