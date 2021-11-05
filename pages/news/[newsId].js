import React from "react";
import { useRouter } from "next/router";

export default function details() {
  const router = useRouter();

  const newsId = router.query.newsId;

  console.log(newsId);

  return (
    <div>
      <h1>This is the Details Page</h1>
    </div>
  );
}
