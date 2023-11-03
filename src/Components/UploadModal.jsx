import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { headers } from "../../../conflig";
import uploadImg from "../../../image/download.png";
import useScripts from "../../Hooks/useScripts";
import Loading from "../../Loading";
import CheckModal from "../ScriptPage/CheckModal";
import Navbar from "./Navbar";
import { languages } from "./languages";
import { sourceLanguage } from "./sourceLanguage";
import { URL } from "../../../Utils";
const sortSourceLanguage = sourceLanguage.sort();

const url = 'http://115.245.192.138';
const UploadModal = () => {
  const [filename, setFilename] = useState("");
  const [author, setAuthor] = useState("");
  const [sourcesLanguage, setSourcesLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [allScript] = useScripts();
  const navigate = useNavigate();
  const [file, setFile] = useState(null); 

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
  const onSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    const formData = new FormData();
    console.log(file);
    // formData.append("script_file", file);
    const sourcesLng = languages?.filter((x) => x.English === sourcesLanguage);
    formData.append("screenplay", 'screenplay');
    formData.append("author", author);
    formData.append("language", 'language');
    formData.append("file", file);
    
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.xsrfCookieName = "csrftoken";
    
    try {
      const response = await axios.post(`${url}/storytoscript/generateS2S`, formData, {
        headers
      });
      if (response.data.script.id) {
        const script_id = response.data.script.id;
        // navigate(/${script_id});
        // setLoading(true);
      }
    } catch (error) {
      setDisabled(false);
      if (
        error.response.data.non_field_errors[0] ===
        "The fields user, name must make a unique set."
      ) {
        setOpenModal(true);

        formData.append("name", filename);
        toast.error(
          "You script name already exist. Please name must make a unique set",
          {
            position: toast.POSITION.BOTTOM_CENTER,
          }
        );
      }
    }
  };
  useEffect(() => {
    if (!author) {
      setDisabled(true);
    } else if (author) {
      setDisabled(false);
    }
  }, [author, file]);
  const wrapperRef = useRef(null);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  const fileRemove = () => {
    setFile();
  };
  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          {openModal ? (
            <CheckModal
              allScript={allScript}
              file={file}
              filename={filename}
              setOpenModal={setOpenModal}
              setFilename={setFilename}
            />
          ) : (
            <div>
              <form onSubmit={onSubmit}>
                <div className="mt-20 max-w-full flex items-center justify-center">
                  <div className="">
                    {file ? (
                      <div className="card bg-base-100 shadow-xl">
                        {/* <label
                          onClick={fileRemove}
                          htmlFor="upload_script"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label> */}
                        <button
                          onClick={fileRemove}
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          <IoMdArrowRoundBack />
                        </button>
                        <div className="card-body w-[550px]">
                          <h2 className="text-center text-[25px] font-semibold mb-5">
                            Submit Your Script
                          </h2>
                          <label htmlFor="" className="block text-xl">
                            Author Name
                          </label>
                          <input
                           maxLength={100}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                            placeholder="Author Name"
                            className="input input-bordered w-full mb-5"
                          />
                          <label htmlFor="" className="block text-xl">
                            Select language
                          </label>
                          <select
                            onChange={(e) => setSourcesLanguage(e.target.value)}
                            className="select select_error w-full"
                          >
                            <option selected>English</option>
                            {sortSourceLanguage?.map((x) => (
                              <option value={x}>{x}</option>
                            ))}
                          </select>
                          <label htmlFor="" className="block text-xl">
                            Screen Play
                          </label>
                          <input
                           maxLength={100}
                            type="text"
                            value={filename}
                            placeholder="Screen Play"
                            className="input input-bordered w-full mb-5"
                            onChange={(e) => setFilename(e.target.value)}
                          />
                          <div className="card-actions justify-end">
                            <button
                              disabled={disabled}
                              className="bg-[#FFE2E5] edit_active cursor-pointer text-[18px] border-[#FFE2E5] hover:border-[#ee3c4d] text-[#ee3c4d] hover:bg-[#ee3c4d] hover:text-white btn"
                            >
                              UPLOAD
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // <div className="card-body w-[550px]">
                      //   <h2 className="card-title flex justify-center items-center h-[100px]">
                      //     Upload a Script (PDF/DOCX)
                      //   </h2>
                      //   <label
                      //     for="file_file"
                      //     className="border text-center rounded-md my-5 text-xl p-2"
                      //   >
                      //     {filename === ""
                      //       ? "Select a file from your device"
                      //       : File Name: ${filename}}
                      //   </label>
                      //   <input
                      //     type="file"
                      //     onChange={onChange}
                      //     name="hello"
                      //     className="hidden"
                      //     accept="file/*,.pdf,.docx"
                      //     id="file_file"
                      //   />
                      // </div>
                      <div>
                        <h2 className="text-center text-[25px] font-semibold mt-10">
                          Upload a Script (PDF/DOCX)
                        </h2>
                        <div className="box card bg-base-100 shadow-xl">
                          <div
                            ref={wrapperRef}
                            className="drop-file-input"
                            onDragEnter={onDragEnter}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                          >
                            <div className="drop-file-input__label">
                              <img src={uploadImg} className="mx-auto" alt="" />
                              <p>Drag & Drop your script here</p>
                            </div>
                            <input
                              accept="file/*,.pdf,.docx"
                              type="file"
                              value=""
                              className="drop-file-input_input"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadModal;