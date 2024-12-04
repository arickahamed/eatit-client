import { StaticImageData } from "next/image";
import image1 from "../app/about/about_images/image_ourTeam_1.png";
import image2 from "../app/about/about_images/image_ourTeam_2.png";
import image3 from "../app/about/about_images/image_ourTeam3.png";

interface IReviewData {
  image: StaticImageData;
  title: string;
  description: string;
  rating: number;
}

export const ReviewData: IReviewData[] = [
  {
    image: image1,
    title: "Ali Hasan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt exercitationem facere aut hic cum? Voluptatem illum rem non praesentium.",
    rating: 4.3,
  },
  {
    image: image2,
    title: "Forhad Farhan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt exercitationem facere aut hic cum? Voluptatem illum rem non praesentium.",
    rating: 4.8,
  },
  {
    image: image3,
    title: "Rafaan Tawseef",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt exercitationem facere aut hic cum? Voluptatem illum rem non praesentium.",
    rating: 3.8,
  },
];
