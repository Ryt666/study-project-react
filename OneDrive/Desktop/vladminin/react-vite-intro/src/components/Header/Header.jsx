import { useState, useEffect } from "react";
import vite from "/vite.svg";
//import './Header.css'
import {styled} from 'styled-components'

 const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #1a1a1a;
`
export default function Header() {

  const [now, setNow] = useState(new Date())

useEffect(()=>{

  const interval = setInterval(()=> setNow(new Date()),1000)

  return () => {
    clearInterval(interval)
    console.log('cleaning')
  }
},[])

  return (
    <HeaderContainer>
      <img src={vite} alt="vite" />
      {/* <h3>Result University</h3> */}

      <span>Time now: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
