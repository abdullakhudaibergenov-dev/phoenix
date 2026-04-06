import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useLanguage from '../../hooks/useLanguage';
import servicesImg from '../../assets/slider/slide-services.svg';
import referencesImg from '../../assets/slider/slide-references.svg';
import contactImg from '../../assets/slider/slide-contact.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '../common/Container';

const slideImages = [servicesImg, referencesImg, contactImg];

function MainSliderSection() {
  const { t } = useLanguage();
  const slides = [
    { ...t.slider.services, link: '/services', button: t.slider.button },
    { ...t.slider.references, link: '/references', button: t.slider.button },
    { ...t.slider.contact, link: '/contacts', button: t.slider.button },
  ];

  return (
    <section className="pb-20">
      <Container>
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={20} className="home-slider">
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <article className="relative min-h-[380px] overflow-hidden rounded-2xl border border-theme p-6 shadow-card sm:min-h-[440px] sm:p-8">
                <img src={slideImages[index]} alt={slide.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full flex-col justify-end text-center">
                  <h3 className="text-3xl font-bold text-heading sm:text-4xl">{slide.title}</h3>
                  <p className="mx-auto mt-4 max-w-xl text-white">{slide.text}</p>
                </div>
                <Link to={slide.link} className="absolute bottom-5 right-5 z-10 rounded-lg bg-black/70 px-4 py-2 text-sm font-semibold text-white transition hover:text-heading">
                  {slide.button}
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
