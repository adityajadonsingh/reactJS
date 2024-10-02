import { useState } from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import { Pie } from 'react-chartjs-2'
import Slider from './Slider'
import './App.css'

function App() {

  const [homeValue , setHomeValue] = useState(3000);
  let defaultDownpayment = homeValue / 5;
  const [downPayment, setdownPayment] = useState(defaultDownpayment);
  let defaultLoanAmount = homeValue - downPayment;
  const [loanValue, setLoanValue] = useState(defaultLoanAmount);
  const [year, setYear] = useState(5);
  const [interestRate, setinterest] = useState(5);

  const monthlyPayment = (interest, loanAmount, years) => {
    let montlyinterest = (interest / 12) / 100 ;
    let totalPayment = years * 12;
    let tmp = montlyinterest * Math.pow((1 + montlyinterest), totalPayment);
    let tmp2 = Math.pow((1 + montlyinterest), totalPayment) - 1;
    let ans = loanAmount * (tmp / tmp2);
    return ans.toFixed(2);
  }

  const [monthlyAmount, setmonthlyAmount] = useState(monthlyPayment(interestRate, loanValue, year));


  const homeHandleChange = (event) =>{
    let newHomeValue = Number(event.target.value);
    let newDownPaymentValue = newHomeValue / 5;
    let newLoanValue = newHomeValue - newDownPaymentValue;
    setHomeValue(newHomeValue);
    setdownPayment(newDownPaymentValue);
    setLoanValue(newLoanValue);
    setmonthlyAmount(monthlyPayment(interestRate, newLoanValue, year));
  }
  const downpaymentHandleChange = (event) =>{
    let newDownPayment = Number(event.target.value);
    setdownPayment(newDownPayment);
    let newLoanValue = homeValue - newDownPayment;
    setLoanValue(newLoanValue);
  }
  const loanValueHandleChange = (event) =>{
    let newLoanValue = Number(event.target.value);
    let DownPayment = homeValue - newLoanValue;
    setdownPayment(DownPayment);
    setLoanValue(newLoanValue);
    setmonthlyAmount(monthlyPayment(interestRate, newLoanValue, year));
  }
  const interestHandleChange = (event) =>{
    let newInterest = Number(event.target.value);
    setinterest(newInterest);
    setmonthlyAmount(monthlyPayment(newInterest, loanValue, year));
  }
  const yearHandleChange = (event) => {
    let newYear = Number(event.target.value);
    setYear(newYear);
    setmonthlyAmount(monthlyPayment(interestRate, loanValue, newYear));
  }

  

  // useEffect(()=>{

  // }, [homeValue, downPayment])

  return (
    <>
      <section className="bank pb-16">
        <div className="container mx-auto">
          <h1 className='text-6xl text-white font-bold pt-10'>React Bank</h1>
          <div className="flex mt-10 main">
            <div className="w-3/6">
              <div className="left-inner flex flex-col gap-y-10">
                <Slider type={"value"} mainHeading={"Home Value"} value={homeValue} handleChange={homeHandleChange} min={1000} max={10000} steps={100} />
                <Slider type={"value"} mainHeading={"Down Payment"} value={downPayment} handleChange={downpaymentHandleChange} min={0} max={homeValue} steps={10} />
                <Slider type={"value"} mainHeading={"Loan Value"} value={loanValue} handleChange={loanValueHandleChange} min={0} max={homeValue} steps={10} />
                <Slider type={"percentage"} mainHeading={"interest Rate"} value={interestRate} handleChange={interestHandleChange} min={2} max={18} steps={1} />
                <div className="w-full">
                  <select onChange={yearHandleChange} className='w-full py-3 outline-none rounded-md px-5 bg-transparent text-white border text-2xl' name="" id="">
                    <option value="5">5 Years</option>
                    <option value="10">10 Years</option>
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                    <option value="25">25 Years</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-3/6 h-100 flex ">
              <div className="rigth-inner p-10 w-full text-center">
                <h2 className='text-2xl text-white'>Montly Payment: $ {monthlyAmount}</h2>
                <div className="chart w-full">
                  <Pie
                    data={{
                      labels : ["Principle", "Interest"]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
