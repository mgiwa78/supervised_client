/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../helpers'

type Props = {
  className: string
}
type TProject = {
  finalProjectTitle: string
  studentName: string
  university: string
  degreeLevel: string
  studentDepartment: string
  dateCompleted: string
}

const ApprovedProjects: React.FC<Props> = ({className}) => {
  const projects: Array<TProject> = [
    {
      finalProjectTitle:
        'Quantitative Analysis of Market Volatility: A Case Study in Risk Management',
      studentName: 'John Doe',
      university: 'University of Finance and Economics',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Finance',
      dateCompleted: '2023-08-09',
    },
    {
      finalProjectTitle: 'Optimizing Portfolio Diversification Strategies for Enhanced Returns',
      studentName: 'Jane Smith',
      university: 'Financial University',
      degreeLevel: "Master's",
      studentDepartment: 'Investment Management',
      dateCompleted: '2023-07-15',
    },
    {
      finalProjectTitle:
        'Cryptocurrency Adoption and its Implications on Traditional Financial Systems',
      studentName: 'Michael Johnson',
      university: 'Tech Finance Institute',
      degreeLevel: 'Ph.D.',
      studentDepartment: 'Blockchain Finance',
      dateCompleted: '2023-09-20',
    },
    {
      finalProjectTitle: 'Machine Learning Models for Predicting Stock Price Movements',
      studentName: 'Sophia Williams',
      university: 'Quantitative Analysis University',
      degreeLevel: "Master's",
      studentDepartment: 'Algorithmic Trading',
      dateCompleted: '2023-06-30',
    },
  ]
  const projects2: Array<TProject> = [
    {
      finalProjectTitle:
        'Behavioral Finance: Exploring Psychological Factors in Investment Decision Making',
      studentName: 'Alex Chen',
      university: 'Behavioral Economics College',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Behavioral Finance',
      dateCompleted: '2023-08-15',
    },
    {
      finalProjectTitle: 'Impact of Economic Indicators on Foreign Exchange Rate Fluctuations',
      studentName: 'Emily Adams',
      university: 'International Business School',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Forex Analysis',
      dateCompleted: '2023-07-05',
    },
  ]
  const projects3: Array<TProject> = [
    {
      finalProjectTitle:
        'Sustainable Finance and Environmental, Social, and Governance (ESG) Investing',
      studentName: 'Oliver Brown',
      university: 'Green Finance University',
      degreeLevel: "Master's",
      studentDepartment: 'Sustainable Investments',
      dateCompleted: '2023-09-10',
    },
    {
      finalProjectTitle: 'Derivatives Pricing and Hedging Strategies: A Comparative Study',
      studentName: 'Emma White',
      university: 'Derivatives Institute',
      degreeLevel: 'Ph.D.',
      studentDepartment: 'Financial Derivatives',
      dateCompleted: '2023-07-30',
    },
    {
      finalProjectTitle: 'FinTech Innovations in Payment Systems: Disruption and Future Prospects',
      studentName: 'William Turner',
      university: 'FinTech Academy',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Payment Technologies',
      dateCompleted: '2023-06-25',
    },
    {
      finalProjectTitle: 'Credit Scoring Models and Loan Default Prediction in the Digital Age',
      studentName: 'Ava Martinez',
      university: 'Credit Analysis College',
      degreeLevel: "Master's",
      studentDepartment: 'Credit Risk Management',
      dateCompleted: '2023-08-05',
    },
  ]

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Approved Projects</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Total 35 projects</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_6_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_6_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_6_tab_3'
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
          <div className='tab-pane fade show active' id='kt_table_widget_6_tab_1'>
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
                  {projects.map((project) => (
                    <tr>
                      <td>
                        <div className='symbol symbol-50px me-2'>
                          <span className='symbol-label'>
                            <img
                              src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                              className='h-75 align-self-end'
                              alt=''
                            />
                          </span>
                        </div>
                      </td>
                      <td>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          {project.finalProjectTitle}
                        </a>
                        <span className='text-muted fw-semibold d-block'>
                          {project.studentName}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold d-block fs-7'>
                          {project.degreeLevel}
                        </span>
                        <span className='text-dark fw-bold d-block fs-5'>
                          {project.studentDepartment}
                        </span>
                      </td>
                      <td className='text-end'>
                        <span className='text-primary fs-7 fw-bold'>{project.dateCompleted}</span>
                      </td>
                      <td className='text-end'>
                        <a
                          href='#'
                          className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                        >
                          <KTIcon iconName='arrow-right' className='fs-2' />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_6_tab_2'>
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
                  {projects2.map((project) => (
                    <tr>
                      <td>
                        <div className='symbol symbol-50px me-2'>
                          <span className='symbol-label'>
                            <img
                              src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                              className='h-75 align-self-end'
                              alt=''
                            />
                          </span>
                        </div>
                      </td>
                      <td>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          {project.finalProjectTitle}
                        </a>
                        <span className='text-muted fw-semibold d-block'>
                          {project.studentName}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold d-block fs-7'>
                          {project.degreeLevel}
                        </span>
                        <span className='text-dark fw-bold d-block fs-5'>
                          {project.studentDepartment}
                        </span>
                      </td>
                      <td className='text-end'>
                        <span className='text-primary fs-7 fw-bold'>{project.dateCompleted}</span>
                      </td>
                      <td className='text-end'>
                        <a
                          href='#'
                          className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                        >
                          <KTIcon iconName='arrow-right' className='fs-2' />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_6_tab_3'>
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
                  {projects3.map((project) => (
                    <tr>
                      <td>
                        <div className='symbol symbol-50px me-2'>
                          <span className='symbol-label'>
                            <img
                              src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                              className='h-75 align-self-end'
                              alt=''
                            />
                          </span>
                        </div>
                      </td>
                      <td>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          {project.finalProjectTitle}
                        </a>
                        <span className='text-muted fw-semibold d-block'>
                          {project.studentName}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold d-block fs-7'>
                          {project.degreeLevel}
                        </span>
                        <span className='text-dark fw-bold d-block fs-5'>
                          {project.studentDepartment}
                        </span>
                      </td>
                      <td className='text-end'>
                        <span className='text-primary fs-7 fw-bold'>{project.dateCompleted}</span>
                      </td>
                      <td className='text-end'>
                        <a
                          href='#'
                          className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                        >
                          <KTIcon iconName='arrow-right' className='fs-2' />
                        </a>
                      </td>
                    </tr>
                  ))}
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

export {ApprovedProjects}
