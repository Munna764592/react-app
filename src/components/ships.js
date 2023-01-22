import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import img1 from '../image/pic1.jpg';
import img2 from '../image/pic2.jpg'
import img3 from '../image/pic3.jpg'
import img4 from '../image/pic4.jpg'
import img5 from '../image/pic5.jpg'
import img6 from '../image/rocket.png'
import img7 from '../image/rocket2.png'

export default function Ships() {
    // search filter
    const [searchTitle, setSearchTitle] = useState('');
    const [posts, setPosts] = useState([]);

    const [openModel, setOpenModel] = useState(false);

    const [modeldata, setModeldata] = useState({
        ship_id: '',
        image: '',
        ship_name: '',
        ship_type: '',
        ship_port: '',
        url: ''
    })
    const showDetails = (ship_id) => {

        fetch(`https://api.spacexdata.com/v3/ships/${ship_id}`).then(response => response.json()).then(res => setModeldata(res));
    }

    const [pageCount, setPageCount] = useState(0);

    const [keys, newkeys] = useState(8);
    const [keysi, newkeysi] = useState(0);
    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
        newkeys(currentPage * 8);
        newkeysi(currentPage * 8 - 8);
    }

    const [user, setUser] = useState([]);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost/apidata_ships.php");
        setUser(result.data);
        setPosts(result.data);
        console.log(result.data);
        const total = result.data.length;

        setPageCount(Math.ceil(total / 8));
    };

    useEffect(() => {
        loadUsers();
    }, []);
    // {
    //     user.map((res) =>
    //         console.log(res)
    //     )
    // }
    return (
        <>
            <Swiper modules={[Navigation, EffectFade, Autoplay]}
                navigation
                effect=''
                speed={500}
                slidesPerView={1}
                loop
                autoplay={true
                }
                className='myswiper'
            >
                <SwiperSlide className='swiper-slide'>
                    <img src={img1} alt='image' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide2'>
                    <img src={img2} alt='image' />
                </SwiperSlide >
                <SwiperSlide className='swiper-slide3'>
                    <img src={img3} alt='image' />
                </SwiperSlide >
                <SwiperSlide className='swiper-slide'>
                    <img src={img4} alt='image' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={img5} alt='image' />
                </SwiperSlide>
                <div className='tagline'>Explore the Universe to the Moon and Back
                    <img src={img6} alt='image' /></div>
            </Swiper>
            <h1 className='headi'>Ships</h1>
            <div className='srh_filter'><input type='text' placeholder='Search ships...' onChange={(e) => setSearchTitle(e.target.value)} />
                {/* <button type='submit'>Search</button> */}
            </div>
            <div className='flex1'>

                {posts.filter((value) => {
                    if (searchTitle === "") {
                        return value;
                    } else if ((value.ship_name || value.ship_type
                    ).toLowerCase().includes(searchTitle.toLocaleLowerCase())) {
                        return value;
                    }
                })
                    .slice(keysi, keys).map(res =>
                        <div key={res.ship_id}>
                            <div className='pop_up_cards'>
                                <button type='submit' id='btnp' >click</button>
                                <label htmlFor='btnp' onClick={(e) => { setOpenModel(true); showDetails(res.ship_id) }}>
                                    <div className='card'>
                                        <img
                                            src={res.image}
                                            onError={({ currentTarget }) => {
                                                currentTarget.src = { img7 };
                                            }} alt="image"
                                        />
                                        <h3>{res.ship_name}</h3>
                                    </div>
                                </label>
                            </div>
                        </div>
                    )
                }

                {openModel && <div className='pop_up_cards_preview'>
                    <div className='preview_cards'>
                        <i className="fas fa-1x fa-times" onClick={() => { setOpenModel(false) }}></i>
                        <img src={modeldata.image} alt="image" />
                        <h3>{modeldata.ship_name}</h3>
                        {/* <p>
                            {modeldata.description}
                        </p> */}
                        <div><span className='descri'>HOME PORT:</span> {modeldata.home_port}</div>
                        <span className='margin_e'><span className='descri'>SHIP TYPE: </span>{modeldata.ship_type}</span>
                        <span><span className='descri'>DETAILS: </span><a href={modeldata.url} target='_blank'>{modeldata.ship_name}</a></span>
                    </div>
                </div>
                }
            </div>
            <ReactPaginate breakLabel={'...'} pageCount={pageCount} onPageChange={handlePageClick} containerClassName={'pagination justify-content-center py-3'} pageClassName={'page-item'} pageLinkClassName={'page-link'} previousClassName={'page-item'} previousLinkClassName={'page-link'} nextClassName={'page-item'} nextLinkClassName={'page-link'} activeClassName={'active'} />
            <div className='footer'><div>SPACEX © 2023</div> <span className='footer_link'><a href='#'>YOUTUBE</a></span><span className='footer_link'><a href='#'>INSTAGRAM</a></span><span className='footer_link'><a href='#'>PRIVACY POLICY</a></span><span className='footer_link'><a href='#'>TWITTER</a></span><span className='footer_link'><a href='#'>LINKEDIN</a></span><span className='footer_link'><a href='#'>FACEBOOK</a></span></div>
        </>
    );
}