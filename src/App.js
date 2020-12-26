import React, { useState, useEffect } from 'react';

import { Heading } from "./components/Heading";
import { Loading } from "./components/Loading";
import { Image } from "./components/Image";

import axios from "axios";
import styled, {createGlobalStyle} from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

// Style
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`


const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com/collections/778914/photos";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios.get(apiRoot, {
      params: {
        client_id: accessKey,
        page: (images.length/12)+1,
        per_page: 12
      }
    } )
      .then(res => setImages([...images, ...res.data]))
  }


  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loading />}
      >
        <WrapperImage>
          {images.map(image => (
            <Image url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
