function ContactForm() {
  return (
    <form className="space-y-4 rounded-xl bg-white p-6 shadow-card" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder="Name" name="name" />
        <input className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder="Email" name="email" type="email" />
      </div>
      <input className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder="Phone" name="phone" />
      <textarea className="min-h-32 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder="Message" name="message" />
      <button className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700" type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
