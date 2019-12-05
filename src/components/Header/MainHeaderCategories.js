import React from "react";
import {
  StyledMainHeaderCategories,
  StyledMainHeaderCategoriesCenter,
  StyledMainHeaderCategoriesItem
} from "./StyledHeader";

const MainHeaderCategories = () => {
  const listItemLink = [
    {
      name: "skincare",
      link: "https://femaledaily.com/category/skincare"
    },
    {
      name: "make up",
      link: "https://femaledaily.com/category/make-up"
    },
    {
      name: "body",
      link: "https://femaledaily.com/category/body"
    },
    {
      name: "hair",
      link: "https://femaledaily.com/category/hair"
    },
    {
      name: "fragrance",
      link: "https://femaledaily.com/category/fragrance"
    },
    {
      name: "nails",
      link: "https://femaledaily.com/category/nails"
    },
    {
      name: "tools",
      link: "https://femaledaily.com/category/tools"
    },
    {
      name: "brands",
      link: "https://femaledaily.com/category/brands"
    }
  ];
  return (
    <StyledMainHeaderCategories>
      <StyledMainHeaderCategoriesCenter>
        {listItemLink.map(item => {
          return (
            <StyledMainHeaderCategoriesItem key={item.name} href={item.link}>
              {item.name}
            </StyledMainHeaderCategoriesItem>
          );
        })}
      </StyledMainHeaderCategoriesCenter>
    </StyledMainHeaderCategories>
  );
};

export default MainHeaderCategories;
