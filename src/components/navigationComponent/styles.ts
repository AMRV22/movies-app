import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const NavbarTitle = styled.p`
  ${tw`text-2xl font-avenir-bold font-bold tracking-tight text-white`}
`;

const Navbar = styled.nav`
  ${tw`bg-white fixed top-0 h-[60px] w-full text-[#0D1A26]`}
  line-height: 60px;
  z-index: 10;
`;

const NavWrapper = styled.div`
  ${tw`m-auto text-center `}
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 638px) {
    width: 100%;
  }
`;

const NavLogo = styled.div`
  ${tw`float-left font-avenir-demi ml-7 h-[60px] tracking-wide`}
  & a {
    font-size: 1.5em !important;
  }
`;

const Menu = styled.ul`
  ${tw`inline-block mt-[-2px] font-avenir-bold font-bold text-right list-none float-right`}
  transition: transform 0.5s ease-out;

  & li {
    display: inline-block;
  }

  @media (max-width: 640px) {
    display: none;
  }

  @media (orientation: landscape) {
    display: inline-block;
  }
`;

const NavLink = styled(Link)`
  ${tw`block h-[50px] tracking-wide mx-5 my-0 py-0 px-4 relative text-purple-light`}
  font-size: 1em;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: #1c79b8;
    transition: all 1s ease;

    &::before {
      ${tw`w-full bg-[#0D1A26]`}
      transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
    }

    &::after {
      background: transparent;
      width: 100%;
    }
  }

  &::before,
  &::after {
    ${tw`absolute h-[1px] bottom-[-1px] bg-[#0D1A26]`}
    content: "";
    width: 0%;
  }

  &::before {
    ${tw`left-0`}
    transition: 0.5s;
  }

  &::after {
    ${tw`right-0 bg-[#0D1A26]`}
    right: 0;
  }
`;

const MenuIcon = styled.div`
  @media (max-width: 640px) {
    ${tw`cursor-pointer block fixed right-[15px] top-5 h-[23px] w-[27px]`}
    z-index: 12;

    & .icon-bars {
      ${tw`bg-[#0d1a26] absolute left-0.5 top-[45%] h-0.5 w-5`}
      transition: 0.4s;

      &::before {
        ${tw`bg-[#0d1a26] absolute left-0 top-[-8px] h-0.5 w-5`}
        content: "";
        transition: 0.3s width 0.4s;
      }

      &::after {
        ${tw`mt-0 bg-[#0d1a26] absolute left-0 bottom-[-8px] h-0.5 w-5`}
        content: "";
        transition: 0.3s width 0.4s;
      }
    }

    .icon-bars.overlay {
      background: rgb(97, 114, 129);
      background: rgb(183, 199, 211);
      width: 20px;
      animation: middleBar 3s infinite 0.5s;

      &::before {
        background: rgb(97, 114, 129);
        background: rgb(183, 199, 211);
        width: 10px;
        animation: topBar 3s infinite 0.2s;
      }

      &::after {
        background: rgb(97, 114, 129);
        background: rgb(183, 199, 211);
        width: 15px;
        animation: bottomBar 3s infinite 1s;
      }
    }
    @keyframes middleBar {
      0% {
        width: 0px;
      }
      50% {
        width: 20px;
      }
      100% {
        width: 0px;
      }
    }

    @keyframes topBar {
      0% {
        width: 0px;
      }
      50% {
        width: 10px;
      }
      100% {
        width: 0px;
      }
    }

    @keyframes bottomBar {
      0% {
        width: 0px;
      }
      50% {
        width: 15px;
      }
      100% {
        width: 0px;
      }
    }
  }
`;

const SideDrawerMenu = styled.div`
  ${tw`h-full bg-white fixed top-0 right-0 max-w-[400px] w-[80%]`}
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;

  & ul {
    ${tw`p-0 flex list-none h-full flex-col justify-center`}
  }

  & li {
    margin: 0.5rem 32px;
    a {
      font-size: 2em;
      &:hover,
      &:active {
        ${tw`text-purple-light`}
        transition: color 0.3s ease;
      }
    }
  }

  &.open {
    transform: translateX(0);
  }

  @media screen and (min-width: 759px) {
    display: none;
  }
`;

const BackDrop = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full`}
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export {
  NavbarTitle,
  Navbar,
  NavWrapper,
  NavLogo,
  Menu,
  NavLink,
  MenuIcon,
  SideDrawerMenu,
  BackDrop,
};
