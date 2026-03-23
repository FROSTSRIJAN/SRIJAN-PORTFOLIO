const starConfig = [
  { top: "14%", left: "-15%", delay: "1s", duration: "8s" },
  { top: "28%", left: "-12%", delay: "7s", duration: "10s" },
  { top: "45%", left: "-18%", delay: "13s", duration: "9s" },
  { top: "62%", left: "-10%", delay: "19s", duration: "11s" },
  { top: "78%", left: "-14%", delay: "24s", duration: "10s" },
];

const ShootingStars = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="starfield-layer" />
      <div className="starfield-grid" />

      {starConfig.map((star, index) => (
        <span
          key={index}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
