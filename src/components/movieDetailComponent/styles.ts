import styled from "styled-components";
import tw from "twin.macro";

const MovieCard = styled.div`
  ${tw`relative shadow rounded-md bg-white h-full`}
`;

const PosterContainer = styled.div`
  ${tw`w-full overflow-hidden rounded-lg  lg:h-80`}
`;

const MovieTitle = styled.p`
  ${tw`text-2xl  font-avenir-bold font-bold tracking-tight text-primary`}
`;

const MovieOverview = styled.p`
${tw`text-base  font-avenir text-left tracking-tight text-gray-500`}
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export { MovieCard, PosterContainer, MovieTitle, MovieOverview };
