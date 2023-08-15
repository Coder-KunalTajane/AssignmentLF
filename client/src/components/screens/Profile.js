import React from 'react'

const Profile = () => {
  return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
      <div style={{display:"flex", justifyContent:"space-around", margin:"18px 2px",borderBottom:"1px solid gray"}}>
        <div>
           <img src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' style={{width:"160px",height:"160px",borderRadius:"80px"}} alt='Profile_image'/>
        </div>
        <div>
          <h4>Kunal Tajane</h4>
          <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className='gallery'>
          <img className='item' src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' alt=''/>
          <img className='item' src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' alt=''/>
          <img className='item' src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' alt=''/>
          <img className='item' src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' alt=''/>
          <img className='item' src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' alt=''/>
          <img className='item' src='https://tse2.mm.bing.net/th?id=OIP.HyE0Vf661gL3TByzJyBnAQHaFQ&pid=Api&P=0&h=180' alt=''/>

      </div>
    </div>
  )
}

export default Profile