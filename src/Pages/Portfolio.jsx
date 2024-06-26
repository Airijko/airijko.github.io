import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import Project from "../components/Project";
import { cardData } from "../constants/CardData";
import CardSlider from "../components/CardSlider";

import RedRiver from "../assets/images/RedRiver.jpg";

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLink, setSelectedLink] = useState([]);
  const [description, setDescription] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleCardClick =
    (title, image, link, description, downloadLink) => () => {
      setSelectedCard(title);
      setSelectedImage(image);
      setSelectedLink(link);
      setDescription(description);
      setDownloadLink(downloadLink);
    };

  useEffect(() => {
    const firstCard = cardData[0];

    setSelectedCard(firstCard.title);
    setSelectedImage(firstCard.image);
    setSelectedLink(firstCard.link);
    setDescription(firstCard.description);
    setDownloadLink(firstCard.download);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto md:pt-12 md:pb-12">
      <div className="md:grid md:grid-cols-3 gap-6">
        <div className="flex flex-col col-span-1 cardBackground md:bg-blue-100 p-2 text-center md:rounded-xl">
          <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
            <span className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl md:text-gray-600">
              Work Experience
            </span>
          </h1>
          <div className="mt-2 w-full h-full cardBackground rounded-lg">
            <Card
              name="Internship - Pixellriver"
              text={[
                "Student Lead Project",
                "React & Django",
                "Restful API",
                "PostgreSQL",
                "Grafana",
                "Material UI",
              ]}
              image={RedRiver}
              link="https://www.rrc.ca/ace/"
              date="June - August 2023"
            />
            <p className="p-5 text-left">
              <span className="text-sm text-white font-grotesk">
                I interned with a team of 7 students: 4 developers, 2 project
                managers, and 1 info security student. My role was developing
                the web app and being the lead developer. I learned React and
                Django quick, creating a Restful API with PostgreSQL. It was a
                fun internship, which inspired me to build a NextJS app simply
                out of my love for React.
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col col-span-2 cardBackground p-7 md:border md:border-gray-700 md:rounded-xl">
          {selectedCard && (
            <Project
              title={selectedCard}
              image={selectedImage}
              link={selectedLink}
              description={description}
              downloadLink={downloadLink}
            />
          )}
        </div>
      </div>
      <div className="w-full h-full md:mt-5">
        <div className="p-5 bg-black bg-opacity-75 p-7 rounded-xl rounded-xl">
          <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
            <span className="text-3xl text-white">Projects</span>
          </h1>
          <CardSlider
            cardData={cardData}
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
