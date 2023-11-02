export default function LoginForm({ user, setUser }) {
  const login = () => {
    user === null
      ? setUser({
          id: 1,
          name: "John",
          email: "john.doe@gmail.com",
        })
      : setUser(null);
  };
  return (
    <>
      <h2 className="page-title">Login</h2>
      <form action="#">
        <button
          type="submit"
          onClick={() => {
            login();
          }}
        >
          {user === null ? <p>Login</p> : <p>Log Out</p>}
        </button>
      </form>
    </>
  );
}
