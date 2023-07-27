import '../Assets/CSS/Home.css';
import $ from 'jquery';

function Home() {

    $(document).ready(function () {
        const themeSwitch = document.querySelector("#toggle-theme");
        themeSwitch.addEventListener("change", () => {
          document.body.classList.toggle("dark-theme");
        });
      
        $("#toggle-theme").on("click", function () {
          $(this).parent().toggleClass("checked");
        });
      });      


    return (
        <div>
            <div class="light-theme">
                <div class="banner d-flex align-items-center">
                    <div class="banner-left">
                        <label class="switch d-flex">
                            <input id="toggle-theme" type="checkbox"/>
                                <span class="light-txt">light</span>
                                <span class="dark-txt">dark</span>
                        </label>
                        <h1>Transparent <br/> Modern <br/> Property</h1>
                            <div class="inner-desc">
                                <p>we are here to make your journey to a new home, simple and memorable. So we decided to bring you a
                                    platform which allows you to browse through millions of property listings across 900+ cities in
                                    India.
                                    Now buying and renting comes with the freedom of ease and comfort. </p>
                                <form>
                                    <div class="form-group d-flex flex-wrap">
                                        <input type="text" class="form-control" id="exampleInputtext1" placeholder="Enter zipcode to search properties here"/>
                                            <button type="submit" class="black-btn">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div class="social-icons d-flex align-items-center">
                                <ul class="d-flex">
                                    <li><a href="#" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                                <span>Follow us</span>
                            </div>
                        </div>
                            <div class="banner-right d-flex">
                                <div class="family">
                                    <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="img" class="img-fluid"/>
                                        <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="img" class="img-fluid"/>
                                            <div class="banner-right-inner">
                                                <h2>42k+</h2>
                                                <span>satisfied <br/> family</span>
                                                <img src="https://yudiz.com/codepen/real-estate/heart-icon.svg" alt="heart-icon" class="img-fluid"/>
                                            </div>
                                            <img src="https://yudiz.com/codepen/real-estate/property-img-three.png" alt="img" class="img-fluid"/>
                                                <img src="https://yudiz.com/codepen/real-estate/property-img-four.png" alt="img" class="img-fluid"/>
                                                </div>
                                                <div class="sale">
                                                    <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="img" class="img-fluid"/>
                                                        <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="img" class="img-fluid"/>
                                                            <div class="banner-right-inner">
                                                                <h2>30k+</h2>
                                                                <span>Available <br/> Unit for Sale</span>
                                                                <img src="https://yudiz.com/codepen/real-estate/unit-icon.svg" alt="unit-icon" class="img-fluid"/>
                                                            </div>
                                                            <img src="https://yudiz.com/codepen/real-estate/property-img-seven.png" alt="img" class="img-fluid"/>
                                                                <img src="https://yudiz.com/codepen/real-estate/property-img-eight.png" alt="img" class="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                </div>

                                            </div>
                                            )
}
                                            export default Home;