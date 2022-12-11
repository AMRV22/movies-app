import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import debounce from "./../../utils/functions/debounce";
import useQuery from "./../../utils/hook/useQuery";
import * as S from "./styles";

type PaginationProps = {
  total: number;
};

const Pagination = ({ total }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [render, setRender] = useState(true);
  const [_, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = useQuery();

  const setPage = useCallback(
    (page: number) => {
      let auxParams = "";

      const extraParams = location.search.replace("?", "&").split("&");

      extraParams.forEach((param) => {
        if (param.trim().length > 0 && param.search("_page")) {
          auxParams += "&" + param;
        }
      });

      const params = new URLSearchParams({
        _page: page.toString(),
      });
      setSearchParams(params.toString() + auxParams);
      setCurrentPage(page);
    },
    [location]
  );

  const nextPage = useCallback(
    (offset: number) => {
      setPage(offset);
    },
    [setPage]
  );

  const nextPageDebounce = debounce(nextPage, 100);

  const pageLinks = useMemo(() => {
    const helper = [];
    for (let i = 1; i <= total; i++) {
      let active = currentPage === i ? "active" : "";
      helper.push(
        <S.PageLinks
          className={active}
          key={Math.random() * i}
          onClick={() => nextPageDebounce(i)}
        >
          <p>{i}</p>
        </S.PageLinks>
      );
    }

    return helper;
  }, [currentPage, total, nextPageDebounce, total]);

  const activePageLinks = useMemo(() => {
    const helper: JSX.Element[] = [];
    if (
      currentPage < pageLinks.length - 10 &&
      currentPage >= 1 &&
      currentPage < 10
    ) {
      pageLinks.some((item, index) => {
        helper.push(item);
        return index === 9;
      });
      helper.push(
        <S.PageLinks key='...'>
          <p>...</p>
        </S.PageLinks>
      );
      helper.push(pageLinks[pageLinks.length - 1]);
    } else if (currentPage >= pageLinks.length - 10) {
      if (pageLinks.length > 10) {
        helper.push(pageLinks[0]);
        helper.push(
          <S.PageLinks key='...'>
            <p>...</p>
          </S.PageLinks>
        );
      }
      for (let i = pageLinks.length - 10; i <= pageLinks.length; i++) {
        helper.push(pageLinks[i]);
      }
    } else {
      if (currentPage >= 10) {
        helper.push(pageLinks[0]);
        helper.push(
          <S.PageLinks key='...2'>
            <p>...</p>
          </S.PageLinks>
        );
      }
      for (let i = currentPage - 1; i <= currentPage + 9; i++) {
        helper.push(pageLinks[i]);
      }
      helper.push(
        <S.PageLinks key='...'>
          <p>...</p>
        </S.PageLinks>
      );
      helper.push(pageLinks[pageLinks.length - 1]);
    }
    return helper;
  }, [currentPage, pageLinks]);

  useEffect(() => {
    if (render) {
      const _page = query.get("_page");
      if (_page) {
        setCurrentPage(parseInt(_page));
      } else {
        setPage(1);
      }
    }
  }, [query, render, setPage]);

  useEffect(() => {
    setRender(false);
  }, []);

  return (
    <S.PaginationContainer>
      <ul>
        {currentPage > 1 && (
          <S.PageLinks
            onClick={() =>
              nextPageDebounce(currentPage > 2 ? currentPage - 1 : 1)
            }
          >
            <p>Prev</p>
          </S.PageLinks>
        )}
        {activePageLinks}
        {currentPage < total && (
          <S.PageLinks onClick={() => nextPageDebounce(currentPage + 1)}>
            <p>Next</p>
          </S.PageLinks>
        )}
      </ul>
    </S.PaginationContainer>
  );
};

export default Pagination;
