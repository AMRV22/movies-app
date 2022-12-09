import React from "react";
import { ReactComponent as HeartIcon } from "@/assets/svg/heart.svg";
import { ReactComponent as StarsIcon } from "@/assets/svg/stars.svg";
import RatingComponent from "../ratingComponent";
import * as S from "./styles";

const MovieDetailComponent = () => {
  return (
    <S.MovieCard>
      <S.PosterContainer>
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </S.PosterContainer>
      <div className="my-4 mx-4 flex flex-col">
        <div className="flex justify-between items-center">
          <S.MovieTitle>
            Movie Title
          </S.MovieTitle>
          {/* <button>
            <HeartIcon className="stroke-purple-light stroke-2 h-8 w-8 hover:fill-purple-light" />
          </button> */}
        </div>
        <div className="flex items-center my-2">
          <p className="text-base font-avenir text-left tracking-tight text-gray-500">
            loremp ipsum dolor sit amet loremp ipsum dolor sit amet loremp ipsum
            dolor sit amet...
          </p>
        </div>
        <div className="flex items-center my-2 justify-between">
          <p className="text-base font-avenir  tracking-tight text-gray-500">
            Release date:
          </p>
          <p className="text-base font-avenir  tracking-tight text-primary">
            2016/02/10
          </p>
        </div>
        <RatingComponent
          rating={4}
          size={8} />
      </div>
    </S.MovieCard>
  );
};

export default MovieDetailComponent;
