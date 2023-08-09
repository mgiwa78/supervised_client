import {PageTitle} from '@layouts/core'
import React, {useEffect, useState} from 'react'
import {StatisticsWidget5} from '../partials/widgets/StatisticsWidget5'
import {MixedWidget1} from '../partials/widgets/MixedWidget1'
import RecentImpressions from '../RecentImpressions'
import get from '@lib/get'
import {useSelector} from 'react-redux'
import {selectUserToken} from '@stores/auth/authSlector'
import {RecentUpdates} from './RecentUpdates'
import {ApprovedProjects} from './ApprovedProjects'

const LecturerDashboard = () => {
  const userToken = useSelector(selectUserToken)
  const [productsCount, setProductCount] = useState(0)
  const [categoriesCount, setCategorieCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)

  const fetchDashboardData = async () => {
    const products = await get('products', userToken)
    const categories = await get('categories', userToken)
    const users = await get('users', userToken)

    if (products) {
      setProductCount(products.length)
    }
    if (categories) {
      setCategorieCount(categories.length)
    }
    if (users) {
      setUsersCount(users.length)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return (
    <>
      <PageTitle>Lecturer</PageTitle>
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10  mt-0 '>
        <div className='row g-5 g-xl-8 mb-0  mt-0 '>
          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-xl-8'
              svgIcon='user'
              color='danger'
              iconColor='white'
              title={`${productsCount}`}
              titleColor='white'
              description='Total approved projects'
              descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-xl-8'
              svgIcon='cheque'
              color='primary'
              iconColor='white'
              title={`${categoriesCount}`}
              titleColor='white'
              description='Ongoing'
              descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-5 mb-xl-8'
              svgIcon='chart-simple-3'
              color='success'
              iconColor='white'
              title={`${usersCount}`}
              titleColor='white'
              description='Revisions'
              descriptionColor='white'
            />
          </div>
        </div>{' '}
        <div className='row  g-5  g-xl-8 mt-0 '>
          {/* begin::Col */}
          <div className='col-xl-6 mt-0'>
            <RecentUpdates className='card-xl-stretch mb-xl-8' />
          </div>
          <div className='col-xl-6 mt-0'>
            <ApprovedProjects className='card-xl-stretch mb-xl-8' />
          </div>
        </div>
        <div className='row mt-0 '></div>
      </div>
    </>
  )
}

export default LecturerDashboard
