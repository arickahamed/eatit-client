import { StaticImageData } from "next/image";
import teamMember1 from "../app/about/about_images/image_ourTeam_1.png";
import teamMember2 from "../app/about/about_images/image_ourTeam_2.png";
import teamMember3 from "../app/about/about_images/image_ourTeam_3.png";

type TeamMemberType = {
  name: string;
  description: string;
  image: StaticImageData;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
  email: string;
};

export const TeamMemberInfo: TeamMemberType[] = [
  {
    name: "Brain Adams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sitamet",
    image: teamMember1,
    facebook: "https://www.facebook.com/arickahamedjoy",
    twitter: "https://www.facebook.com/arickahamedjoy",
    instagram: "https://www.instagram.com/arickahamedjoy/",
    linkedIn: "https://www.linkedin.com/in/arickahamed/",
    email: "arickahamed700@gmail.com",
  },
  {
    name: "Jhon Khan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sitamet",
    image: teamMember2,
    facebook: "https://www.facebook.com/arickahamedjoy",
    twitter: "https://www.facebook.com/arickahamedjoy",
    instagram: "https://www.instagram.com/arickahamedjoy/",
    linkedIn: "https://www.linkedin.com/in/arickahamed/",
    email: "arickahamed700@gmail.com",
  },
  {
    name: "Jessica biel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sitamet",
    image: teamMember3,
    facebook: "https://www.facebook.com/arickahamedjoy",
    twitter: "https://www.facebook.com/arickahamedjoy",
    instagram: "https://www.instagram.com/arickahamedjoy/",
    linkedIn: "https://www.linkedin.com/in/arickahamed/",
    email: "arickahamed700@gmail.com",
  },
];
