import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

const ColumnPosition = styled.div`
  margin-bottom: 10px;

  a {
    width: max-content;
    color: white;
    font-size: 18px;
    text-decoration: none;
    display: inline-block;
    transition: color 0.2s;
    &:hover {
      color: #8e48f6;
    }
  }
`;

interface FooterColumnProps {
  rows: Array<{
    title: string;
    url: string;
  }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ rows }) => {
  return (
    <Grid item xs={6} md={3}>
      {rows.map((row, index) => {
        return (
          <ColumnPosition key={index}>
            <a href={row.url}>{row.title}</a>
          </ColumnPosition>
        );
      })}
    </Grid>
  );
};

export default FooterColumn;
