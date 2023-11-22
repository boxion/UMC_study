import React from "react";
import { useParams, useLocation } from "react-router-dom";

const tvDetailStyle = {
  display: "flex",
  flexDirection: "row",
};

const imageStyle = {
  marginRight: "20px", // 이미지와 내용 사이의 간격 조절
};

export default function MovieDetail() {
  const { name } = useParams(); // URL 파라미터에서 영화 제목 받기
  const { state } = useLocation(); // Movie 컴포넌트에서 전달된 정보 받기
  const overview = state.overview; // overview 정보 추출

  if (!state) {
    // state 객체가 null이면 에러가 발생하지 않도록 처리
    return <div>Loading...</div>;
  }

  return (
    <div style={tvDetailStyle}>
      <div style={imageStyle}>
        {state.posterPath && <img src={state.posterPath} alt={name} />}
      </div>
      <div>
        <h1>TV프로그램 명: {name}</h1>
        <hr></hr>
        <br></br>
        <p>TV프로그램 상세 정보</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}
