import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import applergic from '../../assets/applergic mobile.png'
import got from '../../assets/got-ss.png'
import shopeame from '../../assets/shopeame ss 1.png'
import pokedex from '../../assets/Pokedex-ss.png'
import '../carousel/carousel.scss';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  function nonVisible(){
    let slides = document.getElementsByClassName("forward")
    console.log("si hace");
    slides.map(function(item){
      if(item.classList.contains("visible-slides") == false){
        item.classList.add("non-visible-slides")
      }else if (item.classList.contains("visible-slides") == true){
        item.classList.remove("non-visible-slides")
      }
    })
    
  }

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        showSlidesBeforeInit={true}
        containerProps = {{
            className: "container-carousel",
            style: {
                paddingTop: '50px',
                overflow: 'visible!important',
            },
        }}
        innerProps = {{
            className: "inner-carousel",
        }}
        visibleSlideProps= {{
          className: "visible-slides",
            style: {
                overflow: 'visible!important',
            },
        }}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'relative',
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '40px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            zIndex: "99",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '40px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            zIndex: "99",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {/* <div className="proyect-container" id="proyect-container"> */}
        <div>
        <div className="card">
       <div className="face face1">
         <div className="content">
            {/* <i className="fab fa-windows"></i>             */}
           {/* <h3>Windows</h3> */}
           <img src={applergic}/>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> <h5>Applergic</h5> Mobile application using ReactJs designed to simplify the lives of people with allergies. The app allows the user to scan barcodes and checks if the user is allowed to consume the product.</p>
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
        </div>
        <div>
        <div className="card">
       <div className="face face1">
         <div className="content">
      <img src={pokedex}/>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> <h5>Pokedex</h5>Web application using the Pokemon API, that filters the pokemons by type and name</p>
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
        </div>
        <div>
        <div className="card">
       <div className="face face1">
         <div className="content">
      <img src={got}/>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> <h5>GOT</h5>Web application using ReactJs and a Game of Thrones API with all the characters and houses from the show. Also with a function that shows the characters in chronological order.</p>
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
        </div>
        <div>
        <div className="card">
       <div className="face face1">
         <div className="content">
         <img src={shopeame}/>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p><h5>Shopeame</h5>Web application using AngularJs and an external API for all the products. A store where you can add and delete products</p>
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
        </div>
        {/* </div> */}
      </ReactSimplyCarousel>
      
    </div>
  );
}

export default ReactSimplyCarouselExample;