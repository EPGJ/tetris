import React from "react";

import { CelL} from "./styles";

const Cell = ({ type }) => {
  const selectPieceColor = () => {
    let color;
    switch (type) {
      case 1:
        color = "#E67F22";
        break;
      case 2:
        color = "#FFEA00";
        break;
      case 3:
        color = "#FA3C00";
        break;
      case 4:
        color = "#D22E61";
        break;
      case 5:
        color = "#AB47BB";
        break;
      case 6:
        color = "#1185EA";
        break;
      case 7:
        color = "#18B1D1";
        break;
      default:
        color = "none";
    }
    return color;
  };

  return (
        <CelL type={type} color={selectPieceColor} />
  );
};

export default React.memo(Cell);
