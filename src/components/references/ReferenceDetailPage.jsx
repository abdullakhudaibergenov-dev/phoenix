import { Link, Navigate, useParams } from 'react-router-dom';
import Container from '../common/Container';
import useLanguage from '../../hooks/useLanguage';
import { getReferenceBySlug, referencesData } from '../../data/referencesData';
import ReferencesMenu from './ReferencesMenu';
import TestimonialBlock from './TestimonialBlock';

function ReferenceDetailPage() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const reference = getReferenceBySlug(slug);

  if (!reference) {
    return <Navigate to="/references" replace />;
  }

  const content = reference.content[language];
  const currentIndex = referencesData.findIndex((item) => item.slug === reference.slug);
  const prevItem = referencesData[currentIndex - 1] ?? null;
  const nextItem = referencesData[currentIndex + 1] ?? null;

  return (
    <>
      <section className="border-b border-zinc-800 bg-primary bg-goldGlow py-16">
        <Container>
          <ReferencesMenu />
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.menuLabel}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold text-gold sm:text-4xl">{content.title}</h1>
          <p className="mt-4 max-w-3xl text-zinc-100">{content.subtitle}</p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-2xl border border-zinc-800 bg-surface p-7 shadow-card">
            <div className="flex flex-wrap items-center gap-5">
              <img src={reference.logo} alt={`${content.companyName} logo`} className="h-20 w-20 rounded-xl border border-zinc-700 bg-black" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.references.companyLabel}</p>
                <h2 className="mt-2 text-2xl font-semibold text-zinc-100">{content.companyName}</h2>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-primary p-7 shadow-card lg:col-span-2">
              <h3 className="text-xl font-semibold text-gold">{t.references.whatWeDidLabel}</h3>
              <p className="mt-4 leading-8 text-zinc-100">{content.whatWeDid}</p>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-primary p-7 shadow-card">
              <h3 className="text-xl font-semibold text-gold">{t.references.challengesLabel}</h3>
              <p className="mt-4 leading-8 text-zinc-100">{content.challenges}</p>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-primary p-7 shadow-card">
              <h3 className="text-xl font-semibold text-gold">{t.references.solutionsLabel}</h3>
              <p className="mt-4 leading-8 text-zinc-100">{content.solutions}</p>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-primary p-7 shadow-card lg:col-span-2">
              <h3 className="text-xl font-semibold text-gold">{t.references.resultsLabel}</h3>
              <p className="mt-4 leading-8 text-zinc-100">{content.results}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <TestimonialBlock testimonial={content.testimonial} rating={reference.rating} />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
            {prevItem ? (
              <Link to={`/references/${prevItem.slug}`} className="text-sm font-semibold text-zinc-300 transition hover:text-gold">
                ← {prevItem.content[language].menuLabel}
              </Link>
            ) : (
              <span />
            )}

            {nextItem ? (
              <Link to={`/references/${nextItem.slug}`} className="text-sm font-semibold text-zinc-300 transition hover:text-gold">
                {nextItem.content[language].menuLabel} →
              </Link>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}

export default ReferenceDetailPage;
