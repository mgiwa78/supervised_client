import React, {useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../helpers'

import * as Yup from 'yup'
import {useFormik} from 'formik'
type Props = {
  className: string
}
interface IProfileDetails {
  avatar: string
  fName: string
  lName: string
  company: string
  contactPhone: string
  companySite: string
  country: string
  language: string
  timeZone: string
  currency: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

const initialValue = {
  avatar: '/media/avatars/300-1.jpg',
  fName: 'Max',
  lName: 'Smith',
  company: 'Keenthemes',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  country: '',
  language: '',
  timeZone: '',
  currency: '',
  communications: {
    email: false,
    phone: false,
  },
  allowMarketing: false,
}

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const CreateStudent: React.FC<Props> = ({className}) => {
  const [data, setData] = useState<IProfileDetails>({
    avatar: '/media/avatars/300-1.jpg',
    fName: 'Max',
    lName: 'Smith',
    company: 'Keenthemes',
    contactPhone: '044 3276 454 935',
    companySite: 'keenthemes.com',
    country: '',
    language: '',
    timeZone: '',
    currency: '',
    communications: {
      email: false,
      phone: false,
    },
    allowMarketing: false,
  })
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues: initialValue,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
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
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Profile</label>
                <div className='col-lg-8'>
                  <div
                    className='image-input image-input-outline'
                    data-kt-image-input='true'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                  >
                    <div
                      className='image-input-wrapper w-125px h-125px'
                      style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                    ></div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='First name'
                        {...formik.getFieldProps('fName')}
                      />
                      {formik.touched.fName && formik.errors.fName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.fName}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Last name'
                        {...formik.getFieldProps('lName')}
                      />
                      {formik.touched.lName && formik.errors.lName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.lName}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company name'
                    {...formik.getFieldProps('company')}
                  />
                  {formik.touched.company && formik.errors.company && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.company}</div>
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
                    {...formik.getFieldProps('contactPhone')}
                  />
                  {formik.touched.contactPhone && formik.errors.contactPhone && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Company Site</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    {...formik.getFieldProps('companySite')}
                  />
                  {formik.touched.companySite && formik.errors.companySite && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.companySite}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Country</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('country')}
                  >
                    <option value=''>Select a Country...</option>
                    <option value='AF'>Afghanistan</option>
                  </select>
                  {formik.touched.country && formik.errors.country && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.country}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Language</label>
                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('language')}
                  >
                    <option value=''>Select a Language...</option>
                    <option value='zh-tw'>繁體中文 - Traditional Chinese</option>
                  </select>
                  {formik.touched.language && formik.errors.language && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.language}</div>
                    </div>
                  )}

                  <div className='form-text'>
                    Please select a preferred language, including date, time, and number formatting.
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Time Zone</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('timeZone')}
                  >
                    <option value=''>Select a Timezone..</option>

                    <option value="Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
                  </select>
                  {formik.touched.timeZone && formik.errors.timeZone && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.timeZone}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Currency</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('currency')}
                  >
                    <option value=''>Select a currency..</option>
                    <option value='USD'>USD - USA dollar</option>
                  </select>
                  {formik.touched.currency && formik.errors.currency && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.currency}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Communication</label>

                <div className='col-lg-8 fv-row'>
                  <div className='d-flex align-items-center mt-3'>
                    <label className='form-check form-check-inline form-check-solid me-5'>
                      <input
                        className='form-check-input'
                        name='communication[]'
                        type='checkbox'
                        defaultChecked={data.communications?.email}
                        onChange={() => {
                          updateData({
                            communications: {
                              email: !data.communications?.email,
                              phone: data.communications?.phone,
                            },
                          })
                        }}
                      />
                      <span className='fw-bold ps-2 fs-6'>Email</span>
                    </label>

                    <label className='form-check form-check-inline form-check-solid'>
                      <input
                        className='form-check-input'
                        name='communication[]'
                        type='checkbox'
                        defaultChecked={data.communications?.phone}
                        onChange={() => {
                          updateData({
                            communications: {
                              email: data.communications?.email,
                              phone: !data.communications?.phone,
                            },
                          })
                        }}
                      />
                      <span className='fw-bold ps-2 fs-6'>Phone</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className='row mb-0'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Allow Marketing</label>

                <div className='col-lg-8 d-flex align-items-center'>
                  <div className='form-check form-check-solid form-switch fv-row'>
                    <input
                      className='form-check-input w-45px h-30px'
                      type='checkbox'
                      id='allowmarketing'
                      defaultChecked={data.allowMarketing}
                      onChange={() => {
                        updateData({allowMarketing: !data.allowMarketing})
                      }}
                    />
                    <label className='form-check-label'></label>
                  </div>
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
