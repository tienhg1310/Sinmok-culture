import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      Home page
      <button onClick={() => {
        navigate('/board/kr/1/list')
      }}>Next Board</button>
    </main>
  );
}

export default Home;
