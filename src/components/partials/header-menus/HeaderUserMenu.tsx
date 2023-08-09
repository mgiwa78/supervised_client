/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'
import {useDispatch, useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'
import {removeAuth} from '@stores/auth/authSlice'
import {useNavigate} from 'react-router-dom'
const HeaderUserMenu: FC = () => {
  const userAuth = useSelector(selectUserAuth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(removeAuth())
    navigate('auth')
  }
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/blank.png')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {userAuth?.lastName}
              {userAuth?.firstName}
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>
                {userAuth?.roles.map((role) => role)}
              </span>
            </div>
            <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {userAuth?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5' onClick={() => handleSignOut()}>
        <a className='menu-link px-5'>Sign Out</a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
