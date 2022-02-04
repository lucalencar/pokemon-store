import React from "react";

import * as S from "./AppHeader.styles";

export default function AppHeader({ title }) {
  return (
    <S.Wrapper>
      <span>{title}</span>
    </S.Wrapper>
  );
}
