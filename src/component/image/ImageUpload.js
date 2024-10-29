import axios from "axios";
import { imgbbAPI } from "config/config";
import React from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  //  request imgbb to upload
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data.data);

    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload image to imgbbAPI");
      return;
    }
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    // lưu vào my db
    onChange(name, imageObj);
    return;
  };
  return (
    <label className="flex w-full h-[200px] border border-gray-200 border-dashed rounded-xl cursor-pointer items-center justify-center text-text4">
      <input type="file" className="hidden" onChange={handleUploadImage} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
