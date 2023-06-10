import React from "react";
import MenuCard from "./MenuCard";

import s2Burger from "../../../assests/image/s2-burger.png";
import doubleBurger from "../../../assests/image/s2-burger.png";
import preBurger from "../../../assests/image/s2-burger.png";

export default function Menu() {
  return (
    <div>
      <div className="col-md-6">
        <div className="s2-burger">
          <MenuCard
            img={s2Burger}
            text={`Try it today <br />
            <span> Most Popular Burger</span>`}
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="s2-double-burger pb-4">
          <MenuCard
            img={doubleBurger}
            text={`Try it today <br />
            <span>
              MORE FUN <br />
              MORE TEST
            </span>`}
          />
        </div>
        <div className="s2-pre-burger pb-4">
          <MenuCard
            img={preBurger}
            text={`Try it today <br />
            <span> FRESH & CHILI</span>`}
          />
        </div>
      </div>
    </div>
  );
}
