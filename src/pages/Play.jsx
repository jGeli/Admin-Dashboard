import React from "react";
import "../styles/fighting.css";

import cockData from "../assets/dummy-data/cock-fighting.js";
import CockItem from "../components/UI/CockItem";

const Play = () => {
  return (
    <div className="settings">
      <div className="">

        <div data-v-25edb08a="" class="row ma-0 chan-cont bg-danger">
          <div data-v-25edb08a="" class="text-center col col-4">
            <h5 data-v-25edb08a="" class="body-2px-2">
              <span data-v-25edb08a="" class="text-uppercase font-weight-bold">
                Closed
              </span>
            </h5>
          </div>
          
          <div data-v-25edb08a="" class="button-slanted text-center col col-4 ">
            <span data-v-25edb08a="" class="button-slanted content text-center col col-4">
                <span class="button-slanted-content">
                  <p class="mb-0 logo-text-top" className="logo-text1">ULTIMATE</p>
                  <p class="mb-0 logo-text-bot" className="logo-text2">FIGHTING COCK</p>
                </span>
            </span>
          </div>
          
          <div data-v-25edb08a="" class="col col-4">
            <h5 class="body-2 text-center font-weight-bold">
              <span>
                FIGHT #299
              </span>
            </h5>
            
            </div>
          </div>


      </div>
    </div>
  );
};

export default Play;
