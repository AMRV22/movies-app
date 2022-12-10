import React, { useState } from "react";
import { ReactComponent as BurgerBar } from "@/assets/svg/burgger-bar.svg";
import * as S from "./styles";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  const [active, setActive] = useState(false);
  return (
    <S.Navbar>
      <S.NavWrapper>
        <S.NavLogo>
          <S.NavLink to='/'>MyMovie Website</S.NavLink>
        </S.NavLogo>
        <S.Menu id='menu'>
          <li>
            <S.NavLink to='/'>HOME</S.NavLink>
          </li>
          <li>
            <S.NavLink to='/favorites'>FAVORITES</S.NavLink>
          </li>
        </S.Menu>
      </S.NavWrapper>
      <S.MenuIcon onClick={() => setActive((prev) => !prev)}>
        <span className='icon icon-bars'></span>
        <span className='icon icon-bars overlay'></span>
      </S.MenuIcon>

      <S.SideDrawerMenu className={active ? "open" : ""}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </S.SideDrawerMenu>
      {active && <S.BackDrop onClick={() => setActive((prev) => !prev)} />}
    </S.Navbar>
  );
};

export default NavigationComponent;
