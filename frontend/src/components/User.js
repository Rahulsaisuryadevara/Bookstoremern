
import React from 'react';

const User = ({ name, age, email, isAdmin = false }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {isAdmin && <p></p>}
    </div>
  );
};

export default User;
