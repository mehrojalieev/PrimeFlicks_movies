import React, { useEffect } from 'react'
import './TariffPlans.scss'
import { Container } from '../../utils/Utils'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import Aos from 'aos'

const TariffPlans = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="plans">
    <Container>
        <h2 className='plans-title'>Tariff Plans</h2>
    <div className='plans-wrapper'>
        <div data-aos='fade-up'  className="plan-card">
                <h3 className='plan-title'>Base</h3>
                <strong className='plan-price'>7.99 $</strong>
                <p className='reason-text'>For warm and cozy views with the family</p>
                <p className='day-text'>7 days free</p>
                <div className="card-actions">
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Unlimited movies, TV series and more</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Viewing on 1 season</p>
                  </div>
                  <div className="action-item">
                      <i><CloseCircleFilled/></i>
                      <p className='item-text'>HD quality</p>
                  </div>
                </div>
                <div className="select__plan-btn">
                  Choose a tariif
                </div>
        </div>
        <div data-aos='fade-up'  className="plan-card">
                <h3 className='plan-title'>Comfort</h3>
                <strong className='plan-price'>9.99 $</strong>
                <p className='reason-text'>For fun views with family and friends</p>
                <p className='day-text'>15 days free</p>
                <div className="card-actions">
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Unlimited movies, TV series and more</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Viewing on 2 season</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>HD quality</p>
                  </div>
                </div>
                <div className="select__plan-btn">
                  Choose a tariif
                </div>
        </div>
        <div data-aos='fade-up'  className="plan-card">
                <h3 className='plan-title'>Comfort+ </h3>
                <strong className='plan-price'>12.99 $</strong>
                <p className='reason-text'>For true cannoisseurs of cinema </p>
                <p className='day-text'>21 days free</p>
                <div className="card-actions">
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Unlimited movies, TV series and more</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Viewing on 3 season</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Ultra quality</p>
                  </div>
                </div>
                <div className="select__plan-btn">
                  Choose a tariif
                </div>
        </div>
        <div data-aos='fade-up'  className="plan-card">
                <h3 className='plan-title'>Vip </h3>
                <strong className='plan-price'>15.99 $</strong>
                <p className='reason-text'>For a home cineam feel </p>
                <p className='day-text'>30 days free</p>
                <div className="card-actions">
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Unlimited movies, TV series and more</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Viewing on 5 season</p>
                  </div>
                  <div className="action-item">
                      <i><CheckCircleFilled/></i>
                      <p className='item-text'>Ultra+ quality</p>
                  </div>
                </div>
                <div className="select__plan-btn">
                  Choose a tariif
                </div>
        </div>
    </div>
    </Container>
    </div>
  )
}

export default TariffPlans
