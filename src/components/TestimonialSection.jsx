import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    text: 'Hemant is an exceptional team lead who consistently ships production AI/ML solutions. His expertise in LLM applications and RAG pipelines is outstanding.',
    name: 'Sandra Radford',
    role: 'Project Manager',
  },
  {
    text: 'Working with Hemant has been a great experience. His work productionizing our GenAI services on Azure, with prompt caching and tiered model routing, kept us within budget.',
    name: 'Michael Chen',
    role: 'Technical Director',
  },
  {
    text: "Hemant's ability to identify high-impact AI use cases and mentor the team on prompt design and responsible AI usage has significantly improved our delivery.",
    name: 'Priya Sharma',
    role: 'Engineering Manager',
  },
];

export default function TestimonialSection() {
  return (
    <div id="testimonial" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="flex justify-between">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Testimonial">What People Say</h6>
        <ul className="space-x-1.5">
          <li className="swiper-testimonial-prev list-none inline-flex justify-center items-center w-10 h-10 rounded-full border border-black border-dashed cursor-pointer transition ease-out duration-[120ms] hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            <i className="bi bi-arrow-left"></i>
          </li>
          <li className="swiper-testimonial-next list-none inline-flex justify-center items-center w-10 h-10 rounded-full border border-black border-dashed cursor-pointer transition ease-out duration-[120ms] hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            <i className="bi bi-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-testimonial-next',
            prevEl: '.swiper-testimonial-prev',
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            1200: { slidesPerView: 2, spaceBetween: 40 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="z-[1] relative pt-4 pl-4">
                <div className="-z-[1] absolute top-0 left-0 text-5xl opacity-10 dark:text-white">
                  <i className="bi bi-quote"></i>
                </div>
                <div className="text-yellow-400 mb-3">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="text-pColor dark:text-white/70 leading-7">{item.text}</p>
              </div>
              <div className="flex items-center mt-5">
                <div className="me-5">
                  <img className="w-[70px] h-[70px] rounded-full" src="/assets/images/testimonial-avatar.jpg" alt={item.name} />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg md:text-xl dark:text-white">{item.name}</h4>
                  <span className="text-sm text-pColor dark:text-white/70">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
