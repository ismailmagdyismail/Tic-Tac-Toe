
function Cell({setGridCell,symbol,active}) {
  return(
      <div className={`cell ${active ? 'active':''}`} onClick={()=>setGridCell()}>
          {symbol}
      </div>
  );
}
export default Cell;
