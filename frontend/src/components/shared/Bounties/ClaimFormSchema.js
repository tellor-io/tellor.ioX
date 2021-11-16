import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "First name is required. Must be at least 3 characters.")
    .required(),
  lastName: yup
    .string()
    .min(3, "Last name is required. Must be at least 3 characters.")
    .required(),
  email: yup
    .string()
    .matches(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a vaild email. Submitting an email is required."
    )
    .required(),
  discord: yup.string().optional(),
  telegram: yup.string().optional(),
  comments: yup.string().optional(),
});

export const suggestABountyFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "First name is required. Must be at least 3 characters.")
    .required(),
  lastName: yup
    .string()
    .min(3, "Last name is required. Must be at least 3 characters.")
    .required(),
  email: yup
    .string()
    .matches(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email. Submitting an email is required."
    )
    .required(),
  discord: yup.string().optional(),
  telegram: yup.string().optional(),
  comments: yup
    .string()
    .min(25, "Please tell us more about your idea!")
    .required(),
});
