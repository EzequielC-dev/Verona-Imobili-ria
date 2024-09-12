import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "../../style/animacoes.css";
import './home.css'
import "swiper/css";
import "swiper/less/navigation";

function Home() {
  
  return (
    <main>
      <div className="fotos-main">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              className="backdrop-brightness-50 "
              src="./src/assets/Imagem Fundo Home 1.jpg"
              alt="Imagem fundo Home 1"
              id="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="brightness-50"
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

      <article>
        <a href="">
          <img
            className="fixed right-12 bottom-4 z-50"
            src="./src/assets/Logo Whatsapp.png"
            alt="Logo Whatsapp"
          />
        </a>
      </article>

      <section className="bg-neutral-950 border-t-1 pl-32 pr-32">
        <div className="flex justify-center font-semibold text-3xl text-slate-50 p-24 w-full">
          <h1 className="melhores-vendas border-b-2 text-xl rounded-sm pb-1 uppercase">
            Melhores Oportunidades:
          </h1>

        </div>
      </section>
    </main>
  );
}

export default Home;
