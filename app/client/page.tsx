"use client";

import React from "react";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export default function StaticPage() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h1>Static Page</h1>
      <p>{data.content}</p>
      <p>Author: {data.author}</p>
    </div>
  );
}
