/* eslint-disable react/jsx-no-target-blank */

import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'

const SidebarMenuMain = () => {
  const userAuth = useSelector(selectUserAuth)

  return (
    <>
      {userAuth?.roles.includes('Admin') && (
        <>
          <SidebarMenuItem
            to='/dashboard/'
            icon='element-11'
            title='Dashboard'
            fontIcon='bi-app-indicator'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Admin Menu</span>
            </div>
          </div>
          <SidebarMenuItemWithSub
            to='admin/profiles'
            title='Students'
            fontIcon='bi bi-person-lines-fill'
            icon='bi bi-person-lines-fill'
          >
            <SidebarMenuItem to='admin/students/create' title='Create' hasBullet={true} />
            <SidebarMenuItem to='admin/students/all' title='All' hasBullet={true} />
          </SidebarMenuItemWithSub>
          <SidebarMenuItemWithSub
            to='admin/lecturers'
            title='Lecturer'
            fontIcon='bi bi-person-bounding-box'
            icon='bi bi-person-bounding-box'
          >
            <SidebarMenuItem to='admin/lecturers/create' title='Create' hasBullet={true} />
            <SidebarMenuItem to='admin/lecturers/all' title='All' hasBullet={true} />
          </SidebarMenuItemWithSub>
        </>
      )}
      {userAuth?.roles.includes('Lecturer') && (
        <>
          <SidebarMenuItem
            to='/dashboard/'
            icon='element-11'
            title='Dashboard'
            fontIcon='bi-app-indicator'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>
                Lecturer Menu
              </span>
            </div>
          </div>
          <SidebarMenuItemWithSub
            to='lecturer/projects'
            title='Projects'
            fontIcon='bi bi-person-lines-fill'
            icon='bi bi-person-lines-fill'
          >
            <SidebarMenuItem to='lecturer/projects/all' title='All' hasBullet={true} />
            <SidebarMenuItem to='lecturer/projects/updates' title='Updates' hasBullet={true} />
          </SidebarMenuItemWithSub>

          <SidebarMenuItemWithSub
            to='lecturer/students'
            title='Students'
            fontIcon='bi bi-people'
            icon='bi bi-people'
          >
            <SidebarMenuItem to='lecturer/students/all' title='All' hasBullet={true} />
          </SidebarMenuItemWithSub>
        </>
      )}
    </>
  )
}

export {SidebarMenuMain}
