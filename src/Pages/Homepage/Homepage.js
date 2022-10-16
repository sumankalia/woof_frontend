import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPet from "../../components/MainFeaturedPet";
import { featuredPets, mainFeaturedPost } from "../../data";
import FeaturedPet from "../../components/FeaturedPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../../redux/actions/pets";

const Homepage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.allPets);

  useEffect(() => {
    fetchAllPets({ dispatch });
  }, []);

  return (
    <>
      <MainFeaturedPet post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {/* define the spacing between the components childs */}
        {pets?.map((pet) => (
          <FeaturedPet key={pet.title} pet={pet} />
        ))}
      </Grid>
    </>
  );
};

export default Homepage;
