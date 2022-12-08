import styled from "styled-components";
import tw from "twin.macro";

const LoginTitle = styled.p`
  ${tw`mt-6 text-center text-3xl md:text-6xl font-bold tracking-tight text-secondary`}
`;

const LoginButton = styled.button`
${tw` relative flex w-full h-10 justify-center rounded-md border border-transparent bg-primary py-2 px-4  font-medium text-white`}
`;

const LoginContainer = styled.div`
  ${tw`flex  h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 `};
`;

const LoginFormContainer = styled.div`
  ${tw`bg-white grid grid-cols-1 md:grid-cols-2 shadow-lg sm:rounded-lg`}
`;

const ErrorMessages = styled.p`
  ${tw`text-xs text-red-500 ml-2`}
`;
export { LoginTitle, LoginButton, LoginContainer, LoginFormContainer, ErrorMessages };