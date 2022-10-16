import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { BACKEND_URI } from "../utils/constants";

function FeaturedPet({ pet }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{ display: "flex" }}
        onClick={() => navigate(`/${pet?.category._id}/${pet?._id}`)}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {pet?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Breed - {pet?.breed}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Category - {pet?.category?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Age - {pet?.age}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Color - {pet?.color}
          </Typography>

          <Typography variant="subtitle1" paragraph>
            {pet?.description}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            View details...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: "none", sm: "block" } }}
          image={BACKEND_URI + "/" + pet?.image}
          alt={pet?.imageLabel}
        />
      </Card>
    </Grid>
  );
}

FeaturedPet.propTypes = {
  pet: PropTypes.shape({
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPet;
