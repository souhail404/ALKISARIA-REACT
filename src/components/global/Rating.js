import React from 'react'

const Rating = (props) => {
    const rate= props.rate;
    
    const x = ()=>{
        if(0 < rate &&  rate < 0.25){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(0.25 <= rate &&  rate < 0.75){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-half.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(0.75 <= rate &&  rate < 1.25){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(1.25 <= rate &&  rate < 1.75){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-half.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(1.75 <= rate &&  rate < 2.25){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(2.25 <= rate &&  rate < 2.75){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-half.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(2.75 <= rate &&  rate < 3.25){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(3.25 <= rate &&  rate < 3.75){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-half.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if( 3.75 <= rate   && rate < 4.25){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                    </div>
        }
        else if(4.25 <= rate  && rate < 4.75){
            return  <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-half.svg" alt=""/></span>
                    </div>
        }
        else if(4.75 <= rate){
            
            return <div className="rating">
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>  
                        <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                    </div>
        }
    }
    

    return (
        <>
            {x()}
        </>
  )
}

export default Rating