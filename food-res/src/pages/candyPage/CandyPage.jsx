import { useEffect } from "react";

const CandyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>CandyPage</div>
  )
};

export default CandyPage;
