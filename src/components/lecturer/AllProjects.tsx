/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../helpers'

type Props = {
  className: string
}

const AllProjects: React.FC<Props> = ({className}) => {
  const projects = [
    {
      finalProjectTitle:
        'Quantitative Analysis of Market Volatility: A Case Study in Risk Management',
      studentName: 'John Doe',
      university: 'University of Finance and Economics',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Finance',
      dateCompleted: '2023-08-09',
      mentor: 'Dr. Alice Johnson',
      projectGrade: 'A+',
      presentationDate: '2023-08-15',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle: 'Optimizing Portfolio Diversification Strategies for Enhanced Returns',
      studentName: 'Jane Smith',
      university: 'Financial University',
      degreeLevel: "Master's",
      studentDepartment: 'Investment Management',
      dateCompleted: '2023-07-15',
      mentor: 'Prof. Robert Williams',
      projectGrade: 'A',
      presentationDate: '2023-07-20',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle:
        'Cryptocurrency Adoption and its Implications on Traditional Financial Systems',
      studentName: 'Michael Johnson',
      university: 'Tech Finance Institute',
      degreeLevel: 'Ph.D.',
      studentDepartment: 'Blockchain Finance',
      dateCompleted: '2023-09-20',
      mentor: 'Dr. Sarah Lee',
      projectGrade: 'B',
      presentationDate: '2023-09-25',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle: 'Machine Learning Models for Predicting Stock Price Movements',
      studentName: 'Sophia Williams',
      university: 'Quantitative Analysis University',
      degreeLevel: "Master's",
      studentDepartment: 'Algorithmic Trading',
      dateCompleted: '2023-06-30',
      mentor: 'Prof. James Miller',
      projectGrade: 'A-',
      presentationDate: '2023-07-05',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle:
        'Behavioral Finance: Exploring Psychological Factors in Investment Decision Making',
      studentName: 'Alex Chen',
      university: 'Behavioral Economics College',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Behavioral Finance',
      dateCompleted: '2023-08-15',
      mentor: 'Dr. Emily Adams',
      projectGrade: 'B+',
      presentationDate: '2023-08-20',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle: 'Impact of Economic Indicators on Foreign Exchange Rate Fluctuations',
      studentName: 'Emily Adams',
      university: 'International Business School',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Forex Analysis',
      dateCompleted: '2023-07-05',
      mentor: 'Prof. Daniel Martin',
      projectGrade: 'B',
      presentationDate: '2023-07-10',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle:
        'Sustainable Finance and Environmental, Social, and Governance (ESG) Investing',
      studentName: 'Oliver Brown',
      university: 'Green Finance University',
      degreeLevel: "Master's",
      studentDepartment: 'Sustainable Investments',
      dateCompleted: '2023-09-10',
      mentor: 'Dr. Maria Garcia',
      projectGrade: 'A',
      presentationDate: '2023-09-15',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle: 'Derivatives Pricing and Hedging Strategies: A Comparative Study',
      studentName: 'Emma White',
      university: 'Derivatives Institute',
      degreeLevel: 'Ph.D.',
      studentDepartment: 'Financial Derivatives',
      dateCompleted: '2023-07-30',
      mentor: 'Prof. Andrew Thompson',
      projectGrade: 'A-',
      presentationDate: '2023-08-05',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle: 'FinTech Innovations in Payment Systems: Disruption and Future Prospects',
      studentName: 'William Turner',
      university: 'FinTech Academy',
      degreeLevel: "Bachelor's",
      studentDepartment: 'Payment Technologies',
      dateCompleted: '2023-06-25',
      mentor: 'Dr. Laura Davis',
      projectGrade: 'B+',
      presentationDate: '2023-06-30',
      projectStatus: 'Completed',
    },
    {
      finalProjectTitle: 'Credit Scoring Models and Loan Default Prediction in the Digital Age',
      studentName: 'Ava Martinez',
      university: 'Credit Analysis College',
      degreeLevel: "Master's",
      studentDepartment: 'Credit Risk Management',
      dateCompleted: '2023-08-05',
      mentor: 'Prof. Jessica Wilson',
      projectGrade: 'A',
      presentationDate: '2023-08-10',
      projectStatus: 'Completed',
    },
  ]

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>All Projects</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>14 projects</span>
        </h3>
        {/* <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTIcon iconName='plus' className='fs-2' />
            New Member
          </a>
        </div> */}
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
                <th className='ps-4 min-w-325px rounded-start'>Title</th>
                <th className='min-w-125px'>Progress</th>
                <th className='min-w-125px'>Deposit</th>
                <th className='min-w-120px'>Agent</th>
                <th className='min-w-120px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {projects.map((project) => (
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>
                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} className='' alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          {project.finalProjectTitle}
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          By {project.studentName}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {project.dateCompleted}
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      {project.projectStatus}
                    </span>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {project.studentDepartment}
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      {project.degreeLevel}
                    </span>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {project.projectGrade}
                    </a>
                  </td>

                  <td className='text-end'>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='switch' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='pencil' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTIcon iconName='trash' className='fs-3' />
                    </a>
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

export {AllProjects}
