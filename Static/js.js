Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2010],
    datasets: [{
        data: [5.2,11.9,9.9,9.2,6,8,12.5,13.6,14,7,9.5,9.4],
        label: "Action",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [5.5,1.6,1.9,2.9,3.4,4.6,5.9,6.3,9,8.5,11.6],
        label: "Thriller",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [3.6,1.9,2.7,7.5,4.7,4.8,2.5,2.3,1.6,1.3,8.1],
        label: "War",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [1.4,0.8,0.8,0.4,2.1,2.3,2.1,2.7,3,2,3],
        label: "Sci-Fi",
        borderColor: "#e8c3b9",
        fill: false
      }, {
        data: [7.5,18.8,22.5,15.4,14.2,12.2,8.7,8.5,11.3,12.1,8.1],
        label: "Romance",
        borderColor: "#c45850",
        fill: false
      }, {
        data: [5,5.6,13,12,12,10.3,9.9,8.3,9.3,7.6,6.1],
        label: "Crime",
        borderColor: "#9d009e",
        fill: false
      }, {0.7,1.1,9.3,7.2,6.7,5.2,2.7,2.1,1.1,1.1,0.9],
        label: "Musicals",
        borderColor: "#9d009e",
        fill: false
      }, {
        data: [9.8,18.4,32.1,30.7,27.6,27.3,25.1,24.5,25.6,25.7,23.5],
        label: "Comedy",
        borderColor: "#019e00",
        fill: false
      }, {
        data: [2.5,2.1,1.5,1.9,2.1,3.7,5.7,6.4,5,7,10.3],
        label: "Horror",
        borderColor: "#ff9600",
        fill: false
      }, {
        data: [3.1,2.2,1.2,1.9,1.8,3.3,4.8,4.9,8.9,18.8,23.6],
        label: "Documentary",
        borderColor: "#fff700",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Percentage of movies made in different genres 1910-2018'
    }
  }
});
