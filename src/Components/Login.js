import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg'  alt='' />
                    <SingnUp>Get All There</SingnUp>
                    <Description>get premier access to raya and the last dragon for an additional fee
                            with a disney+ subscription. as of 03/26/21, the price of disney+
                            and The disney bundle will increase by $1.
                        </Description>
                        <CTALogoTwo src='/images/cta-logo-two.png' />
                </CTA>
               <BgImage/>
            </Content>
            
        </Container>
    )
}

export default Login

const Container=styled.div`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align:center;
    height:100vh;
`;
const Content=styled.div`
    margin-bottom:10pvw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    padding:80px 40px;
    height:100%;
`;
const BgImage=styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;
const CTA=styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;

`;
const CTALogoOne=styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;
const SingnUp=styled.a` 
    text-transform: uppercase;
    color: #f9f9f9;
    background-color: #0063e5;
    width:100%;
    font-weight:bold;
    margin-bottom:12px;
    font-size:18px;
    padding:17px 0;
    border:1px solid transparent;
    
    
    &:hover {
        background-color: #0483ee;
      }
`;
const Description=styled.p`
      text-transform:capitalize;
      font-size:15px;
      line-height: 1.5;
      margin:0 0 20px

`;
const CTALogoTwo=styled.img`
    width:100%
    max-width:600px;
`