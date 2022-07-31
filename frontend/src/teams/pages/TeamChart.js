import React from 'react';
import ReactApexChart from "react-apexcharts";
import './Teams.css';

function TeamChart() {
    const series1 = [
      {
        name: "Boston Celtics",
        data: [56, 39, 41, 25, 40, 48, 53, 55, 49, 48, 36, 51],
      },
      {
        name: "Brooklyn Nets",
        data: [22, 49, 44, 38, 21, 20, 28, 42, 35, 48, 44, 42],
      },
      {
        name: "New York Knicks",
        data: [42, 36, 54, 37, 17, 32, 31, 29, 17, 21, 41, 37],
      },
      {
        name: "Philadelphia 76ers",
        data: [41, 35, 34, 19, 18, 10, 28, 52, 51, 43, 49, 51],
      },
      {
        name: "Toronto Raptors",
        data: [22, 23, 34, 48, 49, 56, 51, 59, 58, 53, 27, 48],
      },
    ];
    const options1 = {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
            "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022",
        ],
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
      },
    };

    const series2 = [
        {
          name: "Chicago Bulls",
          data: [62, 50, 45, 48, 50, 42, 41, 27, 22, 22, 31, 46],
        },
        {
          name: "Milwaukee Bucks",
          data: [35, 31, 38, 15, 41, 33, 42, 44, 60, 56, 46, 51],
        },
        {
          name: "Cleveland Cavaliers",
          data: [19, 21, 24, 33, 53, 57, 51, 50, 19, 19, 22, 44],
        },
        {
          name: "Detroit Pistons",
          data: [30, 25, 29, 32, 44, 37, 39, 41, 20, 20, 20, 23],
        },
        {
          name: "Indiana Pacers",
          data: [37, 42, 49, 56, 38, 45, 42, 48, 48, 45, 34, 25],
        },
    ];
    const options2 = {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
              "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022",
          ],
        },
        tooltip: {
          x: {
            format: "yyyy",
          },
        },
    };

    const series3 = [
    {
        name: "Atlanta Hawks",
        data: [44, 40, 44, 38, 60, 48, 43, 24, 29, 20, 41, 43],
    },
    {
        name: "Charlotte Hornets",
        data: [34, 7, 21, 43, 33, 48, 36, 36, 39, 23, 33, 43],
    },
    {
        name: "Miami Heat",
        data: [58, 46, 66, 54, 37, 48, 41, 44, 39, 44, 40, 53],
    },
    {
        name: "Orlando Magic",
        data: [52, 37, 20, 23, 25, 35, 29, 25, 42, 33, 21, 22],
    },
    {
        name: "Washington Wizards",
        data: [23, 20, 29, 44, 46, 41, 49, 43, 32, 25, 34, 35],
    },
    ];
    const options3 = {
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022",
        ],
    },
    tooltip: {
        x: {
        format: "yyyy",
        },
    },
    };

    const series4 = [
        {
            name: "Denver Nuggets",
            data: [50, 38, 57, 36, 30, 33, 40, 46, 54, 46, 47, 48],
        },
        {
            name: "Minnesota Timberwolves",
            data: [17, 26, 31, 40, 16, 29, 31, 47, 36, 19, 23, 46],
        },
        {
            name: "Oklahoma City Thunder",
            data: [55, 47, 60, 59, 45, 55, 47, 48, 49, 44, 22, 24],
        },
        {
            name: "Portland Trail Blazers",
            data: [48, 28, 33, 54, 51, 44, 41, 49, 53, 35, 45, 27],
        },
        {
            name: "Utah Jazz",
            data: [39, 36, 43, 25, 38, 40, 51, 48, 50, 44, 52, 49],
        },
    ];
    const options4 = {
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022",
        ],
    },
    tooltip: {
        x: {
        format: "yyyy",
        },
    },
    };
    
    const series5 = [
        {
            name: "Golden State Warriors",
            data: [36, 23, 47, 25, 51, 67, 73, 67, 57, 15, 39, 53],
        },
        {
            name: "Los Angeles Clippers",
            data: [32, 40, 56, 57, 56, 53, 51, 42, 48, 49, 47, 42],
        },
        {
            name: "Los Angeles Lakers",
            data: [57, 41, 45, 27, 21, 17, 26, 35, 37, 52, 42, 33],
        },
        {
            name: "Phoenix Suns",
            data: [40, 33, 25, 48, 39, 23, 24, 21, 19, 34, 51, 64],
        },
        {
            name: "Sacramento Kings",
            data: [24, 22, 28, 28, 29, 33, 32, 27, 39, 31, 31, 30],
        },
    ];
    const options5 = {
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022",
        ],
    },
    tooltip: {
        x: {
        format: "yyyy",
        },
    },
    };

    const series6 = [
        {
            name: "Dallas Mavericks",
            data: [57, 36, 41, 49, 50, 42, 33, 24, 33, 43, 42, 52],
        },
        {
            name: "Houston Rockets",
            data: [43, 34, 45, 56, 54, 41, 55, 65, 53, 44, 17, 20],
        },
        {
            name: "Memphis Grizzlies",
            data: [46, 41, 56, 50, 55, 42, 43, 22, 33, 34, 38, 56],
        },
        {
            name: "New Orleans Pelicans",
            data: [46, 21, 27, 34, 45, 30, 34, 48, 33, 30, 31, 36],
        },
        {
            name: "San Antonio Spurs",
            data: [61, 50, 58, 62, 55, 67, 61, 47, 48, 32, 33, 34],
        },
    ];
    const options6 = {
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022",
        ],
    },
    tooltip: {
        x: {
        format: "yyyy",
        },
    },
    };
  
    return (
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <br />
        <h2>NBA East Atlantic</h2>
        <br />
        <ReactApexChart
          options={options1}
          series={series1}
          type="area"
          height={350}
          width={600}
        />
        <br />
        <h2>NBA East Central</h2>
        <br />
        <ReactApexChart
          options={options2}
          series={series2}
          type="area"
          height={350}
          width={600}
        />
        <br />
        <h2>NBA East Southeast</h2>
        <br />
        <ReactApexChart
          options={options3}
          series={series3}
          type="area"
          height={350}
          width={600}
        />
        <br />
        <h2>NBA West Northwest</h2>
        <br />
        <ReactApexChart
          options={options4}
          series={series4}
          type="area"
          height={350}
          width={600}
        />
        <br />
        <h2>NBA West Pacific</h2>
        <br />
        <ReactApexChart
          options={options5}
          series={series5}
          type="area"
          height={350}
          width={600}
        />
        <br />
        <h2>NBA West Southwest</h2>
        <br />
        <ReactApexChart
          options={options6}
          series={series6}
          type="area"
          height={350}
          width={600}
        />
        <br />
        

      </div>
    );
  }
  
// const TeamChart = () => {
//     return (
//         <div className="TeamChart" >
//             <div className="center" >
//                 <h1>Team Chart</h1>
                
//             </div>
           
//         </div>
//     )
// };

export default TeamChart;