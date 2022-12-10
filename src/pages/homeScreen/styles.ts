import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  ${tw`flex h-screen my-4 px-4 sm:px-6 lg:px-8`}
`;

const SearchButton = styled.button`
  ${tw`justify-center h-12 rounded-full border border-transparent bg-secondary py-2 px-4  font-medium text-white`}
`;

const MoviesGrid = styled.div`
  ${tw`mt-6 mx-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-8`}
`;


const MoviesContainer = styled.div`
  ${tw`md:col-span-3 bg-white rounded-md py-6 border-solid border-2 border-gray-100 shadow-sm`}
`;

const MoviesTitle = styled.p`
  ${tw`text-2xl font-avenir-bold font-bold tracking-tight text-primary ml-4`}
`;

const GenresTitle = styled.p`
  ${tw`text-lg font-avenir-bold font-bold tracking-tight text-primary ml-4`}
`;

export {
  HomeContainer,
  SearchButton,
  MoviesGrid,
  MoviesContainer,
  MoviesTitle,
  GenresTitle,
};
