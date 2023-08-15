import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className='card home-card'>
        <h5>Kunal</h5>
        <div className='card-image'>
          <img src='https://tse1.mm.bing.net/th?id=OIP.mQ0aXFEfAP9UqbSG3OadVgHaE8&pid=Api&P=0&h=180' alt='' />
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>This is amazing post</p>
          <input className="form-control" type='text' placeholder='add a comment' />
        </div>
      </div>
      <div className='card home-card'>
        <h5>Kunal</h5>
        <div className='card-image'>
          <img src='https://tse1.mm.bing.net/th?id=OIP.mQ0aXFEfAP9UqbSG3OadVgHaE8&pid=Api&P=0&h=180' width="" alt='' />
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>This is amazing post</p>
          <input className="form-control" type='text' placeholder='add a comment' />
        </div>
      </div>
      <div className='card home-card'>
        <h5>Kunal</h5>
        <div className='card-image'>
          <img src='https://tse1.mm.bing.net/th?id=OIP.mQ0aXFEfAP9UqbSG3OadVgHaE8&pid=Api&P=0&h=180' alt='' />
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>This is amazing post</p>
          <input className="form-control" type='text' placeholder='add a comment' />
        </div>
      </div>
    </div>
  )
}

export default Home