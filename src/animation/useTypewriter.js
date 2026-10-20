import { useState, useEffect } from "react";

export function useTypewriter(
  text,
  { typeSpeed = 70, deleteSpeed = 35, pauseAfterTyped = 900, pauseAfterDeleted = 500 } = {}
) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayed === text) {
      // texte complet : on attend, puis on passe en mode effacement
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
    } else if (isDeleting && displayed === "") {
      // texte vide : on attend, puis on retape
      timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleted);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(
            isDeleting
              ? text.slice(0, displayed.length - 1)
              : text.slice(0, displayed.length + 1)
          );
        },
        isDeleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text, typeSpeed, deleteSpeed, pauseAfterTyped, pauseAfterDeleted]);

  return displayed;
}