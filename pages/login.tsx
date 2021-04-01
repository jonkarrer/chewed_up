import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = async (event) => {
    if (email !== "karrerjon@gmail.com") {
      return;
    }
    event.preventDefault();

    const { elements } = event.target;

    const did = await new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUB_KEY
    ).auth.loginWithMagicLink({ email: elements.email.value });
    const authRequest = await fetch("/api/login", {
      method: "POST",
      headers: { Authorization: `Bearer ${did}` },
    });

    if (authRequest.ok) {
      // We successfully logged in, our API
      // can redirect to the dashboard!
      router.push("/admin");
    } else {
      return;
    }
  };

  return (
    <>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            placeholder="Enter Admin Email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Log in</button>
        </form>
      </div>
      <style jsx>{`
        .Login {
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3em;
        }
        form {
          display: grid;
          background: #fce6bd;
        }
        input {
          font-size: 0.5em;
          margin: 20px;
          padding: 10px;
        }
        button {
          margin: 20px;
          padding: 10px;
        }
      `}</style>
    </>
  );
}
