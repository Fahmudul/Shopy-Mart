"use client";
import { createProduct } from "@/Services/Products";
import { Button } from "@/components/ui/button";
import SMImageUploader from "@/components/ui/core/ImageUploader";
import ImagePreviewer from "@/components/ui/core/ImageUploader/ImagePreviwer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { Ref, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateProductModal = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [inputFields, setInputFields] = useState<{ value: string }[]>([]);
  const [showAddField, setShowAddField] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const addBtnRef = useRef<HTMLButtonElement>(null);
  const createField = () => {
    setShowAddField(true);
    setShowButton(false);
  };
  // Add new input field
  const handleAddField = () => {
    console.log(addBtnRef.current?.value);
    setInputFields([
      ...inputFields,
      { value: addBtnRef.current?.value as string },
    ]);
    setShowAddField(false);
    setShowButton(true);
  };

  // Remove input field
  const handleRemoveField = (index: number) => {
    const newInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newInputFields);
    setShowButton(true);
  };

  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // console.log(data);
      const modifiedData = {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock),
        weight: Number(data.weight),
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(modifiedData));
      for (const imageFile of imageFiles) {
        formData.append("images", imageFile as File);
      }

      const res = await createProduct(formData);
      console.log(res);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  console.log(imageFiles);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Product</Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-screen  ">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Product Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Product Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 w-72"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stock */}
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Weight */}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand */}
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Available Colors */}
            <FormField
              control={form.control}
              name="availableColors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Colors</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      placeholder="Silver, Black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Specifications */}
            {/* <FormField
              control={form.control}
              name="specification.processor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Processor</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specification.ram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RAM</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specification.storage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Storage</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specification.display"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* Dynamic Input field */}
            <div>
              <div>
                {showAddField && (
                  <div className="flex justify-between items-center ">
                    <Input
                      ref={addBtnRef as Ref<HTMLInputElement> | undefined}
                      className="my-3 flex-1"
                      placeholder="Enter field name"
                    />
                    <button onClick={() => handleAddField()} className="my-3">
                      add
                    </button>
                  </div>
                )}
              </div>
              {inputFields.map((fieldName, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={`specification.${fieldName.value}`}
                  render={({ field }) => (
                    <div className="flex justify-between items-center gap-4">
                      <FormItem className="flex-1">
                        <FormLabel>Specification</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <button onClick={() => handleRemoveField(index)}>
                        <X />
                      </button>
                    </div>
                  )}
                />
              ))}

              <button
                className={`${showButton ? "block" : "hidden"}`}
                onClick={createField}
                type="button"
              >
                <Plus size={20} />
              </button>
            </div>
            {/* Key Features */}
            <FormField
              control={form.control}
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Features</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      placeholder="Long battery life, Slim and lightweight"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload */}
            <div className="mt-8">
              <SMImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Icon"
              />
            </div>
            <div className="w-full">
              {imagePreview.length > 0 && (
                <ImagePreviewer
                  setImageFiles={setImageFiles}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                  className="mt-8 grid grid-cols-3"
                />
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="mt-5 w-full">
              {isSubmitting ? "Creating...." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProductModal;
