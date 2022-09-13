export default function Navbar({page,setPage}){

	const handleClickNext = (e) => {
		setPage(page + 1)
	}

	const handleClickPrev = (e) => {
		setPage(page - 1)
	}

	return(
		<div className="d-flex justify-content-between align-items-center mb-2">
			<p className="h5">Page: {page}</p>
			<div className="btn-group" role="group">
				{page > 1 ? <button onClick={handleClickPrev} className="btn btn-dark btn-sm">Pevious Page ({page - 1})</button> : null}
				{page < 42 ? <button onClick={handleClickNext} className="btn btn-info btn-sm">Next Page ({page + 1})</button> : null}
			</div>
		</div>
	)
}