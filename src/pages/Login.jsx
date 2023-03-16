import React, { useState } from "react";
import styled from "styled-components";
import NInput from "../components/NInput";
import Space from "../elem/Space";
import Flex from "../elem/Flex";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navi = useNavigate();
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    // 서버에 보내기 (POST 요청 나중에 작업)
    console.log(user);
  };

  return (
    <Container onSubmit={submitButtonHandler}>
      <h1>🔑</h1>
      <Flex
        css={{
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Space>
          <Space
            css={{
              marginBottom: "5px",
            }}
          >
            아이디
          </Space>
          <NInput
            type="text"
            value={user.id}
            name="id"
            onChange={changeInputHandler}
            placeholder="아이디를 입력해주세요 🙏"
          />
        </Space>
        <Space>
          <Space
            css={{
              marginBottom: "5px",
            }}
          >
            패스워드
          </Space>
          <NInput
            type="password"
            value={user.password}
            name="password"
            onChange={changeInputHandler}
            placeholder="비밀번호를 입력해주세요"
          />
        </Space>
      </Flex>
      <Button.Negative size="large" outlined>
        로그인
      </Button.Negative>
      <Button.Primary
        size="large"
        outlined
        onClick={() => navi("/register")}
        type="button"
      >
        회원가입 하러가기
      </Button.Primary>
    </Container>
  );
};

const Container = styled.form`
  height: 95vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
