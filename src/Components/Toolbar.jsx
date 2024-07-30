import React, { useState, useRef } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa";
import Textbox from "./Textbox";
import WordsCounter from "./WordsCounter";

const Toolbar = () => {
  const [fontBold, setFontBold] = useState(false);
  const [fontItalic, setFontItalic] = useState(false);
  const [fontUnderline, setFontUnderline] = useState(false);
  const [fontSize, setFontSize] = useState("20px");
  const [fontColor, setFontColor] = useState("");
  const [fontStyle, setFontStyle] = useState("cursive");
  const [transformFont, setTransformFont] = useState("lowercase");
  const [textAlign, setTextAlign] = useState("start");
  const [inputField, setInputField] = useState("");
  const [countWords, setCountWords] = useState(0);
  const [countLetters, setCountLetters] = useState(0);

  // console.log(inputField);

  const TextAreaField = useRef();

  const inputTextField = () => {
    TextAreaField.current.value = "";
  };

  const boldText = () => {
    setFontBold(!fontBold);
  };

  const italicFont = () => {
    setFontItalic(!fontItalic);
  };

  const underlineFont = () => {
    setFontUnderline(!fontUnderline);
  };

  const changeColor = (e) => {
    let textColor = e.target.value;
    setFontColor(textColor);
  };

  const wordsCount = () => {
    let words = inputField.split(" ");
    let result = words.length;
    setCountWords(result);
  };
  const lettersCount = () => {
    let words = inputField.split("");
    let result = words.length;
    setCountLetters(result);
  };

  return (
    <>
      <div className="bg-[#cfcfcf] text-sm md:text-lg text-black w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-3 px-6 pb-6 lg:pb-0">
        <div className="flex gap-3 items-center">
          <div className="flex gap-4 bg-white w-max px-4 rounded my-4 p-1">
            <button
              className={`${
                fontBold ? "bg-black text-white" : ""
              } font-bold hover:bg-[#305196]  hover:text-white rounded px-2`}
              onClick={boldText}
            >
              B
            </button>
            <button
              className={`${
                fontItalic ? "bg-black text-white" : ""
              } italic hover:bg-[#305196]  hover:text-white rounded px-2`}
              onClick={italicFont}
            >
              I
            </button>
            <button
              className={`${
                fontUnderline ? "bg-black text-white" : ""
              } underline hover:bg-[#305196]  hover:text-white rounded px-2`}
              onClick={underlineFont}
            >
              U
            </button>
          </div>
          <div>
            <select className="px-1 md:px-4 py-1 rounded"
              style={{ fontFamily: fontStyle }}
              onChange={(e) => setFontStyle(e.target.value)}
            >
              Select Fonts
              <option value="cursive" style={{ fontFamily: "cursive" }}>
                Cursive
              </option>
              <option value="-moz-initial" style={{ fontFamily: "-moz-initial" }}>
                Monospace
              </option>
              <option value="fantasy" style={{ fontFamily: "fantasy" }}>
                Forma
              </option>
            </select>
          </div>
          <input
            className="bg-white p-1 rounded"
            type="color"
            onChange={changeColor}
          />
        </div>

        <div className="flex flex-col lg:flex-row  flex-nowrap justify-center items-center gap-3">
          <div className="flex gap-4">
            <div>
              <select
                className="px-4 py-1 rounded" 
                name="font"
                id="font"
                onChange={(e) => setFontSize(e.target.value)}
              >
                <option value="10px">10px</option>
                <option value="20px">20px</option>
                <option value="30px">30px</option>
              </select>
            </div>
            <div>
              <select
                name="font"
                id="font"
                className="rounded py-1"
                onChange={(e) => setTransformFont(e.target.value)}
              >
                <option value="uppercase">UPPERCASE</option>
                <option value="lowercase">lowercase</option>
                <option value="capitalize">Capitalize</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 bg-white w-max px-4 rounded">
            <button
              className={` hover:bg-[#305196]  hover:text-white rounded p-2`}
              onClick={() => {
                setTextAlign("start");
              }}
            >
              <FaAlignLeft />
            </button>
            <button
              className="hover:bg-[#305196]  hover:text-white rounded p-2"
              onClick={() => {
                setTextAlign("center");
              }}
            >
              <FaAlignCenter />
            </button>
            <button
              className="hover:bg-[#305196]  hover:text-white rounded p-2"
              onClick={() => {
                setTextAlign("end");
              }}
            >
              <FaAlignRight />
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <button
              className="bg-white rounded hover:bg-[#305196] hover:text-white px-1 md:px-4 p-1"
              onClick={wordsCount}
            >
              Count Words
            </button>
            <button
              className="bg-white rounded hover:bg-[#305196]  hover:text-white px-1 md:px-4 p-1"
              onClick={lettersCount}
            >
              Count Letters
            </button>
            <button
              className="bg-white rounded hover:bg-[#305196]  hover:text-white px-1 md:px-4  p-1"
              onClick={inputTextField}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <Textbox
        fontBold={fontBold}
        fontItalic={fontItalic}
        fontUnderline={fontUnderline}
        textAlign={textAlign}
        transformFont={transformFont}
        fontSize={fontSize}
        fontStyle={fontStyle}
        textColor={fontColor}
        TextAreaField={TextAreaField}
        inputField={setInputField}
      />
      <WordsCounter countWords={countWords} countLetters={countLetters} />
    </>
  );
};

export default Toolbar;
