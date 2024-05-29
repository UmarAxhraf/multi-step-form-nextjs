import React, { useState } from "react";
import { GoLock } from "react-icons/go";

const FormStep2 = ({
  formData,
  setFormData,
  setCurrentStep,
  selectedOption,
}) => {
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number should contain only numbers";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
      console.log(selectedOption, formData);
    }
  };

  const nextStep = () => {
    setErrors({});
    setCurrentStep(3);
  };

  return (
    <div className="mx-auto px-2">
      <h2 className="text-2xl text-[#051011] mb-6 text-center font-semibold">
        Step #2
      </h2>
      <p className="mb-6 text-[#051011] text-center text-2xl font-semibold leading-8">
        Details
      </p>
      <p className="not-italic text-center text-base text-[#6B7280] mb-8">
        We’re thrilled at the opportunity to help you grow your business online.
        Please let us know the best way to reach you.
      </p>
      <div className="mb-4">
        <label className="mb-2 text-[#051011] text-sm font-semibold block">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`mt-1 block w-full border-[1px] rounded-md h-12 mb-0 p-1 ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="mb-2 text-[#051011] text-sm font-semibold block">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`mt-1 block w-full border-[1px] rounded-md h-12 p-1 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>
        <div className="flex-1">
          <label className="mb-2 text-[#051011] text-sm font-semibold block">
            Phone Number
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`mt-1 block w-full border-[1px] rounded-md h-12 p-1 ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 text-[#051011] text-sm font-semibold block">
          Anything else you’d like to share?
        </label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`mt-1 block w-full border-[1px] rounded-md h-24 resize-none ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
      </div>
      <div className="flex justify-center py-4">
        <button
          className="bg-[#019F44] text-center justify-center text-white px-6 py-2"
          onClick={handleValidation}
        >
          Send Request
        </button>
      </div>
      <div className="flex items-center justify-center mt-4 mb-4">
        <GoLock />
        <p className="flex text-[#6B7280] text-xs pl-1">
          We promise never to share your information or spam your inbox
        </p>
      </div>
    </div>
  );
};

export default FormStep2;
