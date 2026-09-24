const meunBtn = document.getElementById("meun");
const navbar = document.getElementById("navbar");
const closebtn = document.getElementById("closebtn");
const header = document.getElementById("header");
const largeNavbar = document.getElementById("largeNavbar");

AOS.init();

meunBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("active");
});

closebtn.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.remove("active");
});

const ctx = document.getElementById("trafficChart").getContext("2d");
const ctx2 = document.getElementById("trafficChart2").getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 0, 150);
gradient.addColorStop(0, "rgba(255, 99, 99, 0.4)");
gradient.addColorStop(1, "rgba(255, 99, 99, 0.0)");

new Chart(ctx, {
  type: "line",
  data: {
    labels: Array.from({ length: 12 }, (_, i) => i + 1),
    datasets: [
      {
        data: [20, 25, 30, 26, 45, 30, 55, 30, 38, 20, 50, 20],
        borderColor: "#ff6666",
        borderWidth: 2.5,
        fill: true,
        backgroundColor: gradient,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});

const gradient2 = ctx2.createLinearGradient(0, 0, 0, 150);
gradient2.addColorStop(0, "rgba(255, 99, 99, 0.4)");
gradient2.addColorStop(1, "rgba(255, 99, 99, 0.0)");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 22, 30, 38, 36, 42, 48],
        borderColor: "#ff6666",
        borderWidth: 2.5,
        fill: true,
        backgroundColor: gradient,
        tension: 0.4,

        pointRadius: [0, 0, 0, 0, 0, 5, 0],
        pointBackgroundColor: "#ff6666",
        pointBorderColor: "#0b0f19",
        pointBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const headerHeight = header ? header.offsetHeight : 500;

  if (currentScrollY >= headerHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
