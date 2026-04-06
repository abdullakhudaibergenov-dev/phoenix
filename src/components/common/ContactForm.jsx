import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import useLanguage from '../../hooks/useLanguage';

const nameRegex = /^[A-Za-zА-Яа-яЁё\s'-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const { t, language } = useLanguage();
  const messages = {
    en: { name: 'Please enter a valid name.', email: 'Please enter a valid email.', phone: 'Please enter a valid phone number.', message: 'Message must be at least 8 characters.', formError: 'Please complete the form correctly.', success: 'Message sent successfully. We will contact you soon.' },
    ru: { name: 'Введите корректное имя.', email: 'Введите корректный email.', phone: 'Введите корректный номер телефона.', message: 'Сообщение должно быть не менее 8 символов.', formError: 'Пожалуйста, заполните форму корректно.', success: 'Сообщение успешно отправлено. Мы свяжемся с вами.' },
    tr: { name: 'Lütfen geçerli bir isim girin.', email: 'Lütfen geçerli bir e-posta girin.', phone: 'Lütfen geçerli bir telefon numarası girin.', message: 'Mesaj en az 8 karakter olmalıdır.', formError: 'Lütfen formu doğru şekilde doldurun.', success: 'Mesaj başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.' },
  };
  const msg = messages[language] || messages.en;
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const next = {};

    if (!values.name.trim() || !nameRegex.test(values.name.trim())) next.name = msg.name;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) next.email = msg.email;
    if (!values.phone || !isValidPhoneNumber(values.phone)) next.phone = msg.phone;
    if (!values.message.trim() || values.message.trim().length < 8) next.message = msg.message;

    return next;
  }, [values]);

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

    toast.success(msg.success);
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
