import React, { useEffect, useState } from 'react'
import './SinglePerson.scss'
import { useLocation, useParams } from 'react-router-dom'
import { Container } from '../../utils/Utils'
import { useGetPeople } from '../../service/query/useGetPeople'
import axios from 'axios'
import { FacebookFilled, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'



const SinglePerson = () => {

  const API_KEY = 'e8146ffd5337cb04d8fa4a759df0d413'
    const {id} = useParams()
    const {pathname} = useLocation()
  const [knownData, setKnownData] = useState([])

    const data = useGetPeople(`person/${id}`)
    const personData = data?.data

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`)
      .then(response => {
        setKnownData(response?.data)
        console.log(response.data)
      })
    }, [])


    useEffect(() => {
      if(pathname.includes('people-info')){
        window.scrollTo(0, 0)
      }
    }, [pathname])




  return (
    <div className='person-info'>
      <Container>
        <div className="person__about-wrapper">
          <div className="person__info-wrapper">
            <div className="person-image">
              <img  src={`https://image.tmdb.org/t/p/w500/${personData?.profile_path}`} alt="Person Image" />
            </div>
              <div className="person__social-actions">
                  <i><FacebookFilled/></i>
                  <i><TwitterOutlined/></i>
                  <i><InstagramOutlined/></i>
              </div>
              <div className='personal__info-contents'>
                  <h4 className="personal__info-title">Personal info</h4>
              <div className="birthday-info">
                <h5>Birthday</h5>
                <p>{personData?.birthday}</p>
              </div>
              <div className="place__birthday-info">
                <h5>Place of Birth</h5>
                <p>{personData?.place_of_birth}</p>
              </div>
              <div className="gender-info">
                <h5>Gender</h5>
                <p>{personData?.gender === 2 ? 'Male' : 'Female'}</p>
              </div>
              <div className="known-info">
                <h5>Known for</h5>
                <p>{personData?.known_for_department}</p>
              </div>
              </div>
              
          </div>

          {/* Content  */}
          <div className="person__content-wrapper">
              <h2 className='person-name'>{personData?.name}</h2>
              <div className="biography-content">
                <h4 >Biography</h4>
                <p>{personData?.biography?.slice(0,1050)}</p>
              </div>
              <div className="known__card-container">
                <h5 className='known-title'>Known for</h5>
                <div className="card-slider">
                  {
                    knownData?.crew?.map(crew_item =>
                      <div className="card" key={crew_item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${crew_item?.poster_path}`} />
                        <div className="crew-name">{crew_item?.title?.slice(0,15)}</div>
                      </div>
                    )
                  }
                </div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SinglePerson
