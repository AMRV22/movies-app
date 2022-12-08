import styled from "styled-components";
import tw from "twin.macro";

const Input = styled.input`
  ${tw`relative block w-full appearance-none rounded  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm`}
`;

export default Input;
