import { NextPage } from 'next'
import styled from '@emotion/styled'
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { StyledButton } from '../../pages/login';
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { Field, Form, Formik } from "formik"
import Router from "next/router";
import { useState } from 'react';

interface Props {
  handleCloseClick: (e: React.MouseEvent<HTMLButtonElement>)  => void;
}

const StyledForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const StyledDivImage = styled.div`
  position: relative;
  top: -135px;
  left: 120px;
`

const StyledDivWrapper = styled.div`
  background-color: #fff;
  padding: 110px 100px 50px 100px ;
  border-radius: 20px;
`

const StyledDivMain = styled.div`
  position: relative;
  top: -125px;
  left: 0px;
`
const StyledP = styled.p`
  margin: 5px;
  padding-left: 130px;
  font-weight: bold;
  font-size: smaller;
`
const StyledInput = styled.input`
  border: solid thin #e0e0e0;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 5px;
  :focus{
    border: 2px solid #1a82d7;
    outline: 0;
  
  }
`

export const LoginModal: NextPage<Props> = ({ handleCloseClick }: Props) => {

  const { data: session } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectToHome = () => {
    const { pathname } = Router;
    if (pathname === "/login") {
      // TODO: redirect to a success register page
      Router.push("/");
    }
  };

  const loginUser = async () => {
    const res: any = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}`,
    });

    res.error ? console.log(res.error) : redirectToHome();
  };

  const formSubmit = (actions: any) => {
    actions.setSubmitting(false);
    loginUser()
  };

  return (
    <StyledForm>
      <Formik
      initialValues={{}} 
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(_, actions) => {
        formSubmit(actions);
      }}
      >
        <Form>
          <StyledDivWrapper>
            <IconButton
              onClick={handleCloseClick}
              sx={{
                position: "relative",
                top: "-100px",
                right: "90px"
              }}>
              <ClearIcon />
            </IconButton>
            <StyledDivImage>
              <Image
                src="/2021 Twitter logo - blue.png"
                width={30} height={30}
                objectFit="contain"
              />
            </StyledDivImage>
            <StyledDivMain>
              <h1>Twitterにログイン</h1>
              <div style={{display: "flex", flexFlow: "column"}}>
                <StyledButton hoverBgColor='#eef2fc'>Googleで登録</StyledButton>
                <StyledButton hoverBgColor='#e2e2e2'>Appleのアカウントで登録</StyledButton>
                <StyledP>または</StyledP>
                <Field name="email">
                  {() => (
                    <StyledInput
                      placeholder='電話番号/メールアドレス/ユーザー名'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  )}
                </Field>
                <Field name="password">
                  {() => (
                    <StyledInput
                      placeholder='パスワード'
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}
                </Field>
                <StyledButton
                  hoverBgColor='#2b2b2b'
                  color='white'
                  bgColor='black'
                  type='submit'
                >ログイン
                </StyledButton>
                <StyledButton hoverBgColor='#e2e2e2'>パスワードを忘れた場合はこちら</StyledButton>
              </div>
            </StyledDivMain>
        </StyledDivWrapper>
        </Form>
      </Formik>
    </StyledForm>
  )
}

export default LoginModal