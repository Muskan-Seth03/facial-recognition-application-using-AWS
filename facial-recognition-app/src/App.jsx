import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [image, setImage] = useState(null)
  const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image to authenticate')
  const [isAuth, setAuth] = useState(false)

  function sendImage(e) {
    e.preventDefault()

    const visitorImageName = uuidv4()

    fetch(`https://4m3m1hnvwi.execute-api.us-east-1.amazonaws.com/dev/facial-recognition-visitor-image-storage/${visitorImageName}.png`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'image/png' },
        body: image
      }
    ).then(async () => {
      const response = await authenticate(visitorImageName)

      if (response.Message === 'Success') {
        setAuth(true)
        setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to the office`)
      } else {
        setAuth(false)
        setUploadResultMessage('Authentication failed: Not an employee of this organization')
      }
    })
      .catch((error) => {
        setAuth(false)
        setUploadResultMessage('Error uploading image for authentication. Please try again.')
        console.error('Error uploading image:', error)
      })
  }

  async function authenticate(visitorImageName) {
    const requestUrl = 'https://4m3m1hnvwi.execute-api.us-east-1.amazonaws.com/dev/employee?' + new URLSearchParams({
      objectKey: `${visitorImageName}.png`
    })

    return await fetch(requestUrl)
      .then(res => res.json())
      .catch((error) => console.error(error))
  }

  return (
    <div className="app-wrapper">
      <div className="card">
        <h1 className="title">Facial Recognition Application</h1>

        <form onSubmit={sendImage} className="form">
          <input 
            type="file" 
            name="image" 
            onChange={(e) => setImage(e.target.files[0])} 
            className="file-input"
          />
          <button type="submit" className="btn">Authenticate</button>
        </form>

        <div className={isAuth ? 'success' : 'failure'}>
          {uploadResultMessage}
        </div>

        <img 
          src={image ? URL.createObjectURL(image) : "/placeholder.png"} 
          alt="Visitor" 
          className="preview-img"
        />
      </div>
    </div>
  )
}

export default App
