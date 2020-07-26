import React, {useState} from 'react';

const Pagination = (props) => {
    const {pageNo, setPageNo, disableNextButton} = props;
    let disablePrevBtnClass = pageNo === 0 ? 'disableLink': '';
    let disablePrevBtn = pageNo === 0 ? true: false;
    let disableNextBtn = disableNextButton ? 'disableLink' : '';
    const [pageCount, setPageCount] = useState(pageNo);

    const handlePrevious =(e)=>{
        e.preventDefault();
        if(pageNo > 0){
            let tempPageCount = pageCount - 1;
            setPageNo(tempPageCount);
            setPageCount(tempPageCount);
        }
    };

    const handleNext =(e)=>{
        e.preventDefault();
        if(!disableNextBtn){
            let tempPageCount = pageCount + 1;
            setPageNo(tempPageCount);
            setPageCount(tempPageCount);
        }
    };

    return (<React.Fragment>
                <div className="pagination-section">
                    <button  aria-label="Previous Page" className={disablePrevBtnClass} disabled={disablePrevBtn} onClick={(e) => {handlePrevious(e)}} >Previous</button> | <button  aria-label="Next Page" disabled={disableNextButton} className={disableNextBtn} onClick={(e) => {handleNext(e)}}>Next</button>
                </div>
            </React.Fragment>);
};

export default Pagination;