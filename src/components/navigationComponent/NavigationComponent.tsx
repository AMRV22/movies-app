import React, { useState } from "react";
import { ReactComponent as BurgerBar } from "@/assets/svg/burgger-bar.svg";
import * as S from "./styles";
import { Link } from "react-router-dom";
import useAppSelector from "./../../utils/hook/useAppSelector";
import useAppDispatch from "./../../utils/hook/useAppDispatch";
import { setLoading, setToken, setUser } from "./../../store/slice/user";
import { useNavigate } from "react-router-dom";

const NavigationComponent = () => {
  const [active, setActive] = useState(false);
  const { user } = useAppSelector(
    (store) => store.user
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setLoading(true));
    dispatch(setToken(""));
    dispatch(setUser(""));
    localStorage.removeItem("user-email");
    localStorage.removeItem("user-token");
    dispatch(setLoading(false));
    navigate("/login");

  }
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
          <li >
            <div >
              <p className="text-sm font-thin">{user?.email}</p>
              <p onClick={logout} className="text-sm font-thin text-purple-light cursor-pointer">Logout</p>
            </div>

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
          <li>
            <a onClick={logout} >Logout</a>
          </li>
        </ul>
      </S.SideDrawerMenu>
      {active && <S.BackDrop onClick={() => setActive((prev) => !prev)} />}
    </S.Navbar>
  );
};

export default NavigationComponent;
