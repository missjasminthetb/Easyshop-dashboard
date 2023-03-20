var xValues = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var yValues = [30,35,22,32,40,38,40,43,39,30,25,42];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "#3e4d92d2",
      borderColor: "#0909ac",
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sales Activity 1.3%"
    }
  }
});

var xValues = ["Direct 40%", "Affiliate 30%", "Socials 20%", "Referrals 10%"];
var yValues = [40, 30, 20, 10];
var barColors = [
  "#0909ac",
  "#af07a1e8",
  "#3e4d92d2",
  "#ac18d1",
];

new Chart("roundChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Revenue By Channel"
    }
  }
});

