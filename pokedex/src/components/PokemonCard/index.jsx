import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PokemonCard({ name, image, types }) {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "2em" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300vh"
          image={image}
          alt="DescricaoPoke"
          maxWidth="100%"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            {formattedName}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            style={{ textAlign: "center" }}
          >
            {typeHandler()}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          aaaaa
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
