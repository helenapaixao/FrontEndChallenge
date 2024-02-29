import React, { useState } from "react";
import Table from "../components/Table/Table";

const Home: React.FC = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return <Table isImageClicked={isImageClicked} handleImageClick={handleImageClick} />;
};

export default Home;
