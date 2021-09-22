import React, { Component } from 'react';
import statsService from '../services/statsService';
import statsHelpers from '../common/statsHelpers';


class Stats extends React.Component {

    state = {
        topSellers: [],
        topUniqueSellers: [],
        sellsFiveDays: []
    }

    async componentDidMount() {
        const { data: topSellers } = await statsService.getTopSellers();
        const { data: topUniqueSellers } = await statsService.getUniqueSellers()
        const { data: sellsFiveDays } = await statsService.getSells()
        this.setState({ topSellers: topSellers, topUniqueSellers: topUniqueSellers, sellsFiveDays: sellsFiveDays });
        console.log(this.state.sellsFiveDays);
    }


    getTodaySells() {
        let todayDate = statsHelpers.getTodayDate()
        let todaySells = this.state.sellsFiveDays.filter(sell => sell.date == todayDate)
        let todaysAllSales = todaySells.map(todaySell => todaySell.sell);
        let sum = todaysAllSales.reduce(function (a, b) {
            return a + b;
        }, 0);

        return sum
    }

    getYesterdaySells() {
        let todayDate = statsHelpers.getYesterdayDate()
        let todaySells = this.state.sellsFiveDays.filter(sell => sell.date == todayDate)
        let todaysAllSales = todaySells.map(todaySell => todaySell.sell);
        let sum = todaysAllSales.reduce(function (a, b) {
            return a + b;
        }, 0);

        return sum
    }

    lastTwoDays() {
        let todayDate = statsHelpers.lastTwoDate()
        let todaySells = this.state.sellsFiveDays.filter(sell => sell.date == todayDate)
        let todaysAllSales = todaySells.map(todaySell => todaySell.sell);
        let sum = todaysAllSales.reduce(function (a, b) {
            return a + b;
        }, 0);
        return sum
    }

    lastThreeDays() {
        let todayDate = statsHelpers.lastThreeDate()
        let todaySells = this.state.sellsFiveDays.filter(sell => sell.date == todayDate)
        let todaysAllSales = todaySells.map(todaySell => todaySell.sell);
        let sum = todaysAllSales.reduce(function (a, b) {
            return a + b;
        }, 0);

        return sum
    }

    lastFourDays() {
        let todayDate = statsHelpers.lastFourDate()
        let todaySells = this.state.sellsFiveDays.filter(sell => sell.date == todayDate)
        let todaysAllSales = todaySells.map(todaySell => todaySell.sell);
        let sum = todaysAllSales.reduce(function (a, b) {
            return a + b;
        }, 0);
        return sum
    }


    render() {
        let { topSellers, topUniqueSellers } = this.state;

        return (
            <div className="container shadow p-3 mb-5 bg-white rounded d-flex justify-content-center">
                <div className="col-3 row m-4">
                    <div className="card mt-5 shadow p-3 mb-5 bg-white rounded">
                        <div className="card-title text-center">
                            <h4 className="mt-4">top sellers</h4>
                        </div>
                        <hr />
                        {topSellers.map(item => {
                            return (
                                <div className="card-title m-1">
                                    <p>{item.title} <span className="float-right">times Sold: {item.timesSold}</span></p>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="col-3 row m-4 ">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-title text-center ">
                            <h4 className="mt-4">top unique sells</h4>
                        </div>
                        <hr />
                        {topUniqueSellers.map(item => {
                            return (
                                <div className="card-title m-1">
                                    <p>{item.title} <span className="float-right">times Sold: {item.timesUniqueSold}</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-3 row m-4">
                    <div className="card mt-5 shadow p-3 mb-5 bg-white rounded">
                        <div className="card-title text-center">
                            <h4 className="mt-4">sales in past 5 days</h4>
                        </div>
                        <hr />
                        <div className="card-title m-1">
                            <p>{statsHelpers.getTodayDate()} <span className="float-right">${this.getTodaySells()}</span> </p>
                        </div>
                        <div className="card-title m-1">
                            <p>{statsHelpers.getYesterdayDate()} <span className="float-right">${this.getYesterdaySells()}</span></p>
                        </div>
                        <div className="card-title m-1">
                            <p>{statsHelpers.lastTwoDate()} <span className="float-right">${this.lastTwoDays()}</span></p>                        </div>
                        <div className="card-title m-1">
                            <p>{statsHelpers.lastThreeDate()} <span className="float-right">${this.lastThreeDays()}</span></p>                        </div>
                        <div className="card-title m-1">
                            <p>{statsHelpers.lastFourDate()} <span className="float-right">${this.lastFourDays()}</span></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Stats;