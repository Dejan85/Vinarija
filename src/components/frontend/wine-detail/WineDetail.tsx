import {
  SubContainer,
  Heading,
  Paragraph,
  Product,
  Element,
  Link,
} from "src/components/ui";
import Image from "next/image";
import { WineDetailProps } from "./types";

const WineDetail = (props: WineDetailProps) => {
  const {
    wine: {
      id,
      name,
      image,
      price,
      wineDescription,
      imageBackground,
      detailImage,
      detailImage2,
      detailDescription,
    },
  } = props;

  return (
    <SubContainer className="wine-detail">
      <Element className="wine-detail__image-section" as="section">
        {imageBackground && (
          <Image
            src={imageBackground}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        )}
        <Heading className="wine-detail__heading" as="h1">
          {name}
        </Heading>
      </Element>
      <Element as="section" className="wine-detail__content">
        <Element as="article" className="wine-detail__content-left">
          {detailImage && (
            <Image
              src={detailImage}
              alt="img"
              width="380"
              height="570"
              objectFit="cover"
            />
          )}
          <Paragraph className="wine-detail__content-left-text" as="p">
            {detailDescription[1]}
          </Paragraph>

          <Paragraph className="wine-detail__content-left-text" as="p">
            {detailDescription[2]}
          </Paragraph>

          <Link className="wine-detail__content-left-link" href="/">
            Gde kupiti?
          </Link>
        </Element>

        <Element as="article" className="wine-detail__content-right">
          <Heading as="h3">{name}</Heading>
          <Paragraph className="wine-detail__content-right-text" as="p">
            {detailDescription[0]}
          </Paragraph>

          <Link className="wine-detail__content-right-link" href="/">
            Dodaj u korpu
          </Link>
          {detailImage2 && (
            <Image
              src={detailImage2}
              alt="img"
              width="380"
              height="570"
              objectFit="cover"
            />
          )}
        </Element>
      </Element>
    </SubContainer>
  );
};

export default WineDetail;
