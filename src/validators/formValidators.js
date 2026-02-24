

export const validateForm = (formData) => {

  const errors = {};

  if (!formData.name || formData.name.trim() === "") {
    errors.name = "Name is required";
  }

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(formData.name)) {
    errors.name = "Name can contain only letters and spaces";
  }

  if (!formData.birthdate) {
    errors.birthdate = "Birthdate required";
  }

  const ageRegex = /^[0-9]+$/;

  if (!ageRegex.test(formData.age))
    return "Age must contain only numbers";

  if (!formData.gender) {
    errors.gender = "Gender required";
  }

  if (!formData.language || formData.language.length === 0) {
    errors.language = "Select at least one language";
  }

  if (!formData.state) {
    errors.state = "State required";
  }

  if (!formData.city) {
    errors.city = "City required";
  }

  if (!formData.pincode) {
    errors.pincode = "Pincode required";
  }
  else if (!/^[0-9]{6}$/.test(formData.pincode)) {
    errors.pincode = "Pincode must be 6 digits";
  }

  return errors;
};
