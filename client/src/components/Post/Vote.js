import "./Vote.scss";

export default function Vote(props) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white shadow-xl border p-8 w-3/6">
      <div className="container">
        <div className="votes bar"></div>
      </div>
      <div className="flex flex-row justify-between">
        <p>Answer 1 Votes</p>
        <p>Answer 2 Votes</p>
      </div>
      </div>
    </div>
  );
}