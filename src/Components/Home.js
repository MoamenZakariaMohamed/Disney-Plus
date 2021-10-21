import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Recommends from './Recommends';
import Viewer from './Viewer';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movies/movieSlice';
import { selectUserName } from '../features/user/userSlice';


const Home = () => {

  const dispatch=useDispatch();
  const usrNmae=useSelector(selectUserName);
  let recommends=[];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [usrNmae]);

    return (
        <Container>
          <ImgSlider />
          <Viewer />
          <Recommends />
          <NewDisney/>
          <Originals/>
          <Trending />
        </Container>
    )
}

export default Home

const Container=styled.main`
position:relative;
min-height: calc(100vh - 250px);
top: 72px;
padding: 0 calc(3.5vw + 5px);
overflow-x: hidden;
  display: block;

  &:after{
    content: "";
    background:url('/images/home-background.png')  center center / cover  no-repeat fixed;
    position: absolute;
    opacity:1;
    z-index: -1;
    inset: 0px;
}
`