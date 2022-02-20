import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { SearchREsults } from "../components/SerachResults";
import { api } from "../services/api";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }
    const response = await api.get("products", {
      params: {
        q: search,
      },
    });
    setSearchResults(response.data);
  }
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button type="submit">Pesquisar</button>
      </form>
      <SearchREsults results={searchResults} />
    </div>
  );
}
