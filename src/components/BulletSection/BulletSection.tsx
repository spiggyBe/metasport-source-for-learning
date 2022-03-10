import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import getContentfulData from "../../utils/getContentfulData";
import { useDraggableScroll } from "../../utils/useDraggableScroll";
import { AppWrapper } from "../Layout/AppWrapper";

const MainWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 960px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const MainBulletWrapper = styled.div`
  margin-top: 50px;
  height: max-content;
  width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background-color: #413f64;
`;

const FeatureIcon = styled.div`
  position: absolute;
  width: 123.5px;
  height: 123.5px;
  background-color: transparent;
  top: -35%;
  left: -9%;
`;

const FeatureTitle = styled.div`
  display: flex;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: #fff;
  width: 214px;
  margin: 30px 20px;
`;

const BulletSlider = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  cursor: grab;

  @media (max-width: 960px) {
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
  }
`;
const SliderInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  @media (max-width: 960px) {
    gap: 20px;
  }
`;

const BulletContent = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #9e9cc9;
`;

interface DescriptionProps {
  title: string;
  description: string;
}

const DescriptionBox: React.FC<DescriptionProps> = ({ title, description }) => {
  return (
    <MainBulletWrapper>
      <Circle>
        <FeatureIcon>
          <Image
            src="/Images/calculator.png"
            alt="calculator"
            width={123.5}
            height={123.5}
          />
        </FeatureIcon>
      </Circle>
      <FeatureTitle>{title}</FeatureTitle>
      <BulletContent>{description}</BulletContent>
    </MainBulletWrapper>
  );
};

const BulletSection = () => {
  const ref = useRef(null);
  const { onMouseDown, onTouchDown, touchMoveHandler } = useDraggableScroll(
    ref,
    {
      direction: "horizontal",
    }
  );
  const [bullets, setBullets] = useState([]);

  useEffect(() => {
    async function fetchBulletData() {
      const bulletData = await getContentfulData("bulletPoints");
      return bulletData.items;
    }
    fetchBulletData().then((data: any) => {
      const bulletItems = data
        .slice()
        .reverse()
        .map((bulletProps: any) => {
          return {
            title: bulletProps.fields.title,
            description: bulletProps.fields.description,
          };
        });
      setBullets(bulletItems);
    });
  }, []);

  return (
    <AppWrapper>
      <MainWrapper>
        <BulletSlider
          ref={ref}
          onMouseDown={onMouseDown}
          onTouchStart={(event) => {
            onTouchDown(event.nativeEvent);
          }}
          onTouchEnd={() =>
            document.removeEventListener("touchmove", touchMoveHandler)
          }
        >
          <SliderInner>
            {bullets.map((bulletProps: any) => {
              return (
                <DescriptionBox
                  key={Math.random()}
                  title={bulletProps.title}
                  description={bulletProps.description}
                />
              );
            })}
          </SliderInner>
        </BulletSlider>
      </MainWrapper>
    </AppWrapper>
  );
};

export default BulletSection;
