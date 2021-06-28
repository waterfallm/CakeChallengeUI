import React, { useState } from "react";
import { useParams } from "react-router-dom";

import qryCakesid from '../queries/useCakesid';

import Cake from "../components/Cake";
// import Banner from "../components/Banner";

const CakeScreen: React.FC = () => {

  const { id } = useParams<{ id: string }>()

  let { data: activecake } = qryCakesid(String(id));

  return (


    <>
      {/* {
        activecake &&
        <div>
          {activecake.name}
          {activecake.comment}
          {activecake.imageUrl}
        </div>

      } */}
      <Cake cake={activecake} />

    </>


  )
}

export default CakeScreen;
