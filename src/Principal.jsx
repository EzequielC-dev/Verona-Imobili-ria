import { useState } from "react";
import "./css/animacoes.css";
import "./css/fotos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/less/navigation';
import 'swiper/less/pagination';

function Principal() {
  return (
    <div>
      <div className="fotos-main">
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{clickable: true}}
        >
          <SwiperSlide>
            <img
              className="brightness-50 "
              src="./src/assets/Imagem Fundo Home 1.jpg"
              alt="Imagem fundo Home 1"
              id="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="brightness-50 "
              src="./src/assets/Imagem fundo home 2.jpg"
              alt="Imagem fundo Home 2"
              id="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="brightness-50 "
              src="./src/assets/Imagem fundo home 3.jpg"
              alt="Imagem fundo Home 3"
              id="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="brightness-50 "
              src="./src/assets/Imagem fundo home 4.jpg"
              alt="Imagem fundo Home 4"
              id="4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <section>
      </section>
    </div>
  );
}

export default Principal;
