import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston City', 'Worcester City', 'Springfield city', 'Lowell city', 'Cambridge city', 'New Bedford'],
                datasets:[{
                    label: 'Population',
                    data:[
                      617594,
                      181045,
                      153060,
                      106519,
                      105162,
                      95072
                    ],
                    backgroundColor: [
                      '#b71c1c',
                      '#880e4f',
                      '#01579b',
                      '#004d40',
                      '#33691e',
                      '#e65100'
                    ],
                    borderWidth:1,
                    borderColor: '#aeea00',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#76ff03'
                  }]
            }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className="container">
            {/* Bar Chart */}
             <div className="chart col s12 m12">
             <Bar
                data={this.state.chartData}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display:this.props.displayTitle,
                        text: 'Largest Cities in Massachussets',
                        fontSize:30
                    },
                   legend: {
                       display:this.props.displayLegend,
                       fontSize: 30
                   }
               }}
            />
             </div><br />
             {/* Pie Chart */}
             <div className="chart col s12 m12">
             <Pie
                data={this.state.chartData}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display:this.props.displayTitle,
                        text: 'Largest Cities in Massachussets',
                        fontSize:30
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position:'right'
                    }
              }}
            />
             </div><br />
             {/*Line Chart */}
             <div className="chart col s12 m12">
             <Line
                data={this.state.chartData}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display:this.props.displayTitle,
                        text: 'Largest Cities in Massachussets',
                        fontSize:30
                    },
              }}
            />
             </div>
             <br />
             <div className="row">
                <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
      </div>
            </div>
        )
    }
}

export default Chart;