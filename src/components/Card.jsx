function Card({title, text}) {
  return <div className="card">
      {title ? <h4 className="card-title">{title}</h4> : null}
      {text ? <p className="card-text">{text}</p> : null}
      <button type="button" className="btn btn-primary">Go somewhere</button>
    </div>
}

export default Card;