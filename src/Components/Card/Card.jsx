import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import './Card.css';

export default function PokemonCard({ name, image, attack, hp, defense}) {

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia component="img" height="200" image={image} width="200"/>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography className="pokemonName" fontFamily={"'Rubik Vinyl', cursive"} textAlign={"center"} variant="h5" component="div"  marginLeft={5} textTransform={"capitalize"} fontWeight={"bold"}>
          {name}
          </Typography>
          </Box>
          <Typography className="abilities" fontFamily={"'Rubik Vinyl', cursive"} fontWeight={"bolder"} variant="body2" color="text.secondary"  fontSize={16} textAlign={"center"}>
            hp: {hp} <br/>
            attack: {attack} <br/>
            defense: {defense}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
