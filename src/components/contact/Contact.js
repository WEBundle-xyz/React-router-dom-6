import React, { useState } from 'react';

import Button from './Button';
import classes from './Contact.module.css';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  const showEmailHandler = () => {
    setShowEmail((prevShowEmail) => !prevShowEmail);
  };

  return (
    <div className={classes.main}>
      <h1>Contact us</h1>
      <div className={classes.email}>
        {showEmail && <p>Send Email</p>}
        <Button onClick={showEmailHandler}>Show Email</Button>
      </div>
    </div>
  );
};

export default Contact;
