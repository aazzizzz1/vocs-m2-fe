import React from 'react'
import CommunicationMatrixTable from './CommunicationMatrixTable'

const CommunicationMatrix = () => {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-gray-900 dark:text-white">Communication Matrix</p>
      <p className="text-xl text-gray-600 dark:text-white mb-8">
        Managing and Monitoring Communication.
      </p>
      <CommunicationMatrixTable/>
    </div>
  )
}

export default CommunicationMatrix