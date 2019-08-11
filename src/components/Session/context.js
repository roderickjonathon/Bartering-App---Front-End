import React from 'react';


//this will allow App component (via import) to provide the authenticated user to child components that need it
const AuthUserContext = React.createContext(null);

export default AuthUserContext;