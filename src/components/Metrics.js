import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from './Chart';

const Metrics = (props) => {



     return(
          <div className='container-fluid'>
               <div className='row'>
                    <div className='col-4'>
                         <Chart />
                    </div>
               </div>
          </div>
     )
}

export default Metrics;