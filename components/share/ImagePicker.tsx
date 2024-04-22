import { SelectedImage } from "@/app/meals/share/page";
import { ChangeEvent, MouseEvent, useRef } from "react";

type ImagePickerProps = {
  selectedImage: SelectedImage;
  setSelectedImage: (prev: SelectedImage) => void;
};

export default function ImagePicker({
  setSelectedImage,
  selectedImage,
}: ImagePickerProps) {
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
      <div
        className={
          !selectedImage
            ? " w-40 h-40 border-4 justify-center items-center flex text-white"
            : "w-40 h-40 border-4 border-pink-500 duration-500 justify-center items-center flex text-white "
        }
      >
        {typeof selectedImage === "string" ? (
          <img className="h-full w-full" src={selectedImage} alt="Selected" />
        ) : (
          <p className="px-9">No image picked yet</p>
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
