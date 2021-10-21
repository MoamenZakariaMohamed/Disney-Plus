import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTrending } from '../features/movies/movieSlice'

const Trending = () => {
    const movies=useSelector(selectTrending);
    return (
        <Container>
            <h3>Trendings</h3>
            <Content>
               {movies &&movies.map((movie,key)=>(
                   <Wrap key={key}>
                   <Link to={'/detail/'+movie.id}>
                       <img src={movie.cardImg} alt={movie.title} />
                    </Link>
                    </Wrap>
               ))}
                
            </Content>
        </Container>
    )
}

export default Trending ;

const Container=styled.div`
 padding :0 0 26px;
`
const Content=styled.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr))
    }
`
const Wrap=styled.div`
    padding-top: 56.25%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
      }

      &:hover{
          transform:scale(1.05);
          border-color:rgba(249,249,249,80%)
      }
`