import styled, { css } from "styled-components";

// file HomeContentSection1.js
const StyledHomeContentSection1 = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

const CssBanner = css`
  width: 970px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    color: #fff;
    margin: 0;
  }
`;

const StyledBannerTop = styled.div`
  ${CssBanner};
  margin: 0 auto;
  height: 50px;
`;
const StyledBillboardBanner = styled.div`
  ${CssBanner};
  margin: 20px auto;
  height: 250px;
`;
const StyledTitleSection = styled.h2`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  margin: 50px 0 0 0;
`;
const StyledTitleSectionChild = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #9b9b9b;
  margin: 10px 0 30px 0;
`;
const StyledEditorChoiceList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 60px 0;
  width: 100%;
  flex-flow: wrap;
`;
const StyledEditorChoiceListItem = styled.div``;
const StyledTasteProductEditorContainer = styled.div`
  background-color: #fff;
  width: 100%;
  word-break: break-word;
`;
const StyledEditorCard = styled.div`
  display: flex;
  flex-flow: row;
  margin: 0 0 -15px 16px;
  z-index: 1;
`;
const StyledEditorImage = styled.a`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  margin: 0 12px 0 0;
  border: 0.5px solid #e0e0e0;
  background: #fff;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const StyledEditorName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
  margin: 3px 0 0 0;
`;
const StyledEditorPosition = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #9b9b9b;
  margin: 5px 0 0 0;
`;
const StyledProductCardEditor = styled.div`
  width: 168px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  word-break: break-word;
  display: flex;
  flex-flow: column;
  min-height: 351px;
`;
const StyledProductCardEditorImageContainer = styled.a`
  width: 140px;
  height: 177px;
  flex-shrink: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  flex-shrink: 0;
  margin: 0 auto;
`;
const StyledProductCardEditorImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const StyledProductCardEditorDetail = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
`;
const StyledProductCardEditorRating = styled.div`
  padding-top: 12px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: baseline;
  margin: 0;
`;
const StyledProductCardEditorRatingAverage = styled.span`
  font-size: 14px;
  color: #000000;
  margin-right: 10px;
  font-weight: bold;
`;
const StyledCardStarList = styled.span`
  display: flex;
`;
const StyledCardStarListItem = styled.div`
  margin-right: 2px;
  &::before {
    color: #db284e;
    content: "\\2605";
  }
`;
const StyledProductCardEditorRatingTotal = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #000;
`;
const StyledProductCardEditorBrand = styled.a`
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  margin: 15px 0 0 0;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const StyledProductCardEditorTitle = styled.a`
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  margin: 5px 0 0 0;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export {
  StyledHomeContentSection1,
  StyledBannerTop,
  StyledBillboardBanner,
  StyledTitleSection,
  StyledTitleSectionChild,
  StyledEditorChoiceList,
  StyledEditorChoiceListItem,
  StyledTasteProductEditorContainer,
  StyledEditorCard,
  StyledEditorImage,
  StyledEditorName,
  StyledEditorPosition,
  StyledProductCardEditor,
  StyledProductCardEditorImageContainer,
  StyledProductCardEditorImage,
  StyledProductCardEditorDetail,
  StyledProductCardEditorRating,
  StyledProductCardEditorRatingAverage,
  StyledCardStarList,
  StyledCardStarListItem,
  StyledProductCardEditorRatingTotal,
  StyledProductCardEditorBrand,
  StyledProductCardEditorTitle
};
