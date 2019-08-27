import React from 'react';


// this  saves us from having to individually pass down the authenticated user from the app component to each child component that needs it.

const AuthUserContext = React.createContext(null);

export default AuthUserContext;


