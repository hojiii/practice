import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NInput from "../components/NInput";
import Space from "../elem/Space";
import Flex from "../elem/Flex";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { apis } from "../shared/axios";
import { cookies } from "../shared/cookie";
import jwt_decode from "jwt-decode";

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

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    // then으로 프로미스 벗기기
    // apis.post("/login", user).then((result) => {
    //   console.log(result.data.token);
    // });

    // async/await
    try {
      const result = await apis.post("/login", user);
      const payload = jwt_decode(result.data.token);

      cookies.set("token", result.data.token, { path: "/" });
      cookies.set("userId", payload.id, { path: "/" });

      navi("/home");
    } catch (e) {
      alert("로그인 실패");
    }
  };

  // 가드
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navi("/home");
    }
  }, []);

  return (
    <Container onSubmit={submitButtonHandler}>
      <h1>로그인</h1>
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
