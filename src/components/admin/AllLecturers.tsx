/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../helpers'
import {Link} from 'react-router-dom'
import get from '@lib/get'
import {selectUserToken} from '@stores/auth/authSlector'
import {useSelector} from 'react-redux'
import {IProfileDetails} from './CreateLecturer'
import {formatDateToWords} from '@helpers/formateDate'

type Props = {
  className: string
}

const AllLecturers: React.FC<Props> = ({className}) => {
  const userToken = useSelector(selectUserToken)
  const [lecturers, setLecturer] = useState<Array<IProfileDetails>>([])

  const handleFetchProducts = async () => {
    const RESPONSE = await get('users', userToken)
    if (RESPONSE) {
      const Ldata = RESPONSE.filter((data: any) => {
        return data.roles.includes('Lecturer')
      })
      setLecturer(Ldata)
    }
  }

  useEffect(() => {
    handleFetchProducts()
  }, [])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>All Lecturers</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>
            {lecturers && lecturers.length} Lecturers
          </span>
        </h3>
        <div className='card-toolbar'>
          <Link className='btn btn-sm btn-light-primary' to={'/admin/lecturers/create'}>
            <KTIcon iconName='plus' className='fs-2' />
            New Lecturer
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-325px rounded-start'>Name</th>
                <th className='min-w-125px'>Email</th>
                <th className='min-w-125px'>Department</th>
                <th className='min-w-150px'>Date created</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {lecturers.map((lecturer: IProfileDetails) => (
                <tr key={lecturer._id}>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>
                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} className='' alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          {lecturer.lastName + ' ' + lecturer.firstName}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {lecturer.email}
                    </span>
                  </td>
                  <td>
                    <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {lecturer.department.name}
                    </span>
                  </td>

                  <td>
                    <span className='badge badge-light-primary fs-7 fw-semibold'>
                      {formatDateToWords(lecturer.createdAt)}
                    </span>
                  </td>
                  <td className='text-end'>
                    <span className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                      <KTIcon iconName='switch' className='fs-3' />
                    </span>
                    <span className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                      <KTIcon iconName='pencil' className='fs-3' />
                    </span>
                    <span className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                      <KTIcon iconName='trash' className='fs-3' />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {AllLecturers}
