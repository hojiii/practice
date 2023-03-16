import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { cookies } from "../shared/cookie";
import { apis } from "../shared/axios";
import { useSelector } from "react-redux";

const Home = () => {
  const navi = useNavigate();
  const user = useSelector((state) => state);

  // const checkToken = async () => {
  //   const token = cookies.get("token");
  //   try {
  //     await apis.get("/user", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (e) {
  //     alert("비정상적인 접근입니다.");
  //     navi("/");
  //   }
  // };

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/");
    }

    // checkToken();
  }, []);

  return (
    <div>
      {cookies.get("userId")}님 안녕하세요?
      <Button.Primary
        onClick={() => {
          cookies.remove("token");
          navi("/");
        }}
      >
        로그아웃
      </Button.Primary>
    </div>
  );
};

export default Home;
