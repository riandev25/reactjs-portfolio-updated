const FigWrapper = ({ children, caption }) => {
  return (
    <figure className="flex flex-col justify-center items-center">
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default FigWrapper
