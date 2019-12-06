import React from "react";
import {
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
} from "./StyledContent";

const EditorChoiceList = ({ data }) => {
  return (
    <StyledEditorChoiceListItem>
      <StyledTasteProductEditorContainer>
        <StyledEditorCard>
          <StyledEditorImage>
            <img
              src="//static.femaledaily.com/dyn/70/images/user-pics/1470131903_lg.jpg"
              alt="avatar"
            />
          </StyledEditorImage>
          <div>
            <StyledEditorName>{data.editor}</StyledEditorName>
            <StyledEditorPosition>{data.role}</StyledEditorPosition>
          </div>
        </StyledEditorCard>
        <StyledProductCardEditor>
          <StyledProductCardEditorImageContainer href="https://reviews.femaledaily.com/products/treatment/serum-essence-23/lancome/advanced-genifique-youth-activating-concentrate?cat=&cat_id=0&age=&order=nrd&page=1">
            <StyledProductCardEditorImage
              srcSet={data.product.image}
            ></StyledProductCardEditorImage>
          </StyledProductCardEditorImageContainer>
          <StyledProductCardEditorDetail>
            <StyledProductCardEditorRating>
              <StyledProductCardEditorRatingAverage>
                {data.product.rating}
              </StyledProductCardEditorRatingAverage>
              <StyledCardStarList>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
              </StyledCardStarList>
              <StyledProductCardEditorRatingTotal>
                (542)
              </StyledProductCardEditorRatingTotal>
            </StyledProductCardEditorRating>
            <StyledProductCardEditorBrand>
              {data.product.name}
            </StyledProductCardEditorBrand>
            <StyledProductCardEditorTitle>
              {data.product.description}
            </StyledProductCardEditorTitle>
          </StyledProductCardEditorDetail>
        </StyledProductCardEditor>
      </StyledTasteProductEditorContainer>
    </StyledEditorChoiceListItem>
  );
};

export default EditorChoiceList;
