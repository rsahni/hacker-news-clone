import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from './components/header';
import MiddleContainer from './components/middleContainer';
import Paginataion from './components/pagination';
import Footer from './components/footer';

const App = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [postHideData, setPostHideData] = useState([]);
   
  useEffect(()=>{
    fetchData(pageNo);
    if(window.localStorage.getItem('postHideData')){
      setPostHideData(window.localStorage.getItem('postHideData'));
    }
  }, []);

  useEffect(()=>{
    fetchData(pageNo);
  }, [pageNo]);

  const fetchData = (pageNo) => {
    axios
    .get('https://hn.algolia.com/api/v1/search?tags=front_page&page=' + pageNo)
    .then(res =>{
        setData(res.data.hits)
        if(pageNo === (res.data.nbPages - 1)){
          setDisableNextButton(true);
        }else{
          setDisableNextButton(false);
        }
    })
  };

  return (
    <React.Fragment>
      <Header />
      <MiddleContainer data={data} postHideData={postHideData} setPostHideData={setPostHideData} />
      <Paginataion pageNo={pageNo} setPageNo={setPageNo} disableNextButton={disableNextButton} />
      <Footer data={data} />
    </React.Fragment>
  );
}

export default App;
