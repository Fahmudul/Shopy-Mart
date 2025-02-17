"use client";
import { SetStateAction } from "react";
import { Input } from "../../input";
import { cn } from "@/lib/utils";
type TImageUploader = {
  label?: string;
  className?: string;
  setImageFiles: React.Dispatch<SetStateAction<File[]>>;
  setImagePreview: React.Dispatch<SetStateAction<string[]>>;
};

const SMImageUploader = ({
  label = "Upload Images",
  className,
  setImageFiles,
  setImagePreview,
}: TImageUploader) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      setImagePreview((prev) => [...prev, URL.createObjectURL(file)]);
    }
  };

  return (
    <div className={cn("flex flex-col items-center w-full gap-4", className)}>
      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />
      <label
        htmlFor="image-upload"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        {label}
      </label>
    </div>
  );
};

export default SMImageUploader;
