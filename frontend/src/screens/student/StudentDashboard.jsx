import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import BarGraph from "../../components/progress/BarGraph";
import LineGraph from "../../components/progress/LineGraph";
import PieGraph from "../../components/progress/PieGraph";
import Gauge from "../../components/progress/Guage";
import "../../styles/studentcomponentsstyles/StudentDashboard.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ color: "#08422D", p:3, fontWeight: 600 }}>
        Student Dashboard
      </Typography>
      <Card
        sx={{
          px: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap:"5px"
        }}
        elevation={0}
      >
        <PrimaryButton onClick={()=>{navigate("/group-formation")}} sx={{ width: "33%", height: "150px", my: 1 }}>
          Create Project Group
        </PrimaryButton>
        <PrimaryButton onClick={()=>{navigate("/idea-submission")}} sx={{ width: "33%", height: "150px", my: 1 }}>
          Submit Project Idea
        </PrimaryButton>
        <PrimaryButton onClick={()=>{navigate("/fr-submission")}} sx={{ width: "33%", height: "150px", my: 1 }}>
          Functional Requirements
        </PrimaryButton>
        <PrimaryButton onClick={()=>{navigate("/documentation-submission")}} sx={{ width: "33%", height: "150px", my: 1 }}>
          Submit Documentation
        </PrimaryButton>
        <PrimaryButton onClick={()=>{navigate("/add-weekly-progress")}} sx={{ width: "33%", height: "150px", my: 1 }}>
          Submit Weekly Progress Report
        </PrimaryButton>
        <PrimaryButton sx={{ width: "33%", height: "150px", my: 1 }}>
          View Weekly Progress Evaluation
        </PrimaryButton>
        <PrimaryButton sx={{ width: "33%", height: "150px", my: 1 }}>
          View Documentation Evaluation
        </PrimaryButton>
        <PrimaryButton sx={{ width: "33%", height: "150px", my: 1  }}>
          View Final Evaluation
        </PrimaryButton>
      </Card>
    </Box>
    // <div style={{}}>
    //   {/* <BarGraph /> */}
    //   {/* <LineGraph /> */}
    //   {/* <PieGraph /> */}
    //   {/* <Gauge /> */}
    // </div>
  );
};

export default StudentDashboard;
