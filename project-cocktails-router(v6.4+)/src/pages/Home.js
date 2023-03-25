import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
  const { cocktails, dyUrl } = useLoaderData();

  return (
    <main>
      <SearchForm />
      <Suspense fallback={<Loading />}>
        <Await resolve={cocktails}>{(loadedCocktails) => <CocktailList cocktails={loadedCocktails} />}</Await>
      </Suspense>
    </main>
  );
};

async function loadCocktails(request) {
  const searchParams = new URL(request.url).searchParams;
  const search = searchParams.get("searchTerm") || "a";
  const response = await fetch(`${url}${search}`);
  if (!response.ok) {
    throw json({ message: "서버와의 연결이 끊겼습니다,,," });
  } else {
    const data = await response.json();
    const { drinks } = data;
    return drinks;
  }
}

export function loader({ request, params }) {
  return defer({
    cocktails: loadCocktails(request),
  });
}

export default Home;
