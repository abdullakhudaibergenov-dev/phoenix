import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { references } from '../../data/references';
import useLanguage from '../../hooks/useLanguage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ReferenceSlider() {
  const { t } = useLanguage();

  return (
    <div className="reference-slider-wrapper px-10 sm:px-12 lg:px-14">
      <Swiper
        className="reference-slider !pb-14"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {references.map((item) => {
          const content = t.references[item.key];

          return (
            <SwiperSlide key={item.key}>
              <article className="h-full rounded-xl border border-zinc-800 bg-primary p-7 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{t.references.badge}</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-100">{content.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{content.description}</p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
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
