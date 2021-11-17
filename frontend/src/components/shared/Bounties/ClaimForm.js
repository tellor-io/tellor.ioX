import React, { useState, useEffect } from "react";
import { Button } from "antd";
import * as yup from "yup";
import { formSchema, suggestABountyFormSchema } from "./ClaimFormSchema.js";

function ClaimForm({ jobForm, claimerPanels, indexKey, setPanelsArr, record }) {
  let initialFormValues = {
    jobTitle: jobForm.jobTitle,
    jobType: jobForm.jobType,
    firstName: "",
    lastName: "",
    email: "",
    discord: "",
    telegram: "",
    comments: "",
  };
  let initialErrorValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  let initialSuggestErrorValues = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  };

  //Setting Form Values to include jobTitle and jobType from previous screen.
  const [formValues, setFormValues] = useState(initialFormValues);
  //Setting Form Errors
  const [errors, setErrors] = useState(initialErrorValues);
  //Setting Suggest A Bounty Form Errors
  const [suggestErrors, setSuggestErrors] = useState(initialSuggestErrorValues);
  //Setting the button to be disabled until formSchema are met.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //yup validation for when user updates the form's values
  const validateFormChange = (e) => {
    e.persist();
    if (record.key === 1000) {
      yup
        .reach(suggestABountyFormSchema, e.target.name)
        .validate(e.target.value)
        .then(() => {
          setSuggestErrors({
            ...suggestErrors,
            [e.target.name]: "",
          });
        })
        .catch((err) => {
          setSuggestErrors({
            ...suggestErrors,
            [e.target.name]: err.errors[0],
          });
        });
    } else {
      yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(() => {
          setErrors({
            ...errors,
            [e.target.name]: "",
          });
        })
        .catch((err) => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0],
          });
        });
    }
  };

  //Setting Claim Modal Form Values upon first render
  useEffect(() => {
    setFormValues(initialFormValues);
  }, [jobForm]); //eslint-disable-line

  //useEffect dependent on whether formValues are meeting yup validation requirements.
  //If so, valid now equals TRUE and we setButtonDisabled to be the opposite (FALSE)
  //so that the button is no longer disabled.
  //If formValues are NOT meeting yup validation requirements, valid is equal to FALSE,
  //and we setButtonDisabled to be the opposite (TRUE), and then the button will be disabled.
  useEffect(() => {
    if (record.key === 1000) {
      suggestABountyFormSchema
        .isValid(formValues)
        .then((valid) => setButtonDisabled(!valid));
    } else {
      formSchema.isValid(formValues).then((valid) => setButtonDisabled(!valid));
    }
  }, [record.key, formValues]);

  //Handles changing input from the user
  //Also compares user input to yup formSchema validation.
  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    validateFormChange(e);
  };

  //Chain of functions that run when user hits the submit button
  const handleFormSubmit = (e, formData, i) => {
    e.preventDefault();

    //String template literal that's responsible for making the message that's posted in the tellor-bounties chat on Telegram.
    const text = `@here ${formData.firstName} ${
      formData.lastName
    } wants to claim the ${formData.jobTitle} bounty, under ${
      formData.jobType
    }! Their email is: ${formData.email}, their Discord is: ${
      formData.discord ? formData.discord : "N/A"
    }, and their Telegram is: ${
      formData.telegram ? formData.telegram : "N/A"
    }. Additional comments: ${formData.comments ? formData.comments : "N/A"}`;

    //HTTP POST request to Discord's Webhook API with environment variable credentials

    /* IMPORTANT */
    //This fetch URL needs to be put in a .env file, it houses the the apikey and chat_id and can't be public facing!
    //This is the structure of the post url, btw: /webhooks/{webhook.id}/{webhook.token}
    //For future reference: https://discord.com/developers/docs/resources/webhook#webhook-resource
    /* IMPORTANT */

    fetch(process.env.REACT_APP_DISCORD_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        content: text,
      }),
    });

    //Setting formValues back to normal
    setFormValues(initialFormValues);
    if (claimerPanels.includes(i)) {
      setPanelsArr(claimerPanels.filter((panel) => panel != i));
    }
  };

  return (
    <div className="Claim">
      <form className="Claim__Form">
        <div className="nondisplay">
          <div className="CF__Input__Container">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              value={jobForm.jobTitle}
              type="text"
              name="jobTitle"
              readOnly
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="jobType">Job Type</label>
            <input
              value={jobForm.jobType}
              type="text"
              name="jobType"
              readOnly
            />
          </div>
        </div>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleFormChange}
              value={formValues.firstName}
              type="text"
              name="firstName"
              placeholder="Required"
            />
            <div className="CF__Error">
              <h5>
                {record.key === 1000
                  ? suggestErrors.firstName
                  : errors.firstName}
              </h5>
            </div>
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleFormChange}
              value={formValues.lastName}
              type="text"
              name="lastName"
              placeholder="Required"
            />
            <div className="CF__Error">
              <h5>
                {record.key === 1000 ? suggestErrors.lastName : errors.lastName}
              </h5>
            </div>
          </div>
        </div>
        <div className="CF__Long__Input">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleFormChange}
            type="text"
            name="email"
            value={formValues.email}
            className="Claim__Modal__Input"
            placeholder="Required"
          />
        </div>
        <div className="CF__Error">
          <h5>{record.key === 1000 ? suggestErrors.email : errors.email}</h5>
        </div>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="discord">Discord</label>
            <input
              onChange={handleFormChange}
              value={formValues.discord}
              type="text"
              name="discord"
              placeholder="Optional"
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="telegram">Telegram</label>
            <input
              onChange={handleFormChange}
              value={formValues.telegram}
              type="text"
              name="telegram"
              placeholder="Optional"
            />
          </div>
        </div>
        <div className="CF__Long__Input marginTop">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            onChange={handleFormChange}
            value={formValues.comments}
            type="text"
            name="comments"
            className="Claim__Modal__Input"
            placeholder={
              record.key === 1000
                ? "Please give a description of your idea for a bounty here!"
                : "Optional"
            }
          />
        </div>
        <div className="CF__Error">
          <h5>{suggestErrors.comments}</h5>
        </div>
        <Button
          onClick={(e) => handleFormSubmit(e, formValues, indexKey)}
          className="Claim__Button"
          disabled={buttonDisabled}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ClaimForm;
