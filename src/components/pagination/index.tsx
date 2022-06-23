import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import * as S from "./style";

interface PaginationProps {
  itemsPerPage: number,
  totalItems: number,
  currentPage?: any,
  onSelect: (event: any) => void
}

export default function PaginatedItems({ itemsPerPage, totalItems, currentPage, onSelect = () => { } }: PaginationProps) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemsPerPage]);

  const handlePageClick = (event: any) => {
    onSelect(event.selected);
  };

  return (
    <S.Pagiination>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        className="pagination"
      />
    </S.Pagiination>
  );
}