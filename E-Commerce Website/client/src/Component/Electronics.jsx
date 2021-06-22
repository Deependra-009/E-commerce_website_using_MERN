import React from 'react';
import Detailsbox from './Detailsbox';
import { NavLink } from 'react-router-dom';
import ReactSPCardsSlider from 'react-sp-cards-slider';
import {Gaming,PC,Headphone,Cameracards,Laptopcards} from '../Data/Electronicsheading';


const Mobiles = () => {
    return (
        <>
            <Detailsbox></Detailsbox>

            <div className="laptoppage">
            {/* ----------------- Laptop ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Laptop</h1>
                        <NavLink to="/laptop"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Laptopcards} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <a style={{ display: "block", boxSizing: "border-box" }}>
                                        <div className="imgbox1">
                                            <div className="imgbox2"><img src={image} alt={name} className="sp-preview" /></div>
                                            <div className="card_info">{name}</div>

                                        </div>
                                    </a>
                                );
                            }}
                            itemWidth={200}
                            itemsPadding={20}
                            mainWidthLimit={1136}
                            breakpoints={{
                                lg: 1350,
                            }}
                        />
                    </div>
                </div>
          
            {/* ----------------- Headphone ------------------------------------ */}
            <div className="cardcategory">
                    <div className="titleview">
                        <h1>Headphone</h1>
                        <NavLink to="/headphone"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Headphone} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <a style={{ display: "block", boxSizing: "border-box" }}>
                                        <div className="imgbox1">
                                            <div className="imgbox2"><img src={image} alt={name} className="sp-preview" /></div>
                                            <div className="card_info">{name}</div>

                                        </div>
                                    </a>
                                );
                            }}
                            itemWidth={200}
                            itemsPadding={20}
                            mainWidthLimit={1136}
                            breakpoints={{
                                lg: 1350,
                            }}
                        />
                    </div>
                </div>
            {/* ----------------- Camera ------------------------------------ */}
            <div className="cardcategory">
                    <div className="titleview">
                        <h1>Camera</h1>
                        <NavLink to="/camera"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Cameracards} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <a style={{ display: "block", boxSizing: "border-box" }}>
                                        <div className="imgbox1">
                                            <div className="imgbox2"><img src={image} alt={name} className="sp-preview" /></div>
                                            <div className="card_info">{name}</div>

                                        </div>
                                    </a>
                                );
                            }}
                            itemWidth={200}
                            itemsPadding={20}
                            mainWidthLimit={1136}
                            breakpoints={{
                                lg: 1350,
                            }}
                        />
                    </div>
                </div>
                {/* ----------------- Gaming ------------------------------------ */}
            <div className="cardcategory">
                    <div className="titleview">
                        <h1>Gaming</h1>
                        <NavLink to="/gaming"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Gaming} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <a style={{ display: "block", boxSizing: "border-box" }}>
                                        <div className="imgbox1">
                                            <div className="imgbox2"><img src={image} alt={name} className="sp-preview" /></div>
                                            <div className="card_info">{name}</div>

                                        </div>
                                    </a>
                                );
                            }}
                            itemWidth={200}
                            itemsPadding={20}
                            mainWidthLimit={1136}
                            breakpoints={{
                                lg: 1350,
                            }}
                        />
                    </div>
                </div>
                {/* ----------------- PC ------------------------------------ */}
            <div className="cardcategory">
                    <div className="titleview">
                        <h1>Computer</h1>
                        <NavLink to="/computer"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={PC} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <a style={{ display: "block", boxSizing: "border-box" }}>
                                        <div className="imgbox1">
                                            <div className="imgbox2"><img src={image} alt={name} className="sp-preview" /></div>
                                            <div className="card_info">{name}</div>

                                        </div>
                                    </a>
                                );
                            }}
                            itemWidth={200}
                            itemsPadding={20}
                            mainWidthLimit={1136}
                            breakpoints={{
                                lg: 1350,
                            }}
                        />
                    </div>
                </div>

               </div>


        </>
    )
}

export default Mobiles;