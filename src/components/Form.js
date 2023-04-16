import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [text, setText] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleMediaFilesChange = (event) => {
    const files = event.target.files;
    const fileData = [];
  
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        fileData.push({
          name: files[i].name,
          type: files[i].type,
          data: reader.result.split(',')[1],
        });
        setMediaFiles(fileData);
      };
    }
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(text);
    console.log(mediaFiles);
    console.log(dateTime);
  };

  const submit_form = (event) => {
  event.preventDefault();

  const form = new FormData();
  form.append("text", text);
  form.append("dateTime", dateTime);

  for (let i = 0; i < mediaFiles.length; i++) {
    form.append("mediaFiles", mediaFiles[i]);
  }
  console.log(form.get("mediaFiles"))

  fetch("http://127.0.0.1:8000/posting_app/post_message/", {
    method: "POST",
    body: form,
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
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
    <form className="form">
      <div className="form-group">
        <label htmlFor="text" className="form-label">
          Text:
        </label>
        <textarea
          name="text"
          value={text}
          onChange={handleTextChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mediaFiles" className="form-label">
          Media files:
        </label>
        <input
          type="file"
          name="mediaFiles"
          multiple
          onChange={handleMediaFilesChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateTime" className="form-label">
          Date and Time:
        </label>
        <input
          type="datetime-local"
          name="dateTime"
          value={dateTime || getCurrentDateTime()}
          onChange={handleDateTimeChange}
          className="form-input"
        />
      </div>

      <div className="button-group">
        <button className="submit-button" onClick={submit_form}>
          Submit
        </button>
        <button className="later-use-button" type="button">
          Later Use 1
        </button>
        <button className="later-use-button" type="button">
          Later Use 2
        </button>
      </div>
    </form>
  );
};

export default Form;
