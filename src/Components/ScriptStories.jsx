import axios from "axios";
import React, { useState } from "react";
import { headers } from "../Hooks/Headers";

const UploadModal = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");

  const onChange = (event) => {
    const file = event.target.files[0];
    const filename = file.name;

    const allowedExtensions = ["pdf", "docx"];
    const fileExtension = filename.split(".").pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      const replaceFileName = file.name.replace(/\.(pdf|docx)$/i, "");
      const truncatedValue = replaceFileName.slice(0, 100);
      // setFilename(truncatedValue);
      setFile(file);
      setFilename(truncatedValue);
    } else {
      alert("Only PDF and DOCX files are allowed.");
      setFile(null);
      setFilename("");
      event.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const screenplay = e.target.screenPlayName.value;
    const author = e.target.authorName.value;
    const language = e.target.languageName.value;

    const formData = new FormData();

    formData.append("screenplay", screenplay);
    formData.append("author", author);
    formData.append("language", "language");
    formData.append("file", file);

    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.xsrfCookieName = "csrftoken";

    try {
      const response = await axios.post(
        " http://115.245.192.138/storytoscript/generateS2S",
        formData,
        {
          headers,
        }
      );
      if (response.data.script.id) {
      }
    } catch (error) {}
  };

  return (
    <div className="w-3/4 2xl:w-3/5 mx-auto">
      <h3 className="text-[24px] font-[700] mb-[25px] ml-[-10px] ">
        Welcome To The Story To Script !
      </h3>

      <p className="mb-[8px] text-[18px]">
        A Screenplay is a technical document.
      </p>
      <p className="mb-[8px] text-[18px]">
        Hence, it is required to be written precisely as per international
        conventions regarding font type and size, indentation, alignment and
        spaces.
      </p>
      <p className="mb-[8px] text-[18px]">
        However, inadvertent human errors may creep in while writing a
        Screenplay.
      </p>
      <p className="mb-[8px] text-[18px]">
        The Script Auditor identifies such inadvertent errors and corrects them.
      </p>
      <p className="mb-[8px] text-[18px]">
        It's simple. Upload your Script, wait for a few minutes and get the
        audited version of your Script.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-[20px] flex  xl:w-3/4">
          <div className="flex items-center">
            <label htmlFor="" className="text-[14px] font-bold">
              ScreenPlay name <span className="text-[#EE3C4D]">*</span>{" "}
            </label>
            <input
              required
              name="screenPlayName"
              type="text"
              className=" border-[1px] px-[8px] border-black rounded-[3px] h-[28px] w-[172px] ml-2"
            />
          </div>
          <div className="flex items-center ml-[100px]">
            <label htmlFor="" className="text-[14px] font-bold">
              Author <span className="text-[#EE3C4D]">*</span>{" "}
            </label>
            <input
              required
              name="authorName"
              type="text"
              className=" border-[1px] px-2 border-black rounded-[3px] h-[28px] w-[172px] ml-[8px]"
            />
          </div>
          <div className=" items-center hidden">
            <label htmlFor="" className="text-[14px] font-bold">
              Language <span className="text-[#EE3C4D]">*</span>{" "}
            </label>
            <select
              required
              name="languageName"
              className="border-[1px] px-2 border-black rounded-[3px] h-[28px] w-[172px] ml-[8px]"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
        </div>

        <div className="mt-[20px]  ">
          <p className="text-[24px] font-bold text-[#ee3c4d]">
            Upload Your Story !
          </p>
          <p className="text-[14px] font-[400]">
            (Please upload your script in "docx", "pdf" or "txt" format only..)
          </p>
          <input
            required
            onChange={onChange}
            type="file"
            accept=".docx, .pdf, .txt"
            className="mt-[20px]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#EE3C4D] text-white text-xl h-[38px] w-[120px]  rounded-[5px] shadow hover:shadow-red-400 mt-10 "
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadModal;
