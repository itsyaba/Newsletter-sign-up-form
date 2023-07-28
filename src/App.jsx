import signupDesktop from "./assets/illustration-sign-up-desktop.svg";
import iconlist from "./assets/icon-list.svg";
// import listSvg form "./assets/icon-list.svg"
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setSuccess(true);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-CharcoalGrey font-Roboto">
      {!success ? (
        <div className="flex flex-row p-4 bg-White rounded-3xl">
          <div className="mx-10 mt-14">
            <h1 className="mb-8 font-bold text-left text-7xl text-DarkSlateGrey">
              Stay update!
            </h1>
            <div className="text-CharcoalGrey">
              <p className="text-lg font-normal mb-8">
                Join 60,000+ product managers receiving monthly <br /> updates
                on:
              </p>

              <ul className="my-2">
                <ol className="flex flex-row gap-2 mb-1">
                  <img src={iconlist} alt="list" />
                  Product discovery and building what matters
                </ol>
                <ol className="flex flex-row gap-2 mb-1">
                  <img src={iconlist} alt="list" />
                  Measuring to ensure updates are a success
                </ol>
                <ol className="flex flex-row gap-2 mb-1">
                  <img src={iconlist} alt="list" />
                  And much more!
                </ol>
              </ul>
              <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
                <label htmlFor="email" className="font-bold ">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="email@company.com"
                  className="border-2 h-12 px-2 rounded-lg border-Grey"
                  value={email}
                  onChange={handleInput}
                  required
                />
                {!isEmailValid ? (
                  <p>Please enter a valid email address</p>
                ) : null}

                <button
                  className="mt-2 bg-DarkSlateGrey text-White w-full py-3 rounded-md hover:bg-Tomato transition-all"
                  type="submit"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
          <div>
            <img src={signupDesktop} alt="" />
          </div>
        </div>
      ) : (
        <div className="bg-White h-3/5 w-2/6 font-Roboto p-10 rounded-xl">
          <img src={iconlist} alt="" className="w-20 mb-10" />
          <h1 className="text-5xl font-bold mb-5">Thanks for suscribing!</h1>
          <p className="font-normal text-CharcoalGrey">
            A confirmation email has been sent to {email}. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            className="text-White bg-DarkSlateGrey w-full mt-4 p-4 rounded-lg hover:bg-Tomato transition-all duration-300 active:opacity-50"
            onClick={() => setSuccess(!success)}
          >
            Dismiss message
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
