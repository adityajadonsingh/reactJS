import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
const detail = [
  {
    id: 1,
    detail: "Detail Page 1",
  },
  {
    id: 2,
    detail: "Detail Page 2",
  },
  {
    id: 3,
    detail: "Detail Page 3",
  },
  {
    id: 4,
    detail: "Detail Page 4",
  },
  {
    id: 5,
    detail: "Detail Page 5",
  },
];

const DetailPage = () => {
  const param = useParams();
  const detailPage = detail.find((data) => data.id == param.detailId);
  return (
    <>
      {detailPage ? (
        <>
          <h1>Detail Page {detailPage.id}</h1>
          <h1>Detail Content {detailPage.detail}</h1>
        </>
      )
    : <NotFound/>
    }
    </>
  );
};

export default DetailPage;
