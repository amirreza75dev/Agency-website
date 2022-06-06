import './services.css'
const Services = () => {
    return ( 
        <>
        <div className="our-services" id="services"><h1>Our services</h1></div>
        <div className="services">
            <div className="servises-container">
                <div className="first-col">
                    <img src="/svg/svg3.svg" alt=""/>
                    <h1>Reduce Expenses</h1>
                    <p>We hep reduce your fees and increase your overall revenue</p>
                </div>
                <div className="second-col">
                    <img src="/svg/svg4.svg" alt=""/>
                    <h1>Virtual Offices</h1>
                    <p>You can accsess our platform  online anywhere in the world</p>
                </div>
                <div className="third-col">
                <img src="/svg/svg5.svg" alt=""/>
                    <h1>Premium Benefits</h1>
                    <p>Unlock our special membership cart that returns 5% cash back.</p>
                </div>

            </div>

        </div>

        </>
     );
}
 
export default Services;