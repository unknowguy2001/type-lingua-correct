const typing = ({ params }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-3 justify-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <input
          type="text"
          placeholder={
            params.lang == "eng-thai" ? "Type here" : "กรอกข้อความตรงนี้"
          }
          className="input input-bordered input-lg w-96 max-w-xs"
        />
        <textarea
          className="textarea w-full h-96"
          placeholder={
            params.lang == "eng-thai"
              ? "Your result will be here."
              : "ผลลัพธ์ของคุณจะปรากฏตรงนี้"
          }
          disabled
        ></textarea>
      </div>
      <div>
        {" "}
        <button className="btn btn-outline btn-warning">{params.lang == "eng-thai" ? "Copy" : "คัดลอก"}</button>
      </div>
    </div>
  );
};

export default typing;
