import React, { useLayoutEffect } from "react";

const Loader = () => {
  useLayoutEffect(() => {
    const Loader = document.getElementById("loader");
    const text = document.getElementById("text");
    Loader.classList.add("loader");

    setTimeout(() => {
      document.body.removeChild(Loader);
      text.classList.add("text-move");
    }, 3000);
  }, []);

  return (
    <main>
      <div id="text" className="title">
        <h1>خوش آمدید..!</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
        </p>
      </div>
    </main>
  );
  
};

export default Loader;
