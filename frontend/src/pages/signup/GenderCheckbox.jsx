const GenderCheckbox = () => {
  return (
    <div className="flex p-2">
        <div className="form-control gap-2">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900"/>
            </label>
        </div>
        <div className="form-control ml-4">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900"/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox