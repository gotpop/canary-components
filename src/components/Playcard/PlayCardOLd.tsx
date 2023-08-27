import Image from "next/image";
import styles from "./PlayCard.style";
import stylesKeyframes from "./PlayCardKeyframes.style";

type PlayProps = {
  title: string;
  imageSrc: string;
  description: string;
  className?: string | undefined;
};

export const PlayCard: React.FC<PlayProps> = ({
  title,
  imageSrc,
  description,
  className,
}) => {
  return (
    <>
      <style>{styles}</style>
      <style>{stylesKeyframes}</style>

      <div className={`play-scene ${className}`}>
        <div className="play-card">
          <figure className="play-card-face">
            <Image
              className="image"
              src={imageSrc}
              width={1000}
              height={1000}
              alt="Image"
            />
          </figure>
        </div>
      </div>
    </>
  );
};
