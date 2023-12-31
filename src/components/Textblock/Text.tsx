import "./Text.css";

const textContent = {
  title: "Win more",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam cupiditate aspernatur quidem corporis cum dicta dolorum, alias natus saepe et earum illo aliquid possimus. Tempore et accusantium non eius.",
  ],
};

export const Text: React.FC = () => {
  return (
    <section className="section">
      <h2 className="title">{textContent.title}</h2>
      <section className="text">
        {textContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </section>
  );
};
