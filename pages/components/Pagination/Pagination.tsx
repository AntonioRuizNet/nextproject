//Styles
import React from "react";
import { PaginationStyled, PaginationBlock } from "./Pagination.styled";

interface Pagination {
    page: number;
    maxelements: number;
    setPage: any;
}

export const Pagination = ({ page, maxelements, setPage }: Pagination) => {
    const itemsPageVisible = maxelements / 10;
    const pageNumbers = [];
    for (let i = 0; i <= itemsPageVisible; i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationBlock>
            {pageNumbers.map((number) => (
                <a onClick={() => setPage(number)}>
                    <PaginationStyled>{number + 1}</PaginationStyled>
                </a>
            ))}
        </PaginationBlock>
    );
};
