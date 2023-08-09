/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../helpers'

type Props = {
  className: string
}

const RecentUpdates: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent updates</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>22 unapproved</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_7_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_7_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_7_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_7_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-success'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Rhamah Mujaheed
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>James White</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>5 day ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-success fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Updated title on front page
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Mathew Gabriel</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>2 day ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-primary'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        New project start
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Ibrahim Ahmed</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>4 day ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-primary fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Updated font size
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Rabecca Brime</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>1 day ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          {' '}
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        3rd Chapter update
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Johnatan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>7 day ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-info fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_7_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          {' '}
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        3rd Chapter update
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Jhonatan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>4 week ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-info fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Updated title on front page
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Mathew Gabriel</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>2 week ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Updated font size
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Rabecca Brime</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>5 week ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_7_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-success'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Rhamah Mujaheed
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>James White</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>3 month ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-success fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Updated title on front page
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Mathew Gabriel</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>5 month ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Updated font size
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Rabecca Brime</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>6 month ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          {' '}
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />{' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        3rd Chapter update
                      </span>
                      <span className='text-muted fw-semibold d-block fs-7'>Jhonatan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-muted fw-semibold d-block fs-8'>Made</span>
                      <span className='text-dark fw-bold d-block fs-7'>4 month ago</span>
                    </td>
                    <td className='text-end'>
                      <span className='badge badge-light-info fs-7 fw-bold'>Updated</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {RecentUpdates}
