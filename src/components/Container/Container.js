import React from "react";
import AppHeader from "../Header/AppHeader";
import * as S from "./Container.styles";

export default function Container({ children, title }) {
  return (
    <S.Wrapper>
      <S.Div>
        <AppHeader title={title} />
        {children}
      </S.Div>
    </S.Wrapper>
  );
}
