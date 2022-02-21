import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isMessageValid, setIsMessageValid] = React.useState(true);


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
      console.log(email)
    }
  }

  return (
    <form
      method="post"
      className="contact-form"
      onSubmit={(event) => handleContactForm(event)}
    >
      <input
        type="text"
        placeholder="Twoje imię"
        value={name}
        onChange={handleChangeName}
        style={{margin: '0.6rem 0'}}
      />
      <input
        type="email"
        placeholder="Email*"
        value={email}
        onChange={handleChangeEmail}
        formNoValidate={true}
        style={isEmailValid ? null : {borderColor: '#FF605C'}}
      />
      <p className="error-msg" style={isEmailValid ? null : {opacity: 1}}>
        Podany email jest nie właściwy 🤔
      </p>
      <textarea
        name="message"
        rows="4"
        placeholder="Wiadomość*"
        value={message}
        onChange={handleChangeMessage}
        style={isMessageValid ? null : {borderColor: '#FF605C'}}
      />
      <p className="error-msg" style={isMessageValid ? null : {opacity: 1}}>
        Nie chcemy dostać pustej wiadomości 😅
      </p>
      <button type="submit">
        Wyślij
        <BsArrowRight style={{marginLeft: '1rem'}} size="1.8rem"/>
      </button>
    </form>
  );
}

export default ContactForm;
