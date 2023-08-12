import "./styles.css";
import { useState } from "react";
export default function App() {
  const [bill, setBill] = useState("");
  const [review, setReview] = useState(null);
  const [userReview, setUserReview] = useState(null);
  const avgTip = Math.round(bill * ((review + userReview) / 2 / 100));
  function handleResetInput() {
    setBill("");
    setReview(0);
    setUserReview(0);
  }
  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <ReviewInput percentage={review} setPercentage={setReview}>
        How did you like the service?
      </ReviewInput>
      <ReviewInput percentage={review} setPercentage={setReview}>
        How did you like the service?
      </ReviewInput>
      {/* <FriendReviewInput userReview={userReview} setUserReview={setUserReview}/> */}
      {bill && (
        <>
          <Output bill={bill} tip={avgTip} setBill={setBill} />
          <Reset onhandleReset={handleResetInput} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function ReviewInput({ percentage, setPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>it was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
{
  /* function FriendReviewInput({userReview, setUserReview}){
  return (
    <div>
      <label>How did your friend like the service?</label>
      <select onChange={(e)=> setUserReview(Number(e.target.value))}> 
    <option value={0} >Dissatisfied(0%)</option>
    <option value={5}>It was okay (5%)</option>
    <option value={10}>it was good (10%)</option>
    <option value={20}>Absolutely amazing   (20%)</option>
  </select>
    </div>
    )
} */
}
function Output({ bill, tip, onhandleReset, setBill }) {
  const totalBill = bill + tip;
  return (
    <p>
      <b>
        You pay ${totalBill} (${bill} + ${tip} tip)
      </b>
    </p>
  );
}
function Reset({ onhandleReset }) {
  return (
    <button
      onClick={() => {
        onhandleReset();
      }}
    >
      Reset
    </button>
  );
}
