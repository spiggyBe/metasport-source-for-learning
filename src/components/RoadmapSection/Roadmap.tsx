import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import getContentfulData from "../../utils/getContentfulData";
import ProgressIcon from "../../../public/Svg/Progress";
import CheckIcon from "../../../public/Svg/Check";
import { useDraggableScroll } from "../../utils/useDraggableScroll";
import { AppWrapper } from "../Layout/AppWrapper";

const MainWrapper = styled.div`
  width: 100%;
`;

const SectionDescription = styled.div`
  color: #8e48f6;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.1em;
`;

const SectionTitle = styled.h1`
  width: 100%;
  font-size: 48px;
  color: #fff;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const MainDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 90px;
  @media (max-width: 900px) {
    padding: 40px;
  }
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid #8e48f6;
`;

const RoadmapWrapper = styled.div`
  width: 100%;
`;

const PeriodWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const RoadMapDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: white;
  margin-top: -3px;
`;
const RoadmapTitle = styled.div`
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 22px;
`;

const RoadmapBoxWrapper = styled.div`
  background: linear-gradient(45deg, #f7a6a4, #ea70e5, #8e48f6);
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 40px;
`;
const RoadmapBox = styled.div`
  padding: 40px;
  border-radius: 30px;
  background: #1d1934;
  width: max-content;
  height: max-content;
`;

const RoadmapContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 18px;
  color: white;
`;

const RoadmapSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  cursor: grab;
  overflow: hidden;
  @media (max-width: 900px) {
    overflow-y: hidden;
    overflow-x: auto;
    padding-left: 10px;
  }
`;

const SliderInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RoadMapWrapper = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
`;

interface DescriptionProps {
  title: string;
  done: string[];
  inProgress: string[];
}
const DescriptionBox: React.FC<DescriptionProps> = ({
  title,
  done,
  inProgress,
}) => {
  return (
    <RoadmapWrapper>
      <PeriodWrapper>
        <RoadMapDot />
        <RoadmapTitle>{title}</RoadmapTitle>
      </PeriodWrapper>
      <RoadmapBoxWrapper>
        <RoadmapBox>
          <ContentWrapper>
            {done.map((doneProps: any) => {
              return (
                <RoadmapContent key={Math.random()}>
                  <CheckIcon />
                  {doneProps}
                </RoadmapContent>
              );
            })}
            {inProgress.map((inProgressProps: any) => {
              return (
                <RoadmapContent key={Math.random()}>
                  <ProgressIcon />
                  {inProgressProps}
                </RoadmapContent>
              );
            })}
          </ContentWrapper>
        </RoadmapBox>
      </RoadmapBoxWrapper>
    </RoadmapWrapper>
  );
};

interface IRoadmapProps {}

const Roadmap: React.FC<IRoadmapProps> = () => {
  const ref = useRef(null);
  const { onMouseDown, onTouchDown, touchMoveHandler } = useDraggableScroll(
    ref,
    {
      direction: "horizontal",
    }
  );
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    async function fetchRoadmapData() {
      const roadmapData = await getContentfulData("roadmap");
      return roadmapData.items;
    }
    fetchRoadmapData().then((data: any) => {
      const items = data[0].fields.roadmapData!.map((roadmapProps: any) => {
        return {
          title: roadmapProps.title,
          done: roadmapProps.done,
          inProgress: roadmapProps.inProgress,
        };
      });

      setRoadmaps(items);
    });
  }, []);

  return (
    <MainWrapper>
      <AppWrapper>
        <MainDescriptionWrapper>
          <SectionDescription>ROADMAP</SectionDescription>
          <SectionTitle>What we do and what we want to do</SectionTitle>
        </MainDescriptionWrapper>
      </AppWrapper>
      <Divider />
      <AppWrapper>
        <RoadMapWrapper>
          <RoadmapSlider
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
              {roadmaps.map((roadmap) => {
                return (
                  <DescriptionBox
                    key={Math.random()}
                    title={roadmap.title}
                    done={roadmap.done}
                    inProgress={roadmap.inProgress}
                  />
                );
              })}
            </SliderInner>
          </RoadmapSlider>
        </RoadMapWrapper>
      </AppWrapper>
    </MainWrapper>
  );
};

export default Roadmap;
