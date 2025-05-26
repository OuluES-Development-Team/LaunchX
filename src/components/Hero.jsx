import React from 'react';
import "./Hero.scss";

function Hero() {
  return (
    <div className="bg-black py-16 text-center">
      <h1 className="head" data-text="LaunchX">LaunchX</h1>
      <div className="sub1-wrapper">
        {/* Mobile: two lines */}
        <span className="sub1 sub1-mobile" data-text="Empowering Innovation">Empowering Innovation</span>
        <span className="sub1 sub1-mobile" data-text="Under the Midnight Sun">Under the Midnight Sun</span>
        {/* Desktop: one line */}
        <span className="sub1 sub1-desktop" data-text="Empowering Innovation Under the Midnight Sun">
          Empowering Innovation Under the Midnight Sun
        </span>
      </div>
    </div>
  );
}

export default Hero;