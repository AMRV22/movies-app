import styled from "styled-components";
import tw from "twin.macro";

const MovieCard = styled.div`
  ${tw`relative shadow rounded-md bg-white`}
`;

const PosterContainer = styled.div`
  ${tw`w-full overflow-hidden rounded-lg  lg:h-80`}
`;

const MovieTitle = styled.p`
  ${tw`text-2xl  font-avenir-bold font-bold tracking-tight text-secondary`}
`;

export { MovieCard, PosterContainer, MovieTitle };
