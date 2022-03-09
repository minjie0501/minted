import { ArrowsClockwise, Heart, ShieldCheck, Truck } from 'phosphor-react'
import React from 'react'
import { Button } from '../Button'
import { Item } from "../../pages/items/[id]";

interface Props  {
    item: Item
};

export  function ItemDetails({item}: Props) {
  return (
    <div className="w-3/12 bg-white p-3 rounded-sm m-2 min-h-[700px]">
    <div>
      <h2 className="text-2xl font-medium px-1">€{item.price}</h2>
    </div>
    <div className="flex items-center">
      <div>
        <div className="bg-cyan-400 bg-opacity-40 rounded-full w-8 m-1 h-8 flex items-center justify-center">
          <ShieldCheck id="buyer-protection" className="text-white" size={20} />
        </div>
      </div>
      <div className="text-sm p-1">
        Our{" "}
        <span className="text-cyan-500 hover:underline cursor-pointer">
          <a href=""> Buyer Protection</a>{" "}
        </span>{" "}
        is added for a fee to every purchase made using the “Buy now” button. Buyer Protection includes our{" "}
        <span className="text-cyan-500 hover:underline cursor-pointer">
          <a href="">Refund Policy</a>
        </span>
        .
      </div>
    </div>
    <div className="text-xs flex items-center space-x-2 pl-4 border-gray-200 border-b pb-2">
      <div>
        <ArrowsClockwise size={14} />
      </div>
      <div>Swaps considered</div>
    </div>
    <div className="text-sm py-2 border-gray-200 border-b">
      <div>Buyer protection fee</div>
      <div>$0.70 + 5% of the item’s price</div>
    </div>
    <div>
      <div className="flex py-2 items-center justify-start border-gray-200 border-b">
        <div className="flex flex-grow items-center space-x-2">
          <div>
            <Truck size={12} />
          </div>
          <div>USPS</div>
        </div>
        <div className="">$0.99</div>
      </div>
    </div>
    <div className="flex text-sm py-2 border-gray-200 border-b space-x-1">
      <div className="flex-1 text-gray-500">
        <div>BRAND</div>
        <div>CONDITION</div>
        <div>COLOR</div>
        <div>LOCATION</div>
        <div>PAYMENT OPTIONS</div>
        <div>VIEWS</div>
        <div>INTERESTED</div>   
        <div>UPLOADED</div>
      </div>
      <div className="flex-1">
        <div>{item.brand}</div>
        <div>{item.condition}</div>
        <div>....</div>
        <div>{item.sellerId?.address || "....."}</div>
        <div>BANK CARD</div>
        <div>18</div>
        <div>2 MEMBERS</div>
        <div>18 DAYS AGO</div>
      </div>
    </div>
    <div className="py-2 space-y-2">
        <div>
            <h2 className="text-base font-semibold ">{item.title}</h2>
        </div>
        <div className='min-h-[60px]'>{item.description}</div>
        <div className="flex flex-col space-y-2">
            <Button btnClass="bg-white border-cyan-500 border text-cyan-500 hover:bg-cyan-50 rounded py-1 px-4" value="Message seller"/>
            <Button btnClass="bg-cyan-500 border-cyan-500 border text-white hover:bg-opacity-70 rounded py-1 px-4" value="Buy now"/>
            <Button btnClass="bg-white border-gray-400 border text-gray-400 hover:bg-gray-50 rounded py-1 px-4" value="Add to favorites" icon={<Heart/>}/>
        </div>
    </div>
  </div>
  )
}