import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { references } from '../../data/references';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ReferenceSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {references.map((item) => (
        <SwiperSlide key={item.title}>
          <article className="h-full rounded-xl border border-zinc-800 bg-primary p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">Case Study</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-100">{item.title}</h3>
            <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ReferenceSlider;
