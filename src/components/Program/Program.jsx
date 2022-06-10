import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import chest from '../../assets/Images/chest.png';
import back from '../../assets/Images/back.jpg';
import shoulder from '../../assets/Images/shoulder.jpg';
import leg from '../../assets/Images/legs.png';
import biceps from '../../assets/Images/biceps.jpg';
import triceps from '../../assets/Images/triceps.png';
import cardio from '../../assets/Images/cardio.png';
import './program.css'
import ChestProgram from './ChestProgram';
import BackProgram from './BackProgram';
import { ShouldersProgram } from './ShouldersProgram';
import LegsProgram from './LegsProgram';
import BicepsProgram from './BicepsProgram';
import TricepsProgram from './TricepsProgram';
import CardioProgram from './CardioProgram';

const Program = () => {

    const navigate = useNavigate();
    const [isChest, setIsChest] = useState([]);
    const [isBack, setIsBack] = useState([]);
    const [isShoulder, setIsShoulder] = useState([]);
    const [isLeg, setIsLeg] = useState([]);
    const [isBiceps, setIsBiceps] = useState([]);
    const [isTriceps, setIsTriceps] = useState([]);
    const [isCardio, setIsCardio] = useState([]);




    useEffect(() => {
        if(!JSON.parse(window.localStorage.getItem('isLoggin'))){
          navigate('/')
        }
      }, [])


      useEffect(() => {
          axios.get("https://projet-tekup.herokuapp.com/Chest/").then(res => {
            setIsChest(res.data);
            console.log(res.data);
            }).catch(error => {
                console.log(error);
            })
            axios.get("https://projet-tekup.herokuapp.com/Back/").then(res => {
                setIsBack(res.data);
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            })
            axios.get("https://projet-tekup.herokuapp.com/Shoulders/").then(res => {
                setIsShoulder(res.data);
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            }
            )
            axios.get("https://projet-tekup.herokuapp.com/Legs/").then(res => {
                setIsLeg(res.data);
                console.log(res.data);
            }
            ).catch(error => {
                console.log(error);
            }
            )
            axios.get("https://projet-tekup.herokuapp.com/Biceps/").then(res => {
                setIsBiceps(res.data);
                console.log(res.data);
            }
            ).catch(error => {
                console.log(error);
            }
            )
            axios.get("https://projet-tekup.herokuapp.com/Triceps/").then(res => {
                setIsTriceps(res.data);
                console.log(res.data);
            }
            ).catch(error => {
                console.log(error);
            }
            )
            axios.get("https://projet-tekup.herokuapp.com/Cardio/").then(res => {
                setIsCardio(res.data);
                console.log(res.data);
            }
            ).catch(error => {
                console.log(error);
            }
            )
      }, [])




  return (
    <div className='program-container'>
        <div className='program-top'></div>
        <div className='header-img'>
        <img src="https://res.cloudinary.com/dhncrtnjp/image/upload/v1652738463/dsaqbo1r2yowksmr27aw.jpg" alt="program" />
        </div>
        <div className="program-content">
            <div className="program-title">
                <h1> Program </h1>
            </div>
            <div className="program-body">
                <div className="program-body-left">
                    <div className="program-body-left">
                    <img src={ chest } alt="program" /> 
                    </div>
                </div>
                <div className="program-body-right">
                    {
                        isChest.map(chest => {
                            return (
                                <ChestProgram key={chest.id} chest={chest} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="program-body-inv">
                    <div className="program-body-left">
                        {
                            isBack.map(back => {
                                return (
                                    <BackProgram key={back.id} back={back} />
                                )
                            })
                        }
                    </div>
                <div className="program-body-right">
                 <img src={ back } alt="program" /> 
                </div>
            </div>
            <div className="program-body">
                <div className="program-body-left">
                    <div className="program-body-left">
                    <img src={ shoulder } alt="program" /> 
                    </div>
                </div>
                <div className="program-body-right">
                    {
                        isShoulder.map(shoulder => {
                            return (
                                <ShouldersProgram key={shoulder.id} shoulder={shoulder} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="program-body-inv">
                    <div className="program-body-left">
                        {
                            isLeg.map(leg => {
                                return (
                                    <LegsProgram key={leg.id} legs={leg} />
                                )
                            })
                        }
                    </div>
                <div className="program-body-right">
                 <img src={ leg } alt="program" /> 
                </div>
            </div>
            <div className="program-body">
                <div className="program-body-left">
                    <div className="program-body-left">
                    <img src={ biceps } alt="program" /> 
                    </div>
                </div>
                <div className="program-body-right">
                    {
                        isBiceps.map(biceps => {
                            return (
                                <BicepsProgram key={biceps.id} biceps={biceps} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="program-body-inv">
                    <div className="program-body-left">
                        {
                            isTriceps.map(triceps => {
                                return (
                                    <TricepsProgram key={triceps.id} triceps={triceps} />
                                )
                            })
                        }
                    </div>
                <div className="program-body-right">
                 <img src= {triceps } alt="program" /> 
                </div>
            </div>
            <div className="program-body">
                <div className="program-body-left">
                    <div className="program-body-left">
                    <img src={ cardio } alt="program" /> 
                    </div>
                </div>
                <div className="program-body-right">
                    {
                        isCardio.map(cardio => {
                            return (
                                <CardioProgram key={cardio.id} cardio={cardio} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program