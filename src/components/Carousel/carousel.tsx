import React, { useState, useEffect } from "react";
import "./_varible.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

interface CarouselProps {
  items: any;
}
const Carousel = (props: CarouselProps) => {
  const { items } = props;
  const [item, set_item] = useState([]);
  const [index, set_index] = useState({ pre: 0, next: 4 });

  //Set new item
  const fun_set_item = () => {
    set_item(items.slice(index.pre, index.next));
  };

  //Run before render
  useEffect(fun_set_item, [fun_set_item]);

  // Function change slide
  const change_side_next = () => {
    const a = items.length;
    const e = index.next;
    if (a > 4) {
      if (e < a) {
        set_index({
          pre: index.pre + 1,
          next: index.next + 1,
        });
        fun_set_item();
      } else {
        set_index({
          pre: 0,
          next: 4,
        });
        fun_set_item();
      }
    }
  };

  // button change pre and next function
  const change_side_pre = () => {
    const a = items.length;
    const e = index.pre;
    if (a > 4) {
      if (e > 0) {
        set_index({
          pre: index.pre - 1,
          next: index.next - 1,
        });
        fun_set_item();
      } else {
        set_index({
          pre: a - 4,
          next: a,
        });
        fun_set_item();
      }
    }
  };

  // action for drag animation
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useDrag(({ down, delta }) => {
    set({ xy: down ? delta : [0, 0] });
    setTimeout(() => {
      if (delta[0] > 300) {
        change_side_pre();
      }
      if (delta[0] > -300) {
        change_side_next();
      }
    }, 200);
    // console.log(index);
  });

  // length height image to add aniamtion sroll image to botton
  // const sroll_image_to_bottom = (index) => {
    // setTimeout(() => {
    //     // let orginal_height_img = document.querySelector("#id" + index)
    //     // let length_height_img = orginal_height_img.naturalHeight;
    //     let final_height_img = 150;
    //     var css = `.crop:hover img{ margin-top: -${final_height_img}px; }`
    //     var style = document.createElement('style');
    //     if (style.styleSheet) {
    //         style.styleSheet.cssText = css;
    //     } else {
    //         style.appendChild(document.createTextNode(css));
    //     }
    //     document.getElementById("style" + index).appendChild(style);
    // }, 1000);
  // };
  return (
    <div className="relative">
      <animated.div
        {...bind()}
        style={{ transform: xy.interpolate((x) => `translate3D(${x}px,0, 0)`) }}
      >
        <div className="flex flex-wrap items-center">
          {item.map((data, index) => (
            <div className="w-1/4 p-2 flex" key={index}>
              <div
                className="bg-gray-400 crop shadow md:h-64 sm:h-32 xs:h-24"
                id={"style" + index}
              >
                <img
                  className="w-full"
                  src={data}
                  alt={data}
                  id={"id" + index}
                />
              </div>
            </div>
          ))}
        </div>
      </animated.div>
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-1/2 text-right pr-2">
            <button
              onClick={change_side_pre}
              className="text-3xl text-gray-500"
            >
              <FontAwesomeIcon icon="chevron-circle-left" />
            </button>
          </div>
          <div className="w-1/2 pl-2">
            <button
              onClick={change_side_next}
              className="text-3xl text-gray-500"
            >
              <FontAwesomeIcon icon="chevron-circle-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
