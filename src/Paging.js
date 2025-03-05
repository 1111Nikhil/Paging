const Paging = ({ pageno, setPageno, totalpages }) => {
  const Handelpage = (n) => {
    setPageno(n);
  };
  const Handelprev = () => {
    setPageno((prev) => prev - 1);
  };
  const Handelnext = () => {
    setPageno((prev) => prev + 1);
  };
  return (
    <div>
      <button disabled={pageno === 0} onClick={() => Handelprev()}>
        Prev
      </button>
      {[
        ...Array(totalpages)
          .keys()
          .map((n) => (
            <div key={n} className="Pageno">
              <button onClick={() => Handelpage(n)}>{n + 1}</button>
            </div>
          )),
      ]}
      <button disabled={pageno === totalpages - 1} onClick={() => Handelnext()}>
        {" "}
        Next{" "}
      </button>
    </div>
  );
};

export default Paging;
