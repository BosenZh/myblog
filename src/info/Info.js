import project1 from "../img/mock1.jpeg";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.jpeg";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Bosen",
  lastName: "Zhang",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "based in the Canada",
    },
    {
      emoji: "💼",
      text: "Systems Engineer at Google",
    },
    {
      emoji: "📧",
      text: "b393zhan@uwaterloo.ca",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
    },
    {
      link: "https://github.com/BosenZh",
      icon: "fa fa-github",
    },
    {
      link: "https://www.linkedin.com/in/bosen-zhang-513a621b8/",
      icon: "fa fa-linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Bosen. I'm a Computing Financial Management student at uWaterloo.",
  skills: {
    proficientWith: [
      "javascript",
      "typescript",
      "react",
      "c++",
      "c",
      "node",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "Go",
      "python",
    ],
    exposedTo: ["java", "adobe illustrator"],
  },
  //   hobbies: [
  //     {
  //       label: "reading",
  //       emoji: "📖",
  //     },
  //     {
  //       label: "theater",
  //       emoji: "🎭",
  //     },
  //     {
  //       label: "movies",
  //       emoji: "🎥",
  //     },
  //     {
  //       label: "cooking",
  //       emoji: "🌶",
  //     },
  //     // Same as above, change the emojis to match / relate to your hobbies or interests.
  //     // You can also remove the emojis if you'd like, I just think they look cute :P
  //   ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "My Apple Mock retailer",
      live: "https://myapplebybosenzhang.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/BosenZh/Myapple", // this should be a link to the **repository** of the project, where the code is hosted.
      image: project1,
    },
    {
      title: "Biquadris",
      live: "https://github.com/BosenZh/Biquardris",
      source: "https://github.com/BosenZh/Biquardris",
      image: mock2,
    },
    {
      title: "mini-twitter",
      live: "https://github.com/BosenZh/mini-twitter",
      source: "https://github.com/BosenZh/mini-twitter",
      image: mock3,
    },
  ],
};
