"use client";
import { useEffect, useState } from "react";

interface CLientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<CLientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div>{children}</div>;
};

export default ClientOnly;
