import React from 'react'
import UserManagerTable from './UserManagerTable'

const UserManager = () => {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-gray-900 dark:text-white">User Manager</p>
      <p className="text-xl text-gray-600 dark:text-white mb-8">
        Managing and Monitoring User.
      </p>
      {/* User Manager */}
      <UserManagerTable />
    </div>
  )
}

export default UserManager