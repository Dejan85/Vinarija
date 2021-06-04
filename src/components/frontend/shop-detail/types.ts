export interface ShopDetailProps {
  wine: {
    id: string;
    name: string;
    image: string;
    price: string;
    volume: string;
    wineDescription: string;
    imageBackground: string;
    detailImage: string;
    detailImage2: string;
    detailDescription: string[];
    specification: { berba: string; sorta: string; alkohol: string };
    wineProfile: string[];
  };
}
