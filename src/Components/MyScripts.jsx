import React, { useState } from "react";
import { FaDownload, FaEllipsisH, FaTrashAlt } from "react-icons/fa";

const MyScripts = () => {
  const [hamDrop, setHamDrop] = useState(false);

  return (
    <div className="w-3/4 2xl:w-3/5 mx-auto">
      <h3 className="text-[24px] font-[700] mb-[25px] ml-[-10px] ">
        Welcome To The Story To Script !
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
        <div className="crd_div shadow-[#624a4d74] shadow-2xl w-full rounded-[8px] px-[10px] py-[15px]">
          <div className="top_div flex flex-row-reverse pb-[10px] relative">
            <FaEllipsisH
              className={` cursor-pointer hover:text-[#ee3c4d] ${
                hamDrop ? "text-[#ee3c4d]" : "text-[#898b89ac]"
              }`}
              onClick={() => {
                setHamDrop(!hamDrop);
              }}
            />
            {hamDrop && (
              <div className="border bg-white h-[150px] w-[230px] shadow-md rounded-[5px] absolute top-[20px] flex flex-col justify-center text-left pl-[20px]  text-[14px]">
                <button className="text-left text-[#898b89] flex gap-[5px] items-center">
                  {" "}
                  <FaTrashAlt /> Delete Script
                </button>
                <button className="text-left text-[#898b89] flex gap-[5px] items-center mt-[3px]">
                  <FaDownload />
                  Download Original
                </button>
                <button className="text-left text-[#898b89] flex gap-[5px] items-center mt-[3px]">
                  {" "}
                  <FaDownload />
                  Download Audited Report
                </button>
              </div>
            )}
          </div>
          <div className="project_div flex gap-[5px]">
            <div className="h-[70px] w-[70px] bg-[#ee3c4d] rounded-full" />
            <div className="w-3/5">
              <p className="text-[18px] font-[600]">
                check page break docx file .docx
              </p>
              <p className="text-[14px] font-[500] text-[#898b89] hover:text-[#ee3c4d]">
                Copyright
              </p>
            </div>
          </div>

          <div className="py-[20px] ">
            <div className="flex justify-between items-center">
              <p className="text-[15px] font-[500]">Author:</p>
              <p className="text-[14px] font-[500] text-[#898b89]">
                Moniruzzaman
              </p>
            </div>
            <div className="flex justify-between items-center mt-[5px]">
              <p className="text-[15px] font-[500]">Uploaded On:</p>
              <p className="text-[14px] font-[500] text-[#898b89] hover:text-[#ee3c4d]">
                June 07, 2023 02:27 PM
              </p>
            </div>
          </div>

          <div className="btn-div flex flex-col gap-[5px] text-[14px]">
            <button className="w-full bg-[#e8ffd6] hover:bg-[#7bc244;] py-[15px] rounded-[4px] hover:text-white text-[#7bc244] font-[600]">
              Download Audited Script (PDF)
            </button>
            <button className="w-full bg-[#e8ffd6] hover:bg-[#7bc244;] py-[15px] rounded-[4px] hover:text-white text-[#7bc244] font-[600]">
              Download Audited Script (DOCX)
            </button>
            <button className="w-full bg-[#e8ffd6] hover:bg-[#7bc244;] py-[15px] rounded-[4px] hover:text-white text-[#7bc244] font-[600]">
              View / Edit in Scriptpad
            </button>
          </div>
        </div>
        <div className="crd_div shadow-[#624a4d74] shadow-2xl w-full rounded-[8px] px-[10px] py-[15px]">
          <div className="top_div flex flex-row-reverse pb-[10px] relative">
            <FaEllipsisH
              className={` cursor-pointer hover:text-[#ee3c4d] ${
                hamDrop ? "text-[#ee3c4d]" : "text-[#898b89ac]"
              }`}
              onClick={() => {
                setHamDrop(!hamDrop);
              }}
            />
            {hamDrop && (
              <div className="border bg-white h-[150px] w-[230px] shadow-md rounded-[5px] absolute top-[20px] flex flex-col justify-center text-left pl-[20px]  text-[14px]">
                <button className="text-left text-[#898b89] flex gap-[5px] items-center">
                  {" "}
                  <FaTrashAlt /> Delete Script
                </button>
                <button className="text-left text-[#898b89] flex gap-[5px] items-center mt-[3px]">
                  <FaDownload />
                  Download Original
                </button>
                <button className="text-left text-[#898b89] flex gap-[5px] items-center mt-[3px]">
                  {" "}
                  <FaDownload />
                  Download Audited Report
                </button>
              </div>
            )}
          </div>
          <div className="project_div flex gap-[5px]">
            <div className="h-[70px] w-[70px] bg-[#ee3c4d] rounded-full" />
            <div className="w-3/5">
              <p className="text-[18px] font-[600]">
                check page break docx file .docx
              </p>
              <p className="text-[14px] font-[500] text-[#898b89] hover:text-[#ee3c4d]">
                Copyright
              </p>
            </div>
          </div>

          <div className="py-[20px] ">
            <div className="flex justify-between items-center">
              <p className="text-[15px] font-[500]">Author:</p>
              <p className="text-[14px] font-[500] text-[#898b89]">
                Moniruzzaman
              </p>
            </div>
            <div className="flex justify-between items-center mt-[5px]">
              <p className="text-[15px] font-[500]">Uploaded On:</p>
              <p className="text-[14px] font-[500] text-[#898b89] hover:text-[#ee3c4d]">
                June 07, 2023 02:27 PM
              </p>
            </div>
          </div>

          <div className="btn-div flex flex-col gap-[5px] text-[14px]">
            <button className="w-full bg-[#FFE2E5] hover:bg-[#ee3c4d] py-[15px] rounded-[4px] hover:text-white text-[#ee3c4d] font-[600]">
              Download Audited Script (PDF)
            </button>
            <button className="w-full bg-[#FFE2E5] hover:bg-[#ee3c4d] py-[15px] rounded-[4px] hover:text-white text-[#ee3c4d] font-[600]">
              Download Audited Script (DOCX)
            </button>
            <button className="w-full bg-[#FFE2E5] hover:bg-[#ee3c4d] py-[15px] rounded-[4px] hover:text-white text-[#ee3c4d] font-[600]">
              View / Edit in Scriptpad
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default MyScripts;
