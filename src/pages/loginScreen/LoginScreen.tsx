import React from "react";
import loginImage from "../../assets/images/cinema.svg";
import Input from "../../components/styledComponents/elements/inputs";
import * as S from "./styles";

const LoginScreen = () => {
  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <div className='md:max-w-md space-y-8 m-12'>
          <div>
            <S.LoginTitle >
              MyMovies website
            </S.LoginTitle>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <div className='space-y-4 rounded-md shadow-sm'>
              <div>
                <label className='sr-only'>Email address</label>
                <Input
                  id='email-address'
                  name='email'
                  type='email'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label className='sr-only'>Password</label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  required
                  placeholder='Password'
                />
              </div>
            </div>

            <div>
              <S.LoginButton
                type='submit'
              >
                Sign in
              </S.LoginButton>
            </div>
          </form>
        </div>
        <div className='md:max-w-md py-5'>
          <img
            className='mx-auto max-h-fit h-36 md:h-fit  w-auto'
            src={loginImage}
            alt='Login Image'
          />
        </div>
      </S.LoginFormContainer>
    </S.LoginContainer>
  );
};

export default LoginScreen;
