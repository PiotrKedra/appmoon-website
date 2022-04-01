import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import emailjs from "emailjs-com"
import { useTranslation } from 'gatsby-plugin-react-i18next';



const ContactForm = () => {
  const {t} = useTranslation()

  const LOADING_MSG = t`home.sending`;
  const SUCCESS_MSG = t`home.email_sent` + ` 😃`;
  const ERROR_MSG = t`home.some_error` + ` 😱`

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isMessageValid, setIsMessageValid] = React.useState(true);

  const [submitted, setSubmitted] = React.useState(false);
  const [submitMsg, setSubmitMsg] = React.useState(LOADING_MSG);


  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(true)
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
    setIsMessageValid(true)
  }

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleContactForm = (event) => {
    event.preventDefault()
    let isValid = true;
    if (validateEmail() === false) {
      setIsEmailValid(false)
      isValid = false;
    }

    if (message.length === 0) {
      setIsMessageValid(false)
      isValid = false;
    }

    if (isValid) {

      setSubmitMsg(LOADING_MSG)
      setSubmitted(true)

      const sendTo = {
        'from_name': name == null ? 'Noname' : name,
        'from_email': email,
        'message': message,
      }
      emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_NEW_MESSAGE_ID,
        sendTo,
        process.env.GATSBY_EMAILJS_USER_ID,
      ).then(
        result => {
          setSubmitMsg(SUCCESS_MSG)
          emailjs.send(
            process.env.GATSBY_EMAILJS_SERVICE_ID,
            process.env.GATSBY_EMAILJS_TO_CLIEND_ID,
            sendTo,
            process.env.GATSBY_EMAILJS_USER_ID,
          ).then(() => {})

          setEmail('')
          setName('')
          setMessage('')
          setTimeout(function() { setSubmitted(false) }, 5000);

        },
        error => {
          setSubmitMsg(ERROR_MSG)
        }
      )
    }
  }

  return (
    <>
      <form
        method="post"
        className="contact-form"
        onSubmit={(event) => handleContactForm(event)}
      >
        <input
          type="text"
          placeholder={t`home.your_name`}
          value={name}
          onChange={handleChangeName}
          style={{margin: '0.6rem 0'}}
        />
        <input
          type="text"
          placeholder={t`home.email`}
          value={email}
          onChange={handleChangeEmail}
          formNoValidate={true}
          style={isEmailValid ? null : {borderColor: '#FF605C'}}
        />
        <p className="error-msg" style={isEmailValid ? null : {opacity: 1}}>
          {t`home.incorrect_email`} 🤔
        </p>
        <textarea
          name="message"
          rows="4"
          placeholder={t`home.message`}
          value={message}
          onChange={handleChangeMessage}
          style={isMessageValid ? null : {borderColor: '#FF605C'}}
        />
        <p className="error-msg" style={isMessageValid ? null : {opacity: 1}}>
          {t`home.empty_message`} 😅
        </p>
        <button type="submit" disabled={submitted}>
          {t`home.send`}
          <BsArrowRight style={{marginLeft: '1rem'}} size="1.8rem"/>
        </button>
      </form>
      <p className="submitted-msg" style={submitted === true ? {display: 'block'} : null}>{submitMsg}</p>
    </>
  );
}

export default ContactForm;
