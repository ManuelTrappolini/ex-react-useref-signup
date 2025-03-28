import { useState } from 'react'


function App() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState(0)
  const [description, setDescription] = useState('')

  function HandleSubmit(e) {

    e.preventDefault()

    if (!name || name.trim() === '') {

      alert('Please enter your name')

      return;
    }

    if (!username || username.trim() === '') {

      alert('Please enter your Username')

      return;
    }

    if (!password) {

      alert(`Please enter your Password`)

      return;
    }



    if (password !== confirmedPassword) {

      alert(`Your passwords don't match`)

      return;
    }

    if (!specialization) {

      alert('Please select your specialization')

      return;
    }

    if (!experience || experience < 0) {
      alert('Experience is not valid')
      return
    }

    if (!description || description.trim() === '' || description.length < 20) {

      alert(`Please enter your Description`)

      return;
    }

    else {
      console.log(`You submitted the form, here are your information:
        - Your Name: ${name}
        - Your Username: ${username}
        - Your Specialization: ${specialization}
        - Your Years of Experience: ${experience}
        - Your Description: ${description}`);
    }


  }


  return (
    <>
      <form className='form' action="">

        {/* name section */}

        <input
          className='field'
          type="text"
          placeholder='Insert your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* username section */}
        <input
          className='field'
          type="text"
          placeholder='Insert your Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        {/* password section */}
        <input
          className='field'
          type="password"
          placeholder='Insert your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        {/* confirm password section */}
        <input
          className='field'
          type="password"
          placeholder='Confirm your password'
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)} />

        {/* Specialization section */}
        <select
          className='field'
          type="select"
          placeholder='Select your specialization'
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)} >
          <option value="" disabled>Select your specialization</option>
          <option value="FullStack" >FullStack</option>
          <option value="FrontEnd" >FrontEnd</option>
          <option value="BackEnd" >BackEnd</option>

        </select>

        {/* Years of experience section */}
        <input
          className='field'
          type="number"
          placeholder='Insert your Years of experience'
          value={experience}

          onChange={(e) => setExperience(e.target.value)} />

        {/* Brief description section */}
        <textarea
          className='field'
          type="text"
          placeholder='Insert a description (min 20 char)'
          value={description}
          onChange={(e) => setDescription(e.target.value)} />

        <button type='submit' onClick={HandleSubmit}>Submit</button>


      </form>
    </>
  )
}

export default App
