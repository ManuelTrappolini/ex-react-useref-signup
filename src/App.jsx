import { useState } from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@#$%^&*()-_=+[]{}|;:\'"\\",.<>?/`~';

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState(0);
  const [description, setDescription] = useState('');

  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [specializationError, setSpecializationError] = useState('');
  const [experienceError, setExperienceError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const [nameValid, setNameValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [specializationValid, setSpecializationValid] = useState(false);
  const [experienceValid, setExperienceValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);



  /* handling name errors */
  function validateName(name) {
    if (!name || name.trim() === '') {
      setNameError('Please enter your name');
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
  }


  /* handling username errors */
  function validateUsername(username) {
    const nameNumber = [...numbers].some(number => username.includes(number));
    const nameSymbol = [...symbols].some(symbol => username.includes(symbol));

    if (username.length < 6) {
      setUsernameError('Username must be at least 6 characters');
      setUsernameValid(false);
    } else if (nameNumber || nameSymbol) {
      setUsernameError('Username cannot contain numbers or symbols');
      setUsernameValid(false);
    } else {
      setUsernameError('');
      setUsernameValid(true);
    }
  }


  /* handling password errors */
  function validatePassword(password) {
    const passwordNumber = [...numbers].some(number => password.includes(number));
    const passwordSymbol = [...symbols].some(symbol => password.includes(symbol));


    if (!password) {
      setPasswordError('Please enter your Password');
      setPasswordValid(false);
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      setPasswordValid(false);
    } else if (!passwordNumber) {
      setPasswordError('Password must contain at least one number');
      setPasswordValid(false);
    } else if (!passwordSymbol) {
      setPasswordError('Password must contain at least one symbol');
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  }


  /* handling confirm password errors */
  function validateConfirmPassword(password, confirmedPassword) {
    if (password !== confirmedPassword) {
      setConfirmPasswordError('Your passwords do not match');
      setConfirmPasswordValid(false);
    } else {
      setConfirmPasswordError('');
      setConfirmPasswordValid(true);
    }
  }


  /* handling spec errors */
  function validateSpecialization(specialization) {
    if (!specialization) {
      setSpecializationError('Please select your specialization');
      setSpecializationValid(false);
    } else {
      setSpecializationError('');
      setSpecializationValid(true);
    }
  }

  /* handling experience errors */
  function validateExperience(experience) {
    if (experience < 0) {
      setExperienceError('Experience is not valid');
      setExperienceValid(false);
    } else {
      setExperienceError('');
      setExperienceValid(true);
    }
  }


  /* handling description errors */
  function validateDescription(description) {
    if (!description || description.trim() === '') {
      setDescriptionError('Please enter your description');
      setDescriptionValid(false);
    } else if (description.length < 100) {
      setDescriptionError('Description must be at least 100 characters');
      setDescriptionValid(false);
    } else if (description.length > 1000) {
      setDescriptionError('Description must be less than 1000 characters');
      setDescriptionValid(false);
    } else {
      setDescriptionError('');
      setDescriptionValid(true);
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
    validateName(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    validateUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    validatePassword(e.target.value);
    validateConfirmPassword(e.target.value, confirmedPassword);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmedPassword(e.target.value);
    validateConfirmPassword(password, e.target.value);
  }

  function handleSpecializationChange(e) {
    setSpecialization(e.target.value);
    validateSpecialization(e.target.value);
  }

  function handleExperienceChange(e) {
    setExperience(e.target.value);
    validateExperience(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    validateDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    /*  Make sure all fields are valid before submitting */
    if (nameValid && usernameValid && passwordValid && confirmPasswordValid && specializationValid && experienceValid && descriptionValid) {
      console.log(`You submitted the form, here are your information:
        - Your Name: ${name}
        - Your Username: ${username}
        - Your Specialization: ${specialization}
        - Your Years of Experience: ${experience}
        - Your Description: ${description}`);
    } else {
      alert('Please fix the errors before submitting.');
    }
  }

  return (
    <>
      <h1>Web Developer Signup</h1>
      <div className='container'>
        <form onSubmit={handleSubmit} className='form' >

          {/* Name Section */}
          <input
            className='field'
            type="text"
            placeholder='Insert your Name'
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <div className="error">{nameError}</div>}
          {nameValid && !nameError && <div className="valid">Name is valid</div>}

          {/* Username Section */}
          <input
            className='field'
            type="text"
            placeholder='Insert your Username'
            value={username}
            onChange={handleUsernameChange} />
          {usernameError && <div className="error">{usernameError}</div>}
          {usernameValid && !usernameError && <div className="valid">Username is valid</div>}

          {/* Password Section */}
          <input
            className='field'
            type="password"
            placeholder='Insert your password'
            value={password}
            onChange={handlePasswordChange} />
          {passwordError && <div className="error">{passwordError}</div>}
          {passwordValid && !passwordError && <div className="valid">Password is valid</div>}

          {/* Confirm Password Section */}
          <input
            className='field'
            type="password"
            placeholder='Confirm your password'
            value={confirmedPassword}
            onChange={handleConfirmPasswordChange} />
          {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
          {confirmPasswordValid && !confirmPasswordError && <div className="valid">Password confirmed</div>}

          {/* Specialization Section */}
          <select
            className='field'
            value={specialization}
            onChange={handleSpecializationChange}>
            <option value="" disabled>Select your specialization</option>
            <option value="FullStack">FullStack</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
          </select>
          {specializationError && <div className="error">{specializationError}</div>}
          {specializationValid && !specializationError && <div className="valid">Specialization selected</div>}

          {/* Experience Section */}
          <input
            className='field'
            type="number"
            placeholder='Insert your Years of experience'
            value={experience}
            onChange={handleExperienceChange} />
          {experienceError && <div className="error">{experienceError}</div>}
          {experienceValid && !experienceError && <div className="valid">Experience is valid</div>}

          {/* Description Section */}
          <textarea
            className='field'
            placeholder='Insert a description (min 100 char, max 1000 char)'
            value={description}
            onChange={handleDescriptionChange} />
          {descriptionError && <div className="error">{descriptionError}</div>}
          {descriptionValid && !descriptionError && <div className="valid">Description is valid</div>}

          <button type='submit'>Submit</button>

        </form>
      </div>
    </>
  );
}

export default App;
