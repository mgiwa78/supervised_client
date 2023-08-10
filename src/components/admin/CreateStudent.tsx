import React, {useEffect, useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../helpers'

import * as Yup from 'yup'
import {useFormik} from 'formik'
import post from '@lib/post'
import {selectUserToken} from '@stores/auth/authSlector'
import {useSelector} from 'react-redux'
import get from '@lib/get'
type Props = {
  className: string
}
export interface IProfileDetails {
  avatar: string
  _id: string
  createdAt: string
  firstName: string
  lastName: string
  contactNumber: string
  email: string
  address: string
  degree?: string
  department: TDepartment
  password: string
}

const initialValue = {
  avatar: '',
  firstName: '',
  _id: '0',
  lastName: '',
  createdAt: '',
  email: '',
  contactNumber: '',
  department: {
    name: '',
    _id: '',
  },
  address: '',
  degree: '',
  password: '',
}

const profileDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  department: Yup.string().required('Department is required'),
  contactNumber: Yup.string().required('Contact phone is required'),
  email: Yup.string().required('Contact email is required'),
  password: Yup.string().required('Password is required'),
})
export interface TDepartment {
  name: string
  _id: string
}

const CreateStudent: React.FC<Props> = ({className}) => {
  const userToken = useSelector(selectUserToken)
  const [departments, setDepartments] = useState<Array<TDepartment>>([])

  const [data, setData] = useState<IProfileDetails>(initialValue)

  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)

  const handleFetchDepartments = async () => {
    const data = await get('departments', userToken)
    if (data) {
      setDepartments(data)
    }
  }

  useEffect(() => {
    handleFetchDepartments()
  }, [])

  const formik = useFormik<IProfileDetails>({
    initialValues: initialValue,
    validationSchema: profileDetailsSchema,

    onSubmit: async (values, {setSubmitting}) => {
      setLoading(true)
      setSubmitting(false)

      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        contactNumber: values.contactNumber,
        email: values.email,
        department: values.department,
        address: values.address,
        role: 'Student',
        password: values.password,
      }

      formik.resetForm()
      setSubmitting(true)
      setLoading(false)

      return
      await post('users', data, userToken, true, 'User created successfully')
    },
  })

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'> Create Student</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div id='kt_account_profile_details'>
          <form onSubmit={formik.handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='First name'
                        {...formik.getFieldProps('firstName')}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.firstName}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Last name'
                        {...formik.getFieldProps('lastName')}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.lastName}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Department</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('department')}
                  >
                    <option value=''>Select a Department...</option>

                    {departments.map((department) => (
                      <option key={department._id} value={department._id}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.department && formik.errors.department && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.department.name}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Contact Phone</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Phone number'
                    {...formik.getFieldProps('contactNumber')}
                  />
                  {formik.touched.contactNumber && formik.errors.contactNumber && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.contactNumber}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Contact Email</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Enter contact email'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.email}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Password</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Password'
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.password}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='card-footer d-flex justify-content-end py-6 px-9'>
              <button type='submit' className='btn btn-primary' disabled={loading}>
                {!loading && 'Save Changes'}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {CreateStudent}
