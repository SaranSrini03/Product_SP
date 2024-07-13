import React from 'react'
import '../styles/Product.css'
import { TiTick } from "react-icons/ti";
import Logo from '../logos/Icon.png';
import Logo1 from '../logos/Icon-1.png';
import Logo2 from '../logos/Icon-2.png';
import Logo3 from '../logos/Icon-3.png';
import Logo4 from '../logos/Icon-4.png';
import Logo5 from '../logos/Icon-5.png';
import Logo6 from '../logos/Icon-6.png';
import Logo7 from '../logos/Icon-7.png';
import Logo8 from '../logos/Icon-8.png';
import Logo9 from '../logos/Icon-9.png';
import Logo10 from '../logos/Icon-10.png';
import Logo11 from '../logos/Icon-11.png';
import Logo12 from '../logos/Icon-12.png';
import Logo13 from '../logos/Icon-13.png';
import Logo14 from '../logos/Icon-14.png';
import Logo15 from '../logos/Icon-15.png';
import Logo16 from '../logos/Icon-16.png';
import Logo17 from '../logos/Icon-17.png';
import Logo18 from '../logos/Icon-18.png';
import Container from '../logos/Container.png';
import Design from '../logos/Design.png';



const Product = () => {
  return (
    <div>
        <div className='heroSection'>
            <div className='left'>
                <div className='label'><TiTick className='tick'/><p className=''>Empowering Your Financial Journey</p></div>
                <p className='title'>Explore Our Innovative <span>Financial Products</span></p>
                <p className='subtitle'>At Stillprofit, we offer a diverse range of innovative products designed to empower traders, investors, and financial enthusiasts. Explore our comprehensive suite of tools tailored for financial markets, personal finance, and decentralized finance (DeFi).</p>
                <button className='button'>Browse Our Products</button>
            </div>
            <div className='right'>
                <div className='image'>
                    <img src={Container} alt='logo' style={{ width: '350px', height: '450px', }}/>
                    <img className='bgImage' src={Design} alt='logo' style={{ width: '300px', height: '300px', }}/>

                </div>
            </div>
        </div>

        <div className='productSection'>
            <p className='title'>Our<span> Products</span></p>
            <div className='subsection'>
                <p className='subtitle'>Discover a wide range of tools designed to help you navigate financial markets, manage personal finances, and embrace decentralized finance. At Stillprofit, we provide the resources you need to achieve financial success.</p>
                <button className='button'>Explore All Products</button>
            </div>

            <div className='container'>
                <div className='box'>
                    <div className='icon'>
                        <img src={Logo} alt='logo' style={{ width: '50px', height: '50px', }}/>
                    </div>
                    <div className='title'>BackTesting Platform</div>
                    <div className='subtitle'>Optimize your trading strategies with our advanced Backtesting Platform. Simulate real market conditions using historical data to evaluate and refine your approaches before committing capital. Our user-friendly interface and comprehensive analytics empower you to make data-driven decisions, enhancing your trading performance and reducing risk.</div>
                    <button className='button'>Start Backtesting Now</button>
                </div>
                <div className='box'>
                     <div className='icon'>
                        <img src={Logo1} alt='logo' style={{ width: '50px', height: '50px', }}/>
                    </div>
                    <div className='title'>Systamatic Trading Platform</div>
                    <div className='subtitle'>Revolutionize your trading strategies with our cutting-edge Algorithmic Trading solutions. Our platform uses advanced algorithms to execute trades based on predefined criteria, minimizing human error and maximizing efficiency. Whether you're a novice trader or an experienced professional, our systematic trading tools help you optimize your performance and achieve consistent results.</div>
                    <button className='button'>Start Algorithm Trading</button>
                </div>
                <div className='box'>
                     <div className='icon'>
                        <img src={Logo2} alt='logo' style={{ width: '50px', height: '50px', }}/>
                    </div>
                    <div className='title'>Systamatic Trading Platform</div>
                    <div className='subtitle'>Revolutionize your trading strategies with our cutting-edge Algorithmic Trading solutions. Our platform uses advanced algorithms to execute trades based on predefined criteria, minimizing human error and maximizing efficiency. Whether you're a novice trader or an experienced professional, our systematic trading tools help you optimize your performance and achieve consistent results.</div>
                    <button className='button'>Start Algorithm Trading</button>
                </div>
            </div>
            
        </div>
        <div className='finSection'>
            <p className='title'>Personal Finance Products</p>
            <p className='subtitle'>Empower your trading and investment decisions with our suite of Financial Market Products.</p>
            <div className='container'>
                <div className='leftContainer'>
                    <div className='box'>
                        <div className='icon'>
                            <img src={Logo3} alt='logo' style={{ width: '50px', height: '50px', }}/>
                        </div>
                        <div className='title'>Budgeting and Expense Tracker</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <img src={Logo4} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Investment Planning</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                        <img src={Logo5} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Retirement Planing Calculator</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <img src={Logo6} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Debt Repayment Planner</div>
                    </div>
                </div>
                <div className='right'>
                    <p className='title'>Do you know?<br /> Step-Up SIP >> Regular SIP</p>
                    <p className='subtitle'>Returns comparison on Rs.5000 SIP each year with 15% returns on a year for 25 years. Step-up SIP with 7% increasing the SIP value every year. Step up SIP provide higher returns around 85.71% higher that regular SIP.</p>
                    <div className='percentageSection'>
                        <div className='box'>
                            <p className='percentage'>85.71%</p>
                            <p className='subtitle'>Difference</p>
                        </div>
                        <div className='box'>
                            <p className='percentage'>4.16 Cr.</p>
                            <p className='subtitle'>Regular SIP returns</p>
                        </div>
                        <div className='box'>
                            <p className='percentage'>7.72 Cr.</p>
                            <p className='subtitle'>Step-Up SIP Returns</p>
                        </div>
                    </div>
                    <button className='button'>Check the product Now</button>
                </div>
            </div>
        </div>
        <div className='yieldContainer'>
            <div className='leftContainer'>
                <p className='title'>High Yield Saving Account >> Regular Saving Account</p>
                <p className='subtitle'>Explore the benefits of a high-yield Fixed Deposit (FD) compared to a regular FD. Discover how a higher interest rate can significantly boost your savings over time and accelerate your path to financial growth.</p>
                <div className='percentageContainer'>
                    <div className='perBox'>
                        <p className='title'>6%</p>
                        <p className='subtitle'>Regular FD returns pa.</p>
                    </div>
                    <div className='perBox'>
                        <p className='title'>9%</p>
                        <p className='subtitle'>High Yield FD returns pa.</p>
                    </div>
                    <div className='perBox'>
                        <p className='title'>50%</p>
                        <p className='subtitle'>Higher returns in the period of 10 years</p>
                    </div>
                </div>
                <button className='button'>Check the product Now</button>

            </div>
            <div className='rightContainer'>
                <div className='box'>
                    <div className='logo'>
                        <img src={Logo7} alt='logo' style={{ width: '50px', height: '50px', }}/> 
                    </div>
                    <div className='title'>Tax Estimator and Planner</div>
                </div>
                <div className='box'>
                    <div className='logo'>
                        <img src={Logo8} alt='logo' style={{ width: '50px', height: '50px', }}/> 

                    </div>
                    <div className='title'>Personal Finance Dashboard</div>
                </div>
                <div className='box'>
                    <div className='logo'>
                        <img src={Logo9} alt='logo' style={{ width: '50px', height: '50px', }}/> 

                    </div>
                    <div className='title'>Financial Goal Tracker</div>
                </div>
                <div className='box'>
                    <div className='logo'>
                        <img src={Logo10} alt='logo' style={{ width: '50px', height: '50px', }}/> 

                    </div>
                    <div className='title'>FIRE Calculator</div>
                </div>
            </div>
        </div>
        <div className='finSection'>
            <p className='title'>Financial Market Products</p>
            <p className='subtitle'>Empower your trading and investment decisions with our suite of Financial Market Products.</p>
            <div className='container'>
                <div className='leftContainer'>
                    <div className='box'>
                        <div className='icon'>
                        <img src={Logo3} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Histroical Market Analysis Tool</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                        <img src={Logo4} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Portfolio Performance Tracker</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <img src={Logo5} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Sector Analysis Tool</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <img src={Logo6} alt='logo' style={{ width: '50px', height: '50px', }}/>

                        </div>
                        <div className='title'>Stock Screener</div>
                    </div>
                </div>
                <div className='right'>
                    <p className='title'>Do you know? <br />Gap Trading >> Buy and Hold</p>
                    <p className='subtitle'>From Jan 2021, Returns comparison on Nahar Industries.</p>
                    <div className='percentageSection'>
                        <div className='box'>
                            <p className='percentage'>280%</p>
                            <p className='subtitle'>Our Strategy Returns</p>
                        </div>
                        <div className='box'>
                            <p className='percentage'>66.67%</p>
                            <p className='subtitle'>Success Ratio</p>
                        </div>
                        <div className='box'>
                            <p className='percentage'>11.20%</p>
                            <p className='subtitle'>In Last month July 24 - Returns</p>
                        </div>
                    </div>
                    <button className='button'>Check the product Now</button>
                </div>
            </div>
        </div>
        
        <div className='yieldContainer'>
            <div className='leftContainer'>
                <p className='title'>We help to choose the right stock with the statistics</p>
                <p className='subtitle'>For Nahar Industries we got a huge returns. At the same time, just check TCS.</p>
                <div className='percentageContainer'>
                    <div className='perBox'>
                        <p className='title'>-3.57%</p>
                        <p className='subtitle'>Returns - if you go long/short during gap on TCS.</p>
                    </div>
                    <div className='perBox'>
                        <p className='title'>40%</p>
                        <p className='subtitle'>Success Ratio</p>
                    </div>
                    <div className='perBox'>
                        <p className='title'>6.35%</p>
                        <p className='subtitle'>In Last month July 24 - Returns</p>
                    </div>
                </div>
                <button className='button'>Check the product Now</button>

            </div>
            <div className='rightContainer'>
                <div className='box'>
                        <img src={Logo7} alt='logo' style={{ width: '50px', height: '50px', }}/> 
                        <div className='logo'></div>
                    <div className='title'>Option Strategy Analyzer</div>
                </div>
                <div className='box'>
                        <img src={Logo8} alt='logo' style={{ width: '50px', height: '50px', }}/> 
                        <div className='logo'></div>
                    <div className='title'>Stock Prize Prediction</div>
                </div>
                <div className='box'>
                        <img src={Logo9} alt='logo' style={{ width: '50px', height: '50px', }}/> 
                        <div className='logo'></div>
                    <div className='title'>Real-time Market Dashboard</div>
                </div>
                <div className='box'>
                        <img src={Logo10} alt='logo' style={{ width: '50px', height: '50px', }}/> 
                        <div className='logo'></div>
                    <div className='title'>Sentiment Analyzer</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Product