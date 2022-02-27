import { FactoryOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import FavoriteCard from "../components/favoriteCard/FavoriteCard";

import { selectFavoritesList } from "../redux/main/mainSelectors";

const FavoritesPage = () => {
  const favoritesList = useSelector(selectFavoritesList);

  return (
    <div>
      {Object.values(favoritesList).map((favorite) => (
        <FavoriteCard key={favorite.cityKey} info={favorite} />
      ))}
    </div>
  );
};

export default FavoritesPage;
