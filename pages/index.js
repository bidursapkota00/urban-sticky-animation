import React, { useEffect, useRef } from "react";
import image from "./image.png";
import centralheating from "./centralheating.png";
import gas from "./gas.png";
import smarthome from "./smarthome.png";
import water from "./water.png";
import Image from "next/image";

const Home = () => {
  const firstSvgImage = (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.05" clip-path="url(#clip0)">
        <path
          d="M61.9162 72.465C55.1157 76.3913 47.034 77.4552 39.449 75.4228C31.864 73.3904 25.397 68.4281 21.4707 61.6276C17.5444 54.8271 16.4804 46.7454 18.5128 39.1604C20.5452 31.5754 25.5075 25.1084 32.308 21.1821C39.1086 17.2558 47.1903 16.1918 54.7753 18.2242C62.3603 20.2566 68.8273 25.2189 72.7536 32.0194C76.6799 38.82 77.7438 46.9017 75.7114 54.4867C73.679 62.0717 68.7168 68.5387 61.9162 72.465ZM64.0311 76.128C71.8031 71.6408 77.4743 64.25 79.7971 55.5814C82.1198 46.9128 80.9038 37.6766 76.4166 29.9046C71.9294 22.1325 64.5386 16.4613 55.87 14.1386C47.2015 11.8159 37.9652 13.0318 30.1932 17.519C22.4211 22.0062 16.7499 29.397 14.4272 38.0656C12.1045 46.7342 13.3204 55.9705 17.8076 63.7425C22.2948 71.5145 29.6857 77.1857 38.3542 79.5084C47.0228 81.8312 56.2591 80.6152 64.0311 76.128Z"
          fill="black"
          fillOpacity="0.5"
        />
        <path
          d="M36.8185 60.42C37.0989 59.9343 37.5608 59.5799 38.1026 59.4347C38.6444 59.2895 39.2216 59.3655 39.7074 59.6459C41.9582 60.9464 44.5118 61.6309 47.1113 61.6306C49.7108 61.6303 52.2643 60.9451 54.5148 59.644C56.7668 58.3456 58.6369 56.4768 59.937 54.2257C61.237 51.9747 61.921 49.4208 61.9202 46.8214C61.9183 46.5424 61.9717 46.2659 62.0771 46.0077C62.1826 45.7495 62.3381 45.5147 62.5346 45.3169C62.7312 45.119 62.965 44.962 63.2225 44.8548C63.48 44.7476 63.7561 44.6925 64.035 44.6925C64.3139 44.6925 64.5901 44.7477 64.8476 44.8548C65.1051 44.962 65.3388 45.119 65.5354 45.3169C65.732 45.5148 65.8874 45.7496 65.9929 46.0078C66.0983 46.266 66.1517 46.5425 66.1498 46.8214C66.1507 50.1633 65.2712 53.4466 63.6 56.3406C61.9287 59.2346 59.5246 61.6374 56.6297 63.3071C53.7362 64.9793 50.4533 65.86 47.1114 65.8603C43.7694 65.8606 40.4864 64.9806 37.5926 63.3089C37.1069 63.0285 36.7524 62.5666 36.6072 62.0248C36.4621 61.483 36.538 60.9058 36.8185 60.42ZM40.2774 43.4435C42.0285 46.4766 41.8086 49.8856 39.7866 51.053C37.7646 52.2204 34.7024 50.7063 32.9512 47.6733C31.2001 44.6403 31.42 41.2312 33.442 40.0638C35.464 38.8964 38.5263 40.4105 40.2774 43.4435ZM54.9296 34.9841C56.6807 38.0171 56.4609 41.4261 54.4389 42.5935C52.4169 43.7609 49.3546 42.2468 47.6035 39.2138C45.8524 36.1808 46.0722 32.7718 48.0943 31.6043C50.1163 30.4369 53.1785 31.9511 54.9296 34.9841Z"
          fill="black"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.888672 34.438) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <>
      <div className="gap"></div>
      <section id="first-time" className="first__section">
        <div className="first__section__container">
          <div className="row1">
            <div className="central__image">
              <Image src={centralheating} width={500} height={500} />
              <div className="first__title text-primary">Central Heating</div>
            </div>
            <div className="first__time__first">
              <div className="svg__img_container">
                <div className="first__svg__image">{firstSvgImage}</div>
                <div className="first__first__image">
                  <Image src={image} width={1000} height={200} />
                </div>
              </div>
              <div className="first__headings">
                <div>FIRST TIME</div>
                <div>IN NEPAL</div>
              </div>
              <p className="first__description">
                We are revolutionizing the next generation housing experience by
                bringing you European standard safety and comfort for the very
                first time in Nepal!
              </p>
            </div>
            <div className="smart__image">
              <Image src={smarthome} width={500} height={500} />
              <div className="first__title text-primary">Smart House</div>
            </div>
          </div>
          <div className="row2-container">
            <div className="row2">
              <div className="gas__image">
                <Image src={gas} width={500} height={500} />
                <div className="first__title text-primary">
                  Smart Gas Pipeline
                </div>
              </div>
              <div className="contact_wrapper">
                <div className="first__contacts">
                  <div className="wave__circle__outer">
                    <div className="wave__circle__inner"></div>
                  </div>
                  <div className="first__contact__details">
                    <div className="text-primary first__contact--d">
                      For Your Assistance{" "}
                    </div>
                    <div className="text-white first__contact--f">
                      9800123456
                    </div>
                  </div>
                </div>
              </div>
              <div className="water__image">
                <Image src={water} width={500} height={500} />
                <div className="first__title text-primary">
                  24*7 Water Supply
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gap"></div>
    </>
  );
};

export default Home;
