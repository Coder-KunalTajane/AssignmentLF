import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import M from 'materialize-css'


const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (url) {
      fetch('/createpost', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          title: title,
          body: body,
          pic: url

        })
      }).then(res => res.json())
        .then(data => {
          console.log("Success:", data);
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" })

          } else {
            alert("Post created successfull")
            navigate('/')
          }

        })
        .catch((error) => {
          alert("Error", error)
        })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const navigate = useNavigate();

  const postDetails = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "assignment")
    data.append("cloud_name", "dste8oo8t")
    fetch("https://api.cloudinary.com/v1_1/dste8oo8t/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setUrl(data.url)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='create-post-container'>
      <div className='card input-filed'
        style={{ margin: "10px", maxWidth: "500px", padding: "20px", textAlign: "center" }}
      >
        <input
          type='text'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn btn-success">
            <span>Upload Image</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => postDetails()}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost