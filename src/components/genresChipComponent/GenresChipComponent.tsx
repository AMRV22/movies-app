import React from 'react'
import * as S from "./style";

type GenreProps = {
    name: string
}

const GenresChipComponent = ({name}: GenreProps) => {
  return (
    <S.GenreChip>{name}</S.GenreChip>
  )
}

export default GenresChipComponent;
