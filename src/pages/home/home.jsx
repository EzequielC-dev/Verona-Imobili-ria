import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "../../css/animacoes.css";
import "./fotos.css";
import "swiper/css";
import "swiper/less/navigation";
import "swiper/less/pagination";

function Home() {
  return (
    <main>
      <div className="fotos-main">
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
            className="absolute right-12 bottom-4 z-50"
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
        <div className="text-slate-50">
          <Link to="" className="border-b-2 rounded-sm pb-1 border-amber-400">
            Casas ▶
            <Link className="pl-2" to="">
              Comprar
            </Link>
          </Link>

          <section className="flex items-center gap-4 pt-4 max-w-screen-xl">
            <Swiper
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
            >
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>

        <div className="text-slate-50 mt-8">
          <Link to="" className="border-b-2 rounded-sm pb-1 border-amber-400">
            Apartamentos ▶
            <Link className="pl-2" to="">
              Comprar
            </Link>
          </Link>

          <section className="flex items-center gap-4 pt-4 max-w-screen-xl">
            <Swiper
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
            >
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>

        <div className="text-slate-50 mt-8">
          <Link to="" className="border-b-2 rounded-sm pb-1 border-amber-400">
            Chácaras ▶
            <Link className="pl-2" to="">
              Comprar
            </Link>
          </Link>

          <section className="flex items-center gap-4 pt-4 max-w-screen-xl">
            <Swiper
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
            >
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-imobiliria bg-[#111110] p-5 rounded-lg flex flex-col justify-center">
                  <img src="./src/assets/Imagem Casa.png" alt="Comprar-Casa" />
                  <h2 className="text-lg font-medium">
                    Parque São Vicente - Mauá
                  </h2>
                  <p className="pt-3">Casa para Venda no bairro...</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
      </section>

      <section className="bg-neutral-950 border-t-1 pl-32 pr-32">
        <div className="flex justify-center font-semibold text-3xl text-slate-50 p-24 w-full">
          <h1 className="melhores-vendas border-b-2 text-xl rounded-sm pb-1 uppercase">
            todos os tipos de imóveis:
          </h1>
        </div>

        <div className="flex justify-center max-h-96 gap-3 items-start">
          <div className="flex flex-col gap-3">
          <img src="./src/assets/imagem galeria 1.png" alt="Casa galeria 1" />
          <img src="./src/assets/imagem galeria 3.png" alt="Casa galeria 2" />
          </div>
          <div className="flex flex-col gap-3">
          <img className="" src="./src/assets/imagem galeria 4.png" alt="Casa galeria 4" />
          <img src="./src/assets/imagem galeria 2.png" alt="Casa galeria 3" />
          </div>
          <img src="./src/assets/imagem galeria 5.png" alt="Casa galeria 5" />
        </div>
      </section>

      <section className="bg-neutral-950 border-t-1 pl-32 pr-32">
        <div className="flex justify-center font-semibold text-3xl text-slate-50 p-24 w-full">
          {/* Área do footer */}
        </div>
      </section>
    </main>
  );
}

export default Home;
