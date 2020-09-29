import React, { useEffect } from "react"
import SEO from "../utils/seo"

const IndexPage = () => {
  // FIX FOR VH ON MOBILE
  const changeVhVariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = typeof window !== "undefined" && window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    typeof document !== "undefined" &&
      document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  // Run the function to change the VH variable when the browser is resized
  useEffect(() => {
    changeVhVariable()
    window.addEventListener("resize", changeVhVariable)
    return () => window.removeEventListener("resize", changeVhVariable)
  }, [])
  return (
    <section>
      <SEO title="Portfolio Page" />
      <h1 className="text-6xl"> Hey guys</h1>
    </section>
  )
}

export default IndexPage
