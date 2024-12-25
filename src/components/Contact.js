const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <form className="flex flex-col gap-4 max-w-xl">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-black"
        />
        <label htmlFor="email">Email:</label>
        <input
          placeholder="email"
          type="email"
          id="email"
          name="email"
          className="border border-black"
        />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" className="border border-black" />
        <button
          type="submit"
          className="border border-black p-x-12 p-y-6 max-w-16 bg-blue-700 text-white rounded-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
