import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import useLanguage from '../../hooks/useLanguage';

const nameRegex = /^[A-Za-zА-Яа-яЁё\s'-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const { t } = useLanguage();
  const msg = t.contact.validation;
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const next = {};

    if (!values.name.trim() || !nameRegex.test(values.name.trim())) next.name = msg.name;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) next.email = msg.email;
    if (!values.phone || !isValidPhoneNumber(values.phone)) next.phone = msg.phone;
    if (!values.message.trim() || values.message.trim().length < 8) next.message = msg.message;

    return next;
  }, [msg, values]);

  const hasErrors = Object.keys(errors).length > 0;

  const inputClasses = (field) =>
    `w-full rounded-lg border bg-surface px-4 py-3 text-sm text-body placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[color:var(--heading)] ${
      touched[field] && errors[field] ? 'border-red-500' : 'border-theme'
    }`;

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });

    if (hasErrors) {
      toast.error(msg.formError);
      return;
    }

    toast.success(t.contact.success);
    setValues({ name: '', email: '', phone: '', message: '' });
    setTouched({});
  };

  return (
    <form className="space-y-4 rounded-xl border border-theme bg-surface p-6 shadow-card" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            className={inputClasses('name')}
            placeholder={t.contact.form.name}
            name="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          />
          {touched.name && errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
        </div>

        <div>
          <input
            className={inputClasses('email')}
            placeholder={t.contact.form.email}
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
          {touched.email && errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <div className={`phone-input rounded-lg border px-3 py-3 ${touched.phone && errors.phone ? 'border-red-500' : 'border-theme'}`}>
          <PhoneInput
            defaultCountry="US"
            international
            placeholder={t.contact.form.phone}
            value={values.phone}
            onChange={(value) => setValues((prev) => ({ ...prev, phone: value || '' }))}
            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
          />
        </div>
        {touched.phone && errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
      </div>

      <div>
        <textarea
          className={`${inputClasses('message')} min-h-32`}
          placeholder={t.contact.form.message}
          name="message"
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
        />
        {touched.message && errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message}</p> : null}
      </div>

      <button className="rounded-lg bg-[color:var(--heading)] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95" type="submit">
        {t.contact.form.send}
      </button>
    </form>
  );
}

export default ContactForm;
