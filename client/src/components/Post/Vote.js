import "./Vote.scss";

export default function Vote(props) {
  return (
    <div class="flex items-center justify-center p-4">
      <div class="bg-white shadow-xl border p-8 w-3/6">
      <div class="container">
        <div class="votes bar"></div>
      </div>
      <div class="flex flex-row justify-between">
        <p>Answer 1 Votes</p>
        <p>Answer 2 Votes</p>
      </div>
      </div>
    </div>
  );
}