import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Please enter a longer name.")
    .required("Name requirement assertion."),
  size: yup
    .string()
    .oneOf(
      ["small", "medium", "large", "extra-large"],
      "What size pizza would you like?"),
  special: yup
    .string()
});

export default formSchema;