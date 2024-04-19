"use client";

import { useState } from "react";
import { toast } from "sonner";

const typing = ({ params }) => {
  const [result, setResult] = useState("");

  const handleInputData = async (e) => {
    const urlToFetch =
      params.lang == "eng-thai"
        ? "http://localhost:3001/api/english-thai"
        : "http://localhost:3001/api/thai-english";

    let response = await fetch(urlToFetch, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ inputData: e.target.value }),
    });

    const result = await response.json();

    if (response.ok) {
      if (result.data.includes("undefined")) {
        params.lang == "eng-thai"
          ? toast.warning("Incorrect input data type!!!")
          : toast.warning("โปรดกรอกข้อมูลให้ถูกต้อง!!!");

        return;
      }
      setResult(result.data);
    } else {
      toast.error(
        "Something went wrong on the server. Try again later, brother!"
      );
    }
  };
  const handleClick = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied Text");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-3 justify-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <input
          type="text"
          placeholder={
            params.lang == "eng-thai" ? "Type here." : "กรอกข้อความตรงนี้"
          }
          className="input input-bordered input-lg w-96 max-w-xs"
          onChange={handleInputData}
        />
        <textarea
          className="textarea w-full h-96"
          placeholder={
            params.lang == "eng-thai"
              ? "Your result will be here."
              : "ผลลัพธ์ของคุณจะปรากฏตรงนี้"
          }
          value={result}
          disabled
        ></textarea>
      </div>
      <div>
        {" "}
        <button className="btn btn-outline btn-warning" onClick={handleClick}>
          {params.lang == "eng-thai" ? "Copy" : "คัดลอก"}
        </button>
      </div>
    </div>
  );
};

export default typing;
