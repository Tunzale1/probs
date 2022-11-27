import React, { Component } from 'react'
import Email from '../Email/Email'
import Name from '../Name/Name'
import Addres from '../Adress/Addres'
import Info from '../Info/Info'
class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <Name
        title="Name"
        name="Tunzala"
        lastname="Imanova"
        ata="Behram"
        />
        <Info
        title="Personal Info"
        info="I am studying for a bachelor's degree at the Azerbaijan State Oil and Industry University"
        experience="I have volunteered in many places: Formula 1, ASA, ASAN service, BirKonullu and etc"
        />
        <Email
        title="E-mail"
        email="tunzaleimanova9658@mail.ru"
        />
        <Addres
        title="Address"
        firstline="598 Virginia Street, Apartment 2"
        secondline="River Grove IL 60171"
        />


      </div>
    )
  }
}


export default Profile