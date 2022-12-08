import React from "react";

const DetailScreen = () => {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 my-16">
        <div className="w-full overflow-hidden rounded-lg col-span-1 h-96">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
