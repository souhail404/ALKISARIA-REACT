import React, { useEffect, useRef, useState } from 'react'
import productsData from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/products.json'

const ProductImageSlider = (props) => {
    //props 
    const productImages = props.images;

    //refs 
    const mainImgContainer = useRef()
    const mainImg = useRef()
    const imgSliderContainer = useRef()
    const sliderImgSlideBtnRight = useRef()
    const sliderImgSlideBtnLeft = useRef()
    const mainImgSlideBtnRight = useRef()
    const mainImgSlideBtnLeft = useRef()

    // functions    
    const squaredImg = ()=>{
        mainImgContainer.current.style.height = `${mainImgContainer.current.clientWidth}px`;
    }
    const changeMainImgSrc =(imgSrc , dindex)=>{
        mainImg.current.setAttribute('src' , imgSrc)
        mainImg.current.setAttribute('data-index' , dindex)
    }
    const imgSliderMoveL = () =>{
        imgSliderContainer.current.scrollBy({
            top: 0,
            left: -166,
            behavior: "smooth",
        })
    }
    const imgSliderMoveR = () =>{
        imgSliderContainer.current.scrollBy({
            top: 0,
            left: 166,
            behavior: "smooth",
        })
    }
    const  hideBtnL = () =>{
        if(imgSliderContainer.current.scrollLeft == 0){
            sliderImgSlideBtnLeft.current.style.opacity = '0';
        }
        else if(imgSliderContainer.current.scrollLeft > 0 ) {
            sliderImgSlideBtnLeft.current.style.opacity = '1';
        }
    }
    const  hideBtnR = () =>{
        const sliderRightEnd = imgSliderContainer.current.scrollWidth - imgSliderContainer.current.clientWidth - imgSliderContainer.current.scrollLeft;
        if(sliderRightEnd < 1){
            sliderImgSlideBtnRight.current.style.opacity = '0';
        }
        else if(sliderRightEnd > 1 ) {
            sliderImgSlideBtnRight.current.style.opacity = '1';
        }
    }
    const mainImgMoveLeft = ()=>{
        const currentImageIndex = mainImg.current.getAttribute('data-index');
        let index = 0;
        for(let i=0 ; i < productImages.length ; i++){
            let imgId =  productImages[i].id;
            if(imgId == currentImageIndex){
            index=i;
            }
        }
        let nextIndex = index-1;
        if(nextIndex < 0){
            nextIndex = productImages.length-1;
        }
        let nextImgSrc = productImages[nextIndex].src;
        let nextImgId = productImages[nextIndex].id;
        mainImg.current.setAttribute('src' , `${nextImgSrc}`);
        mainImg.current.setAttribute('data-index' , `${nextImgId}`);
    }   
    const mainImgMoveRight = ()=>{
        const currentImageIndex = mainImg.current.getAttribute('data-index');
        let index = 0;
        for(let i=0 ; i < productImages.length ; i++){
            let imgId =  productImages[i].id;
            if(imgId == currentImageIndex){
            index=i;
            }
        }
        let nextIndex = index+1;
        if(nextIndex > productImages.length-1){
            nextIndex = 0;
        }
        let nextImgSrc = productImages[nextIndex].src;
        let nextImgId = productImages[nextIndex].id;
        mainImg.current.setAttribute('src' , `${nextImgSrc}`);
        mainImg.current.setAttribute('data-index' , `${nextImgId}`);
    }  

    useEffect(()=>{
        hideBtnL();
        window.addEventListener('resize' , squaredImg);
        imgSliderContainer.current.addEventListener('scroll' ,()=>{
            hideBtnL();
            hideBtnR();
        }); 
        mainImgContainer.current.style.height = `${mainImgContainer.current.clientWidth}px`;
        return ()=>{
            window.removeEventListener('resize' , squaredImg);
            imgSliderContainer.current.removeEventListener('scroll' ,()=>{
                hideBtnL();
                hideBtnR();
            });
        }
    })

    return (
        <div className="pp--slider-wrapper">
            <div className="main-img" ref={mainImgContainer}>
                <img className=".m-img" key={mainImg} ref={mainImg} data-index={productImages[0].id}  src={productImages[0].src} alt=""/>
                <div className="main-click-rl">
                    <span ref={mainImgSlideBtnLeft} onClick={()=>{mainImgMoveLeft()}} className="slide-btn slide-btn-l"><img src="media/images/icons/chevron-left.svg" alt=""/></span>
                    <span ref={mainImgSlideBtnRight} onClick={()=>{mainImgMoveRight()}} className="slide-btn slide-btn-r"><img src="media/images/icons/chevron-right.svg" alt=""/></span>
                </div>
            </div>
            <div className="slider-imgs">
                <div className="imgs" ref={imgSliderContainer}>
                    {   
                        productImages.map((image , i)  =>{
                            return <div className="img"><img key={image.id} data-index={image.id} onClick={()=>{changeMainImgSrc(image.src , i)}} src={image.src} alt=""/></div>
                        })
                    }
                </div>
                <div className="click-rl">
                    <span ref={sliderImgSlideBtnLeft} className="slide-btn slide-btn-l" onClick={()=>{imgSliderMoveL()}}><img src="media/images/icons/chevron-left.svg" alt=""/></span>
                    <span ref={sliderImgSlideBtnRight} className="slide-btn slide-btn-r" onClick={()=>{imgSliderMoveR()}}><img src="media/images/icons/chevron-right.svg" alt=""/></span>
                </div>  
            </div>
        </div>  
    )
}

export default ProductImageSlider