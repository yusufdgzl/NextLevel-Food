import { ChangeEvent, MouseEvent, useRef, useState } from "react";

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null | undefined
  >(null);

  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex items-center space-x-10  ">
      <div className="w-40 h-40 border justify-center items-center flex text-white ">
        {selectedImage ? (
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
        onChange={handleImageChange}
      />
      <button onClick={handlePickClick} className=" bg-slate-300 h-8 px-6 ">
        Pick an image
      </button>
    </div>
  );
}
