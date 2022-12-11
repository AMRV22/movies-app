import React from "react";
import { ReactComponent as HeartIcon } from "@/assets/svg/heart.svg";
import RatingComponent from "./../../components/ratingComponent";
import GenresChipComponent from "./../../components/genresChipComponent";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const DetailScreen = () => {
  const response = useParams();
  return (
    <div className='flex flex-col'>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 my-16 mx-8'>
        <div className='flex flex-col col-span-1'>
          <div className='w-full overflow-hidden rounded-lg '>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            />
          </div>
          <div className='flex content-end justify-center  my-2'>
            <RatingComponent rating={4} size={12} />
          </div>
        </div>

        <div className='flex flex-col col-span-2 shadow-lg'>
          <div className='flex justify-between items-center mx-8'>
            <div className='flex flex-col'>
              <S.MovieTitle>Movie Title</S.MovieTitle>
              <div className='flex justify-between'>
                <p className='text-gray-500'>07 E 2016</p>
                <p>
                  IMDB <strong className='text-secondary'> 9.1</strong>{" "}
                </p>
              </div>
            </div>
            <button>
              <HeartIcon className='stroke-red-bg stroke-2 h-12 w-12 fill-red-bg' />
            </button>
          </div>
          <div className='flex justify-between items-center mx-8 my-8'>
            <p className='text-gray-500'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className='flex flex-col mx-8 '>
            <p className='text-gray-500 mb-4'>Genres:</p>
            <div className='grid grid-cols-6  gap-4 '>
              <GenresChipComponent name='Action' />
              <GenresChipComponent name='Action' />
              <GenresChipComponent name='Action' />
              <GenresChipComponent name='Action' />
            </div>
          </div>

          <div className='flex flex-col mx-8 my-8'>
            <p className='text-gray-500 mb-4'>Top Cast:</p>
            <div className='grid grid-cols-6  gap-4 '>
              <div className='flex flex-col items-center'>
                <img
                  className='inline-block h-16 w-16 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <p className='text-gray-500'>Oscar Isaac</p>
              </div>
              <div className='flex flex-col items-center'>
                <img
                  className='inline-block h-16 w-16 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <p className='text-gray-500'>Oscar Isaac</p>
              </div>
              <div className='flex flex-col items-center'>
                <img
                  className='inline-block h-16 w-16 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <p className='text-gray-500'>Oscar Isaac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex '>
        <p>Suggested movies</p>
      </div>
    </div>
  );
};

export default DetailScreen;
