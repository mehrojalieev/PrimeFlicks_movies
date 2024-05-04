import React from 'react'
import "./People.scss"
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { useGetPeople } from '../../service/query/useGetPeople'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const People = () => {

    const data = useGetPeople('person/popular')

  return (
    <div className="people">

    <Container>
        <h2 className='people-title'>Popular People</h2>
        <div className="people__card-wrapper">
            {
               data?.data?.results ? data.data.results.map(person => 
                    <div key={person.id} className='person__card' >
                        <Link  to={`/people-info/${person.id}`} className='person__card-link'>
                              <img src={`https://image.tmdb.org/t/p/w500/${person?.profile_path}`} alt={person?.name} />

                    </Link>
                            <h3 className='person-name'>{person?.name}</h3>
                            <p className='person-overview'>{person?.known_for[0].overview.slice(0,50)}</p>
                    </div>
                
                ) 
                : <div className="skeleton-container">
                    <Skeleton className='card-skeleton' count={4}/>
                </div>
            }
        </div>
    </Container>
    </div>
  )
}

export default People
