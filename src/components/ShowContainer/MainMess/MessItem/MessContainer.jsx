import React, { useEffect } from "react";
import MessCard from "./MessCard";
import { useDispatch, useSelector } from "react-redux";
import getMainMessData from "../../../../store/actions/MainMessDataAction";

function MessContainer() {
  const { MessProduct } = useSelector((state) => state.MainMessData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainMessData());
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-between py-10 gap-3 ">
      {MessProduct.map((item, index) => {
        return <MessCard key={index} item={item} />;
      })}
    </div>
  );
}

export default MessContainer;
