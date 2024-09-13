import './singlePage.scss'
import Slider from '../../components/slider/Slider';
import { singlePostData,userData } from '../../lib/dummydata';
import Map from '../../components/map/Map';

function SinglePage(){
    return (
        <div className='singlePage'>
            <div className='details'>
                <div className='wrapper'>
                    <Slider images={singlePostData.images} ></Slider>
                    <div className='info'>
                        <div className='top'>
                            <div className='post'>
                                <h1>{singlePostData.title}</h1>
                                <div className='address'>
                                    <img src='/pin.png'></img>
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className='price'>${singlePostData.price}</div>
                            </div>
                            <div className='user'>
                                <img src={userData.img} alt="" />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className='bottom'>{singlePostData.description}</div>
                    </div>

                </div>
            </div>
            <div className='features'>
                <div className='wrapper'>
                <h3 className="title">Location</h3>
                <div className='mapContainer'>

                <Map items={[singlePostData]}/>

                </div>

                <div className='buttons'>
                <button><img src="/chat.png" alt="" />Send a Message</button>
                <button><img src="/save.png" alt="" />Save the Place</button>
                </div>
                    

            </div>
            </div>
        </div>
    )
}

export default SinglePage;