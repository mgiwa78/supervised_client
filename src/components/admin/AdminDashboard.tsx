import {PageTitle} from '@layouts/core'
import React, {useEffect, useState} from 'react'
import {StatisticsWidget5} from '../partials/widgets/StatisticsWidget5'
import {MixedWidget1} from '../partials/widgets/MixedWidget1'
import RecentImpressions from '../RecentImpressions'
import get from '@lib/get'
import {useSelector} from 'react-redux'
import {selectUserToken} from '@stores/auth/authSlector'

const AdminDasboard = () => {
  const userToken = useSelector(selectUserToken)
  const [productsCount, setProductCount] = useState(0)
  const [categoriesCount, setCategorieCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)

  // const fetchDashboardData = async () => {
  //   const products = await get('products', userToken)
  //   const categories = await get('categories', userToken)
  //   const users = await get('users', userToken)

  //   if (products) {
  //     setProductCount(products.length)
  //   }
  //   if (categories) {
  //     setCategorieCount(categories.length)
  //   }
  //   if (users) {
  //     setUsersCount(users.length)
  //   }
  // }

  return (
    <>
      <PageTitle>Admin</PageTitle>
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='row g-5 g-xl-8'>
          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-xl-8'
              svgIcon='user'
              color='danger'
              iconColor='white'
              title={`0`}
              titleColor='white'
              description='Admins'
              descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-xl-8'
              svgIcon='cheque'
              color='primary'
              iconColor='white'
              title={`0`}
              titleColor='white'
              description='Students'
              descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-5 mb-xl-8'
              svgIcon='chart-simple-3'
              color='success'
              iconColor='white'
              title={`0`}
              titleColor='white'
              description='Lecturers'
              descriptionColor='white'
            />
          </div>
        </div>{' '}
        <div className='row mt-0 '>
          <div className='col-12'> {/* <RecentImpressions /> */}</div>
        </div>
      </div>
    </>
  )
}

export default AdminDasboard
