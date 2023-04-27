import React, { useState } from "react";
import Modal from "react-modal";

import "./Form.css";
Modal.setAppElement("#root");

const Form = () => {
  const [text, setText] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [facebookChecked, setFacebookChecked] = useState(true);
  const [linkedinChecked, setLinkedinChecked] = useState(true);
  const [twitterChecked, setTwitterChecked] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newText, setNewText] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const summerize = () => {
    fetch("http://127.0.0.1:8000/posting_app/summerize/", {
      method: "POST",
      body: JSON.stringify({ text: text }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNewText(data["summary"]);
        setModalTitle("Summary of given text");
        setModalVisible(true);
        setText(data["summary"]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const rephrase = () => {
    fetch("http://127.0.0.1:8000/posting_app/rephrase/", {
      method: "POST",
      body: JSON.stringify({ text: text }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNewText(data["rephrase"]);
        setModalTitle("Rephrase of given text");
        setModalVisible(true);
        setText(data["rephrase"]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submit_form = (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append("text", text);
    form.append("dateTime", dateTime);

    fetch("http://127.0.0.1:8000/posting_app/post_message/", {
      method: "POST",
      body: JSON.stringify({
        text: text,
        facebook: facebookChecked,
        twitter: twitterChecked,
        linkedin: linkedinChecked,
        date_time: dateTime,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        alert(data["message"]);
        setText("");
        setDateTime("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minute}`;
  };

  return (
    <>
      <Modal isOpen={modalVisible} onRequestClose={handleCloseModal}>
        <h2>{modalTitle}</h2>
        <p>{newText}</p>
        <button
          onClick={() => {
            setText(newText);
            handleCloseModal();
          }}
          className="bg-primary text-white"
          style={{ marginRight: 50, height: 50, borderColor: "blue" }}
        >
          Replace this
        </button>
        <button onClick={handleCloseModal} className="bg-danger text-white" style={{ height: 50 }}>
          Don't Replace
        </button>
      </Modal>
      <form className="form" onSubmit={submit_form}>
        <div className="form-group">
          <label htmlFor="text" className="form-label">
            Text:
          </label>
          <textarea name="text" value={text} onChange={handleTextChange} className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="social-media" className="form-label">
            Social Media:
          </label>
          <div className="checkbox-group">
            <label htmlFor="facebook" className="checkbox-label" style={{ marginRight: 10 }}>
              <input type="checkbox" name="facebook" value="Facebook" className="checkbox-input" checked={facebookChecked} onClick={() => setFacebookChecked(!facebookChecked)} />
              Facebook
            </label>
            <label htmlFor="linkedin" className="checkbox-label" style={{ marginRight: 10 }}>
              <input type="checkbox" name="linkedin" value="LinkedIn" className="checkbox-input" checked={linkedinChecked} onClick={() => setLinkedinChecked(!linkedinChecked)} />
              LinkedIn
            </label>
            <label htmlFor="twitter" className="checkbox-label">
              <input type="checkbox" name="twitter" value="Twitter" className="checkbox-input" checked={twitterChecked} onClick={() => setTwitterChecked(!twitterChecked)} />
              Twitter
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dateTime" className="form-label">
            Date and Time:
          </label>
          <input type="datetime-local" name="dateTime" value={dateTime || getCurrentDateTime()} onChange={handleDateTimeChange} className="form-input" min={new Date().toISOString().slice(0, 16)} />
        </div>

        <div className="button-group">
          <button className="submit-button" type="submit">
            Submit
          </button>
          <button className="later-use-button" type="button" onClick={summerize}>
            Summerize
          </button>
          <button className="later-use-button" type="button" onClick={rephrase}>
            Rephrase
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
