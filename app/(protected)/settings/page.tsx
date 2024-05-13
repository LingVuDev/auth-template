import { auth } from '@/auth';
import React from 'react'

const SettingsPage = async () => {
  const sesstion = await auth();
  
  return (
    <div>SettingsPage</div>
  )
}

export default SettingsPage