import React from 'react';
import "./HomeExtra.css"
const HomeExtra = () => {
    return (
        <section className="container-fluid ">
            <section className="container mt-5 mb-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="font-bold text-2xl">Featured Bikes 2023</h1>
                        <p className="bike font-bold text-xl p-2 m-2">Best Bike Collection</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 se-1">
                        <img width="288px" src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/color/blue60ed6d501c6e1.webp" alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <img width="288px" src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/color/blue60ed6d501c6e1.webp" alt=""/>
                    </div>
                    <div className="col-lg-4 se-1">
                        <img width="288px" src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/color/blue60ed6d501c6e1.webp" alt=""/>
                    </div>
                </div>
            </section>
            <section className="conatiner mt-5 ">
                <div className="happy fw-bold">
                    
                    <h1 className="fs-1">Happy <span className="colour"> Clients says</span></h1>
                        
                </div>    
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
                    <div className="col">
                    <div className="card w-96 bg-base-100 shadow-xl px-10 pt-10">
                    <figure class="px-10 pt-10 avatar">
                        <img src="https://i.postimg.cc/HW3w47yp/user-1.png" alt="Shoes" class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                    </figure>
                        <div className="card-body">

                            <h5 className="card-title"></h5>
                            <p className="card-text">Slate helps you see how many more days you need
                            to work to reach your financial 
                            goal for the month and year.</p>
                            <p><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="far fa-star"></i></p>
                            <a href="">Regina Miles</a>
                            <h5 className="bank">Banker</h5>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card w-96 bg-base-100 shadow-xl px-10 pt-10">
                    <figure class="px-10 pt-10 avatar">
                        <img src="https://i.postimg.cc/DZfxzGM8/user-2.png" alt="Shoes" class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                    </figure>
                        <div className="card-body">

                            <h5 className="card-title"></h5>
                            <p className="card-text">Slate helps you see how many more days you need
                            to work to reach your financial 
                            goal for the month and year.</p>
                            <p><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="far fa-star"></i></p>
                            <a href="">Regina Miles</a>
                            <h5 className="bank">Banker</h5>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card w-96 bg-base-100 shadow-xl px-10 pt-10">
                    <figure class="px-14 pt-16 avatar">
                        <img src="https://stylesatlife.com/wp-content/uploads/2020/12/Hairstyles-for-Round-Face-Women-27.jpg.webp" alt="Shoes" class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                    </figure>
                        <div className="card-body">

                            <h5 className="card-title"></h5>
                            <p className="card-text">Slate helps you see how many more days you need
                            to work to reach your financial 
                            goal for the month and year.</p>
                            <p><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="far fa-star"></i></p>
                            <a href="">Regina Miles</a>
                            <h5 className="bank">Banker</h5>
                        </div>
                    </div>
                    </div>
                    
                </div>
            
            </section>
            <section className="container mt-5 mb-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                    <div className="fw-bold happy fs-1 mb-4">Our Service <span className="colour">Specialist</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img width="388px" class='round' src="https://previews.123rf.com/images/jackf/jackf1711/jackf171102221/89268522-motorcycle-repair-specialist-considered-diagnostic-value-of-the-scooter-in-the-garage.jpg" alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <img width="400px " src="https://motorcycles-for-sale.biz/img/motorcyclephoto/full/motorbike16025.jpg" alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <img width="350px" src="https://shadycustoms.com/wp-content/uploads/2020/06/Aaron-Huber-Custom-Motorcycle-Chopper-1024x768.jpg" alt=""/>
                    </div>
                </div>
            </section>
        
            <section className="Container new-head">
                <div className="fw-bold happy fs-1">Frequently Asked <span className="colour">Questions</span></div>
                <div className="row align-items-center">
                    <div className="col-lg-7 faq-img">
                        <img src="https://i.postimg.cc/1td9sHdm/faq.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What are the most important things I should know about riding a bike?
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Safety First! Always obey the rules of the road. Obey all traffic 
                                    signals, signs, and laws. Get in the mindset of “driving” your 
                                    bike—not just “riding” your bike. This will help you be a more 
                                    focused and legally compliant bike rider.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can I tell if my helmet is old and I need a new one?
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Safety First! Always obey the rules of the road. Obey all traffic 
                                        signals, signs, and laws. Get in the mindset of “driving” your 
                                        bike—not just “riding” your bike. This will help you be a more 
                                        focused and legally compliant bike rider.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How can I tell if my helmet is old and I need a new one?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Safety First! Always obey the rules of the road. Obey all traffic 
                                        signals, signs, and laws. Get in the mindset of “driving” your 
                                        bike—not just “riding” your bike. This will help you be a more 
                                        focused and legally compliant bike rider.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What rules should I follow when riding my bike?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Safety First! Always obey the rules of the road. Obey all traffic 
                                        signals, signs, and laws. Get in the mindset of “driving” your 
                                        bike—not just “riding” your bike. This will help you be a more 
                                        focused and legally compliant bike rider.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="container mt-5 mb-4">
                <h1 className="font-bold text-4xl happy">Most <span className="colour">Popular</span> Bikes</h1>
                <div className="row">
                    <div className="col-lg-6 rounded float-start">
                        <h2 className='text-2xl' id="cbr">Honda CBR-150</h2>
                        <img width="500px" src="https://i.postimg.cc/T3ThkkMF/honda-cbr-150-price.jpg" alt="" className="img-fluid"/>
                        
                    </div>
                    <div className="col-lg-6 rounded float-end">
                        <h2 className='text-2xl' id="ex-motion">Honda Ex-Motion</h2>
                        <img width="500px" src="https://i.postimg.cc/L6tnBc7j/Honda-CB150-R-Ex-Motion-Grey.jpg" alt="" className="img-fluid"/>
                        
                    </div>
                    
                </div>
                
            </section>
            
            <section className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-lg-6">
                        <h1  className="colour text-2xl mb-3 font-bold">Newly Introduced of 2023</h1>
                        <p className="text-warp">The 2021 Honda Gold Wing Tour is available in two variants, one with manual transmission, priced at ₹ 37.20 lakh (Ex-showroom), and the top-spec DCT with airbag variant, priced at ₹ 39.16 lakh (Ex-showroom). The manual transmission variant is available in a Pearl Glare White colour option, while the DCT variant is available in Gunmetal Black Metallic & Matt Morion Black colour option.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://i.postimg.cc/Y2fHXtr2/2021-honda-gold-wing-tour-dct-black-9edb.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default HomeExtra;