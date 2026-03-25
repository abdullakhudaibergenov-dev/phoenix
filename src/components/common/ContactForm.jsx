import useLanguage from '../../hooks/useLanguage';

function ContactForm() {
  const { t } = useLanguage();
function ContactForm() {
  const inputClasses =
    'w-full rounded-lg border border-zinc-700 bg-primary px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-gold focus:outline-none';

  return (
    <form className="space-y-4 rounded-xl border border-zinc-800 bg-surface p-6 shadow-card" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClasses} placeholder={t.contact.form.name} name="name" />
        <input className={inputClasses} placeholder={t.contact.form.email} name="email" type="email" />
      </div>
      <input className={inputClasses} placeholder={t.contact.form.phone} name="phone" />
      <textarea className={`${inputClasses} min-h-32`} placeholder={t.contact.form.message} name="message" />
      <button className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-goldSoft" type="submit">
        {t.contact.form.send}
        <input className={inputClasses} placeholder="Name" name="name" />
        <input className={inputClasses} placeholder="Email" name="email" type="email" />
      </div>
      <input className={inputClasses} placeholder="Phone" name="phone" />
      <textarea className={`${inputClasses} min-h-32`} placeholder="Message" name="message" />
      <button className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-goldSoft" type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
