import { useState } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from 'react-chartjs-2';
import Slider from './Slider';
import './App.css';

function App() {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(homeValue / 5);
  const [loanValue, setLoanValue] = useState(homeValue - downPayment);
  const [year, setYear] = useState(5);
  const [interestRate, setInterest] = useState(5);

  const monthlyPayment = (interest, loanAmount, years) => {
    let monthlyInterest = (interest / 12) / 100;
    let totalPayment = years * 12;
    let tmp = monthlyInterest * Math.pow((1 + monthlyInterest), totalPayment);
    let tmp2 = Math.pow((1 + monthlyInterest), totalPayment) - 1;
    let ans = loanAmount * (tmp / tmp2);
    return ans.toFixed(2);
  }

  const [monthlyAmount, setMonthlyAmount] = useState(monthlyPayment(interestRate, loanValue, year));

  const homeHandleChange = (event) => {
    let newHomeValue = Number(event.target.value);
    let newDownPaymentValue = newHomeValue / 5;
    let newLoanValue = newHomeValue - newDownPaymentValue;

    setHomeValue(newHomeValue);
    setDownPayment(newDownPaymentValue);
    setLoanValue(newLoanValue);
    setMonthlyAmount(monthlyPayment(interestRate, newLoanValue, year));
  }

  const downpaymentHandleChange = (event) => {
    let newDownPayment = Number(event.target.value);
    let newLoanValue = homeValue - newDownPayment;
    setDownPayment(newDownPayment);
    setLoanValue(newLoanValue);
    setMonthlyAmount(monthlyPayment(interestRate, newLoanValue, year));
  }

  const loanValueHandleChange = (event) => {
    let newLoanValue = Number(event.target.value);
    let downPaymentValue = homeValue - newLoanValue;
    setDownPayment(downPaymentValue);
    setLoanValue(newLoanValue);
    setMonthlyAmount(monthlyPayment(interestRate, newLoanValue, year));
  }

  const interestHandleChange = (event) => {
    let newInterest = Number(event.target.value);
    setInterest(newInterest);
    setMonthlyAmount(monthlyPayment(newInterest, loanValue, year));
  }

  const yearHandleChange = (event) => {
    let newYear = Number(event.target.value);
    setYear(newYear);
    setMonthlyAmount(monthlyPayment(interestRate, loanValue, newYear));
  }

  const totalPaid = monthlyAmount * year * 12;
  const totalInterestPaid = totalPaid - loanValue;

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
                <Slider type={"percentage"} mainHeading={"Interest Rate"} value={interestRate} handleChange={interestHandleChange} min={2} max={18} steps={1} />
                <div className="w-full">
                  <select onChange={yearHandleChange} className='w-full py-3 outline-none rounded-md px-5 bg-transparent text-white border text-2xl'>
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
              <div className="right-inner py-10 w-full text-center">
                <h2 className='text-2xl text-white'>Monthly Payment: $ {monthlyAmount}</h2>
                <div className="chart w-full flex justify-end mt-10">
                  <Pie
                    data={{
                      labels: ["Principal", "Interest"],
                      datasets: [
                        {
                          data: [loanValue, totalInterestPaid],
                          backgroundColor: ['#36A2EB', '#FF6384'],
                        }
                      ]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
