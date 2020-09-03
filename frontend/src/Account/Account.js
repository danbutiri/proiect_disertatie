import React, { useState } from 'react';
import './Account.scss';
import AccountMenu from './AccountMenu';


function Account(props) {
  return (
    <div className="Account">
      <AccountMenu/>
    </div>
  );
}

export default Account;
