import audiophile from "../assets/shared/audiophile-logo.svg";
import cart from "../assets/shared/icon-cart.svg";
import headphones from "../assets/shared/desktop/image-headphones.png";
import speakers from "../assets/shared/desktop/image-speakers.png";
import earphones from "../assets/shared/desktop/image-earphones.png";

export const categoryData = {
  logo: {
    image: audiophile,
    imageAlt: "audiophile logo",
    link: "/",
  },
  category: [
    {
      title: "home",
      link: "/",
      active: false,
      cta: "shop",
      image: {
        src: headphones,
        alt: "headphone",
      },
    },
    {
      title: "headphones",
      link: "/headphones",
      active: false,
      cta: "shop",
      image: {
        src: headphones,
        alt: "headphone",
      },
    },
    {
      title: "speakers",
      link: "/speakers",
      active: false,
      cta: "shop",
      image: {
        src: speakers,
        alt: "speaker",
      },
    },
    {
      title: "earphones",
      link: "/earphones",
      active: false,
      cta: "shop",
      image: {
        src: earphones,
        alt: "earphones",
      },
    },
  ],
  footer: {
    information:
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
    copyright: "Copyright 2021. All Rights Reserved",
  },
  cart: {
    icon: cart,
    iconAlt: "cart icon notification",
  },
  socials: [
    {
      icon: "fab fa-facebook-square",
      label: "visit our facebook page",
      link: "https://facebook.com",
    },
    {
      icon: "fab fa-twitter-square",
      label: "follow our twitter page",
      link: "https://twitter.com",
    },
    {
      icon: "fab fa-instagram",
      label: "follow us on instagram",
      link: "https://instagram.com",
    },
  ],
};
