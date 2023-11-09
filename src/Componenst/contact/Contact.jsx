// Import the db instance from firebase.js
import { db } from "../../api/firebase";

import { useRef } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { collection, addDoc } from "firebase/firestore";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const formEmail = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      await saveToFirebase();
      formik.resetForm();
    } else {
      toast.error("Please fill in all the fields!"); // Show error toast if form is incomplete
    }
  };

  const saveToFirebase = async () => {
    // Use the db instance from firebase.js
    const contactCollection = collection(db, "Contact");

    try {
      const docRef = await addDoc(contactCollection, {
        name: formik.values.name,
        email: formik.values.email,
        subject: formik.values.subject,
        company: formik.values.company,
        message: formik.values.message,
        timestamp: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      toast.success("Message sent successfully!"); // Show success toast
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error sending message. Please try again!"); // Show error toast
    }
  };

  const isFormValid = () => {
    // Check if all fields are filled
    return (
      formik.values.name &&
      formik.values.email &&
      formik.values.subject &&
      formik.values.company &&
      formik.values.message
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      company: "",
      message: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <section className="contact">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="info__contact" id="info__contact">
        <div className="contact__text">
          <h1> CONTACT ME</h1>
        </div>
        <div className="contact__link">
          <form ref={form} onSubmit={formEmail}>
            <div className="form__initial">
              <input
                {...formik.getFieldProps("name")}
                type="text"
                className="input-user"
                placeholder="Name"
                name="name"
                id="name"
              />
              <input
                {...formik.getFieldProps("email")}
                type="email"
                className="input-user"
                placeholder="Email"
                name="email"
                id="email"
              />
              <input
                {...formik.getFieldProps("subject")}
                type="text"
                className="input-user"
                placeholder="Subject"
                name="subject"
                id="subject"
              />
              <input
                {...formik.getFieldProps("company")}
                type="text"
                className="input-user"
                placeholder="Company"
                name="company"
                id="company"
              />
            </div>
            <textarea
              {...formik.getFieldProps("message")}
              placeholder="Message"
              className="input-user"
              rows="3"
              name="message"
              id="message"
            ></textarea>

            <button className="contact__email" value="Send" type="submit">
              Send it!
            </button>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <span>April, 2023</span>
        <span>@ahmdfrizza</span>
      </div>
    </section>
  );
};

export default Contact;
