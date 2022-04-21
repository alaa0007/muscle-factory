import React from 'react'
import './profil.css'
import { BsFillCameraFill } from 'react-icons/bs'

const Profil = () => {
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
              <form>
                <label> Week data :</label>
                <input type='date' placeholder='dd/mm/yy' required/>
                <label> Week goal :</label>
                <select name="program" id="program" required>
                  <option value="">Select your goal</option>
                  <option value="1">Lose weight</option>
                  <option value="2">Build muscle</option>
                  <option value="3">Gain muscle</option>
                </select>
                <label> Body Height :</label>
                <input type='text' placeholder='180' className='height' required/>Cm
                <label className='space'> Body Weight :</label>
                <input type='text' placeholder='80' className='weight' required/>Kg
                <label htmlFor="bodyImg" className='bodyImage'>Your body image <BsFillCameraFill className='logoImg'/></label>
                <input type="file" id="bodyImg" name="bodyImg" accept="image/*" required hidden/>              
              </form>
            </div>
            <button className='btn btn-profil'>Save</button>
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