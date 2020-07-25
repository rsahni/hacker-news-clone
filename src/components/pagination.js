import React, {useState, useEffect} from 'react';

const Pagination = (props) => {
    const {pageNo, setPageNo, disableNextButton} = props;
    let isPrevDisable = pageNo === 0 ? 'disableLink': '';
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
                    <a href="#" className={isPrevDisable} onClick={(e) => {handlePrevious(e)}} >Previous</a> | <a href="#" className={disableNextBtn} onClick={(e) => {handleNext(e)}}>Next</a>
                </div>
            </React.Fragment>);
};

export default Pagination;