function MyRecipesComponent({label, image}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="dish"/>
            </div>
        </div>
    )
}
export default MyRecipesComponent;