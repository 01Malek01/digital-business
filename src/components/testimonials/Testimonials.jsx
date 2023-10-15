import SlickSlider from './SlickSlider';
import './testimonials.css';
export default function Testimonials() {
  return (
    <>
      <div className="t-wrapper">
        <div className="container">
          <div className="t-container">
            <div className="t-head">
              <span className='tag'>Testimonials</span>
              <span className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, animi.</span>
              <span className='des'>Lorem ipsum dolor sit amet.</span>
            </div>



          </div>
          {/* slider */}
          <SlickSlider />
        </div>

      </div>
    </>
  )
}
