import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  // console.log(userInput)
  for (const [key, value] of Object.entries(userInput)) {
    // console.log(typeof (value))
    userInput[key] = parseFloat(value);
  }
  const result = calculateInvestmentResults(userInput);
  console.log(result);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row) => {
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.totalInterest)}</td>
              <td>{formatter.format(row.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
