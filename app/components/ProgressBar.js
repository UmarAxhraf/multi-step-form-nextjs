const ProgressBar = ({ currentStep }) => {
  let progressWidth = "0%";
  if (currentStep === 1) {
    progressWidth = "33.33%";
  } else if (currentStep === 2) {
    progressWidth = "66.67%";
  } else if (currentStep === 3) {
    progressWidth = "100%";
  }

  return (
    <div className="h-2 bg-[#E5E7EB]">
      <div className="h-2 bg-[#019F44]" style={{ width: progressWidth }}></div>
    </div>
  );
};

export default ProgressBar;
