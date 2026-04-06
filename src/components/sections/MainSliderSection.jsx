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

const sliderContent = {
  en: [
    { title: 'Services', text: 'Strategic HR and business services tailored to your growth stage.', link: '/services', button: 'Explore →' },
    { title: 'References', text: 'Explore measurable outcomes from our consulting engagements.', link: '/references', button: 'Explore →' },
    { title: 'Contact', text: 'Connect with us and build your next transformation roadmap.', link: '/contacts', button: 'Explore →' },
  ],
  ru: [
    { title: 'Услуги', text: 'Стратегические HR и бизнес-решения под этап развития вашей компании.', link: '/services', button: 'Подробнее →' },
    { title: 'Кейсы', text: 'Посмотрите измеримые результаты наших консалтинговых проектов.', link: '/references', button: 'Подробнее →' },
    { title: 'Контакты', text: 'Свяжитесь с нами, чтобы обсудить вашу следующую трансформацию.', link: '/contacts', button: 'Подробнее →' },
  ],
  tr: [
    { title: 'Hizmetler', text: 'Büyüme aşamanıza uygun stratejik İK ve iş çözümleri.', link: '/services', button: 'İncele →' },
    { title: 'Referanslar', text: 'Danışmanlık projelerimizin ölçülebilir sonuçlarını keşfedin.', link: '/references', button: 'İncele →' },
    { title: 'İletişim', text: 'Bir sonraki dönüşüm yol haritanızı birlikte planlayalım.', link: '/contacts', button: 'İncele →' },
  ],
};

const slideImages = [servicesImg, referencesImg, contactImg];

function MainSliderSection() {
  const { language } = useLanguage();
  const slides = sliderContent[language] || sliderContent.en;

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
