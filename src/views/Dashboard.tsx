/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'
import LecturerDashboard from '@components/lecturer/LecturerDashboard'
import AdminDasboard from '@components/admin/AdminDashboard'

const Dashboard: FC = () => {
  const userAuth = useSelector(selectUserAuth)
  console.log(userAuth)

  return (
    <>
      {userAuth?.roles.includes('Admin') && (
        <>
          <AdminDasboard />
        </>
      )}

      {userAuth?.roles.includes('Lecturer') && (
        <>
          <LecturerDashboard />
        </>
      )}
    </>
  )
}

export {Dashboard}
