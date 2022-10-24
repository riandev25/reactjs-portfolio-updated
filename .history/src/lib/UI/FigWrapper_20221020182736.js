const FigWrapper = ({ children }, caption) => {
  return (
    <figure className="flex flex-row">
      {children}
      <figcaption className="text-base">{caption}</figcaption>
    </figure>
  )
}

export default FigWrapper
