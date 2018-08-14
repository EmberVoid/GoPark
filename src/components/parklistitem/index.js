import React from 'react'
import { Link } from 'react-router-dom'

import { jobType, jobTypeDefault } from '../../proptypes/index'

const JobListItem = ({job}) => {
  return (
    <li className='job-list-item'>
      <Link to={`/jobs/${job.id}`} className='row'>
        <div className='job-list-item__info col-sm-10'>
          <img src={job.companyAvatar} alt={job.company} className='job-list-item__info-avatar' />
          <div className='job-list-item__info-text'>
            <h3>{job.title}</h3>
            <p>{job.company} <span className='job-list-item__company-slogan'>{job.companySlogan}</span></p>
          </div>
        </div>
        <div className='job-list-item__details col-sm-2'>
          <span className='job-list-item__details'>{job.type}</span>
        </div>
      </Link>
    </li>
  )
}

JobListItem.propTypes = {
  job: jobType
}

JobListItem.defaultProps = {
  job: jobTypeDefault
}

export default JobListItem