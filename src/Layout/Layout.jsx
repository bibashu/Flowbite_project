import React from 'react'

import Header from '../components/Header';
import Side from '../components/Side';
import { useState } from "react";

export default function Layout({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
  <>
     <Side  isOpen={isOpen} handleClose={handleClose} />
     <Header  setIsOpen={setIsOpen} />
     {children}
  </>
  )
}
