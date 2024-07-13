import './Spinner.css'
function Spinner(){
    return(
        <div className='flex flex-col gap-4 justify-center items-center my-[120px]'>
            <div className="spinner"></div>
            <h1 className='font-bold text-4xl text-white'>LOADING...</h1>
        </div>
    )
}
export default Spinner;