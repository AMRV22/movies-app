import React, { useReducer } from "react";
import loginImage from "../../assets/images/cinema.svg";
import Input from "../../components/styledComponents/elements/inputs";
import * as S from "./styles";
import { string } from "yup";
import { loginReducer, validationsReducer } from "./reducer";

const loginParams = {
  email: "",
  password: "",
}

const initialValidations = {
  validEmail: {},
  validPassword: {},
}

let isTouch = {
  email: 0,
  password: 0
}

const LoginScreen = () => {
  const [loginState, dispatch] = useReducer(loginReducer, loginParams);
  const [validationState, dispatchValidation] = useReducer(validationsReducer, initialValidations)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    dispatch({ type: e.currentTarget.name, payload: value });
    let validation = null;

    if (e.currentTarget.name === "email") {
      if (value.length > 0)
        isTouch.email += 1;
      validation = {
        isValid: string()
          .email()
          .isValidSync(value),
        required: string()
          .required()
          .isValidSync(value),
        isTouch: isTouch.email > 0
      }
    } else {
      if (value.length > 0)
        isTouch.password += 1;

      validation = {
        required: string()
          .required()
          .isValidSync(value),
        isTouch: isTouch.password > 0
      }
    }
    dispatchValidation({
      type: e.currentTarget.name,
      payload: validation
    });

  };

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
                  value={loginState.email}
                  onChange={handleChange}
                  placeholder='Email address'
                />
                <S.ErrorMessages>{validationState.validEmail.isTouch && !validationState.validEmail.isValid && "Invalid email"}
                </S.ErrorMessages>
                <S.ErrorMessages>{validationState.validEmail.isTouch && !validationState.validEmail.required && "Email is required"}
                </S.ErrorMessages>
              </div>
              <div>
                <label className='sr-only'>Password</label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  value={loginState.password}
                  onChange={handleChange}
                  placeholder='Password'
                />
                <S.ErrorMessages>{validationState.validPassword.isTouch && !validationState.validPassword.required && "Password is required"}
                </S.ErrorMessages>
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
