const Pagination = ({ prev, next, onPrevious, onNext }) => {

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev && <li className="page-item">
          <button className="page-link" onClick={onPrevious}>Previous</button>
        </li>}
        {next && <li className="page-item">
          <button className="page-link" onClick={onNext}>Next</button>
        </li>}
      </ul>
    </nav>
  );
}

export default Pagination;