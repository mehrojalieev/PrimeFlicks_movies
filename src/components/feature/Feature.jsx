import React from 'react'
import './Feature.scss'
import {Container} from '../../utils/Utils'
import { Button } from 'antd'
const Feature = () => {
  return (
    <Container>
        <div className="feature-wrapper">
            <div className="feature-image">
                <img src="https://www.film.ru/sites/default/files/images/111-23(1).jpeg" />
            </div>
            <div className="feature-content">
                <h6>Subscription</h6>
                <p>Ready to watch enter your Email Address to Subscribe. When you Subscribe, There is a Free Trail Period.</p>
                <div className="subscribe-form">
                    <input type="text" placeholder='Enter your Email' />
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Feature
