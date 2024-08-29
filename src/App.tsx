import React from "react";
function App() {
  const openDiscord = () => {
    window.open("https://discord.gg/SY2uWdN5fb", "_blank");
  }
  return (
    <div className="hero min-h-screen" style={{ background: "var(--base)" }}>
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Commissions</h1>
          <p className="py-6"> My Products for sale. </p>
          <div className="inline-flex">
          <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Bots</h2>
    <p>4$  free host can be setup for <strong>free</strong>
 premium host is 3$ a month</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={openDiscord}>Buy Now</button>
    </div>
  </div>
</div>

<div className="card bg-base-300 w-96 shadow-xl ml-10">
  <div className="card-body">
    <h2 className="card-title">Sites</h2>
    <p>sites can be made for between the price of 3-7$. free host can be setup for <strong>free</strong> and premium host is for 1$ a month 
</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={openDiscord}>Buy Now</button>
    </div>
  </div>
</div>
          </div>
<div className="bottom-0 mt-10">
<strong>Note: with a free host after i set it up you are on your own which means you cannot get me to re-code the entire thing while on the premium host i am responsible for all the uptime</strong>
</div>
        </div>

      </div>
    </div>
  );
}

export default App;
