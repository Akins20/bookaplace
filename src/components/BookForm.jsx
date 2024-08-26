export const BookForm = () => {
  return (
    <div className="bg-gray-500 px-auto">
      <form className="p-4 mx-auto">
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />

        <button
          type="submit"
          className="bg-pink-300 text-l px-4 py-2 m-6 border rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};
