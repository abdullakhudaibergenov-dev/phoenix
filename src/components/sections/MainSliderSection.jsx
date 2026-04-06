import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '../common/Container';

const slides = [
  {
    title: 'Services',
    text: 'Strategic HR and business services tailored to your growth stage.',
    link: '/services',
    image: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.25), transparent 48%), #111',
  },
  {
    title: 'References',
    text: 'Explore measurable outcomes from our consulting engagements.',
    link: '/references',
    image: 'radial-gradient(circle at 15% 25%, rgba(212,175,55,0.2), transparent 45%), #121212',
  },
  {
    title: 'Contact',
    text: 'Connect with us and build your next transformation roadmap.',
    link: '/contacts',
    image: 'radial-gradient(circle at 85% 85%, rgba(212,175,55,0.22), transparent 45%), #0f0f0f',
  },
];

function MainSliderSection() {
  return (
    <section className="pb-16">
      <Container>
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={20} className="home-slider">
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <article
                className="relative min-h-[360px] overflow-hidden rounded-2xl border border-theme p-6 shadow-card sm:min-h-[420px] sm:p-8"
                style={{ background: slide.image }}
              >
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative z-10 flex h-full flex-col justify-end text-center">
                  <h3 className="text-3xl font-bold text-heading sm:text-4xl">{slide.title}</h3>
                  <p className="mx-auto mt-4 max-w-xl text-body">{slide.text}</p>
                </div>
                <Link
                  to={slide.link}
                  className="absolute bottom-5 right-5 z-10 rounded-lg bg-surface/80 px-4 py-2 text-sm font-semibold text-body transition hover:text-heading"
                >
                  Explore →
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default MainSliderSection;
