import React, { useState, useEffect } from 'react';
import './_varible.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = ({ items }) => {
    const [item, set_item] = useState([]);
    const [index, set_index] = useState({ pre: 0, next: 4 });

    //Set new item
    const fun_set_item = () => {
        set_item(items.slice(index.pre, index.next));
    }

    //Run before render
    useEffect ((fun_set_item),[])

    // Function change slide
    const change_side_next = () => {
        let a = items.length;
        let e = index.next;
        if (a > 4) {
            if (e < a) {
                set_index({
                    pre: index.pre + 1,
                    next: index.next + 1,
                })
                fun_set_item();
            }
            else {
                set_index({
                    pre: 0,
                    next: 4
                })
                fun_set_item();
            }
        }
    }
    const change_side_pre = () => {
        let a = items.length;
        let e = index.pre;
        if (a > 4) {
            if (e > 0) {
                set_index({
                    pre: index.pre - 1,
                    next: index.next - 1,
                })
                fun_set_item();
            }
            else {
                set_index({
                    pre: a - 4,
                    next: a
                })
                fun_set_item();
            }
        }
    }

    return (
        <div className="relative flex flex-wrap items-center">
            {item.map((data, index) => (
                <div className="w-1/4 p-2" key={index}>
                    <div className="bg-gray-400 crop shadow ">
                        <img className="w-full" src={data} alt={data} />
                    </div>
                    {/* <button className="absolute p-2 bg-red-500 mx-auto">DEMO</button> */}
                </div>
            ))}
            <div className="absolute w-full">
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <button onClick={change_side_pre} className="text-3xl text-green-500" style={{ marginLeft: "-30px" }}>
                            <FontAwesomeIcon icon="arrow-circle-left"/>
                        </button>
                    </div>
                    <div className="w-1/2 text-right">
                        <button onClick={change_side_next} className="text-3xl text-green-500" style={{ marginRight: "-30px" }}>
                            <FontAwesomeIcon icon="arrow-circle-right"/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Carousel
