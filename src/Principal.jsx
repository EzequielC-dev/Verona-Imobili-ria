import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './css/animacoes.css';
import './css/fotos.css';


function Principal() {
  return (
    <div>
      <main className="flex object-cover fotos-main">

        <Swiper>
          slidesPerView={1}
          pagination
          navigation
          <SwiperSlide>
            <img className="" src="./src/assets/Imagem Fundo Home 1.jpg" alt="Imagem fundo Home 1" id="1"/>
            <img className="" src="./src/assets/Imagem fundo home 2.jpg" alt="Imagem fundo Home 2" id="2"/>
            <img className="" src="./src/assets/Imagem fundo home 3.jpg" alt="Imagem fundo Home 3" id="3"/>
            <img className="" src="./src/assets/Imagem fundo home 4.jpg" alt="Imagem fundo Home 4" id="4"/>
          </SwiperSlide>
  
          
        </Swiper>
      </main>
    </div>
  );
}

export default Principal;
