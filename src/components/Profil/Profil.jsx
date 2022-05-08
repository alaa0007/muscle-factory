import React, {useState, useEffect, useId, useRef} from 'react'
import { useParams } from 'react-router-dom';
import './profil.css'
import { BsFillCameraFill } from 'react-icons/bs'
import { Modal } from 'react-responsive-modal';
import profilBody from '../../assets/Images/profilBody.jpg';
import logo from '../../assets/Images/logoWithoutBg.png';
import profilHeigth from '../../assets/Images/profilHeigth.png';
import profilWeight from '../../assets/Images/profilWeight.png';
import axios from 'axios';



const Profil = () => {
  const idImage = useId();
  const idHeight = useId();
  const idWeight = useId();

  const { id } = useParams();
  const fromRef = useRef();

  const[isImageUrl, setIsImageUrl] = useState("");
  const[isformValues, setFormValues] = useState({});
  const[tranformationValues, setIstranformationValues] = useState([]);
  const[formErrors, setFormErrors] = useState({});
  const[isSubmitted, setIsSubmitted] = useState(false);
  const[isItem, setIsItem] = useState({});
  const[open, setOpen] = useState(false);
  const[isImage, setIsImage] = useState(null);
  const [user, setUser] = useState({});

  
  const onCloseModal = () => setOpen(false)
  


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...isformValues, [name]: value})
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImg()
    setFormErrors (validate(isformValues));
    setIsSubmitted(true);
    apiProfilUpdate(isformValues);
    // setFormValues({});
  }

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')));
      console.log(user.Email);
    } , [user.Email]);



  const uploadImg = async () =>  {
    const fromImg = new FormData();
    fromImg.append('file', isImage);
    fromImg.append('upload_preset', 'schascqs');
    await axios.post("https://api.cloudinary.com/v1_1/dy6lmqeco/upload", fromImg)
    .then(res => {
      console.log(res.data.secure_url);
      setIsImageUrl(res.data.secure_url);
      console.log(isImageUrl);
    });
  }

  
  const apiProfilUpdate = (formValues) => {
    formValues = { userId : id, image: isImage, imageUrl : isImageUrl, ...formValues}
    axios.post("https://projet-tekup.herokuapp.com/Transformation/", formValues).then(res => {
      console.log(res.data);
      fromRef.current.reset();
  })
     .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    axios.get(`https://projet-tekup.herokuapp.com/Transformation/?id=${user.Email}`).then(res => {
      setIstranformationValues(res.data);
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    })
  }, [user]);



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
      if(Object.keys(formErrors).length === 0 && isSubmitted) {
        console.log("form submitted");
      }
  },[formErrors]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }
  ,[])

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
              <form onSubmit={handleSubmit} ref={fromRef}>
                <label> Week data :</label>
                <input type='date' placeholder='dd/mm/yy' name="date" value={ isformValues.date } onChange={handleChange} required/>
                <label> Week goal :</label>
                <select name="goal" value={ isformValues.goal } onChange={handleChange} required>
                  <option value="nothing">Select your goal</option>
                  <option value="lose-weight">Lose weight</option>
                  <option value="build-muscle">Build muscle</option>
                  <option value="gain-muscle">Gain muscle</option>
                </select>
                <label> Body Height :</label>
                <input type='text' placeholder='180' className='height' name="height" value={ isformValues.height } onChange={handleChange} required/>Cm
                <label className='space'> Body Weight :</label>
                <input type='text' placeholder='80' className='weight' name="weight" value={ isformValues.weight } onChange={handleChange} required/>Kg
                <label htmlFor={ idImage } className='bodyImage'>Your body image <BsFillCameraFill className='logoImg'/></label>
                <input type="file" id={ idImage } accept="image/*" value={ isformValues.image } onChange={(e) => {setIsImage(e.target.files[0]);}}  hidden/>              
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
              {
                tranformationValues.map(( item, index ) => {
                  return(
                    <span className='week' key={ index } onClick={ () => { setOpen(true); setIsItem(item); } }>Transformation { index+1 }</span>
                  )
                })
              }
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

      
       <Modal open={open} onClose={onCloseModal} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={500}>
        <div className='popup-profil'>
          <div className='popup-header'>
          <img src={ logo } alt="loginLogo" className='logo'/>
            <h2>Work hard until you see the results</h2>
          </div>
          <div className='popup-container'>
            <div className='popup-height-weight'>
              <div className='weight-img'>
                <img src={ profilWeight } alt="weight" />
                <label htmlFor='idWeight'>Weight:</label>
                <span id={ idWeight } className='heightCm'>{ isItem.Body_Weight || 0 }</span> Kg
              </div>
              <div className='height-img'>
                <img src={ profilHeigth } alt="height" />
                <label htmlFor='idHeight'>Height:</label>
                <span id={ idHeight } className='heightCm'>{ isItem.Body_Height  || 0 }</span> Cm
              </div>
            </div>
            <hr />
            {
              isItem.Image_Link === "False" ? 
              ( 
                <div className='popup-progress'>
                  <img src={ profilBody } alt="yourBodyImage1" />
                </div> 
              ) 
                : 
              ( 
                <div className='popup-progress'>
                  <img src={ isItem.Image_Link } alt="yourBodyImage2" />
                </div> 
              )
            }
          </div>
      </div>
      </Modal> 
      <div className="elfsight-app-2e1fe743-6d7e-470b-bd7d-e2150988f7e1"></div>
    </div>
  )
}

export default Profil