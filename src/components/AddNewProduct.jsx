import React from "react";

const AddNewProduct = () => {
  return (
    <div className="container shadow-lg p-5 mt-7 rounded-md">
      <h2 className="font-bold text-xl my-5">افزودن محصول جدید</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-1">
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="نام محصول"
        />
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="موجودی محصول"
        />
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="میزان محبوبیت محصول"
        />
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="تعداد رنگ بندی"
        />
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="قیمت محصول"
        />
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="آدرس عکس محصول"
        />
        <input
          class="input input-lg input-solid max-w-xl"
          placeholder="میزان فروش محصول"
        />
      </div>
      <div className="text-left ml-[75px]">
        <button className="btn btn-primary">ثبت محصول</button>
      </div>
    </div>
  );
};

export default AddNewProduct;
