import React from "react";
import "./Home.css";

import Input from "./Input";
import MidSection from "./MidSection";
import FaqComp from "./FaqComp";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="section1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/8ed3a98a-e2c2-488d-9583-93634199485d/IN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
          className="section1_bgimg"
        />
        <div className="topbar">
          <div className="topbar_logo">
            <svg height="400px" width="600px" fill="red">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              />
            </svg>
          </div>
          <div className="topbar_buttons">
            <select name="lang" className="lang">
              <option value="english">English</option>
              <option value="hindhi">हिन्दी</option>
            </select>
            <Link to="/signin">
              <button className="topbar_button_signin">Sign in</button>
            </Link>
          </div>
        </div>
        <div className="section1_body">
          <h1 style={{ fontSize: "60px", lineHeight: "1.1" }}>
            Unlimited movies, TV <br /> shows and more.
          </h1>
          <p style={{ fontSize: "30px" }}>Watch anywhere. Cancel anytime.</p>
          <p style={{ fontSize: "20px" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="S1_body_form">
            <Input
              placeholder="Email Address"
              label="Email Address"
              name="email"
              value=""
            />
            <button className="S1_body_btn">
              Get Started <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <MidSection
        title="Enjoy on your TV."
        content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        position="l"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <MidSection
        title="Download your shows to watch offline."
        content="Save your favourites easily and always have something to watch."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        position="r"
      />
      <MidSection
        title="Watch everywhere."
        content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        position="l"
        diffimg
      />
      <MidSection
        title="Create profiles for kids."
        content="Send kids on adventures with their favourite characters in a space made just for them—free with your membership."
        img="https://occ-0-2041-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
        position="r"
      />
      <div className="FAQ_Component">
        <h1>Frequently Asked Questions</h1>
        <FaqComp
          title="What is Netflix?"
          content1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
          content2="You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        />
        <FaqComp
          title="How much does Netflix cost?"
          content1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."
        />
        <FaqComp
          title="Where can i watch?"
          content1="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          content2="You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <FaqComp
          title="How do i cancel?"
          content1="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <FaqComp
          title="What can i watch on Netflix?"
          content1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <FaqComp
          title="Is Netflix good for kids?"
          content1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
          content2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />

        <p style={{ textAlign: "center" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="S1_body_form">
          <Input
            placeholder="Email Address"
            label="Email Address"
            name="email"
            value=""
          />
          <button className="S1_body_btn">
            Get Started <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <br />
        <br />
      </div>

      <Footer />
    </>
  );
}
export default Home;
