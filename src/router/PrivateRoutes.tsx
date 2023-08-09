import {Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../layouts/MasterLayout'

import {Dashboard} from '../views/Dashboard'

import {PageLink} from '../layouts/core'

import {AllStudents} from '@components/admin/AllStudents'
import {AllLecturers} from '@components/admin/AllLecturers'
import {CreateLecturer} from '@components/admin/CreateLecturer'
import {CreateStudent} from '@components/admin/CreateStudent'
import {AllProjects} from '@components/lecturer/AllProjects'

const PrivateRoutes = () => {
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  // const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  const accountBreadCrumbs: Array<PageLink> = [
    {
      title: 'Profile',
      path: '/profile/overview',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

  return (
    <Routes>
      <Route path='/*' element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        {/* <Route path='auth/*' element={<Navigate to='organization/dashboard' />} /> */}
        <Route path='dashboard' element={<Dashboard />} />

        <Route path='admin'>
          {/* Pages */}

          <Route path='students'>
            <Route path='all' element={<AllStudents className='mb-5 mb-xl-8' />} />
            <Route path='create' element={<CreateStudent className='mb-5 mb-xl-8' />} />
          </Route>

          <Route path='lecturers'>
            <Route path='all' element={<AllLecturers className='mb-5 mb-xl-8' />} />
            <Route path='create' element={<CreateLecturer className='mb-5 mb-xl-8' />} />
          </Route>
        </Route>
        <Route path='lecturer'>
          {/* Pages */}

          <Route path='projects'>
            <Route path='all' element={<AllProjects className='mb-5 mb-xl-8' />} />
          </Route>
        </Route>

        {/* <Route path='*' element={<Navigate to='/error/404' />} /> */}
      </Route>
    </Routes>
  )
}

// const SuspensedView: FC<WithChildren> = ({children}) => {
//   const baseColor = getCSSVariableValue('--bs-primary')
//   TopBarProgress.config({
//     barColors: {
//       '0': baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   })
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export {PrivateRoutes}
