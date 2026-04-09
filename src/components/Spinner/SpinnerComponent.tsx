import "./SpinnerComponent.css";
export const SpinnerComponent = ({text}: {text?:string}) => {
  return (
    <div className="spinner-container">
      <span className="loader"></span>
      {text}
    </div>
  )
}