import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookie";

const About = () => {
  const navi = useNavigate();
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/");
    }
  }, []);
  return <div>About</div>;
};

export default About;
