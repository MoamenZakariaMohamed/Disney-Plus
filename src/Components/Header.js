import React ,{useEffect}from 'react';
import styled from 'styled-components';
import { auth, provider } from "../firebase";
import { useSelector,useDispatch } from 'react-redux';
import { selectUserPhoto,selectUserName, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history=useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto); 
    const dispatch=useDispatch();

    useEffect(() => {
      auth.onAuthStateChanged(async(user)=>{
        if(user){
          setUser(user)
          history.push('/home')
        }
      })
    }, [userName])

    const handelAuth = () =>{
       if(!userName){
        auth
            .signInWithPopup(provider)
            .then((result)=>{
                setUser(result.user); 
        })
         .catch((error) => {
          alert(error.message);
        });
  }else if(userName){
    auth
       .signOut().then(()=>{
        dispatch(setSignOutState());
        history.push('/')
      })
    }
  }
    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

    return (
        <Nav>
             <Logo>
                 <img src='/images/logo.svg' alt='DisneyPlus' />
             </Logo>
                {!userName ? 
                (<Login onClick={handelAuth}>login </Login>
                    ) : (  <>
             <NavMenu>
                 <a href='/home'>
                     <img src="/images/home-icon.svg" alt="HOME"/>
                    <span>home</span>
                 </a>
                 <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>search</span>
                 </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>watchlist</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>series</span>
            </a>
             </NavMenu>
            <SingOut> 
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
              <span onClick={handelAuth}>Sign out</span>
            </DropDown>
          </SingOut>
             </>)}
        </Nav>
    )
}

export default Header

const Nav=styled.nav`
    postion:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#090b13;
    display:flex;
    height:70px;
    justify-content: space-between;
    align-items: center;
    padding:0 36px;
    letter-spacing: 16px;
    z-index:3;
    
`;
const Logo=styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    display: inline-block;

    img {
        display: block;
        width: 100%;
      }
`
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-transform:uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important; 

    }
  }
  
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 8px;
  padding: 8px;
  font-sixe:14px;
  letter-spacing: 3px;
  width:100px;
  opacity: 0;
`;
const SingOut = styled.div`
  position: relative;
  height: 45px;
  width: 45px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  ${UserImg} {
    border-radius: 50%;
  }
  &:hover{
    ${DropDown}{
      opacity:1;
      transition-duration:2s;
    }
  }
`;
  

