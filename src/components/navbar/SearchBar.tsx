import React, { useEffect, useState } from "react";
import useFetch from "../../api/hooks/useFetch";
import { Traits } from "../../models/models";
import styles from "../../styles/Navbar.module.css";
import TraitSearchResult from "./TraitSearchResult";

function SearchBar(props: any) {
  const [traits, setTraits] = useState<Traits[] | []>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>(null);
  const [traitsSearchResults, setTraitsSearchResults] = useState<Traits[] | []>(
    []
  );
  const traitsResult = useFetch({
    url: `https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app/traits`,
  }); ///fetching

  useEffect(() => {
    if (traitsResult.result) {
      setTraits(traitsResult.result);
    }
  }, [traitsResult]); ///setting fetched

  function handleSearch(query: string) {
    setSearch(query);
    let resultArray = [];
    for (let i = 0; i < traits.length; i++) {
      if (traits[i].name.toLowerCase().includes(query.toLowerCase())) {
        resultArray.push(traits[i]);
      }
    }

    setTraitsSearchResults(resultArray);
  } ///filtering

  useEffect(() => {
    if (search && search?.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
      setTraitsSearchResults([]);
    }
  }, [search]); ///for mobile and resetting results

  return (
    <div
      className={
        isSearching === true
          ? styles.searchInputDivSearching
          : styles.searchInputDiv
      }
    >
      {/* <span className={styles.searchIconDiv}>
          <SearchIcon />
        </span> */}
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className={styles.searchInput}
        placeholder="Search traits"
      />
      {traitsSearchResults.length > 0 ? (
        <div className={styles.traitsParentDiv}>
          <p className={styles.traitsTitle}>Traits</p>
          <div className={styles.traitsSearchResultsDiv}>
            {traitsSearchResults.map((trait) => {
              return (
                <TraitSearchResult
                  key={trait.name}
                  name={trait.name}
                  score={trait.score}
                  colorHexCodes={trait.colorHexCodes}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;