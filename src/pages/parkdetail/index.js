import React from 'react'
import JobDetailContainer from '../../containers/parkdetail/'

const JobDetail = (props) => {
  const {id} = props.match.params
  return (
    <div className='dcc-park-detail container'>
      <div className='row'>
        <div className='col-sm-12'>
          <JobDetailContainer id={id} />
        </div>
      </div>
    </div>
  )
}

export default JobDetail
