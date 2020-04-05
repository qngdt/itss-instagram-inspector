import React from 'react'
import { Fade } from 'react-reveal';

const Bio = (props) => {

  const { data, submitted } = props
  
  if (!data.full_name && submitted) {
    return <h3>User Not Found</h3>
  }
  return (
    <Fade>
      <div className="bio w-75">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center align-items-center">
              <div className="avatar">
                <img src={data.profile_pic_url_hd} alt="" className="img-fluid" />
              </div>
              <ul>
                <li>
                  <b>Fullname:</b> {data.full_name}
                </li>
                <li>
                  <b>Followers:</b> {data.edge_followed_by ? data.edge_followed_by.count : ''}
                </li>
                <li>
                  <b>Follows:</b> {data.edge_follow ? data.edge_follow.count : ''}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column justify-content-around align-items-center h-100">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h3>
                  Biography
            </h3>
                <p>
                  {data.biography}
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h3>
                  Business
            </h3>
                <p>
                  {data.business_category_name ? data.business_category_name : 'None'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Bio