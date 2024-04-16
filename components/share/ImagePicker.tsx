import { SelectedImage } from "@/app/meals/share/page";
import { ChangeEvent, MouseEvent, useRef } from "react";

type ImagePickerProps = {
  onHandleImageChange: (event:ChangeEvent<HTMLInputElement>) => void;
  selectedImage : SelectedImage; 
}

export default function ImagePicker({onHandleImageChange,selectedImage}:ImagePickerProps) {



  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    imageInputRef.current?.click();
  }


  return (
    <div className="flex items-center space-x-10  ">
      <div className="w-40 h-40 border justify-center items-center flex text-white ">
        {typeof selectedImage === 'string' ? (
          <img className="h-full w-full" src={selectedImage} alt="Selected" />
        ) : (
          <p className="px-10">No image picked yet</p>
        )}
      </div>

      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={imageInputRef}
        onChange={onHandleImageChange}
      />
      <button onClick={handlePickClick} className=" bg-slate-300 h-8 px-6 ">
        Pick an image
      </button>
    </div>
  );
}
