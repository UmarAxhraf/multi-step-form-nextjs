const FormStep1 = ({ formData, setFormData, handleNext }) => {
  const handleOptionClick = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      budget: option,
    }));
    handleNext();
  };

  return (
    <div className="max-w-[480px] mx-auto px-2">
      <h2 className="text-2xl text-[#051011] mb-6 text-center font-semibold">
        Step #1
      </h2>
      <p className="mb-6 text-[#051011] text-center text-2xl font-semibold leading-8">
        What is your monthly digital marketing budget?
      </p>
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={() => handleOptionClick("< $1,000/mo")}
          className="w-full h-14 text-[#6B7280] mb-2 p-4 bg-white rounded-md border-[1px]"
        >
          {"< $1,000/mo"}
        </button>
        <button
          onClick={() => handleOptionClick("$1,000 - $2,000")}
          className="w-full h-14 text-[#6B7280] mb-2 p-4 bg-white rounded-md border-[1px]"
        >
          {"$1,000 - $2,000"}
        </button>
        <button
          onClick={() => handleOptionClick("$2,000 - $5,000")}
          className="w-full h-14 text-[#6B7280] mb-2 p-4 bg-white rounded-md border-[1px]"
        >
          {"$2,000 - $5,000"}
        </button>
        <button
          onClick={() => handleOptionClick("$5,000 - $10,000")}
          className="w-full h-14 text-[#6B7280] mb-2 p-4 bg-white rounded-md border-[1px]"
        >
          {"$5,000 - $10,000"}
        </button>
        <button
          onClick={() => handleOptionClick("$10,000 - $25,000")}
          className="w-full h-14 text-[#6B7280] mb-2 p-4 bg-white rounded-md border-[1px]"
        >
          {"$10,000 - $25,000"}
        </button>
        <button
          onClick={() => handleOptionClick("$25,000 +")}
          className="w-full h-14 text-[#6B7280] mb-7 p-4 bg-white rounded-md border-[1px]"
        >
          {"$25,000 +"}
        </button>
      </div>
    </div>
  );
};

export default FormStep1;
