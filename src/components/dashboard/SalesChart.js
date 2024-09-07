import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["	#00FFFF","#0d6efd", "#009efb"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Cauliflower Coral",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
    {
      name: "Pocillopora Coral",
      data: [10, 20, 40, 60, 20, 40, 50, 60, 20],
    },
    {
      name: "Staghorn Coral",
      data: [0, 50, 20, 40, 20, 40, 20, 60, 20],
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Extent of Coral Damage</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <div className="bg-primary text-white my-3 p-3 rounded">
          <Row>
            <Col md="3">
              <h6>Identified Polluted Zones</h6>
              <h4 className="mb-0 fw-bold">3</h4>
            </Col>
            <Col md="3">
              <h6>Total no of Identified Corals</h6>
              <h4 className="mb-0 fw-bold">3</h4>
            </Col>  
            <Col md="3">
              <h6>No of Diseases Identified</h6>
              <h4 className="mb-0 fw-bold">4</h4>
            </Col>
            <Col md="3">
              <h6>Avarage Health Predicted</h6>
              <h4 className="mb-0 fw-bold">60%</h4>
            </Col>
          </Row>
        </div>
        <Chart options={options} series={series} type="area" height="279" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
