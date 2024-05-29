"use client";
import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import Header from "../Header";
import ProgressBar from "../ProgressBar";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    budget: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleExit = () => {};

  return (
    <>
      <Header handleBack={handleBack} handleExit={handleExit} />
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
        <div className="flex flex-col max-w-xl mx-auto items-center w-full mt-8">
          {currentStep === 1 && (
            <FormStep1 setFormData={setFormData} handleNext={handleNext} />
          )}
          {currentStep === 2 && (
            <FormStep2
              formData={formData}
              setFormData={setFormData}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 3 && <FormStep3 />}
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
