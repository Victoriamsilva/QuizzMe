import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import * as S from "./style";

interface PaginationProps {
  itemsPerPage: number,
  totalItems: number,
  currentPage?: any,
  onSelect?: (indexOfFirstItem: number, indexOfLastItem: number) => void
}

export default function PaginatedItems({ itemsPerPage, totalItems, onSelect = (a, b) => { } }: PaginationProps) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemsPerPage]);

  const handlePageClick = (event: any) => {
    console.log(event.selected)
    const indexOfLastItem = (event.selected + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    onSelect(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <S.Pagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        className="pagination"
      />
    </S.Pagination>
  );
}