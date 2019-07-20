import React from 'react'

import LoggedIn from './logged-in'
import LoggedOut from './logged-out'
import { useAuth0 } from "../../providers/auth0";

export default function Homepage() {
  const { isAuthenticated } = useAuth0();

  return <div>
    {
      isAuthenticated
        ? <LoggedIn />
        : <LoggedOut />
    }
  </div>
}