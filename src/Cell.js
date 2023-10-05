
function Cell({setGridCell,symbol}) {
  return(
      <div className={`cell`} onClick={()=>setGridCell()}>
          {symbol}
      </div>
  );
}
export default Cell;
