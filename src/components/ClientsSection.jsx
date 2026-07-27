import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ClientsSection() {
  return (
    <div className="bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Clients">My Awesome Clients</h6>
      <div className="mt-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 40 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item} className="opacity-50 hover:opacity-100 transition ease-out duration-[120ms]">
              <a href="#">
                <img src="/assets/images/client-logo.png" alt="Client" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
