const CardList = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-1 space-y-4 md:grid-cols-3 md:gap-2 xl:gap-3">
      {children}
    </div>
  )
}

export default CardList
