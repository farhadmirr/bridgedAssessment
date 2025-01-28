import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title; // Update the document title
  }, [title]); // Runs whenever the title changes
};

export default useTitle;