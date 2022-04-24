import React, {useState, useEffect} from 'react'
import './profil.css'
import { BsFillCameraFill } from 'react-icons/bs'

const Profil = () => {
  
  const userData = {
    date : "",
    goal : "",
    height: "",
    weight : "",
    image : ""
  }
  
  const[formValues, setFormValues] = useState(userData);
  const[formErrors, setFormErrors] = useState({});
  const[isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors (validate(formValues));
    setIsSubmitted(true);
    apiProfilUpdate(formValues);
    // setFormValues(userData);
  }
  
  const apiProfilUpdate = (formValues) => {
    fetch('http://localhost:3000/Profil', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }

  const validate = (values) => {
    const errors = {};
    if(!values.date) {
      errors.date = "Date is required";
    }
    if(!values.goal) {
      errors.goal = "Goal is required";
    }
    if(!values.height) {
      errors.height = "Height is required";
    }
    if(!values.weight) {
      errors.weight = "Weight is required";
    }
    return errors;
  }

  useEffect(() => {
    console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmitted) {
        console.log("form submitted");
        console.log(formValues);
      }
    
  },[formErrors]);



  return (
    <div className='profil-container'>
      <div className='top'></div>
      <div className='profil'>
      <div className='profil-left'>
        <div className='profil-text'>
          <h2>CONNECTED MUSCLES</h2>
          <h4>Real transformation requires real honesty</h4>
        </div>
      </div>
      <div className='profil-right'>
        <div className='profil-text'>
        <h2>Follow your transformation</h2>
        </div>
        <div className='profil-form'>
            <div className='profil-form-text'>
              <h3>Set your body information and goal</h3>
            </div>
            <div className='profil-form-inputs'>
              <form onSubmit={handleSubmit}>
                <label> Week data :</label>
                <input type='date' placeholder='dd/mm/yy' name="date" value={formValues.date} onChange={handleChange} required/>
                <label> Week goal :</label>
                <select name="goal" value={formValues.goal} onChange={handleChange} required>
                  <option value="nothing">Select your goal</option>
                  <option value="lose-weight">Lose weight</option>
                  <option value="build-muscle">Build muscle</option>
                  <option value="gain-muscle">Gain muscle</option>
                </select>
                <label> Body Height :</label>
                <input type='text' placeholder='180' className='height' name="height" value={formValues.height} onChange={handleChange} required/>Cm
                <label className='space'> Body Weight :</label>
                <input type='text' placeholder='80' className='weight' name="weight" value={formValues.weight} onChange={handleChange} required/>Kg
                <label htmlFor="image" className='bodyImage'>Your body image <BsFillCameraFill className='logoImg'/></label>
                <input type="file" id="image" name="image" accept="image/*" value={formValues.image} onChange={handleChange}  hidden/>              
                <div className='btn-form'>
                <button className='btn btn-profil'>Save</button>
                </div>
              </form>
            </div>
        </div>

        <div className='profil-transformation'>
            <div className='profil-transformation-text'>
              <h3>My Transformation</h3>
            </div>
            <div className='profil-transformation-weeks'>
              <span className='week'>Week 1</span>
              <span className='week'>Week 2</span>
              <span className='week'>Week 3</span>
              <span className='week'>Week 4</span>
              <span className='week'>Week 5</span>
              <span className='week'>Week 6</span>
              <span className='week'>Week 7</span>
              <span className='week'>Week 8</span>
              <span className='week'>Week 9</span>
              <span className='week'>Week 10</span>
              <span className='week'>Week 11</span>
              <span className='week'>Week 12</span>
            </div>
        </div>
        <div className='profil-check'>
            <h4>Check my body type</h4>
            <button className='btn btn-profil'> Check</button>
        </div>
      </div>
      </div>
      <div className='line'>
      <hr/>
      </div>
    </div>
  )
}

export default Profil