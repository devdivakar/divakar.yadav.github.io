import React from 'react';
import './Technologies.css';
import java from '../../assets/images/java.svg'
import python from '../../assets/images/python.svg'
import nodeJs from '../../assets/images/node.svg'
import redis from '../../assets/images/redis.svg'
import docker from '../../assets/images/docker_edit.svg'
import babel from '../../assets/images/babel_edited.svg'
import webpack from '../../assets/images/webpack.svg'
import mysql from '../../assets/images/mysql.svg'
import Kubernetes from '../../assets/images/kube_edited_final.svg'
import mongodb from '../../assets/images/MongoDB.svg'
import kafka from '../../assets/images/kafka.svg'
import android from '../../assets/images/android.svg'
import beautifulSoup from '../../assets/images/beautifulSoup.svg'
import Marathon from '../../assets/images/Marathon.svg'
import django from '../../assets/images/django.svg'
import ReactJs from '../../assets/images/reactJs.svg'
import ReactNative from '../../assets/images/react-native.svg'
import kotlin from '../../assets/images/kotlin.svg'
import spring from '../../assets/images/spring_java.svg'
import wireshark from '../../assets/images/wireshark.svg'
import CosmosDb from '../../assets/images/CosmosDb.svg'



const Technologies = () => {

  return (
    <div className='technologies_wrapper'>
        <div className='technology_section'>
            <h1>Technologies Worked on</h1>
        </div>
        <div className='technologies_wrapper'>
            <img className='technology_icon' src={java}/>
            <img className='technology_icon' src={python}/>
            <img className='technology_icon' src={nodeJs}/>
            <img className='technology_icon' src={redis}/>
            <img className='technology_icon' src={docker}/>
            <img className='technology_icon' src={babel}/>
            <img className='technology_icon' src={webpack}/>
            <img className='technology_icon' src={mysql}/>
            <img className='technology_icon' src={Kubernetes}/>
            <img className='technology_icon' src={mongodb}/>
            <img className='technology_icon' src={kafka}/>
            <img className='technology_icon' src={android}/>
            <img className='technology_icon' src={beautifulSoup}/>
            <img className='technology_icon' src={Marathon}/>
            <img className='technology_icon' src={django}/>
            <img className='technology_icon' src={ReactJs}/>
            <img className='technology_icon' src={kotlin}/>
            <img className='technology_icon' src={ReactNative}/>
            <img className='technology_icon' src={spring}/>
            <img className='technology_icon' src={wireshark}/>
            <img className='technology_icon' src={CosmosDb}/>
        </div>
    </div> 
  );
};

export default Technologies;
