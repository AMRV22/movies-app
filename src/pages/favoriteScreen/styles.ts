import styled from "styled-components";
import tw from "twin.macro";


const MoviesGrid = styled.div`
  ${tw`mt-6 mx-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-8`}
`;

const MoviesContainer = styled.div`
  ${tw`bg-white rounded-md py-20 mx-8`}
`;

const MoviesTitle = styled.p`
  ${tw`text-2xl font-avenir-bold font-bold tracking-tight text-primary ml-4`}
`;

export {
    MoviesContainer,
    MoviesTitle,
    MoviesGrid,
};
