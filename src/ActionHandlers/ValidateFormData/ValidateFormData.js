const validateFormData = (formData1, formData2) => {
  if (formData1 === "") {
    console.log("Invalid Details");
  } else if (formData2 === "") {
    console.log("Invalid Details");
  } else {
    return true;
  }
};

export default validateFormData;
