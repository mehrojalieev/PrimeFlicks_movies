import React from 'react'
import "./People.scss"
import { Container } from '../../utils/Utils'
import { useGetAllMovies } from '../../service/query/useGetAllMovies'
import { Link } from 'react-router-dom'

const People = () => {

    const {data:peopleData} = useGetAllMovies('person/popular')

    console.log(peopleData);

  return (
    <div className="people">

    <Container>
        <h2 className='people-title'>Popular People</h2>
        <div className="people__card-wrapper">
            {
                peopleData?.map(person => 
                    <div className='person__card' >
                        <Link key={person.id} to={`/people-info/${person.id}`} className='person__card-link'>
                            <img src={`https://image.tmdb.org/t/p/w500/${person?.profile_path}`} alt={person?.name} />
                    </Link>
                            <h3 className='person-name'>{person?.name}</h3>
                            <p className='person-overview'>{person?.known_for[0].overview.slice(0,50)}</p>
                    </div>
                
                )
            }
        </div>
    </Container>
    </div>
  )
}

export default People
