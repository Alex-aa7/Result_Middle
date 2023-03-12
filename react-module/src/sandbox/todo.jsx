export const Todo =({listStrings=[]})=> {
    return (
        <div>
            <ul>
                {listStrings.map((value)=>(
                    <li>{value}</li>
                ))}
            </ul>
        </div>
    )
}