import { useEffect, useRef, useState, FormEvent} from "react";
import emailjs from "@emailjs/browser";
import { service_id, temp_key, public_key } from '../../apikeys.jsx'

export default function Contact() {

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false)
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setSuccess(false);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    if (form.current !== null) {
      emailjs
        .sendForm(service_id, temp_key, form.current, {
          publicKey: public_key,
        })
        .then(
          () => {
            setSuccess(true);
            setLoading(false)
            if (form.current) {
              form.current.reset();
            }
          },
          (error: any) => {
            setSuccess(false);
            setLoading(false);
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div id="contact" className="mt-40 mb-40">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "60px",
        }}
      >
        <h1 className="text-3xl">Contact</h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="sm:col-span-4 w-80">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="name"
                id="name"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Name"
                aria-required="true"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 w-80">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 mt-10"
          >
            Email
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="email"
                name="email"
                id="email"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Email"
                aria-required="true"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 w-80">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 mt-10"
          >
            Message
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                name="message"
                id="message"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Message"
                aria-required="true"
                required={true}
              />
            </div>
          </div>
        </div>
        {!success ? (
          <button style={{ display: "flex" }} className="mt-10" aria-label="Send button" disabled={loading}>
            <a className="btn bg-orange-100 text-l w-80">Send</a>
          </button>
        ) : (
          <button style={{ display: "flex" }} className="mt-10" disabled={true} aria-label="Button disabled, message sent">
            <a className="btn bg-green-100 text-l w-80">Message Sent!</a>
          </button>
        )}
      </form>
    </div>
  );
}
