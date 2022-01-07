import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const Chart = (props) => {

     return (
          <div className='container-fluid'>
               <div className='row'>
                    <div className='col-4'>
                         <canvas>

                         </canvas>
                    </div>
               </div>
          </div>
     )
}

export default Chart;